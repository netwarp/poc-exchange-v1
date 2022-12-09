<script>
    let active = false

    const markets = {
        'XMR-XHV': 0.04,
        'XMR-CCX': -0.07,
        'XMR-ZANO': 7,
        'XMR-TTL': -2,
    }

    function colorMarket(percent) {
        if (Math.sign(percent) === -1) {
            return 'red'
        }

        return 'green'
    }

    function displayMarkets() {
        active = ! active
    }


</script>

<div class="switcher">
    <div class="switcher-current" on:click={displayMarkets}>
        <div class="swithcer-current-title">
            XMR-XHV
        </div>
        <div class="arrow">
            {#if active}
                ▲
            {:else }
                ▼
            {/if}
        </div>
    </div>
    <div class="switcher-markets" class:active={active}>

        {#each Object.entries(markets) as [title, percent] }
            <div class="switcher-market">
                <div class="title">
                    {title}
                </div>
                <div class="percent {colorMarket(percent)}">
                    {percent} %
                </div>
            </div>
        {/each}
    </div>
</div>