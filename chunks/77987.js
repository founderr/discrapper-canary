n.d(t, {
    e: function () {
        return l;
    }
});
var a = n(200651);
n(192379);
var r = n(314897),
    o = n(449934),
    i = n(857458),
    c = n(981631);
function l(e, t) {
    var n, l;
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function d(n) {
        if (!(0, o.$8)() && r.default.getLoginStatus() !== c.u34.LOGGING_IN && r.default.allowLogoutRedirect()) return null != t ? (0, a.jsx)(t, { renderRedirect: (0, a.jsx)(i.Z, {}) }) : (0, a.jsx)(i.Z, {});
        return (0, a.jsx)(e, { ...(s.passProps ? n : null) });
    }
    return (d.displayName = 'Authenticated('.concat(null !== (l = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== l ? l : '<Unknown>', ')')), d;
}
