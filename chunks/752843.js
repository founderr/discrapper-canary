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
    s = t(220427),
    a = t(777207),
    o = t(692547),
    r = t(330711),
    u = t(350727);
function c(e) {
    let { type: n } = e;
    return (0, l.jsx)(d, {
        icon:
            'user' === n
                ? (0, l.jsx)(s.t, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, l.jsx)(i.Q, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === n ? r.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : r.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function d(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: u.container,
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
