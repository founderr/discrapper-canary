n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(144144),
    o = n(955415),
    s = n(314897),
    l = n(944486),
    u = n(585483),
    c = n(51144),
    d = n(981631),
    _ = n(689938),
    E = n(691784);
function f(e) {
    let t,
        n,
        f,
        { author: h, banned: p } = e,
        m = (0, i.e7)([s.default], () => s.default.getId()),
        I = (0, i.e7)([l.Z], () => l.Z.getChannelId()),
        T = c.ZP.useName(h);
    function g() {
        let { id: e } = h,
            t = '@'.concat(c.ZP.getUserTag(h, { decoration: 'never' })),
            n = '<@'.concat(e, '>');
        u.S.dispatchToLastSubscribed(d.CkL.INSERT_TEXT, {
            plainText: t,
            rawText: n
        }),
            null != I && a.Z.startTyping(I);
    }
    return (
        m === h.id
            ? ((t = _.Z.Messages.INVITE_BUTTON_INVALID_OWNER), (f = _.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID))
            : ((f = _.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID),
              p
                  ? (t = _.Z.Messages.INSTANT_INVITE_BANNED_INFO)
                  : null != T
                    ? ((t = _.Z.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({ username: T })),
                      (n = (0, r.jsx)(o.Z.Button, {
                          onClick: g,
                          children: _.Z.Messages.MENTION
                      })))
                    : (t = _.Z.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE)),
        (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: f }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsxs)('div', {
                            className: E.headerLine,
                            children: [
                                (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                                (0, r.jsx)(o.Z.Info, {
                                    expired: !0,
                                    title: _.Z.Messages.INVITE_BUTTON_INVALID,
                                    children: t
                                })
                            ]
                        }),
                        n
                    ]
                })
            ]
        })
    );
}
