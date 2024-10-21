module.exports = {
    apps: [
      {
        name: "weather-app",
        script: "app.js",
        // instances: 2,
        instances: 3,
        autorestart: true,
        watch: true,
        max_memory_restart: "1G",
        env: {
          NODE_ENV: "development",
          PORT: 3002, // Development port
  
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 3003, // Production port
  
        }
      }
    ]
  };
  