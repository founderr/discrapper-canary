i.r(n), i.d(n, {
    default: function () {
        return _;
    }
});
var l = i(735250);
i(470079);
var s = i(512722), o = i.n(s), t = i(442837), a = i(594174), r = i(786874), d = i(877485), c = i(910364), u = i(853825), I = i(41527), f = i(107889);
function _(e) {
    let {
        location: n,
        user: i,
        ...s
    } = e;
    (0, d.V)({ location: n });
    let {botProfilesEnabled: _} = (0, r.J)({ location: n }), E = (0, t.e7)([a.default], () => a.default.getCurrentUser());
    return (o()(null != E, 'UserProfileModalExperimentWrapper: currentUser cannot be undefined'), _ && i.isNonUserBot()) ? (0, l.jsx)(u.Z, {
        ...s,
        user: i,
        currentUser: E
    }) : _ && i.bot ? (0, l.jsx)(I.Z, {
        ...s,
        user: i,
        currentUser: E
    }) : i.bot ? (0, l.jsx)(c.Z, {
        ...s,
        user: i,
        currentUser: E
    }) : (0, l.jsx)(f.Z, {
        ...s,
        user: i,
        currentUser: E
    });
}
