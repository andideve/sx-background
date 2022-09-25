import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

interface BaseProps {
  background?: ResponsiveValue<CSSProperties['background']>;
  backgroundImage?: ResponsiveValue<CSSProperties['backgroundImage']>;
  backgroundSize?: ResponsiveValue<CSSProperties['backgroundSize']>;
  backgroundPosition?: ResponsiveValue<CSSProperties['backgroundPosition']>;
  backgroundRepeat?: ResponsiveValue<CSSProperties['backgroundRepeat']>;
}

interface OtherProps {
  bgImage?: BaseProps['backgroundImage'];
  bgSize?: BaseProps['backgroundSize'];
  bgPosition?: BaseProps['backgroundPosition'];
  bgRepeat?: BaseProps['backgroundRepeat'];
}

export type BackgroundProps = BaseProps & OtherProps;
