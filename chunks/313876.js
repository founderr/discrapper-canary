n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(955415),
    o = n(314897),
    s = n(782605),
    l = n(689938);
function u(e) {
    var t, n;
    let { author: u, inviteError: c } = e,
        d = (0, i.e7)([o.default], () => o.default.getId()) === u.id ? l.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID : l.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID,
        _ = (0, s.l)(null == c ? void 0 : c.code);
    return (0, r.jsxs)(a.Z, {
        children: [
            (0, r.jsx)(a.Z.Header, { text: d }),
            (0, r.jsxs)(a.Z.Body, {
                children: [
                    (0, r.jsx)(a.Z.Icon, { expired: !0 }),
                    (0, r.jsx)(a.Z.Info, {
                        expired: !0,
                        title: null !== (t = null == _ ? void 0 : _.title) && void 0 !== t ? t : l.Z.Messages.INVITE_BUTTON_INVALID,
                        children: null !== (n = null == _ ? void 0 : _.description) && void 0 !== n ? n : null == c ? void 0 : c.message
                    })
                ]
            })
        ]
    });
}
