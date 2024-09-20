n.d(t, {
    LD: function () {
        return E;
    },
    LJ: function () {
        return g;
    },
    mV: function () {
        return _;
    },
    mh: function () {
        return f;
    },
    qc: function () {
        return i;
    },
    wi: function () {
        return C;
    }
}),
    n(789020),
    n(47120);
var i,
    s,
    a = n(470079),
    l = n(913527),
    r = n.n(l),
    o = n(399606),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    h = n(630388),
    m = n(709054);
n(893966), n(527379);
var p = n(372897);
function _(e, t) {
    var n, i;
    let s = (0, o.e7)([d.default], () => d.default.getUser(e), [e]),
        a = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        l = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (null == l ? void 0 : l.hasVerificationGate()) ? (null == s || null == a || null == l ? 1 : (0, h.yE)(null !== (n = a.flags) && void 0 !== n ? n : 0, p.q.BYPASSES_VERIFICATION) || (0, h.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, p.q.COMPLETED_ONBOARDING) || (null != a.isPending && !a.isPending) ? 2 : 1) : 0;
}
function f(e, t) {
    var n;
    let i = (0, o.e7)([d.default], () => d.default.getUser(e), [e]),
        s = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
    if (null == i || null == s) return !1;
    let a = (0, h.yE)(null !== (n = s.flags) && void 0 !== n ? n : 0, p.q.BYPASSES_VERIFICATION),
        l = (null == i ? void 0 : i.isPhoneVerified()) || (null == i ? void 0 : i.isStaff()),
        r = (null == s ? void 0 : s.joinedAt) != null;
    return i.verified || l || r || a;
}
function E(e) {
    return a.useMemo(() => {
        let t = m.default.extractTimestamp(e);
        return r()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function g(e) {
    return a.useMemo(() => {
        let t = m.default.extractTimestamp(e);
        return r()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function C(e, t) {
    let n = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        i = null == n ? void 0 : n.joinedAt;
    return a.useMemo(() => (null == i ? '' : r()(new Date(i)).format('MMM DD, YYYY')), [i]);
}
((s = i || (i = {}))[(s.NO_GATE = 0)] = 'NO_GATE'), (s[(s.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (s[(s.AGREED = 2)] = 'AGREED');
