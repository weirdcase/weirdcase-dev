import { v4 as uuidv4 } from 'uuid';
// // import { Link } from 'react-router-dom';
import AccordionType from '../types/AccordionType';

const BlogAccordionsList: AccordionType[] = [
  {
    idname: "competitionsdada",
    btntext: "Competition",
    visible: true,
    children: [
      <div id={uuidv4()}>
        <p>Competition? What is it exactly? We compete with others and find what? Satisfaction? Win? Is that all that’s important? We make ourselves believe that through competition we can achieve more, get success. We select someone better than us and start competing with him, until he’s defeated. Then, another selection is made and the process continues…but to what extent will it continue? This is a journey that will never end because there will always be someone who’s better than you. You may think that you are the best for a specified time but then, you will see that someone will defeat you and take your place. Then? You will try harder to get back your position but alas! You are no match for him. Then will come the time when you will get broken down, crest-fallen and sweep into depression. Even, at the end, there will be no satisfaction. Life will become harder. All past victories will seem to be meaningless.</p>

        <p>The main object of life should be to do and achieve what you like to do and not what you should do. Competition often invokes feelings of jealousy, hatred and impatience in you against your enemies with time. You don’t have to form jealousy with someone and compete to live. You just have to enjoy your time on earth. Do what pleases you (Of course, not illegal ones) and do it for fun and satisfaction, not competition. Life would become more easier then. You would maintain only one emotion at that time throughout your life i.e. happiness. Even at failure and losing, life can be fun. Just you have to see the best side of it.</p>
      </div>
    ]
  },
  {
    idname: "engineers-diarygdgdg",
    btntext: "Engineers Diary",
    visible: true,
    children: [
      <div id={uuidv4()}>
        <div className="row">
          <div className="col col-12 col-md-4">
            <img src="images/engineersdiary.png" className="accordian-image" alt="Engineers Diary"/><br/>
          </div>
          <div className="col col-12 col-md-8">
            <p>Engineers Diary is my first attempt to establish a common link between all the engineers and engineering students all around the globe.</p>
            <p>I have created an universal website where everyone will get a chance to share their thoughts, articles, suggestions, opinions, views and ideas.</p>
            <a href="https://niloydatta.blogspot.com/" className="btn btn-normal" target="_blank">Learn more</a>
          </div>
        </div>
      </div>
    ]
  },
];

export default BlogAccordionsList;