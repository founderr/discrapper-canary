n.d(t, {
    W: function () {
        return g;
    },
    Z: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(287734),
    o = n(111028),
    l = n(318374),
    u = n(565138),
    c = n(769654),
    d = n(496675),
    f = n(938475),
    _ = n(652853),
    p = n(228168),
    h = n(981631),
    m = n(249942);
let g = 3;
function E(e) {
    let { user: t, guild: n, channel: E, onAction: v, onClose: I } = e,
        { profileType: T } = (0, _.z)(),
        b = (0, i.Wu)([f.ZP], () =>
            f.ZP.getVoiceStatesForChannel(E).map((e) => {
                let { user: t } = e;
                return t;
            })
        );
    if (!(0, i.e7)([d.Z], () => d.Z.can(h.Plq.VIEW_CHANNEL, E))) return null;
    let S = E.isGuildStageVoice(),
        y = d.Z.can(h.Plq.CONNECT, E) ? (S ? a.StageIcon : a.VoiceNormalIcon) : a.LockIcon,
        A = T === p.y0.FULL_SIZE,
        N = T === p.y0.PANEL;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', { className: m.voiceChannelDivider }),
            (0, r.jsxs)('div', {
                className: m.voiceChannel,
                children: [
                    (0, r.jsx)(u.Z, {
                        showTooltip: !0,
                        guild: n,
                        size: u.Z.Sizes.SMOL,
                        className: m.guildIcon
                    }),
                    (0, r.jsx)(a.ChevronSmallRightIcon, {
                        size: 'xxs',
                        color: a.tokens.colors.INTERACTIVE_NORMAL
                    }),
                    (0, r.jsxs)('div', {
                        className: m.voiceChannelText,
                        children: [
                            (0, r.jsx)(y, {
                                size: 'xxs',
                                color: a.tokens.colors.INTERACTIVE_NORMAL,
                                className: m.voiceIcon
                            }),
                            (0, r.jsx)(a.Clickable, {
                                onClick: () => {
                                    s.default.selectVoiceChannel(E.id), (0, c.X)(n.id), null == v || v({ action: 'OPEN_VOICE_CHANNEL' }), null == I || I();
                                },
                                className: m.clickable,
                                children: (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, r.jsx)(o.Z, { children: E.name })
                                })
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Z, {
                        users: b,
                        guildId: n.id,
                        channelId: E.id,
                        maxUsers: g,
                        size: a.AvatarSizes.SIZE_16,
                        onClick: () => (null == v ? void 0 : v({ action: 'PRESS_VOICE_CHANNEL_AVATARS' })),
                        disableUserPopout: !!(!A && !N) || ((e) => e === t.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
