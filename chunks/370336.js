n.d(e, {
    Jr: function () {
        return u;
    },
    xp: function () {
        return o;
    }
});
var r = n(176984),
    i = n(573736),
    s = n(622916);
function o(t, e, n) {
    try {
        Object.defineProperty(t, e, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch (n) {
        r.X && s.kg.log(`Failed to add non-enumerable property "${e}" to object`, t);
    }
}
function u(t) {
    return (function t(e, n) {
        if (
            (function (t) {
                if (!(0, i.PO)(t)) return !1;
                try {
                    let e = Object.getPrototypeOf(t).constructor.name;
                    return !e || 'Object' === e;
                } catch (t) {
                    return !0;
                }
            })(e)
        ) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = {};
            for (let r of (n.set(e, i), Object.keys(e))) void 0 !== e[r] && (i[r] = t(e[r], n));
            return i;
        }
        if (Array.isArray(e)) {
            let r = n.get(e);
            if (void 0 !== r) return r;
            let i = [];
            return (
                n.set(e, i),
                e.forEach((e) => {
                    i.push(t(e, n));
                }),
                i
            );
        }
        return e;
    })(t, new Map());
}
