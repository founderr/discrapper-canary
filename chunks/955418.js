n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(906732),
    s = n(541716),
    l = n(752305),
    u = n(893718),
    c = n(131704),
    d = n(5192),
    _ = n(785717),
    E = n(698305),
    f = n(981631),
    h = n(689938),
    p = n(687610);
let m = (0, c.kt)({
    id: '1',
    type: f.d4z.DM
});
function I(e) {
    let { user: t, guildId: n, channelId: r, onClose: c } = e,
        { newestAnalyticsLocation: f } = (0, o.ZP)(),
        { trackUserProfileAction: I } = (0, _.KZ)(),
        [T, g] = a.useState(''),
        [S, A] = a.useState((0, l.JM)(T)),
        v = a.useRef(!1);
    return (0, i.jsx)(u.Z, {
        innerClassName: p.inner,
        editorClassName: p.editor,
        type: s.I.USER_PROFILE,
        placeholder: h.Z.Messages.QUICK_DM_USER.format({ name: d.ZP.getName(n, r, t) }),
        channel: m,
        textValue: T,
        richValue: S,
        onChange: (e, t, n) => {
            if (t !== T) g(t), A(n);
        },
        focused: v.current,
        onFocus: () => {
            v.current = !0;
        },
        onBlur: () => {
            v.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    I({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, E.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: f
                    }),
                    null == c || c(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
