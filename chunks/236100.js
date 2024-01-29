"use strict";
t.r(r), t.d(r, {
  default: function() {
    return d
  }
});
var l = t("37983");
t("884691");
var n = t("77078"),
  i = t("38766"),
  o = t("49111"),
  a = t("782340"),
  s = t("364547");
let u = {
    page: o.AnalyticsPages.GUILD_CHANNEL,
    section: o.AnalyticsSections.PROFILE_POPOUT,
    object: o.AnalyticsObjects.EDIT_PER_SERVER_IDENTITY
  },
  f = {
    page: o.AnalyticsPages.USER_POPOUT,
    section: o.AnalyticsSections.PROFILE_POPOUT
  };

function d(e) {
  let {
    onSelect: r,
    onClose: t,
    guild: o
  } = e, d = (0, i.default)({
    guild: o,
    analyticsLocation: u
  }), c = (0, i.default)({
    analyticsLocation: f
  });
  return (0, l.jsxs)(n.Menu, {
    className: s.popoutMenu,
    onSelect: r,
    navId: "edit-profile-popout",
    onClose: t,
    "aria-label": a.default.Messages.PROFILE_ACTIONS_MENU_LABEL,
    children: [(0, l.jsx)(n.MenuItem, {
      id: "edit-server-profile",
      label: a.default.Messages.CHANGE_IDENTITY,
      subtext: a.default.Messages.CHANGE_IDENTITY_SERVER_PROFILE_MENU_HELP,
      action: () => d()
    }), (0, l.jsx)(n.MenuItem, {
      id: "edit-default-profile",
      label: a.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE,
      subtext: a.default.Messages.USER_PROFILE_MENU_HELP,
      action: () => c()
    })]
  })
}