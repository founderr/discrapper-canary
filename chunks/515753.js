n.d(t, {
    PZ: function () {
        return q;
    },
    Qj: function () {
        return $;
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
    E = n(979264),
    S = n(322614),
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
    z = n(926540);
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
        }),
    J = () =>
        (0, i.jsx)(p.DenyIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        });
class $ extends l.Component {
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
function ee(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: o, selected: d = !1, user: S, activities: A, applicationStream: R, entry: L, isTyping: w, status: k, isMobile: G, 'aria-posinset': B, 'aria-setsize': V } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, M.Z)({
            user: S,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $)
        }),
        ea = (0, h.e7)([U.ZP], () => U.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: eo, blocked: es } = (0, h.cj)([O.Z], () => ({
            ignored: O.Z.isIgnored(r.getRecipientId()),
            blocked: O.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(r.id) > 0),
        eu = (0, b.ZP)(r),
        ed = (0, h.e7)([T.Z], () => T.Z.isFavorite(r.id)),
        eh = () => {
            ee(!0);
        },
        ep = () => {
            ee(!1);
        },
        em = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(r.id, d, t);
        },
        ef = () => {
            m.Z.preload(F.ME, r.id);
        },
        eg = (e) => {
            e.stopPropagation();
        },
        eC = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = et.current) || void 0 === t || t.click();
            }
        },
        e_ = (e) => {
            r.isMultiUserDM()
                ? (0, f.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  selected: d
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, f.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              user: S,
                              channel: r,
                              channelSelected: d
                          });
                  });
        },
        ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: eu }),
                l = W.intl.format(W.t.SSIVOj, { name: eu });
            r.isManaged() && ((t = W.intl.formatToPlainString(W.t.hVGjER, { name: eu })), (l = W.intl.format(W.t.IK1Qvr, { name: eu }))),
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (n) =>
                        (0, i.jsx)(e, {
                            header: t,
                            body: l,
                            onSubmit: em,
                            ...n
                        });
                });
        },
        ex = () => {
            let e = {
                className: z.activity,
                textClassName: z.activityText,
                emojiClassName: z.activityEmoji
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: z.subtext,
                      children: (0, v.Z)(r.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: z.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : k !== F.Skl.OFFLINE && k !== F.Skl.INVISIBLE && null != A && A.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: A,
                          applicationStream: R,
                          animate: $,
                          hideTooltip: !0,
                          user: S
                      })
                    : null != L
                      ? (0, i.jsx)(Z.Z, {
                            ...e,
                            entry: L
                        })
                      : null;
        },
        eI = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && o && null == r.icon
                    ? (0, i.jsx)(P.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: w,
                          status: k
                      })
                    : (0, i.jsx)(Y, {
                          ...er,
                          src: (0, I.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: w ? F.Skl.ONLINE : k,
                          isTyping: w
                      });
            s()(null != S, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !S.isSystemUser() && (t = (0, g.Z)(A) ? F.Skl.STREAMING : k),
                (0, i.jsx)(Y, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: G,
                    isTyping: w,
                    'aria-label': S.username,
                    statusTooltip: !0
                })
            );
        },
        eb = r.isMultiUserDM(),
        eE = r.isSystemDM(),
        eS = (0, j.Q)(),
        eZ = !eb && !eE && r.type === F.d4z.DM,
        eN = eZ && (null == S ? void 0 : S.clan) != null,
        ey = eZ && eo,
        eT = eZ && es,
        eA = eN
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(E.ZP, {
                          clan: null == S ? void 0 : S.clan,
                          userId: null == S ? void 0 : S.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : eu,
        eP = null !== (t = ea || ey || eT) && void 0 !== t && t;
    return (0, i.jsx)(u.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(N.Z, {
                className: z.channel,
                role: t,
                focusProps: {
                    ...K,
                    focusTarget: et,
                    ringTarget: en
                },
                ref: en,
                onMouseEnter: eh,
                onMouseLeave: ep,
                onMouseDown: ef,
                onContextMenu: e_,
                'aria-setsize': V,
                'aria-posinset': B,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(z.interactive, {
                        [z.interactiveSystemDM]: eS && eE,
                        [z.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: eC,
                    muted: eP,
                    selected: d,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: et,
                            to: F.Z5c.CHANNEL(F.ME, r.id),
                            className: z.link,
                            'aria-label': (0, x.ZP)({
                                channel: r,
                                unread: ec
                            }),
                            ...n,
                            children: (0, i.jsx)(_.Z, {
                                avatar: eI(),
                                selected: d,
                                highlighted: ec,
                                muted: eP,
                                subText: ex(),
                                name: (0, i.jsx)(y.Z, {
                                    tooltipClassName: z.overflowTooltip,
                                    children: eA
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: z.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        ed ? (0, i.jsx)(Q, {}) : null,
                        ey ? (0, i.jsx)(X, {}) : null,
                        eT ? (0, i.jsx)(J, {}) : null,
                        (0, i.jsx)(q, {
                            'aria-label': eb ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: eb ? ev : em,
                            onMouseDown: eg
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
        m = (0, S.Z)(null == r ? void 0 : r.id);
    return t.isMultiUserDM()
        ? (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === F.Skl.ONLINE ? F.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              user: r,
              entry: p ? m[0] : void 0,
              isTyping: d,
              ...l,
              ...u
          });
};
