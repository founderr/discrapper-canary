n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(752877),
    s = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(540059),
    h = n(492162),
    p = n(237583),
    m = n(451478),
    f = n(934415),
    g = n(968847),
    C = n(388032),
    v = n(706091);
let _ = {
    friction: 30,
    tension: 300
};
function x(e) {
    var t;
    let { guildChannels: n, jumpToVoiceChannels: r } = e,
        a = n.getCategoryFromSection(n.voiceChannelsSectionNumber),
        s = (0, h.Z)(n.id),
        u = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), r();
            },
            [r]
        ),
        m = null !== (t = null == a ? void 0 : a.getChannelRecords()) && void 0 !== t ? t : [],
        g = (0, f.c4)({
            channels: m,
            selectedChannelId: null,
            selectedVoiceChannelId: null,
            voiceStates: s
        });
    return (0, i.jsxs)(d.Clickable, {
        className: o()(v.bar),
        onClick: u,
        children: [
            (0, i.jsx)(d.VoiceNormalIcon, {
                size: 'custom',
                className: v.voiceChannelsIcon,
                width: 14,
                height: 14,
                color: c.Z.unsafe_rawColors.GREEN_330.css
            }),
            (0, i.jsx)(d.Text, {
                variant: 'text-xs/semibold',
                color: 'text-positive',
                className: v.barText,
                children: C.intl.format(C.t['fDlr+P'], { count: g.length })
            }),
            (0, i.jsx)(p.Z, {
                guildId: n.id,
                className: v.voiceChannelsUsers,
                users: g.slice(0, 4),
                renderMoreUsers: () => null,
                max: 4,
                size: d.AvatarSizes.SIZE_16
            })
        ]
    });
}
function I(e) {
    let { position: t, guildChannels: n, guildChannelsVersion: r, jumpToVoiceChannels: c, jumpToChannel: h } = e,
        p = (0, u.Q3)('UnreadBar'),
        { bottomBar: f, topBar: I } = (0, s.cj)([g.Z], () => g.Z.getUnreadStateForGuildId(n.id)),
        b = (0, s.e7)([m.Z], () => m.Z.isFocused()),
        { mode: E, mentionCount: S, targetChannelId: Z } = 'bottom' === t ? f : I,
        N = E === g.x.HIDDEN,
        y = (0, d.useSpring)(
            {
                to: { transform: N ? ('bottom' === t ? 'translateY(180%)' : 'translateY(-180%)') : 'translateY(0%)' },
                config: _
            },
            b ? 'respect-motion-settings' : 'animate-never'
        ),
        T = l.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null != Z && h(Z);
            },
            [h, Z]
        );
    return (0, i.jsx)('div', {
        className: o()(v.container, {
            [v.top]: 'top' === t,
            [v.bottom]: 'bottom' === t
        }),
        children: (0, i.jsx)(a.animated.div, {
            className: v.containerPadding,
            style: y,
            'aria-hidden': N,
            children:
                E === g.x.HIDDEN
                    ? (0, i.jsx)('div', { className: o()(v.bar, v.emptyBar) })
                    : E === g.x.UNREAD
                      ? (0, i.jsxs)(d.Clickable, {
                            className: v.bar,
                            onClick: T,
                            children: [
                                'bottom' === t
                                    ? (0, i.jsx)(d.ChevronSmallDownIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: v.unreadIcon,
                                          height: 14,
                                          width: 14
                                      })
                                    : (0, i.jsx)(d.ChevronSmallUpIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: v.unreadIcon,
                                          height: 14,
                                          width: 14
                                      }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-xs/semibold',
                                    color: 'interactive-normal',
                                    className: v.barText,
                                    children: C.intl.string(C.t.FCRiT0)
                                })
                            ]
                        })
                      : E === g.x.MENTIONS
                        ? (0, i.jsx)(d.Clickable, {
                              className: o()(v.bar, v.mentionsBar),
                              onClick: T,
                              children: (0, i.jsx)(d.Text, {
                                  variant: 'text-xs/semibold',
                                  color: p ? 'text-primary' : 'status-danger-text',
                                  className: v.barText,
                                  children: C.intl.format(C.t.EQcLys, { count: S })
                              })
                          })
                        : E === g.x.VOICE_CHANNELS
                          ? (0, i.jsx)(x, {
                                jumpToVoiceChannels: c,
                                guildChannels: n,
                                guildChannelsVersion: r
                            })
                          : void 0
        })
    });
}
