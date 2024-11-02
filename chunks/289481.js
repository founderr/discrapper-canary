n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(100621),
    s = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(45114),
    m = n(367907),
    f = n(717680),
    h = n(703656),
    p = n(592125),
    g = n(259580),
    _ = n(617379),
    C = n(324081),
    E = n(305248),
    I = n(520116),
    x = n(981631),
    v = n(388032),
    N = n(619933);
let T = r.memo(function (e) {
    let { channel: t, deleteChannel: n } = e,
        l = r.useRef(null),
        [[a, s], u] = r.useState([0, 0]),
        d = t.deleted && a > 0;
    if (t.deleted && 0 === a && null != l.current) {
        let e = l.current.offsetHeight,
            t = l.current.offsetTop,
            n = l.current.parentElement.scrollTop,
            i = n > t ? e - (n - t) : e;
        u([e, e - i]);
    }
    let { opacity: m, size: f } = (0, c.useSpring)(
            {
                config: {
                    clamp: !0,
                    friction: 18,
                    tension: 200
                },
                opacity: d ? 0 : 1,
                size: d ? 0 : 1,
                onRest: () => {
                    n(t.channelId);
                }
            },
            'animate-always'
        ),
        h = {
            opacity: m,
            height: f.to((e) =>
                d
                    ? (function (e, t, n) {
                          return t + (e - t) * n;
                      })(a, s, e)
                    : 'auto'
            )
        };
    return (0, i.jsx)(o.animated.div, {
        ref: l,
        style: h,
        children: (0, i.jsx)(S, { ...e })
    });
});
t.Z = T;
let S = r.memo(function (e) {
    let { channel: t, onJump: n, deleteChannel: l, toggle: a } = e,
        o = (0, s.e7)([p.Z], () => p.Z.getChannel(t.channelId));
    if (
        (r.useEffect(() => {
            null != o &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                'messages' === t.type &&
                0 === t.messages.length &&
                u.Z.wait(() => {
                    (0, d.In)(t.channelId, !0), l(t.channelId);
                });
        }),
        null == o || !t.hasLoadedAnything)
    )
        return null;
    let f = (e, i) => {
        (0, m.yw)(x.rMx.INBOX_CHANNEL_CLICKED, {
            channel_id: t.channelId,
            guild_id: t.guildId
        });
        let r = null != i ? i : t.oldestUnreadMessageId;
        (0, h.uL)(x.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : r)), n(e);
    };
    return (0, i.jsx)('div', {
        className: N.channel,
        children: (0, i.jsx)(c.HeadingLevel, {
            component: (0, i.jsxs)(C.Z, {
                channel: o,
                gotoChannel: f,
                mentionCount: t.mentionCount,
                toggleCollapsed: a,
                channelState: t,
                children: [(0, i.jsx)(_.Z, { channel: o }), (0, i.jsx)(b, { ...e }), 'nsfw' === t.type ? null : (0, i.jsx)(A, { ...e })]
            }),
            children: t.collapsed
                ? null
                : 'messages' === t.type
                  ? (0, i.jsx)(I.Z, {
                        channel: t,
                        channelRecord: o,
                        gotoChannel: f
                    })
                  : 'forum' === t.type
                    ? (0, i.jsx)(E.Z, {
                          channel: t,
                          channelRecord: o,
                          deleteChannel: l
                      })
                    : null
        })
    });
});
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: r, getNumUnreadChannels: l } = e,
        a = (0, f.Z)() && null != t.guildId;
    return (0, i.jsx)(c.CircleIconButton, {
        className: N.markReadButton,
        tooltip: a ? v.intl.string(v.t['5lLMhI']) : v.intl.string(v.t.e6RscX),
        color: c.CircleIconButtonColors.TERTIARY,
        icon: a
            ? (0, i.jsx)(c.DoubleCheckmarkIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: function () {
            a && null != t.guildId ? r(t.guildId) : n(t),
                (0, m.yw)(x.rMx.INBOX_CHANNEL_ACKED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    marked_all_channels_as_read: !1,
                    num_unread_channels_remaining: l() - 1
                });
        }
    });
}
function A(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: r } = e;
    function l() {
        n(t),
            (0, m.yw)(x.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: r(),
                is_now_collapsed: !t.collapsed
            });
    }
    return (0, i.jsx)(c.Tooltip, {
        text: v.intl.string(v.t.iTcumZ),
        children: (e) =>
            (0, i.jsx)(c.Clickable, {
                ...e,
                className: a()(N.collapseButton, { [N.collapsed]: t.collapsed }),
                onClick: l,
                children: (0, i.jsx)(g.Z, {
                    width: 16,
                    height: 16
                })
            })
    });
}
