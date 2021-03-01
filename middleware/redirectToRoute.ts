//middleware use router in config

// export default function redirectToRoute({ redirect, route}: any) {

//   console.log("context");
//   if (route.path == '/') {
//     redirect('/users');
//   }
//   return;
// }

//middleware use serverMiddleware in config

export default function redirectToRoute(req: any, res: any, next: Function) {

  return next();
}