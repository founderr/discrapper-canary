"use strict";
n.r(t), n.d(t, {
  useGamingContentData: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var r = n("442837"),
  l = n("438139"),
  i = n("706454"),
  o = n("594174"),
  s = n("81063"),
  u = n("162461"),
  d = n("561308"),
  c = n("701488");

function g(e) {
  let {
    message: t
  } = e;
  return (0, a.jsx)("div", {
    children: t
  })
}
let f = (0, l.default)(g),
  m = e => {
    var t, n, l, m, E, T;
    let _ = (0, r.useStateFromStores)([i.default], () => i.default.locale),
      h = (0, r.useStateFromStores)([o.default], () => o.default.getUser(e.author_id)),
      {
        activity: v,
        activityApplication: I,
        fallbackApplication: N
      } = (0, d.useEntryActivityAndApplication)(e),
      x = (0, u.useIsEligibleForRichPresenceInventory)("useGamingContentData"),
      C = null !== (m = null === (t = null != N ? N : I) || void 0 === t ? void 0 : t.getIconURL(c.ImageSizes.LARGE)) && void 0 !== m ? m : void 0;
    if (!x || null == v) return {
      iconUrl: C,
      gameTitle: e.extra.game_name,
      user: h,
      inExperiment: x
    };
    let A = null != I && (null === (n = v.assets) || void 0 === n ? void 0 : n.large_image) != null ? (0, s.getAssetImage)(I.id, v.assets.large_image, [c.ImageSizes.LARGE, c.ImageSizes.LARGE]) : void 0,
      p = null !== (E = null === (l = v.assets) || void 0 === l ? void 0 : l.large_text) && void 0 !== E ? E : void 0,
      M = null !== (T = v.name) && void 0 !== T ? T : e.extra.game_name,
      R = v.details,
      S = v.state,
      O = v.party,
      P = null != v.timestamps ? (0, a.jsx)(f, {
        timestamps: v.timestamps
      }) : (0, a.jsx)(g, {
        message: (0, d.formatEntryTimestamp)(e, _)
      });
    return {
      iconUrl: null != A ? A : C,
      iconFallbackUrl: null != A ? C : void 0,
      iconTitle: p,
      user: h,
      activity: v,
      state: S,
      details: R,
      party: O,
      gameTitle: M,
      gameTime: P,
      inExperiment: x
    }
  }