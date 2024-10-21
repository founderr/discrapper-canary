o.d(n, {
    Z: function () {
        return l;
    }
});
var t = o(200651);
o(192379);
var s = o(159277),
    r = o(585183),
    i = o(981631),
    c = o(927923);
function l(e) {
    let { authToken: n, onContinue: o, onError: l, onClose: a } = e;
    return (0, t.jsx)(r.h, {
        platformType: i.ABu.XBOX,
        clientId: s.t.XBOX_APPLICATION_ID,
        scopes: c.tA,
        authToken: n,
        onContinue: o,
        onError: l,
        onClose: a
    });
}
