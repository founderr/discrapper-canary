"use strict";
n.r(t), n.d(t, {
  useGamingContentData: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("438139"),
  i = n("706454"),
  r = n("594174"),
  o = n("81063"),
  u = n("162461"),
  d = n("561308"),
  c = n("701488");

function f(e) {
  let {
    message: t
  } = e;
  return (0, a.jsx)("div", {
    children: t
  })
}
let h = (0, s.default)(f),
  m = e => {
    var t, n, s, m, p, E;
    let C = (0, l.useStateFromStores)([i.default], () => i.default.locale),
      g = (0, l.useStateFromStores)([r.default], () => r.default.getUser(e.author_id)),
      {
        activity: S,
        activityApplication: _,
        fallbackApplication: T
      } = (0, d.useEntryActivityAndApplication)(e),
      I = (0, u.useIsEligibleForRichPresenceInventory)("useGamingContentData"),
      A = null !== (m = null === (t = null != T ? T : _) || void 0 === t ? void 0 : t.getIconURL(c.ImageSizes.LARGE)) && void 0 !== m ? m : void 0;
    if (!I || null == S) return {
      iconUrl: A,
      gameTitle: e.extra.game_name,
      user: g,
      inExperiment: I
    };
    let v = null != _ && (null === (n = S.assets) || void 0 === n ? void 0 : n.large_image) != null ? (0, o.getAssetImage)(_.id, S.assets.large_image, [c.ImageSizes.LARGE, c.ImageSizes.LARGE]) : void 0,
      N = null !== (p = null === (s = S.assets) || void 0 === s ? void 0 : s.large_text) && void 0 !== p ? p : void 0,
      x = null !== (E = S.name) && void 0 !== E ? E : e.extra.game_name,
      M = S.details,
      R = S.state,
      y = S.party,
      L = null != S.timestamps ? (0, a.jsx)(h, {
        timestamps: S.timestamps
      }) : (0, a.jsx)(f, {
        message: (0, d.formatEntryTimestamp)(e, C)
      });
    return {
      iconUrl: null != v ? v : A,
      iconFallbackUrl: null != v ? A : void 0,
      iconTitle: N,
      user: g,
      activity: S,
      state: R,
      details: M,
      party: y,
      gameTitle: x,
      gameTime: L,
      inExperiment: I
    }
  }