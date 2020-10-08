import {
  Table,
  Column,
  Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'types_tbl',
})
export default class TypeModel extends Model<TypeModel> {
  // @PrimaryKey
  // @Column
  // id: number;

 
  @Column
  name!: string;
  
 
  @Column
  used!: Boolean;

}
