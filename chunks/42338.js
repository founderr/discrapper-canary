e.d(t, {
    X: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var o = e(859097),
    r = e(981631),
    l = e(388032);
function c(n) {
    let { onContinue: t, onClose: e, errorCode: c } = n,
        s = c === r.evJ.UNDER_MINIMUM_AGE ? l.intl.string(l.t['3dIn2N']) : l.intl.string(l.t.qE9nqK);
    return (0, i.jsx)(o.C, {
        title: l.intl.string(l.t.eY3qHR),
        body: s,
        onClose: e,
        onContinue: t
    });
}
