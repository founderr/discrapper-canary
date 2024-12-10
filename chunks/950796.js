n.d(t, {
    T: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(428548),
    c = n(679219),
    d = n(939039),
    u = n(358085),
    h = n(998502),
    m = n(388032),
    p = n(565923);
let g = (e) => h.ZP.close(e),
    f = (e) => h.ZP.minimize(e),
    _ = (e, t) => {
        (0, u.isMac)() && !t.altKey ? h.ZP.fullscreen(e) : h.ZP.maximize(e);
    };
function E(e) {
    let { windowKey: t, showDivider: n } = e,
        r = (0, i.jsx)(o.Clickable, {
            className: a()(p.winButton, p.winButtonClose),
            onClick: () => g(t),
            'aria-label': m.intl.string(m.t.ZdNUj4),
            tabIndex: -1,
            children: (0, i.jsx)(s.Z, {})
        }),
        l = (0, i.jsx)(o.Clickable, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: (e) => _(t, e),
            'aria-label': m.intl.string(m.t.G1u0hI),
            tabIndex: -1,
            children: (0, i.jsx)(c.Z, {})
        }),
        u = (0, i.jsx)(o.Clickable, {
            className: a()(p.winButton, p.winButtonMinMax),
            onClick: () => f(t),
            'aria-label': m.intl.string(m.t.CxOC4e),
            tabIndex: -1,
            children: (0, i.jsx)(d.Z, {})
        });
    return (0, i.jsxs)('div', {
        className: a()(p.winButtons, { [p.winButtonsWithDivider]: n }),
        children: [u, l, r]
    });
}
function I(e) {
    let { leading: t, title: n, trailing: l, windowKey: o, hasNotice: s } = e,
        c = (0, u.getPlatform)(),
        d = r.useCallback(() => {
            (0, u.isMac)() && h.ZP.maximize();
        }, []);
    function m(e) {
        e.stopPropagation();
    }
    return (0, i.jsxs)('div', {
        className: a()(p.bar, { [p.barWithNotice]: s }),
        onDoubleClick: d,
        children: [
            (0, i.jsx)('div', {
                className: p.title,
                children: n
            }),
            (0, i.jsx)('div', {
                className: p.leading,
                onDoubleClick: m,
                children: t
            }),
            (0, i.jsxs)('div', {
                className: p.trailing,
                onDoubleClick: m,
                children: [
                    l,
                    c === u.PlatformTypes.WINDOWS &&
                        (0, i.jsx)(E, {
                            windowKey: o,
                            showDivider: null != l
                        })
                ]
            })
        ]
    });
}
