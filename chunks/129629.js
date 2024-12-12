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
                key: '__attach',
                value: function () {}
            },
            {
                key: '__detach',
                value: function () {}
            },
            {
                key: '__getValue',
                value: function () {}
            },
            {
                key: '__getAnimatedValue',
                value: function () {
                    return this.__getValue();
                }
            },
            {
                key: '__addChild',
                value: function (e) {}
            },
            {
                key: '__removeChild',
                value: function (e) {}
            },
            {
                key: '__getChildren',
                value: function () {
                    return [];
                }
            }
        ]),
        e
    );
})();
e.exports = i;
