r.d(n, {
    _: function () {
        return l;
    }
});
var i = r(608297);
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function s(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function o(e, n, r) {
    return n && s(e.prototype, n), r && s(e, r), e;
}
var l = (function () {
    function e() {
        a(this, e);
    }
    return (
        o(e, [
            {
                key: 'run',
                value: function (e, n, r, a) {
                    var s = this.parse(e, n, r, a);
                    return s
                        ? {
                              setter: new i.gr(s.value, this.validate, this.set, this.priority, this.subPriority),
                              rest: s.rest
                          }
                        : null;
                }
            },
            {
                key: 'validate',
                value: function (e, n, r) {
                    return !0;
                }
            }
        ]),
        e
    );
})();
