var n = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function r(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
var i = (function () {
    function e() {
        r(this, e);
    }
    return (
        n(e, [
            {
                key: 'start',
                value: function (e, n, r, i) {}
            },
            {
                key: 'stop',
                value: function () {}
            },
            {
                key: '__debouncedOnEnd',
                value: function (e) {
                    var n = this.__onEnd;
                    (this.__onEnd = null), n && n(e);
                }
            }
        ]),
        e
    );
})();
e.exports = i;
