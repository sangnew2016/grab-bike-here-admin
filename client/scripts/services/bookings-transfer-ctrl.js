const BookingsTransferCtrl = (function() {
    const init = () => {
        // load data into table
        COMMON.get(GLOBAL.apiUrl.bookingList, (data) => {
            console.log(data);
        });
    };


    return {
        init: init
    };
})();