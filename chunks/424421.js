function i(e) {
    var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
r.d(n, {
    Z: function () {
        return i;
    }
});
