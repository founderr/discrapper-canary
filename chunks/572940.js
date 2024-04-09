"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  i = s("481060"),
  n = s("246364"),
  r = s("689938");
t.default = function(e) {
  let {
    className: t,
    sortOrder: s,
    onSortChange: u
  } = e, d = l.useMemo(() => [{
    value: n.GuildJoinRequestSortOrders.TIMESTAMP_DESC,
    label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
  }, {
    value: n.GuildJoinRequestSortOrders.TIMESTAMP_ASC,
    label: r.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
  }], []);
  return (0, a.jsx)(i.SingleSelect, {
    className: t,
    onChange: u,
    value: s,
    options: d
  })
}