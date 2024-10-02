n.d(t, {
    V: function () {
        return d;
    },
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(628028),
    a = n(220427),
    o = n(777207),
    s = n(692547),
    l = n(330711),
    u = n(350727);
function c(e) {
    let { type: t } = e;
    return (0, r.jsx)(d, {
        icon:
            'user' === t
                ? (0, r.jsx)(a.t, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, r.jsx)(i.Q, {
                      size: 'xxs',
                      color: s.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === t ? l.Z.Messages.Storefront.USER_SUBSCRIPTION : l.Z.Messages.Storefront.SERVER_SUBSCRIPTION
    });
}
function d(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: u.container,
        children: [
            t,
            (0, r.jsx)(o.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
