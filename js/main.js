class kanban {
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes */
    constructor(boardClass) {
        this.boardClass = boardClass;
    }

    initializeElement(element) {
        /* https://developer.mozilla.org/ja/docs/Web/API/Element/classList */
        element.classList.add('task_item');
        element.addEventListener('mousedown', function (event) {
            event.preventDefault();
            var element = event.currentTarget.cloneNode(true);
            element.classList.add('click-item');
            var width = event.currentTarget.clientWidth;
            var height = event.currentTarget.clientHeight;
            element.base_style = `width: ${width}px; height:${height}px; background-color: aqua;`;
            element.style = `${element.base_style} left:${event.x - width / 2}px;top: ${event.y - height / 2}px;`;
            var clickElement = event.currentTarget;
            window.addEventListener('mousemove', function (event2) {
                event2.preventDefault();
                element.style = `${element.base_style} left:${event2.x - width / 2}px;top: ${event2.y - height / 2}px;`;
            })
            window.addEventListener('mouseup', function _listener(event2) {
                event2.preventDefault();
                console.log('mouseup');
                element.remove();
                clickElement.classList.remove('ismoving');
                window.removeEventListener('mouseup', _listener);
            })

            console.log(event.currentTarget.offsetWidth);
            event.currentTarget.classList.add('ismoving');
            document.body.appendChild(element);
        });
    }
}