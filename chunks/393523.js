let a;
r.d(t, {
    a: function () {
        return i;
    }
});
var n = r(578346),
    _ = r(987886),
    o = r(370336),
    E = r(395848);
function i(e) {
    let t = 'history';
    (0, n.Hj)(t, e), (0, n.D2)(t, c);
}
function c() {
    if (!(0, _.B)()) return;
    let e = E.m.onpopstate;
    function t(e) {
        return function (...t) {
            let r = t.length > 2 ? t[2] : void 0;
            if (r) {
                let e = a,
                    t = String(r);
                a = t;
                (0, n.rK)('history', {
                    from: e,
                    to: t
                });
            }
            return e.apply(this, t);
        };
    }
    (E.m.onpopstate = function (...t) {
        let r = E.m.location.href,
            _ = a;
        a = r;
        if (
            ((0, n.rK)('history', {
                from: _,
                to: r
            }),
            e)
        )
            try {
                return e.apply(this, t);
            } catch (e) {}
    }),
        (0, o.hl)(E.m.history, 'pushState', t),
        (0, o.hl)(E.m.history, 'replaceState', t);
}
