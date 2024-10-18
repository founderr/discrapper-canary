n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    r = n(442837),
    l = n(955415),
    o = n(131704),
    c = n(601964),
    u = n(199902),
    d = n(914010),
    _ = n(358595),
    E = n(981631),
    I = n(245335),
    m = n(689938),
    T = n(691784);
function f(e) {
    let t,
        n,
        a,
        { invite: f, currentUserId: h, guild: N, onTransitionToInviteChannel: p, onAcceptInstantInvite: C } = e,
        g = null == N ? void 0 : N.id,
        S = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, r.e7)([u.Z], () => (null != f && null != f.target_user ? u.Z.getActiveStreamForUser(f.target_user.id, g) : null), [f, g]),
        x = (0, r.e7)([u.Z], () => (null != f && null != f.target_user ? u.Z.getStreamForUser(f.target_user.id, g) : null), [f, g]),
        R = null != f && f.target_type === I.Iq.STREAM && null != f.target_user && null != A,
        O = null != f && null != x && null != f.channel && null != f.guild && x.channelId === f.channel.id && x.guildId === f.guild.id;
    s()(null != f, 'Invite cannot be null');
    let { target_type: v, target_user: M } = f;
    s()(v === I.Iq.STREAM && null != M, 'invalid streaming invite');
    let L = h === M.id,
        Z = f.state === E.r2o.ACCEPTING,
        P = null != N;
    if (null == N) {
        if (null == f.guild) return (0, i.jsx)(_.Z, {});
        N = new c.ZP(f.guild);
    }
    let b = null != f.channel ? (0, o.jD)(f.channel) : null,
        D = R ? p : C;
    P && !O ? (a = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: M.username })) : ((t = m.Z.Messages.WATCH), (n = l.Z.Button.Colors.GREEN), R && ((t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING), (n = l.Z.Button.Colors.PRIMARY)), (a = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: M.username })));
    let j = S === N.id && null != b ? (0, i.jsx)(l.Z.Channel, { channel: b }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: N.name });
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(l.Z.Header, { text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(l.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(l.Z.Icon, {
                                guild: N,
                                onClick: P && O ? D : void 0
                            }),
                            (0, i.jsx)(l.Z.Info, {
                                title: a,
                                onClick: P && O ? D : void 0,
                                children: j
                            })
                        ]
                    }),
                    O
                        ? (0, i.jsx)(l.Z.Button, {
                              disabled: P && !O,
                              onClick: D,
                              submitting: Z,
                              isDisabled: R && O,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
