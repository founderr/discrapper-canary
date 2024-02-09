"use strict";
n.r(t), n.d(t, {
  GuildPickerDropdown: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("782340"),
  s = n("336859");

function r(e) {
  let {
    selectedGuildId: t,
    onGuildChange: n,
    eligibleApplicationSubscriptionGuilds: r
  } = e, u = r.map(e => ({
    value: e.id,
    label: e.name
  }));
  return (0, a.jsx)(l.SearchableSelect, {
    className: s.select,
    maxVisibleItems: 5,
    value: t,
    placeholder: i.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
    options: u,
    onChange: e => {
      n(e)
    }
  })
}