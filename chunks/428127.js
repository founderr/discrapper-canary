n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(212433),
    o = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(492162),
    h = n(237583),
    p = n(451478),
    f = n(934415),
    m = n(968847),
    _ = n(689938),
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
        m = null !== (t = null == s ? void 0 : s.getChannelRecords()) && void 0 !== t ? t : [],
        C = (0, f.c4)({
            channels: m,
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
                children: _.Z.Messages.VOICE_CHANNEL_BAR_ACTIVE.format({ count: C.length })
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
        { bottomBar: h, topBar: f } = (0, o.cj)([m.Z], () => m.Z.getUnreadStateForGuildId(n.id)),
        E = (0, o.e7)([p.Z], () => p.Z.isFocused()),
        { mode: N, mentionCount: x, targetChannelId: S } = 'bottom' === t ? h : f,
        v = N === m.x.HIDDEN,
        Z = (0, u.useSpring)(
            {
                to: { transform: v ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: C
            },
            E ? 'respect-motion-settings' : 'animate-never'
        ),
        T = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != S && d(S);
            },
            [d, S]
        );
    return (0, i.jsx)('div', {
        className: a()(g.container, {
            [g.top]: 'top' === t,
            [g.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(s.animated.div, {
            className: g.containerPadding,
            style: Z,
            'aria-hidden': v,
            children:
                N === m.x.HIDDEN
                    ? (0, i.jsx)('div', { className: a()(g.bar, g.emptyBar) })
                    : N === m.x.UNREAD
                      ? (0, i.jsxs)(u.Clickable, {
                            className: g.bar,
                            onClick: T,
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
                                    children: _.Z.Messages.NEW_UNREADS
                                })
                            ]
                        })
                      : N === m.x.MENTIONS
                        ? (0, i.jsx)(u.Clickable, {
                              className: a()(g.bar, g.mentionsBar),
                              onClick: T,
                              children: (0, i.jsx)(u.Text, {
                                  variant: 'text-xs/semibold',
                                  color: 'status-danger-text',
                                  className: g.barText,
                                  children: _.Z.Messages.NEW_MENTIONS_COUNT.format({ count: x })
                              })
                          })
                        : N === m.x.VOICE_CHANNELS
                          ? (0, i.jsx)(I, {
                                jumpToVoiceChannels: c,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
