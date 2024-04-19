"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("481060"),
  l = s("378720"),
  n = s("119828"),
  o = s("263704"),
  u = s("863969"),
  d = s("975667"),
  c = s("439034"),
  _ = s("158010"),
  E = s("964309"),
  C = s("38761"),
  f = s("6074"),
  T = s("39377"),
  I = s("417622"),
  R = s("981631"),
  S = s("689938"),
  p = s("866887");
let m = [{
    feature: R.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => S.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: R.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => S.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => S.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.PVP,
    getText: () => S.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: R.SKUFeatureTypes.LOCAL_COOP,
    getText: () => S.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.ONLINE_COOP,
    getText: () => S.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: R.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => S.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: R.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => S.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: f.default
  }, {
    feature: R.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => S.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: C.default
  }, {
    feature: R.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => S.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: n.default
  }, {
    feature: R.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => S.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: R.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => S.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: u.default
  }, {
    feature: R.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => S.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => S.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: T.default
  }],
  A = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: i
    } = e;
    return (0, a.jsxs)("div", {
      className: p.row,
      children: [(0, a.jsx)(r.Tooltip, {
        text: i,
        children: e => (0, a.jsx)(t, {
          className: p.featureIcon,
          ...e
        })
      }), (0, a.jsx)("span", {
        className: p.featureText,
        children: s
      }), (0, a.jsx)(o.default, {
        className: p.checkmarkIcon
      })]
    })
  };
class N extends i.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = m.filter(t => {
      let {
        feature: s
      } = t;
      return e.features.has(s)
    }).map(e => {
      let {
        feature: t,
        IconComponent: s,
        getText: i,
        getTooltip: r
      } = e;
      return (0, a.jsx)(A, {
        IconComponent: s,
        text: i(),
        tooltip: r()
      }, t)
    });
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: p.features,
      children: [(0, a.jsx)(l.default, {
        children: S.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
t.default = N