<script>
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let buy = []
    for (let i = 0; i < 60; i++) {
        buy.push({
            side: 'buy',
            size: getRandomArbitrary(2, 200)
        })
    }
    buy.sort((a,b) => {
        return b.size - a.size
    })
    buy = buy


    let sell = []
    for (let i = 0; i < 60; i++) {
        sell.push({
            side: 'sell',
            size: getRandomArbitrary(2, 200)
        })
    }
    sell.sort((a,b) => {
        return a.size -b.size
    })
    sell = sell

</script>


<div class="depth">
    <div class="depth-container">
        {#each buy as bar}
            <div class="bar {bar.side}" style="height: {bar.size}px;"></div>
        {/each}
        {#each sell as bar}
            <div class="bar {bar.side}" style="height: {bar.size}px;"></div>
        {/each}
    </div>
</div>


<div class="depth-data">

</div>