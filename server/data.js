// Create base file searches
// What to store:
// 1. ID of stores website
// 2. Title of website
// 3. URL of page
// 4. search keywords

const searches = [
  {
    id: 1,
    title: '',
    url: 'https://www.bbc.co.uk/sport/football',
    desc: '',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 2,
    title: 'Football - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Football',
    desc:
      'Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of ...',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 3,
    title: 'Football Games, Results, Scores, Transfers, News | Sky Sports',
    url: 'https://www.skysports.com/football',
    desc: '',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 4,
    title: 'Premier League Football News, Fixtures, Scores & Results',
    url: 'https://www.premierleague.com/',
    desc:
      'Gives fixture information, top news stories, score updates, links to Premier League club websites, statistics and podcasts.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 5,
    title: 'Bundesliga | official website',
    url: 'https://www.bundesliga.com/',
    desc:
      'The official Bundesliga website. The latest news, info and stats for clubs in 2020-2021 can be found here',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 6,
    title: 'FIFA - FIFA.com',
    url: 'https://www.fifa.com/',
    desc:
      'The official site of the international governing body of football with news, national associations, competitions, results, fixtures, development, organisation, world ...',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 7,
    title: 'SOCCER-SPAIN Spanish football website in English',
    url: 'http://www.soccer-spain.com/',
    desc:
      'SOCCER-SPAIN Spanish soccer football website in English; La Liga fixtures, results, match reports, transfers, news, stats; Official Spanish club shirts and prints.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 8,
    title: 'Football - news, transfers, fixtures, scores, pictures - talkSPORT',
    url: 'https://talksport.com/football/',
    desc:
      'The home of Football on talkSPORT - Bringing you the latest Football news, exclusive interviews, Transfer Rumours and features.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 9,
    title: 'The website for the English Football Association, Emirates FA ...',
    url: 'https://www.thefa.com/',
    desc:
      'FIND FOOTBALL NEAR YOU. Location Please enter a location. Type. Type, Clubs, Just Play, Wildcats, 5-a-side Centre, Age UK - Walking Football. More info.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 10,
    title: 'Football - Latest football news and fantasy football | Metro UK',
    url: 'https://metro.co.uk/sport/football/',
    desc: 'Football News. Last Updated: 9:13 GMT, 10 March 2021 ...',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 11,
    title: 'Cooking for...recipes - BBC Good Food',
    url: 'https://www.bbcgoodfood.com/recipes/category/all-cooking-for',
    desc:
      'Whether you need a wholesome dinner for one or a quick meal for a crowd, we have the perfect recipes for you. Cater for every diet and palate with our favourite ...',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 12,
    title: 'Cooking - Wikipedia',
    url: 'https://en.wikipedia.org/wiki/Cooking',
    desc: 'Cooking or cookery is the art, science, and craft of using heat to prepare food for consumption.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 13,
    title: 'Everyday Cooking Recipes | Allrecipes',
    url: 'https://www.allrecipes.com/recipes/1642/everyday-cooking/',
    desc: 'Everyday Cooking Recipes. Speedy weeknight dinners, 5-ingredient dishes, quick and easy meals, plus kid-pleasing snacks and desserts.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 14,
    title: 'Cooking at Home - HelpGuide.org',
    url: 'https://www.helpguide.org/articles/healthy-eating/cooking-at-home.htm',
    desc: 'Cooking at Home. We all love convenience food, but one of the simplest ways to improve your health is by preparing more home-cooked meals.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 15,
    title: 'COOK | Frozen Ready Meals, Delivered Meals, Prepared ...',
    url: 'https://www.cookfood.net/',
    desc: 'Remarkable frozen ready meals, prepared by our own chefs and delivered to your door via our nationwide delivery service. ',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 16,
    title: 'Cooking - Reddit',
    url: 'https://www.reddit.com/r/Cooking/',
    desc: 'r/Cooking: /r/Cooking is a place for the cooks of reddit and those who want to learn how to cook. ',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 17,
    title: 'NYT Cooking: Recipes and Cooking Guides From The New ...',
    url: 'https://cooking.nytimes.com/',
    desc: 'NYT Cooking is the digital source for thousands of the best recipes from The New York Times along with how-to guides for home cooks at every skill level.',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 18,
    title: 'Caroline\'s Cooking - Internationally inspired recipes for ...',
    url: 'https://www.carolinescooking.com/',
    desc: 'Cooking is a fantastic way to travel the world, without leaving your kitchen! There are so many flavors to try - let us walk you through some cultural classics ',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 19,
    title: 'Cooking Classy: Delicious, Easy-to-Make Recipes Everyone ...',
    url: 'https://www.cookingclassy.com/',
    desc: 'From comfort foods to indulgent dishes browse hundreds of recipes that your family will love and make over and over again. ',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 20,
    title: 'Cooking | Britannica',
    url: 'https://www.britannica.com/topic/cooking',
    desc: 'Cooking, the act of using heat to prepare food for consumption. Cooking is as old as civilization itself, and observers have perceived it as both an art and a ...',
    keywords: ['cooking', 'food', 'recipe', 'recipes'],
  },
  {
    id: 21,
    title: 'Welcome to Dancing Times - Britain\'s leading monthly dance ...',
    url: 'https://www.dancing-times.co.uk/',
    desc: 'Dancing Times, first published in 1894 as the house magazine of the Cavendish Rooms, London, a ballroom dancing establishment, is the oldest monthly ...',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 22,
    title: 'Dance for fitness - NHS',
    url: 'https://www.nhs.uk/live-well/exercise/dance-for-fitness/',
    desc: 'Line dancing. Line dances are choreographed dances performed in unison by a group of people in rows. Anybody can do it and the steps are easy to learn ...',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 23,
    title: 'People Dancing :: Home :: Foundation for Community Dance',
    url: 'https://www.communitydance.org.uk/about-people-dancing',
    desc: 'People Dancing is the development and membership organisation for community and participatory dance, driving forward inclusion and excellence through professional development',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 24,
    title: 'Dancesportinfo.net',
    url: 'https://www.dancesportinfo.net/',
    desc: 'Everything dancesport - information, competition timetable, dance practice, partner search',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 25,
    title: 'All about DanceSport at World DanceSport Federation on ...',
    url: 'https://www.worlddancesport.org/',
    desc: 'Record Numbers Attend Online Adjudicators\' Congress · The competition calendar saw some daylight · Hall of Fame to Celebrate Century of DanceSport · WDSF ...',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 26,
    title: 'World Dance Council',
    url: 'https://www.wdcdance.com/',
    desc: 'The WDC is the world authority for Professional Dancing incorporating the World Competitive Dance Committee and the World Social Dance Committee.',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 27,
    title: 'Red Bull BC One - B-Boy and B-Girl competition',
    url: 'https://www.redbull.com/gb-en/event-series/bc-one',
    desc: 'Red Bull BC One is the biggest and most prestigious one-on-one breaking competition in the world. Every year, thousands of breakers compete for a chance to represent at the Red Bull BC One World Final.',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 28,
    title: 'Alexander Whitley',
    url: 'https://www.alexanderwhitley.com/',
    desc: 'Website of choreographer Alexander Whitley',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 29,
    title: 'Sadler\'s Wells Theatre - London\'s Dance House - London',
    url: 'https://www.sadlerswells.com/',
    desc: 'The world\'s No.1 venue dedicated to international dance - presenting dance in all forms from contemporary to flamenco, ballet to hip hop and more.',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },
  {
    id: 30,
    title: 'Greenwich Dance - London',
    url: 'https://greenwichdance.org.uk/',
    desc: 'Greenwich Dance is the home of dance in South East London, hosting classes, workshops, events and performances across the Royal Borough of Greenwich.',
    keywords: ['dancing', 'ballroom', 'ballet', 'story', 'art'],
  },

];

module.exports = searches;
