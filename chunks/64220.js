n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(921944),
    o = n(388032),
    s = n(760312);
function c(e) {
    let { markAsDismissed: t } = e;
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                t(a.L.AUTO_DISMISS);
            }, 8000);
            return () => {
                clearTimeout(e);
            };
        }, [t]),
        (0, i.jsxs)(l.Clickable, {
            className: s.container,
            onClick: () => {
                t(a.L.USER_DISMISS);
            },
            children: [
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: o.intl.string(o.t.fJNqJi)
                }),
                (0, i.jsx)('div', { className: s.pointer })
            ]
        })
    );
}
function d(e) {
    let { children: t, markAsDismissed: n } = e,
        [a, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = setTimeout(() => {
                o(!0);
            }, 1000);
            return () => {
                clearTimeout(e);
            };
        }, [o]),
        (0, i.jsx)(l.Popout, {
            position: 'top',
            align: 'left',
            shouldShow: a,
            renderPopout: () => (0, i.jsx)(c, { markAsDismissed: n }),
            children: t
        })
    );
}
