import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <p className={classes.article}>
          CEO : JEA HO CHOI / Contact : +82)10-9459-6374 / Business Number :
          302-20-66624
        </p>
        <p>
          Address : JL. jababeka III G Bloc C17 BS, Kawasan Industri Jababeja
          Desa Pasir Gombong-Cikarang Utara Bekasi
        </p>
        <p>Copyright : HOAN_C</p>
      </div>
    </footer>
  );
}

export default Footer;
