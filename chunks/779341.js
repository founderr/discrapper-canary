t.d(n, {
    Z: function () {
        return c;
    }
});
var o = t(200651);
t(192379);
var i = t(585183),
    r = t(728151),
    s = t(981631);
function c(e) {
    let { authToken: n, onContinue: t, onError: c, onClose: l } = e;
    return (0, o.jsx)(i.h, {
        platformType: s.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: n,
        onContinue: t,
        onError: c,
        onClose: l
    });
}
