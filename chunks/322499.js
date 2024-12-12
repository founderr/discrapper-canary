var i = 'undefined' != typeof Symbol && Symbol,
    a = r(882171);
e.exports = function () {
    return 'function' == typeof i && 'function' == typeof Symbol && 'symbol' == typeof i('foo') && 'symbol' == typeof Symbol('bar') && a();
};
