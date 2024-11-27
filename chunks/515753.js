n.d(t, {
    PZ: function () {
        return Y;
    },
    Qj: function () {
        return X;
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
    S = n(961556),
    Z = n(163889),
    N = n(111028),
    y = n(853856),
    T = n(93687),
    A = n(785232),
    P = n(878857),
    j = n(518950),
    R = n(199902),
    M = n(158776),
    L = n(306680),
    w = n(699516),
    D = n(111583),
    O = n(9156),
    k = n(594174),
    U = n(709054),
    G = n(998502),
    B = n(788307),
    V = n(981631),
    H = n(388032),
    F = n(926540);
let W = G.ZP.getEnableHardwareAcceleration() ? p.AnimatedAvatar : p.Avatar,
    z = {
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        }
    },
    Y = (e) =>
        (0, i.jsx)(p.Clickable, {
            className: F.closeButton,
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
                className: F.closeIcon
            })
        }),
    K = () =>
        (0, i.jsx)(p.StarIcon, {
            size: 'xs',
            color: 'currentColor',
            className: F.favoriteIcon
        }),
    q = () =>
        (0, i.jsx)(p.EyeSlashIcon, {
            size: 'xs',
            color: 'currentColor',
            className: F.favoriteIcon
        }),
    Q = () =>
        (0, i.jsx)(p.DenyIcon, {
            size: 'xs',
            color: 'currentColor',
            className: F.favoriteIcon
        });
class X extends l.Component {
    render() {
        let { route: e, selected: t, icon: n, iconClassName: l, avatarWithTextClassName: r, interactiveClassName: o, text: s, children: u, locationState: h, onClick: m, className: f, role: g, 'aria-posinset': C, 'aria-setsize': v, ...x } = this.props;
        return (0, i.jsx)(Z.Z, {
            className: a()(F.channel, { [F.fullWidth]: d.tq }, f),
            onClick: m,
            role: g,
            focusProps: {
                within: !0,
                ...z
            },
            'aria-posinset': C,
            'aria-setsize': v,
            children: (0, i.jsx)(p.Interactive, {
                as: 'div',
                selected: t,
                className: a()(o, F.interactive, F.linkButton, { [F.interactiveSelected]: t }),
                children: (0, i.jsxs)(c.rU, {
                    to: {
                        pathname: e,
                        state: h
                    },
                    className: F.link,
                    ...x,
                    children: [
                        (0, i.jsx)(_.Z, {
                            selected: t,
                            muted: !1,
                            avatar: (0, i.jsx)(n, {
                                className: a()(F.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: a()(F.avatarWithText, r)
                        }),
                        u
                    ]
                })
            })
        });
    }
}
function J(e) {
    var t;
    let { channel: r, isGDMFacepileEnabled: o, selected: d = !1, user: T, activities: R, applicationStream: M, entry: D, isTyping: k, status: U, isMobile: G, 'aria-posinset': X, 'aria-setsize': J } = e,
        [$, ee] = l.useState(!1),
        et = l.useRef(null),
        en = l.useRef(null),
        {
            avatarSrc: ei,
            avatarDecorationSrc: el,
            eventHandlers: er
        } = (0, j.Z)({
            user: T,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(d || $)
        }),
        ea = (0, h.e7)([O.ZP], () => O.ZP.isChannelMuted(r.getGuildId(), r.id)),
        { ignored: eo, blocked: es } = (0, h.cj)([w.Z], () => ({
            ignored: w.Z.isIgnored(r.getRecipientId()),
            blocked: w.Z.isBlocked(r.getRecipientId())
        })),
        ec = (0, h.e7)([L.ZP], () => L.ZP.getMentionCount(r.id) > 0),
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
            let t = H.intl.formatToPlainString(H.t.hJ5Ap6, { name: eu }),
                l = H.intl.format(H.t.SSIVOj, { name: eu });
            r.isManaged() && ((t = H.intl.formatToPlainString(H.t.hVGjER, { name: eu })), (l = H.intl.format(H.t.IK1Qvr, { name: eu }))),
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
                className: F.activity,
                textClassName: F.activityText,
                emojiClassName: F.activityEmoji
            };
            return r.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: F.subtext,
                      children: (0, v.Z)(r.id) ? H.intl.string(H.t.FL5T09) : H.intl.string(H.t.NnY5lZ)
                  })
                : r.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: F.subtext,
                        children: H.intl.format(H.t.CxSA5O, { members: r.recipients.length + 1 })
                    })
                  : U !== V.Skl.OFFLINE && U !== V.Skl.INVISIBLE && null != R && R.length > 0
                    ? (0, i.jsx)(B.ZP, {
                          ...e,
                          activities: R,
                          applicationStream: M,
                          animate: $,
                          hideTooltip: !0,
                          user: T
                      })
                    : null != D
                      ? (0, i.jsx)(S.Z, {
                            ...e,
                            entry: D
                        })
                      : null;
        },
        eI = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (r.isMultiUserDM())
                return r.recipients.length >= 2 && o && null == r.icon
                    ? (0, i.jsx)(A.Z, {
                          'aria-hidden': !0,
                          recipients: r.recipients,
                          size: e,
                          isTyping: k,
                          status: U
                      })
                    : (0, i.jsx)(W, {
                          ...er,
                          src: (0, I.x)(r),
                          'aria-hidden': !0,
                          size: e,
                          status: k ? V.Skl.ONLINE : U,
                          isTyping: k
                      });
            s()(null != T, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let t = null;
            return (
                !T.isSystemUser() && (t = (0, g.Z)(R) ? V.Skl.STREAMING : U),
                (0, i.jsx)(W, {
                    ...er,
                    size: p.AvatarSizes.SIZE_32,
                    src: ei,
                    avatarDecoration: el,
                    status: t,
                    isMobile: G,
                    isTyping: k,
                    'aria-label': T.username,
                    statusTooltip: !0
                })
            );
        },
        eb = r.isMultiUserDM(),
        eE = r.isSystemDM(),
        eS = (0, P.Q)(),
        eZ = !eb && !eE && r.type === V.d4z.DM,
        eN = eZ && (null == T ? void 0 : T.clan) != null,
        ey = eZ && eo,
        eT = eZ && es,
        eA = eN
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      eu,
                      (0, i.jsx)(E.ZP, {
                          clan: null == T ? void 0 : T.clan,
                          userId: null == T ? void 0 : T.id,
                          inline: !0,
                          disableGuildProfile: !0,
                          className: F.clanTag
                      })
                  ]
              })
            : eu,
        eP = null !== (t = ea || ey || eT) && void 0 !== t && t;
    return (0, i.jsx)(u.mh, {
        id: r.id,
        children: (e) => {
            let { role: t, ...n } = e;
            return (0, i.jsx)(Z.Z, {
                className: F.channel,
                role: t,
                focusProps: {
                    ...z,
                    focusTarget: et,
                    ringTarget: en
                },
                ref: en,
                onMouseEnter: eh,
                onMouseLeave: ep,
                onMouseDown: ef,
                onContextMenu: e_,
                'aria-setsize': J,
                'aria-posinset': X,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(F.interactive, {
                        [F.interactiveSystemDM]: eS && eE,
                        [F.interactiveSelected]: d
                    }),
                    as: 'div',
                    onClick: eC,
                    muted: eP,
                    selected: d,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: et,
                            to: V.Z5c.CHANNEL(V.ME, r.id),
                            className: F.link,
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
                                name: (0, i.jsx)(N.Z, {
                                    tooltipClassName: F.overflowTooltip,
                                    children: eA
                                }),
                                decorators: r.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: F.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        ed ? (0, i.jsx)(K, {}) : null,
                        ey ? (0, i.jsx)(q, {}) : null,
                        eT ? (0, i.jsx)(Q, {}) : null,
                        (0, i.jsx)(Y, {
                            'aria-label': eb ? H.intl.string(H.t['26C4oq']) : H.intl.string(H.t.jsvgc3),
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
        r = (0, h.e7)([k.default], () => k.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = T.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [M.Z, R.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = M.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === V.Skl.ONLINE) && (e = V.Skl.ONLINE);
                    }
                } else null != c && (e = M.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? M.Z.getActivities(c) : null,
                    applicationStream: null != c ? R.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && M.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, h.e7)(
            [k.default, D.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!o &&
                        U.default.keys(D.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = k.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return D.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, o]
        );
    return t.isMultiUserDM()
        ? (0, i.jsx)(J, {
              channel: t,
              selected: n,
              isTyping: d,
              status: u.status === V.Skl.ONLINE ? V.Skl.ONLINE : void 0,
              isGDMFacepileEnabled: s,
              ...l
          })
        : (0, i.jsx)(J, {
              channel: t,
              selected: n,
              user: r,
              isTyping: d,
              ...l,
              ...u
          });
};
