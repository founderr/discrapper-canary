r.d(t, {
    _: function () {
        return n;
    }
});
let a = (e, t) => (e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'),
    n = (e, t, r, n) => {
        let _, o;
        return (E) => {
            t.value >= 0 && (E || n) && ((o = t.value - (_ || 0)) || void 0 === _) && ((_ = t.value), (t.delta = o), (t.rating = a(t.value, r)), e(t));
        };
    };
