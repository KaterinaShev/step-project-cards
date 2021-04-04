export default class DragAndDrop {
    constructor(box, main) {
        this.box = document.querySelector(box);
        this.dragging = false;
        this.main = main;
    }

    get scrollHeight() {
        return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
        );
    }

    get size() {
        return {
        box: {
            width: document.documentElement.offsetWidth,
            height: this.scrollHeight
        },
        elem: {
            width: this.currentElem.offsetWidth,
            height: this.currentElem.offsetHeight
        }
        }
    }

    get data() {
        return {
        left: this.currentElem.getBoundingClientRect().left,
        top: this.currentElem.getBoundingClientRect().top
        }
    }

    checkedCards(event) {
        const target = event.target;

        this.currentElem = target.closest(this.main);

        if(!this.currentElem) return;
        this.mouseMove();
    }

    mouseDown(event) {
        this.dragging = true;
        this.checkedCards(event);
    }

    mouseMove() {
        this.currentElem.ondragstart = function() {
            return false
        };

        document.onmousemove = (event) => {
        if(!this.dragging) return;

        const currentHeight = this.size.box.height;

        this.currentElem.style.position = "absolute";
        this.currentElem.style.left = event.pageX - this.size.elem.width / 2 + 'px';
        this.currentElem.style.top = event.pageY - this.size.elem.height / 2 + 'px';

        if(this.data.left <= 0)
            this.currentElem.style.left = 0;
        if(this.data.top <= 0)
            this.currentElem.style.top = 0;
        if(this.data.left + this.size.elem.width >= this.size.box.width)
            this.currentElem.style.left = this.size.box.width - this.size.elem.width + 'px';
        if(this.data.top + document.documentElement.scrollTop + this.size.elem.height >= this.size.box.height)
            this.currentElem.style.top = currentHeight - this.size.elem.height + 'px';
        }
    }

    mouseUp() {
        this.dragging = false;
        document.onmousemove = null;
    }
    }
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}
    // const drag = new DragAndDrop(`#field`, `.m4`);

    // document.addEventListener("mousedown", event => drag.mouseDown(event));
    // document.addEventListener("mouseup", event => drag.mouseUp(event));