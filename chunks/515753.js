n.d(t, {
    PZ: function () {
        return K;
    },
    Qj: function () {
        return X;
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
    S = n(588688),
    Z = n(163889),
    N = n(111028),
    y = n(853856),
    T = n(93687),
    j = n(785232),
    A = n(878857),
    P = n(565640),
    R = n(518950),
    M = n(199902),
    L = n(158776),
    w = n(306680),
    D = n(699516),
    O = n(111583),
    k = n(9156),
    U = n(594174),
    G = n(709054),
    B = n(998502),
    H = n(788307),
    V = n(981631),
    F = n(388032),
    W = n(926540);
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
        }),
    Q = () =>
        (0, i.jsx)(p.EyeSlashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: W.favoriteIcon
        }),
    J = () =>
        (0, i.jsx)(p.DenyIcon, {
            size: 'xs',
            color: 'currentColor',
            className: W.favoriteIcon
        });
class X extends l.Component {
    render() {
        let { route: e, selected: t, icon: n, iconClassName: l, avatarWithTextClassName: r, interactiveClassName: a, text: s, children: u, locationState: h, onClick: m, className: f, role: g, 'aria-posinset': C, 'aria-setsize': v, ...x } = this.props;
        return (0, i.jsx)(Z.Z, {
            className: o()(W.channel, { [W.fullWidth]: d.tq }, f),
            onClick: m,
            role: g,
            focusProps: {
                within: !0,
                ...Y
            },
            'aria-posinset': C,
            'aria-setsize': v,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: o()(a, W.interactive, W.linkButton, { [W.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: h
                    },
                    className: W.link,
                    ...x,
                    children: [
                        (0, i.jsx)(_.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: o()(W.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: o()(W.avatarWithText, r)
                        }),
                        u
                    ]
                })
            })
        });
    }
}
function $(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: a, selected: d = !1, user: T, activities: P, applicationStream: M, entry: L, isTyping: O, status: U, isMobile: G, 'aria-posinset': B, 'aria-setsize': X } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, R.Z)({
            user: T,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $)
        }),
        eo = (0, h.e7)([k.ZP], () => k.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: ea, blocked: es } = (0, h.cj)([D.Z], () => ({
            ignored: D.Z.isIgnored(r.getRecipientId()),
            blocked: D.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([w.ZP], () => w.ZP.getMentionCount(r.id) > 0),
        eu = (0, b.ZP)(r),
        ed = (0, h.e7)([y.Z], () => y.Z.isFavorite(r.id)),
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
            m.Z.preload(V.ME, r.id);
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
                              user: T,
                              channel: r,
                              channelSelected: d
                          });
                  });
        },
        ev = (e) => {
            e.preventDefault(), e.stopPropagation();
            let t = F.intl.formatToPlainString(F.t.hJ5Ap6, { name: eu }),
                l = F.intl.format(F.t.SSIVOj, { name: eu });
            r.isManaged() && ((t = F.intl.formatToPlainString(F.t.hVGjER, { name: eu })), (l = F.intl.format(F.t.IK1Qvr, { name: eu }))),
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
                className: W.activity,
                textClassName: W.activityText,
                emojiClassName: o()(W.activityEmoji, { [W.mutedEmoji]: eo })
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: W.subtext,
                      children: (0, v.Z)(r.id) ? F.intl.string(F.t.FL5T09) : F.intl.string(F.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: W.subtext,
                        children: F.intl.format(F.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : U !== V.Skl.OFFLINE && U !== V.Skl.INVISIBLE && null != P && P.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: P,
                          applicationStream: M,
                          animate: $,
                          hideTooltip: !0,
                          user: T
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
                    ? (0, i.jsx)(j.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: O,
                          status: U
                      })
                    : (0, i.jsx)(z, {
                          ...er,
                          src: (0, I.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: O ? V.Skl.ONLINE : U,
                          isTyping: O
                      });
            s()(null != T, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !T.isSystemUser() && (t = (0, g.Z)(P) ? V.Skl.STREAMING : U),
                (0, i.jsx)(z, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: G,
                    isTyping: O,
                    'aria-label': T.username,
                    statusTooltip: !0
                })
            );
        },
        eb = r.isMultiUserDM(),
        eE = r.isSystemDM(),
        eS = (0, A.Q)(),
        eZ = !eb && !eE && r.type === V.d4z.DM,
        eN = eZ && (null == T ? void 0 : T.clan) != null,
        ey = eZ && ea,
        eT = eZ && es,
        ej = eN
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(E.ZP, {
                          clan: null == T ? void 0 : T.clan,
                          userId: null == T ? void 0 : T.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: W.clanTag
                      })
                  ]
              })
            : eu,
        eA = null !== (t = eo || ey || eT) && void 0 !== t && t;
    return (0, i.jsx)(u.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(Z.Z, {
                className: W.channel,
                role: t,
                focusProps: {
                    ...Y,
                    focusTarget: et,
                    ringTarget: en
                },
                ref: en,
                onMouseEnter: eh,
                onMouseLeave: ep,
                onMouseDown: ef,
                onContextMenu: e_,
                'aria-setsize': X,
                'aria-posinset': B,
                children: (0, i.jsxs)(p.Interactive, {
                    className: o()(W.interactive, {
                        [W.interactiveSystemDM]: eS && eE,
                        [W.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: eC,
                    muted: eA,
                    selected: d,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: et,
                            to: V.Z5c.CHANNEL(V.ME, r.id),
                            className: W.link,
                            'aria-label': (0, x.ZP)({
                                channel: r,
                                unread: ec
                            }),
                            ...n,
                            children: (0, i.jsx)(_.Z, {
                                avatar: eI(),
                                selected: d,
                                highlighted: ec,
                                muted: eA,
                                subText: ex(),
                                name: (0, i.jsx)(N.Z, {
                                    tooltipClassName: W.overflowTooltip,
                                    children: ej
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: W.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        ed ? (0, i.jsx)(q, {}) : null,
                        ey ? (0, i.jsx)(Q, {}) : null,
                        eT ? (0, i.jsx)(J, {}) : null,
                        (0, i.jsx)(K, {
                            'aria-label': eb ? F.intl.string(F.t['26C4oq']) : F.intl.string(F.t.jsvgc3),
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
        r = (0, h.e7)([U.default], () => U.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: o, isTypingIndicatorEnabled: a, isFacepileEnabled: s } = T.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [L.Z, M.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (o) {
                        let n = L.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === V.Skl.ONLINE) && (e = V.Skl.ONLINE);
                    }
                } else null != c && (e = L.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? L.Z.getActivities(c) : null,
                    applicationStream: null != c ? M.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && L.Z.isMobileOnline(c)
                };
            },
            [t, c, o]
        ),
        d = (0, P.Z)(null == r ? void 0 : r.id, 'PrivateChannel'),
        p = (0, h.e7)(
            [U.default, O.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!a &&
                        G.default.keys(O.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return O.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, a]
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)($, {
              channel: t,
              selected: n,
              isTyping: p,
              status: u.status === V.Skl.ONLINE ? V.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)($, {
              channel: t,
              selected: n,
              user: r,
              entry: d,
              isTyping: p,
              ...l,
              ...u
          });
};
