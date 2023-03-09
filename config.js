module.exports = {
        paths: {
            //Ruta donde se ubica el archivo actual en pdf que se va comparar
            actualPdfRootFolder: process.cwd() + "/data/actualPdfs",
            //Ruta del archivo base en pdf que se va comparar   
            baselinePdfRootFolder: process.cwd() + "/data/baselinePdfs",
            actualPngRootFolder: process.cwd() + "/data/actualPngs",
            baselinePngRootFolder: process.cwd() + "/data/baselinePngs",
            diffPngRootFolder: process.cwd() + "/data/diffPngs"
        },
        settings: {
            //imageEngine: 'graphicsMagick',
            density: 100,
            quality: 70,
            tolerance: 0,
            threshold: 0.05,
            cleanPngPaths: true,
            matchPageCount: true,
            //disableFontFace: true,
            //verbosity: 0
        }
    
}