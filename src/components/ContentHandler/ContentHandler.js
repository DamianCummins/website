import React, {Component} from "react";
import Header from "../../components/Header";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";
import styles from "./ContentHandler.scss";

class ContentHandler extends Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div className="content">
				<div className="maincontent" style={styles.maincontent}>
					<Header/>
					<ProjectList/>
					<Footer/>
				</div>
			</div>
		);
	}
}

export default ContentHandler;