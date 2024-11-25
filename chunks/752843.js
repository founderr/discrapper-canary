t.d(n, {
    V: function () {
        return u;
    },
    Z: function () {
        return d;
    }
});
var o = t(200651);
t(192379);
var l = t(628028),
    r = t(220427),
    i = t(777207),
    s = t(692547),
    a = t(330711),
    c = t(103665);
function d(e) {
    let { type: n } = e;
    return (0, o.jsx)(u, {
        icon:
            'user' === n
                ? (0, o.jsx)(r.t, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, o.jsx)(l.Q, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? a.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : a.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: n, text: t } = e;
    return (0, o.jsxs)('div', {
        className: c.container,
        children: [
            n,
            (0, o.jsx)(i.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
