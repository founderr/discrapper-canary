n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(512722), s = n.n(a), r = n(442837), l = n(131704), o = n(601964), c = n(199902), d = n(914010), u = n(197409), _ = n(358595), E = n(981631), m = n(245335), I = n(689938), T = n(182578);
function h(e) {
    let t, n, a, {
            invite: h,
            currentUserId: N,
            guild: p,
            onTransitionToInviteChannel: f,
            onAcceptInstantInvite: C
        } = e, g = null == p ? void 0 : p.id, S = (0, r.e7)([d.Z], () => d.Z.getGuildId()), A = (0, r.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getActiveStreamForUser(h.target_user.id, g) : null, [
            h,
            g
        ]), x = (0, r.e7)([c.Z], () => null != h && null != h.target_user ? c.Z.getStreamForUser(h.target_user.id, g) : null, [
            h,
            g
        ]), R = null != h && h.target_type === m.Iq.STREAM && null != h.target_user && null != A, O = null != h && null != x && null != h.channel && null != h.guild && x.channelId === h.channel.id && x.guildId === h.guild.id;
    s()(null != h, 'Invite cannot be null');
    let {
        target_type: M,
        target_user: v
    } = h;
    s()(M === m.Iq.STREAM && null != v, 'invalid streaming invite');
    let L = N === v.id, Z = h.state === E.r2o.ACCEPTING, P = null != p;
    if (null == p) {
        if (null == h.guild)
            return (0, i.jsx)(_.Z, {});
        p = new o.ZP(h.guild);
    }
    let b = null != h.channel ? (0, l.jD)(h.channel) : null, D = R ? f : C;
    P && !O ? a = L ? I.Z.Messages.INVITE_BUTTON_STREAM_ENDED_STREAMER : I.Z.Messages.INVITE_BUTTON_STREAM_ENDED.format({ name: v.username }) : (t = I.Z.Messages.WATCH, n = u.Z.Button.Colors.GREEN, R && (t = I.Z.Messages.INVITE_BUTTON_STREAM_WATCHING, n = u.Z.Button.Colors.PRIMARY), a = L ? I.Z.Messages.INVITE_BUTTON_STREAMER : I.Z.Messages.INVITE_BUTTON_STREAMING.format({ name: v.username }));
    let j = S === p.id && null != b ? (0, i.jsx)(u.Z.Channel, { channel: b }) : I.Z.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({ guildName: p.name });
    return (0, i.jsxs)(u.Z, {
        children: [
            (0, i.jsx)(u.Z.Header, { text: I.Z.Messages.INVITE_BUTTON_TITLE_STREAMING }),
            (0, i.jsxs)(u.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: T.headerLine,
                        children: [
                            (0, i.jsx)(u.Z.Icon, {
                                guild: p,
                                onClick: P && O ? D : void 0
                            }),
                            (0, i.jsx)(u.Z.Info, {
                                title: a,
                                onClick: P && O ? D : void 0,
                                children: j
                            })
                        ]
                    }),
                    O ? (0, i.jsx)(u.Z.Button, {
                        disabled: P && !O,
                        onClick: D,
                        submitting: Z,
                        isDisabled: R && O,
                        color: n,
                        children: t
                    }) : null
                ]
            })
        ]
    });
}
