"use strict";
n(653041), n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(913527),
  o = n.n(i),
  c = n(920906),
  d = n(831209),
  u = n(149765),
  m = n(442837),
  h = n(481060),
  g = n(787014),
  x = n(412899),
  _ = n(607070),
  E = n(447003),
  f = n(605436),
  C = n(621516),
  T = n(430824),
  N = n(186523),
  I = n(585483),
  S = n(70956),
  p = n(709054),
  v = n(961675),
  M = n(883429),
  j = n(993259),
  A = n(109434),
  R = n(456269),
  O = n(228392),
  b = n(432771),
  Z = n(538366),
  L = n(470623),
  P = n(710352),
  D = n(981631),
  y = n(689938),
  U = n(152505);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let w = {
    width: 28,
    height: 28
  },
  H = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  k = e => {
    (0, O.e5)({
      onboardingCTA: e
    })
  };
class B {
  addStep(e) {
    ++this.currentIndex, this.steps.push({
      index: this.currentIndex,
      ...e
    }), e.isDone && this.completedSteps++
  }
  getSteps() {
    return this.steps
  }
  isAllDone() {
    return this.steps.every(e => e.isDone)
  }
  constructor() {
    F(this, "currentIndex", 0), F(this, "steps", []), F(this, "completedSteps", 0)
  }
}
let G = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        k(P.ZI.GUIDELINES), g.ZP.open(e.id, void 0, D.ZfP.TOPIC)
      },
      isDone: t
    }
  },
  z = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        k(P.ZI.TAGS), g.ZP.open(e.id), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("21971")]).then(n.bind(n, 201049));
          return n => (0, s.jsx)(t, {
            ...n,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  V = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        k(P.ZI.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("80404")]).then(n.bind(n, 158586));
          return n => (0, s.jsx)(t, {
            ...n,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  W = (e, t, l) => ({
    name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? y.Z.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != l && (e.preventDefault(), e.stopPropagation(), (0, O.qz)(), (0, h.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, 740696));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: l
          })
        }))
      }
    }),
    clickHandler: () => {
      k(P.ZI.CREATE_POST), I.S.dispatch(D.CkL.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  q = (e, t) => l.useCallback(() => (t(!1), M.Z.hideAdminOnboarding(e, !0)), [e, t]),
  K = e => {
    let t = p.default.extractTimestamp(e);
    return o()().isBefore(o()(t).add(o().duration(15, "days")))
  },
  Y = (e, t, n) => {
    l.useEffect(() => {
      !e && n(!t)
    }, [e, n, t])
  },
  X = (e, t, n, s) => {
    let a = l.useRef(0);
    l.useEffect(() => (n || !e || t ? clearTimeout(a.current) : a.current = setTimeout(() => {
      s()
    }, 60 * S.Z.Millis.SECOND), () => clearTimeout(a.current)), [e, t, s, n])
  },
  J = (e, t, n) => {
    l.useEffect(() => {
      e && t && n()
    }, [])
  },
  Q = e => {
    let {
      isAllDone: t,
      isVisible: n,
      canManageChannel: s,
      guildId: a,
      channel: r
    } = e, i = (0, m.e7)([T.Z], () => null != a ? T.Z.getRoles(a) : void 0), o = l.useCallback(() => {
      I.S.dispatch(D.CkL.REMEASURE_TARGET)
    }, []);
    l.useEffect(() => {
      o()
    }, [o, t, n, s, i, r.id, r.permissionOverwrites])
  },
  $ = () => {
    let [e, t] = l.useState(!0), n = (0, m.e7)([_.Z], () => _.Z.useReducedMotion);
    return {
      transitions: (0, c.useTransition)(e, {
        keys: e => e ? "shown" : "hidden",
        config: en,
        from: {
          opacity: 0
        },
        enter: {
          opacity: 1
        },
        leave: {
          opacity: 0
        },
        unique: !0,
        immediate: n
      }),
      setVisible: t
    }
  },
  ee = e => {
    let t = (0, m.e7)([_.Z], () => _.Z.useReducedMotion);
    return (0, c.useTransition)(e, {
      from: {
        maxHeight: 0
      },
      enter: {
        maxHeight: 500
      },
      leave: {
        maxHeight: 0
      },
      config: {
        duration: 200
      },
      immediate: t
    })
  },
  et = e => {
    let {
      guild: t,
      roles: n
    } = e;
    return (0, s.jsx)("div", {
      className: U.rolesList,
      "aria-label": y.Z.Messages.ROLES_LIST.format({
        numRoles: n.length
      }),
      children: n.map(e => (0, s.jsx)(x.UB, {
        role: e,
        canRemove: !1,
        onRemove: D.VqG,
        guildId: t.id,
        className: U.rolePill
      }, e.id))
    })
  },
  en = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  es = e => {
    let {
      guild: t,
      channel: a,
      hasAnyThread: r,
      handleHide: i
    } = e, [o, c] = l.useState(!1), d = (0, b.c)(a.id), g = (0, m.e7)([v.Z], () => v.Z.hasHidden(a.id)), x = function(e, t, a, r) {
      let i = null == e ? void 0 : e.id,
        o = (0, m.e7)([T.Z], () => null != i ? T.Z.getRoles(i) : void 0);
      return l.useMemo(() => {
        let l = new B,
          i = (null == t ? void 0 : t.isMediaChannel()) === !0;
        return null != e && null != t && !i && null != o && l.addStep(function(e, t, l, a) {
          let r = (0, E.Z)(l) ? u.$e(D.Plq.VIEW_CHANNEL, D.Plq.SEND_MESSAGES) : D.Plq.SEND_MESSAGES,
            i = null != e ? (0, j.E$)(e, t, l, r).filter(t => l.permissionOverwrites.hasOwnProperty(t.id) || (0, f.pM)(e.id, t.id)) : [],
            o = i.length > 0,
            c = i.some(t => (0, f.pM)(e.id, t.id));
          return {
            name: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
            description: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
            isDone: o && c,
            shouldWarn: o && !c,
            children: o ? (0, s.jsx)(et, {
              guild: e,
              roles: i
            }) : null,
            clickHandler: () => {
              k(P.ZI.PERMISSIONS), (0, h.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([n.e("99387"), n.e("78704")]).then(n.bind(n, 560602));
                return a(!0), n => (0, s.jsx)(t, {
                  ...n,
                  channel: l,
                  guild: e,
                  permission: r,
                  currentSelectedRoles: i
                })
              }, {
                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                onCloseRequest: D.VqG,
                onCloseCallback: () => a(!1)
              })
            }
          }
        }(e, o, t, r)), !i && l.addStep(G(t)), l.addStep(z(t)), l.addStep(V(t)), l.addStep(W(a, i, null == e ? void 0 : e.id)), l
      }, [t, e, o, a, r])
    }(t, a, r, c), _ = x.isAllDone();
    return X(_, d || g || !K(a.id), o, i), {
      onboardingSteps: x,
      isHidden: g,
      isDismissed: d,
      isAllDone: _
    }
  },
  el = () => l.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  ea = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: t,
      className: U.closeButton,
      "aria-label": y.Z.Messages.DISMISS,
      children: (0, s.jsx)(h.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: U.closeIcon
      })
    })
  },
  er = e => {
    let {
      expanded: t,
      onClick: n
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: n,
      className: U.closeButton,
      "aria-label": t ? y.Z.Messages.COLLAPSE : y.Z.Messages.EXPAND,
      children: t ? (0, s.jsx)(h.MinimizeIcon, {
        size: "xs",
        color: "currentColor",
        className: U.closeIcon
      }) : (0, s.jsx)(h.MaximizeIcon, {
        size: "xs",
        color: "currentColor",
        className: U.closeIcon
      })
    })
  };
t.Z = e => {
  let {
    hasAnyThread: t,
    channel: n
  } = e, {
    onboardingExpanded: a
  } = (0, L.xH)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: i
  } = (0, A.H)(n.id), o = (0, m.e7)([T.Z], () => T.Z.getGuild(n.getGuildId())), u = (0, R.r_)(n), {
    transitions: g,
    setVisible: x
  } = $(), _ = ee(a), E = el(), f = q(n.id, x), {
    onboardingSteps: I,
    isDismissed: S,
    isHidden: p,
    isAllDone: v
  } = es({
    guild: o,
    channel: n,
    hasAnyThread: t,
    handleHide: f
  }), M = !p && !S, j = (0, L.AF)(), O = n.isMediaChannel(), b = e => j.getState().setOnboardingExpanded(e);
  return (J(v, M, f), Q({
    isAllDone: v,
    isVisible: M,
    canManageChannel: u,
    guildId: null == o ? void 0 : o.id,
    channel: n
  }), Y(S, p, x), l.useEffect(() => {
    (!t || !M) && b(!0)
  }, []), null == o) ? null : M && u ? O ? t ? null : (0, s.jsx)(C.Z, {
    channel: n
  }) : (0, s.jsx)(s.Fragment, {
    children: g((e, t) => t ? (0, s.jsx)(c.animated.div, {
      style: e,
      className: U.container,
      children: (0, s.jsxs)("div", {
        className: U.wrapper,
        children: [(0, s.jsx)("div", {
          className: U.headerRow,
          children: (0, s.jsxs)(h.HeadingLevel, {
            component: (0, s.jsx)(h.Heading, {
              variant: "heading-md/semibold",
              children: y.Z.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(h.Heading, {
              variant: "heading-md/medium",
              className: U.header,
              children: y.Z.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: I.completedSteps.toString(),
                numSteps: I.steps.length.toString()
              })
            }), (0, s.jsxs)(h.Text, {
              variant: "text-xs/normal",
              className: U.visibilityInfo,
              children: [(0, s.jsx)(h.CircleInformationIcon, {
                size: "xxs",
                color: "currentColor",
                className: U.icon
              }), y.Z.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(er, {
              expanded: a,
              onClick: () => b(!a)
            }), (0, s.jsx)(ea, {
              handleHide: f
            })]
          })
        }), _((e, t) => t ? (0, s.jsx)(c.animated.div, {
          style: e,
          className: U.listContainer,
          children: (0, s.jsx)("ol", {
            className: U.checklist,
            children: I.getSteps().map(e => (0, s.jsxs)(h.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => E(e),
              className: r()(U.stepContainer, {
                [U.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(h.CircleExclamationPointIcon, {
                size: "custom",
                width: 20,
                height: 20,
                color: d.Z.STATUS_DANGER,
                className: U.stepStatus
              }) : e.isDone ? (0, s.jsx)(h.IconBadge, {
                color: d.Z.STATUS_POSITIVE_BACKGROUND,
                icon: h.CheckmarkLargeIcon,
                style: H,
                className: U.stepStatus
              }) : (0, s.jsx)(h.IconBadge, {
                disableColor: !0,
                icon: (0, h.makeIconCompat)(N.Z),
                style: w,
                className: r()(U.stepStatus, U.completed)
              }), (0, s.jsxs)("div", {
                className: U.step,
                children: [(0, s.jsx)(h.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: U.stepName,
                  children: e.name
                }), (0, s.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: U.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(h.ChevronSmallRightIcon, {
                size: "custom",
                color: "currentColor",
                width: 12,
                className: U.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(Z.Z, {
    channelName: n.name,
    guildId: n.guild_id,
    tagFilter: i,
    channel: n
  })
}