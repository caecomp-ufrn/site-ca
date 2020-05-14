import Home from './components/home/Home.vue';
import Contato from './components/contato/Contato.vue';
import Noticias from './components/noticias/Noticias.vue'
import Projetos from './components/projetos/Projetos.vue';
import Sobre from './components/sobre/Sobre.vue';
import Transparencia from './components/transparencia/Transparencia.vue';


export const routes = [
  {path: '', component: Home, titulo: 'Início'},
  {path: '/noticias', component: Noticias, titulo: 'Notícias'},
  {path: '/projetos', component: Projetos, titulo: 'Projetos'},
  {path: '/sobre', component: Sobre, titulo: 'Sobre'},
  {path: '/transparencia', component: Transparencia, titulo: 'Transparência'},
  {path: '/contato', component: Contato, titulo: 'Contato'}
];


