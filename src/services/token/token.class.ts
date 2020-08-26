import { Service, MemoryServiceOptions } from 'feathers-memory';
import { Application } from '../../declarations';

export class Token extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<MemoryServiceOptions>, app: Application) {
    super(options);
  }

  async createToken(authResult: any) {
    this.create({ text: 'hello' });
  }

  async checkToken(authResult: any) {
    // do some check
    this.createToken(authResult);
  }
}
