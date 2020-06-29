module.exports = {
  getTestEnvironment() {
    return process.env.TEST_ENV || 'local';
  }
}
