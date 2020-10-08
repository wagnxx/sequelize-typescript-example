import {
  Table,
  Column,
  Model,
  //   PrimaryKey,
  //   ForeignKey,
  //   BelongsTo,
  Scopes,
  HasMany,
} from "sequelize-typescript";
import { Player } from "./Player";
import { Op } from "sequelize";
 

@Scopes({
  full: {
    include: [
      {
        model: () => Player,
        where: {
          num: {
            [Op.gte]: 6,
            [Op.lte]:8
          },
        },
      },
    ],
    where: {},
  },
})
@Table({
  tableName: "teams_tbl",
})
export class Team extends Model<Team> {
  @Column
  name!: string;

  @HasMany(() => Player)
  players!: Player[];
}
