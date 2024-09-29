function initDraggable(summaryBox) {
    let isDragging = false;
    summaryBox.addEventListener('mousedown', (e) => {
        isDragging = true;
        let offsetX = e.clientX - summaryBox.offsetLeft;
        let offsetY = e.clientY - summaryBox.offsetTop;
        
        document.onmousemove = (event) => {
            if (isDragging) {
                summaryBox.style.left = `${event.clientX - offsetX}px`;
                summaryBox.style.top = `${event.clientY - offsetY}px`;
            }
        };
        
        document.onmouseup = () => {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });

    // Add collapsible functionality
    const closeBtn = summaryBox.querySelector('#close-summary');
    closeBtn.addEventListener('click', () => {
        summaryBox.style.display = 'none';
    });
}
