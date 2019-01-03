import {Entity, model, property} from '@loopback/repository';

@model()
export class Recipe extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id?: string;

  @property({
    type: 'string',
  })
  recipeName?: string;

  @property({
    type: 'string',
  })
  cookTime?: string;

  @property({
    type: 'string',
  })
  cookingMethod?: string;

  @property({
    type: 'object',
  })
  nutrition?: object;

  @property({
    type: 'string',
  })
  recipeCategory?: string;

  @property({
    type: 'string',
  })
  recipeCuisine?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  recipeIngredients?: object[];

  @property({
    type: 'string',
  })
  recipeYield?: string;

  @property({
    type: 'string',
  })
  suitableForDiet?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  steps?: string[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  tools?: string[];

  constructor(data?: Partial<Recipe>) {
    super(data);
  }
}
