"use strict";
a.r(t), a.d(t, {
  useGamingContentData: function() {
    return E
  }
});
var n = a("735250");
a("470079");
var r = a("442837"),
  l = a("438139"),
  i = a("706454"),
  o = a("594174"),
  s = a("81063"),
  u = a("162461"),
  d = a("561308"),
  c = a("701488");

function g(e) {
  let {
    message: t
  } = e;
  return (0, n.jsx)("div", {
    children: t
  })
}
let f = (0, l.default)(g),
  E = e => {
    var t, a, l, E, m, T;
    let _ = (0, r.useStateFromStores)([i.default], () => i.default.locale),
      h = (0, r.useStateFromStores)([o.default], () => o.default.getUser(e.author_id)),
      {
        activity: v,
        activityApplication: I,
        fallbackApplication: N
      } = (0, d.useEntryActivityAndApplication)(e),
      x = (0, u.useIsEligibleForRichPresenceInventory)("useGamingContentData"),
      C = null !== (E = null === (t = null != N ? N : I) || void 0 === t ? void 0 : t.getIconURL(c.ImageSizes.LARGE)) && void 0 !== E ? E : void 0;
    if (!x || null == v) return {
      iconUrl: C,
      gameTitle: e.extra.game_name,
      user: h,
      inExperiment: x
    };
    let A = null != I && (null === (a = v.assets) || void 0 === a ? void 0 : a.large_image) != null ? (0, s.getAssetImage)(I.id, v.assets.large_image, [c.ImageSizes.LARGE, c.ImageSizes.LARGE]) : void 0,
      p = null !== (m = null === (l = v.assets) || void 0 === l ? void 0 : l.large_text) && void 0 !== m ? m : void 0,
      M = null !== (T = v.name) && void 0 !== T ? T : e.extra.game_name,
      R = v.details,
      S = v.state,
      O = v.party,
      P = null != v.timestamps ? (0, n.jsx)(f, {
        timestamps: v.timestamps
      }) : (0, n.jsx)(g, {
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