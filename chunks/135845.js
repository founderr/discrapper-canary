n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(955415),
    l = n(131704),
    u = n(601964),
    c = n(199902),
    d = n(914010),
    _ = n(358595),
    E = n(981631),
    f = n(245335),
    h = n(689938),
    p = n(691784);
function m(e) {
    let t,
        n,
        i,
        { invite: m, currentUserId: I, guild: T, onTransitionToInviteChannel: g, onAcceptInstantInvite: S } = e,
        A = null == T ? void 0 : T.id,
        v = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        N = (0, o.e7)([c.Z], () => (null != m && null != m.target_user ? c.Z.getActiveStreamForUser(m.target_user.id, A) : null), [m, A]),
        O = (0, o.e7)([c.Z], () => (null != m && null != m.target_user ? c.Z.getStreamForUser(m.target_user.id, A) : null), [m, A]),
        R = null != m && m.target_type === f.Iq.STREAM && null != m.target_user && null != N,
        C = null != m && null != O && null != m.channel && null != m.guild && O.channelId === m.channel.id && O.guildId === m.guild.id;
    a()(null != m, 'Invite cannot be null');
    let { target_type: y, target_user: b } = m;
    a()(y === f.Iq.STREAM && null != b, 'invalid streaming invite');
    let L = I === b.id,
        D = m.state === E.r2o.ACCEPTING,
        M = null != T;
    if (null == T) {
        if (null == m.guild) return (0, r.jsx)(_.Z, {});
        T = new u.ZP(m.guild);
    }
    let P = null != m.channel ? (0, l.jD)(m.channel) : null,
        U = R ? g : S;
    M && !C ? (i = L ? h.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : h.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: b.username })) : ((t = h.Z.Messages.WATCH), (n = s.Z.Button.Colors.GREEN), R && ((t = h.Z.Messages.INVITE_BUTTON_STREAM_WATCHING), (n = s.Z.Button.Colors.PRIMARY)), (i = L ? h.Z.Messages.INVITE_BUTTON_STREAMER : h.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: b.username })));
    let w = v === T.id && null != P ? (0, r.jsx)(s.Z.Channel, { channel: P }) : h.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: T.name });
    return (0, r.jsxs)(s.Z, {
        children: [
            (0, r.jsx)(s.Z.Header, { text: h.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, r.jsxs)(s.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: p.headerLine,
                        children: [
                            (0, r.jsx)(s.Z.Icon, {
                                guild: T,
                                onClick: M && C ? U : void 0
                            }),
                            (0, r.jsx)(s.Z.Info, {
                                title: i,
                                onClick: M && C ? U : void 0,
                                children: w
                            })
                        ]
                    }),
                    C
                        ? (0, r.jsx)(s.Z.Button, {
                              disabled: M && !C,
                              onClick: U,
                              submitting: D,
                              isDisabled: R && C,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
