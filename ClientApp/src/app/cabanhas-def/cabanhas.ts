//definimos el modelo a seguir de las cabañas
export class Cabanhas {
  nombre: string;
  url: string;
  definicion: string;
  cantidadTotal: number;
  cantidadDisponible: number;

}
//creamos una constante de array de cabañas de los que se cogeran los datos para mostrarlos mas adelante
export const CABANHAS: Cabanhas[] = [
  {
    nombre: "Katlans",
    url:
      "https://cdn.pixabay.com/photo/2015/09/18/11/37/rustic-945421__340.jpg",
    definicion: "Una alegre cabaña en los alpes para 4 personas",
    cantidadTotal: 4,
    cantidadDisponible: 3,
  },
  {
    nombre: "Noruegans",
    url:
      "https://cdn.pixabay.com/photo/2015/12/08/00/48/cabin-1082058__340.jpg",
    definicion: "Preciosa y solitaria cabaña en la nieve",
    cantidadTotal: 5,
    cantidadDisponible: 1,
  },
  {
    nombre: "Nature Land",
    url:
      "https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620__340.jpg",
    definicion:
      "Perfecta cabaña en medio del bosque para sumergirte en la naturalez por completo",
    cantidadTotal: 3,
    cantidadDisponible: 3,
  },
];
