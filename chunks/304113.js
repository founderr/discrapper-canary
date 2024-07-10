n.r(i), n.d(i, {
    default: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var l = n(512722), t = n.n(l), o = n(442837), r = n(594174), a = n(786874), d = n(877485), c = n(910364), u = n(853825), I = n(41527), _ = n(107889);
function f(e) {
    let {
        location: i,
        user: n,
        ...l
    } = e;
    (0, d.V)({ location: i });
    let {botProfilesEnabled: f} = (0, a.J)({ location: i }), E = (0, o.e7)([r.default], () => r.default.getCurrentUser());
    return (t()(null != E, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), f && n.isNonUserBot()) ? (0, s.jsx)(u.Z, {
        ...l,
        user: n,
        currentUser: E
    }) : f && n.bot ? (0, s.jsx)(I.Z, {
        ...l,
        user: n,
        currentUser: E
    }) : n.bot ? (0, s.jsx)(c.Z, {
        ...l,
        user: n,
        currentUser: E
    }) : (0, s.jsx)(_.Z, {
        ...l,
        user: n,
        currentUser: E
    });
}
