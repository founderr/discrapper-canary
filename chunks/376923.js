n.d(t, {
  LD: function() {
    return f
  },
  LJ: function() {
    return C
  },
  mV: function() {
    return p
  },
  mh: function() {
    return g
  },
  qc: function() {
    return l
  },
  wi: function() {
    return _
  }
}), n(789020), n(47120);
var l, i, s = n(470079),
  a = n(913527),
  r = n.n(a),
  o = n(399606),
  c = n(271383),
  u = n(430824),
  d = n(594174),
  h = n(630388),
  m = n(709054);
n(893966), n(527379);
var E = n(372897);

function p(e, t) {
  var n, l;
  let i = (0, o.e7)([d.default], () => d.default.getUser(e), [e]),
    s = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
    a = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]);
  return (null == a ? void 0 : a.hasVerificationGate()) ? null == i || null == s || null == a ? 1 : (0, h.yE)(null !== (n = s.flags) && void 0 !== n ? n : 0, E.q.BYPASSES_VERIFICATION) || (0, h.yE)(null !== (l = s.flags) && void 0 !== l ? l : 0, E.q.COMPLETED_ONBOARDING) ? 2 : 1 : 0
}

function g(e, t) {
  var n;
  let l = (0, o.e7)([d.default], () => d.default.getUser(e), [e]),
    i = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
  if (null == l || null == i) return !1;
  let s = (0, h.yE)(null !== (n = i.flags) && void 0 !== n ? n : 0, E.q.BYPASSES_VERIFICATION),
    a = (null == l ? void 0 : l.isPhoneVerified()) || (null == l ? void 0 : l.isStaff()),
    r = (null == i ? void 0 : i.joinedAt) != null;
  return l.verified || a || r || s
}

function f(e) {
  return s.useMemo(() => {
    let t = m.default.extractTimestamp(e);
    return r()(new Date(t)).format("MMM DD, YYYY")
  }, [e])
}

function C(e) {
  return s.useMemo(() => {
    let t = m.default.extractTimestamp(e);
    return r()(new Date(t)).format("MM/DD/YYYY")
  }, [e])
}

function _(e, t) {
  let n = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
    l = null == n ? void 0 : n.joinedAt;
  return s.useMemo(() => null == l ? "" : r()(new Date(l)).format("MMM DD, YYYY"), [l])
}(i = l || (l = {}))[i.NO_GATE = 0] = "NO_GATE", i[i.NO_AGREEMENT = 1] = "NO_AGREEMENT", i[i.AGREED = 2] = "AGREED"