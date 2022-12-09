<script>
    let view = 'market'
</script>

<div class="user">
    <div class="menu">
        <div class="item">
            Market
        </div>
        <div class="item">
            Balance
        </div>
        <div class="item">
            Orders
        </div>
        <div class="item">
            History
        </div>
    </div>
    <main>
        <div class="view" id="view-market">
            <div class="side">
                <div class="side-header">
                    Buy
                </div>
                <form class="side-form">
                    <div class="form-line">
                        <div class="label">Price</div>
                        <input type="text" placeholder="Price">
                    </div>
                    <div class="form-line">
                        <div class="label">Quantity</div>
                        <input type="text" placeholder="Quantity">
                    </div>
                    <div class="form-line">
                        <button class="btn">Validate</button>
                    </div>
                </form>
            </div>
            <div class="side">
                <div class="side-header">
                    Sell
                </div>
                <form class="side-form">
                    <div class="form-line">
                        <div class="label">Price</div>
                        <input type="text" class="input" placeholder="Price">
                    </div>
                    <div class="form-line">
                        <div class="label">Quantity</div>
                        <input type="text" placeholder="Quantity">
                    </div>
                    <div class="form-line">
                        <button type="button">Validate</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>