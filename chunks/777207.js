n.d(t, {
    x: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(696689),
    l = n.n(o),
    u = n(692547),
    c = n(56077),
    d = n(654165);
let f = Object.fromEntries(Object.keys(u.Z.colors).map((e) => [l()(e), e])),
    _ = i.forwardRef(function (e, t) {
        let n,
            { variant: i, tag: a = 'div', selectable: o = !1, className: l, lineClamp: _, color: p, tabularNumbers: h = !1, scaleFontToUserSetting: m = !1, ...g } = e,
            E = '',
            v = {};
        if (
            (null != _ &&
                (1 === _
                    ? (E = c.lineClamp1)
                    : ((E = c.lineClamp2Plus),
                      (v = {
                          lineClamp: _,
                          WebkitLineClamp: _
                      }))),
            void 0 !== p)
        )
            switch (p) {
                case 'currentColor':
                    n = 'currentColor';
                    break;
                case 'none':
                    n = void 0;
                    break;
                case 'always-white':
                    n = 'white';
                    break;
                default:
                    var I;
                    n = null === (I = u.Z.colors[f[p]]) || void 0 === I ? void 0 : I.css;
            }
        let b = {
            color: n,
            ...v,
            ...g.style
        };
        return (0, r.jsx)(a, {
            ref: t,
            className: s()(
                {
                    [c.defaultColor]: void 0 === p,
                    [c.selectable]: o,
                    [c.tabularNumbers]: h,
                    [d.fontScaling]: m
                },
                E,
                d[i],
                l
            ),
            ...g,
            style: Object.values(b).filter(Boolean).length > 0 ? b : void 0,
            'data-text-variant': i
        });
    });
