interface ClubData {
	id: number
	code: string
	shortName: string
	fullName: string
	crest: string
}

const CLUBS: ClubData[] = [
	{id: 1, 	code: 'Chefs', 		shortName: 'Chefs', 				fullName: 'Chefs', 				crest: 'chefs.png'},
	{id: 2, 	code: 'nG', 		shortName: 'NextGen', 				fullName: 'NextGen', 			crest: 'next-gen.png'},
	{id: 3, 	code: 'Roby', 		shortName: 'Roby Rovers', 			fullName: 'Roby Rovers', 		crest: 'roby-rovers.png'},
	{id: 4,		code: 'VS', 		shortName: 'Victorious Secret', 	fullName: 'Victorious Secret', 	crest: 'victorious-secret.png'}
];

interface PlayerData {
	steamId: string
	name: string
	clubId?: number
	isCaptain?: boolean
}

const PLAYERS: PlayerData[] = [
    {steamId: 'STEAM_0:0:34848565',    	 name: 'Alaba',				clubId: 2},
    {steamId: 'STEAM_0:1:4373127',     	 name: 'DaapDaap',			clubId: 3},
    {steamId: 'STEAM_0:0:12461788',    	 name: 'Draexx Sau',		clubId: 4},	
    {steamId: 'STEAM_0:0:4358091',     	 name: 'Sean',				clubId: 3},
	{steamId: 'STEAM_0:0:8344910',     	 name: 'cb',				clubId: 4},	
	{steamId: 'STEAM_0:1:4259',	 		 name: 'Flame',				clubId: 3},	
	{steamId: 'STEAM_0:1:12356531',      name: 'Gamer',				clubId: 1},	
	{steamId: 'STEAM_0:1:4460440',     	 name: 'Rhino',				clubId: 4},	
	{steamId: 'STEAM_0:1:3525087',     	 name: 'Burni'},	
	{steamId: 'STEAM_0:1:193024687',     name: 'Lux',				clubId: 1},	
	{steamId: 'STEAM_0:1:3695202',       name: 'Seven|Up',			clubId: 3},
	{steamId: 'STEAM_0:0:20301667',      name: 'Kobe',				clubId: 2},	
	{steamId: 'STEAM_0:1:50696312',      name: 'Kieran',			clubId: 1},	
	{steamId: 'STEAM_0:0:19527334',      name: 'Matt',				clubId: 4,		isCaptain: true},
	{steamId: 'STEAM_0:0:123930242',     name: 'FauloR',			clubId: 3},
	{steamId: 'STEAM_0:0:2023144',       name: 'Josh',				clubId: 1,		isCaptain: true},
	{steamId: 'STEAM_0:0:20517562',      name: 'Bullet'},	
	{steamId: 'STEAM_0:0:31533268',      name: 'Destran',			clubId: 4},
	{steamId: 'STEAM_0:1:36920580',      name: 'Hakan'},	
	{steamId: 'STEAM_0:1:318147',     	 name: 'Wilmots'},	
	{steamId: 'STEAM_0:1:3007736',     	 name: 'SaliX',				clubId: 1},	
	{steamId: 'STEAM_0:1:121871',      	 name: 'yvus',				clubId: 3},	
	{steamId: 'STEAM_0:0:1102396',       name: 'tet-',				clubId: 3,		isCaptain: true},
	{steamId: 'STEAM_0:1:16309560',      name: 'Maaby',				clubId: 1},	
	{steamId: 'STEAM_0:1:11766677',      name: 'RvdV',				clubId: 3},
	{steamId: 'STEAM_0:1:3131808',       name: 'J.B3',				clubId: 4},
	{steamId: 'STEAM_0:0:6789707',       name: 'Zapdos',			clubId: 3},	
	{steamId: 'STEAM_0:0:10372338',      name: 'Ashleh',			clubId: 1},	
	{steamId: 'STEAM_0:1:1975079',       name: 'meany',				clubId: 4},	
	{steamId: 'STEAM_0:1:13358437',      name: 'Steve'},	
	{steamId: 'STEAM_0:1:5524635',       name: 'Larsson',			clubId: 1},	
	{steamId: 'STEAM_0:0:8029326',       name: 'Amplitech',			clubId: 1},	
	{steamId: 'STEAM_0:1:629880',      	 name: 'bc',				clubId: 1},
	{steamId: 'STEAM_0:1:37984806',      name: 'Dev',				clubId: 2},	
	{steamId: 'STEAM_0:1:10824911',      name: 'Hiei',				clubId: 4},	
	{steamId: 'STEAM_0:1:3280605',       name: 'skum',				clubId: 3},
	{steamId: 'STEAM_0:1:11670038',      name: 'Eoin',				clubId: 1},	
	{steamId: 'STEAM_0:1:25547728',      name: 'yak'},	
	{steamId: 'STEAM_0:0:8592105',       name: 'Doc',				clubId: 4},	
	{steamId: 'STEAM_0:1:7390716',       name: 'Xavit',				clubId: 2},	
	{steamId: 'STEAM_0:0:54255',         name: 'Thinge'},	
	{steamId: 'STEAM_0:1:7116806',       name: 'Lua',				clubId: 1},	
	{steamId: 'STEAM_0:0:46719805',      name: 'khaledinho'},	
	{steamId: 'STEAM_0:1:190288637',     name: 'Aryan',				clubId: 2},	
	{steamId: 'STEAM_0:1:27049702',      name: 'GaMs',				clubId: 3},
	{steamId: 'STEAM_0:0:1608509',       name: 'Orius'},	
	{steamId: 'STEAM_0:1:7605279',       name: 'Demented'},	
	{steamId: 'STEAM_0:0:26082793',      name: 'Jase',				clubId: 4},	
	{steamId: 'STEAM_0:0:13346995',      name: 'panther'},	
	{steamId: 'STEAM_0:1:128662',        name: 'GINIXXX',			clubId: 3},
	{steamId: 'STEAM_0:0:16735574',      name: 'ChouPo',			clubId: 2},	
	{steamId: 'STEAM_0:0:83871037',      name: 'Mangles'},	
	{steamId: 'STEAM_0:1:7116806',       name: 'Lua',				clubId: 1},
	{steamId: 'STEAM_0:1:3760747',       name: 'zaLir'},	
	{steamId: 'STEAM_0:1:180695954',     name: 'panther (1)',		clubId: 4},	
	{steamId: 'STEAM_0:0:31446984',	 	 name: 'Kaiser'},	
	{steamId: 'STEAM_0:0:3829635',	 	 name: 'Km',				clubId: 2},
	{steamId: 'STEAM_0:1:10938960',	 	 name: 'roq',				clubId: 2},
	{steamId: 'STEAM_0:1:13281024',	 	 name: 'Quality'},	
	{steamId: 'STEAM_0:1:14849456',	 	 name: 'shagwa',			clubId: 1,		isCaptain: true}
	
];

export { CLUBS, PLAYERS };