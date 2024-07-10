n.r(i), n.d(i, {
    default: function () {
        return _;
    }
});
var l = n(735250);
n(470079);
var s = n(512722), t = n.n(s), o = n(442837), a = n(594174), r = n(786874), d = n(877485), c = n(910364), u = n(853825), I = n(41527), f = n(107889);
function _(e) {
    let {
        location: i,
        user: n,
        ...s
    } = e;
    (0, d.V)({ location: i });
    let {botProfilesEnabled: _} = (0, r.J)({ location: i }), E = (0, o.e7)([a.default], () => a.default.getCurrentUser());
    return (t()(null != E, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && n.isNonUserBot()) ? (0, l.jsx)(u.Z, {
        ...s,
        user: n,
        currentUser: E
    }) : _ && n.bot ? (0, l.jsx)(I.Z, {
        ...s,
        user: n,
        currentUser: E
    }) : n.bot ? (0, l.jsx)(c.Z, {
        ...s,
        user: n,
        currentUser: E
    }) : (0, l.jsx)(f.Z, {
        ...s,
        user: n,
        currentUser: E
    });
}
