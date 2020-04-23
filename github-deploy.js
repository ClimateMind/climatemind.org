const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/ClimateMind/climatemind.github.io.git',
  },
  () => {
    console.log('Deploy to GitHub complete!')
  }
)
