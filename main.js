import { renderMermaids } from './diagrams.js';
//mermaid.initialize({ startOnLoad: false });

try {
    renderMermaids();
} catch (error) {
    console.log(error);
    
}


const target = document.getElementById("my-loved-button")
target.addEventListener("click", renderMermaids(), false)