import {
  Table,
  Column,
  Model,
//   PrimaryKey,
  ForeignKey,
  // BelongsTo,
//   Scopes,
//   HasMany,
} from "sequelize-typescript";
import { Team } from "./Team";
@Table({
  tableName: "players_tbl",
})
export class Player extends Model<Player> {
  @Column
  name!: string;

  @Column
  num!: number;

  @ForeignKey(() => Team)
  @Column
  team_id!: number;

  // @BelongsTo(() => Team)
  // team!: Team;
}

