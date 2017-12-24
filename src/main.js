export function configure(aurelia){
  aurelia.use.basicConfiguration();
  aurelia.start().then(()=> aurelia.setRoot()); //Configuring the root component of the hierarchy
}
