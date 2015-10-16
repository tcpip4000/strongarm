module.exports = function(app) {
  app.dataSources.mypg.automigrate('Agency', function(err) {
    if (err) throw err;

    app.models.Agency.create([
      {name: "Limonar", code: 101},
      {name: "Bellavista", code: 102},

    ], function(err, agencies) {
      if (err) throw err;

      console.log("Models created:" + agencies);
    })
  });

}
