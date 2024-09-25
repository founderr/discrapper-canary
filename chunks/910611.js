n.d(t, {
    TS: function () {
        return k;
    },
    ud: function () {
        return O;
    },
    v0: function () {
        return y;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(442837),
    o = n(704215),
    c = n(481060),
    u = n(835473),
    d = n(385499),
    h = n(933557),
    m = n(471445),
    p = n(243778),
    _ = n(266076),
    f = n(565138),
    E = n(703656),
    g = n(699516),
    C = n(914010),
    I = n(594174),
    T = n(768581),
    x = n(63063),
    v = n(946734),
    S = n(99843),
    N = n(372564),
    A = n(984370),
    Z = n(217314),
    M = n(981631),
    b = n(921944),
    R = n(689938),
    L = n(784237);
function j(e) {
    var t;
    let { channel: n } = e,
        s = (0, u.q)(null === (t = n.linkedLobby) || void 0 === t ? void 0 : t.application_id),
        [a, l] = (0, p.US)([o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP], void 0, !0);
    if (null == s) return null;
    let r = T.ZP.getApplicationIconURL({
            id: s.id,
            icon: s.icon,
            size: 14
        }),
        [d, h] =
            a !== o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP
                ? [R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_TOPIC_TOOLTIP, void 0]
                : [
                      (0, i.jsxs)(
                          'div',
                          {
                              className: L.linkedLobbyEducationTooltip,
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/semibold',
                                      color: 'header-primary',
                                      children: R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_TITLE
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      color: 'header-secondary',
                                      children: R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_DESCRIPTION.format({ helpdeskArticle: x.Z.getArticleURL(M.BhN.CHANNEL_LINKED_LOBBIES) })
                                  }),
                                  (0, i.jsx)(c.Clickable, {
                                      className: L.linkedLobbyEducationTooltipCloseClickContainer,
                                      onClick: () => l(b.L.USER_DISMISS),
                                      children: (0, i.jsx)(c.XSmallIcon, {
                                          className: L.linkedLobbyEducationTooltipCloseIcon,
                                          color: 'currentColor'
                                      })
                                  })
                              ]
                          },
                          0
                      ),
                      R.Z.Messages.CHANNEL_LINKED_LOBBY_CHANNEL_HEADER_COACHMARK_TITLE
                  ];
    return (0, i.jsx)(
        c.Tooltip,
        {
            tooltipClassName: L.linkedLobbyEducationTooltipWrapper,
            text: d,
            'aria-label': h,
            forceOpen: a === o.z.CHANNEL_LINKED_LOBBY_EDUCATION_TOOLTIP || void 0,
            children: (e) =>
                (0, i.jsxs)(c.Text, {
                    ...e,
                    className: L.linkedLobby,
                    variant: 'text-sm/medium',
                    color: 'header-primary',
                    children: [
                        '\u2022',
                        (0, i.jsx)('img', {
                            alt: '',
                            src: r,
                            className: L.linkedLobbyApplicationIcon
                        }),
                        s.name
                    ]
                })
        },
        a
    );
}
function O(e) {
    let { channel: t, channelName: n, parentChannel: a, guild: r, inSidebar: o = !1, handleClick: u, handleContextMenu: d, handleParentClick: p, handleParentContextMenu: f, renderFollowButton: E } = e,
        C = (0, m.KS)(t, r),
        { prefix: T, level: x } = (function (e, t) {
            var n, i;
            switch (e) {
                case M.d4z.DM:
                    return {
                        prefix: R.Z.Messages.DIRECT_MESSAGE,
                        level: 1
                    };
                case M.d4z.GROUP_DM:
                    return {
                        prefix: R.Z.Messages.GROUP_DM,
                        level: 1
                    };
                case M.d4z.GUILD_DIRECTORY:
                    return {
                        prefix: null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '',
                        level: 1
                    };
                case M.d4z.GUILD_ANNOUNCEMENT:
                case M.d4z.GUILD_TEXT:
                case M.d4z.GUILD_FORUM:
                case M.d4z.GUILD_MEDIA:
                case M.d4z.GUILD_STAGE_VOICE:
                case M.d4z.GUILD_VOICE:
                    return {
                        prefix: null !== (i = null == t ? void 0 : t.name) && void 0 !== i ? i : '',
                        level: 1
                    };
                case M.d4z.ANNOUNCEMENT_THREAD:
                case M.d4z.PUBLIC_THREAD:
                case M.d4z.PRIVATE_THREAD:
                    return {
                        prefix: R.Z.Messages.THREAD,
                        level: 2
                    };
                default:
                    return {
                        prefix: null,
                        level: 1
                    };
            }
        })(t.type, r),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                null != T
                    ? (0, i.jsxs)(c.HiddenVisually, {
                          children: [T, ':']
                      })
                    : null,
                ' ',
                n
            ]
        });
    switch (t.type) {
        case M.d4z.DM:
            return (0, i.jsx)(Z.Z, {
                level: x,
                channel: t,
                handleClick: u,
                handleContextMenu: d
            });
        case M.d4z.GROUP_DM:
            if (t.isManaged()) return v;
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    (0, i.jsx)(c.HiddenVisually, { children: R.Z.Messages.GROUP_DM }),
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(_.Z, {
                            'aria-hidden': !0,
                            channel: t,
                            size: c.AvatarSizes.SIZE_24,
                            facepileSizeOverride: c.AvatarSizes.SIZE_32,
                            experimentLocation: 'header_bar',
                            className: L.avatar
                        })
                    }),
                    (0, i.jsx)(S.Z, { channel: t }, 'channel-'.concat(t.id))
                ]
            });
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_FORUM:
        case M.d4z.GUILD_MEDIA:
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    D(C, t.type === M.d4z.GUILD_ANNOUNCEMENT ? R.Z.Messages.NEWS_CHANNEL : R.Z.Messages.TEXT_CHANNEL),
                    (0, i.jsx)(A.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    }),
                    null != t.linkedLobby ? (0, i.jsx)(j, { channel: t }) : null,
                    null != E ? E() : null
                ]
            });
        case M.d4z.GUILD_VOICE:
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    D(C, R.Z.Messages.VOICE_CHANNEL),
                    (0, i.jsx)(A.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case M.d4z.GUILD_STAGE_VOICE:
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    D(C, R.Z.Messages.STAGE_CHANNEL),
                    (0, i.jsx)(A.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: v
                    })
                ]
            });
        case M.d4z.ANNOUNCEMENT_THREAD:
        case M.d4z.PUBLIC_THREAD:
        case M.d4z.PRIVATE_THREAD:
            let N = null;
            if (!o && null != a) {
                let e = (0, m.KS)(a, r);
                N = (0, i.jsxs)(s.Fragment, {
                    children: [
                        D(e, R.Z.Messages.TEXT_CHANNEL),
                        (0, i.jsx)(A.Z.Title, {
                            level: x,
                            onContextMenu: f,
                            onClick: p,
                            className: l()(L.parentChannelName, L.cursorPointer),
                            children: (0, h.F6)(a, I.default, g.Z)
                        }),
                        (0, i.jsx)(A.Z.Caret, {})
                    ]
                });
            }
            let b = (null == a ? void 0 : a.type) != null && M.TPd.GUILD_THREADS_ONLY.has(a.type);
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    N,
                    D(b ? null : C, R.Z.Messages.THREAD),
                    (0, i.jsx)(A.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        className: l()({
                            [L.cursorPointer]: o,
                            [L.forumPostTitle]: b
                        }),
                        children: v
                    })
                ]
            });
        case M.d4z.GUILD_DIRECTORY:
            let O = (null == r ? void 0 : r.hasFeature(M.oNc.HUB)) ? R.Z.Messages.HUB_DIRECTORY_CHANNEL_TITLE.format({ guildName: n }) : n;
            return (0, i.jsxs)(s.Fragment, {
                children: [
                    null !== C
                        ? (0, i.jsx)(A.Z.Icon, {
                              iconClassName: L.__invalid_icon,
                              icon: C,
                              'aria-hidden': !0
                          })
                        : null,
                    (0, i.jsxs)(A.Z.Title, {
                        level: x,
                        onContextMenu: d,
                        onClick: u,
                        children: [
                            null != T
                                ? (0, i.jsxs)(c.HiddenVisually, {
                                      children: [T, ':']
                                  })
                                : null,
                            ' ',
                            O
                        ]
                    })
                ]
            });
        default:
            return null;
    }
}
let P = (e) => {
    let { channel: t } = e,
        n = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        s = (0, r.e7)([I.default], () => I.default.getUser(t.getRecipientId()));
    return t.isDM() && (null == n ? void 0 : n.isStaff()) && (null == s ? void 0 : s.isStaff()) ? (0, i.jsx)(d.Z, { type: d.Z.Types.STAFF_ONLY_DM }) : null;
};
function y(e, t) {
    switch (e.type) {
        case M.d4z.DM:
            return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(P, { channel: e }), (0, i.jsx)(v.Z, { channel: e }, e.id)]
            });
        case M.d4z.GUILD_ANNOUNCEMENT:
        case M.d4z.GUILD_TEXT:
        case M.d4z.GUILD_VOICE:
        case M.d4z.GUILD_STAGE_VOICE:
        case M.d4z.GROUP_DM:
            return null != t
                ? (0, i.jsx)(
                      N.Z,
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
function D(e, t) {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null !== e &&
                (0, i.jsx)(A.Z.Icon, {
                    iconClassName: L.__invalid_icon,
                    icon: e,
                    'aria-hidden': !0
                }),
            (0, i.jsx)(c.HiddenVisually, { children: t })
        ]
    });
}
function k(e) {
    let { guild: t, channel: n, caretPosition: s = 'left' } = e;
    return (0, r.e7)([C.Z], () => C.Z.getGuildId()) !== M.I_8 || null == t
        ? null
        : (0, i.jsxs)('div', {
              className: L.guildBreadcrumbContainer,
              children: [
                  'left' === s && (0, i.jsx)(A.Z.Caret, { direction: 'left' }),
                  (0, i.jsx)(f.Z, {
                      guild: t,
                      size: f.Z.Sizes.SMALLER,
                      className: L.guildBreadcrumbIcon,
                      active: !0
                  }),
                  (0, i.jsx)(A.Z.Title, {
                      onClick: () => {
                          (0, E.XU)(t.id, n.id);
                      },
                      className: l()(L.parentChannelName, L.cursorPointer),
                      children: t.name
                  }),
                  'right' === s && (0, i.jsx)(A.Z.Caret, { direction: 'right' })
              ]
          });
}
