t.d(n, {
  y: function() {
    return i
  }
});
var r = t(735250);
t(470079);
var s = t(481060),
  a = t(689938),
  l = t(936307);

function i(e) {
  let {
    selectedGuildId: n,
    onGuildChange: t,
    eligibleApplicationSubscriptionGuilds: i
  } = e, o = i.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, r.jsx)(s.SearchableSelect, {
    className: l.select,
    maxVisibleItems: 5,
    value: n,
    placeholder: a.Z.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: o,
    onChange: e => {
      t(e)
    }
  })
}