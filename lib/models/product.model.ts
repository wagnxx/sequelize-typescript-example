import {
  Table,
  Column,
  Model,
  // PrimaryKey,
  ForeignKey,
  BelongsTo,
  Scopes,
  HasMany,
} from "sequelize-typescript";
import DetailModel from "./detail.model";
import TypeModel from "./type.model";
import ProductorModel from "./productor.model";

@Scopes({
  full: {
    include: [() => TypeModel, () => DetailModel,() =>ProductorModel],
    where:{
       
    }
  },
})
@Table({
  tableName: "products_tbl",
})
export default class ProductModel extends Model<ProductModel> {
  // @PrimaryKey
  // @Column
  // id!: number;

  @Column
  name!: string;

  @ForeignKey(() => TypeModel)
  @Column
  type_id!: number;

  @ForeignKey(() => DetailModel)
  @Column
  detail_id!: number;

  // =========================  belongs OR group ==================================================================

  @BelongsTo(() => TypeModel)
  types!: TypeModel;

  @BelongsTo(() => DetailModel)
  detail!: DetailModel;

  @HasMany(() => ProductorModel)
  creators!: ProductorModel[];
}
