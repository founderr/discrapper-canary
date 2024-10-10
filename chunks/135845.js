n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var a = n(512722),
    s = n.n(a),
    l = n(442837),
    r = n(955415),
    o = n(131704),
    c = n(601964),
    d = n(199902),
    u = n(914010),
    _ = n(358595),
    E = n(981631),
    I = n(245335),
    m = n(689938),
    T = n(691784);
function N(e) {
    let t,
        n,
        a,
        { invite: N, currentUserId: h, guild: C, onTransitionToInviteChannel: f, onAcceptInstantInvite: p } = e,
        g = null == C ? void 0 : C.id,
        A = (0, l.e7)([u.Z], () => u.Z.getGuildId()),
        S = (0, l.e7)([d.Z], () => (null != N && null != N.target_user ? d.Z.getActiveStreamForUser(N.target_user.id, g) : null), [N, g]),
        M = (0, l.e7)([d.Z], () => (null != N && null != N.target_user ? d.Z.getStreamForUser(N.target_user.id, g) : null), [N, g]),
        O = null != N && N.target_type === I.Iq.STREAM && null != N.target_user && null != S,
        x = null != N && null != M && null != N.channel && null != N.guild && M.channelId === N.channel.id && M.guildId === N.guild.id;
    s()(null != N, 'Invite cannot be null');
    let { target_type: R, target_user: v } = N;
    s()(R === I.Iq.STREAM && null != v, 'invalid streaming invite');
    let L = h === v.id,
        Z = N.state === E.r2o.ACCEPTING,
        P = null != C;
    if (null == C) {
        if (null == N.guild) return (0, i.jsx)(_.Z, {});
        C = new c.ZP(N.guild);
    }
    let b = null != N.channel ? (0, o.jD)(N.channel) : null,
        D = O ? f : p;
    P && !x ? (a = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: v.username })) : ((t = m.Z.Messages.WATCH), (n = r.Z.Button.Colors.GREEN), O && ((t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING), (n = r.Z.Button.Colors.PRIMARY)), (a = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: v.username })));
    let j = A === C.id && null != b ? (0, i.jsx)(r.Z.Channel, { channel: b }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: C.name });
    return (0, i.jsxs)(r.Z, {
        children: [
            (0, i.jsx)(r.Z.Header, { text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(r.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(r.Z.Icon, {
                                guild: C,
                                onClick: P && x ? D : void 0
                            }),
                            (0, i.jsx)(r.Z.Info, {
                                title: a,
                                onClick: P && x ? D : void 0,
                                children: j
                            })
                        ]
                    }),
                    x
                        ? (0, i.jsx)(r.Z.Button, {
                              disabled: P && !x,
                              onClick: D,
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
