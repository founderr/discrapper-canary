"use strict";
s.r(t);
var a = s("735250"),
  r = s("470079"),
  i = s("481060"),
  n = s("378720"),
  l = s("119828"),
  o = s("263704"),
  u = s("863969"),
  d = s("975667"),
  c = s("439034"),
  _ = s("158010"),
  E = s("964309"),
  T = s("38761"),
  I = s("6074"),
  R = s("39377"),
  f = s("417622"),
  S = s("981631"),
  A = s("689938"),
  m = s("704012");
let N = [{
    feature: S.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => A.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: S.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => A.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => A.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.PVP,
    getText: () => A.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: S.SKUFeatureTypes.LOCAL_COOP,
    getText: () => A.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.ONLINE_COOP,
    getText: () => A.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: _.default
  }, {
    feature: S.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => A.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: f.default
  }, {
    feature: S.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => A.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: S.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => A.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: T.default
  }, {
    feature: S.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => A.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: l.default
  }, {
    feature: S.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => A.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: S.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => A.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: u.default
  }, {
    feature: S.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => A.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => A.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: R.default
  }],
  p = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: r
    } = e;
    return (0, a.jsxs)("div", {
      className: m.row,
      children: [(0, a.jsx)(i.Tooltip, {
        text: r,
        children: e => (0, a.jsx)(t, {
          className: m.featureIcon,
          ...e
        })
      }), (0, a.jsx)("span", {
        className: m.featureText,
        children: s
      }), (0, a.jsx)(o.default, {
        className: m.checkmarkIcon
      })]
    })
  };
class g extends r.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = N.filter(t => {
      let {
        feature: s
      } = t;
      return e.features.has(s)
    }).map(e => {
      let {
        feature: t,
        IconComponent: s,
        getText: r,
        getTooltip: i
      } = e;
      return (0, a.jsx)(p, {
        IconComponent: s,
        text: r(),
        tooltip: i()
      }, t)
    });
    return 0 === t.length ? null : (0, a.jsxs)("div", {
      className: m.features,
      children: [(0, a.jsx)(n.default, {
        children: A.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
t.default = g