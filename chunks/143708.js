n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(144144),
    l = n(955415),
    r = n(314897),
    o = n(944486),
    c = n(585483),
    d = n(51144),
    u = n(981631),
    _ = n(689938),
    E = n(691784);
function I(e) {
    let t,
        n,
        I,
        { author: m, banned: T } = e,
        N = (0, a.e7)([r.default], () => r.default.getId()),
        h = (0, a.e7)([o.Z], () => o.Z.getChannelId()),
        C = d.ZP.useName(m),
        p = N === m.id;
    return (
        p
            ? ((t = _.Z.Messages.INVITE_BUTTON_INVALID_OWNER), (I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID))
            : ((I = _.Z.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID),
              T
                  ? (t = _.Z.Messages.INSTANT_INVITE_BANNED_INFO)
                  : null != C
                    ? ((t = _.Z.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({ username: C })),
                      (n = (0, i.jsx)(l.Z.Button, {
                          onClick: function () {
                              let { id: e } = m,
                                  t = '@'.concat(d.ZP.getUserTag(m, { decoration: 'never' }));
                              c.S.dispatchToLastSubscribed(u.CkL.INSERT_TEXT, {
                                  plainText: t,
                                  rawText: '<@'.concat(e, '>')
                              }),
                                  null != h && s.Z.startTyping(h);
                          },
                          children: _.Z.Messages.MENTION
                      })))
                    : (t = _.Z.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE)),
        (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.Header, { text: I }),
                (0, i.jsxs)(l.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.headerLine,
                            children: [
                                (0, i.jsx)(l.Z.Icon, { expired: !0 }),
                                (0, i.jsx)(l.Z.Info, {
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
