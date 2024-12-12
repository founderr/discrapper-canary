var r = 9007199254740991,
    i = /^(?:0|[1-9]\d*)$/;
function a(e, n) {
    var a = typeof e;
    return !!(n = null == n ? r : n) && ('number' == a || ('symbol' != a && i.test(e))) && e > -1 && e % 1 == 0 && e < n;
}
n.Z = a;
