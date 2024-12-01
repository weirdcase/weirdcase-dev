import CardType from '../types/CardType'
import { v4 as uuidv4 } from 'uuid';
// // import { Link } from 'react-router-dom';

const ResourcesCardList: CardType[] = [
  {
    id: uuidv4(),
    header: "Featured",
    title: "Card title",
    imgsrc: "",
    imgalt: "",
    footer: "Last updated 3 mins ago",
    visible: true,
    children: [
      <div>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-normal">Go somewhere</a>
      </div>
    ]
  },
  {
    id: uuidv4(),
    header: "Featured",
    title: "Card title",
    imgsrc: "",
    imgalt: "",
    footer: "Last updated 3 mins ago",
    visible: true,
    children: [
      <div>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-normal">Go somewhere</a>
      </div>
    ]
  },
  {
    id: uuidv4(),
    header: "Featured",
    title: "Card title",
    imgsrc: "",
    imgalt: "",
    footer: "Last updated 3 mins ago",
    visible: true,
    children: [
      <div>
        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-normal">Go somewhere</a>
      </div>
    ]
  },
];

export default ResourcesCardList;