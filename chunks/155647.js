r.d(n, {
    fW: function () {
        return _;
    },
    jc: function () {
        return p;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(192379),
    o = r(823379),
    l = r(568315),
    u = r(83126),
    c = r(617191),
    d = r(82554);
let f = {
    [d.zR.SAFETY_DM_SPAM_FILTER]: l.Z,
    [d.zR.SAFETY_SENSITIVE_MEDIA_FILTERS]: c.Z,
    [d.zR.SAFETY_LANGUAGE_FILTER]: u.Z
};
function _(e) {
    return s.useMemo(() => (null != e ? h(e) : null), [e]);
}
function h(e) {
    let n = [];
    return (
        Object.entries(f).forEach((r) => {
            let [i, a] = r;
            (null == a.eligibleReportSubtypes || a.eligibleReportSubtypes.includes(e)) && n.push(i);
        }),
        0 === n.length ? null : n
    );
}
function p(e, n) {
    return s.useMemo(() => e.map((e) => m(e, n)).filter(o.lm), [e, n]);
}
function m(e, n) {
    let r = f[e];
    return g(r, n) ? r : null;
}
function g(e, n) {
    let { predicate: r, eligibleChannelTypes: i } = e,
        a = null == r || (null == r ? void 0 : r()) === !0,
        s = null == n || null == i || i.includes(n);
    return a && s;
}
