import conn from '../../lib/db';

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
        const query = 'select * from posts'
        const result = await conn.query(
            query,
        );
        //console.log( "ttt",result );
        res.status(200).json(result.rows)
    } catch ( error ) {
        console.log( error );
    }  
};