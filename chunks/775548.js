var i = r(29513);
function a() {
    var e = {},
        n = 0,
        r = 0,
        i = 0;
    return {
        add: function a(a, s) {
            !s && ((s = a), (a = 0)), a > r ? (r = a) : a < i && (i = a), !e[a] && (e[a] = []), e[a].push(s), n++;
        },
        process: function n() {
            for (var n = i; n <= r; n++) {
                for (var a = e[n], s = 0; s < a.length; s++) (0, a[s])();
            }
        },
        size: function e() {
            return n;
        }
    };
}
e.exports = function (e) {
    var n,
        r = (e = e || {}).reporter,
        s = i.getOption(e, 'async', !0),
        o = i.getOption(e, 'auto', !0);
    o && !s && (r && r.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (s = !0));
    var l = a(),
        u = !1;
    function c(e, n) {
        !u && o && s && 0 === l.size() && _(), l.add(e, n);
    }
    function d() {
        for (u = !0; l.size(); ) {
            var e = l;
            (l = a()), e.process();
        }
        u = !1;
    }
    function f(e) {
        if (!u) void 0 === e && (e = s), n && (h(n), (n = null)), e ? _() : d();
    }
    function _() {
        n = p(d);
    }
    function h(e) {
        return clearTimeout(e);
    }
    function p(e) {
        return (function (e) {
            return setTimeout(e, 0);
        })(e);
    }
    return {
        add: c,
        force: f
    };
};
