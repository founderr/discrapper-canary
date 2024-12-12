function i(e) {
    return '[object Object]' === Object.prototype.toString.call(e);
}
function a(e) {
    var n, r;
    return !1 !== i(e) && (void 0 === (n = e.constructor) || (!1 !== i((r = n.prototype)) && !1 !== r.hasOwnProperty('isPrototypeOf') && !0));
}
r.d(n, {
    P: function () {
        return a;
    }
});
