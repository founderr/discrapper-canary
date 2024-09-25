n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(446411),
    u = n(454585),
    c = n(834129),
    d = n(553385),
    _ = n(981631),
    E = n(689938),
    f = n(677436);
function h(e) {
    let { message: t, channel: r, compact: a } = e,
        l = null != t.embeds && t.embeds.length > 0;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(c.Z, {
                className: o()(f.mainContainer, { [f.compact]: a }),
                icon: n(570111),
                compact: a,
                children: (0, i.jsx)('div', {
                    className: o()(f.__invalid_content, { [f.compact]: a }),
                    children: (0, i.jsx)('div', {
                        className: o()(f.__invalid_messageContent, { [f.compact]: a }),
                        children: t.content
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: o()(f.__invalid_embedContent, { [f.compact]: a }),
                children: (0, i.jsx)(p, { message: t })
            }),
            (0, i.jsx)('div', {
                className: f.actions,
                children: (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.PRIMARY,
                    onClick: () => {
                        l ? (0, d.z$)(t) : (0, d.XP)(r.guild_id, r.id, t.id);
                    },
                    children: E.Z.Messages.SYSTEM_MESSAGE_GET_GAMING_STATS
                })
            })
        ]
    });
}
function p(e) {
    var t;
    let { message: n } = e,
        [r] = null !== (t = n.embeds) && void 0 !== t ? t : [];
    if (null == r) return null;
    let a = (e, t) => u.Z.parseEmbedTitle(t, !0, { channelId: n.channel_id }),
        o = (e, t, r) => u.Z.parse(t, !0, { channelId: n.channel_id });
    return (0, i.jsx)(l.ZP, {
        className: f.embed,
        embed: r,
        renderTitle: a,
        renderDescription: o,
        autoPlayGif: !1,
        renderImageComponent: _.VqG,
        renderVideoComponent: _.VqG,
        renderLinkComponent: _.VqG,
        renderForwardComponent: _.VqG
    });
}
