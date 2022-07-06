var groupA = (localStorage.getItem(`groupA`) != null)? JSON.parse(localStorage.getItem(`groupA`)) : group
var groupB = (localStorage.getItem(`groupB`) != null)? JSON.parse(localStorage.getItem(`groupB`)) : group

var playoffsMatchups = {
    name: 'playoffs',

    quarterFinals: [
        {                     
            id: 'POQF_M1',
            team1: '',
            team2: '',
            winner: "",
            loser: ""
        },
        {
            id: 'POQF_M2',
            team1: '',
            team2: '',
            winner: "",
            loser: ""
        }
    ],
    semiFinals: [
        {                     
            id: 'POSF_M1',
            team1: '',
            team2: '',
            winner: "",
            loser: ""
        },
        {
            id: 'POSF_M2',
            team1: '',
            team2: '',
            winner: "",
            loser: ""
        }
    ],
    final: [
        {                     
            id: 'POF_M1',
            team1: '',
            team2: '',
            winner: "",
            loser: ""
        },
    ],

}

setSeeds()
function setSeeds() {
    let stageSelected = document.querySelector('input[name="stage"]:checked').value

    if(stageSelected == 'groupA') {
        seed = [
            "NaVi",
            "Mouz",
            "NIP",
            "HEROIC",
            "G2",
            "Mov. Riders",
            "ENCE",
            "Vitality"
        ]




    } else if(stageSelected == 'groupB') {
        seed = [
            "FAZE",
            "00Nation",
            "Liquid",
            "Spirit",
            "Cloud9",
            "Outsiders",
            "Furia",
            "Astralis"
        ]
        


    } else if(stageSelected == 'playoffs') {

        
        group.name = stageSelected

        group.name = 'playoffs'
        groupA = (localStorage.getItem(`groupA`) != null)? JSON.parse(localStorage.getItem(`groupA`)) : groupA
        groupB = (localStorage.getItem(`groupB`) != null)? JSON.parse(localStorage.getItem(`groupB`)) : groupB



        if(groupB == undefined)
            groupB = group
        else if(groupA == undefined)
            groupA = group

        let team1QF1 = (groupA.LowerBracket.LowerFinal[0].winner != undefined)? groupA.LowerBracket.LowerFinal[0].winner: ''
        let team2QF1 = (groupB.UpperBracket.UpperFinal[0].loser != undefined)? groupB.UpperBracket.UpperFinal[0].loser: ''
        let team1QF2 = (groupB.LowerBracket.LowerFinal[0].winner != undefined) ? groupB.LowerBracket.LowerFinal[0].winner: ''
        let team2QF2 = (groupA.UpperBracket.UpperFinal[0].loser != undefined) ? groupA.UpperBracket.UpperFinal[0].loser: ''
        let team1SF1 = (groupA.UpperBracket.UpperFinal[0].winner != undefined) ? groupA.UpperBracket.UpperFinal[0].winner: ''
        let team1SF2 = (groupB.UpperBracket.UpperFinal[0].winner != undefined) ? groupB.UpperBracket.UpperFinal[0].winner: ''

        playoffsMatchups = {
            name: stageSelected,

            quarterFinals: [
                {                     
                    id: 'POQF_M1',
                    team1: team1QF1,
                    team2: team2QF1,
                    winner: "",
                    loser: ""
                },
                {
                    id: 'POQF_M2',
                    team1: team1QF2,
                    team2: team2QF2,
                    winner: "",
                    loser: ""
                }
            ],
            semiFinals: [
                {                     
                    id: 'POSF_M1',
                    team1: team1SF1,
                    team2: '',
                    winner: "",
                    loser: ""
                },
                {
                    id: 'POSF_M2',
                    team1: team1SF2,
                    team2: '',
                    winner: "",
                    loser: ""
                }
            ],
            final: [
                {                     
                    id: 'POF_M1',
                    team1: '',
                    team2: '',
                    winner: "",
                    loser: ""
                },
            ],

        }

        
        
        let localStoragePlayoffs = JSON.parse(localStorage.getItem('playoffs'))

        // console.log(localStoragePlayoffs)

        if(localStoragePlayoffs != null) {
            if(localStoragePlayoffs.quarterFinals != undefined) {
                playoffsMatchups = localStoragePlayoffs
                group = playoffsMatchups

            }
        }

        createSchedule(playoffsMatchups)



    }
        group = {
            name: stageSelected,
            UpperBracket: {
                UpperOpeningRound: [
                    {
                        id: 'UPOR_M1', //UPOR = Upper Opening Round Match1
                        team1: seed[0],
                        team2: seed[1],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M2',
                        team1: seed[2],
                        team2: seed[3],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M3',
                        team1: seed[4],
                        team2: seed[5],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M4',
                        team1: seed[6],
                        team2: seed[7],
                        winner: "",
                        loser: ""
                    }
                ],
                
                UpperSemiFinals: [
                    {
                        id: 'UPSF_M1',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPSF_M2',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    }
        
                ],
        
                UpperFinal: [
                    {
                        id: 'UPF_M1',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    }
                ]
        
        
            },
        
            LowerBracket: {
                LowerRound1: [
                    {
                        id: 'LBR1_M1',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'LBR1_M2',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    }
                ],
        
                LowerSemiFinals: [
                    {
                        id: 'LBSF_M1',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'LBSF_M2',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    }
                ],
        
                LowerFinal: [
                    {
                        id: 'LBF_M1',
                        team1: "",
                        team2: "",
                        winner: "",
                        loser: ""
                    }
                ]
            }
        
        }

    stageSelected = document.querySelector('input[name="stage"]:checked').value

    if(stageSelected != 'playoffs') {
        if(localStorage.length > 0 && localStorage.getItem(`${stageSelected}`) != undefined) {

            
            group = JSON.parse(localStorage.getItem(`${stageSelected}`))
        
            createSchedule(JSON.parse(localStorage.getItem(`${stageSelected}`)))
        } else {
            
            localStorage.setItem(`${stageSelected}`, JSON.stringify(group))
            createSchedule(group)

        }
    }
}

var seed = [
    "NaVi",
    "Mouz",
    "NIP",
    "HEROIC",
    "G2",
    "Mov. Riders",
    "ENCE",
    "Vitality"
]


var groupRank = {
    first: "",
    second: "",
    third: ""
}

const mapas = [
    'Inferno', 
    'Mirage', 
    'Dust2', 
    'Overpass', 
    'Nuke', 
    'Vertigo', 
    'Ancient'
]


var group = {
    name: document.querySelector('input[name="stage"]:checked').value,
    UpperBracket: {
        UpperOpeningRound: [
            {
                id: 'UPOR_M1', //UPOR = Upper Opening Round Match1
                team1: seed[0],
                team2: seed[1],
                winner: "",
                loser: ""
            },
            {
                id: 'UPOR_M2',
                team1: seed[2],
                team2: seed[3],
                winner: "",
                loser: ""
            },
            {
                id: 'UPOR_M3',
                team1: seed[4],
                team2: seed[5],
                winner: "",
                loser: ""
            },
            {
                id: 'UPOR_M4',
                team1: seed[6],
                team2: seed[7],
                winner: "",
                loser: ""
            }
        ],
        
        UpperSemiFinals: [
            {
                id: 'UPSF_M1',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            },
            {
                id: 'UPSF_M2',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            }

        ],

        UpperFinal: [
            {
                id: 'UPF_M1',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            }
        ]


    },

    LowerBracket: {
        LowerRound1: [
            {
                id: 'LBR1_M1',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            },
            {
                id: 'LBR1_M2',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            }
        ],

        LowerSemiFinals: [
            {
                id: 'LBSF_M1',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            },
            {
                id: 'LBSF_M2',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            }
        ],

        LowerFinal: [
            {
                id: 'LBF_M1',
                team1: "",
                team2: "",
                winner: "",
                loser: ""
            }
        ]
    }

}


function showSchedule(grupo) {
    console.log(`
        Upper Bracket                                                                                                   

            ${grupo.UpperBracket.UpperOpeningRound[0].team1} x ${grupo.UpperBracket.UpperOpeningRound[0].team2}       
            ${grupo.UpperBracket.UpperOpeningRound[1].team1} x ${grupo.UpperBracket.UpperOpeningRound[1].team2}
            ${grupo.UpperBracket.UpperOpeningRound[2].team1} x ${grupo.UpperBracket.UpperOpeningRound[2].team2}
            ${grupo.UpperBracket.UpperOpeningRound[3].team1} x ${grupo.UpperBracket.UpperOpeningRound[3].team2}

        Lower Bracket
           
            ${grupo.LowerBracket.LowerRound1[0].team1} x ${grupo.LowerBracket.LowerRound1[0].team2}
            ${grupo.LowerBracket.LowerRound1[1].team1} x ${grupo.LowerBracket.LowerRound1[1].team2}
        
        Upper SF

            ${grupo.UpperBracket.UpperSemiFinals[0].team1} x ${grupo.UpperBracket.UpperSemiFinals[0].team2}
            ${grupo.UpperBracket.UpperSemiFinals[1].team1} x ${grupo.UpperBracket.UpperSemiFinals[1].team2}
        
        Lower SF
            
            ${group.LowerBracket.LowerSemiFinals[0].team1} x ${group.LowerBracket.LowerSemiFinals[0].team2}
            ${group.LowerBracket.LowerSemiFinals[1].team1} x ${group.LowerBracket.LowerSemiFinals[1].team2}

        Upper Final
            
            ${grupo.UpperBracket.UpperFinal[0].team1} x ${grupo.UpperBracket.UpperFinal[0].team2} ====> ${grupo.UpperBracket.UpperFinal[0].winner}

        Lower Final
            ${grupo.LowerBracket.LowerFinal[0].team1} x ${grupo.LowerBracket.LowerFinal[0].team2} ====> ${grupo.LowerBracket.LowerFinal[0].winner}
                   
    `)
}

function finishUpperOpeningRound(group) {

    //Finishing OPR + Creating UP SF + LB R1

    let i = 0
    let matches = group.UpperBracket.UpperOpeningRound
    let winners = []
    let losers = []


    for(i=0; i < matches.length; i++) {
    
        let winner = (group.UpperBracket.UpperOpeningRound[i].winner == "") ? group.UpperBracket.UpperOpeningRound[i].team1 : group.UpperBracket.UpperOpeningRound[i].winner
        let loser = (winner == group.UpperBracket.UpperOpeningRound[i].team1) ? group.UpperBracket.UpperOpeningRound[i].team2 : group.UpperBracket.UpperOpeningRound[i].team1

        group.UpperBracket.UpperOpeningRound[i].winner = winner
        group.UpperBracket.UpperOpeningRound[i].loser = loser


        winners.push(winner)
        losers.push(loser)
    }

    

    let aux = 0;
    for(i=0; i < winners.length; i+=2) {
        //Creating UP SF
        
        group.UpperBracket.UpperSemiFinals[aux].team1 = winners[i]
        group.UpperBracket.UpperSemiFinals[aux].team2 = winners[i+1]

        //Creating LB R1

        group.LowerBracket.LowerRound1[aux].team1 = losers[i]
        group.LowerBracket.LowerRound1[aux].team2 = losers[i+1]

        aux++;
    }


}

function finishLowerRound1(group) {
    
    //Finishing LB R1 + Setting Winners to LB SF

    let i = 0
    let matches = group.LowerBracket.LowerRound1

    for(i=0; i < matches.length; i++) {



        let winner = (group.LowerBracket.LowerRound1[i].winner == "") ? group.LowerBracket.LowerRound1[i].team1 : group.LowerBracket.LowerRound1[i].winner
        let loser = (group.LowerBracket.LowerRound1[i].loser == "") ? group.LowerBracket.LowerRound1[i].team2 : group.LowerBracket.LowerRound1[i].loser

        group.LowerBracket.LowerRound1[i].winner = winner
        group.LowerBracket.LowerRound1[i].loser = loser

        group.LowerBracket.LowerSemiFinals[i].team2 = winner

        // console.log(group.LowerBracket.LowerRound1[i])
    }

}

function finishUpperSemiFinals(group) {
    //Finishing UP SF + Setting Losers to LB SF + Setting Winners to Upper Final

    let i = 0
    let matches = group.UpperBracket.UpperSemiFinals

    let j = matches.length

    for(i=0; i < j; i++) {
   
        let winner = (group.UpperBracket.UpperSemiFinals[i].winner == "") ? group.UpperBracket.UpperSemiFinals[i].team1 : group.UpperBracket.UpperSemiFinals[i].winner
        let loser = (winner == group.UpperBracket.UpperSemiFinals[i].team1) ? group.UpperBracket.UpperSemiFinals[i].team2 : group.UpperBracket.UpperSemiFinals[i].team1

        group.UpperBracket.UpperSemiFinals[i].winner = winner
        group.UpperBracket.UpperSemiFinals[i].loser = loser
        
        //Setting Winners to Upper Final
        
        if (group.UpperBracket.UpperFinal[0].team1 == "")  {

            group.UpperBracket.UpperFinal[0].team1 = winner

        } else {

            group.UpperBracket.UpperFinal[0].team2 = winner

        }

        //Setting Loser to Lower SF

        if (group.LowerBracket.LowerSemiFinals[j-1].team1 == "") {

            group.LowerBracket.LowerSemiFinals[j-1].team1 = loser

        } else {
            
            group.LowerBracket.LowerSemiFinals[j-2].team1 = loser

        }
    }
    

}

function finishLowerSemiFinals(group) {
       //Finishing LB SF + Setting Winners to LB Final

       let i = 0
       let matches = group.UpperBracket.UpperSemiFinals

       for(i=0; i < matches.length; i++) {
   
           let winner = (group.LowerBracket.LowerSemiFinals[i].winner == "") ? group.UpperBracket.UpperSemiFinals[i].team1 : group.UpperBracket.UpperSemiFinals[i].winner
           let loser = (winner == group.LowerBracket.LowerSemiFinals[i].team1) ? group.UpperBracket.UpperSemiFinals[i].team2 : group.UpperBracket.UpperSemiFinals[i].team1
   
           group.LowerBracket.LowerSemiFinals[i].winner = winner
           group.LowerBracket.LowerSemiFinals[i].loser = loser
           
           //Setting Winners to LB Final
           
           if (group.LowerBracket.LowerFinal[0].team1 == "")  {
   
                group.LowerBracket.LowerFinal[0].team1 = winner
   
           } else {
   
                group.LowerBracket.LowerFinal[0].team2 = winner
   
           }
       }
       
}

function finishUpperFinal(group, champion) {

    group.UpperBracket.UpperFinal[0].winner = champion
    
    if(group.UpperBracket.UpperFinal[0].team1 == champion) {
        group.UpperBracket.UpperFinal[0].loser = team2
    } else {
        group.UpperBracket.UpperFinal[0].loser = team1
    }

}

function finishLowerFinal(group, third) {
    group.LowerBracket.LowerFinal[0].winner = third
    
    if(group.LowerBracket.LowerFinal[0].team1 == third) {
        group.LowerBracket.LowerFinal[0].loser = team2
    } else {
        group.LowerBracket.LowerFinal[0].loser = team1
    }

}

function createSchedule(group) {
    //creating HTML Upper Bracket

    // console.log(group)
    if(group.name == 'playoffs') {
        document.getElementById('UpperOpeningRound').innerHTML = ''
        document.getElementById('UpperSemiFinals').innerHTML = ''
        document.getElementById('UpperFinal').innerHTML = ''
        document.getElementById('LowerRound1').innerHTML = ''
        document.getElementById('LowerSemiFinals').innerHTML = ''
        document.getElementById('LowerFinal').innerHTML = ''
        document.getElementsByClassName('bracket')[0].style.display = 'none'

        createRoundDOM(group.quarterFinals,'LowerRound1')

        createRoundDOM(group.semiFinals,'LowerSemiFinals')

        createRoundDOM(group.final,'LowerFinal')
        
        return

    }
    
    if(group == undefined && group.nome != 'playoffs') {
        var group = {
        name: document.querySelector('input[name="stage"]:checked').value,
        UpperBracket: {
                UpperOpeningRound: [
                    {
                        id: 'UPOR_M1', //UPOR = Upper Opening Round Match1
                        team1: seed[0],
                        team2: seed[1],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M2',
                        team1: seed[2],
                        team2: seed[3],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M3',
                        team1: seed[4],
                        team2: seed[5],
                        winner: "",
                        loser: ""
                    },
                    {
                        id: 'UPOR_M4',
                        team1: seed[6],
                        team2: seed[7],
                        winner: "",
                        loser: ""
                    }
                ],
            
            UpperSemiFinals: [
                {
                    id: 'UPSF_M1',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                },
                {
                    id: 'UPSF_M2',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                }

            ],

            UpperFinal: [
                {
                    id: 'UPF_M1',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                }
            ]


        },

        LowerBracket: {
            LowerRound1: [
                {
                    id: 'LBR1_M1',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                },
                {
                    id: 'LBR1_M2',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                }
            ],

            LowerSemiFinals: [
                {
                    id: 'LBSF_M1',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                },
                {
                    id: 'LBSF_M2',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                }
            ],

            LowerFinal: [
                {
                    id: 'LBF_M1',
                    team1: "",
                    team2: "",
                    winner: "",
                    loser: ""
                }
            ]
        }

}
    }


    document.getElementsByClassName('bracket')[0].style.display = 'flex'

    document.getElementById('UpperOpeningRound').innerHTML = ''
    document.getElementById('UpperSemiFinals').innerHTML = ''
    document.getElementById('UpperFinal').innerHTML = ''
    document.getElementById('LowerRound1').innerHTML = ''
    document.getElementById('LowerSemiFinals').innerHTML = ''
    document.getElementById('LowerFinal').innerHTML = ''

    createRoundDOM(group.UpperBracket.UpperOpeningRound,'UpperOpeningRound')
    createRoundDOM(group.LowerBracket.LowerRound1,'LowerRound1')

    createRoundDOM(group.UpperBracket.UpperSemiFinals,'UpperSemiFinals')
    createRoundDOM(group.LowerBracket.LowerSemiFinals,'LowerSemiFinals')

    createRoundDOM(group.UpperBracket.UpperFinal,'UpperFinal')
    createRoundDOM(group.LowerBracket.LowerFinal,'LowerFinal')


}

function createRoundDOM(round, roundName) {

    //console.log(`ROUND ${round}`)

    // console.log(round)
    let tam = round.length
    let i
    let roundDIV = document.getElementById(`${roundName}`)

    for(i=0; i < tam; i++) {
        let team1 = (round[i].team1 == "") ? '' : round[i].team1.charAt(0).toUpperCase() + round[i].team1.slice(1)
        let team2 = (round[i].team2 == "") ? '' : round[i].team2.charAt(0).toUpperCase() + round[i].team2.slice(1)
        let team1Color
        let team2Color
        if(round[i].winner == "") {

        } else {
            if(round[i].winner == team1) {
                team1Color = "winner"
                team2Color = "loser"

            } else {
                team1Color = "loser"
                team2Color = "winner"
            }

        }
    

        let id = round[i].id
        id = id.toLowerCase()

        let matchDOM = `
            <div class="match" id="${id}" ">
                <div class="match_info">
                    <div class="team-board ${team1Color}" id="${id}_team1" onclick='winner(${JSON.stringify(round[i])}, "${team1}", "${team2}")'>
                        ${team1}
                    </div>
                    <div class="team-board ${team2Color}" id="${id}_team2" onclick='winner(${JSON.stringify(round[i])}, "${team2}", "${team1}")'>
                        ${team2}
                    </div>
                </div>
                <div class="vetos" onclick="popUpVetos('${team1}', '${team2}')">
                VETOS
                </div>

            </div>`;
        
        roundDIV.innerHTML += matchDOM
    }

}

function verifyRoundName(round) {

    // let stageSelected = document.querySelector('input[name="stage"]:checked').value
    // let groupLocalStorage = JSON.parse(localStorage.getItem(`${stageSelected}`))
  
    let roundString = JSON.stringify(round)



    if(roundString == JSON.stringify(group.UpperBracket.UpperOpeningRound)){
        return "UpperOpeningRound"
    } else if(roundString == JSON.stringify(group.UpperBracket.UpperSemiFinals)) {
        return "UpperSemiFinals"
    
    } else if(roundString == JSON.stringify(group.UpperBracket.UpperFinal)) {
        return "UpperFinal"

    } else if(roundString == JSON.stringify(group.LowerBracket.LowerRound1)) {
        return "LowerRound1"

    } else if(roundString == JSON.stringify(group.LowerBracket.LowerSemiFinals)) {
        return "LowerSemiFinals"

    } else if(roundString == JSON.stringify(group.LowerBracket.LowerFinal)) {
        return "LowerFinal"

    } else {
        return false
    }
}

function winner(round, winner, loser) {
    
    if(loser == '' || loser == '' || loser == '' || winner == '' || winner == '' || winner == '') {
        return false
    }
    //fazer cada caso :(

    let id = round.id
    id = id.toLowerCase()



    let html = {
        upor_m1_team1 : document.getElementById('upor_m1_team1'), 
        upor_m2_team1 : document.getElementById('upor_m2__team1'), 
        upor_m3_team1 : document.getElementById('upor_m3_team1'), 
        upor_m4_team1 : document.getElementById('upor_m4_team1'), 
        upsf_m1_team1 : document.getElementById('upsf_m1_team1'), 
        upsf_m2_team1 : document.getElementById('upsf_m2_team1'), 
        upf_m1_team1 : document.getElementById('upf_m1_team1'), 

        lbr1_m1_team1 : document.getElementById('lbr1_m1_team1'), 
        lbr1_m2_team1 : document.getElementById('lbr1_m2_team1'), 
        lbsf_m1_team1 : document.getElementById('lbsf_m1_team1'), 
        lbsf_m2_team1 : document.getElementById('lbsf_m2_team1'), 
        lbf_m1_team1 : document.getElementById('lbf_m1_team1'),

        upor_m1_team2 : document.getElementById('upor_m1_team2'), 
        upor_m2_team2 : document.getElementById('upor_m2_team2'), 
        upor_m3_team2 : document.getElementById('upor_m3_team2'), 
        upor_m4_team2 : document.getElementById('upor_m4_team2'), 
        upsf_m1_team2 : document.getElementById('upsf_m1_team2'), 
        upsf_m2_team2 : document.getElementById('upsf_m2_team2'), 
        upf_m1_team2 : document.getElementById('upf_m1_team2'),

        lbr1_m1_team2 : document.getElementById('lbr1_m1_team2'), 
        lbr1_m2_team2 : document.getElementById('lbr1_m2_team2'), 
        lbsf_m1_team2 : document.getElementById('lbsf_m1_team2'), 
        lbsf_m2_team2 : document.getElementById('lbsf_m2_team2'), 
        lbf_m1_team2 : document.getElementById('lbf_m1_team2'),


        //Playoffs
        poqf_m1_team2 : document.getElementById('poqf_m1_team2'), 
        poqf_m2_team2 : document.getElementById('poqf_m2_team2'), 
        posf_m1_team2 : document.getElementById('posf_m1_team2'), 
        posf_m2_team2 : document.getElementById('posf_m2_team2'), 
        pof_m1_team2 : document.getElementById('pof_m1_team2'),
        poqf_m1_team1 : document.getElementById('poqf_m1_team1'), 
        poqf_m2_team1 : document.getElementById('poqf_m2_team1'), 
        posf_m1_team1 : document.getElementById('posf_m1_team1'), 
        posf_m2_team1 : document.getElementById('posf_m2_team1'), 
        pof_m1_team1 : document.getElementById('pof_m1_team1')
    }
    
    // console.log(id)
    switch(id) {

        //Upper Bracket Opening Rounds
        case 'upor_m1':
            html.upsf_m1_team1.innerHTML = winner
            html.lbr1_m1_team1.innerHTML = loser
            
            group.UpperBracket.UpperSemiFinals[0].team1 = winner
            group.LowerBracket.LowerRound1[0].team1 = loser

            group.UpperBracket.UpperOpeningRound[0].winner = winner
            group.UpperBracket.UpperOpeningRound[0].loser = loser

            //resetar ultimo caminho percorrido

            group.LowerBracket.LowerSemiFinals[0].team2 = ''
            group.LowerBracket.LowerFinal[0].team1 = ''

            //retirando cores
            group.LowerBracket.LowerSemiFinals[0].winner = ''
            group.LowerBracket.LowerSemiFinals[0].loser = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

            group.UpperBracket.UpperFinal[0].team1 = ''
            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.UpperBracket.UpperSemiFinals[0].winner = ''
            group.UpperBracket.UpperSemiFinals[0].loser = ''

            group.LowerBracket.LowerRound1[0].winner = ''
            group.LowerBracket.LowerRound1[0].loser = ''

            if(group.LowerBracket.LowerSemiFinals[1].team1 == loser)
                group.LowerBracket.LowerSemiFinals[1].team1 = ''

            
        break

        case 'upor_m2':
            html.upsf_m1_team2.innerHTML = winner
            html.lbr1_m1_team2.innerHTML = loser

            group.UpperBracket.UpperSemiFinals[0].team2 = winner
            group.LowerBracket.LowerRound1[0].team2 = loser

            group.UpperBracket.UpperOpeningRound[1].winner = winner
            group.UpperBracket.UpperOpeningRound[1].loser = loser

            //resetar ultimo caminho percorrido

            group.LowerBracket.LowerSemiFinals[0].team2 = ''
            group.LowerBracket.LowerFinal[0].team1 = ''

            //Retirando cores

            group.LowerBracket.LowerSemiFinals[0].winner = ''
            group.LowerBracket.LowerSemiFinals[0].loser = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

            group.UpperBracket.UpperFinal[0].team1 = ''
            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.UpperBracket.UpperSemiFinals[0].winner = ''
            group.UpperBracket.UpperSemiFinals[0].loser = ''

            group.LowerBracket.LowerRound1[0].winner = ''
            group.LowerBracket.LowerRound1[0].loser = ''

            if(group.LowerBracket.LowerSemiFinals[1].team1 == loser)
                group.LowerBracket.LowerSemiFinals[1].team1 = ''
        break

        case 'upor_m3':
            html.upsf_m2_team1.innerHTML = winner
            html.lbr1_m2_team1.innerHTML = loser

            group.UpperBracket.UpperSemiFinals[1].team1 = winner
            group.LowerBracket.LowerRound1[1].team1 = loser
            
            group.UpperBracket.UpperOpeningRound[2].winner = winner
            group.UpperBracket.UpperOpeningRound[2].loser = loser

            //resetar ultimo caminho percorrido

            group.LowerBracket.LowerSemiFinals[1].team2 = ''
            group.LowerBracket.LowerFinal[0].team2 = ''

            //retirando cores
            group.LowerBracket.LowerSemiFinals[1].winner = ''
            group.LowerBracket.LowerSemiFinals[1].loser = ''

            group.LowerBracket.LowerFinal[0].loser = ''
            group.LowerBracket.LowerFinal[0].winner = ''

            group.UpperBracket.UpperFinal[0].team2 = ''
            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.UpperBracket.UpperSemiFinals[1].winner = ''
            group.UpperBracket.UpperSemiFinals[1].loser = ''

            group.LowerBracket.LowerRound1[1].winner = ''
            group.LowerBracket.LowerRound1[1].loser = ''

            if(group.LowerBracket.LowerSemiFinals[1].team1 == loser)
                group.LowerBracket.LowerSemiFinals[1].team1 = ''
        break

        case 'upor_m4':
            html.upsf_m2_team2.innerHTML = winner
            html.lbr1_m2_team2.innerHTML = loser
            
            group.UpperBracket.UpperSemiFinals[1].team2 = winner
            group.LowerBracket.LowerRound1[1].team2 = loser

            group.UpperBracket.UpperOpeningRound[3].winner = winner
            group.UpperBracket.UpperOpeningRound[3].loser = loser

            group.LowerBracket.LowerSemiFinals[1].team2 = ''
            group.LowerBracket.LowerFinal[0].team2 = ''

            group.UpperBracket.UpperFinal[0].team2 = ''
            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.LowerBracket.LowerRound1[1].winner = ''
            group.LowerBracket.LowerRound1[1].loser = ''

            group.UpperBracket.UpperSemiFinals[1].winner = ''
            group.UpperBracket.UpperSemiFinals[1].loser = ''

            group.LowerBracket.LowerSemiFinals[1].winner = ''
            group.LowerBracket.LowerSemiFinals[1].loser = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

            if(group.LowerBracket.LowerSemiFinals[1].team2 == loser)
                group.LowerBracket.LowerSemiFinals[1].team2 = ''
            
        break

        //Upper Bracket Semifinals

        case 'upsf_m1':
            html.upf_m1_team1.innerHTML = winner
            html.lbsf_m2_team1.innerHTML = loser

            group.UpperBracket.UpperFinal[0].team1 = winner
            group.LowerBracket.LowerSemiFinals[1].team1 = loser

            group.UpperBracket.UpperSemiFinals[0].winner = winner
            group.UpperBracket.UpperSemiFinals[0].loser = loser

            group.LowerBracket.LowerFinal[0].team2 = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

            //mudando cor final

            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.LowerBracket.LowerSemiFinals[1].winner = ''
            group.LowerBracket.LowerSemiFinals[1].loser = ''

        break

        case 'upsf_m2':
            html.upf_m1_team2.innerHTML = winner
            html.lbr1_m1_team1.innerHTML = loser

            group.UpperBracket.UpperFinal[0].team2 = winner
            group.LowerBracket.LowerSemiFinals[0].team1 = loser

            group.UpperBracket.UpperSemiFinals[1].winner = winner
            group.UpperBracket.UpperSemiFinals[1].loser = loser

            group.LowerBracket.LowerFinal[0].team1 = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

            group.UpperBracket.UpperFinal[0].winner = ''
            group.UpperBracket.UpperFinal[0].loser = ''

            group.LowerBracket.LowerSemiFinals[0].winner = ''
            group.LowerBracket.LowerSemiFinals[0].loser = ''

        break

        //Upper Final

        case 'upf_m1':
            groupRank.first = winner
            groupRank.second = loser

            group.UpperBracket.UpperFinal[0].winner = winner
            group.UpperBracket.UpperFinal[0].loser = loser
        break

        //Lower Bracket Round 1

        case 'lbr1_m1':
            html.lbsf_m1_team2.innerHTML = winner
            group.LowerBracket.LowerFinal[0].team1 = ''
            
            group.LowerBracket.LowerSemiFinals[0].team2 = winner

            group.LowerBracket.LowerRound1[0].winner = winner
            group.LowerBracket.LowerRound1[0].loser = loser


            //mudando cor caminho percorrido
            group.LowerBracket.LowerSemiFinals[0].winner = ''
            group.LowerBracket.LowerSemiFinals[0].loser = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''


        break

        
        case 'lbr1_m2':
            html.lbsf_m1_team2.innerHTML = winner
            group.LowerBracket.LowerFinal[0].team2 = ''
            
            group.LowerBracket.LowerSemiFinals[1].team2 = winner

            group.LowerBracket.LowerRound1[1].winner = winner
            group.LowerBracket.LowerRound1[1].loser = loser

            group.LowerBracket.LowerSemiFinals[1].winner = ''
            group.LowerBracket.LowerSemiFinals[1].loser = ''

            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''
        break

        //Lower Bracket Semifinals

        case 'lbsf_m1':
            html.lbf_m1_team1.innerHTML = winner
            
            group.LowerBracket.LowerFinal[0].team1 = winner

            group.LowerBracket.LowerSemiFinals[0].winner = winner
            group.LowerBracket.LowerSemiFinals[0].loser = loser

            //mudando com caminho percorrido
            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''

        break

        
        case 'lbsf_m2':
            html.lbf_m1_team2.innerHTML = winner
            
            group.LowerBracket.LowerFinal[0].team2 = winner

            group.LowerBracket.LowerSemiFinals[1].winner = winner
            group.LowerBracket.LowerSemiFinals[1].loser = loser

            //mudando cor caminho percorrido
            group.LowerBracket.LowerFinal[0].winner = ''
            group.LowerBracket.LowerFinal[0].loser = ''
        break

        //Lower Bracket Final

        case 'lbf_m1':
            groupRank.third = winner

            group.LowerBracket.LowerFinal[0].winner = winner
            group.LowerBracket.LowerFinal[0].loser = loser

        break

        //playoffs

        case 'poqf_m1':
            html.posf_m1_team2.innerHTML = winner

            playoffsMatchups.quarterFinals[0].winner = winner
            playoffsMatchups.quarterFinals[0].loser = loser

            playoffsMatchups.semiFinals[0].team2 = winner
            
            //mudando possivel caminho anterior
            playoffsMatchups.semiFinals[0].winner = ''
            playoffsMatchups.semiFinals[0].loser = ''

            playoffsMatchups.final[0].winner = ''
            playoffsMatchups.final[0].loser = ''

            playoffsMatchups.final[0].team1 = ''


            
        break

        case 'poqf_m2':
            html.posf_m2_team2.innerHTML = winner

            playoffsMatchups.quarterFinals[1].winner = winner
            playoffsMatchups.quarterFinals[1].loser = loser

            playoffsMatchups.semiFinals[1].team2 = winner

            //mudando possivel caminho anterior
            playoffsMatchups.semiFinals[1].winner = ''
            playoffsMatchups.semiFinals[1].loser = ''

            playoffsMatchups.final[0].winner = ''
            playoffsMatchups.final[0].loser = ''

            playoffsMatchups.final[0].team2 = ''
            
        break

        case 'posf_m1':
            html.pof_m1_team1.innerHTML = winner

            playoffsMatchups.semiFinals[0].winner = winner
            playoffsMatchups.semiFinals[0].loser = loser

            playoffsMatchups.final[0].team1 = winner
            
            //resetando a final
            playoffsMatchups.final[0].winner = ''
            playoffsMatchups.final[0].loser = ''

        break

        case 'posf_m2':
            html.pof_m1_team2.innerHTML = winner

            playoffsMatchups.semiFinals[1].winner = winner
            playoffsMatchups.semiFinals[1].loser = loser

            playoffsMatchups.final[0].team2 = winner

                        
            //resetando a final
            playoffsMatchups.final[0].winner = ''
            playoffsMatchups.final[0].loser = ''

        break

        case 'pof_m1':
            playoffsMatchups.final[0].winner = winner
            playoffsMatchups.final[0].loser = loser

        break


    }

    localStorage.setItem(`${group.name}`, JSON.stringify(group))
    if(group.name == 'groupA')
        groupA = group
    else(group.name == 'groupB')
        groupB = group

    if(group.name == 'playoffs') {
        localStorage.setItem('playoffs', JSON.stringify(playoffsMatchups))
        playoffsMatchups = JSON.parse(localStorage.getItem('playoffs'))
        // console.log(playoffsMatchups)
        createSchedule(playoffsMatchups)
        
        return
    }


    if(id != 'poqf_m1' ||
        id != 'poqf_m2' ||
        id != 'posf_m1' ||
        id != 'posf_m2' ||
        id != 'pof_m1') {

            localStorage.setItem('playoffs', null)

    }

    createSchedule(group)


}



function popUpVetos(team1, team2) {

    let popUpDiv = document.getElementById('pop_up_vetos')

    if(popUpDiv.getAttribute('class') == 'pop_up_vetos') {
        popUpDiv.innerHTML = ''
        popUpDiv.removeAttribute('class')
        let child = document.getElementsByClassName('vetos_matchup')[0]
        
        popUpDiv.removeChild(child)
       
        
    } else 
        popUpDiv.setAttribute('class', 'pop_up_vetos')

    let html = `<a style='text-decoration: underline;' onclick="popUpVetos('','')">Close</a>
                <div class="vetos_matchup">
                    <div class="team-board" style="font-size:18px"; id='board-pop-up-${team1}-${team2}' onclick='startPicking("${team1}", "${team2}", "board-pop-up-${team1}-${team2}")'>
                            ${team1}
                    </div>
                    x
                    <div class="team-board" style="font-size:18px" id='board-pop-up-${team2}-${team1}'onclick='startPicking("${team2}", "${team1}", "board-pop-up-${team2}-${team1}")'>
                            ${team2}
                    </div>
                    
                </div>
                <a>Choose who BANS first</a>`
    
    popUpDiv.innerHTML += html
    
}


function startPicking(team1, team2, idBoardPopUp = 0) {

    let vetos_text = document.getElementsByClassName('vetos_text')[0]
    let popUpDiv = document.getElementById('pop_up_vetos')
    

    if(vetos_text != undefined) {
        popUpDiv.removeChild(vetos_text)
    }

    
    let j
    selectMapForm = `<select class="mapsForm mapselected-matchup-${team1}-${team2}" name="maps" >`

    for(j=0; j < mapas.length; j++) {
        
        
        let option = `<option value="mapa${j}">${mapas[j]}</option>`
        selectMapForm += option
        

    }
    selectMapForm += `</select>`

    let html = `<div class="vetos_text" >
    <a>Choose the maps</a>
        
        <a class='vetos-matchup-${team1}-${team2}'> 1. ${team1} removed ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 2. ${team2} removed ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 3. ${team1} picked ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 4. ${team2} picked ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 5. ${team1} removed ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 6. ${team2} removed ${selectMapForm}</a>
        <a class='vetos-matchup-${team1}-${team2}'> 7. ${selectMapForm} was left over </a>

        <a onclick="vetosToClipboard('mapsForm mapselected-matchup-${team1}-${team2}', '${team1}', '${team2}')" style='margin-top:10px;text-decoration: underline;'>Copy vetos to clipboard</a>
    </div>`

    if(idBoardPopUp != 0) {
        
        let boardPopUp = document.getElementById(`board-pop-up-${team1}-${team2}`)
        
        if(boardPopUp.getAttribute('class') == 'team-board winner') {
            document.getElementById(`board-pop-up-${team2}-${team1}`).setAttribute('class', 'team-board')
        } else {
            document.getElementById(`board-pop-up-${team1}-${team2}`).setAttribute('class', 'team-board winner picking')
            document.getElementById(`board-pop-up-${team2}-${team1}`).setAttribute('class', 'team-board')
        }
    }

    popUpDiv.innerHTML += html
}

function vetosToClipboard(className, team1, team2) {
    let textVetos = document.getElementsByClassName(`${className}`)
    let first 
    let second
    
    if(document.getElementById(`board-pop-up-${team1}-${team2}`).classList.contains('picking')) {
        //console.log(document.getElementById(`board-pop-up-${team1}-${team2}`).innerText)
        first = team1
        second = team2

    } else {
        first = team2
        second = team1
    }



    let i 

    let verb
    
    let text = ''
    
    for(i=0; i < textVetos.length; i++) {

        let map = textVetos[i].options[textVetos[i].selectedIndex].text
        let phrase

        if((i == 0 || i == 1 || i == 4 || i == 5) && i!= 6){
            verb = 'removed'
        } else if(i != 6){
            verb = 'picked'
        }


        if(i%2 == 0 && i!=6) { 
            phrase = `${i+1}. ${first} ${verb} ${map}.`

        } else if(i != 6) { 
            phrase = `${i+1}. ${second} ${verb} ${map}.`
            team = second
        } else {
            phrase = `${i+1}. ${map} was left`
        }

        text += phrase+'\n'


    }

    navigator.clipboard.writeText(text);

    
}

