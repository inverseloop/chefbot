import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Recipe} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RecipeRepository extends DefaultCrudRepository<
  Recipe,
  typeof Recipe.prototype.id
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Recipe, dataSource);
  }
}
