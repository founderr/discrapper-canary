n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(526629),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(492162),
    h = n(237583),
    p = n(451478),
    f = n(934415),
    _ = n(968847),
    m = n(689938),
    g = n(624113);
let C = {
    friction: 30,
    tension: 300
};
function I(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        s = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        o = (0, d.Z)(n.id),
        p = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        _ = null !== (t = null == s ? void 0 : s.getChannelRecords()) && void 0 !== t ? t : [],
        C = (0, f.c4)({
            channels: _,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: o
        });
    return (0, i.jsxs)(u.Clickable, {
        className: a()(g.bar),
        onClick: p,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'custom',
                className: g.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: c.Z.unsafe_rawColors.GREEN_330.css
            }),
            (0, i.jsx)(u.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: g.barText,
                children: m.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({ count: C.length })
            }),
            (0, i.jsx)(h.Z, {
                guildId: n.id,
                className: g.voiceChannelsUsers,
                users: C.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: u.AvatarSizes.SIZE_16
            })
        ]
    });
}
function E(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: c, jumpToChannel: d } = e,
        { bottomBar: h, topBar: f } = (0, o.cj)([_.Z], () => _.Z.getUnreadStateForGuildId(n.id)),
        E = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        { mode: N, mentionCount: S, targetChannelId: x } = 'bottom' === t ? h : f,
        v = N === _.x.HIDDEN,
        T = (0, u.useSpring)(
            {
                to: { transform: v ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: C
            },
            E ? 'respect-motion-settings' : 'animate-never'
        ),
        Z = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != x && d(x);
            },
            [d, x]
        );
    return (0, i.jsx)('div', {
        className: a()(g.container, {
            [g.top]: 'top' === t,
            [g.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(s.animated.div, {
            className: g.containerPadding,
            style: T,
            'aria-hidden': v,
            children:
                N === _.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(g.bar, g.emptyBar) })
                    : N === _.x.UNREAD
                      ? (0, i.jsxs)(u.Clickable, {
                            className: g.bar,
                            onClick: Z,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(u.ChevronSmallDownIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: g.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(u.ChevronSmallUpIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: g.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: g.barText,
                                    children: m.Z.Messages.NEW_UNREADS
                                })
                            ]
                        })
                      : N === _.x.MENTIONS
                        ? (0, i.jsx)(u.Clickable, {
                              className: a()(g.bar, g.mentionsBar),
                              onClick: Z,
                              children: (0, i.jsx)(u.Text, {
                                  variant: 'text-xs/semibold',
                                  color: 'status-danger-text',
                                  className: g.barText,
                                  children: m.Z.Messages.NEW_MENTIONS_COUNT.format({ count: S })
                              })
                          })
                        : N === _.x.VOICE_CHANNELS
                          ? (0, i.jsx)(I, {
                                jumpToVoiceChannels: c,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
