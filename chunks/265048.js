"use strict";
n.r(t), n.d(t, {
  useGamingContentData: function() {
    return p
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
  c = n("561308"),
  f = n("701488");

function h(e) {
  let {
    message: t
  } = e;
  return (0, a.jsx)("div", {
    children: t
  })
}
let m = (0, s.default)(h),
  p = e => {
    var t, n, s, p;
    let E = e.extra.application_id,
      C = (0, l.useStateFromStores)([r.default], () => r.default.locale),
      g = (0, l.useStateFromStores)([o.default], () => o.default.getUser(e.author_id)),
      S = (0, i.useGetOrFetchApplication)(E),
      _ = (0, l.useStateFromStores)([d.default], () => d.default.getMatchingActivity(e)),
      T = (null == _ ? void 0 : _.assets) != null && null != _.assets.large_image ? (0, u.getAssetImage)(E, _.assets.large_image, [f.ImageSizes.LARGE, f.ImageSizes.LARGE]) : null !== (n = null == S ? void 0 : S.getIconURL(f.ImageSizes.LARGE)) && void 0 !== n ? n : void 0,
      I = null !== (s = null == _ ? void 0 : null === (t = _.assets) || void 0 === t ? void 0 : t.large_text) && void 0 !== s ? s : void 0,
      A = null !== (p = null == _ ? void 0 : _.name) && void 0 !== p ? p : e.extra.game_name,
      v = null == _ ? void 0 : _.details,
      x = null == _ ? void 0 : _.state,
      N = null == _ ? void 0 : _.party;
    return {
      iconUrl: T,
      iconTitle: I,
      user: g,
      state: x,
      details: v,
      party: N,
      gameTitle: A,
      gameTime: (null == _ ? void 0 : _.timestamps) != null ? (0, a.jsx)(m, {
        timestamps: _.timestamps
      }) : (0, a.jsx)(h, {
        message: (0, c.formatEntryTimestamp)(e, C)
      })
    }
  }