"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("702976"), n("424973");
var i = n("446674"),
  s = n("913144"),
  r = n("568734"),
  a = n("26989"),
  o = n("305961"),
  l = n("697218"),
  u = n("49111"),
  d = n("657944");
let c = {
    notClaimed: !1,
    notEmailVerified: !1,
    notPhoneVerified: !1,
    newAccount: !1,
    newMember: !1,
    canChat: !0
  },
  f = new Set,
  _ = {};

function h(e) {
  let t;
  g(e), f.add(e);
  let n = o.default.getGuild(e),
    i = l.default.getCurrentUser();
  if (null == n || n.verificationLevel === u.VerificationLevels.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
  let c = a.default.getMember(n.id, i.id);
  if (null != c) {
    var h;
    if ((0, r.hasFlag)(null !== (h = c.flags) && void 0 !== h ? h : 0, d.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
    let e = new Set;
    for (let t of c.roles) {
      let i = n.getRole(t);
      null != i && !i.managed && e.add(t)
    }
    let t = new Date("2022-12-02 00:00:00"),
      i = null == c.joinedAt || new Date(c.joinedAt) < t,
      s = n.hasFeature(u.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
    if (!s && e.size > 0) return
  }
  let m = +i.createdAt + 6e4 * u.VerificationCriteria.ACCOUNT_AGE - Date.now(),
    E = +n.joinedAt + 6e4 * u.VerificationCriteria.MEMBER_AGE - Date.now(),
    p = n.verificationLevel >= u.VerificationLevels.LOW && !i.isClaimed(),
    v = !1,
    S = !1,
    T = !1,
    I = !1;
  !i.isPhoneVerified() && !i.isStaff() && (v = n.verificationLevel >= u.VerificationLevels.LOW && !i.verified, S = n.verificationLevel >= u.VerificationLevels.VERY_HIGH, T = n.verificationLevel >= u.VerificationLevels.MEDIUM && m > 0, I = n.verificationLevel >= u.VerificationLevels.HIGH && E > 0);
  let C = [];
  I && C.push(E), T && C.push(m), C.length > 0 && (t = setTimeout(() => s.default.dispatch({
    type: "GUILD_VERIFICATION_CHECK",
    guildId: e
  }), Math.max(...C))), _[e] = {
    notClaimed: p,
    notEmailVerified: v,
    notPhoneVerified: S,
    newAccount: T,
    newMember: I,
    canChat: !(p || v || S || T || I),
    accountDeadline: new Date(Date.now() + m),
    memberDeadline: new Date(Date.now() + E),
    timeoutRef: t
  }
}

function g(e) {
  let t = _[e];
  null != t && clearTimeout(t.timeoutRef), delete _[e]
}

function m(e) {
  f.delete(e.guild.id), h(e.guild.id)
}
class E extends i.default.Store {
  initialize() {
    this.waitFor(o.default, l.default)
  }
  getCheck(e) {
    var t;
    return !f.has(e) && h(e), null !== (t = _[e]) && void 0 !== t ? t : c
  }
  canChatInGuild(e) {
    return this.getCheck(e).canChat
  }
}
E.displayName = "GuildVerificationStore";
var p = new E(s.default, {
  CONNECTION_OPEN: function() {
    for (let e in f.clear(), _) g(e)
  },
  CONNECTION_CLOSED: function() {
    Object.keys(_).forEach(g)
  },
  CURRENT_USER_UPDATE: function() {
    f.clear()
  },
  GUILD_CREATE: m,
  GUILD_UPDATE: m,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    g(t.id)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    f.delete(n)
  },
  GUILD_VERIFICATION_CHECK: function(e) {
    let {
      guildId: t
    } = e;
    h(t)
  }
})