var n = t(735250),
  r = t(470079),
  i = t(481060),
  a = t(378720),
  l = t(863969),
  o = t(38761),
  c = t(6074),
  u = t(39377),
  I = t(981631),
  T = t(689938),
  d = t(308168);
let _ = [{
    feature: I.Qa3.SINGLE_PLAYER,
    getText: () => T.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: i.UserIcon
  }, {
    feature: I.Qa3.LOCAL_MULTIPLAYER,
    getText: () => T.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: i.GroupIcon
  }, {
    feature: I.Qa3.ONLINE_MULTIPLAYER,
    getText: () => T.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: i.GroupIcon
  }, {
    feature: I.Qa3.PVP,
    getText: () => T.Z.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: i.ModerationIcon
  }, {
    feature: I.Qa3.LOCAL_COOP,
    getText: () => T.Z.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: i.GroupIcon
  }, {
    feature: I.Qa3.ONLINE_COOP,
    getText: () => T.Z.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: i.GroupIcon
  }, {
    feature: I.Qa3.CROSS_PLATFORM,
    getText: () => T.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: i.RefreshIcon
  }, {
    feature: I.Qa3.RICH_PRESENCE,
    getText: () => T.Z.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: c.Z
  }, {
    feature: I.Qa3.DISCORD_GAME_INVITES,
    getText: () => T.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: o.Z
  }, {
    feature: I.Qa3.SPECTATOR_MODE,
    getText: () => T.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: i.VideoIcon
  }, {
    feature: I.Qa3.CONTROLLER_SUPPORT,
    getText: () => T.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: i.DpadIcon
  }, {
    feature: I.Qa3.CLOUD_SAVES,
    getText: () => T.Z.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: l.Z
  }, {
    feature: I.Qa3.SECURE_NETWORKING,
    getText: () => T.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => T.Z.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: u.Z
  }],
  E = e => {
    let {
      IconComponent: s,
      text: t,
      tooltip: r
    } = e;
    return (0, n.jsxs)("div", {
      className: d.row,
      children: [(0, n.jsx)(i.Tooltip, {
        text: r,
        children: e => (0, n.jsx)(s, {
          className: d.featureIcon,
          ...e
        })
      }), (0, n.jsx)("span", {
        className: d.featureText,
        children: t
      }), (0, n.jsx)(i.CheckmarkLargeIcon, {
        size: "md",
        color: "currentColor",
        className: d.checkmarkIcon
      })]
    })
  };
class S extends r.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, s = _.filter(s => {
      let {
        feature: t
      } = s;
      return e.features.has(t)
    }).map(e => {
      let {
        feature: s,
        IconComponent: t,
        getText: r,
        getTooltip: i
      } = e;
      return (0, n.jsx)(E, {
        IconComponent: t,
        text: r(),
        tooltip: i()
      }, s)
    });
    return 0 === s.length ? null : (0, n.jsxs)("div", {
      className: d.features,
      children: [(0, n.jsx)(a.Z, {
        children: T.Z.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), s]
    })
  }
}
s.Z = S