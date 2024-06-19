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
    var n, t, r, f, m, v;
    let T = (0, a.e7)([o.default], () => o.default.locale),
      x = (0, a.e7)([i.default], () => i.default.getUser(e.author_id)),
      {
        activity: g,
        activityApplication: N,
        fallbackApplication: h
      } = (0, c.qy)(e),
      I = (0, s.wh)("useGamingContentData"),
      M = null !== (f = null === (n = null != h ? h : N) || void 0 === n ? void 0 : n.getIconURL(d.Si.LARGE)) && void 0 !== f ? f : void 0;
    if (!I || null == g) return {
      iconUrl: M,
      gameTitle: e.extra.game_name,
      user: x,
      inExperiment: I
    };
    let C = null != N && (null === (t = g.assets) || void 0 === t ? void 0 : t.large_image) != null ? (0, u.getAssetImage)(N.id, g.assets.large_image, [d.Si.LARGE, d.Si.LARGE]) : void 0,
      A = null !== (m = null === (r = g.assets) || void 0 === r ? void 0 : r.large_text) && void 0 !== m ? m : void 0,
      R = null !== (v = g.name) && void 0 !== v ? v : e.extra.game_name,
      Z = g.details,
      p = g.state,
      S = g.party,
      O = null != g.timestamps ? (0, l.jsx)(_, {
        timestamps: g.timestamps
      }) : (0, l.jsx)(E, {
        message: (0, c.yh)(e, T)
      });
    return {
      iconUrl: null != C ? C : M,
      iconFallbackUrl: null != C ? M : void 0,
      iconTitle: A,
      user: x,
      activity: g,
      state: p,
      details: Z,
      party: S,
      gameTitle: R,
      gameTime: O,
      inExperiment: I
    }
  }