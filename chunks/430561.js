n.d(t, {
    GY: function () {
        return f;
    },
    PI: function () {
        return d;
    },
    RT: function () {
        return p;
    },
    ls: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(692547),
    s = n(481060),
    a = n(765250),
    u = n(388032),
    c = n(122087);
function d(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: c.titleWrapper,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-xs/semibold',
            color: 'header-primary',
            children: t
        })
    });
}
function h(e) {
    let { onClick: t } = e,
        n = u.intl.string(u.t['3D5yo6']);
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        'aria-label': n,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: c.button,
                onClick: t,
                children: (0, i.jsx)(s.SettingsIcon, {
                    size: 'xxs',
                    color: r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function f(e) {
    let { widgetId: t, showAllStreams: n } = e,
        l = n ? u.intl.string(u.t.q2B3rq) : u.intl.string(u.t.JKGi6u),
        d = () => {
            (0, a.zG)(t, { showAllStreams: !n });
        };
    return (0, i.jsx)(s.Tooltip, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: o()(c.button, n && c.active),
                onClick: d,
                children: (0, i.jsx)(s.ScreenIcon, {
                    size: 'xxs',
                    color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
function p(e) {
    let { id: t, pinned: n } = e,
        l = n ? u.intl.string(u.t.cSu80t) : u.intl.string(u.t.cM8Vnp);
    return (0, i.jsx)(s.Tooltip, {
        text: l,
        'aria-label': l,
        children: (e) =>
            (0, i.jsx)(s.Clickable, {
                ...e,
                className: o()(c.button, n && c.active),
                onClick: () => (0, a.xh)(t),
                children: (0, i.jsx)(s.PinUprightIcon, {
                    size: 'xxs',
                    color: n ? r.Z.colors.BG_BRAND : r.Z.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
