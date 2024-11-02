n.d(e, {
    e: function () {
        return l;
    }
});
var a = n(200651);
n(192379);
var r = n(314897),
    o = n(449934),
    i = n(857458),
    s = n(981631);
function l(t, e) {
    var n, l;
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function u(n) {
        if (!(0, o.$8)() && r.default.getLoginStatus() !== s.u34.LOGGING_IN && r.default.allowLogoutRedirect()) return null != e ? (0, a.jsx)(e, { renderRedirect: (0, a.jsx)(i.Z, {}) }) : (0, a.jsx)(i.Z, {});
        return (0, a.jsx)(t, { ...(c.passProps ? n : null) });
    }
    return (u.displayName = 'Authenticated('.concat(null !== (l = null !== (n = t.displayName) && void 0 !== n ? n : t.name) && void 0 !== l ? l : '<Unknown>', ')')), u;
}
