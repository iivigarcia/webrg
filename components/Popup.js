import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(props.body)

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Leer Más
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          <p>R&oacute;mulo Garc&iacute;a fue un excelente m&uacute;sico. Hombre de clase trabajadora, tuvo que salir a trabajar a los 15 a&ntilde;os para colaborar con su familia y poder seguir incrementando conocimientos en su pasi&oacute;n: &ldquo;La guitarra&rdquo;.<br />
Con el correr de los a&ntilde;os adem&aacute;s de trabajar, comenz&oacute; a dar clases particulares de guitarra, pero no era lo que quer&iacute;a realmente. Le interesaban otras cosas. Motivado por su gran pasi&oacute;n y por el incesante pedido de sus alumnos, comenz&oacute; a comprar guitarras para vend&eacute;rselas a estos. Pero su inter&eacute;s fue m&aacute;s all&aacute;.</p>

<p>Para su primera compra tuvo que vender un tocadiscos que ten&iacute;a en su casa.<br />
M&aacute;s adelante comenz&oacute; a comprar las guitarras en crudo (sin lustre) y las mandaba a lustrar por otro lado, de esa manera aceleraba los tiempos de fabricaci&oacute;n y bajaba los costos.</p>

<p>As&iacute; comenzaron sus investigaciones hasta por fin poder comenzar &ldquo;muy&rdquo; lentamente a producir en el fondo de su casa las primeras guitarras &ldquo;R&oacute;mulo Garc&iacute;a&rdquo;. Los avances continuaron, las cosas marchaban muy bien, y as&iacute; consigui&oacute; su primer gran logro: &ldquo;el primer local&rdquo; que fue en su propia casa, ni m&aacute;s ni menos que en el garaje. En Remedios de Escalada. Ya dispon&iacute;a de su peque&ntilde;a f&aacute;brica y local propio. Como la producci&oacute;n superaba lo que all&iacute; vend&iacute;a, emprendi&oacute; los primeros viajes al interior del pa&iacute;s. Primer destino: Rosario.</p>

<p>El apoyo y est&iacute;mulo de su familia, principalmente de su esposa Olga, hicieron que las cosas siguieran creciendo m&aacute;s y m&aacute;s. As&iacute; unos a&ntilde;os despu&eacute;s inauguro su segundo local, tambi&eacute;n en Remedios de Escalada, una esquina de aproximadamente 300m2. Por aquellos a&ntilde;os (1976) comienza a desarrollarse otro gran proyecto, una f&aacute;brica modelo para la &eacute;poca.</p>

<p>La misma, de 2.000m2, se estableci&oacute; en Lomas de Zamora, con grandes oficinas, pa&ntilde;ol, importante sector de lustre, zona de almacenamiento de maderas, entrada de camiones, casa para caseros y doble entrada por diferentes calles. Tambi&eacute;n en el a&ntilde;o 1978 se inauguro un local en Liniers, Timoteo Gordillo 9, el cual ten&iacute;a como responsable a su padre, Don R&oacute;mulo A. Garc&iacute;a. Siempre con su perfil familiar, padre, esposa y suegros.</p>

<p>As&iacute; fue creciendo tanto la f&aacute;brica como locales. Siempre con el amor y la dedicaci&oacute;n de una persona muy apasionada, talentosa, innovadora, con una visi&oacute;n y capacidad de desarrollo realmente asombrosa; con inmensos deseos de realizaci&oacute;n.<br />
Recordemos que comenz&oacute; de la nada.<br />
Un verdadero ejemplo de lo que es un emprendedor.</p>

<p>Dise&ntilde;&oacute; y cre&oacute; maquinarias especiales para la fabricaci&oacute;n de guitarras que le dieron precisi&oacute;n y rapidez a la producci&oacute;n.</p>

<p>Por aquellos a&ntilde;os finalmente lleg&oacute; la inauguraci&oacute;n de su primer local en la zona de la m&uacute;sica, a unos metros de Sarmiento. Rodr&iacute;guez Pena 268, pero su anhelo era situarse en la mism&iacute;sima Sarmiento, &ldquo;la calle de la m&uacute;sica&rdquo;.</p>

<p>En la d&eacute;cada de los 80 se estableci&oacute; lo que hoy en d&iacute;a sigue siendo la casa central: &ldquo;Casa de M&uacute;sica R&oacute;mulo Garc&iacute;a&rdquo;, en la calle de la m&uacute;sica. A mediados de los 80 con la incorporaci&oacute;n de su hijo mayor Alejandro y unos a&ntilde;os m&aacute;s tarde Lorena, comenzaron planes de cambio.</p>

<p>Viajes, investigaci&oacute;n de mercado y an&aacute;lisis de la macro econom&iacute;a en &eacute;pocas de grandes cambios junto a su hijo Alejandro para continuar adecuadamente con la esencia de la empresa: &ldquo;los mejores productos a mejores precios del mercado&rdquo;.</p>

<p>Fue entonces con el correr de los a&ntilde;os, aquella f&aacute;brica de guitarras, se transform&oacute; en el Grupo R&oacute;mulo Garc&iacute;a S.A.</p>

<p>La Empresa comenz&oacute; a importar de Oriente ( Indonesia, China, Korea ). Se desarrollaron productos que, basados en el conocimiento de la fabricaci&oacute;n, hicieron de los mismos, productos diferenciales en nuestro mercado. Luego, se comenz&oacute; con la distribuci&oacute;n en forma exclusiva para nuestro pa&iacute;s, de marcas de gran prestigio internacional, como Ampeg, Schecter, Dean, Dime, Ddrum, SX, Crate, Medeli, Crafter, AXL Guitars, Taurus, Soundbarrier, Accord, Lumase.</p>

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
