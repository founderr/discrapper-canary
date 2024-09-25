n.d(t, {
    x: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(803997),
    o = n.n(a),
    s = n(696689),
    l = n.n(s),
    u = n(692547),
    c = n(56077),
    d = n(654165);
let _ = Object.fromEntries(Object.keys(u.Z.colors).map((e) => [l()(e), e])),
    E = i.forwardRef(function (e, t) {
        let n,
            { variant: i, tag: a = 'div', selectable: s = !1, className: l, lineClamp: E, color: f, tabularNumbers: h = !1, scaleFontToUserSetting: p = !1, ...m } = e,
            I = a,
            T = '',
            g = {};
        if (
            (null != E &&
                (1 === E
                    ? (T = c.lineClamp1)
                    : ((T = c.lineClamp2Plus),
                      (g = {
                          lineClamp: E,
                          WebkitLineClamp: E
                      }))),
            void 0 !== f)
        )
            switch (f) {
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
                    var S;
                    n = null === (S = u.Z.colors[_[f]]) || void 0 === S ? void 0 : S.css;
            }
        let A = {
            color: n,
            ...g,
            ...m.style
        };
        return (0, r.jsx)(I, {
            ref: t,
            className: o()(
                {
                    [c.defaultColor]: void 0 === f,
                    [c.selectable]: s,
                    [c.tabularNumbers]: h,
                    [d.fontScaling]: p
                },
                T,
                d[i],
                l
            ),
            ...m,
            style: Object.values(A).filter(Boolean).length > 0 ? A : void 0,
            'data-text-variant': i
        });
    });
