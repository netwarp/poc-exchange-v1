<script async>
    import Header from './Header.svelte'
    import History from './History.svelte'
    import Chart from './Chart.svelte'
    import Book from './Book.svelte'
    import User from './User.svelte'
    import Depth from './Depth.svelte'

    let chart = 'Standard'
    function switchChart(chartSelected) { chart = chartSelected }

    import {writable} from 'svelte/store'
    import {onMount} from 'svelte'

    let market = writable({})


    import { io } from 'socket.io-client'
    const socket = io()

    socket.on('serverServeMarket', (order) => {
        market.set(order)
    })
</script>


<div class="container-fluid">
    <div class="row">
        <div class="col">
            <Header {market} />
        </div>
    </div>
    <div class="row">
        <div class="col thin-colzz">
            <Book {market}/>
        </div>

        <div class="col">
            <div class="chart-switcher">
                <span class="{chart === 'Standard' ? 'active': ''}" on:click={ () => switchChart('Standard') }>Standard</span>
                <span class="{chart === 'Depth' ? 'active': ''}" on:click={ () => switchChart('Depth') }>Depth</span>
            </div>
            <Chart />
            <Depth />

            <User />
        </div>

        <div class="col thin-col33" style="width: 30%;">
            <History {market}/>
        </div>
    </div>
</div>