import conn from '../../lib/db';

export default async (req, res) => {
    try {
        const query = 'CREATE TABLE posts (test varchar(255) );'
        const values = [req.body.content]
        const result = await conn.query(
            query,
            values
        );
        console.log( "ttt",result );
    } catch ( error ) {
        console.log( error );
    }  
};