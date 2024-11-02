r.d(t, {
    _: function () {
        return a;
    }
});
let n = (e, t) => (e > t[1] ? 'poor' : e > t[0] ? 'needs-improvement' : 'good'),
    a = (e, t, r, a) => {
        let _, o;
        return (i) => {
            t.value >= 0 && (i || a) && ((o = t.value - (_ || 0)) || void 0 === _) && ((_ = t.value), (t.delta = o), (t.rating = n(t.value, r)), e(t));
        };
    };
