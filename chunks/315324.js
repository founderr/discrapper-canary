n.d(t, {
    W: function () {
        return p;
    },
    Z: function () {
        return m;
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
    d = n(938475),
    f = n(652853),
    _ = n(228168),
    h = n(69035);
let p = 3;
function m(e) {
    let { user: t, guild: n, channel: m, onAction: g, onClose: E } = e,
        { profileType: v } = (0, f.z)(),
        I = (0, i.Wu)([d.ZP], () =>
            d.ZP.getVoiceStatesForChannel(m).map((e) => {
                let { user: t } = e;
                return t;
            })
        ),
        S = m.isGuildStageVoice() ? a.StageIcon : a.VoiceNormalIcon,
        T = v === _.y0.FULL_SIZE,
        b = v === _.y0.PANEL;
    return (0, r.jsxs)('div', {
        className: h.voiceChannel,
        children: [
            (0, r.jsx)(u.Z, {
                showTooltip: !0,
                guild: n,
                size: u.Z.Sizes.SMOL,
                className: h.guildIcon
            }),
            (0, r.jsx)(a.ChevronSmallRightIcon, {
                size: 'xxs',
                color: a.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, r.jsxs)('div', {
                className: h.voiceChannelText,
                children: [
                    (0, r.jsx)(S, {
                        size: 'xxs',
                        color: a.tokens.colors.INTERACTIVE_NORMAL,
                        className: h.voiceIcon
                    }),
                    (0, r.jsx)(a.Clickable, {
                        onClick: () => {
                            s.default.selectVoiceChannel(m.id), (0, c.X)(n.id), null == g || g({ action: 'OPEN_VOICE_CHANNEL' }), null == E || E();
                        },
                        className: h.clickable,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'interactive-normal',
                            lineClamp: 1,
                            children: (0, r.jsx)(o.Z, { children: m.name })
                        })
                    })
                ]
            }),
            (0, r.jsx)(l.Z, {
                users: I,
                guildId: n.id,
                channelId: m.id,
                maxUsers: p,
                size: a.AvatarSizes.SIZE_16,
                onClick: () => (null == g ? void 0 : g({ action: 'PRESS_VOICE_CHANNEL_AVATARS' })),
                disableUserPopout: !!(!T && !b) || ((e) => e === t.id),
                overflowCountVariant: 'text-xs/normal'
            })
        ]
    });
}
