System.config({
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});
System.import('index')
  .then(null, console.error.bind(console));
