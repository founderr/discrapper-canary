var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(212433),
    u = n(442837),
    c = n(481060),
    d = n(570140),
    _ = n(45114),
    E = n(367907),
    f = n(717680),
    h = n(703656),
    p = n(592125),
    m = n(259580),
    I = n(617379),
    T = n(324081),
    g = n(305248),
    S = n(520116),
    A = n(981631),
    v = n(689938),
    N = n(619933);
function O(e) {
    let { channel: t, deleteChannel: n } = e,
        r = a.useRef(null),
        [[o, s], u] = a.useState([0, 0]),
        d = t.deleted && o > 0;
    if (t.deleted && 0 === o && null != r.current) {
        let e = r.current.offsetHeight,
            t = r.current.offsetTop,
            n = r.current.parentElement.scrollTop,
            i = n > t ? e - (n - t) : e;
        u([e, e - i]);
    }
    let { opacity: _, size: E } = (0, c.useSpring)(
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
        f = {
            opacity: _,
            height: E.to((e) => (d ? C(o, s, e) : 'auto'))
        };
    return (0, i.jsx)(l.animated.div, {
        ref: r,
        style: f,
        children: (0, i.jsx)(L, { ...e })
    });
}
let R = a.memo(O);
function C(e, t, n) {
    return t + (e - t) * n;
}
function y(e) {
    let { channel: t, onJump: n, deleteChannel: r, toggle: o } = e,
        s = (0, u.e7)([p.Z], () => p.Z.getChannel(t.channelId));
    if (
        (a.useEffect(() => {
            null != s &&
                t.isFullyLoaded &&
                !t.hasError &&
                !t.collapsed &&
                'messages' === t.type &&
                0 === t.messages.length &&
                d.Z.wait(() => {
                    (0, _.In)(t.channelId, !0), r(t.channelId);
                });
        }),
        null == s || !t.hasLoadedAnything)
    )
        return null;
    let l = (e, r) => {
        (0, E.yw)(A.rMx.INBOX_CHANNEL_CLICKED, {
            channel_id: t.channelId,
            guild_id: t.guildId
        });
        let i = null != r ? r : t.oldestUnreadMessageId;
        (0, h.uL)(A.Z5c.CHANNEL(t.guildId, t.channelId, 'forum' === t.type ? null : i)), n(e);
    };
    return (0, i.jsx)('div', {
        className: N.channel,
        children: (0, i.jsx)(c.HeadingLevel, {
            component: (0, i.jsxs)(T.Z, {
                channel: s,
                gotoChannel: l,
                mentionCount: t.mentionCount,
                toggleCollapsed: o,
                channelState: t,
                children: [(0, i.jsx)(I.Z, { channel: s }), (0, i.jsx)(b, { ...e }), 'nsfw' === t.type ? null : (0, i.jsx)(D, { ...e })]
            }),
            children: t.collapsed
                ? null
                : 'messages' === t.type
                  ? (0, i.jsx)(S.Z, {
                        channel: t,
                        channelRecord: s,
                        gotoChannel: l
                    })
                  : 'forum' === t.type
                    ? (0, i.jsx)(g.Z, {
                          channel: t,
                          channelRecord: s,
                          deleteChannel: r
                      })
                    : null
        })
    });
}
t.Z = R;
let L = a.memo(y);
function b(e) {
    let { channel: t, markChannelRead: n, markGuildRead: r, getNumUnreadChannels: a } = e,
        o = (0, f.Z)() && null != t.guildId;
    function s() {
        o && null != t.guildId ? r(t.guildId) : n(t),
            (0, E.yw)(A.rMx.INBOX_CHANNEL_ACKED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                marked_all_channels_as_read: !1,
                num_unread_channels_remaining: a() - 1
            });
    }
    return (0, i.jsx)(c.CircleIconButton, {
        className: N.markReadButton,
        tooltip: o ? v.Z.Messages.MARK_GUILD_AS_READ : v.Z.Messages.MARK_AS_READ,
        color: c.CircleIconButtonColors.TERTIARY,
        icon: o
            ? (0, i.jsx)(c.DoubleCheckmarkIcon, {
                  size: 'xs',
                  color: 'currentColor'
              })
            : (0, i.jsx)(c.CheckmarkLargeIcon, {
                  size: 'xs',
                  color: 'currentColor'
              }),
        onClick: s
    });
}
function D(e) {
    let { channel: t, toggle: n, getNumUnreadChannels: r } = e;
    function a() {
        n(t),
            (0, E.yw)(A.rMx.INBOX_CHANNEL_COLLAPSED, {
                channel_id: t.channelId,
                guild_id: t.guildId,
                num_unread_channels_remaining: r(),
                is_now_collapsed: !t.collapsed
            });
    }
    return (0, i.jsx)(c.Tooltip, {
        text: v.Z.Messages.COLLAPSE,
        children: (e) =>
            (0, i.jsx)(c.Clickable, {
                ...e,
                className: s()(N.collapseButton, { [N.collapsed]: t.collapsed }),
                onClick: a,
                children: (0, i.jsx)(m.Z, {
                    width: 16,
                    height: 16
                })
            })
    });
}
