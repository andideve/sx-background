import { system, SystemConfig } from '@andideve/sx-core';
import { BackgroundProps } from './types';

const config: SystemConfig<BackgroundProps> = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
};
config.bgImage = 'backgroundImage';
config.bgSize = 'backgroundSize';
config.bgPosition = 'backgroundPosition';
config.bgRepeat = 'backgroundRepeat';

export const background = system(config);

export { BackgroundProps };
export default background;
