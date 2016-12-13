interface TransferData {
    id: number;         // Just increment by one
    playerId: number;
    fromClubId: number;
    toClubId: number;
    date: string;       // Either date only (2016-12-13) or if possible with time (2016-12-13T16:30:00Z)
                        // See https://en.wikipedia.org/wiki/ISO_8601
}

const TRANSFERS: TransferData[] = [
    //{id: 1,     playerId: 5,    fromClubId: 2,      toClubId: 3,    date: '2016-12-13T16:50:00Z'}
]

interface ClubData {
    id: number;
    code: string;
    shortName: string;
    fullName: string;
    crest: string;
}

const CLUBS: ClubData[] = [
    {id: 1, 	code: 'Chefs', 		shortName: 'Chefs', 				fullName: 'Chefs', 				crest: 'chefs.png'},
    {id: 2, 	code: 'nG', 		shortName: 'NextGen', 				fullName: 'NextGen', 			crest: 'next-gen.png'},
    {id: 3, 	code: 'Roby', 		shortName: 'Roby Rovers', 			fullName: 'Roby Rovers', 		crest: 'roby-rovers.png'},
    {id: 4,		code: 'VS', 		shortName: 'Victorious Secret', 	fullName: 'Victorious Secret', 	crest: 'victorious-secret.png'}
];

interface PlayerData {
    id: number;
    steamId: string;
    name: string;
    clubId?: number;
    isCaptain?: boolean;
}

const PLAYERS: PlayerData[] = [
    {id: 1,     steamId: 'STEAM_0:0:34848565',    	name: 'Alaba',				clubId: 2},
    {id: 2,     steamId: 'STEAM_0:1:4373127',     	name: 'DaapDaap',			clubId: 3},
    {id: 3,     steamId: 'STEAM_0:0:12461788',    	name: 'Draexx Sau',		    clubId: 4},
    {id: 4,     steamId: 'STEAM_0:0:4358091',     	name: 'Sean',				clubId: 3},
    {id: 5,     steamId: 'STEAM_0:0:8344910',     	name: 'cb',				    clubId: 4},
    {id: 6,     steamId: 'STEAM_0:1:4259',	 		name: 'Flame',				clubId: 3},
    {id: 7,     steamId: 'STEAM_0:1:12356531',      name: 'Gamer',				clubId: 1},
    {id: 8,     steamId: 'STEAM_0:1:4460440',     	name: 'Rhino',				clubId: 4},
    {id: 9,     steamId: 'STEAM_0:1:3525087',     	name: 'Burni'},
    {id: 10,    steamId: 'STEAM_0:1:193024687',     name: 'Lux',				clubId: 4},
    {id: 11,    steamId: 'STEAM_0:1:3695202',       name: 'Seven|Up',			clubId: 3},
    {id: 12,    steamId: 'STEAM_0:0:20301667',      name: 'Kobe',				clubId: 2},
    {id: 13,    steamId: 'STEAM_0:1:50696312',      name: 'Kieran',			    clubId: 1},
    {id: 14,    steamId: 'STEAM_0:0:19527334',      name: 'Matt',				clubId: 4,		isCaptain: true},
    {id: 15,    steamId: 'STEAM_0:0:123930242',     name: 'FauloR',			    clubId: 4},
    {id: 16,    steamId: 'STEAM_0:0:2023144',       name: 'Josh',				clubId: 1,		isCaptain: true},
    {id: 17,    steamId: 'STEAM_0:0:20517562',      name: 'Bullet'},
    {id: 18,    steamId: 'STEAM_0:0:31533268',      name: 'Destran',			clubId: 4},
    {id: 19,    steamId: 'STEAM_0:1:36920580',      name: 'Hakan'},
    {id: 20,    steamId: 'STEAM_0:1:318147',     	name: 'Wilmots'},
    {id: 21,    steamId: 'STEAM_0:1:3007736',     	name: 'SaliX',				clubId: 1},
    {id: 22,    steamId: 'STEAM_0:1:121871',      	name: 'yvus',				clubId: 3},
    {id: 23,    steamId: 'STEAM_0:0:1102396',       name: 'tet-',				clubId: 3,		isCaptain: true},
    {id: 24,    steamId: 'STEAM_0:1:16309560',      name: 'Maaby',				clubId: 1},
    {id: 25,    steamId: 'STEAM_0:1:11766677',      name: 'RvdV',				clubId: 3},
    {id: 26,    steamId: 'STEAM_0:1:3131808',       name: 'J.B3',				clubId: 4},
    {id: 27,    steamId: 'STEAM_0:0:6789707',       name: 'Zapdos',			    clubId: 3},
    {id: 28,    steamId: 'STEAM_0:0:10372338',      name: 'Ashleh',			    clubId: 1},
    {id: 29,    steamId: 'STEAM_0:1:1975079',       name: 'meany',				clubId: 2},
    {id: 30,    steamId: 'STEAM_0:1:13358437',      name: 'Steve'},
    {id: 31,    steamId: 'STEAM_0:1:5524635',       name: 'Larsson',			clubId: 1},
    {id: 32,    steamId: 'STEAM_0:0:8029326',       name: 'Amplitech',			clubId: 1},
    {id: 33,    steamId: 'STEAM_0:1:629880',      	name: 'bc',				    clubId: 1},
    {id: 34,    steamId: 'STEAM_0:1:37984806',      name: 'Dev',				clubId: 2},
    {id: 35,    steamId: 'STEAM_0:1:10824911',      name: 'Hiei',				clubId: 2},
    {id: 36,    steamId: 'STEAM_0:1:3280605',       name: 'skum',				clubId: 3},
    {id: 37,    steamId: 'STEAM_0:1:11670038',      name: 'Eoin',				clubId: 1},
    {id: 38,    steamId: 'STEAM_0:1:25547728',      name: 'yak'},
    {id: 39,    steamId: 'STEAM_0:0:8592105',       name: 'Doc',				clubId: 4},
    {id: 40,    steamId: 'STEAM_0:1:7390716',       name: 'Xavit',				clubId: 2},
    {id: 41,    steamId: 'STEAM_0:0:54255',         name: 'Thinge'},
    {id: 42,    steamId: 'STEAM_0:1:7116806',       name: 'Lua',				clubId: 1},
    {id: 43,    steamId: 'STEAM_0:0:46719805',      name: 'khaledinho'},
    {id: 44,    steamId: 'STEAM_0:1:190288637',     name: 'Aryan',				clubId: 2},
    {id: 45,    steamId: 'STEAM_0:0:25699948',      name: 'Aryan (1)'},
    {id: 46,    steamId: 'STEAM_0:1:27049702',      name: 'GaMs',				clubId: 3},
    {id: 47,    steamId: 'STEAM_0:0:1608509',       name: 'Orius'},
    {id: 48,    steamId: 'STEAM_0:1:7605279',       name: 'Demented'},
    {id: 49,    steamId: 'STEAM_0:0:26082793',      name: 'Jase',				clubId: 4},
    {id: 50,    steamId: 'STEAM_0:1:128662',        name: 'GINIXXX',			clubId: 3},
    {id: 51,    steamId: 'STEAM_0:0:16735574',      name: 'ChouPo',			    clubId: 2},
    {id: 52,    steamId: 'STEAM_0:0:83871037',      name: 'Mangles'},
    {id: 53,    steamId: 'STEAM_0:1:7116806',       name: 'Lua',				clubId: 1},
    {id: 54,    steamId: 'STEAM_0:1:3760747',       name: 'zaLir'},
    {id: 55,    steamId: 'STEAM_0:0:13346995',      name: 'panther',			clubId: 4},
    {id: 56,    steamId: 'STEAM_0:1:180695954',     name: 'panther (1)'},
    {id: 57,    steamId: 'STEAM_0:0:31446984',	 	name: 'Kaiser'},
    {id: 58,    steamId: 'STEAM_0:0:3829635',	 	name: 'Km',				    clubId: 2},
    {id: 59,    steamId: 'STEAM_0:1:10938960',	 	name: 'roq',				clubId: 2},
    {id: 60,    steamId: 'STEAM_0:1:13281024',	 	name: 'Quality'},
    {id: 61,    steamId: 'STEAM_0:1:14849456',	 	name: 'shagwa',			    clubId: 2,		isCaptain: true},
    {id: 62,    steamId: 'STEAM_0:0:9347196',	 	name: 'NightFire'}
];

export { CLUBS, PLAYERS };