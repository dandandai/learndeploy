module.exports = {
  apps: [
    {
      name: 'learndeloy-app',
      script: './src/index.js',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};