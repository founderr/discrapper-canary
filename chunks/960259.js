r.d(n, {
    bW: function () {
        return d;
    },
    hN: function () {
        return f;
    },
    vW: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(679136),
    l = r(580747);
let u = s.createContext({
    enabled: !1,
    highlight: !1
});
function c(e) {
    let { children: n, overwriteValue: r } = e,
        { enabled: i } = o.Z.useExperiment({ location: 'web redesign icon context' }),
        c = (0, l.Z)('highlight_redesigned_icons'),
        d = s.useMemo(
            () => ({
                enabled: i,
                highlight: c
            }),
            [i, c]
        );
    return (0, a.jsx)(u.Provider, {
        value: null != r ? r : d,
        children: n
    });
}
function d() {
    return s.useContext(u);
}
function f(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { size: 24 };
    return function (s) {
        let { enabled: o, highlight: l } = d();
        if (!o) return (0, a.jsx)(e, { ...s });
        {
            var u, c, f, _;
            let e = { ...s };
            for (let [n, i] of Object.entries(
                (r = {
                    foreground: 'colorClass',
                    color: 'color',
                    ...(null != r ? r : {})
                })
            )) {
                let r = s[n];
                if ((null == r && 'color' === n && (r = l ? 'yellow' : 'currentColor'), 'remove' === i)) {
                    delete e[n];
                    continue;
                }
                e[i] = r;
            }
            return (null !== (f = (u = e).width) && void 0 !== f) || (u.width = i.size), (null !== (_ = (c = e).height) && void 0 !== _) || (c.height = i.size), (0, a.jsx)(n, { ...e });
        }
    };
}
