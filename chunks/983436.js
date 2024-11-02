n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(287734),
    a = n(475468),
    o = n(358555),
    s = n(955415),
    c = n(944486),
    u = n(914010),
    d = n(626135),
    m = n(981631),
    f = n(388032),
    h = n(691784);
function p(e) {
    var t;
    let { guild: n, channel: p, messageData: g } = e,
        _ = u.Z.getGuildId(),
        C = c.Z.getChannelId(_),
        E = r.useCallback(() => {
            var e;
            d.default.track(m.rMx.CHANNEL_LINK_PREVIEW_JOINED, {
                author_id: null === (e = g.author) || void 0 === e ? void 0 : e.id,
                link_guild_id: n.id,
                link_channel_id: p.id,
                link_channel_type: p.type,
                guild_id: _,
                channel_id: C
            }),
                (0, a.K)(n.id, p.id),
                l.default.selectVoiceChannel(p.id);
        }, [null === (t = g.author) || void 0 === t ? void 0 : t.id, n.id, p.id, p.type, _, C]),
        I = (0, i.jsx)(s.Z.Channel, { channel: p });
    return (0, i.jsx)(s.Z, {
        children: (0, i.jsxs)(s.Z.Body, {
            children: [
                (0, i.jsxs)('div', {
                    className: h.headerLine,
                    children: [
                        (0, i.jsx)(s.Z.Icon, { guild: n }),
                        (0, i.jsx)(s.Z.Info, {
                            title: I,
                            onClick: E,
                            children: (0, i.jsxs)('span', {
                                className: h.infoTitle,
                                children: [
                                    f.intl.format(f.t['2wimj4'], { guildName: n.name }),
                                    (0, i.jsx)('span', {
                                        className: h.infoBadge,
                                        children: (0, i.jsx)(o.Z, {
                                            guild: n,
                                            isBannerVisible: !1
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(s.Z.Button, {
                    onClick: E,
                    color: s.Z.Button.Colors.GREEN,
                    children: p.isGuildStageVoice() ? f.intl.string(f.t['7vb2cX']) : f.intl.string(f.t['96ANUF'])
                })
            ]
        })
    });
}
