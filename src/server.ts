import app from './app';
import AppDataSource from './data-source';


  (async ()=>{

    await AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    app.listen(3001, () => {
        console.log('Server is running!')
    })
    
  })()