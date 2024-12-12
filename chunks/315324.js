r.d(n, {
    W: function () {
        return E;
    },
    Z: function () {
        return v;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(287734),
    l = r(111028),
    u = r(318374),
    c = r(565138),
    d = r(769654),
    f = r(496675),
    _ = r(938475),
    h = r(652853),
    p = r(228168),
    m = r(981631),
    g = r(249942);
let E = 3;
function v(e) {
    let { user: n, guild: r, channel: v, onAction: I, onClose: T } = e,
        { profileType: b } = (0, h.z)(),
        y = (0, a.Wu)([_.ZP], () =>
            _.ZP.getVoiceStatesForChannel(v).map((e) => {
                let { user: n } = e;
                return n;
            })
        );
    if (!(0, a.e7)([f.Z], () => f.Z.can(m.Plq.VIEW_CHANNEL, v))) return null;
    let S = () => {
            o.default.selectVoiceChannel(v.id), (0, d.X)(r.id), null == I || I({ action: 'OPEN_VOICE_CHANNEL' }), null == T || T();
        },
        A = v.isGuildStageVoice(),
        N = f.Z.can(m.Plq.CONNECT, v) ? (A ? s.StageIcon : s.VoiceNormalIcon) : s.LockIcon,
        C = b === p.y0.FULL_SIZE,
        R = b === p.y0.PANEL,
        O = !C && !R;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', { className: g.voiceChannelDivider }),
            (0, i.jsxs)('div', {
                className: g.voiceChannel,
                children: [
                    (0, i.jsx)(c.Z, {
                        showTooltip: !0,
                        guild: r,
                        size: c.Z.Sizes.SMOL,
                        className: g.guildIcon
                    }),
                    (0, i.jsx)(s.ChevronSmallRightIcon, {
                        size: 'xxs',
                        color: s.tokens.colors.INTERACTIVE_NORMAL
                    }),
                    (0, i.jsxs)('div', {
                        className: g.voiceChannelText,
                        children: [
                            (0, i.jsx)(N, {
                                size: 'xxs',
                                color: s.tokens.colors.INTERACTIVE_NORMAL,
                                className: g.voiceIcon
                            }),
                            (0, i.jsx)(s.Clickable, {
                                onClick: S,
                                className: g.clickableText,
                                children: (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-normal',
                                    lineClamp: 1,
                                    children: (0, i.jsx)(l.Z, { children: v.name })
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Z, {
                        users: y,
                        guildId: r.id,
                        channelId: v.id,
                        maxUsers: E,
                        size: s.AvatarSizes.SIZE_16,
                        onClick: () => (null == I ? void 0 : I({ action: 'PRESS_VOICE_CHANNEL_AVATARS' })),
                        disableUserPopout: !!O || ((e) => e === n.id),
                        overflowCountVariant: 'text-xs/normal'
                    })
                ]
            })
        ]
    });
}
