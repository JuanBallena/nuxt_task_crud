import Router from 'express';
import { userController } from '../controller/UserController';
import { postController } from '../controller/PostController';

const router = Router();

router.get('/users', userController.index);
router.get('/users/:id', userController.show);

router.get('/posts', postController.index);
router.post('/posts', postController.store);

export default router;

