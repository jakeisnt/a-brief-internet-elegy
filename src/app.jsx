import { useState, useEffect, useRef } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'

// function useIsIFrameLoaded(iframeRef) {
//   const [isIFrameLoaded, setIsIFrameLoaded] = useState(false);
//   const iframeCurrent = iframeRef.current;

//   useEffect(() => {
//     iframeCurrent?.addEventListener('load', () => setIsIFrameLoaded(true));
//     if (iframeCurrent?.contentDocument?.childNodes) {
//       setIsIFrameLoaded(true);
//     }

//     return () => {
//       iframeCurrent?.removeEventListener('load', () => setIsIFrameLoaded(true));
//     };
//   }, [iframeCurrent]);

//   return isIFrameLoaded;
// }


function findText(node, text) {
  console.log('node and children', node, node.childNodes);
  if(node.childNodes.length === 0) {//leaf node
    return node.textContent.indexOf(text) === -1 ? [] : [node];
  }

  let matchingNodes = new Array();

  node.childNodes.forEach(child => {
    matchingNodes.concat(findText(child, text));
  });

  return matchingNodes;
}


function TextIFrame({ src, scroll, text }) {
  const ref = useRef(null);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const [isFrameRendered, setIsFrameRendered] = useState(false);


  // useEffect(() => {
  //   ref.current.onload = () => setIsFrameLoaded(true);
  //   // ref.current.addEventListener('afterLayout', () => setIsFrameLoaded(true));
  //   // return () => {
  //   //   ref.current.addEventListener('afterLayout', () => setIsFrameLoaded(true));
  //   // }
  // }, []);

  // useEffect(() => {
  //   if (isFrameLoaded) {

  //     const idoc = ref.current.contentWindow || ref.current.contentDocument;
  //     if (idoc.document) {
  //       console.log("theres a doc!");
  //     }
  //   }

  // }, [isFrameLoaded]);


  useEffect(() => {
    console.log('is iframe loaded', isFrameLoaded);
    if (ref?.current?.contentDocument) {
      console.log('looking for text:', findText(ref.current.contentDocument.document, text));
    }
  }, [isFrameLoaded, ref?.current?.contentDocument?.document, text]);


  return (
    <div
      style={{
        width: '9.45em',
        height: '5em',
        padding: 0,
        overflow: scroll ? 'scroll' : 'hidden',
      }}
    >
    <iframe 
      ref={ref}
      style={{
        width: '2000px',
        height: '2000px',
        border: '0px',
        transform: 'scale(2)',
        transformOrigin: '1790px 575px',
      }}
      src={src}
    />
    </div>
  )

}

function ElegyContainer () {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row' }}
    >
      <TextIFrame 
        src="https://jse.li" 
        text="software"
      />
      <TextIFrame 
        src="https://offenhuber.net/" 
        text="dissertation"
        scroll
      />
    </div>
  )
}


export function App() {
  const [count, setCount] = useState(0)

  return (
    <ElegyContainer />
  )
}
