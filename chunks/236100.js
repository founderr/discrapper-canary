"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var r = l("37983");
l("884691");
var a = l("77078"),
  n = l("38766"),
  s = l("49111"),
  i = l("782340"),
  o = l("364547");
let u = {
    page: s.AnalyticsPages.GUILD_CHANNEL,
    section: s.AnalyticsSections.PROFILE_POPOUT,
    object: s.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
  },
  d = {
    page: s.AnalyticsPages.USER_POPOUT,
    section: s.AnalyticsSections.PROFILE_POPOUT
  };

function c(e) {
  let {
    onSelect: t,
    onClose: l,
    guild: s
  } = e, c = (0, n.default)({
    guild: s,
    analyticsLocation: u
  }), f = (0, n.default)({
    analyticsLocation: d
  });
  return (0, r.jsxs)(a.Menu, {
    className: o.popoutMenu,
    onSelect: t,
    navId: "edit-profile-popout",
    onClose: l,
    "aria-label": i.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: [(0, r.jsx)(a.MenuItem, {
      id: "edit-server-profile",
      label: i.default.Messages.CHANGE_IDENTITY,
      subtext: i.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
      action: () => c()
    }), (0, r.jsx)(a.MenuItem, {
      id: "edit-default-profile",
      label: i.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
      subtext: i.default.Messages.USER_PROFILE_MENU_HELP,
      action: () => f()
    })]
  })
}