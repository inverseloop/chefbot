import {Entity, model, property} from '@loopback/repository';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
