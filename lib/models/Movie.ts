import {BelongsToMany, Column, CreatedAt, Model, Scopes, Table, UpdatedAt} from 'sequelize-typescript';
import {MovieActor} from './MovieActor';
import {Actor} from './Actor';
import {Genre} from './Genre';
import {MovieGenre} from './MovieGenre';

@Scopes(() => ({
  cast: {
    include: [{
      model: Actor,
      // through: {attributes: []},
      attributes:{
        exclude:['createdAt','updatedAt']
      }
    }],
    attributes:{
      exclude:['createdAt','updatedAt']
    }
  },
  genre: {
    include: [{
      model: Genre,
      // through: {attributes: []},
      attributes:{
        exclude:['createdAt','updatedAt']
      }
    }],
    attributes:{
      exclude:['createdAt','updatedAt']
    }
  },
  full: {
    include: [{
      model: Actor,
      through: {attributes: []},
    }, {
      model: Genre,
      through: {attributes: []},
    }],
    attributes:{
      exclude:['createdAt','updatedAt']
    },
  }
}))
@Table
export class Movie extends Model<Movie> {

  @Column
  title!: string;

  @Column
  year!: number;

  @BelongsToMany(() => Actor, {through:()=>MovieActor})
  cast?: Actor[];

  @BelongsToMany(() => Genre, () => MovieGenre)
  genres?: Genre[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

}
