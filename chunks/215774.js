"use strict";
n.r(t), n.d(t, {
  GuildPickerDropdown: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("782340"),
  i = n("731013");

function r(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: r
  } = e, u = r.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, a.jsx)(s.SearchableSelect, {
    className: i.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: l.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: u,
    onChange: e => {
      n(e)
    }
  })
}