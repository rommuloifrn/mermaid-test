import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: false });

/*var target = document.getElementById('my-diagram')
const graphDefinition = 'graph TB\na-->b';

mermaid.render('my-diagram', graphDefinition, target);*/

//mermaid.run()
mafunc()

export default function mafunc() {
    const target = document.getElementById('my-diagram');
    target.innerHTML = 'graph TB\nb-->a';
    mermaid.run();
}

function test() {
    console.log("testado!");
}