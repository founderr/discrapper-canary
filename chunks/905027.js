t.d(s, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(442837),
    r = t(852860),
    o = t(164946),
    l = t(350327),
    c = t(647699),
    d = t(18438),
    _ = t(778825),
    u = t(689938);
function E() {
    let e = (0, i.e7)([_.Z], () => _.Z.getIsSubmitDisabled()),
        s = (0, i.e7)([_.Z], () => _.Z.getGuild()),
        t = (0, i.e7)([_.Z], () => _.Z.getErrors()),
        [E, T] = a.useState(!1),
        S = a.useMemo(() => ((null == t ? void 0 : t.message) != null ? (null == t ? void 0 : t.message) : Object.keys(null != t ? t : {}).length > 0 ? u.Z.Messages.GUILD_SETTINGS_EDIT_PROFILE_GENERIC_ERROR : null), [t]),
        I = a.useCallback(async () => {
            var e, t;
            T(!0);
            let n = _.Z.getAllPending(),
                a = (0, o.Jo)(n),
                i = (0, o.g9)(n),
                r = !0;
            if (Object.keys(a).length > 0) {
                let t = await (0, d.iq)(null == s ? void 0 : s.id, a);
                (r = r && null !== (e = null == t ? void 0 : t.ok) && void 0 !== e && e), (null == t ? void 0 : t.ok) && (0, d.IO)();
            }
            if (Object.keys(i).length > 0) {
                let e = await (0, l.Z)(i, null == s ? void 0 : s.id);
                (r = r && null !== (t = null == e ? void 0 : e.ok) && void 0 !== t && t), (null == e ? void 0 : e.ok) ? (0, d.pG)() : (0, c.v)();
            }
            r && (0, d.b9)(), T(!1);
        }, [null == s ? void 0 : s.id]),
        N = a.useCallback(() => {
            (0, d.W3)();
        }, []);
    return (0, n.jsx)(r.Z, {
        submitting: E,
        onSave: I,
        onReset: N,
        disabled: e,
        errorMessage: null != S ? S : void 0
    });
}
