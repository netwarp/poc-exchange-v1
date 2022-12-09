class Depth {
    constructor(selector, options) {
        this.selector = document.querySelector(selector)

        this.options = options
    }

    getRange() {

    }

    run() {
        this.selector.innerHTML = ''

        for (let data of this.options.data) {
            this.selector.innerHTML += `<div class="bar ${data.side}" data-price="${data.price}" style="height: ${data.size}%;"><div class="pop">Price: ${data.price} <br> Size: ${data.size}</div></div>`
        }

    }
}

export default Depth