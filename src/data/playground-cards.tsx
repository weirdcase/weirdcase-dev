import CardType from '../types/CardType'
import { v4 as uuidv4 } from 'uuid';
// // import { Link } from 'react-router-dom';

const PlaygroundCardList: CardType[] = [
  {
    id: uuidv4(),
    header: "Featured",
    title: "Prisoner's Dilemma",
    imgsrc: "",
    imgalt: "",
    footer: "Last updated months ago",
    visible: true,
    children: [
      <div>
        <p>Play between <strong>two</strong> players using different <strong>strategies</strong> to find who wins!</p>
        <p>Available Strategies to choose from - <em id="strategiesList">Tit for tat, Attack, Generous, Unforgiving, Sneaky, Random, Jump, End up killing, Con</em></p>
        <a href="../../../../../gameTheory/index.html" className="btn btn-normal" target='_blank'>Play</a>
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

export default PlaygroundCardList;