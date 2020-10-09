# sequelize-typescript-starter

## Installation
```
npm install
```

## Start server
```
npm start
```





### 精髓

```js


// @Scopes({
//   full: {
//     include: [
//       {
//         model: () => Player,
//         where: {
//           num: {
//             [Op.gte]: 6,
//             [Op.lte]:8
//           },
//         },
//       },
//     ],
//     where: {},
//   },
// })
// @Table({
//   tableName: "teams_tbl",
// })








  // let result = await ProductModel.scope(req.query["scope"]).findAll({
    //   logging: true,
    //   raw: true,
    //   nest:true
    // });
    // let result = await Team.scope(req.query["scope"]).findAll({
    //   raw:true,
    //   // nest:true
    // });

 
// as single

//  attributes:[['num','players_nums'],'name','team_id']

// as copy 

//  attributes:{
//     include:[['num','players_nums'],'name','team_id']
//   }



```