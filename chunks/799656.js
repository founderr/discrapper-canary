var i = r(200651);
r(192379);
var a = r(512969),
    s = r(442837),
    o = r(353926),
    l = r(314897),
    u = r(981631);
let c = (e) => {
    let { hasLoadedExperiments: n, token: r } = e;
    return null != r ? (0, i.jsx)(a.l_, { to: u.Z5c.APP }) : n ? (0, i.jsx)(a.l_, { to: u.Z5c.DEFAULT_LOGGED_OUT }) : null;
};
n.Z = s.ZP.connectStores([o.Z, l.default], () => {
    let e = l.default.getToken();
    return {
        token: e,
        hasLoadedExperiments: null != e || o.Z.hasLoadedExperiments
    };
})(c);
