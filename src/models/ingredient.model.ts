import {Entity, model, property} from '@loopback/repository';

@model()
export class Ingredient extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  group?: string;

  @property({
    type: 'string',
  })
  ndbno?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  constructor(data?: Partial<Ingredient>) {
    super(data);
  }
}
