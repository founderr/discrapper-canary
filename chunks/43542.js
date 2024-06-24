n.d(t, {
  y: function() {
    return i
  }
});
var r = n(735250);
n(470079);
var a = n(481060),
  s = n(689938),
  l = n(936307);

function i(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: i
  } = e, o = i.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)(a.SearchableSelect, {
    className: l.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: s.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: o,
    onChange: e => {
      n(e)
    }
  })
}