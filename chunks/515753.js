n.d(t, {
    PZ: function () {
        return q;
    },
    Qj: function () {
        return J;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(512722),
    s = n.n(o),
    c = n(568611),
    u = n(91192),
    d = n(873546),
    h = n(442837),
    p = n(481060),
    m = n(493683),
    f = n(239091),
    g = n(420660),
    C = n(385499),
    _ = n(570908),
    v = n(702321),
    x = n(201895),
    I = n(43267),
    b = n(933557),
    S = n(979264),
    E = n(322614),
    Z = n(961556),
    N = n(163889),
    y = n(111028),
    T = n(853856),
    A = n(93687),
    P = n(785232),
    j = n(878857),
    R = n(249978),
    M = n(518950),
    L = n(199902),
    w = n(158776),
    D = n(306680),
    O = n(699516),
    k = n(111583),
    U = n(9156),
    G = n(594174),
    B = n(709054),
    V = n(998502),
    H = n(788307),
    F = n(981631),
    W = n(388032),
    z = n(931450);
let Y = V.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
    K = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    q = (e) =>
        (0, i.jsx)(p.Clickable, {
            className: z.closeButton,
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
                className: z.closeIcon
            })
        }),
    Q = () =>
        (0, i.jsx)(p.StarIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    X = () =>
        (0, i.jsx)(p.EyeSlashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        });
class J extends l.Component {
    render() {
        let { route: e, selected: t, icon: n, iconClassName: l, avatarWithTextClassName: r, interactiveClassName: o, text: s, children: u, locationState: h, onClick: m, className: f, role: g, 'aria-posinset': C, 'aria-setsize': v, ...x } = this.props;
        return (0, i.jsx)(N.Z, {
            className: a()(z.channel, { [z.fullWidth]: d.tq }, f),
            onClick: m,
            role: g,
            focusProps: {
                within: !0,
                ...K
            },
            'aria-posinset': C,
            'aria-setsize': v,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: a()(o, z.interactive, z.linkButton, { [z.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: h
                    },
                    className: z.link,
                    ...x,
                    children: [
                        (0, i.jsx)(_.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: a()(z.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: a()(z.avatarWithText, r)
                        }),
                        u
                    ]
                })
            })
        });
    }
}
function $(e) {
    let { channel: t, isGDMFacepileEnabled: r, selected: o = !1, user: d, activities: E, applicationStream: A, entry: R, isTyping: L, status: w, isMobile: k, 'aria-posinset': G, 'aria-setsize': B } = e,
        [V, J] = l.useState(!1),
        $ = l.useRef(null),
        ee = l.useRef(null),
        {
            avatarSrc: et,
            avatarDecorationSrc: en,
            eventHandlers: ei
        } = (0, M.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(o || V)
        }),
        el = (0, h.e7)([U.ZP], () => U.ZP.isChannelMuted(t.getGuildId(), t.id)),
        er = (0, h.e7)([O.Z], () => O.Z.isIgnored(t.getRecipientId())),
        ea = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(t.id) > 0),
        eo = (0, b.ZP)(t),
        es = (0, h.e7)([T.Z], () => T.Z.isFavorite(t.id)),
        ec = () => {
            J(!0);
        },
        eu = () => {
            J(!1);
        },
        ed = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(t.id, o, n);
        },
        eh = () => {
            m.Z.preload(F.ME, t.id);
        },
        ep = (e) => {
            e.stopPropagation();
        },
        em = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = $.current) || void 0 === t || t.click();
            }
        },
        ef = (e) => {
            t.isMultiUserDM()
                ? (0, f.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  channel: t,
                                  selected: o
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, f.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('29212')]).then(n.bind(n, 131404));
                      return (n) =>
                          (0, i.jsx)(e, {
                              ...n,
                              user: d,
                              channel: t,
                              channelSelected: o
                          });
                  });
        },
        eg = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: eo }),
                r = W.intl.format(W.t.SSIVOj, { name: eo });
            t.isManaged() && ((l = W.intl.formatToPlainString(W.t.hVGjER, { name: eo })), (r = W.intl.format(W.t.IK1Qvr, { name: eo }))),
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(e, {
                            header: l,
                            body: r,
                            onSubmit: ed,
                            ...t
                        });
                });
        },
        eC = () => {
            let e = {
                className: z.activity,
                textClassName: z.activityText,
                emojiClassName: z.activityEmoji
            };
            return t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: z.subtext,
                      children: (0, v.Z)(t.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: z.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : w !== F.Skl.OFFLINE && w !== F.Skl.INVISIBLE && null != E && E.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: E,
                          applicationStream: A,
                          animate: V,
                          hideTooltip: !0,
                          user: d
                      })
                    : null != R
                      ? (0, i.jsx)(Z.Z, {
                            ...e,
                            entry: R
                        })
                      : null;
        },
        e_ = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
                return t.recipients.length >= 2 && r && null == t.icon
                    ? (0, i.jsx)(P.Z, {
                          'aria-hidden': !0,
                          recipients: t.recipients,
                          size: e,
                          isTyping: L,
                          status: w
                      })
                    : (0, i.jsx)(Y, {
                          ...ei,
                          src: (0, I.x)(t),
                          'aria-hidden': !0,
                          size: e,
                          status: L ? F.Skl.ONLINE : w,
                          isTyping: L
                      });
            s()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                !d.isSystemUser() && (n = (0, g.Z)(E) ? F.Skl.STREAMING : w),
                (0, i.jsx)(Y, {
                    ...ei,
                    size: p.AvatarSizes.SIZE_32,
                    src: et,
                    avatarDecoration: en,
                    status: n,
                    isMobile: k,
                    isTyping: L,
                    'aria-label': d.username,
                    statusTooltip: !0
                })
            );
        },
        ev = t.isMultiUserDM(),
        ex = t.isSystemDM(),
        eI = (0, j.Q)(),
        eb = !ev && !ex && t.type === F.d4z.DM,
        eS = eb && (null == d ? void 0 : d.clan) != null,
        eE = eb && er,
        eZ = eS
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eo,
                      (0, i.jsx)(S.ZP, {
                          clan: null == d ? void 0 : d.clan,
                          userId: null == d ? void 0 : d.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : eo;
    return (0, i.jsx)(u.mh, {
        id: t.id,
        children: (e) => {
            var n;
            let { role: l, ...r } = e;
            return (0, i.jsx)(N.Z, {
                className: z.channel,
                role: l,
                focusProps: {
                    ...K,
                    focusTarget: $,
                    ringTarget: ee
                },
                ref: ee,
                onMouseEnter: ec,
                onMouseLeave: eu,
                onMouseDown: eh,
                onContextMenu: ef,
                'aria-setsize': B,
                'aria-posinset': G,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(z.interactive, {
                        [z.interactiveSystemDM]: eI && ex,
                        [z.interactiveSelected]: o
                    }),
                    as: 'div',
                    onClick: em,
                    muted: el || eE,
                    selected: o,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: $,
                            to: F.Z5c.CHANNEL(F.ME, t.id),
                            className: z.link,
                            'aria-label': (0, x.ZP)({
                                channel: t,
                                unread: ea
                            }),
                            ...r,
                            children: (0, i.jsx)(_.Z, {
                                avatar: e_(),
                                selected: o,
                                highlighted: ea,
                                muted: null !== (n = el || eE) && void 0 !== n && n,
                                subText: eC(),
                                name: (0, i.jsx)(y.Z, {
                                    tooltipClassName: z.overflowTooltip,
                                    children: eZ
                                }),
                                decorators: t.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: z.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        es ? (0, i.jsx)(Q, {}) : null,
                        eE ? (0, i.jsx)(X, {}) : null,
                        (0, i.jsx)(q, {
                            'aria-label': ev ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: ev ? eg : ed,
                            onMouseDown: ep
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
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = A.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [w.Z, L.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = w.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === F.Skl.ONLINE) && (e = F.Skl.ONLINE);
                    }
                } else null != c && (e = w.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? w.Z.getActivities(c) : null,
                    applicationStream: null != c ? L.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && w.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, h.e7)(
            [G.default, k.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!o &&
                        B.default.keys(k.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = G.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return k.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, o]
        ),
        { recentActivityStatusEnabled: p } = (0, R.U)({ location: 'PrivateChannel' }),
        m = (0, E.Z)(null == r ? void 0 : r.id);
    return t.isMultiUserDM()
        ? (0, i.jsx)($, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === F.Skl.ONLINE ? F.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)($, {
              channel: t,
              selected: n,
              user: r,
              entry: p ? m[0] : void 0,
              isTyping: d,
              ...l,
              ...u
          });
};
