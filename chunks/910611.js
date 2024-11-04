n.d(t, {
    TS: function () {
        return w;
    },
    ud: function () {
        return R;
    },
    v0: function () {
        return k;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(835473),
    d = n(385499),
    h = n(933557),
    m = n(471445),
    p = n(243778),
    f = n(266076),
    g = n(565138),
    C = n(703656),
    x = n(699516),
    v = n(914010),
    _ = n(594174),
    I = n(768581),
    E = n(63063),
    b = n(946734),
    S = n(99843),
    Z = n(372564),
    T = n(984370),
    N = n(217314),
    j = n(981631),
    A = n(921944),
    y = n(388032),
    P = n(784237);
function M(e) {
    var t;
    let { channel: n } = e,
        l = (0, u.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        [r, s] = (0, p.US)([o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == l) return null;
    let a = I.ZP.getApplicationIconURL({
            id: l.id,
            icon: l.icon,
            size: 14
        }),
        [d, h] =
            r !== o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [y.intl.string(y.t.XJVlf3), void 0]
                : [
                      (0, i.jsxs)(
                          'div',
                          {
                              className: P.linkedLobbyEducationTooltip,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: y.intl.string(y.t.YIVr4O)
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: y.intl.format(y.t['16agur'], { helpdeskArticle: E.Z.getArticleURL(j.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, i.jsx)(c.Clickable, {
                                      className: P.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => s(A.L.USER_DISMISS),
                                      children: (0, i.jsx)(c.XSmallIcon, {
                                          className: P.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      y.intl.string(y.t.YIVr4O)
                  ];
    return (0, i.jsx)(
        c.Tooltip,
        {
            tooltipClassName: P.linkedLobbyEducationTooltipWrapper,
            text: d,
            'aria-label': h,
            forceOpen: r === o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, i.jsxs)(c.Text, {
                    ...e,
                    className: P.linkedLobby,
                    variant: 'text-sm/medium',
                    color: 'header-primary',
                    children: [
                        '\u2022',
                        (0, i.jsx)('img', {
                            alt: '',
                            src: a,
                            className: P.linkedLobbyApplicationIcon
                        }),
                        l.name
                    ]
                })
        },
        r
    );
}
function R(e) {
    let { channel: t, channelName: n, parentChannel: r, guild: a, inSidebar: o = !1, handleClick: u, handleContextMenu: d, handleParentClick: p, handleParentContextMenu: g, renderFollowButton: C } = e,
        v = (0, m.KS)(t, a),
        { prefix: I, level: E } = (function (e, t) {
            var n, i;
            switch (e) {
                case j.d4z.DM:
                    return {
                        prefix: y.intl.string(y.t.EJRzg4),
                        level: 1
                    };
                case j.d4z.GROUP_DM:
                    return {
                        prefix: y.intl.string(y.t['e5y+go']),
                        level: 1
                    };
                case j.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
                        level: 1
                    };
                case j.d4z.GUILD_ANNOUNCEMENT:
                case j.d4z.GUILD_TEXT:
                case j.d4z.GUILD_FORUM:
                case j.d4z.GUILD_MEDIA:
                case j.d4z.GUILD_STAGE_VOICE:
                case j.d4z.GUILD_VOICE:
                    return {
                        prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
                        level: 1
                    };
                case j.d4z.ANNOUNCEMENT_THREAD:
                case j.d4z.PUBLIC_THREAD:
                case j.d4z.PRIVATE_THREAD:
                    return {
                        prefix: y.intl.string(y.t['7Xm5QE']),
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, a),
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                null != I
                    ? (0, i.jsxs)(c.HiddenVisually, {
                          children: [I, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case j.d4z.DM:
            return (0, i.jsx)(N.Z, {
                level: E,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case j.d4z.GROUP_DM:
            if (t.isManaged()) return b;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)(c.HiddenVisually, { children: y.intl.string(y.t['e5y+go']) }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(f.Z, {
                            'aria-hidden': !0,
                            channel: t,
                            size: c.AvatarSizes.SIZE_24,
                            facepileSizeOverride: c.AvatarSizes.SIZE_32,
                            experimentLocation: 'header_bar',
                            className: P.avatar
                        })
                    }),
                    (0, i.jsx)(S.Z, { channel: t }, 'channel-'.concat(t.id))
                ]
            });
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
        case j.d4z.GUILD_FORUM:
        case j.d4z.GUILD_MEDIA:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(v, t.type === j.d4z.GUILD_ANNOUNCEMENT ? y.intl.string(y.t.l1dkSE) : y.intl.string(y.t.Pnajj4)),
                    (0, i.jsx)(T.Z.Title, {
                        level: E,
                        onContextMenu: d,
                        onClick: u,
                        children: b
                    }),
                    null != t.linkedLobby ? (0, i.jsx)(M, { channel: t }) : null,
                    null != C ? C() : null
                ]
            });
        case j.d4z.GUILD_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(v, y.intl.string(y.t.BVZqJi)),
                    (0, i.jsx)(T.Z.Title, {
                        level: E,
                        onContextMenu: d,
                        onClick: u,
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    O(v, y.intl.string(y.t.EErMzM)),
                    (0, i.jsx)(T.Z.Title, {
                        level: E,
                        onContextMenu: d,
                        onClick: u,
                        children: b
                    })
                ]
            });
        case j.d4z.ANNOUNCEMENT_THREAD:
        case j.d4z.PUBLIC_THREAD:
        case j.d4z.PRIVATE_THREAD:
            let Z = null;
            if (!o && null != r) {
                let e = (0, m.KS)(r, a);
                Z = (0, i.jsxs)(l.Fragment, {
                    children: [
                        O(e, y.intl.string(y.t.Pnajj4)),
                        (0, i.jsx)(T.Z.Title, {
                            level: E,
                            onContextMenu: g,
                            onClick: p,
                            className: s()(P.parentChannelName, P.cursorPointer),
                            children: (0, h.F6)(r, _.default, x.Z)
                        }),
                        (0, i.jsx)(T.Z.Caret, {})
                    ]
                });
            }
            let A = (null == r ? void 0 : r.type) != null && j.TPd.GUILD_THREADS_ONLY.has(r.type);
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    Z,
                    O(A ? null : v, y.intl.string(y.t['7Xm5QE'])),
                    (0, i.jsx)(T.Z.Title, {
                        level: E,
                        onContextMenu: d,
                        onClick: u,
                        className: s()({
                            [P.cursorPointer]: o,
                            [P.forumPostTitle]: A
                        }),
                        children: b
                    })
                ]
            });
        case j.d4z.GUILD_DIRECTORY:
            let R = (null == a ? void 0 : a.hasFeature(j.oNc.HUB)) ? y.intl.formatToPlainString(y.t.Dy2aho, { guildName: n }) : n;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    null !== v
                        ? (0, i.jsx)(T.Z.Icon, {
                              iconClassName: P.__invalid_icon,
                              icon: v,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, i.jsxs)(T.Z.Title, {
                        level: E,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != I
                                ? (0, i.jsxs)(c.HiddenVisually, {
                                      children: [I, ':']
                                  })
                                : null,
                            ' ',
                            R
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let L = (e) => {
    let { channel: t } = e,
        n = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        l = (0, a.e7)([_.default], () => _.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == l ? void 0 : l.isStaff()) ? (0, i.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function k(e, t) {
    switch (e.type) {
        case j.d4z.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(L, { channel: e }), (0, i.jsx)(b.Z, { channel: e }, e.id)]
            });
        case j.d4z.GUILD_ANNOUNCEMENT:
        case j.d4z.GUILD_TEXT:
        case j.d4z.GUILD_VOICE:
        case j.d4z.GUILD_STAGE_VOICE:
        case j.d4z.GROUP_DM:
            return null != t
                ? (0, i.jsx)(
                      Z.Z,
                      {
                          channel: e,
                          guild: t
                      },
                      e.id
                  )
                : null;
        default:
            return null;
    }
}
function O(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e &&
                (0, i.jsx)(T.Z.Icon, {
                    iconClassName: P.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, i.jsx)(c.HiddenVisually, { children: t })
        ]
    });
}
function w(e) {
    let { guild: t, channel: n, caretPosition: l = 'left' } = e;
    return (0, a.e7)([v.Z], () => v.Z.getGuildId()) !== j.I_8 || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: P.guildBreadcrumbContainer,
              children: [
                  'left' === l && (0, i.jsx)(T.Z.Caret, { direction: 'left' }),
                  (0, i.jsx)(g.Z, {
                      guild: t,
                      size: g.Z.Sizes.SMALLER,
                      className: P.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, i.jsx)(T.Z.Title, {
                      onClick: () => {
                          (0, C.XU)(t.id, n.id);
                      },
                      className: s()(P.parentChannelName, P.cursorPointer),
                      children: t.name
                  }),
                  'right' === l && (0, i.jsx)(T.Z.Caret, { direction: 'right' })
              ]
          });
}
