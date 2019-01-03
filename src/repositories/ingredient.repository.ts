import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Ingredient} from '../models';
import {MlabDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IngredientRepository extends DefaultCrudRepository<
  Ingredient,
  typeof Ingredient.prototype.id
> {
  constructor(
    @inject('datasources.mlab') dataSource: MlabDataSource,
  ) {
    super(Ingredient, dataSource);
  }
}
