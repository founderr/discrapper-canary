"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  r = s("481060"),
  l = s("378720"),
  i = s("119828"),
  u = s("263704"),
  o = s("863969"),
  d = s("975667"),
  c = s("439034"),
  I = s("158010"),
  T = s("964309"),
  E = s("38761"),
  f = s("6074"),
  _ = s("39377"),
  S = s("417622"),
  A = s("981631"),
  O = s("689938"),
  R = s("704012");
let N = [{
    feature: A.SKUFeatureTypes.SINGLE_PLAYER,
    getText: () => O.default.Messages.APPLICATION_STORE_SINGLE_PLAYER,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_SINGLE_PLAYER_TOOLTIP,
    IconComponent: T.default
  }, {
    feature: A.SKUFeatureTypes.LOCAL_MULTIPLAYER,
    getText: () => O.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_LOCAL_MULTIPLAYER_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: A.SKUFeatureTypes.ONLINE_MULTIPLAYER,
    getText: () => O.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_ONLINE_MULTIPLAYER_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: A.SKUFeatureTypes.PVP,
    getText: () => O.default.Messages.APPLICATION_STORE_PVP,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_PVP_TOOLTIP,
    IconComponent: c.default
  }, {
    feature: A.SKUFeatureTypes.LOCAL_COOP,
    getText: () => O.default.Messages.APPLICATION_STORE_LOCAL_COOP,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_LOCAL_COOP_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: A.SKUFeatureTypes.ONLINE_COOP,
    getText: () => O.default.Messages.APPLICATION_STORE_ONLINE_COOP,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_ONLINE_COOP_TOOLTIP,
    IconComponent: I.default
  }, {
    feature: A.SKUFeatureTypes.CROSS_PLATFORM,
    getText: () => O.default.Messages.APPLICATION_STORE_CROSS_PLATFORM,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_CROSS_PLATFORM_TOOLTIP,
    IconComponent: S.default
  }, {
    feature: A.SKUFeatureTypes.RICH_PRESENCE,
    getText: () => O.default.Messages.APPLICATION_STORE_RICH_PRESENCE,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_RICH_PRESENCE_TOOLTIP,
    IconComponent: f.default
  }, {
    feature: A.SKUFeatureTypes.DISCORD_GAME_INVITES,
    getText: () => O.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_DISCORD_GAME_INVITES_TOOLTIP,
    IconComponent: E.default
  }, {
    feature: A.SKUFeatureTypes.SPECTATOR_MODE,
    getText: () => O.default.Messages.APPLICATION_STORE_SPECTATOR_MODE,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_SPECTATOR_MODE_TOOLTIP,
    IconComponent: i.default
  }, {
    feature: A.SKUFeatureTypes.CONTROLLER_SUPPORT,
    getText: () => O.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_CONTROLLER_SUPPORT_TOOLTIP,
    IconComponent: d.default
  }, {
    feature: A.SKUFeatureTypes.CLOUD_SAVES,
    getText: () => O.default.Messages.APPLICATION_STORE_CLOUD_SAVES,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_CLOUD_SAVES_TOOLTIP,
    IconComponent: o.default
  }, {
    feature: A.SKUFeatureTypes.SECURE_NETWORKING,
    getText: () => O.default.Messages.APPLICATION_STORE_SECURE_NETWORKING,
    getTooltip: () => O.default.Messages.APPLICATION_STORE_SECURE_NETWORKING_TOOLTIP,
    IconComponent: _.default
  }],
  h = e => {
    let {
      IconComponent: t,
      text: s,
      tooltip: a
    } = e;
    return (0, n.jsxs)("div", {
      className: R.row,
      children: [(0, n.jsx)(r.Tooltip, {
        text: a,
        children: e => (0, n.jsx)(t, {
          className: R.featureIcon,
          ...e
        })
      }), (0, n.jsx)("span", {
        className: R.featureText,
        children: s
      }), (0, n.jsx)(u.default, {
        className: R.checkmarkIcon
      })]
    })
  };
class p extends a.PureComponent {
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
        getText: a,
        getTooltip: r
      } = e;
      return (0, n.jsx)(h, {
        IconComponent: s,
        text: a(),
        tooltip: r()
      }, t)
    });
    return 0 === t.length ? null : (0, n.jsxs)("div", {
      className: R.features,
      children: [(0, n.jsx)(l.default, {
        children: O.default.Messages.APPLICATION_STORE_SECTION_TITLE_FEATURES
      }), t]
    })
  }
}
t.default = p