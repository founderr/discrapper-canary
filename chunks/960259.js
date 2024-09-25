n.d(t, {
    bW: function () {
        return c;
    },
    hN: function () {
        return d;
    },
    vW: function () {
        return u;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(679136),
    s = n(580747);
let l = a.createContext({
    enabled: !1,
    highlight: !1
});
function u(e) {
    let { children: t, overwriteValue: n } = e,
        { enabled: r } = o.Z.useExperiment({ location: 'web redesign icon context' }),
        u = (0, s.Z)('highlight_redesigned_icons'),
        c = a.useMemo(
            () => ({
                enabled: r,
                highlight: u
            }),
            [r, u]
        );
    return (0, i.jsx)(l.Provider, {
        value: null != n ? n : c,
        children: t
    });
}
function c() {
    return a.useContext(l);
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
    return function (a) {
        let { enabled: o, highlight: s } = c();
        if (!o) return (0, i.jsx)(e, { ...a });
        {
            var l, u, d, _;
            let e = { ...a };
            for (let [t, r] of Object.entries(
                (n = {
                    foreground: 'colorClass',
                    color: 'color',
                    ...(null != n ? n : {})
                })
            )) {
                let n = a[t];
                if ((null == n && 'color' === t && (n = s ? 'yellow' : 'currentColor'), 'remove' === r)) {
                    delete e[t];
                    continue;
                }
                e[r] = n;
            }
            return (null !== (d = (l = e).width) && void 0 !== d) || (l.width = r.size), (null !== (_ = (u = e).height) && void 0 !== _) || (u.height = r.size), (0, i.jsx)(t, { ...e });
        }
    };
}
