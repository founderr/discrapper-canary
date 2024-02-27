"use strict";
n.r(t), n.d(t, {
  GuildPickerDropdown: function() {
    return s
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("782340"),
  r = n("641896");

function s(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: s
  } = e, u = s.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, a.jsx)(l.SearchableSelect, {
    className: r.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: i.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: u,
    onChange: e => {
      n(e)
    }
  })
}