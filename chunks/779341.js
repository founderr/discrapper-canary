e.d(t, {
    Z: function () {
        return s;
    }
});
var o = e(200651);
e(192379);
var i = e(585183),
    r = e(728151),
    c = e(981631);
function s(n) {
    let { authToken: t, onContinue: e, onError: s, onClose: l } = n;
    return (0, o.jsx)(i.h, {
        platformType: c.ABu.CRUNCHYROLL,
        clientId: r.sp,
        scopes: r.Ii,
        authToken: t,
        onContinue: e,
        onError: s,
        onClose: l
    });
}
