n.d(t, {
    PZ: function () {
        return K;
    },
    Qj: function () {
        return Q;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    h = n(442837),
    p = n(481060),
    f = n(493683),
    _ = n(239091),
    m = n(420660),
    g = n(385499),
    C = n(570908),
    I = n(702321),
    E = n(201895),
    N = n(43267),
    x = n(933557),
    S = n(979264),
    v = n(322614),
    Z = n(961556),
    T = n(163889),
    b = n(111028),
    A = n(853856),
    M = n(93687),
    R = n(785232),
    L = n(878857),
    y = n(249978),
    P = n(518950),
    O = n(199902),
    j = n(158776),
    D = n(306680),
    w = n(111583),
    U = n(9156),
    G = n(594174),
    k = n(709054),
    B = n(998502),
    H = n(788307),
    V = n(981631),
    F = n(689938),
    W = n(931450);
let z = B.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
    Y = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    K = (e) =>
        (0, i.jsx)(p.Clickable, {
            className: W.closeButton,
            ...e,
            focusProps: {
                offset: {
                    top: -2,
                    bottom: -2,
                    left: -2,
                    right: 6
                }
            },
            children: (0, i.jsx)(p.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: W.closeIcon
            })
        }),
    q = () =>
        (0, i.jsx)(p.StarIcon, {
            size: 'xs',
            color: 'currentColor',
            className: W.favoriteIcon
        });
class Q extends l.Component {
    render() {
        let { route: e, selected: t, icon: n, iconClassName: l, interactiveClassName: r, text: s, children: o, locationState: u, onClick: h, className: f, role: _, 'aria-posinset': m, 'aria-setsize': g, ...I } = this.props;
        return (0, i.jsx)(T.Z, {
            className: a()(W.channel, { [W.fullWidth]: d.tq }, f),
            onClick: h,
            role: _,
            focusProps: {
                within: !0,
                ...Y
            },
            'aria-posinset': m,
            'aria-setsize': g,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: a()(r, W.interactive, W.linkButton, { [W.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: u
                    },
                    className: W.link,
                    ...I,
                    children: [
                        (0, i.jsx)(C.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: a()(W.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: W.avatarWithText
                        }),
                        o
                    ]
                })
            })
        });
    }
}
function X(e) {
    let { channel: t, isGDMFacepileEnabled: r, selected: s = !1, user: d, activities: v, applicationStream: M, entry: y, isTyping: O, status: j, isMobile: w, 'aria-posinset': G, 'aria-setsize': k } = e,
        [B, Q] = l.useState(!1),
        X = l.useRef(null),
        J = l.useRef(null),
        {
            avatarSrc: $,
            avatarDecorationSrc: ee,
            eventHandlers: et
        } = (0, P.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(s || B)
        }),
        en = (0, h.e7)([U.ZP], () => U.ZP.isChannelMuted(t.getGuildId(), t.id)),
        ei = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(t.id) > 0),
        el = (0, x.ZP)(t),
        er = (0, h.e7)([A.Z], () => A.Z.isFavorite(t.id)),
        ea = () => {
            Q(!0);
        },
        es = () => {
            Q(!1);
        },
        eo = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), f.Z.closePrivateChannel(t.id, s, n);
        },
        ec = () => {
            f.Z.preload(V.ME, t.id);
        },
        eu = (e) => {
            e.stopPropagation();
        },
        ed = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = X.current) || void 0 === t || t.click();
            }
        },
        eh = (e) => {
            t.isMultiUserDM()
                ? (0, _.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  selected: s
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, _.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('29212')]).then(n.bind(n, 131404));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              user: d,
                              channel: t,
                              channelSelected: s
                          });
                  });
        },
        ep = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = F.Z.Messages.LEAVE_GROUP_DM_TITLE.format({ name: el }),
                r = F.Z.Messages.LEAVE_GROUP_DM_BODY.format({ name: el });
            t.isManaged() && ((l = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_TITLE.format({ name: el })), (r = F.Z.Messages.LEAVE_GROUP_DM_MANAGED_BODY.format({ name: el }))),
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(e, {
                            header: l,
                            body: r,
                            onSubmit: eo,
                            ...t
                        });
                });
        },
        ef = () => {
            let e = {
                className: W.activity,
                textClassName: W.activityText,
                emojiClassName: W.activityEmoji
            };
            return t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: W.subtext,
                      children: (0, I.Z)(t.id) ? F.Z.Messages.SYSTEM_DM_CHANGELOG_STATUS : F.Z.Messages.SYSTEM_DM_ACTIVITY_TEXT
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: W.subtext,
                        children: F.Z.Messages.MEMBERS_HEADER.format({ members: t.recipients.length + 1 })
                    })
                  : j !== V.Skl.OFFLINE && j !== V.Skl.INVISIBLE && null != v && v.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: v,
                          applicationStream: M,
                          animate: B,
                          hideTooltip: !0,
                          user: d
                      })
                    : null != y
                      ? (0, i.jsx)(Z.Z, {
                            ...e,
                            entry: y
                        })
                      : null;
        },
        e_ = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
                return t.recipients.length >= 2 && r && null == t.icon
                    ? (0, i.jsx)(R.Z, {
                          'aria-hidden': !0,
                          recipients: t.recipients,
                          size: e,
                          isTyping: O,
                          status: j
                      })
                    : (0, i.jsx)(z, {
                          ...et,
                          src: (0, N.x)(t),
                          'aria-hidden': !0,
                          size: e,
                          status: O ? V.Skl.ONLINE : j,
                          isTyping: O
                      });
            o()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                !d.isSystemUser() && (n = (0, m.Z)(v) ? V.Skl.STREAMING : j),
                (0, i.jsx)(z, {
                    ...et,
                    size: p.AvatarSizes.SIZE_32,
                    src: $,
                    avatarDecoration: ee,
                    status: n,
                    isMobile: w,
                    isTyping: O,
                    'aria-label': d.username,
                    statusTooltip: !0
                })
            );
        },
        em = t.isMultiUserDM(),
        eg = t.isSystemDM(),
        eC = (0, L.Q)(),
        eI =
            em || eg || t.type !== V.d4z.DM || (null == d ? void 0 : d.clan) == null
                ? el
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          el,
                          (0, i.jsx)(S.ZP, {
                              clan: null == d ? void 0 : d.clan,
                              userId: null == d ? void 0 : d.id,
                              inline: !0,
                              disableGuildProfile: !0,
                              className: W.clanTag
                          })
                      ]
                  });
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: (e) => {
            let { role: n, ...l } = e;
            return (0, i.jsx)(T.Z, {
                className: W.channel,
                role: n,
                focusProps: {
                    ...Y,
                    focusTarget: X,
                    ringTarget: J
                },
                ref: J,
                onMouseEnter: ea,
                onMouseLeave: es,
                onMouseDown: ec,
                onContextMenu: eh,
                'aria-setsize': k,
                'aria-posinset': G,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(W.interactive, {
                        [W.interactiveSystemDM]: eC && eg,
                        [W.interactiveSelected]: s
                    }),
                    as: 'div',
                    onClick: ed,
                    muted: en,
                    selected: s,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: X,
                            to: V.Z5c.CHANNEL(V.ME, t.id),
                            className: W.link,
                            'aria-label': (0, E.ZP)({
                                channel: t,
                                unread: ei
                            }),
                            ...l,
                            children: (0, i.jsx)(C.Z, {
                                avatar: e_(),
                                selected: s,
                                highlighted: ei,
                                muted: null != en && en,
                                subText: ef(),
                                name: (0, i.jsx)(b.Z, {
                                    tooltipClassName: W.overflowTooltip,
                                    children: eI
                                }),
                                decorators: t.isSystemDM()
                                    ? (0, i.jsx)(g.Z, {
                                          className: W.decorator,
                                          type: g.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        er ? (0, i.jsx)(q, {}) : null,
                        (0, i.jsx)(K, {
                            'aria-label': em ? F.Z.Messages.LEAVE_GROUP_DM : F.Z.Messages.CLOSE_DM,
                            onClick: em ? ep : eo,
                            onMouseDown: eu
                        })
                    ]
                })
            });
        }
    });
}
t.ZP = (e) => {
    let { channel: t, selected: n, ...l } = e,
        r = (0, h.e7)([G.default], () => G.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: s, isFacepileEnabled: o } = M.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [j.Z, O.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = j.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === V.Skl.ONLINE) && (e = V.Skl.ONLINE);
                    }
                } else null != c && (e = j.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? j.Z.getActivities(c) : null,
                    applicationStream: null != c ? O.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && j.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, h.e7)(
            [G.default, w.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!s &&
                        k.default.keys(w.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = G.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return w.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, s]
        ),
        { recentActivityStatusEnabled: p } = (0, y.U)({ location: 'PrivateChannel' }),
        f = (0, v.Z)(null == r ? void 0 : r.id);
    return t.isMultiUserDM()
        ? (0, i.jsx)(X, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === V.Skl.ONLINE ? V.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: o,
              ...l
          })
        : (0, i.jsx)(X, {
              channel: t,
              selected: n,
              user: r,
              entry: p ? f[0] : void 0,
              isTyping: d,
              ...l,
              ...u
          });
};
