n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(287734),
    o = n(475468),
    s = n(358555),
    l = n(955415),
    u = n(944486),
    c = n(914010),
    d = n(626135),
    _ = n(981631),
    E = n(689938),
    f = n(691784);
function h(e) {
    var t;
    let { guild: n, channel: h, messageData: p } = e,
        m = c.Z.getGuildId(),
        I = u.Z.getChannelId(m),
        T = i.useCallback(() => {
            var e;
            d.default.track(_.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = p.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: h.id,
                link_channel_type: h.type,
                guild_id: m,
                channel_id: I
            }),
                (0, o.K)(n.id, h.id),
                a.default.selectVoiceChannel(h.id);
        }, [null === (t = p.author) || void 0 === t ? void 0 : t.id, n.id, h.id, h.type, m, I]),
        g = (0, r.jsx)(l.Z.Channel, { channel: h });
    return (0, r.jsx)(l.Z, {
        children: (0, r.jsxs)(l.Z.Body, {
            children: [
                (0, r.jsxs)('div', {
                    className: f.headerLine,
                    children: [
                        (0, r.jsx)(l.Z.Icon, { guild: n }),
                        (0, r.jsx)(l.Z.Info, {
                            title: g,
                            onClick: T,
                            children: (0, r.jsxs)('span', {
                                className: f.infoTitle,
                                children: [
                                    E.Z.Messages.INVITE_BUTTON_BODY_IN_GUILD.format({ guildName: n.name }),
                                    (0, r.jsx)('span', {
                                        className: f.infoBadge,
                                        children: (0, r.jsx)(s.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, r.jsx)(l.Z.Button, {
                    onClick: T,
                    color: l.Z.Button.Colors.GREEN,
                    children: h.isGuildStageVoice() ? E.Z.Messages.STAGE_CHANNEL_JOIN : E.Z.Messages.JOIN_VOICE
                })
            ]
        })
    });
}
