i.r(n), i.d(n, {
    default: function () {
        return f;
    }
});
var o = i(735250);
i(470079);
var s = i(512722), t = i.n(s), l = i(442837), a = i(594174), r = i(786874), c = i(877485), d = i(910364), u = i(853825), I = i(41527), E = i(107889);
function f(e) {
    let {
        location: n,
        user: i,
        ...s
    } = e;
    (0, c.V)({ location: n });
    let {botProfilesEnabled: f} = (0, r.J)({ location: n }), _ = (0, l.e7)([a.default], () => a.default.getCurrentUser());
    return (t()(null != _, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), f && i.isNonUserBot()) ? (0, o.jsx)(u.Z, {
        ...s,
        user: i,
        currentUser: _
    }) : f && i.bot ? (0, o.jsx)(I.Z, {
        ...s,
        user: i,
        currentUser: _
    }) : i.bot ? (0, o.jsx)(d.Z, {
        ...s,
        user: i,
        currentUser: _
    }) : (0, o.jsx)(E.Z, {
        ...s,
        user: i,
        currentUser: _
    });
}
