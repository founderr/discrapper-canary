n.d(t, {
    Z: function () {
        return l;
    }
});
var o = n(200651);
n(192379);
var r = n(159277),
    i = n(585183),
    c = n(981631),
    s = n(927923);
function l(e) {
    let { authToken: t, onContinue: n, onError: l, onClose: a } = e;
    return (0, o.jsx)(i.h, {
        platformType: c.ABu.XBOX,
        clientId: r.t.XBOX_APPLICATION_ID,
        scopes: s.tA,
        authToken: t,
        onContinue: n,
        onError: l,
        onClose: a
    });
}
