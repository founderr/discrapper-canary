r.d(t, {
    $G: function () {
        return n;
    },
    JM: function () {
        return _;
    },
    U0: function () {
        return E;
    },
    nK: function () {
        return o;
    }
});
var a = r(573736);
function n(e, t = 0) {
    return 'string' != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`;
}
function _(e, t) {
    let r = e,
        a = r.length;
    if (a <= 150) return r;
    t > a && (t = a);
    let n = Math.max(t - 60, 0);
    n < 5 && (n = 0);
    let _ = Math.min(n + 140, a);
    return _ > a - 5 && (_ = a), _ === a && (n = Math.max(_ - 140, 0)), (r = r.slice(n, _)), n > 0 && (r = `'{snip} ${r}`), _ < a && (r += ' {snip}'), r;
}
function o(e, t) {
    if (!Array.isArray(e)) return '';
    let r = [];
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        try {
            (0, a.y1)(n) ? r.push('[VueViewModel]') : r.push(String(n));
        } catch (e) {
            r.push('[value cannot be serialized]');
        }
    }
    return r.join(t);
}
function E(e, t = [], r = !1) {
    return t.some((t) =>
        (function (e, t, r = !1) {
            return !!(0, a.HD)(e) && ((0, a.Kj)(t) ? t.test(e) : !!(0, a.HD)(t) && (r ? e === t : e.includes(t)));
        })(e, t, r)
    );
}
