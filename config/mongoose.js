const mongoose = require('mongoose');
// for local database uses

main();

async function main() {
  try{
    let conn = await mongoose.connect('mongodb://127.0.0.1:27017/POLING_SYSTEM_APIL', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  console.log(`MongoDB connected  successfull : ${conn.connection.host}`);
  }catch(error){
    console.error(error)
  };
}