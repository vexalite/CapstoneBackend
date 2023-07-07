import * as dotenv from 'dotenv'
dotenv.config()

import app from './src/server';

app.listen(3001, () =>{
    console.log ('holla on 3001')
})