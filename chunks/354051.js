"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("496675"),
  r = s("434404"),
  o = s("845377"),
  d = s("981631"),
  u = s("689938"),
  c = s("914407");
t.default = e => {
  let {
    guild: t
  } = e, s = (0, l.useStateFromStores)([i.default], () => i.default.can(d.Permissions.ADMINISTRATOR, t), [t]), E = t.hasFeature(d.GuildFeatures.DISCOVERABLE), _ = () => {
    let e = new Set(t.features);
    t.hasFeature(d.GuildFeatures.DISCOVERABLE) && e.delete(d.GuildFeatures.DISCOVERABLE), r.default.updateGuild({
      features: e
    })
  };
  return (0, a.jsxs)(n.FormSection, {
    title: u.default.Messages.DISCOVERY,
    tag: "h2",
    children: [(0, a.jsx)("div", {
      className: c.background
    }), (0, a.jsxs)("div", {
      className: c.discoverySettings,
      children: [(0, a.jsx)("div", {
        className: c.image
      }), (0, a.jsx)(n.Heading, {
        className: c.header,
        variant: "heading-xl/semibold",
        children: u.default.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED
      }), (0, a.jsx)(n.Text, {
        className: c.description,
        variant: "text-md/normal",
        children: u.default.Messages.GUILD_SETTINGS_DISCOVERY_DISQUALIFIED_DESCRIPTION.format()
      }), (0, a.jsx)(o.default, {
        className: c.checklist,
        guild: t,
        guildId: t.id,
        noHeader: !0,
        failedItemsOnly: !0
      }), E && (0, a.jsx)(n.Tooltip, {
        text: s ? null : u.default.Messages.GUILD_SETTINGS_DISCOVERY_ADMIN_ONLY,
        children: e => (0, a.jsx)(n.Button, {
          size: n.Button.Sizes.SMALL,
          onClick: _,
          color: n.Button.Colors.PRIMARY,
          className: c.disableDiscoveryButton,
          disabled: !s,
          ...e,
          children: u.default.Messages.GUILD_SETTINGS_DISABLE_DISCOVERABLE_PERMINENTLY
        })
      })]
    })]
  })
}