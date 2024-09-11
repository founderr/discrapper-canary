t.d(n, {
    V: function () {
        return c;
    },
    Z: function () {
        return u;
    }
});
var l = t(735250);
t(470079);
var i = t(628028),
    r = t(220427),
    s = t(777207),
    o = t(330711),
    a = t(350727);
function u(e) {
    let { type: n } = e;
    return (0, l.jsx)(c, {
        icon:
            'user' === n
                ? (0, l.jsx)(r.t, {
                      size: 'xxs',
                      color: 'var(--text-positive)'
                  })
                : (0, l.jsx)(i.Q, {
                      size: 'xxs',
                      color: 'var(--text-brand)'
                  }),
        text: 'user' === n ? o.Z.Messages.Storefront.USER_SUBSCRIPTION : o.Z.Messages.Storefront.SERVER_SUBSCRIPTION
    });
}
function c(e) {
    let { icon: n, text: t } = e;
    return (0, l.jsxs)('div', {
        className: a.container,
        children: [
            n,
            (0, l.jsx)(s.x, {
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: t
            })
        ]
    });
}
