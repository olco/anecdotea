angular.module('starter.services', ['ngCordova'])

.factory('Data', function($rootScope) {
  return {
      notification : true,
	  distance:0.09,
	  heading:0,
	  currentPosition: {
		  'lon':-1,
		  'lat':-1
	  },
	  sendCurrentPosition: function(data) {
		  $rootScope.$broadcast('currentPositionChanged', data);
	  }
  };
})

.factory('Locations', function(Data) {

  var locations = [{
    id: 0,
    name: 'Le pont tranbordeur',
    lastText: 'C\'est le dernier pont transbordeur en activité en France. La traservée dure 75 secondes et permet de transporter 200 personnes. Ce fut le décors de la scène inaugurale du film Les demoiselles de Rochefort.',
    face: 'img/transbordeur.jpg',
    dist: -1,
    dir: -1,
    lat:45.916711,
    lon:-0.960687,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 1,
    name: 'La place Colbert',
    lastText: 'La place Colbert fut l\'un des principaux lieux de tournage du film les demoiselles de Rochefort en 1967',
    face: 'img/place_colbert.jpg',
    dist: -1,
    dir: -1,
    lat:45.936629,
    lon:-0.961625,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 2,
    name: 'La corderie royale',
    lastText: 'La corderie royale mesure 374 mètres de long. Ce batiment permettait de construire des cordes mesurant l\'équivalent d\'une encablure (environ 200 mètres)',
    face: 'img/corderie.jpg',
    dist: -1,
    dir: -1,
    lat:45.937987,
    lon:-0.955963,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 4,
    name: 'La porte du soleil',
    lastText: 'Le 4 mars et le 10 octobre, le soleil se léve exactement dans l\'axe du monument.',
    face: 'img/porte_soleil.jpg',
    dist: -1,
    dir: -1,
    lat:45.935073,
    lon:-0.957886,
	  notif:false,
    cat:'Patrimoine'
  }, {
    id: 5,
    name: 'L\'école Saint-Joseph',
    lastText: 'L\'école Saint-Joseph était anciennement une chocolaterie.',
    face: 'img/ecole_st_joseph.jpg',
    dist: -1,
    dir: -1,
    lat:45.941796,
    lon:-0.969635,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 6,
    name: 'L\'Hermione',
    lastText: 'L\’Hermione est une réplique du navire de guerre français en service de 1779 à 1793, reconstruite dans l\'ancien arsenal de Rochefort à partir de 1997 et lancée en eaux salées le 7 septembre 2014.',
    face: 'img/hermione.jpg',
    dist: -1,
    dir: -1,
    lat:45.935255,
    lon:-0.956998,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 7,
    name: 'Ancien hopîtal',
    lastText: 'L\'hôpital de la Marine de Rochefort, ou hôpital maritime, est un ancien hôpital militaire du XVIIIe siècle formant un ensemble monumental de bâtiments, de cours et de jardins ouvrant sur l\'avenue Camille-Pelletan et le cours d\'Ablois à Rochefort, dans le département français de Charente-Maritime. Il est le premier hôpital de France de conception pavillonnaire.',
    face: 'img/ancien_hopital.jpg',
    dist: -1,
    dir: -1,
    lat:45.942454,
    lon:-0.964031,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 8,
    name: 'Ancienne brasserie',
    lastText: 'Ce batîment abritait jadis la brasserie de La Meuse. On devine encore le logo sur la facade.',
    face: 'img/brasserie_meuse.jpg',
    dist: -1,
    dir: -1,
    lat:45.940754,
    lon:-0.967521,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 9,
    name: 'Les halles',
    lastText: 'Les mardi, jeudi et samedi matin se tient l\'un des plus grand marché de la région.',
    face: 'img/halles.jpg',
    dist: -1,
    dir: -1,
    lat:45.935012,
    lon:-0.959308,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 10,
    name: 'Le musée de la marine',
    lastText: 'Le musée est établi dans le plus ancien édifice civil de la ville, l\'Hôtel de Cheusses, qui fut construit au début du xviie siècle1. L\'hôtel servit de logis seigneurial au châtelain de Rochefort. Après la fondation de l\'arsenal en 1666, il abrite le commandement, puis l\'intendance de la Marine et au XIXe siècle le Commissariat de la Marine. En 1927, l\'arsenal est supprimé et un musée naval ouvre dans le bâtiment dès 1936. Un magnifique portail donne accès à la cour de ce monument historique aujourd\'hui transformé en musée national.',
    face: 'img/musee_marine.jpg',
    dist: -1,
    dir: -1,
    lat:45.934475,
    lon:-0.957966,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 11,
    name: 'Hôtel Hebre de Saint-Clément',
    lastText: 'Le musée Hèbre de Saint-Clément est un musée situé dans l\’hôtel du même nom à Rochefort depuis 1860. Il abrite le musée d\’art et d\’histoire ainsi que les services du patrimoine.',
    face: 'img/musee_hebre.jpg',
    dist: -1,
    dir: -1,
    lat:45.935699,
    lon: -0.962597,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 12,
    name: 'La fontaine (place Colbert)',
    lastText: 'À l\'origine, la place Colbert faisait office de pré pour le pacage des animaux et se nommait la place aux herbes. Par la suite, grâce à l\'impulsion donnée par les urbanistes, cette place est embellie en 1757 et pourvue d\'une belle fontaine de pierre couronnée, par Victor Bourguignon, d\'une figure allégorique symbolisant la rencontre de la Charente et de l\'Océan. La source alimentant cette fontaine provient de Tonnay-Charente par l\'aqueduc du Coteau. Cet aqueduc initialement construit à la demande de l\'intendant Bégon en 1695 aboutissait à un énorme réservoir situé près du bâtiment de corps de garde de la Corderie Royale56. En 1754, cet aqueduc alimentait en eau toutes les fontaines de Rochefort',
    face: 'img/fontaine_colbert.jpg',
    dist: -1,
    dir: -1,
    lat:45.936611,
    lon: -0.961245,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 13,
    name: 'Le théâtre de la coupe d\'or',
    lastText: 'En 1766, plusieurs notables créent une société pour financer cette édification. Le Maire, Hèbre de Saint-Clément, propose d’offrir un terrain où est bâti l’Hôtel de la Coupe d’Or. Cet hôtel aurait donné le nom du théâtre. Les travaux de construction sont confiés à Giovanni Antonio Berinzago, architecte et peintre de Lombardie qui travaille à l’époque au décor du théâtre de La Rochelle. Inspiré des théâtres italiens du xviie siècle, Berinzago en reprend la division en trois parties.',
    face: 'img/theatre.jpg',
    dist: -1,
    dir: -1,
    lat:45.937866,
    lon:-0.960912,
	  notif:false,
    cat:'Incontournable'
  }, {
    id: 14,
    name: 'L\'horloge des marées',
    lastText: 'Une horloge de marées a été installée au centre de la place. Elle indique l\'état de la marée et le nombre d\'heures restant avant basse mer par une série de spots lumineux.',
    face: 'img/boussole_maree.jpg',
    dist: -1,
    dir: -1,
    lat:45.936629,
    lon:-0.961633,
	  notif:false,
    cat:'Insolite'
  }, {
    id: 15,
    name: 'La tour des signaux',
    lastText: 'La tour des signaux date de 172854. Elle constituait à l\'origine le clocher de la première église Saint-Louis, aménagée dans l\'ancien prêche du seigneur de Cheusses, protestant, au moment de la fondation de la ville moderne. L\'église, desservie par les Lazaristes (Congrégation de la Mission), est dès 1723 « trop petite, fort basse et peu convenable pour un lieu si considérable. Plusieurs poutres menacent ruine »54. Les Lazaristes refusant de prêter serment à la constitution civile du clergé, la marine saisit leur église en 179155 afin d\'en faire un entrepôt. Le titre paroissial est transféré à la chapelle du couvent des Capucins, qui, presque intégralement reconstruite à partir de 1835, devient l\'église Saint-Louis actuelle.',
    face: 'img/tour_des_signaux.jpg',
    dist: -1,
    dir: -1,
    lat:45.935961,
    lon:-0.958326,
    notif:false,
    cat:'Incontournable'
  }/*, {
    id: 16,
    name: 'Le Conservatoire du Bégognia',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.924533,
    lon:-0.955898,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 17,
    name: 'La station de lagunage',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.919925,
    lon:-0.980009,
    notif:false,
    cat:'Incontournable'
  }*/, {
    id: 18,
    name: 'Les anciennes fonderies Royales',
    lastText: 'Au XVII ème siècle. Cette "usine à canons" fut édifiée de 1668 à 1671, soit deux ans après le début de la construction de la Corderie Royale (1666), mais à l\'écart des autres bâtiments de l\' Arsenal de Rochefort situés le long de la Charente.Elle commence son aventure en 1669 et est spécialisée dans la fonte des canons de bronze, plus sûr et plus prestigieux que les canons en fonte, mais...plus coûteux.',
    face: 'img/fonderie.jpg',
    dist: -1,
    dir: -1,
    lat:45.940292,
    lon:-0.959161,
    notif:false,
    cat:'Insolite'
  }/*, {
    id: 19,
    name: 'Le magasin au vivre',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940292,
    lon:-0.959161,
    notif:false,
    cat:'Incontournable'
  }*/, {
    id: 20,
    name: 'La gare SNCF',
    lastText: 'La subsistance de tout ce peuple d\'ouvriers et de marins, ainsi que l\'approvisionnement des navires en vivres, posa très vite des problèmes à l\'État. Colbert proposa au roi Louis XIV de créer un « munitionnaire » chargé de régler la nourriture. Le roi créa le poste par un arrêté du 2 octobre 1669 et on décida d\'élever un bâtiment : le « magasin aux Vivres » qui fut le plus vaste des monuments de ce genre possédé dès lors par la Marine. Le bâtiment, construit entre 1671 et 1673, longe l\'actuel bassin de plaisance. Il porte le cachet de l\'époque. Élevé sur le même alignement nord que l\'hôpital-Charente (devenu la caserne Charente), il a 120 mètres de long. Il contenait les greniers d\'approvisionnement. L\'ensemble forme un vaste quadrilatère ; les deux ailes en retour mesurant 125 mètres.',
    face: 'img/gare.jpg',
    dist: -1,
    dir: -1,
    lat:45.947265,
    lon:-0.963722,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 21,
    name: 'Le port de plaisance',
    lastText: 'Rochefort, ville fluviale sur la rive droite de la Charente dispose d\'un port de plaisance, réparti en deux bassins à flot, qui est le plus important port fluvial de plaisance de la Charente-Maritime.',
    face: 'img/port.jpg',
    dist: -1,
    dir: -1,
    lat:45.944399,
    lon:-0.958749,
    notif:false,
    cat:'Incontournable'
  }/*, {
    id: 22,
    name: 'L\'hôtel de ville',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936723,
    lon:-0.962285,
    notif:false,
    cat:'Insolite'
  }*/, {
    id: 23,
    name: 'L\'Église Saint-Louis',
    lastText: 'L\'église Saint-Louis est l\'une des principales églises paroissiales de la ville de Rochefort, dans le département de la Charente-Maritime. Comptant parmi les rares témoignages de l\'architecture néo-classique du département, sa construction est effectuée sous la direction de l\'architecte Félix Garde en 1835.',
    face: 'img/eglise_saint_louis.jpg',
    dist: -1,
    dir: -1,
    lat:45.937326,
    lon:-0.962393,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 24,
    name: 'L\'Église Notre-Dame dite la Vieille Paroisse',
    lastText: 'Au xiie siècle, la seigneurie de Rochefort ne comporte qu’un fort surveillant la Charente et quelques hameaux dispersés de pêcheurs, cultivateurs et bûcherons. Le prieuré augustinien Saint-Vivien de Saintes y établit une église paroissiale sous le vocable de la Vierge. Dévastée au xvie siècle, l’église est reconstruite au xviie siècle.',
    face: 'img/vieille_paroisse.jpg',
    dist: -1,
    dir: -1,
    lat:45.935456,
    lon:-0.967149,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 25,
    name: 'Le labyrinthe',
    lastText: 'Le labyrinthe des batailles navales forme un dédale mystérieux planté d’ifs.',
    face: 'img/labyrinthe.jpg',
    dist: -1,
    dir: -1,
    lat:45.936953,
    lon:-0.956123,
    notif:false,
    cat:'Insolite'
  }/*, {
    id: 26,
    name: 'Temple Protestant',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.938504,
    lon:-0.958871,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 27,
    name: 'La porte bégon',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.942832,
    lon:-0.960210,
    notif:false,
    cat:'Patrimoine'
  }*/, {
    id: 28,
    name: 'Ancien hôpital Saint-Charles',
    lastText: 'La première fondation du centre hospitalier de Rochefort, anciennement appelé hôpital Saint-Charles, remonte à 1733, grâce à Charles Jouvenon, supérieur de la congrégation, prêtre de la mission établie dans la ville et curé de Saint-Louis. Aux termes de nombreuses formalités administratives, il obtient des lettres patentes du roi en date du 6 mai 1733 qui furent enregistrées par le Parlement le 9 juillet 1734, donnant « l\'autorisation d\'établir un hôpital pour les pauvres malades de l\'un et l\'autre sexe… ». Le service de santé fut, dès le départ et pour longtemps, confié aux chirurgiens de la Marine, qui apportèrent régulièrement leurs concours et compétences. L\'hôpital Saint-Charles actuel date de 1972. Depuis, un nouveau service des urgences a été construit et ouvert en 1993, ainsi que le service de surveillance continue (réanimation) en 1994. Aujourd\'hui, cet hôpital est le bâtiment le plus haut de Rochefort.',
    face: 'img/hopital_saint_charles.jpg',
    dist: -1,
    dir: -1,
    lat:45.941089,
    lon:-0.963140,
    notif:false,
    cat:'Patrimoine'
  }/*, {
    id: 29,
    name: 'La clinique Pujos',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940136,
    lon:-0.958378,
    notif:false,
    cat:'Patrimoine'
  }*/, {
    id: 30,
    name: 'L\'école de médecine navale',
    lastText: 'L\'École de médecine navale, la plus ancienne au monde, se trouvait à partir de 1788 dans l\'un des pavillons de l\'hôpital de la Marine. Elle a été restaurée dans son état du milieu du xixe siècle, avec la bibliothèque et la salle des actes, où étaient donnés les cours. Elle est devenue le musée national Ancienne École de médecine navale. Le public peut y voir entre autres les collections de dessins ramenés des diverses expéditions autour du monde par les chercheurs de l\'époque, embarqués à bords des navires.',
    face: 'img/ecole_medecine.jpg',
    dist: -1,
    dir: -1,
    lat:45.942234,
    lon:-0.965032,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 31,
    name: 'Le Centre thermal',
    lastText: 'Rochefort est aujourd\'hui la 7e ville thermale de France. La progression du nombre des curistes est liée à la fois à l\'augmentation des besoins de soins et à la qualité des infrastructures pour réponde à cette demande',
    face: 'img/thermes.jpg',
    dist: -1,
    dir: -1,
    lat:45.942364,
    lon:-0.961755,
    notif:false,
    cat:'Santé et loisirs'
  }, {
    id: 32,
    name: 'L\'ancien chateau d\'eau',
    lastText: 'De par son isolation au milieu des marais, la ville a toujours manqué d\'eau. En 1862, à la suite d\'une grande sécherese, on étudia la question d\'une vaste distribution d\'eau. Le château d\'eau qui date de 1876 est placé à l\'endroit le plus haut de Rochefort, à proximité de l\'ancien hôpital. Il avait une capacité de stockage de 2 000 mètres cubes dans des cuves reposant sur des voutes croisées en berceau de style néo-classique. La façade principale donne sur la rue Galliéni. La façade arrière était occupée par les anciens remparts aujourd\'hui démolis. Le château d\'eau a fonctionné jusqu\'aux années 1950.',
    face: 'img/chateau_d_eau.jpg',
    dist: -1,
    dir: -1,
    lat:45.941688,
    lon:-0.962306,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 33,
    name: 'Créche Sainte-Marie',
    lastText: 'La crêche Saint-Marie est l\'une des plus anciennes de France. Elle a été initialement été créé par des soeurs. Toujours en fonctionnement, elle n\'a aujourd\'hui plus aucun caractère religieux.' ,
    face: 'img/creche_sainte_marie.jpg',
    dist: -1,
    dir: -1,
    lat:45.938265,
    lon:-0.958731,
    notif:false,
    cat:'Insolite'
  }/*, {
    id: 34,
    name: 'La vieille forme',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.944729,
    lon:-0.954789,
    notif:false,
    cat:'Patrimoine'
  }*/, {
    id: 35,
    name: 'La Maison de Pierre Loti',
    lastText: 'L’officier de Marine Julien Viaud (1850-1923), en littérature Pierre Loti, passa une grande partie de sa vie à transformer sa maison natale en un lieu théâtral où il se mettait en scène lors de fêtes mémorables, invitant toutes les célébrités de l’époque que son immense renom l’amenait à fréquenter. Pour ses décors, il s’inspirait à la fois du passé : salle gothique et salle Renaissance et des pays lointains d’Orient et d’Extrême-Orient, qu’il connut lors de ses lointaines missions : mosquée, salon turc, chambre arabe et salle chinoise, en grande partie disparue aujourd\'hui. Une fois passé derrière l\’austère et banale façade rochefortaise le visiteur est transporté dans l\’univers magique et exotique de l\’écrivain qui fascine toujours autant plus d’un siècle après sa création.',
    face: 'img/maison_pierre_loti.jpg',
    dist: -1,
    dir: -1,
    lat:45.934034,
    lon:-0.962762,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 36,
    name: 'Les remparts',
    lastText: 'Les remparts ont été conservés sur deux portions assez larges malgré l\'ordre de démolition en 1923. Une portion se situe près de la porte Begon en bordure de la D911 et l\'autre plus petite au rond-point de l\'avenue du 11 novembre. On peut notamment admirer en bordure du cours Roy-Bry, une Échauguette en pierre de forme pentagonale portée sur culot lisse.',
    face: 'img/remparts.jpg',
    dist: -1,
    dir: -1,
    lat:45.944790,
    lon:-0.955861,
    notif:false,
    cat:'Patrimoine'
  }/*, {
    id: 37,
    name: 'Caserne Latouche-Tréville',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.940979,
    lon:-0.959442,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 38,
    name: 'La Forme Napoléon III',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936188,
    lon:-0.956637,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 39,
    name: 'La Maison du Roy',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.936918,
    lon:-0.957241,
    notif:false,
    cat:'Patrimoine'
  }*/, {
    id: 40,
    name: 'Le monument à Pierre Loti',
    lastText: 'Erigé square Trivier et inauguré en 1950, (centenaire de la naissance de Loti) ce monument commémoratif est composé d’une statue de bronze représentant Loti en uniforme d’officier de marine sur la proue d’un bateau. Deux fresques de part et d’autre en marbre gris représentent, d’un côté deux bateaux et une femme japonaise et de l’autre, trois femmes et un pêcheur. Au revers du monument sont gravés les titres des œuvres de Pierre Loti.',
    face: 'img/monument_pierre_loti.jpg',
    dist: -1,
    dir: -1,
    lat:45.936483,
    lon:-0.964801,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 41,
    name: 'Musée des commerces d\'autrefois',
    lastText: 'Le Musée des Commerces d\'autrefois est un musée privé, spécialisé dans l\'exposition et la reconstitution d\'une vingtaine de boutiques et d\'ateliers du début du xxe siècle et qui a la particularité d\'offrir aux visiteurs la plus riche collection française d\'objets publicitaires. C\'est l\'un des musées les plus fréquentés de la ville avec environ 26 000 visiteurs chaque année dont un grand nombre sont des touristes lors de la saison estivale2.',
    face: 'img/musee_commerce_autrefois.jpg',
    dist: -1,
    dir: -1,
    lat:45.936468,
    lon:-0.960190,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 42,
    name: 'Kiosque à musique du Square Parat',
    lastText: 'En 1883, eut lieu à Rochefort L\'Exposition industrielle,maritime, scolaire, scientifique, artistique et horticole, importante manifestation qui devait saluer la réussite économique de la cité. Pour l\'occasion, un palais d\'exposition était construit Cours Roy-Bry, agrémenté d\'un jardin. Ne subsiste aujourd\'hui que le jardin (rebaptisé Square Parat en l\'honneur du maire de Rochefort de l\'époque) au centre duquel trône un kiosque à musique, déplacé des allées de l\'Exposition dans le jardin.',
    face: 'img/kiosque.jpg',
    dist: -1,
    dir: -1,
    lat:45.937550,
    lon:-0.966810,
    notif:false,
    cat:'Insolite'
  }, {
    id: 43,
    name: 'Le Jardin de la Marine',
    lastText: 'Situé entre la Maison du Roy, longtemps préfecture maritime, et la gendarmerie, il fut le jardin botanique de l\’arsenal de Rochefort. Un premier jardin a été aménagé par l\’intendant Bégon en 1697 mais il disparut à la mort de ce dernier en 1710.Il fallut attendre 1738 pour qu\’un nouveau jardin botanique soit créé. Il avait été jugé utile pour l\’instruction des élèves en formation à l\’école de chirurgie fondée par Jean Cochon-Dupuy en 1722. Ces chirurgiens, destinés à embarquer sur les vaisseaux du roi, devaient connaître les plantes locales et exotiques pour exercer leur art. Car l\’endroit servait aussi à entreposer les plantes qui arrivaient des colonies avant leur envoi au jardin du roi à Paris. Le 19ème siècle connut l\’apogée du jardin botanique avant son abandon en 1896.',
    face: 'img/jardin_marine.jpg',
    dist: -1,
    dir: -1,
    lat:45.939288,
    lon:-0.957136,
    notif:false,
    cat:'Incontournable'
  }/*, {
    id: 44,
    name: 'Le Jardin des Retours',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.939524,
    lon: -0.954978,
    notif:false,
    cat:'Incontournable'
  }*/, {
    id: 45,
    name: 'Le potager du Roy',
    lastText: 'L\’actuel Potager du Roy était déjà au XIXème siècle un jardin potager. Aujourd\’hui, ceint de murs, il est un espace d\’éveil idéal pour les jardiniers en herbe des écoles de Rochefort sous la conduite de Philippe le jardinier des espaces verts de la ville. Au-delà du potager traditionnel riche d\’une trentaine de variétés de légumes locaux, d\’un verger planté de poiriers Duchesse d\’Angoulême, de pommiers Reinette de La Rochelle il présente des espaces de nature liés aux voyages. ',
    face: 'img/potager_du_roy.jpg',
    dist: -1,
    dir: -1,
    lat:45.938031,
    lon:-0.957904,
    notif:false,
    cat:'Insolite'
  }/*, {
    id: 46,
    name: 'Chemin de la Charente',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.935527,
    lon:-0.955648,
    notif:false,
    cat:'Incontournable'
  }, {
    id: 47,
    name: 'Le radeau de la méduse',
    lastText: '',
    face: '',
    dist: -1,
    dir: -1,
    lat:45.934749,
    lon:-0.957849,
    notif:false,
    cat:'Insolite'
  }*/, {
    id: 48,
    name: 'Le puit rue Edouard Grimaux',
    lastText: 'En 1851, le Maire de Rochefort ordonna la construction des PUITS-FONTAINES communs à plusieurs propriétaires en remplacement des nombreux puits à ciel ouvert qui existaient sur la voie publique et qui étaient source de dangers et de mauvaise hygiène.',
    face: 'img/puit_grimault.jpg',
    dist: -1,
    dir: -1,
    lat:45.934213,
    lon:-0.961716,
    notif:false,
    cat:'Insolite'
  }, {
    id: 49,
    name: 'Le puit rue Victor Hugo',
    lastText: 'En 1851, le Maire de Rochefort ordonna la construction des PUITS-FONTAINES communs à plusieurs propriétaires en remplacement des nombreux puits à ciel ouvert qui existaient sur la voie publique et qui étaient source de dangers et de mauvaise hygiène.',
    face: 'img/puit_hugo.jpg',
    dist: -1,
    dir: -1,
    lat:45.938802,
    lon:-0.962897,
    notif:false,
    cat:'Insolite'
  }, {
    id: 50,
    name: 'Le puit rue Pierre Loti',
    lastText: 'En 1851, le Maire de Rochefort ordonna la construction des PUITS-FONTAINES communs à plusieurs propriétaires en remplacement des nombreux puits à ciel ouvert qui existaient sur la voie publique et qui étaient source de dangers et de mauvaise hygiène.',
    face: 'img/puit_loti.jpg',
    dist: -1,
    dir: -1,
    lat:45.933364,
    lon:-0.962795,
    notif:false,
    cat:'Insolite'
  }, {
    id: 51,
    name: 'La Poste',
    lastText: 'L\'hôtel des Postes de Rochefort a été conçu en 1911 par l\'architecte Léon Lavoine. D\'une allure imposante et de style académique, ce monument se compose d\'un grand corps central à deux étages flanqué de deux pavillons à un seul niveau. Il accueille toujours le public pour les services de La Poste.',
    face: 'img/poste.jpg',
    dist: -1,
    dir: -1,
    lat:45.937467,
    lon:-0.964483,
    notif:false,
    cat:'Patrimoine'
  }, {
    id: 52,
    name: 'Le puit rue Pasteur',
    lastText: 'En 1851, le Maire de Rochefort ordonna la construction des PUITS-FONTAINES communs à plusieurs propriétaires en remplacement des nombreux puits à ciel ouvert qui existaient sur la voie publique et qui étaient source de dangers et de mauvaise hygiène.',
    face: 'img/puit_pasteur.jpg',
    dist: -1,
    dir: -1,
    lat: 45.942571,
    lon:-0.966585,
    notif:false,
    cat:'Insolite'
  }];




  // Credit: http://stackoverflow.com/a/27943/52160
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return Math.round(d * 1000) / 1000 ;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function rad2deg(rad){
    return rad * (180/Math.PI)
  }

  function getDegrees(lat1, lon1, lat2, lon2, headX) {
    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    lat1 = deg2rad(lat1);
    lat2 = deg2rad(lat2);
    var y = Math.sin(dLon) * Math.cos(lat2);
    var x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    var brng = rad2deg(Math.atan2(y, x));
    // fix negative degrees
    if(brng<0) {
      brng=360-Math.abs(brng);
    }
    return brng - headX;
  }

  return {
    all: function() {
      return locations;
    },
    remove: function(location) {
      locations.splice(locations.indexOf(location), 1);
    },
    get: function(locationId) {
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i];
        }
      }
      return null;
    },
    computeAllDist: function(lat, lon){
	  var onlyOne = false ;
      for (var i = 0; i < locations.length; i++) {
        locations[i].dist = getDistanceFromLatLonInKm(lat,lon,locations[i].lat,locations[i].lon) ;
		if(Data.notification == true){
			if(locations[i].dist < Data.distance){
				if(onlyOne == false && locations[i].notif == false){
					onlyOne = true ;
					navigator.vibrate([500, 100, 500, 100, 500]);

					function alertDismissed() {
						// do something
					}

					navigator.notification.alert(
						locations[i].name+' est à proximité !',  // message
						alertDismissed,         // callback
						'Vous êtes proche !',            // title
						'Ok'                  // buttonName
					);
				}
				locations[i].notif = true ;
			}
		}
      }
      return null;
    },
    computeDist: function(location, lat, lon){
      var dist = getDistanceFromLatLonInKm(lat,lon,location.lat,location.lon) ;
      return dist ;
    }
    ,
    computeDirection: function(location, lat, lon, headX){
      var direction = getDegrees(lat,lon,location.lat,location.lon, headX);
      return direction ;
    }
  };

});
