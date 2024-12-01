import CardType from '../types/CardType'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const DashboardCardList: CardType[] = [
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
    title: "Competition",
    imgsrc: "",
    imgalt: "",
    footer: "Last updated years ago",
    visible: true,
    children: [
      <div>
        <p>Competition? What is it exactly? We compete with others and find what?</p>
        <p>Satisfaction? Win? Is that all that’s important?</p>
        <Link to="/blog" className="btn btn-normal">Read more</Link>
      </div>
    ]
  },
  {
    id: uuidv4(),
    header: "Featured",
    title: "Engineers Diary",
    imgsrc: "images/engineersdiary.png",
    imgalt: "Engineers Diary",
    footer: "Last updated years ago",
    visible: true,
    children: [
      <div>
        <p>An attempt to share thoughts, articles, suggestions, opinions, views and ideas.</p>
        <a href="https://niloydatta.blogspot.com/" className="btn btn-normal" target="_blank">Learn more</a>
      </div>
    ]
  },
];

export default DashboardCardList;