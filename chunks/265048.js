"use strict";
n.r(t), n.d(t, {
  useGamingContentData: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("438139"),
  i = n("835473"),
  r = n("706454"),
  o = n("594174"),
  u = n("81063"),
  d = n("719247"),
  c = n("162461"),
  f = n("561308"),
  h = n("701488");

function m(e) {
  let {
    message: t
  } = e;
  return (0, a.jsx)("div", {
    children: t
  })
}
let p = (0, s.default)(m),
  E = e => {
    var t, n, s, E, C;
    let g = e.extra.application_id,
      S = (0, l.useStateFromStores)([r.default], () => r.default.locale),
      _ = (0, l.useStateFromStores)([o.default], () => o.default.getUser(e.author_id)),
      T = (0, i.useGetOrFetchApplication)(g),
      I = (0, l.useStateFromStores)([d.default], () => d.default.getMatchingActivity(e)),
      A = (0, c.useIsEligibleForRichPresenceInventory)("useGamingContentData"),
      v = null !== (s = null == T ? void 0 : T.getIconURL(h.ImageSizes.LARGE)) && void 0 !== s ? s : void 0;
    if (!A || null == I) return {
      iconUrl: v,
      gameTitle: e.extra.game_name,
      user: _,
      inExperiment: A
    };
    let N = (null === (t = I.assets) || void 0 === t ? void 0 : t.large_image) != null ? (0, u.getAssetImage)(g, I.assets.large_image, [h.ImageSizes.LARGE, h.ImageSizes.LARGE]) : void 0,
      x = null !== (E = null === (n = I.assets) || void 0 === n ? void 0 : n.large_text) && void 0 !== E ? E : void 0,
      M = null !== (C = I.name) && void 0 !== C ? C : e.extra.game_name,
      R = I.details,
      y = I.state,
      L = I.party,
      O = null != I.timestamps ? (0, a.jsx)(p, {
        timestamps: I.timestamps
      }) : (0, a.jsx)(m, {
        message: (0, f.formatEntryTimestamp)(e, S)
      });
    return {
      iconUrl: null != N ? N : v,
      iconTitle: x,
      user: _,
      activity: I,
      state: y,
      details: R,
      party: L,
      gameTitle: M,
      gameTime: O,
      inExperiment: A
    }
  }