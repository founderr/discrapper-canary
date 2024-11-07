n(653041), n(47120);
var a = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(913527),
    o = n.n(s),
    c = n(100621),
    d = n(831209),
    u = n(149765),
    m = n(442837),
    h = n(481060),
    g = n(787014),
    x = n(412899),
    f = n(447003),
    p = n(605436),
    C = n(621516),
    v = n(430824),
    b = n(186523),
    j = n(585483),
    _ = n(70956),
    I = n(709054),
    T = n(961675),
    N = n(883429),
    S = n(993259),
    w = n(109434),
    y = n(456269),
    E = n(228392),
    R = n(432771),
    P = n(538366),
    M = n(470623),
    k = n(710352),
    Z = n(981631),
    A = n(388032),
    L = n(424373);
function F(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let O = {
        width: 28,
        height: 28
    },
    B = {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    z = (e) => {
        (0, E.e5)({ onboardingCTA: e });
    };
class H {
    addStep(e) {
        ++this.currentIndex,
            this.steps.push({
                index: this.currentIndex,
                ...e
            }),
            e.isDone && this.completedSteps++;
    }
    getSteps() {
        return this.steps;
    }
    isAllDone() {
        return this.steps.every((e) => e.isDone);
    }
    constructor() {
        F(this, 'currentIndex', 0), F(this, 'steps', []), F(this, 'completedSteps', 0);
    }
}
let D = (e) => {
        let t = null != e.topic && e.topic.length > 0;
        return {
            name: A.intl.string(A.t.UgJu1d),
            description: A.intl.string(A.t['3C6/Gx']),
            clickHandler: () => {
                z(k.ZI.GUIDELINES), g.ZP.open(e.id, void 0, Z.ZfP.TOPIC);
            },
            isDone: t
        };
    },
    U = (e) => {
        let t = null != e.availableTags && e.availableTags.length > 0;
        return {
            name: A.intl.string(A.t.xiBFCg),
            description: A.intl.string(A.t.wCv4Oz),
            clickHandler: () => {
                z(k.ZI.TAGS),
                    g.ZP.open(e.id),
                    (0, h.openModalLazy)(async () => {
                        let { default: t } = await n.e('21971').then(n.bind(n, 915774));
                        return (n) =>
                            (0, a.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                guildId: e.guild_id
                            });
                    });
            },
            isDone: t
        };
    },
    V = (e) => {
        let t = null != e.defaultReactionEmoji;
        return {
            name: A.intl.string(A.t.QlyC9v),
            description: A.intl.string(A.t['+50LJi']),
            clickHandler: () => {
                z(k.ZI.DEFAULT_REACTION),
                    (0, h.openModalLazy)(async () => {
                        let { default: t } = await n.e('80404').then(n.bind(n, 158586));
                        return (n) =>
                            (0, a.jsx)(t, {
                                ...n,
                                channel: e
                            });
                    });
            },
            isDone: t
        };
    },
    G = (e, t, i) => ({
        name: A.intl.string(A.t['6A0O6+']),
        description: t
            ? A.intl.string(A.t['8hI5vr'])
            : A.intl.format(A.t.ysxcAw, {
                  onClick: (e) => {
                      null != i &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          (0, E.qz)(),
                          (0, h.openModalLazy)(async () => {
                              let { default: e } = await n.e('18417').then(n.bind(n, 740696));
                              return (t) =>
                                  (0, a.jsx)(e, {
                                      ...t,
                                      guildId: i
                                  });
                          }));
                  }
              }),
        clickHandler: () => {
            z(k.ZI.CREATE_POST), j.S.dispatch(Z.CkL.FOCUS_COMPOSER_TITLE);
        },
        isDone: e
    }),
    W = (e, t) => i.useCallback(() => (t(!1), N.Z.hideAdminOnboarding(e, !0)), [e, t]),
    q = (e) => {
        let t = I.default.extractTimestamp(e);
        return o()().isBefore(o()(t).add(o().duration(15, 'days')));
    },
    K = (e, t, n) => {
        i.useEffect(() => {
            !e && n(!t);
        }, [e, n, t]);
    },
    X = (e, t, n, a) => {
        let r = i.useRef(0);
        i.useEffect(
            () => (
                n || !e || t
                    ? clearTimeout(r.current)
                    : (r.current = setTimeout(() => {
                          a();
                      }, 60 * _.Z.Millis.SECOND)),
                () => clearTimeout(r.current)
            ),
            [e, t, a, n]
        );
    },
    J = (e, t, n) => {
        i.useEffect(() => {
            e && t && n();
        }, []);
    },
    Y = (e) => {
        let { isAllDone: t, isVisible: n, canManageChannel: a, guildId: r, channel: l } = e,
            s = (0, m.e7)([v.Z], () => (null != r ? v.Z.getRoles(r) : void 0)),
            o = i.useCallback(() => {
                j.S.dispatch(Z.CkL.REMEASURE_TARGET);
            }, []);
        i.useEffect(() => {
            o();
        }, [o, t, n, a, s, l.id, l.permissionOverwrites]);
    },
    Q = () => {
        let [e, t] = i.useState(!0);
        return {
            transitions: (0, h.useTransition)(e, {
                keys: (e) => (e ? 'shown' : 'hidden'),
                config: et,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                unique: !0
            }),
            setVisible: t
        };
    },
    $ = (e) =>
        (0, h.useTransition)(e, {
            from: { maxHeight: 0 },
            enter: { maxHeight: 500 },
            leave: { maxHeight: 0 },
            config: { duration: 200 }
        }),
    ee = (e) => {
        let { guild: t, roles: n } = e;
        return (0, a.jsx)('div', {
            className: L.rolesList,
            'aria-label': A.intl.formatToPlainString(A.t.PCs0oq, { numRoles: n.length }),
            children: n.map((e) =>
                (0, a.jsx)(
                    x.UB,
                    {
                        role: e,
                        canRemove: !1,
                        onRemove: Z.VqG,
                        guildId: t.id,
                        className: L.rolePill
                    },
                    e.id
                )
            )
        });
    },
    et = {
        mass: 1,
        tension: 250,
        friction: 18,
        clamp: !0
    },
    en = (e) => {
        let { guild: t, channel: r, hasAnyThread: l, handleHide: s } = e,
            [o, c] = i.useState(!1),
            d = (0, R.c)(r.id),
            g = (0, m.e7)([T.Z], () => T.Z.hasHidden(r.id)),
            x = (function (e, t, r, l) {
                let s = null == e ? void 0 : e.id,
                    o = (0, m.e7)([v.Z], () => (null != s ? v.Z.getRoles(s) : void 0));
                return i.useMemo(() => {
                    let i = new H(),
                        s = (null == t ? void 0 : t.isMediaChannel()) === !0;
                    return (
                        null != e &&
                            null != t &&
                            !s &&
                            null != o &&
                            i.addStep(
                                (function (e, t, i, r) {
                                    let l = (0, f.Z)(i) ? u.$e(Z.Plq.VIEW_CHANNEL, Z.Plq.SEND_MESSAGES) : Z.Plq.SEND_MESSAGES,
                                        s = null != e ? (0, S.E$)(e, t, i, l).filter((t) => i.permissionOverwrites.hasOwnProperty(t.id) || (0, p.pM)(e.id, t.id)) : [],
                                        o = s.length > 0,
                                        c = s.some((t) => (0, p.pM)(e.id, t.id));
                                    return {
                                        name: A.intl.string(A.t['/Ax2go']),
                                        description: A.intl.string(A.t.oMIexc),
                                        isDone: o && c,
                                        shouldWarn: o && !c,
                                        children: o
                                            ? (0, a.jsx)(ee, {
                                                  guild: e,
                                                  roles: s
                                              })
                                            : null,
                                        clickHandler: () => {
                                            z(k.ZI.PERMISSIONS),
                                                (0, h.openModalLazy)(
                                                    async () => {
                                                        let { default: t } = await n.e('78704').then(n.bind(n, 560602));
                                                        return (
                                                            r(!0),
                                                            (n) =>
                                                                (0, a.jsx)(t, {
                                                                    ...n,
                                                                    channel: i,
                                                                    guild: e,
                                                                    permission: l,
                                                                    currentSelectedRoles: s
                                                                })
                                                        );
                                                    },
                                                    {
                                                        modalKey: 'SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY',
                                                        onCloseRequest: Z.VqG,
                                                        onCloseCallback: () => r(!1)
                                                    }
                                                );
                                        }
                                    };
                                })(e, o, t, l)
                            ),
                        !s && i.addStep(D(t)),
                        i.addStep(U(t)),
                        i.addStep(V(t)),
                        i.addStep(G(r, s, null == e ? void 0 : e.id)),
                        i
                    );
                }, [t, e, o, r, l]);
            })(t, r, l, c),
            C = x.isAllDone();
        return (
            X(C, d || g || !q(r.id), o, s),
            {
                onboardingSteps: x,
                isHidden: g,
                isDismissed: d,
                isAllDone: C
            }
        );
    },
    ea = () =>
        i.useCallback((e) => {
            var t;
            null === (t = e.clickHandler) || void 0 === t || t.call(e);
        }, []),
    ei = (e) => {
        let { handleHide: t } = e;
        return (0, a.jsx)(h.Clickable, {
            onClick: t,
            className: L.closeButton,
            'aria-label': A.intl.string(A.t.WAI6xs),
            children: (0, a.jsx)(h.XSmallIcon, {
                size: 'md',
                color: 'currentColor',
                className: L.closeIcon
            })
        });
    },
    er = (e) => {
        let { expanded: t, onClick: n } = e;
        return (0, a.jsx)(h.Clickable, {
            onClick: n,
            className: L.closeButton,
            'aria-label': t ? A.intl.string(A.t.iTcumZ) : A.intl.string(A.t.dcl9MT),
            children: t
                ? (0, a.jsx)(h.MinimizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: L.closeIcon
                  })
                : (0, a.jsx)(h.MaximizeIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: L.closeIcon
                  })
        });
    };
t.Z = (e) => {
    let { hasAnyThread: t, channel: n } = e,
        { onboardingExpanded: r } = (0, M.xH)((e) => {
            let { onboardingExpanded: t } = e;
            return { onboardingExpanded: t };
        }),
        { tagFilter: s } = (0, w.H)(n.id),
        o = (0, m.e7)([v.Z], () => v.Z.getGuild(n.getGuildId())),
        u = (0, y.r_)(n),
        { transitions: g, setVisible: x } = Q(),
        f = $(r),
        p = ea(),
        j = W(n.id, x),
        {
            onboardingSteps: _,
            isDismissed: I,
            isHidden: T,
            isAllDone: N
        } = en({
            guild: o,
            channel: n,
            hasAnyThread: t,
            handleHide: j
        }),
        S = !T && !I,
        E = (0, M.AF)(),
        R = n.isMediaChannel(),
        k = (e) => E.getState().setOnboardingExpanded(e);
    return (J(N, S, j),
    Y({
        isAllDone: N,
        isVisible: S,
        canManageChannel: u,
        guildId: null == o ? void 0 : o.id,
        channel: n
    }),
    K(I, T, x),
    i.useEffect(() => {
        (!t || !S) && k(!0);
    }, []),
    null == o)
        ? null
        : S && u
          ? R
              ? t
                  ? null
                  : (0, a.jsx)(C.Z, { channel: n })
              : (0, a.jsx)(a.Fragment, {
                    children: g((e, t) =>
                        t
                            ? (0, a.jsx)(c.animated.div, {
                                  style: e,
                                  className: L.container,
                                  children: (0, a.jsxs)('div', {
                                      className: L.wrapper,
                                      children: [
                                          (0, a.jsx)('div', {
                                              className: L.headerRow,
                                              children: (0, a.jsxs)(h.HeadingLevel, {
                                                  component: (0, a.jsx)(h.Heading, {
                                                      variant: 'heading-md/semibold',
                                                      children: A.intl.string(A.t.LhlgY2)
                                                  }),
                                                  children: [
                                                      (0, a.jsx)(h.Heading, {
                                                          variant: 'heading-md/medium',
                                                          className: L.header,
                                                          children: A.intl.format(A.t['9L+8b2'], {
                                                              numCompleted: _.completedSteps.toString(),
                                                              numSteps: _.steps.length.toString()
                                                          })
                                                      }),
                                                      (0, a.jsxs)(h.Text, {
                                                          variant: 'text-xs/normal',
                                                          className: L.visibilityInfo,
                                                          children: [
                                                              (0, a.jsx)(h.CircleInformationIcon, {
                                                                  size: 'xxs',
                                                                  color: 'currentColor',
                                                                  className: L.icon
                                                              }),
                                                              A.intl.string(A.t.znhX2d)
                                                          ]
                                                      }),
                                                      (0, a.jsx)(er, {
                                                          expanded: r,
                                                          onClick: () => k(!r)
                                                      }),
                                                      (0, a.jsx)(ei, { handleHide: j })
                                                  ]
                                              })
                                          }),
                                          f((e, t) =>
                                              t
                                                  ? (0, a.jsx)(c.animated.div, {
                                                        style: e,
                                                        className: L.listContainer,
                                                        children: (0, a.jsx)('ol', {
                                                            className: L.checklist,
                                                            children: _.getSteps().map((e) =>
                                                                (0, a.jsxs)(
                                                                    h.Clickable,
                                                                    {
                                                                        tag: 'li',
                                                                        'aria-label': e.name,
                                                                        onClick: () => p(e),
                                                                        className: l()(L.stepContainer, { [L.completed]: e.isDone }),
                                                                        children: [
                                                                            e.shouldWarn
                                                                                ? (0, a.jsx)(h.CircleWarningIcon, {
                                                                                      size: 'custom',
                                                                                      width: 20,
                                                                                      height: 20,
                                                                                      color: d.Z.STATUS_DANGER,
                                                                                      className: L.stepStatus
                                                                                  })
                                                                                : e.isDone
                                                                                  ? (0, a.jsx)(h.IconBadge, {
                                                                                        color: d.Z.STATUS_POSITIVE_BACKGROUND,
                                                                                        icon: h.CheckmarkLargeIcon,
                                                                                        style: B,
                                                                                        className: L.stepStatus
                                                                                    })
                                                                                  : (0, a.jsx)(h.IconBadge, {
                                                                                        disableColor: !0,
                                                                                        icon: (0, h.makeIconCompat)(b.Z),
                                                                                        style: O,
                                                                                        className: l()(L.stepStatus, L.completed)
                                                                                    }),
                                                                            (0, a.jsxs)('div', {
                                                                                className: L.step,
                                                                                children: [
                                                                                    (0, a.jsx)(h.Text, {
                                                                                        variant: 'text-md/medium',
                                                                                        color: e.isDone ? 'header-secondary' : 'header-primary',
                                                                                        className: L.stepName,
                                                                                        children: e.name
                                                                                    }),
                                                                                    (0, a.jsx)(h.Text, {
                                                                                        variant: 'text-sm/normal',
                                                                                        color: 'header-secondary',
                                                                                        className: L.stepDescription,
                                                                                        children: e.description
                                                                                    }),
                                                                                    e.children
                                                                                ]
                                                                            }),
                                                                            (0, a.jsx)(h.ChevronSmallRightIcon, {
                                                                                size: 'custom',
                                                                                color: 'currentColor',
                                                                                width: 12,
                                                                                className: L.stepStatus
                                                                            })
                                                                        ]
                                                                    },
                                                                    'onboard-step-'.concat(e.index)
                                                                )
                                                            )
                                                        })
                                                    })
                                                  : null
                                          )
                                      ]
                                  })
                              })
                            : null
                    )
                })
          : t
            ? null
            : (0, a.jsx)(P.Z, {
                  channelName: n.name,
                  guildId: n.guild_id,
                  tagFilter: s,
                  channel: n
              });
};
