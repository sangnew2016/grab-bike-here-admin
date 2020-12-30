const GLOBAL = (function() {
    const rootApi = 'https://localhost:44336/api';

    const apiUrl = {
        bookingList: rootApi + '/web-bookings/list'
    };

    return {
        apiUrl: apiUrl
    };
})();