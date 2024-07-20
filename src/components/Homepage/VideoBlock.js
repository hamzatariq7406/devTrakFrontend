import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import VideoCard from "../Atomics/VideoCard/VideoCard";

const races = [
	{
		title: 'Bugatti Vision GT vs Super Cars at Highlands',
		img: 'https://i3.ytimg.com/vi/bHWgc5MPnPA/maxresdefault.jpg',
		track: 'Andorra',
	},
	{
		title: 'WRC Rally Finland 2019 - Motorsportfilmer.net',
		img: 'https://i3.ytimg.com/vi/vP9QpcqzSns/maxresdefault.jpg',
		track: 'Angola',
	},
	{
		title: 'Trophy Truck BANGERS || Baja Edition || 1 Hour Special',
		img: 'https://i3.ytimg.com/vi/q2ZLYyx2xXM/maxresdefault.jpg',
		track: 'Alaska Raceway Park',
	},
	{
		title: 'The Best of WRC Rally 2020 | Crashes, Action, Maximum Attack',
		img: 'https://i3.ytimg.com/vi/qk7pZnxCX2o/maxresdefault.jpg',
		track: 'Alaska Raceway Park',
	},
	{
		title: 'Race 1 – 2023 Lamborghini Super Trofeo Cup At Watkins Glen International',
		img: 'https://i3.ytimg.com/vi/waOr9d2b08s/maxresdefault.jpg',
		track: 'Byron Dragway',
	},
	{
		title: '2022 Michelin GT Challenge at VIR',
		img: 'https://i3.ytimg.com/vi/UEahQP9moaQ/maxresdefault.jpg',
		track: 'Firebird Raceway',
	},
	{
		title: '$50 MILLION HYPERCAR GATHERING IN THE NETHERLANDS!',
		img: 'https://i3.ytimg.com/vi/hQYRDNl-lGI/maxresdefault.jpg',
		track: 'Firebird Raceway',
	},
	{
		title: 'Bugatti Vision GT vs Super Cars at Highlands',
		img: 'https://i3.ytimg.com/vi/bHWgc5MPnPA/maxresdefault.jpg',
		track: 'Andorra',
	},
]

export default function VideoBlock() {

	return (
		<>
			<div className="video-block section-padding ">
				<Row>
					<Col md={12}>
						<SectionHeader heading="All Races" />
					</Col>
					{races?.map(({ title, img, track }, i) => (
						<Col key={i} xl={3} sm={6} className="mb-3 home-page-card">
							<VideoCard
								imgSrc={img}
								time="3:50"
								videoTitle={title}
								videoCategory={track}
								views="1.8M"
								timeAgo="11 months"
							/>
						</Col>
					))}
				</Row>
			</div>
		</>
	);
}
