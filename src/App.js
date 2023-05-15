import React from 'react'
import { Header } from './components/ui/Header'
import{ BrowserRouter as Router,  Switch,  Route} from 'react-router-dom';
import {EstadoView} from './components/estados/EstadoView'
import {InventarioView} from './components/inventarios/InventarioView'
import {MarcaView} from './components/marcas/MarcaView'
import {TipoView} from './components/tipos/TipoView'
import {UsuarioView} from './components/usuarios/UsuarioView'
import {InventarioUpdate} from './components/inventarios/InventarioUpdate'
import { MarcaUpdate } from './components/marcas/MarcaUpdate';
import {EstadoUpdate} from './components/estados/EstadoUpdate'
import {TipoUpdate } from './components/tipos/TipoUpdate'
import {UsuarioUpdate} from './components/usuarios/UsuarioUpdate'
 
const App = () => {
  return <Router>
    <Header />
    <Switch>
      <Route exact path= '/' component={ InventarioView }/>
      <Route exact path= '/usuarios' component={ UsuarioView }/>
      <Route exact path= '/marcas' component={ MarcaView }/>
      <Route exact path= '/estados' component={ EstadoView }/>
      <Route exact path= '/tipos' component={ TipoView }/>
      <Route exact path='/inventarios/edit/:inventarioId' component={InventarioUpdate}/>
      <Route exact path='/marcas/edit/:marcaId' component={MarcaUpdate}/>
      <Route exact path='/estados/edit/:estadoEquipoId' component={EstadoUpdate}/>
      <Route exact path='/tipos/edit/:tipoId' component={TipoUpdate}/>
      <Route exact path='/usuarios/edit/:usuarioId' component={UsuarioUpdate}/>

    </Switch>
    </Router>
  
}

export {
    App
}