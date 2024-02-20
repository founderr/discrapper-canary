"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  u = n("592407"),
  r = n("27978"),
  s = n("119184"),
  d = n("305961"),
  o = n("957255"),
  c = n("943232"),
  f = n("49111"),
  E = n("782340"),
  v = n("801813");

function g(e) {
  let {
    guildId: t,
    onClose: n
  } = e, {
    showHubEventsList: g
  } = r.default.useExperiment({
    guildId: t,
    location: "6597ca_1"
  }, {
    autoTrackExposure: !1
  }), h = (0, a.useStateFromStores)([d.default, o.default], () => {
    let e = d.default.getGuild(t);
    return o.default.can(f.Permissions.MANAGE_ROLES, e)
  }, [t]), p = (0, a.useStateFromStores)([d.default], () => {
    let e = d.default.getGuild(t);
    return g && (null == e ? void 0 : e.hasFeature(f.GuildFeatures.HUB))
  }, [t, g]);
  return (0, l.jsxs)("div", {
    className: v.container,
    children: [(0, l.jsx)(s.default, {
      children: (0, l.jsx)("div", {
        className: v.circle,
        children: (0, l.jsx)(c.default, {
          height: 40,
          width: 40,
          className: v.icon
        })
      })
    }), (0, l.jsx)(i.Heading, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: v.title,
      children: p ? E.default.Messages.HUB_EVENTS_HEADER_TITLE : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_TITLE
    }), (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.subtitle,
      children: p ? E.default.Messages.HUB_EVENTS_HEADER_DESCRIPTION : E.default.Messages.GUILD_EVENT_MODAL_EMPTY_SUBTITLE
    }), h && (0, l.jsx)(i.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: v.roleTip,
      children: E.default.Messages.GUILD_EVENT_ROLE_TIP.format({
        onClick: () => {
          u.default.open(t, f.GuildSettingsSections.ROLES), n()
        }
      })
    })]
  })
}