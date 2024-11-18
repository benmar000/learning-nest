import * as convict from 'convict'; // changing to default import throws: TypeError: (0 , convict_1.default) is not a function
import { join } from 'path';
import { Config } from './config.schema';

const config = convict<Config>({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
    arg: 'env',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port',
  },
});

const env = config.get('env');

config.loadFile(join(__dirname, `./${env}.json`));

config.validate({ allowed: 'strict' });

export default config;
