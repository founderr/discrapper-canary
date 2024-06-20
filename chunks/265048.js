t.d(n, {
  F: function() {
    return f
  }
});
var l = t(735250);
t(470079);
var a = t(442837),
  r = t(438139),
  o = t(706454),
  i = t(594174),
  u = t(81063),
  s = t(162461),
  c = t(561308),
  d = t(701488);

function E(e) {
  let {
    message: n
  } = e;
  return (0, l.jsx)("div", {
    children: n
  })
}
let _ = (0, r.Z)(E),
  f = e => {
    var n, t, r, f, T, m;
    let v = (0, a.e7)([o.default], () => o.default.locale),
      x = (0, a.e7)([i.default], () => i.default.getUser(e.author_id)),
      {
        activity: N,
        activityApplication: g,
        fallbackApplication: I
      } = (0, c.qy)(e),
      h = (0, s.wh)("useGamingContentData"),
      M = null !== (f = null === (n = null != I ? I : g) || void 0 === n ? void 0 : n.getIconURL(d.Si.LARGE)) && void 0 !== f ? f : void 0;
    if (!h || null == N) return {
      iconUrl: M,
      gameTitle: e.extra.game_name,
      user: x,
      inExperiment: h
    };
    let A = null != g && (null === (t = N.assets) || void 0 === t ? void 0 : t.large_image) != null ? (0, u.getAssetImage)(g.id, N.assets.large_image, [d.Si.LARGE, d.Si.LARGE]) : void 0,
      C = null !== (T = null === (r = N.assets) || void 0 === r ? void 0 : r.large_text) && void 0 !== T ? T : void 0,
      R = null !== (m = N.name) && void 0 !== m ? m : e.extra.game_name,
      S = N.details,
      Z = N.state,
      p = N.party,
      O = null != N.timestamps ? (0, l.jsx)(_, {
        timestamps: N.timestamps
      }) : (0, l.jsx)(E, {
        message: (0, c.yh)(e, v)
      });
    return {
      iconUrl: null != A ? A : M,
      iconFallbackUrl: null != A ? M : void 0,
      iconTitle: C,
      user: x,
      activity: N,
      state: Z,
      details: S,
      party: p,
      gameTitle: R,
      gameTime: O,
      inExperiment: h
    }
  }