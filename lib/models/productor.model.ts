import {
  Table,
  Column,
  Model,
  // PrimaryKey,
  ForeignKey,
  BelongsTo,
  // Scopes,
} from "sequelize-typescript";
import ProductModel from "./product.model";
 

// @Scopes({
//   full: {
//     include: [() => TypeModel, () => DetailModel],
//     where:{
//       ['used']:1
//     }
//   },
// })
@Table({
  tableName: "productors_tbl",
})
export default class ProductorModel extends Model<ProductorModel> {
  // @PrimaryKey
  // @Column
  // id!: number;

  @Column
  name!: string;

  @ForeignKey(() => ProductModel)
  @Column
  pid!:number;

  @BelongsTo(() => ProductModel)
  product!:ProductModel

}
