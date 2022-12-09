<script>
    export let market
</script>


<div class="book">
    <div class="orders buy">
        <div class="orders-header reverse4">
            <div>
                Price Buy
            </div>
            <div>
                Quantity Buy
            </div>
            <div>
                Quantity Remaining
            </div>
            <div>
                Value Removed
            </div>
            <div>
                ID
            </div>
        </div>
        {#if $market.buy}
            {#each $market.buy as order}
                <div class="line reverse44">
                    <div class="price">{order.price}</div>
                    <div class="size">{order.size}</div>
                    <div class="quantity">{order.sizeRemaining}</div>
                    <div class="quantity">{order.valueRemoved}</div>
                    <div class="quantity">{order.id}</div>
                </div>
            {/each}
        {/if}
    </div>
    <div class="orders sell">
        <div class="orders-header">
            <div>
                Price Sell
            </div>
            <div>
                Quantity Sell
            </div>
            <div>
                Quantity Remaining
            </div>
            <div>
                Value Removed
            </div>
            <div>
                ID
            </div>
        </div>
        {#if $market.sell}
            {#each $market.sell as order}
                <div class="line">
                    <div class="price">{order.price}</div>
                    <div class="size">{order.size}</div>
                    <div class="quantity">{order.sizeRemaining}</div>
                    <div class="quantity">{order.valueRemoved}</div>
                    <div class="quantity">{order.id}</div>
                </div>
            {/each}
        {/if}
    </div>
</div>