import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Lazar Elvis Portofoliu</title>
      <meta
        name="Salut! Eu sunt Elvis și acesta este portofoliul meu."
        content="Salut! Eu sunt Lazar Elvis
și acesta este portofoliul meu.
Scopul acestui portofoliu este să îi ajute pe ceilalți să vadă ce fac și să îmi evidențiez abilitățile în fața celor interesați de aplicații grozave."
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
