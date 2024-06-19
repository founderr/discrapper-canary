n(47120);
var l, i, s, r, a = n(442837),
  o = n(570140),
  u = n(445507);
let c = {
    "valorant-user": u.qJ,
    "valorant-admin": u.xQ,
    "genshin-user": u.Zl,
    "genshin-admin": u.Q3
  },
  d = null,
  h = {},
  g = new Set;

function p() {
  for (let e in d = null, h) delete h[e]
}
class m extends(l = a.ZP.Store) {
  getActiveUserSignUp() {
    return d
  }
  getActiveGuildSignUp(e) {
    var t;
    return null !== (t = h[e]) && void 0 !== t ? t : null
  }
  hasCompletedTarget(e) {
    return g.has(e)
  }
}
r = "SignUpStore", (s = "displayName") in(i = m) ? Object.defineProperty(i, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = r, t.Z = new m(o.Z, {
  ENABLE_USER_SIGN_UP: function(e) {
    let {
      key: t
    } = e, n = c[t];
    (0, u.u9)(n) && 0 === Object.keys(h).length && (d = n)
  },
  ENABLE_GUILD_SIGN_UP: function(e) {
    let {
      key: t,
      guildId: n
    } = e, l = c[t];
    (0, u.mC)(l) && (h[n] = l, d = null)
  },
  COMPLETE_SIGN_UP: function(e) {
    let {
      targetKey: t
    } = e;
    g.add(t), p()
  },
  DISMISS_SIGN_UP: p
})