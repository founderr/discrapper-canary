"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var l = s("399606"),
  n = s("481060"),
  i = s("430824"),
  r = s("594174"),
  o = s("723047"),
  d = s("689938");

function u(e) {
  let {
    guildId: t,
    application: u
  } = e, c = (0, l.useStateFromStores)([i.default], () => i.default.getGuild(t)), E = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()), _ = (0, o.useRoleSubscriptionSettingsDisabled)();
  if (null == c || !c.isOwner(E)) return null;
  let I = u.team;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(n.FormText, {
      type: n.FormText.Types.DESCRIPTION,
      disabled: _,
      children: null != I ? d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_DESCRIPTION.format({
        teamName: I.name
      }) : d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_NO_TEAM_DESCRIPTION
    }), (0, a.jsx)(n.Spacer, {
      size: 16
    }), (0, a.jsx)(n.Button, {
      look: n.Button.Looks.FILLED,
      color: null != I ? n.Button.Colors.PRIMARY : n.Button.Colors.BRAND,
      onClick: () => {
        var e;
        return e = u, void(0, n.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([s.e("99387"), s.e("83942")]).then(s.bind(s, "743582"));
          return s => (0, a.jsx)(t, {
            ...s,
            application: e
          })
        })
      },
      disabled: _,
      children: null != I ? d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_CHANGE_TEAM_CTA : d.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_SELECT_TEAM_CTA
    })]
  })
}