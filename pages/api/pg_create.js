import conn from '../../lib/db';

export default async (req, res) => {
    try {
        const query = 'CREATE TABLE posts (test varchar(255) );'
        const result = await conn.query(
            query
        );
        console.log( "ttt",result );
    } catch ( error ) {
        console.log( error );
    }  
};