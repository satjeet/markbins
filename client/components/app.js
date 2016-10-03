import React from 'react';
import Header from './header'
import BinsList from './bins/bins_list';


export default(props) =>{
	//export default() =>{


		return (

		<div>
		    <Header/>
            {props.children}
            {/* <BinsList/>    comentario html en jsx */}
		</div>

		);

}