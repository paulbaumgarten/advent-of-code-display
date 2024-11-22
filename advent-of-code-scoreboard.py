import pygame
import requests
import json
import time

# Constants
LEADERBOARD_ID = '-- your leaderbaord id --'
SESSION_COOKIE = '-- your session cookie --'
YEAR = '2024'

URL = f"https://adventofcode.com/{YEAR}/leaderboard/private/view/{LEADERBOARD_ID}.json"
TITLE_TEXT = f'Advent of Code {YEAR}'

# Fetch data from Advent of Code
def fetch_data():
    headers = {'Cookie': f'session={SESSION_COOKIE}'}
    response = requests.get(URL, headers=headers)
    return response.json()
    #with open("aoc.json", "r", encoding="utf-8") as f:
    #    return json.loads(f.read())

# Initialize Pygame
pygame.init()
info_object = pygame.display.Info()
screen_width, screen_height = info_object.current_w, info_object.current_h
screen = pygame.display.set_mode((screen_width, screen_height), pygame.FULLSCREEN)
pygame.display.set_caption('Advent of Code 2024 Leaderboard')

# Colors and fonts
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 204, 0)
GREEN2 = (0, 153, 0)
FONT_SIZE = 60
font = pygame.font.SysFont("Consolas", FONT_SIZE)
font_title = pygame.font.SysFont("Consolas", FONT_SIZE)

# Timing for updates
last_update_time = time.time()
update_interval = 3600  # once per hour

# Load and resize the star images
image_gold = pygame.image.load('star-gold.png')
image_silver = pygame.image.load('star-silver.png')
star_width = (screen_width // 25) - 10
aspect_ratio = image_gold.get_height() / image_gold.get_width()
star_height = int(star_width * aspect_ratio)
GOLD_STAR = pygame.transform.scale(image_gold, (star_width, star_height))
SILVER_STAR = pygame.transform.scale(image_silver, (star_width, star_height))

# Fetch and parse data
data = fetch_data()
members = data['members'].values()
sorted_members = [
    member for member in members if member['local_score'] > 0
]
sorted_members.sort(key=lambda x: x['local_score'], reverse=True)  # top 10 participants

# Scrolling setup
scroll_y = 0
entry_height = 100  # Adjusted for two rows per entry

# Main loop
running = True
while running:
    
    # Event handler
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                running = False

    # Check if we need new updates
    current_time = time.time()
    if current_time - last_update_time >= update_interval:
        # Fetch new data every hour
        data = fetch_data()
        members = data['members'].values()
        sorted_members = [
            member for member in members if member['local_score'] > 0
        ]
        sorted_members.sort(key=lambda x: x['local_score'], reverse=True)
        last_update_time = current_time
    
    # Clear screen
    screen.fill(BLACK)
    
    # Display participants data
    start_y = screen_height
    row_height = 70
    for index, member in enumerate(sorted_members):
        y = start_y + index * entry_height * 2 - scroll_y

        # Participant name and score
        name_text = f"{member['name'] or 'Anonymous'}"
        name_label = font.render(name_text, True, WHITE)
        screen.blit(name_label, (20, y))
        score_text = f"{member['local_score']}"
        score_label = font.render(score_text, True, GREEN2)
        screen.blit(score_label, (font.size(name_text)[0]+50, y))

        # Star icons
        stars = member['completion_day_level']
        for i in range(1,26):
            if str(i) in stars.keys():
                star_x = 20 + (i-1) * (star_width + 5)
                star_y = y + FONT_SIZE + 10
                if "2" in stars[str(i)].keys():
                    screen.blit(GOLD_STAR, (star_x, star_y))
                else:
                    screen.blit(SILVER_STAR, (star_x, star_y))
    
    # Title
    title_size = font.size(TITLE_TEXT)
    title_rect = pygame.Rect(0, 0, screen_width, title_size[1] + 30)  # Padding of 10 pixels
    pygame.draw.rect(screen, BLACK, title_rect)
    title = font_title.render(TITLE_TEXT, True, GREEN)
    screen.blit(title, (20, 20))
    
    # Scrolling
    scroll_y += 1
    if scroll_y > (entry_height * 2 * len(sorted_members)) + screen_height:
        scroll_y = 0
        
    # End of main loop
    pygame.display.flip()
pygame.quit()