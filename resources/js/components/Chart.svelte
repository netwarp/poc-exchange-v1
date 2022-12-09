<script>
    import {onMount} from 'svelte'
    import ApexCharts from "apexcharts"

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onMount( async () => {
        let options = {
            chart: {
                type: 'candlestick',
                toolbar: {
                    show: false,
                },
                animations: {
                    enabled: false
                },
                width: '100%',
                height: '100%',
                background: '#0c010c',
                zoom: {
                    enabled: false
                },

            },
            series: [{
                data: [
                    //[1, [10, 20, 4, 18]],
                ]
            }],

        }

        for (let i = 0; i < 80; i++) {
            options.series[0].data.push(
                [i, [
                    generateRandomIntegerInRange(1, 100),
                    generateRandomIntegerInRange(1, 100),
                    generateRandomIntegerInRange(1, 100),
                    generateRandomIntegerInRange(1, 100),
                ]]
            )
        }
        let chart = new ApexCharts(document.querySelector("#chart"), options);

        await chart.render();
    })
</script>

<div id="chart">

</div>