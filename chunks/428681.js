e.d(t, {
    E: function () {
        return a;
    }
});
var i = e(200651);
e(192379);
var o = e(421580),
    r = e(159277),
    l = e(585183),
    c = e(981631),
    s = e(927923);
function a(n) {
    let { platformType: t, authToken: e, onContinue: a, onError: d, onClose: u } = n,
        C = t === c.ABu.PLAYSTATION_STAGING ? r.t.PLAYSTATION_STAGING_APPLICATION_ID : r.t.PLAYSTATION_APPLICATION_ID,
        f = t === c.ABu.PLAYSTATION_STAGING ? o.x.PLAYSTATION_STAGING : o.x.PLAYSTATION;
    return (0, i.jsx)(l.h, {
        platformType: t,
        clientId: C,
        scopes: s.KL,
        authToken: e,
        onContinue: a,
        onError: d,
        onClose: u,
        redirectUri: f
    });
}
