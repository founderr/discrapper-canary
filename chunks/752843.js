n.d(t, {
    V: function () {
        return c;
    },
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(628028),
    a = n(220427),
    o = n(777207),
    s = n(330711),
    l = n(350727);
function u(e) {
    let { type: t } = e;
    return (0, r.jsx)(c, {
        icon:
            'user' === t
                ? (0, r.jsx)(a.t, {
                      size: 'xxs',
                      color: 'var(--interactive-normal)'
                  })
                : (0, r.jsx)(i.Q, {
                      size: 'xxs',
                      color: 'var(--interactive-normal)'
                  }),
        text: 'user' === t ? s.Z.Messages.Storefront.USER_SUBSCRIPTION : s.Z.Messages.Storefront.SERVER_SUBSCRIPTION
    });
}
function c(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            t,
            (0, r.jsx)(o.x, {
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
