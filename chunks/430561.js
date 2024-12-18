n.d(t, {
    GY: function () {
        return f;
    },
    PI: function () {
        return d;
    },
    RT: function () {
        return m;
    },
    ls: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(692547),
    a = n(481060),
    s = n(765250),
    c = n(388032),
    u = n(122087);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: u.titleWrapper,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = c.intl.string(c.t['3D5yo6']);
    return (0, i.jsx)(a.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: u.button,
                onClick: t,
                children: (0, i.jsx)(a.SettingsIcon, {
                    size: 'xxs',
                    color: o.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { widgetId: t, showAllStreams: n } = e,
        r = n ? c.intl.string(c.t.q2B3rq) : c.intl.string(c.t.JKGi6u),
        d = () => {
            (0, s.zG)(t, { showAllStreams: !n });
        };
    return (0, i.jsx)(a.Tooltip, {
        text: r,
        'aria-label': r,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: l()(u.button, n && u.active),
                onClick: d,
                children: (0, i.jsx)(a.ScreenIcon, {
                    size: 'xxs',
                    color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function m(e) {
    let { id: t, pinned: n } = e,
        r = n ? c.intl.string(c.t.cSu80t) : c.intl.string(c.t.cM8Vnp);
    return (0, i.jsx)(a.Tooltip, {
        text: r,
        'aria-label': r,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                className: l()(u.button, n && u.active),
                onClick: () => (0, s.xh)(t),
                children: (0, i.jsx)(a.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
