n.d(t, {
    LD: function () {
        return C;
    },
    LJ: function () {
        return x;
    },
    mV: function () {
        return f;
    },
    mh: function () {
        return g;
    },
    qc: function () {
        return i;
    },
    wi: function () {
        return v;
    }
}),
    n(789020),
    n(47120);
var i,
    l,
    r = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(399606),
    c = n(271383),
    d = n(430824),
    u = n(594174),
    h = n(630388),
    p = n(709054);
n(893966), n(527379);
var m = n(372897);
function f(e, t) {
    var n, i;
    let l = (0, o.e7)([u.default], () => u.default.getUser(e), [e]),
        r = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        a = (0, o.e7)([d.Z], () => d.Z.getGuild(t), [t]);
    return (null == a ? void 0 : a.hasVerificationGate()) ? (null == l || null == r || null == a ? 1 : (0, h.yE)(null !== (n = r.flags) && void 0 !== n ? n : 0, m.q.BYPASSES_VERIFICATION) || (0, h.yE)(null !== (i = r.flags) && void 0 !== i ? i : 0, m.q.COMPLETED_ONBOARDING) || (null != r.isPending && !r.isPending) ? 2 : 1) : 0;
}
function g(e, t) {
    var n;
    let i = (0, o.e7)([u.default], () => u.default.getUser(e), [e]),
        l = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]);
    if (null == i || null == l) return !1;
    let r = (0, h.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, m.q.BYPASSES_VERIFICATION),
        a = (null == i ? void 0 : i.isPhoneVerified()) || (null == i ? void 0 : i.isStaff()),
        s = (null == l ? void 0 : l.joinedAt) != null;
    return i.verified || a || s || r;
}
function C(e) {
    return r.useMemo(() => {
        let t = p.default.extractTimestamp(e);
        return s()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function x(e) {
    return r.useMemo(() => {
        let t = p.default.extractTimestamp(e);
        return s()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function v(e, t) {
    let n = (0, o.e7)([c.ZP], () => c.ZP.getMember(t, e), [t, e]),
        i = null == n ? void 0 : n.joinedAt;
    return r.useMemo(() => (null == i ? '' : s()(new Date(i)).format('MMM DD, YYYY')), [i]);
}
((l = i || (i = {}))[(l.NO_GATE = 0)] = 'NO_GATE'), (l[(l.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (l[(l.AGREED = 2)] = 'AGREED');
