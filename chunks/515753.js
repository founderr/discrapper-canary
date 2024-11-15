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
    j = n(93687),
    A = n(785232),
    P = n(878857),
    M = n(249978),
    R = n(518950),
    w = n(199902),
    L = n(158776),
    D = n(306680),
    O = n(111583),
    k = n(9156),
    U = n(594174),
    G = n(709054),
    B = n(998502),
    H = n(788307),
    V = n(981631),
    F = n(388032),
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
        let { route: e, selected: t, icon: n, iconClassName: l, avatarWithTextClassName: r, interactiveClassName: o, text: s, children: u, locationState: h, onClick: m, className: f, role: g, 'aria-posinset': C, 'aria-setsize': v, ...x } = this.props;
        return (0, i.jsx)(N.Z, {
            className: a()(W.channel, { [W.fullWidth]: d.tq }, f),
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
                className: a()(o, W.interactive, W.linkButton, { [W.interactiveSelected]: t }),
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
                                className: a()(W.linkButtonIcon, l),
                                color: 'currentColor'
                            }),
                            name: s,
                            innerClassName: a()(W.avatarWithText, r)
                        }),
                        u
                    ]
                })
            })
        });
    }
}
function J(e) {
    let { channel: t, isGDMFacepileEnabled: r, selected: o = !1, user: d, activities: S, applicationStream: j, entry: M, isTyping: w, status: L, isMobile: O, 'aria-posinset': U, 'aria-setsize': G } = e,
        [B, Q] = l.useState(!1),
        J = l.useRef(null),
        X = l.useRef(null),
        {
            avatarSrc: $,
            avatarDecorationSrc: ee,
            eventHandlers: et
        } = (0, R.Z)({
            user: d,
            size: p.AvatarSizes.SIZE_32,
            animateOnHover: !(o || B)
        }),
        en = (0, h.e7)([k.ZP], () => k.ZP.isChannelMuted(t.getGuildId(), t.id)),
        ei = (0, h.e7)([D.ZP], () => D.ZP.getMentionCount(t.id) > 0),
        el = (0, b.ZP)(t),
        er = (0, h.e7)([T.Z], () => T.Z.isFavorite(t.id)),
        ea = () => {
            Q(!0);
        },
        eo = () => {
            Q(!1);
        },
        es = function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null != e && (e.preventDefault(), e.stopPropagation()), m.Z.closePrivateChannel(t.id, o, n);
        },
        ec = () => {
            m.Z.preload(V.ME, t.id);
        },
        eu = (e) => {
            e.stopPropagation();
        },
        ed = (e) => {
            if (e.target === e.currentTarget) {
                var t;
                null === (t = J.current) || void 0 === t || t.click();
            }
        },
        eh = (e) => {
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
        ep = (e) => {
            e.preventDefault(), e.stopPropagation();
            let l = F.intl.formatToPlainString(F.t.hJ5Ap6, { name: el }),
                r = F.intl.format(F.t.SSIVOj, { name: el });
            t.isManaged() && ((l = F.intl.formatToPlainString(F.t.hVGjER, { name: el })), (r = F.intl.format(F.t.IK1Qvr, { name: el }))),
                (0, p.openModalLazy)(async () => {
                    let { default: e } = await n.e('14604').then(n.bind(n, 960670));
                    return (t) =>
                        (0, i.jsx)(e, {
                            header: l,
                            body: r,
                            onSubmit: es,
                            ...t
                        });
                });
        },
        em = () => {
            let e = {
                className: W.activity,
                textClassName: W.activityText,
                emojiClassName: W.activityEmoji
            };
            return t.isSystemDM()
                ? (0, i.jsx)('div', {
                      className: W.subtext,
                      children: (0, v.Z)(t.id) ? F.intl.string(F.t.FL5T09) : F.intl.string(F.t.NnY5lZ)
                  })
                : t.isMultiUserDM()
                  ? (0, i.jsx)('div', {
                        className: W.subtext,
                        children: F.intl.format(F.t.CxSA5O, { members: t.recipients.length + 1 })
                    })
                  : L !== V.Skl.OFFLINE && L !== V.Skl.INVISIBLE && null != S && S.length > 0
                    ? (0, i.jsx)(H.ZP, {
                          ...e,
                          activities: S,
                          applicationStream: j,
                          animate: B,
                          hideTooltip: !0,
                          user: d
                      })
                    : null != M
                      ? (0, i.jsx)(Z.Z, {
                            ...e,
                            entry: M
                        })
                      : null;
        },
        ef = () => {
            let e = p.AvatarSizes.SIZE_32;
            if (t.isMultiUserDM())
                return t.recipients.length >= 2 && r && null == t.icon
                    ? (0, i.jsx)(A.Z, {
                          'aria-hidden': !0,
                          recipients: t.recipients,
                          size: e,
                          isTyping: w,
                          status: L
                      })
                    : (0, i.jsx)(z, {
                          ...et,
                          src: (0, I.x)(t),
                          'aria-hidden': !0,
                          size: e,
                          status: w ? V.Skl.ONLINE : L,
                          isTyping: w
                      });
            s()(null != d, 'PrivateChannel.renderAvatar: Invalid prop configuration - no user or channel');
            let n = null;
            return (
                !d.isSystemUser() && (n = (0, g.Z)(S) ? V.Skl.STREAMING : L),
                (0, i.jsx)(z, {
                    ...et,
                    size: p.AvatarSizes.SIZE_32,
                    src: $,
                    avatarDecoration: ee,
                    status: n,
                    isMobile: O,
                    isTyping: w,
                    'aria-label': d.username,
                    statusTooltip: !0
                })
            );
        },
        eg = t.isMultiUserDM(),
        eC = t.isSystemDM(),
        e_ = (0, P.Q)(),
        ev =
            eg || eC || t.type !== V.d4z.DM || (null == d ? void 0 : d.clan) == null
                ? el
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          el,
                          (0, i.jsx)(E.ZP, {
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
            return (0, i.jsx)(N.Z, {
                className: W.channel,
                role: n,
                focusProps: {
                    ...Y,
                    focusTarget: J,
                    ringTarget: X
                },
                ref: X,
                onMouseEnter: ea,
                onMouseLeave: eo,
                onMouseDown: ec,
                onContextMenu: eh,
                'aria-setsize': G,
                'aria-posinset': U,
                children: (0, i.jsxs)(p.Interactive, {
                    className: a()(W.interactive, {
                        [W.interactiveSystemDM]: e_ && eC,
                        [W.interactiveSelected]: o
                    }),
                    as: 'div',
                    onClick: ed,
                    muted: en,
                    selected: o,
                    children: [
                        (0, i.jsx)(c.rU, {
                            innerRef: J,
                            to: V.Z5c.CHANNEL(V.ME, t.id),
                            className: W.link,
                            'aria-label': (0, x.ZP)({
                                channel: t,
                                unread: ei
                            }),
                            ...l,
                            children: (0, i.jsx)(_.Z, {
                                avatar: ef(),
                                selected: o,
                                highlighted: ei,
                                muted: null != en && en,
                                subText: em(),
                                name: (0, i.jsx)(y.Z, {
                                    tooltipClassName: W.overflowTooltip,
                                    children: ev
                                }),
                                decorators: t.isSystemDM()
                                    ? (0, i.jsx)(C.Z, {
                                          className: W.decorator,
                                          type: C.Z.Types.SYSTEM_DM,
                                          verified: !0
                                      })
                                    : null
                            })
                        }),
                        er ? (0, i.jsx)(q, {}) : null,
                        (0, i.jsx)(K, {
                            'aria-label': eg ? F.intl.string(F.t['26C4oq']) : F.intl.string(F.t.jsvgc3),
                            onClick: eg ? ep : es,
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
        r = (0, h.e7)([U.default], () => U.default.getUser(t.getRecipientId())),
        { isStatusIndicatorEnabled: a, isTypingIndicatorEnabled: o, isFacepileEnabled: s } = j.Z.useExperiment({ location: 'private_channel' }, { autoTrackExposure: !0 }),
        c = null == r ? void 0 : r.id,
        u = (0, h.cj)(
            [L.Z, w.Z],
            () => {
                let e;
                if (t.isMultiUserDM()) {
                    if (a) {
                        let n = L.Z.getState().statuses;
                        t.recipients.some((e) => n[e] === V.Skl.ONLINE) && (e = V.Skl.ONLINE);
                    }
                } else null != c && (e = L.Z.getStatus(c));
                return {
                    status: e,
                    activities: null != c ? L.Z.getActivities(c) : null,
                    applicationStream: null != c ? w.Z.getAnyStreamForUser(c) : null,
                    isMobile: null != c && L.Z.isMobileOnline(c)
                };
            },
            [t, c, a]
        ),
        d = (0, h.e7)(
            [U.default, O.Z],
            () => {
                if (t.isMultiUserDM())
                    return (
                        !!o &&
                        G.default.keys(O.Z.getTypingUsers(t.id)).some((e) => {
                            var t;
                            return e !== (null === (t = U.default.getCurrentUser()) || void 0 === t ? void 0 : t.id);
                        })
                    );
                if (null != r) return O.Z.isTyping(t.id, t.getRecipientId());
                return !1;
            },
            [t, r, o]
        ),
        { recentActivityStatusEnabled: p } = (0, M.U)({ location: 'PrivateChannel' }),
        m = (0, S.Z)(null == r ? void 0 : r.id);
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
              entry: p ? m[0] : void 0,
              isTyping: d,
              ...l,
              ...u
          });
};
