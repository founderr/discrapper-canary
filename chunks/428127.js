n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(492162),
    h = n(237583),
    p = n(451478),
    m = n(934415),
    f = n(968847),
    g = n(388032),
    C = n(706091);
let _ = {
    friction: 30,
    tension: 300
};
function v(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        o = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, d.Z)(n.id),
        p = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        f = null !== (t = null == o ? void 0 : o.getChannelRecords()) && void 0 !== t ? t : [],
        _ = (0, m.c4)({
            channels: f,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, i.jsxs)(u.Clickable, {
        className: a()(C.bar),
        onClick: p,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'custom',
                className: C.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: c.Z.unsafe_rawColors.GREEN_330.css
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: C.barText,
                children: g.intl.format(g.t['fDlr+P'], { count: _.length })
            }),
            (0, i.jsx)(h.Z, {
                guildId: n.id,
                className: C.voiceChannelsUsers,
                users: _.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: u.AvatarSizes.SIZE_16
            })
        ]
    });
}
function x(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: c, jumpToChannel: d } = e,
        { bottomBar: h, topBar: m } = (0, s.cj)([f.Z], () => f.Z.getUnreadStateForGuildId(n.id)),
        x = (0, s.e7)([p.Z], () => p.Z.isFocused()),
        { mode: I, mentionCount: b, targetChannelId: E } = 'bottom' === t ? h : m,
        S = I === f.x.HIDDEN,
        Z = (0, u.useSpring)(
            {
                to: { transform: S ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: _
            },
            x ? 'respect-motion-settings' : 'animate-never'
        ),
        N = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != E && d(E);
            },
            [d, E]
        );
    return (0, i.jsx)('div', {
        className: a()(C.container, {
            [C.top]: 'top' === t,
            [C.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(o.animated.div, {
            className: C.containerPadding,
            style: Z,
            'aria-hidden': S,
            children:
                I === f.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(C.bar, C.emptyBar) })
                    : I === f.x.UNREAD
                      ? (0, i.jsxs)(u.Clickable, {
                            className: C.bar,
                            onClick: N,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: C.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(u.ChevronSmallUpIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: C.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: C.barText,
                                    children: g.intl.string(g.t.FCRiT0)
                                })
                            ]
                        })
                      : I === f.x.MENTIONS
                        ? (0, i.jsx)(u.Clickable, {
                              className: a()(C.bar, C.mentionsBar),
                              onClick: N,
                              children: (0, i.jsx)(u.Text, {
                                  variant: 'text-xs/semibold',
                                  color: 'status-danger-text',
                                  className: C.barText,
                                  children: g.intl.format(g.t.EQcLys, { count: b })
                              })
                          })
                        : I === f.x.VOICE_CHANNELS
                          ? (0, i.jsx)(v, {
                                jumpToVoiceChannels: c,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
