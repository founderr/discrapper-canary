n.d(t, {
    V: function () {
        return u;
    },
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var a = n(628028),
    r = n(220427),
    l = n(777207),
    o = n(692547),
    s = n(330711),
    c = n(350727);
function d(e) {
    let { type: t } = e;
    return (0, i.jsx)(u, {
        icon:
            'user' === t
                ? (0, i.jsx)(r.t, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  })
                : (0, i.jsx)(a.Q, {
                      size: 'xxs',
                      color: o.Z.colors.INTERACTIVE_NORMAL
                  }),
        text: 'user' === t ? s.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : s.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
    });
}
function u(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            t,
            (0, i.jsx)(l.x, {
                color: 'header-primary',
                variant: 'text-sm/medium',
                children: n
            })
        ]
    });
}
