import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// https://adventofcode.com/2021/leaderboard/private/view/1478556.json


function Leaderboard({ scores }) {

   const scroller = () => {
      const objDiv = document.querySelector('.score_area');
      if (objDiv !== null) {
         if (objDiv.scrollTop < (objDiv.scrollHeight - objDiv.clientHeight)) {
            objDiv.scrollTop++;
         } else {
            objDiv.scrollTop = 0;
         }
      }
   }

   useEffect(() => {
      setInterval(() => {
         scroller();
      }, 30);
   }, []);

   if (! Array.isArray(scores)) {
      return(<div/>)
   }
   return (
      <div className="score_area">
         <div className="score">&nbsp;</div>
         <div className="score">&nbsp;</div>
         <div className="score">&nbsp;</div>
         {
            scores.map((value, i) => {
               return (<div className="score"><span style={{ display: "inline-block", width: "4em", textAlign: "right" }}>{value.local_score}</span> {value.name}</div>)
            })
         }
         <div className="score">&nbsp;</div>
         <div className="score">&nbsp;</div>
         <div className="score">&nbsp;</div>
      </div>
   )
}

const demo = {
   "owner_id": "1219353",
   "members": {
      "1229400": {
         "local_score": 7,
         "stars": 3,
         "id": "1229400",
         "global_score": 0,
         "last_star_ts": 1607434177,
         "completion_day_level": {
            "2": {
               "1": {
                  "get_star_ts": 1607434177
               }
            },
            "1": {
               "1": {
                  "get_star_ts": 1607425472
               },
               "2": {
                  "get_star_ts": 1607425600
               }
            }
         },
         "name": "haydenso"
      },
      "1105168": {
         "name": "CAG2Mark",
         "completion_day_level": {
            "2": {
               "2": {
                  "get_star_ts": 1607414404
               },
               "1": {
                  "get_star_ts": 1607414247
               }
            },
            "7": {
               "2": {
                  "get_star_ts": 1607411170
               },
               "1": {
                  "get_star_ts": 1607405470
               }
            },
            "5": {
               "1": {
                  "get_star_ts": 1607419917
               },
               "2": {
                  "get_star_ts": 1607420115
               }
            },
            "6": {
               "2": {
                  "get_star_ts": 1607421498
               },
               "1": {
                  "get_star_ts": 1607420658
               }
            },
            "13": {
               "1": {
                  "get_star_ts": 1607838712
               },
               "2": {
                  "get_star_ts": 1607844273
               }
            },
            "9": {
               "2": {
                  "get_star_ts": 1607493266
               },
               "1": {
                  "get_star_ts": 1607490685
               }
            },
            "17": {
               "1": {
                  "get_star_ts": 1608185607
               },
               "2": {
                  "get_star_ts": 1608190756
               }
            },
            "16": {
               "2": {
                  "get_star_ts": 1608101242
               },
               "1": {
                  "get_star_ts": 1608095992
               }
            },
            "4": {
               "2": {
                  "get_star_ts": 1607418902
               },
               "1": {
                  "get_star_ts": 1607417375
               }
            },
            "1": {
               "1": {
                  "get_star_ts": 1607422080
               },
               "2": {
                  "get_star_ts": 1607422607
               }
            },
            "14": {
               "1": {
                  "get_star_ts": 1607923133
               },
               "2": {
                  "get_star_ts": 1607925108
               }
            },
            "10": {
               "1": {
                  "get_star_ts": 1607576804
               },
               "2": {
                  "get_star_ts": 1607580268
               }
            },
            "15": {
               "2": {
                  "get_star_ts": 1608012331
               },
               "1": {
                  "get_star_ts": 1608011279
               }
            },
            "3": {
               "2": {
                  "get_star_ts": 1607415476
               },
               "1": {
                  "get_star_ts": 1607415232
               }
            },
            "18": {
               "1": {
                  "get_star_ts": 1608268429
               },
               "2": {
                  "get_star_ts": 1608270498
               }
            },
            "12": {
               "1": {
                  "get_star_ts": 1607749799
               },
               "2": {
                  "get_star_ts": 1607751275
               }
            },
            "11": {
               "1": {
                  "get_star_ts": 1607665202
               },
               "2": {
                  "get_star_ts": 1607666988
               }
            },
            "19": {
               "1": {
                  "get_star_ts": 1608359884
               }
            },
            "8": {
               "2": {
                  "get_star_ts": 1607413004
               },
               "1": {
                  "get_star_ts": 1607408329
               }
            }
         },
         "local_score": 305,
         "stars": 37,
         "global_score": 0,
         "id": "1105168",
         "last_star_ts": 1608359884
      },
      "1230954": {
         "completion_day_level": {
            "1": {
               "1": {
                  "get_star_ts": 1607412432
               },
               "2": {
                  "get_star_ts": 1607412691
               }
            }
         },
         "name": "Connor COVENTRY",
         "local_score": 0,
         "stars": 2,
         "id": "1230954",
         "global_score": 0,
         "last_star_ts": 1607412691
      },
      "1242662": {
         "stars": 0,
         "id": "1242662",
         "global_score": 0,
         "last_star_ts": "0",
         "local_score": 0,
         "name": "Gordon ZHANG",
         "completion_day_level": {}
      },
      "1229426": {
         "local_score": 0,
         "last_star_ts": "0",
         "stars": 0,
         "id": "1229426",
         "global_score": 0,
         "completion_day_level": {},
         "name": "Kiran BALASUNDARAMKUPPURAJ"
      },
      "1219353": {
         "completion_day_level": {
            "7": {
               "1": {
                  "get_star_ts": 1607415810
               },
               "2": {
                  "get_star_ts": 1607418050
               }
            },
            "2": {
               "2": {
                  "get_star_ts": 1607347610
               },
               "1": {
                  "get_star_ts": 1607347119
               }
            },
            "9": {
               "2": {
                  "get_star_ts": 1607498220
               },
               "1": {
                  "get_star_ts": 1607493849
               }
            },
            "6": {
               "2": {
                  "get_star_ts": 1607413672
               },
               "1": {
                  "get_star_ts": 1607412383
               }
            },
            "13": {
               "1": {
                  "get_star_ts": 1607838876
               },
               "2": {
                  "get_star_ts": 1607857484
               }
            },
            "5": {
               "2": {
                  "get_star_ts": 1607408028
               },
               "1": {
                  "get_star_ts": 1607407834
               }
            },
            "4": {
               "1": {
                  "get_star_ts": 1607355413
               },
               "2": {
                  "get_star_ts": 1607356597
               }
            },
            "14": {
               "2": {
                  "get_star_ts": 1608032080
               },
               "1": {
                  "get_star_ts": 1607960062
               }
            },
            "1": {
               "1": {
                  "get_star_ts": 1607346443
               },
               "2": {
                  "get_star_ts": 1607346561
               }
            },
            "10": {
               "2": {
                  "get_star_ts": 1607607711
               },
               "1": {
                  "get_star_ts": 1607602755
               }
            },
            "18": {
               "1": {
                  "get_star_ts": 1608302059
               },
               "2": {
                  "get_star_ts": 1608302656
               }
            },
            "3": {
               "2": {
                  "get_star_ts": 1607348427
               },
               "1": {
                  "get_star_ts": 1607348130
               }
            },
            "15": {
               "2": {
                  "get_star_ts": 1608045415
               },
               "1": {
                  "get_star_ts": 1608043099
               }
            },
            "11": {
               "1": {
                  "get_star_ts": 1607678080
               },
               "2": {
                  "get_star_ts": 1607679181
               }
            },
            "12": {
               "1": {
                  "get_star_ts": 1607752773
               },
               "2": {
                  "get_star_ts": 1607753728
               }
            },
            "8": {
               "1": {
                  "get_star_ts": 1607419296
               },
               "2": {
                  "get_star_ts": 1607420426
               }
            }
         },
         "name": "Paul Baumgarten",
         "last_star_ts": 1608302656,
         "stars": 32,
         "global_score": 0,
         "id": "1219353",
         "local_score": 250
      },
      "1289003": {
         "completion_day_level": {
            "1": {
               "1": {
                  "get_star_ts": 1607931898
               },
               "2": {
                  "get_star_ts": 1607952422
               }
            },
            "2": {
               "2": {
                  "get_star_ts": 1607956029
               },
               "1": {
                  "get_star_ts": 1607954910
               }
            }
         },
         "name": "Hoi Man NG",
         "last_star_ts": 1607956029,
         "stars": 4,
         "global_score": 0,
         "id": "1289003",
         "local_score": 12
      },
      "1320638": {
         "completion_day_level": {},
         "name": "Andy LIM",
         "last_star_ts": "0",
         "stars": 0,
         "global_score": 0,
         "id": "1320638",
         "local_score": 0
      },
      "1253400": {
         "local_score": 6,
         "stars": 3,
         "id": "1253400",
         "global_score": 0,
         "last_star_ts": 1607656610,
         "completion_day_level": {
            "2": {
               "1": {
                  "get_star_ts": 1607656610
               }
            },
            "1": {
               "2": {
                  "get_star_ts": 1607562568
               },
               "1": {
                  "get_star_ts": 1607561870
               }
            }
         },
         "name": "Samuel NG"
      }
   },
   "event": "2020"
}

function App() {
   const [reload, setReload] = useState(0);
   const [data, setData] = useState({});

   useEffect(()=>{
      let reload = new Date().toISOString();
      axios.get("/adventofcode.json?reload="+reload).then(reply=>{
         if (reply.status===200) {
            if ("members" in reply.data) {
               console.log("Reloaded JSON data",reload)
               const data2 = Object.entries(reply.data.members).map(([key, value]) => { return value });
               const data3 = data2.sort((a, b) => { return (b.local_score - a.local_score) })
               setData(data3);
            }
         }
      })
   }, [reload]);

   useEffect(() => {
      setInterval(() => {
         setReload( reload+1 );
      }, 10*1000); // Once per hour
   }, []);



   return (
      <div className="App">
         <div>
            <h1>Advent of code</h1>
            <h2>STC leaderboard 2021</h2>
         </div>
         <Leaderboard scores={data} />
      </div>
   );
}

export default App;
