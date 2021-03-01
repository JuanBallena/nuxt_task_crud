import Router from 'express';

const userRoutes = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
userRoutes.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
userRoutes.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default userRoutes

// import Router from 'express';
// // import { mysqlConnection } from '../database/config';
// import UserController from "../../api/controller/UserController";
// const router = Router();

// router.get('/pokemones', UserController.index);

// /** Index 
// router.get('/pokemones', function (req: any, res: any) {
//     mysqlConnection.query('SELECT * FROM pokemon', function (err: any, rows: any, fields: any) {
//         if (!err) {
//             res.json(rows);
//         }
//         else {
//             console.log(err);
//         }
//     });
// }); */
// /** Show 
// router.get('/pokemones/:id', (req: any, res: any) => {
//     const id = req.params.id;
//     mysqlConnection.query('SELECT * FROM pokemon WHERE id = ?', [id], (err: any, rows: any, fields: any) => {
//         if (!err) {
//             res.json(rows);
//         }
//         else {
//             console.log(err);
//         }
//     })
// });*/
// /** Create */
// router.post('/pokemones', (req: any, res: any) => {
//     const { id, nombre, tipo } = req.body;
//     const query = 'CALL pokemonAddOrEdit(?, ?, ?)';
//     mysqlConnection.query(query, [id, nombre, tipo], (err: any, rows: any, fields: any) => {
//         if (!err) {
//             res.json({ response: 'Success created.'});
//         }
//         else {
//             console.log(err);
//         }
//     })
// });
// /** Update */
// router.put('/pokemones/:id', (req: any, res: any) => {
//     const { id } = req.params;
//     const { nombre, tipo } = req.body;
//     const query = 'CALL pokemonAddOrEdit(?, ?, ?)';
//     mysqlConnection.query(query, [id, nombre, tipo], (err: any, rows: any, fields: any) => {
//         if (!err) {
//             res.json({ response: 'Success updated.'});
//         }
//         else {
//             console.log(err);
//         }
//     })
// });
// /** Delete */
// router.delete('/pokemones/:id', (req: any, res: any) => {
//     const { id } = req.params;
//     mysqlConnection.query('DELETE FROM pokemon WHERE id = ?', [id] , (err: any, rows: any, fields: any) => {
//         if (!err) {
//             res.json({ response: 'Success deleted.'});
//         }
//         else {
//             console.log(err);
//         }
//     })
// });
// module.exports = router;
