t.d(n, {
    y: function () {
        return o;
    }
});
var r = t(735250);
t(470079);
var i = t(481060),
    a = t(689938),
    s = t(65307);
function o(e) {
    let { selectedGuildId: n, onGuildChange: t, eligibleApplicationSubscriptionGuilds: o } = e,
        l = o.map((e) => ({
            value: e.id,
            label: e.name
        }));
    return (0, r.jsx)(i.SearchableSelect, {
        className: s.select,
        maxVisibleItems: 5,
        value: n,
        placeholder: a.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
        options: l,
        onChange: (e) => {
            t(e);
        }
    });
}
