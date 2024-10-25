n.d(e, {
    e: function () {
        return i;
    }
});
var a = n(200651);
n(192379);
var r = n(314897),
    o = n(449934),
    s = n(857458),
    c = n(981631);
function i(t, e) {
    var n, i;
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function u(n) {
        if (!(0, o.$8)() && r.default.getLoginStatus() !== c.u34.LOGGING_IN && r.default.allowLogoutRedirect()) return null != e ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(s.Z, {}) }) : (0, a.jsx)(s.Z, {});
        return (0, a.jsx)(t, { ...(l.passProps ? n : null) });
    }
    return (u.displayName = 'Authenticated('.concat(null !== (i = null !== (n = t.displayName) && void 0 !== n ? n : t.name) && void 0 !== i ? i : '<Unknown>', ')')), u;
}
