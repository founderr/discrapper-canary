var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(378720),
  r = n(863969),
  o = n(38761),
  c = n(6074),
  u = n(39377),
  d = n(981631),
  E = n(689938),
  h = n(308168);
let _ = [{
    feature: d.Qa3.SINGLE_PLAYER,
    getText: () => E.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: l.UserIcon
  }, {
    feature: d.Qa3.LOCAL_MULTIPLAYER,
    getText: () => E.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: l.GroupIcon
  }, {
    feature: d.Qa3.ONLINE_MULTIPLAYER,
    getText: () => E.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: l.GroupIcon
  }, {
    feature: d.Qa3.PVP,
    getText: () => E.Z.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: l.ModerationIcon
  }, {
    feature: d.Qa3.LOCAL_COOP,
    getText: () => E.Z.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: l.GroupIcon
  }, {
    feature: d.Qa3.ONLINE_COOP,
    getText: () => E.Z.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: l.GroupIcon
  }, {
    feature: d.Qa3.CROSS_PLATFORM,
    getText: () => E.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: l.RefreshIcon
  }, {
    feature: d.Qa3.RICH_PRESENCE,
    getText: () => E.Z.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: c.Z
  }, {
    feature: d.Qa3.DISCORD_GAME_INVITES,
    getText: () => E.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: o.Z
  }, {
    feature: d.Qa3.SPECTATOR_MODE,
    getText: () => E.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: l.VideoIcon
  }, {
    feature: d.Qa3.CONTROLLER_SUPPORT,
    getText: () => E.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: l.DpadIcon
  }, {
    feature: d.Qa3.CLOUD_SAVES,
    getText: () => E.Z.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: r.Z
  }, {
    feature: d.Qa3.SECURE_NETWORKING,
    getText: () => E.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => E.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: u.Z
  }],
  I = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, s.jsxs)("div", {
      className: h.row,
      children: [(0, s.jsx)(l.Tooltip, {
        text: i,
        children: e => (0, s.jsx)(t, {
          className: h.featureIcon,
          ...e
        })
      }), (0, s.jsx)("span", {
        className: h.featureText,
        children: n
      }), (0, s.jsx)(l.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: h.checkmarkIcon
      })]
    })
  };
class m extends i.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = _.filter(t => {
      let {
        feature: n
      } = t;
      return e.features.has(n)
    }).map(e => {
      let {
        feature: t,
        IconComponent: n,
        getText: i,
        getTooltip: l
      } = e;
      return (0, s.jsx)(I, {
        IconComponent: n,
        text: i(),
        tooltip: l()
      }, t)
    });
    return 0 === t.length ? null : (0, s.jsxs)("div", {
      className: h.features,
      children: [(0, s.jsx)(a.Z, {
        children: E.Z.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
t.Z = m