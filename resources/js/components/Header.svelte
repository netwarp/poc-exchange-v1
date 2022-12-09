<script>
    import Switcher from './Switcher.svelte'
    export let market
</script>

<div class="header-market">
    <Switcher />

    <div class="key-val">
        <div class="key">
            Price
        </div>
        <div class="val">
            {$market.price}
        </div>
    </div>

    <div class="key-val">
        <div class="key">
            24h Change
        </div>
        <div class="val">
            {$market.volume}
        </div>
    </div>

    <div class="key-val">
        <div class="key">
            24h Volume
        </div>
        <div class="val">
            0.04
        </div>
    </div>
</div>