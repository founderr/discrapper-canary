i.r(e), i(47120);
var n = i(200651),
    s = i(192379),
    a = i(442837),
    l = i(481060),
    o = i(893776),
    r = i(809206),
    h = i(704903),
    d = i(155433),
    u = i(23434),
    c = i(25990),
    m = i(594174),
    g = i(1964),
    f = i(981631),
    p = i(388032);
e.default = (t) => {
    let { transitionState: e, onClose: i } = t,
        C = (0, a.e7)([c.Z], () => c.Z.getErrors()),
        v = (0, a.e7)([c.Z], () => c.Z.getFormState()),
        y = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        I = (0, a.e7)([u.Z], () => u.Z.getAction()),
        R = !g.Z.isEmailReverification(I),
        [b, _] = s.useState(!0),
        E = v === f.QZA.SUBMITTING;
    function x(t) {
        var e, i;
        return null !== (i = null == C ? void 0 : null === (e = C[t]) || void 0 === e ? void 0 : e[0]) && void 0 !== i ? i : '';
    }
    let P = x('email'),
        j = x('password');
    return (0, n.jsx)(h.Z, {
        transitionState: e,
        email: null == y ? void 0 : y.email,
        emailError: P,
        passwordError: j,
        submitting: E,
        canResend: b && !E && (null == y ? void 0 : y.email) != null && 0 === P.length && 0 === j.length,
        canChange: R,
        onChangeEmailClick: function () {
            _(!1);
        },
        onVerify: function (t, e) {
            (0, r.Mn)({
                email: t,
                password: e
            }).then((t) => {
                if (!(null == t ? void 0 : t.ok)) {
                    var e;
                    (null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.username) != null ? (0, d.P)() : 0 === j.length && 0 === P.length && (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRU), l.ToastType.FAILURE));
                }
            }),
                _(!0);
        },
        onResend: function () {
            o.Z.verifyResend();
        },
        onClose: i
    });
};
