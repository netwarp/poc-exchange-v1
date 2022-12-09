<script>
    export let market
    /*
    import onMount from 'svelte'

    let orders = []

    for (let i = 0; i < 10; i++) {

        const bool = !Math.round(Math.random())
        const side = bool ? 'buy' : 'sell'

        orders.push({
            side,
            time: '12:12:12',
            price: 0.01,
            quantity: 0.03
        })
    }

     */
</script>


<div class="history">
    <div class="history-header">
        History
    </div>
    <div class="history-body">
        <div class="history-info">
            <div>
                Side
            </div>

            <div>
                Price
            </div>
            <div>
                Quantity
            </div>
            <div>
                Time
            </div>
        </div>

        <hr>
        {#if $market.history}
            {#each $market.history as order}
                <div class="history-order {order.side}">
                    <div class="history-order-side">
                        {order.side}
                    </div>
                    <div class="history-order-price">
                        {order.price}
                    </div>
                    <div class="history-order-quantity">
                        {order.size}
                    </div>
                    <div class="history-order-time">
                        {order.id}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>

