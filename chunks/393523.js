let n;
r.d(t, {
    a: function () {
        return E;
    }
});
var a = r(578346),
    _ = r(987886),
    o = r(370336),
    i = r(395848);
function E(e) {
    let t = 'history';
    (0, a.Hj)(t, e), (0, a.D2)(t, c);
}
function c() {
    if (!(0, _.B)()) return;
    let e = i.m.onpopstate;
    function t(e) {
        return function (...t) {
            let r = t.length > 2 ? t[2] : void 0;
            if (r) {
                let e = n,
                    t = String(r);
                n = t;
                (0, a.rK)('history', {
                    from: e,
                    to: t
                });
            }
            return e.apply(this, t);
        };
    }
    (i.m.onpopstate = function (...t) {
        let r = i.m.location.href,
            _ = n;
        n = r;
        if (
            ((0, a.rK)('history', {
                from: _,
                to: r
            }),
            e)
        )
            try {
                return e.apply(this, t);
            } catch (e) {}
    }),
        (0, o.hl)(i.m.history, 'pushState', t),
        (0, o.hl)(i.m.history, 'replaceState', t);
}
