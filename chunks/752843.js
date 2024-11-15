t.d(n, {
    V: function () {
        return d;
    },
    Z: function () {
        return u;
    }
});
var l = t(200651);
t(192379);
var i = t(628028),
    r = t(220427),
    a = t(777207),
    o = t(692547),
    s = t(330711),
    c = t(124370);
function u(e) {
    let { type: n } = e;
    return (0, l.jsx)(d, {
        icon:
            'user' === n
                ? (0, l.jsx)(r.t, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(i.Q, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function d(e) {
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
