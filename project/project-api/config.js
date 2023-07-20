require('dotenv').config();
require('colors');


const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const IS_TESTING = process.env.NODE_ENV === 'test';
const SECRET_KEY = process.env.SECRET_KEY || "secret-dev"
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;


function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || 'postgres';
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : 'postgres';
  const dbHost = process.env.DATABASE_HOST || 'localhost';
  const dbPort = process.env.DATABASE_PORT || 5432;
  const dbTestName = process.env.DATABASE_TEST_NAME || 'project_test';
  const dbProdName = process.env.DATABASE_NAME || 'project';
  const dbName = process.env.NODE_ENV === 'test' ? dbTestName : dbProdName;
  return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;
}
const BCRYPT_WORK_FACTOR = IS_TESTING ? 1 : 13;
console.log('project API Config:'.red);
console.log('PORT:'.blue, PORT);
console.log('BCRYPT_WORK_FACTOR'.blue, BCRYPT_WORK_FACTOR);
console.log('Database:'.blue, getDatabaseUri());
console.log('API Key loaded:'.magenta, !!SPOONACULAR_API_KEY);
console.log('---');


module.exports = {
  PORT,
  IS_TESTING,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
  SECRET_KEY,
  SPOONACULAR_API_KEY,

};