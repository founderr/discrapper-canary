t.d(n, {
    V: function () {
        return u;
    },
    Z: function () {
        return d;
    }
});
var l = t(200651);
t(192379);
var o = t(628028),
    i = t(220427),
    a = t(777207),
    r = t(692547),
    s = t(330711),
    c = t(103665);
function d(e) {
    let { type: n } = e;
    return (0, l.jsx)(u, {
        icon:
            'user' === n
                ? (0, l.jsx)(i.t, {
                      size: 'xxs',
                      color: r.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(o.Q, {
                      size: 'xxs',
                      color: r.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: c.container,
        children: [
            n,
            (0, l.jsx)(a.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
