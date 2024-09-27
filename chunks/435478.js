n.d(t, {
    Mv: function () {
        return _;
    },
    PB: function () {
        return h;
    },
    eq: function () {
        return E;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(25441),
    r = n(91192),
    l = n(657707),
    o = n(481060),
    c = n(209613),
    d = n(475413),
    u = n(217593);
function _(e) {
    let { id: t, label: n, icon: c, hint: _, renderSubmenu: h, ...E } = e,
        { onFocus: m, ...I } = (0, r.JA)(t),
        { id: g } = (0, r.f$)(),
        [p, T] = a.useState(!1),
        f = null != h;
    a.useLayoutEffect(() => {
        if (!!f)
            return (0, s.N)(g, (e) => {
                T(e === t);
            });
    }, [t, g, f]);
    let S = (e) =>
        (0, i.jsxs)(d.kF, {
            ...e,
            ...I,
            ...E,
            role: 'button',
            look: o.Button.Looks.BLANK,
            innerClassName: u.menuItemInner,
            color: u.menuItemColor,
            themeColor: 'none',
            fullWidth: !0,
            onMouseEnter: () => {
                var t;
                null == e || null === (t = e.onMouseEnter) || void 0 === t || t.call(e), m();
            },
            children: [
                (0, i.jsx)(c, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsxs)('div', {
                    className: u.menuItemLabel,
                    children: [n, _]
                }),
                f &&
                    (0, i.jsx)(l.Fbu, {
                        size: 'xs',
                        color: 'currentColor'
                    })
            ]
        });
    return f
        ? (0, i.jsx)(o.Popout, {
              spacing: 0,
              renderPopout: h,
              shouldShow: p,
              onRequestClose: () => T(!1),
              children: S
          })
        : S();
}
function h(e) {
    let { id: t, children: n } = e,
        a = (0, c.Z)(t);
    return (0, i.jsx)(r.bG, {
        navigator: a,
        children: (0, i.jsx)(r.SJ, {
            children: (e) => {
                let { ref: t, ...s } = e;
                return (0, i.jsx)('div', {
                    ...s,
                    ref: t,
                    onMouseLeave: () => a.setFocus(null),
                    children: n
                });
            }
        })
    });
}
function E(e) {
    return (0, i.jsx)('div', {
        className: u.submenuPaddingContainer,
        children: (0, i.jsx)(o.Menu, {
            variant: 'fixed',
            hideScroller: !0,
            onSelect: void 0,
            ...e
        })
    });
}
