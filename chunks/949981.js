n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(724458);
var i = n(653041);
var a = n(735250);
n(470079);
var o = n(512722),
    s = n.n(o),
    l = n(442837),
    u = n(955415),
    c = n(131704),
    d = n(592125),
    _ = n(594174),
    E = n(823379),
    f = n(358595),
    h = n(981631),
    p = n(689938),
    m = n(691784);
function I(e) {
    let t,
        { invite: n, author: r, currentUserId: i, onTransitionToInviteChannel: o, onAcceptInstantInvite: I } = e,
        T = i === r.id,
        g = n.state === h.r2o.ACCEPTING,
        S = (0, l.e7)([d.Z], () => (null != n.channel ? d.Z.getChannel(n.channel.id) : null), [n]);
    s()(null == S || S.isPrivate(), 'must be a private channel');
    let A = null != S;
    if (null == S) {
        if (null == n.channel) return (0, a.jsx)(f.Z, {});
        (S = (0, c.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = S.recipients.reduce((e, t) => {
            let n = _.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = _.default.getCurrentUser();
        A && null != e && t.push(e);
    }
    let v = S.name;
    (null == v || '' === v) &&
        (v =
            t.length > 0
                ? t
                      .filter(E.lm)
                      .map((e) => e.username)
                      .join(', ')
                : p.Z.Messages.UNNAMED);
    let N = A ? o : I,
        O = p.Z.Messages.JOIN_GUILD,
        R = u.Z.Button.Colors.GREEN;
    A && ((O = p.Z.Messages.JOINED_GUILD), (R = u.Z.Button.Colors.PRIMARY));
    let C = p.Z.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
    return (
        T && (C = p.Z.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM),
        (0, a.jsxs)(u.Z, {
            children: [
                (0, a.jsx)(u.Z.Header, { text: C }),
                (0, a.jsxs)(u.Z.Body, {
                    children: [
                        (0, a.jsxs)('div', {
                            className: m.headerLine,
                            children: [
                                (0, a.jsx)(u.Z.Icon, {
                                    channel: S,
                                    onClick: A ? N : void 0
                                }),
                                (0, a.jsx)(u.Z.Info, {
                                    title: v,
                                    onClick: A ? N : void 0,
                                    children: (0, a.jsx)(u.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, a.jsx)(u.Z.Button, {
                            onClick: N,
                            submitting: g,
                            isDisabled: A,
                            color: R,
                            children: O
                        })
                    ]
                })
            ]
        })
    );
}
