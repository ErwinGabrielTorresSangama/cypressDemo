const { defineConfig } = require("cypress");
const comparePdf = require("compare-pdf");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task',{
        log(message){
          console.log(message)
          return null
        },

        /* 
        comparePdf
        actualPdfFile
        baselinePdfFile
        addMask y compare son funciones de la misma libreria.
        */
        async comparePdfOnePage({actual,baseline}){
          const config1 = require("./config");
          let compareResult = await new comparePdf(config1)
          .actualPdfFile(actual)
          .baselinePdfFile(baseline)
          .addMask(0,{x0:20, y0:40,x1:100,y1:70})
          .addMask(1,{x0:330, y0:40,x1:410,y1:70})
          .compare();
          console.log(compareResult);
          return compareResult.status == 'passed'
        }
      })



    },
  },
});
