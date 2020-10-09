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
            [Op.lte]:8,
            // as:'player_nums'
          },
        },
        attributes:{
          include:[['num','players_nums'],'name','team_id']
        }
     
      },
    ],
    where: {},
    raw:true
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
