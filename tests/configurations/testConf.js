module.exports = {
  endPoints: {
    local: {
      urls: {
        ping: 'http://localhost:9999/local/ping',
        access: 'http://localhost:9999/local/access',
        menu: 'http://localhost:9999/local/menu',
      },
    },
    ci: {
      urls: {
        ping: 'http://localhost:9999/local/ping',
        access: 'http://localhost:9999/local/access',
        menu: 'http://localhost:9999/local/menu',
      },
    }
  },
};
