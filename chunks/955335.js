e.d(i, {
    r: function () {
        return u;
    }
});
var l = e(200651);
e(192379);
var t = e(481060),
    r = e(630388),
    s = e(981631),
    o = e(388032),
    a = e(132313);
let d = {
    size: 'md',
    color: t.tokens.colors.INTERACTIVE_NORMAL
};
function u(n) {
    let { subscriptions: i, color: e = 'text-normal' } = n,
        u = i.some((n) => (0, r.yE)(n.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(t.Heading, {
        variant: 'heading-lg/semibold',
        color: e,
        className: a.heading,
        children: u
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(t.ServerIcon, {
                          ...d,
                          color: 'currentColor'
                      }),
                      o.intl.string(o.t.XIhSoq)
                  ]
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(t.UserIcon, {
                          ...d,
                          color: 'currentColor'
                      }),
                      o.intl.string(o.t.dxfZpq)
                  ]
              })
    });
}
