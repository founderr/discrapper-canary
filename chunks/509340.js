t.d(n, {
    Z: function () {
        return a;
    }
});
var o = t(200651);
t(192379);
var i = t(159277),
    r = t(585183),
    c = t(981631),
    s = t(927923);
function a(e) {
    let { authToken: n, onContinue: t, onError: a, onClose: l } = e;
    return (0, o.jsx)(r.h, {
        platformType: c.ABu.XBOX,
        clientId: i.t.XBOX_APPLICATION_ID,
        scopes: s.tA,
        authToken: n,
        onContinue: t,
        onError: a,
        onClose: l
    });
}
