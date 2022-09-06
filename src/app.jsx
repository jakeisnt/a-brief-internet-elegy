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


  // Note: `onload` listeners don't work here because they happen after request succeeds,
  // not when the document renders, so we don't really get a body to render 

  // instead we have to poll lol
  useEffect(() => {
    function checkIframeLoaded() {
        console.log('checking frame loaded')
        let iframeContent = ref?.current?.contentDocument;
        console.log(ref.current.contentDocument);

        if (iframeContent) {
            clearInterval(checkIframeLoadedInterval);

            console.log('iframe loaded!', iframeContent);
            setIsFrameLoaded(true);
            // setTimeout(function () {
            // }, 100); //100 ms of grace time
        }
    }

    let checkIframeLoadedInterval = setInterval( checkIframeLoaded, 250 );

    return () => clearInterval(checkIframeLoadedInterval);

  }, [ref.current]);


  useEffect(() => {
    console.log('is iframe loaded', isFrameLoaded);
    if (isFrameLoaded) {
      console.log(ref.current);
      console.log('looking for text:', findText(ref.current.contentDocument, text));
    }
  }, [isFrameLoaded, text]);

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
      // onload={() => setIsFrameLoaded(true)}
      // onreadystatechange={(self) => { console.log(self.readyState) }}
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
