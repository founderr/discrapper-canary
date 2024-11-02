n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(493683),
    l = n(447543),
    o = n(955415),
    c = n(598077),
    u = n(314897),
    d = n(592125),
    _ = n(699516),
    E = n(51144),
    I = n(981631),
    m = n(689938),
    f = n(691784);
function T(e) {
    var t;
    let { invite: n, getAcceptInviteContext: T } = e,
        h = (0, s.e7)([u.default], () => u.default.getId()),
        N = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === h,
        p = n.state === I.r2o.ACCEPTING,
        C = (0, s.e7)([_.Z], () => {
            var e;
            return null != n.inviter && _.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        g = a.useCallback(() => {
            null != n.inviter && null != d.Z.getDMFromUserId(n.inviter.id) && r.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]),
        S = a.useCallback(() => {
            let e = T('Invite Button Embed');
            l.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n.code, T]);
    if (null == n.inviter) return null;
    let A = C ? g : S,
        x = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND,
        R = o.Z.Button.Colors.GREEN;
    C ? ((x = m.Z.Messages.INVITE_BUTTON_ALREADY_FRIENDS), (R = o.Z.Button.Colors.PRIMARY)) : N && ((x = m.Z.Messages.INVITE_BUTTON_ADD_FRIEND), (R = o.Z.Button.Colors.PRIMARY));
    let v = N ? m.Z.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : m.Z.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
        M = null != n.inviter ? ''.concat(n.inviter.username) : '',
        O = null != n.inviter ? E.ZP.getUserTag(n.inviter) : '';
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.Header, { text: v }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: f.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, {
                                user: new c.Z(n.inviter),
                                onClick: C ? A : void 0
                            }),
                            (0, i.jsx)(o.Z.Info, {
                                title: M,
                                onClick: C ? A : void 0,
                                children: O
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Z.Button, {
                        onClick: A,
                        submitting: p,
                        isDisabled: N,
                        color: R,
                        children: x
                    })
                ]
            })
        ]
    });
}
