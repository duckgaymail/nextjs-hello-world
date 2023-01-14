import conn from '../../lib/db';

export default async (req, res) => {
    try {
        //console.log("req nom", req.body)
        const query = 'INSERT INTO posts VALUES($1)'
        console.log("req.body.content=================")
        console.log(req.body.content)
        const values = [req.body.content]
        const result = await conn.query(
            query,
            values
        );
        //console.log( "ttt",result );
        res.status(200).json({ res: 'done' })
    } catch ( error ) {
        console.log( error );
    }  
};