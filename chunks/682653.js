var n = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
function i(e, i) {
    var a = typeof e;
    return !!(i = null == i ? n : i) && ('number' == a || ('symbol' != a && r.test(e))) && e > -1 && e % 1 == 0 && e < i;
}
e.exports = i;
