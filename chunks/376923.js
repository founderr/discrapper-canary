n.d(t, {
    LD: function () {
        return x;
    },
    LJ: function () {
        return v;
    },
    mV: function () {
        return g;
    },
    mh: function () {
        return C;
    },
    qc: function () {
        return i;
    },
    wi: function () {
        return _;
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
    c = n(983736),
    d = n(271383),
    u = n(430824),
    h = n(594174),
    p = n(630388),
    m = n(709054);
n(893966), n(527379);
var f = n(372897);
function g(e, t) {
    var n, i;
    let l = (0, o.e7)([h.default], () => h.default.getUser(e), [e]),
        r = (0, o.e7)([d.ZP], () => d.ZP.getMember(t, e), [t, e]),
        a = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]);
    return (0, c.Dc)(a) ? (null == l || null == r || null == a ? 1 : (0, p.yE)(null !== (n = r.flags) && void 0 !== n ? n : 0, f.q.BYPASSES_VERIFICATION) || (0, p.yE)(null !== (i = r.flags) && void 0 !== i ? i : 0, f.q.COMPLETED_ONBOARDING) || (null != r.isPending && !r.isPending) ? 2 : 1) : 0;
}
function C(e, t) {
    var n;
    let i = (0, o.e7)([h.default], () => h.default.getUser(e), [e]),
        l = (0, o.e7)([d.ZP], () => d.ZP.getMember(t, e), [t, e]);
    if (null == i || null == l) return !1;
    let r = (0, p.yE)(null !== (n = l.flags) && void 0 !== n ? n : 0, f.q.BYPASSES_VERIFICATION),
        a = (null == i ? void 0 : i.isPhoneVerified()) || (null == i ? void 0 : i.isStaff()),
        s = (null == l ? void 0 : l.joinedAt) != null;
    return i.verified || a || s || r;
}
function x(e) {
    return r.useMemo(() => {
        let t = m.default.extractTimestamp(e);
        return s()(new Date(t)).format('MMM DD, YYYY');
    }, [e]);
}
function v(e) {
    return r.useMemo(() => {
        let t = m.default.extractTimestamp(e);
        return s()(new Date(t)).format('MM/DD/YYYY');
    }, [e]);
}
function _(e, t) {
    let n = (0, o.e7)([d.ZP], () => d.ZP.getMember(t, e), [t, e]),
        i = null == n ? void 0 : n.joinedAt;
    return r.useMemo(() => (null == i ? '' : s()(new Date(i)).format('MMM DD, YYYY')), [i]);
}
((l = i || (i = {}))[(l.NO_GATE = 0)] = 'NO_GATE'), (l[(l.NO_AGREEMENT = 1)] = 'NO_AGREEMENT'), (l[(l.AGREED = 2)] = 'AGREED');
