n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var s = n(512722),
    a = n.n(s),
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
    T = n(29062);
function N(e) {
    let t,
        n,
        s,
        { invite: N, currentUserId: h, guild: C, onTransitionToInviteChannel: f, onAcceptInstantInvite: p } = e,
        g = null == C ? void 0 : C.id,
        S = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, r.e7)([u.Z], () => (null != N && null != N.target_user ? u.Z.getActiveStreamForUser(N.target_user.id, g) : null), [N, g]),
        R = (0, r.e7)([u.Z], () => (null != N && null != N.target_user ? u.Z.getStreamForUser(N.target_user.id, g) : null), [N, g]),
        O = null != N && N.target_type === I.Iq.STREAM && null != N.target_user && null != A,
        x = null != N && null != R && null != N.channel && null != N.guild && R.channelId === N.channel.id && R.guildId === N.guild.id;
    a()(null != N, 'Invite cannot be null');
    let { target_type: M, target_user: v } = N;
    a()(M === I.Iq.STREAM && null != v, 'invalid streaming invite');
    let L = h === v.id,
        Z = N.state === E.r2o.ACCEPTING,
        P = null != C;
    if (null == C) {
        if (null == N.guild) return (0, i.jsx)(_.Z, {});
        C = new c.ZP(N.guild);
    }
    let D = null != N.channel ? (0, o.jD)(N.channel) : null,
        b = O ? f : p;
    P && !x ? (s = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: v.username })) : ((t = m.Z.Messages.WATCH), (n = l.Z.Button.Colors.GREEN), O && ((t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING), (n = l.Z.Button.Colors.PRIMARY)), (s = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: v.username })));
    let j = S === C.id && null != D ? (0, i.jsx)(l.Z.Channel, { channel: D }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: C.name });
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(l.Z.Header, { text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(l.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(l.Z.Icon, {
                                guild: C,
                                onClick: P && x ? b : void 0
                            }),
                            (0, i.jsx)(l.Z.Info, {
                                title: s,
                                onClick: P && x ? b : void 0,
                                children: j
                            })
                        ]
                    }),
                    x
                        ? (0, i.jsx)(l.Z.Button, {
                              disabled: P && !x,
                              onClick: b,
                              submitting: Z,
                              isDisabled: O && x,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
