import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

export function renderMermaids() {
    const target = document.getElementById('my-diagram');
    target.innerHTML = 'graph TB\nb-->a';
    mermaid.run();
}

export function renderDiagramIn(targetId) {
    const target = document.getElementById('my-diagram');
    target.innerHTML = 'graph TB\nb-->a';
    mermaid.run({nodes:[target]});
}