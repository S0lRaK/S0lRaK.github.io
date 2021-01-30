import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { DefaultTheme, withTheme } from 'styled-components';
import { useHelmetQuery } from '../queries/useHelmetQuery';

type Props = {
  theme: DefaultTheme;
};

const Helmet = ({ theme }: Props) => {
  const { name, fullName, description, icon, imageLinkPreview } = useHelmetQuery();
  const title = `${name}' personal site`;

  return (
    <ReactHelmet htmlAttributes={{ lang: 'en', prefix: 'og: https://ogp.me/ns#'}}>
      <meta charSet="utf-8" />
      <title>{description}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={`https:${icon.favicon32.src}`} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta name="image" content={`https:${icon.favicon32.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`https:${icon.favicon32.src}`} />
      <meta name="author" content={fullName} />
      <meta property="og:title" name="title" content={title} />
      <meta property="og:description" name="description" content={description} />
      <meta property="og:image" name="image" content={`https:${imageLinkPreview.src}`} />
      <meta property="og:image:alt" content={`https:${imageLinkPreview.alt}`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://carlosgarciacarmona.me" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https:${icon.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`https:${icon.bigIcon.src}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`https:${icon.appleIcon.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`https:${icon.favicon32.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`https:${icon.favicon16.src}`}
      />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
