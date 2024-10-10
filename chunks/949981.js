n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(724458),
    n(653041);
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    l = n(442837),
    r = n(955415),
    o = n(131704),
    c = n(592125),
    d = n(594174),
    u = n(823379),
    _ = n(358595),
    E = n(981631),
    I = n(689938),
    m = n(691784);
function T(e) {
    let t,
        { invite: n, author: a, currentUserId: T, onTransitionToInviteChannel: N, onAcceptInstantInvite: h } = e,
        C = T === a.id,
        f = n.state === E.r2o.ACCEPTING,
        p = (0, l.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    s()(null == p || p.isPrivate(), 'must be a private channel');
    let g = null != p;
    if (null == p) {
        if (null == n.channel) return (0, i.jsx)(_.Z, {});
        (p = (0, o.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = p.recipients.reduce((e, t) => {
            let n = d.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = d.default.getCurrentUser();
        g && null != e && t.push(e);
    }
    let A = p.name;
    (null == A || '' === A) &&
        (A =
            t.length > 0
                ? t
                      .filter(u.lm)
                      .map((e) => e.username)
                      .join(', ')
                : I.Z.Messages.UNNAMED);
    let S = g ? N : h,
        M = I.Z.Messages.JOIN_GUILD,
        O = r.Z.Button.Colors.GREEN;
    g && ((M = I.Z.Messages.JOINED_GUILD), (O = r.Z.Button.Colors.PRIMARY));
    let x = I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
    return (
        C && (x = I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM),
        (0, i.jsxs)(r.Z, {
            children: [
                (0, i.jsx)(r.Z.Header, { text: x }),
                (0, i.jsxs)(r.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, i.jsx)(r.Z.Icon, {
                                    channel: p,
                                    onClick: g ? S : void 0
                                }),
                                (0, i.jsx)(r.Z.Info, {
                                    title: A,
                                    onClick: g ? S : void 0,
                                    children: (0, i.jsx)(r.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, i.jsx)(r.Z.Button, {
                            onClick: S,
                            submitting: f,
                            isDisabled: g,
                            color: O,
                            children: M
                        })
                    ]
                })
            ]
        })
    );
}
