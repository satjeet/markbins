import React, {Component} from 'react';
import Accounts from './accounts';


class Header extends Component{

	onBindClick(event){

		event.preventDefault();
		Meteor.call('bins.insert');

	}

	render(){

		return(
			<nav className="nav navbar-default">
		    	<div className="navbar-header  ">
		    		<a className="navbar-brand">MarkBin </a>	
		    	</div>

		    	<ul className="nav navbar-nav">
		    		<li>
		    			<Accounts />
		    		</li>

		    		<li>
		    			<a href="#" onClick={this.onBindClick.bind(this)}>Create Bin</a>
		    		</li>

		    	</ul>

		    </nav>	

		);


	}
}


//exportar componente
export default Header;