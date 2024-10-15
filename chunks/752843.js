t.d(n, {
    V: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var l = t(735250);
t(470079);
var i = t(628028),
    a = t(220427),
    s = t(777207),
    r = t(692547),
    o = t(330711),
    u = t(350727);
function c(e) {
    let { type: n } = e;
    return (0, l.jsx)(d, {
        icon:
            'user' === n
                ? (0, l.jsx)(a.t, {
                      size: 'xxs',
                      color: r.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(i.Q, {
                      size: 'xxs',
                      color: r.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? o.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : o.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function d(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: u.container,
        children: [
            n,
            (0, l.jsx)(s.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
