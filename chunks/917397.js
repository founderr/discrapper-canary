"use strict";
n.r(t), n.d(t, {
  UserRulesAgreementLevel: function() {
    return l
  },
  useUserRulesAgreementLevel: function() {
    return p
  },
  useUserAccountVerified: function() {
    return E
  },
  useUserAccountAgeDate: function() {
    return g
  },
  useAuditLogDate: function() {
    return S
  },
  useGuildMemberJoinedAtDate: function() {
    return C
  }
}), n("702976"), n("222007");
var l, a, s = n("884691"),
  i = n("866227"),
  r = n.n(i),
  o = n("65597"),
  u = n("26989"),
  d = n("305961"),
  c = n("697218"),
  f = n("568734"),
  h = n("299039");
n("178406"), n("645266");
var m = n("657944");

function p(e, t) {
  var n, l;
  let a = (0, o.default)([c.default], () => c.default.getUser(e), [e]),
    s = (0, o.default)([u.default], () => u.default.getMember(t, e), [t, e]),
    i = (0, o.default)([d.default], () => d.default.getGuild(t), [t]),
    r = null == i ? void 0 : i.hasVerificationGate();
  return r ? null == a || null == s || null == i ? 1 : (0, f.hasFlag)(null !== (n = s.flags) && void 0 !== n ? n : 0, m.GuildMemberFlags.BYPASSES_VERIFICATION) || (0, f.hasFlag)(null !== (l = s.flags) && void 0 !== l ? l : 0, m.GuildMemberFlags.COMPLETED_ONBOARDING) ? 2 : 1 : 0
}

function E(e) {
  let t = (0, o.default)([c.default], () => c.default.getUser(e), [e]);
  if (null == t) return !1;
  let n = (null == t ? void 0 : t.isPhoneVerified()) || (null == t ? void 0 : t.isStaff());
  return t.verified || n
}

function g(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r(new Date(t)).format("MMM DD, YYYY")
  }, [e])
}

function S(e) {
  return s.useMemo(() => {
    let t = h.default.extractTimestamp(e);
    return r(new Date(t)).format("MM/DD/YYYY")
  }, [e])
}

function C(e, t) {
  let n = (0, o.default)([u.default], () => u.default.getMember(t, e), [t, e]),
    l = null == n ? void 0 : n.joinedAt;
  return s.useMemo(() => null == l ? "" : r(new Date(l)).format("MMM DD, YYYY"), [l])
}(a = l || (l = {}))[a.NO_GATE = 0] = "NO_GATE", a[a.NO_AGREEMENT = 1] = "NO_AGREEMENT", a[a.AGREED = 2] = "AGREED"