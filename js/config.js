/**
 * =========================================================
 *  Configuration & Constants
 * =========================================================
 */

const CONFIG = {
  githubUsername: 'smfarukhasan',
  githubApiBase: 'https://api.github.com',
  credentials: {
    uid: '01521444472',
    pass: '12331233',
  },
  storageKeys: {
    edits: 'cv_edits_faruk',
    theme: 'cv_theme_faruk',
    auth: 'cv_auth_faruk',
    ghToken: 'cv_gh_token_faruk',
  },
  // Manual project repo names to skip in GitHub section (avoid duplicates)
  manualProjectRepos: [
    'liveHostel',
    'livePortfolio',
    'livegstapp',
    'liveautohouse',
    'livefarm',
    'liveStock',
    'khubsoja',
    'chatbot.khubsoja.com',
    'chatbotkhubsoja',
    'cardtocontact',
    'selaibari',
    'hostel_management',
    'portfolio',
  ],
};

/* Language color map for GitHub repos */
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  Swift: '#F05138',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
  PHP: '#4F5D95',
};
