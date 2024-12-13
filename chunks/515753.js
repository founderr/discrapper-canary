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
    o = n.n(r),
    a = n(512722),
    s = n.n(a),
    c = n(568611),
    d = n(91192),
    u = n(873546),
    h = n(442837),
    p = n(481060),
    m = n(493683),
    f = n(239091),
    g = n(420660),
    C = n(385499),
    v = n(570908),
    _ = n(702321),
    x = n(201895),
    I = n(43267),
    b = n(933557),
    E = n(979264),
    S = n(588688),
    Z = n(163889),
    N = n(111028),
    y = n(540059),
    T = n(853856),
    j = n(93687),
    A = n(785232),
    P = n(878857),
    R = n(565640),
    M = n(518950),
    L = n(199902),
    w = n(158776),
    D = n(306680),
    O = n(699516),
    k = n(111583),
    G = n(9156),
    U = n(594174),
    B = n(709054),
    H = n(998502),
    V = n(788307),
    F = n(981631),
    W = n(388032),
    z = n(926540);
let Y = H.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
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
    J = () =>
        (0, i.jsx)(p.EyeSlashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        }),
    X = () =>
        (0, i.jsx)(p.DenyIcon, {
            size: 'xs',
            color: 'currentColor',
            className: z.favoriteIcon
        });
function $(e) {
    let { route: t, selected: n, icon: l, iconClassName: r, avatarWithTextClassName: a, interactiveClassName: s, text: d, children: h, locationState: m, onClick: f, className: g, role: C, 'aria-posinset': _, 'aria-setsize': x, ...I } = e,
        b = (0, y.Q3)('PrivateChannelLinkButton');
    return (0, i.jsx)(Z.Z, {
        className: o()(z.channel, { [z.fullWidth]: u.tq }, g),
        onClick: f,
        role: C,
        focusProps: {
            within: !0,
            ...K
        },
        'aria-posinset': _,
        'aria-setsize': x,
        children: (0, i.jsx)(p.Interactive, {
            as: 'div',
            selected: n,
            className: o()(s, z.interactive, z.linkButton, { [z.interactiveSelected]: n }),
            children: (0, i.jsxs)(c.rU, {
                to: {
                    pathname: t,
                    state: m
                },
                className: z.link,
                ...I,
                children: [
                    (0, i.jsx)(v.Z, {
                        selected: n,
                        muted: !1,
                        avatar: (0, i.jsx)(l, {
                            size: b ? 'refresh_sm' : void 0,
                            className: o()(z.linkButtonIcon, r),
                            color: 'currentColor'
                        }),
                        name: d,
                        innerClassName: o()(z.avatarWithText, a)
                    }),
                    h
                ]
            })
        })
    });
}
function ee(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: a, selected: u = !1, user: y, activities: j, applicationStream: R, entry: L, isTyping: w, status: k, isMobile: U, 'aria-posinset': B, 'aria-setsize': H } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, M.Z)({
            user: y,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(u || $)
        }),
        eo = (0, h.e7)([G.ZP], () => G.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: ea, blocked: es } = (0, h.cj)([O.Z], () => ({
            ignored: O.Z.isIgnored(r.getRecipientId()),
            blocked: O.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(r.id) > 0),
        ed = (0, b.ZP)(r),
        eu = (0, h.e7)([T.Z], () => T.Z.isFavorite(r.id)),
        eh = () => {
            ee(!0);
        },
        ep = () => {
            ee(!1);
        },
        em = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(r.id, u, t);
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
        ev = (e) => {
            r.isMultiUserDM()
                ? (0, f.jW)(
                      e,
                      async () => {
                          let { default: e } = await Promise.all([n.e('79695'), n.e('25421')]).then(n.bind(n, 354741));
                          return (t) =>
                              (0, i.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  selected: u
                              });
                      },
                      { noBlurEvent: !0 }
                  )
                : (0, f.jW)(e, async () => {
                      let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('56826'), n.e('5606')]).then(n.bind(n, 131404));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              user: y,
                              channel: r,
                              channelSelected: u
                          });
                  });
        },
        e_ = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = W.intl.formatToPlainString(W.t.hJ5Ap6, { name: ed }),
                l = W.intl.format(W.t.SSIVOj, { name: ed });
            r.isManaged() && ((t = W.intl.formatToPlainString(W.t.hVGjER, { name: ed })), (l = W.intl.format(W.t.IK1Qvr, { name: ed }))),
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
                emojiClassName: o()(z.activityEmoji, { [z.mutedEmoji]: eo })
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: z.subtext,
                      children: (0, _.Z)(r.id) ? W.intl.string(W.t.FL5T09) : W.intl.string(W.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: z.subtext,
                        children: W.intl.format(W.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : k !== F.Skl.OFFLINE && k !== F.Skl.INVISIBLE && null != j && j.length > 0
                    ? (0, i.jsx)(V.ZP, {
                          ...e,
                          activities: j,
                          applicationStream: R,
                          animate: $,
                          hideTooltip: !0,
                          user: y
                      })
                    : null != L
                      ? (0, i.jsx)(S.Z, {
                            ...e,
                            entry: L
                        })
                      : null;
        },
        eI = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && a && null == r.icon
                    ? (0, i.jsx)(A.Z, {
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
            s()(null != y, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !y.isSystemUser() && (t = (0, g.Z)(j) ? F.Skl.STREAMING : k),
                (0, i.jsx)(Y, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: U,
                    isTyping: w,
                    'aria-label': y.username,
                    statusTooltip: !0
                })
            );
        },
        eb = r.isMultiUserDM(),
        eE = r.isSystemDM(),
        eS = (0, P.Q)(),
        eZ = !eb && !eE && r.type === F.d4z.DM,
        eN = eZ && (null == y ? void 0 : y.clan) != null,
        ey = eZ && ea,
        eT = eZ && es,
        ej = eN
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      ed,
                      (0, i.jsx)(E.ZP, {
                          clan: null == y ? void 0 : y.clan,
                          userId: null == y ? void 0 : y.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: z.clanTag
                      })
                  ]
              })
            : ed,
        eA = null !== (t = eo || ey || eT) && void 0 !== t && t;
    return (0, i.jsx)(d.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(Z.Z, {
                className: o()(z.channel, z.dm),
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
                onContextMenu: ev,
                'aria-setsize': H,
                'aria-posinset': B,
                children: (0, i.jsxs)(p.Interactive, {
                    className: o()(z.interactive, {
                        [z.interactiveSystemDM]: eS && eE,
                        [z.interactiveSelected]: u
                    }),
                    as: 'div',
                    onClick: eC,
                    muted: eA,
                    selected: u,
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
                            children: (0, i.jsx)(v.Z, {
                                avatar: eI(),
                                selected: u,
                                highlighted: ec,
                                muted: eA,
                                subText: ex(),
                                name: (0, i.jsx)(N.Z, {
                                    tooltipClassName: z.overflowTooltip,
                                    children: ej
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
                        eu ? (0, i.jsx)(Q, {}) : null,
                        ey ? (0, i.jsx)(J, {}) : null,
                        eT ? (0, i.jsx)(X, {}) : null,
                        (0, i.jsx)(q, {
                            'aria-label': eb ? W.intl.string(W.t['26C4oq']) : W.intl.string(W.t.jsvgc3),
                            onClick: eb ? e_ : em,
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
        r = (0, h.e7)([U.default], () => U.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = j.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        d = (0, h.cj)(
            [w.Z, L.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
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
            [t, c, o]
        ),
        u = (0, R.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        p = (0, h.e7)(
            [U.default, k.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!a &&
                        B.default.keys(k.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return k.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, a]
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              isTyping: p,
              status: d.status === F.Skl.ONLINE ? F.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)(ee, {
              channel: t,
              selected: n,
              user: r,
              entry: u,
              isTyping: p,
              ...l,
              ...d
          });
};
