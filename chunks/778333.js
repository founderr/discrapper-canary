n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(493683),
    s = n(447543),
    l = n(955415),
    u = n(598077),
    c = n(314897),
    d = n(592125),
    _ = n(699516),
    E = n(51144),
    f = n(981631),
    h = n(689938),
    p = n(691784);
function m(e) {
    var t;
    let { invite: n, getAcceptInviteContext: m } = e,
        I = (0, a.e7)([c.default], () => c.default.getId()),
        T = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === I,
        g = n.state === f.r2o.ACCEPTING,
        S = (0, a.e7)([_.Z], () => {
            var e;
            return null != n.inviter && _.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        A = i.useCallback(() => {
            null != n.inviter && null != d.Z.getDMFromUserId(n.inviter.id) && o.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]),
        v = i.useCallback(() => {
            let e = m('Invite Button Embed');
            s.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n.code, m]);
    if (null == n.inviter) return null;
    let N = S ? A : v,
        O = h.Z.Messages.INVITE_BUTTON_ADD_FRIEND,
        R = l.Z.Button.Colors.GREEN;
    S ? ((O = h.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS), (R = l.Z.Button.Colors.PRIMARY)) : T && ((O = h.Z.Messages.INVITE_BUTTON_ADD_FRIEND), (R = l.Z.Button.Colors.PRIMARY));
    let C = T ? h.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : h.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
        y = null != n.inviter ? ''.concat(n.inviter.username) : '',
        b = null != n.inviter ? E.ZP.getUserTag(n.inviter) : '';
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(l.Z.Header, { text: C }),
            (0, r.jsxs)(l.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: p.headerLine,
                        children: [
                            (0, r.jsx)(l.Z.Icon, {
                                user: new u.Z(n.inviter),
                                onClick: S ? N : void 0
                            }),
                            (0, r.jsx)(l.Z.Info, {
                                title: y,
                                onClick: S ? N : void 0,
                                children: b
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z.Button, {
                        onClick: N,
                        submitting: g,
                        isDisabled: T,
                        color: R,
                        children: O
                    })
                ]
            })
        ]
    });
}
