import {model, property, belongsTo} from '@loopback/repository';
import {BaseEntity} from '.';
import {DevEnvironment} from './dev-environment.model';

@model()
export class Repository extends BaseEntity {
  @property({
    type: 'string',
    id: true,
    useDefaultIdType: false,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  giturl: string;

  @property({
    type: 'string',
  })
  framework?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'string',
  })
  projectId?: string;

  @belongsTo(() => DevEnvironment)
  devEnvironmentId: string;

  constructor(data?: Partial<Repository>) {
    super(data);
  }
}

export interface RepositoryRelations {
  // describe navigational properties here
}

export type RepositoryWithRelations = Repository & RepositoryRelations;
