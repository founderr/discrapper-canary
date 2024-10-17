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
    r = n(442837),
    l = n(955415),
    o = n(131704),
    c = n(592125),
    u = n(594174),
    d = n(823379),
    _ = n(358595),
    E = n(981631),
    I = n(689938),
    m = n(691784);
function T(e) {
    let t,
        { invite: n, author: a, currentUserId: T, onTransitionToInviteChannel: f, onAcceptInstantInvite: h } = e,
        N = T === a.id,
        p = n.state === E.r2o.ACCEPTING,
        C = (0, r.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    s()(null == C || C.isPrivate(), 'must be a private channel');
    let g = null != C;
    if (null == C) {
        if (null == n.channel) return (0, i.jsx)(_.Z, {});
        (C = (0, o.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = C.recipients.reduce((e, t) => {
            let n = u.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = u.default.getCurrentUser();
        g && null != e && t.push(e);
    }
    let S = C.name;
    (null == S || '' === S) &&
        (S =
            t.length > 0
                ? t
                      .filter(d.lm)
                      .map((e) => e.username)
                      .join(', ')
                : I.Z.Messages.UNNAMED);
    let A = g ? f : h,
        x = I.Z.Messages.JOIN_GUILD,
        R = l.Z.Button.Colors.GREEN;
    g && ((x = I.Z.Messages.JOINED_GUILD), (R = l.Z.Button.Colors.PRIMARY));
    let O = I.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
    return (
        N && (O = I.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM),
        (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.Header, { text: O }),
                (0, i.jsxs)(l.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, i.jsx)(l.Z.Icon, {
                                    channel: C,
                                    onClick: g ? A : void 0
                                }),
                                (0, i.jsx)(l.Z.Info, {
                                    title: S,
                                    onClick: g ? A : void 0,
                                    children: (0, i.jsx)(l.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Z.Button, {
                            onClick: A,
                            submitting: p,
                            isDisabled: g,
                            color: R,
                            children: x
                        })
                    ]
                })
            ]
        })
    );
}
