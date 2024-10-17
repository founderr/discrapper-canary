i.d(e, {
    r: function () {
        return u;
    }
});
var l = i(735250);
i(470079);
var s = i(481060),
    r = i(630388),
    t = i(981631),
    a = i(689938),
    d = i(132313);
let o = {
    size: 'md',
    color: s.tokens.colors.INTERACTIVE_NORMAL
};
function u(n) {
    let { subscriptions: e } = n,
        i = e.some((n) => (0, r.yE)(n.skuFlags, t.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(s.Heading, {
        variant: 'heading-lg/semibold',
        className: d.heading,
        children: i
            ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(s.ServerIcon, { ...o }), a.Z.Messages.STOREFRONT_APP_SERVER_SUBSCRIPTIONS]
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(s.UserIcon, { ...o }), a.Z.Messages.STOREFRONT_APP_PERSONAL_SUBSCRIPTIONS]
              })
    });
}
