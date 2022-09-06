import { useState, useEffect, useRef } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'


function TextIFrame({ src, scroll, width, height='5em', transform, scale=2 }) {
  return (
    <div
      style={{
        width,
        height,
        padding: 0,
        overflow: scroll ? 'scroll' : 'hidden',
        scroll: 'none',
        border: '1px solid black'
      }}
    >
    <iframe 
      style={{
        width: '2000px',
        height: '2000px',
        border: '0px',
        transform: `scale(${scale})`,
        transformOrigin: transform,
      }}
      src={src}
    />
    </div>
  )
}


const Every = <TextIFrame 
        src="https://bleacherreport.com/articles/10047694-grading-every-drafted-2022-rookie-qbs-preseason-performance"
        transform='1730px 1050px'
        width='16em'
        height='7em'
        scale={1.8}
      />;

const word = <TextIFrame 
        src="https://j3s.sh/projects.html"
        transform='1443px 450px'
        width='9em'
        height='5em'
        scale={3.1}
      />;

const _in = <TextIFrame 
        src="https://math-ias.github.io/"
        transform='864px 1410px'
        width='4em'
        height='4em'
        scale={3}
      />;

const _this = <TextIFrame 
        src="https://hotemogirlfriend.blogspot.com/2022/08/all-this-life-is-about-remembering.html"
        transform='1725px 210px'
        width='4.5em'
        height='4em'
        scale={3}
      />;

const sentence = <TextIFrame 
        src="https://www.arklatexhomepage.com/news/crime/shreveport-man-just-released-from-15-year-prison-sentence-arrested/"
        transform='860px 850px'
        width='25em'
        height='7em'
        scale={2}
      />;

const will = <TextIFrame 
        src="https://www.nolo.com/legal-encyclopedia/what-is-will.html"
        transform='2080px 1250px'
        width='4em'
        height='4em'
        scale={2}
      />;

const disappear = <TextIFrame 
        src="https://www.scienceabc.com/humans/life-like-humans-suddenly-disappeared.html"
        transform='1250px 1920px'
        width='12.88em'
        height='5em'
        scale={2}
      />;

const period = <TextIFrame 
        src="http://www.katarxis3.com/Alexander_Eisenman_Debate.htm"
        transform='423px 1775.5px'
        width='5em'
        height='6em'
        scale={15}
      />;


const This_website = 
      <TextIFrame 
        src="https://support.microsoft.com/en-us/microsoft-edge/this-website-works-better-in-microsoft-edge-160fa918-d581-4932-9e4e-1075c4713595"
        transform='5000px 1400px'
        width='18em'
        height='5em'
        scroll
        scale={1.1}
      />;

function ElegyContainer () {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' , justifyContent: 'space-around' }}
    >
      {Every}
      {word}
      {_in}
      {_this}
      {sentence}
      {will}
      {disappear}
      {period}
    </div>
  )
}


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
    <ElegyContainer />
      <p style={{ maxWidth: '22em', paddingTop: '2em', fontFamily: 'Roboto Mono' }}>
        The average lifespan of a URL is two years. Each word on this website is displayed live from a distinct webpage. As the internet decays, this page will follow.
      </p>
    </div>
  )
}
