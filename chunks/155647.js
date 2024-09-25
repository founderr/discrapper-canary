n.d(t, {
    fW: function () {
        return _;
    },
    jc: function () {
        return f;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(823379),
    s = n(568315),
    l = n(83126),
    u = n(617191),
    c = n(82554);
let d = {
    [c.zR.SAFETY_DM_SPAM_FILTER]: s.Z,
    [c.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: u.Z,
    [c.zR.SAFETY_LANGUAGE_FILTER]: l.Z
};
function _(e) {
    return a.useMemo(() => (null != e ? E(e) : null), [e]);
}
function E(e) {
    let t = [];
    return (
        Object.entries(d).forEach((n) => {
            let [r, i] = n;
            (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(r);
        }),
        0 === t.length ? null : t
    );
}
function f(e, t) {
    return a.useMemo(() => e.map((e) => h(e, t)).filter(o.lm), [e, t]);
}
function h(e, t) {
    let n = d[e];
    return p(n, t) ? n : null;
}
function p(e, t) {
    let { predicate: n, eligibleChannelTypes: r } = e,
        i = null == n || (null == n ? void 0 : n()) === !0,
        a = null == t || null == r || r.includes(t);
    return i && a;
}
