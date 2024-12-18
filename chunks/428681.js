e.d(t, {
    E: function () {
        return a;
    }
});
var o = e(200651);
e(192379);
var i = e(421580),
    c = e(159277),
    r = e(585183),
    s = e(981631),
    l = e(927923);
function a(n) {
    let { platformType: t, authToken: e, onContinue: a, onError: d, onClose: u } = n,
        p = t === s.ABu.PLAYSTATION_STAGING ? c.t.PLAYSTATION_STAGING_APPLICATION_ID : c.t.PLAYSTATION_APPLICATION_ID,
        A = t === s.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
    return (0, o.jsx)(r.h, {
        platformType: t,
        clientId: p,
        scopes: l.KL,
        authToken: e,
        onContinue: a,
        onError: d,
        onClose: u,
        redirectUri: A
    });
}
