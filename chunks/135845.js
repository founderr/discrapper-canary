n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
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
    f = n(691784);
function h(e) {
    let t,
        n,
        a,
        { invite: h, currentUserId: T, guild: N, onTransitionToInviteChannel: p, onAcceptInstantInvite: C } = e,
        g = null == N ? void 0 : N.id,
        S = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, r.e7)([u.Z], () => (null != h && null != h.target_user ? u.Z.getActiveStreamForUser(h.target_user.id, g) : null), [h, g]),
        x = (0, r.e7)([u.Z], () => (null != h && null != h.target_user ? u.Z.getStreamForUser(h.target_user.id, g) : null), [h, g]),
        R = null != h && h.target_type === I.Iq.STREAM && null != h.target_user && null != A,
        v = null != h && null != x && null != h.channel && null != h.guild && x.channelId === h.channel.id && x.guildId === h.guild.id;
    s()(null != h, 'Invite cannot be null');
    let { target_type: M, target_user: O } = h;
    s()(M === I.Iq.STREAM && null != O, 'invalid streaming invite');
    let L = T === O.id,
        Z = h.state === E.r2o.ACCEPTING,
        b = null != N;
    if (null == N) {
        if (null == h.guild) return (0, i.jsx)(_.Z, {});
        N = new c.ZP(h.guild);
    }
    let P = null != h.channel ? (0, o.jD)(h.channel) : null,
        D = R ? p : C;
    b && !v ? (a = L ? m.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: O.username })) : ((t = m.Z.Messages.WATCH), (n = l.Z.Button.Colors.GREEN), R && ((t = m.Z.Messages.INVITE_BUTTON_STREAM_WATCHING), (n = l.Z.Button.Colors.PRIMARY)), (a = L ? m.Z.Messages.INVITE_BUTTON_STREAMER : m.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: O.username })));
    let j = S === N.id && null != P ? (0, i.jsx)(l.Z.Channel, { channel: P }) : m.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: N.name });
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(l.Z.Header, { text: m.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(l.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: f.headerLine,
                        children: [
                            (0, i.jsx)(l.Z.Icon, {
                                guild: N,
                                onClick: b && v ? D : void 0
                            }),
                            (0, i.jsx)(l.Z.Info, {
                                title: a,
                                onClick: b && v ? D : void 0,
                                children: j
                            })
                        ]
                    }),
                    v
                        ? (0, i.jsx)(l.Z.Button, {
                              disabled: b && !v,
                              onClick: D,
                              submitting: Z,
                              isDisabled: R && v,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
