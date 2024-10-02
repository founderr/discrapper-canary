i.d(e, {
    r: function () {
        return u;
    }
});
var l = i(735250);
i(470079);
var t = i(512722),
    s = i.n(t),
    r = i(481060),
    a = i(630388),
    o = i(981631),
    d = i(689938);
function u(n) {
    let { subscriptions: e } = n,
        i = e.every((n) => (0, a.yE)(n.skuFlags, o.l4R.APPLICATION_USER_SUBSCRIPTION)),
        t = e.every((n) => (0, a.yE)(n.skuFlags, o.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (
        s()(i !== t && e.length > 0, 'Only one type of subscription may be in the store'),
        (0, l.jsx)(r.Heading, {
            variant: 'heading-lg/semibold',
            color: 'header-secondary',
            children: i ? d.Z.Messages.STOREFRONT_APP_USER_SUBSCRIPTIONS : d.Z.Messages.STOREFRONT_APP_GUILD_SUBSCRIPTIONS
        })
    );
}
