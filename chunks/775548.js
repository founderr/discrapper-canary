var r = n(29513);
function i() {
    var e = {},
        t = 0,
        n = 0,
        r = 0;
    return {
        add: function i(i, a) {
            !a && ((a = i), (i = 0)), i > n ? (n = i) : i < r && (r = i), !e[i] && (e[i] = []), e[i].push(a), t++;
        },
        process: function t() {
            for (var t = r; t <= n; t++) {
                for (var i = e[t], a = 0; a < i.length; a++) (0, i[a])();
            }
        },
        size: function e() {
            return t;
        }
    };
}
e.exports = function (e) {
    var t,
        n = (e = e || {}).reporter,
        a = r.getOption(e, 'async', !0),
        o = r.getOption(e, 'auto', !0);
    o && !a && (n && n.warn('Invalid options combination. auto=true and async=false is invalid. Setting async=true.'), (a = !0));
    var s = i(),
        l = !1;
    function u(e, t) {
        !l && o && a && 0 === s.size() && _(), s.add(e, t);
    }
    function c() {
        for (l = !0; s.size(); ) {
            var e = s;
            (s = i()), e.process();
        }
        l = !1;
    }
    function d(e) {
        if (!l) void 0 === e && (e = a), t && (E(t), (t = null)), e ? _() : c();
    }
    function _() {
        t = f(c);
    }
    function E(e) {
        return clearTimeout(e);
    }
    function f(e) {
        return (function (e) {
            return setTimeout(e, 0);
        })(e);
    }
    return {
        add: u,
        force: d
    };
};
