e.d(i, {
    r: function () {
        return u;
    }
});
var t = e(200651);
e(192379);
var l = e(481060),
    r = e(630388),
    s = e(981631),
    a = e(388032),
    o = e(132313);
let d = {
    size: 'md',
    color: l.tokens.colors.INTERACTIVE_NORMAL
};
function u(n) {
    let { subscriptions: i } = n,
        e = i.some((n) => (0, r.yE)(n.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, t.jsx)(l.Heading, {
        variant: 'heading-lg/semibold',
        className: o.heading,
        children: e
            ? (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(l.ServerIcon, { ...d }), a.intl.string(a.t.XIhSoq)]
              })
            : (0, t.jsxs)(t.Fragment, {
                  children: [(0, t.jsx)(l.UserIcon, { ...d }), a.intl.string(a.t.dxfZpq)]
              })
    });
}
