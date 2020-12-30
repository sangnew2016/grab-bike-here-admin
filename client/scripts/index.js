const IndexCtrl = (function(){        
    const routeToBookingTransfer = () => {
        COMMON.loadHTML(document.getElementById('main'), 'htmls/bookings-transfer.html', () => {
            BookingsTransferCtrl.init();
        });
    };

    const routeToMoneyFee = () => {
        COMMON.loadHTML(document.getElementById('main'), 'htmls/money-fee.html', () => {
            MoneyFeeCtrl.init();
        });
    };
    
    const init = () => {
        document.getElementById('route-booking-transfer').addEventListener('click', routeToBookingTransfer);
        document.getElementById('route-money-fee').addEventListener('click', routeToMoneyFee);
    };

    init();

    return {
        
    };
})();