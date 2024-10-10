n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(287734),
    l = n(475468),
    r = n(358555),
    o = n(955415),
    c = n(944486),
    d = n(914010),
    u = n(626135),
    _ = n(981631),
    E = n(689938),
    I = n(691784);
function m(e) {
    var t;
    let { guild: n, channel: m, messageData: T } = e,
        N = d.Z.getGuildId(),
        h = c.Z.getChannelId(N),
        C = a.useCallback(() => {
            var e;
            u.default.track(_.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = T.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: m.id,
                link_channel_type: m.type,
                guild_id: N,
                channel_id: h
            }),
                (0, l.K)(n.id, m.id),
                s.default.selectVoiceChannel(m.id);
        }, [null === (t = T.author) || void 0 === t ? void 0 : t.id, n.id, m.id, m.type, N, h]),
        f = (0, i.jsx)(o.Z.Channel, { channel: m });
    return (0, i.jsx)(o.Z, {
        children: (0, i.jsxs)(o.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: I.headerLine,
                    children: [
                        (0, i.jsx)(o.Z.Icon, { guild: n }),
                        (0, i.jsx)(o.Z.Info, {
                            title: f,
                            onClick: C,
                            children: (0, i.jsxs)('span', {
                                className: I.infoTitle,
                                children: [
                                    E.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: I.infoBadge,
                                        children: (0, i.jsx)(r.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(o.Z.Button, {
                    onClick: C,
                    color: o.Z.Button.Colors.GREEN,
                    children: m.isGuildStageVoice() ? E.Z.Messages.STAGE_CHANNEL_JOIN : E.Z.Messages.JOIN_VOICE
                })
            ]
        })
    });
}
