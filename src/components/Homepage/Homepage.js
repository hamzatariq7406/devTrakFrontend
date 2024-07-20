import "./Homepage.css";
import Container from "react-bootstrap/Container";

import TopMobileSearch from "./TopMobileSearch";
import TopCategory from "./TopCategory";
import VideoBlock from "./VideoBlock";
import PopularChannels from "./PopularChannels";

import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Homepage = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<TopMobileSearch />
					{/* <TopCategory /> */}
					{/* <hr /> */}
					<VideoBlock />
					<hr className="mt-0" />
					<PopularChannels />
				</Container>

				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

export default Homepage;
