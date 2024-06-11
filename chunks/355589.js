"use strict";
a.r(t), a("653041"), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("913527"),
  o = a.n(i),
  u = a("920906"),
  d = a("831209"),
  c = a("149765"),
  m = a("442837"),
  h = a("481060"),
  f = a("787014"),
  g = a("412899"),
  x = a("607070"),
  C = a("447003"),
  _ = a("605436"),
  p = a("621516"),
  S = a("430824"),
  T = a("263704"),
  E = a("465670"),
  N = a("110456"),
  M = a("928457"),
  A = a("41542"),
  I = a("186523"),
  v = a("692437"),
  j = a("759231"),
  O = a("585483"),
  R = a("70956"),
  b = a("709054"),
  F = a("961675"),
  L = a("883429"),
  P = a("993259"),
  y = a("109434"),
  D = a("456269"),
  U = a("228392"),
  w = a("432771"),
  k = a("538366"),
  H = a("470623"),
  B = a("710352"),
  G = a("981631"),
  V = a("689938"),
  z = a("114317");

function W(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let K = {
    width: 28,
    height: 28
  },
  Y = {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  X = e => {
    (0, U.trackForumOnboardingClicked)({
      onboardingCTA: e
    })
  };
class q {
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
    W(this, "currentIndex", 0), W(this, "steps", []), W(this, "completedSteps", 0)
  }
}
let Z = e => {
    let t = null != e.topic && e.topic.length > 0;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_GUIDELINES_DESCRIPTION,
      clickHandler: () => {
        X(B.ForumOnboardingCTAs.GUIDELINES), f.default.open(e.id, void 0, G.ChannelSettingsSubsections.TOPIC)
      },
      isDone: t
    }
  },
  Q = e => {
    let t = null != e.availableTags && e.availableTags.length > 0;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_TAGS_DESCRIPTION,
      clickHandler: () => {
        X(B.ForumOnboardingCTAs.TAGS), f.default.open(e.id), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("99387"), a.e("21971")]).then(a.bind(a, "201049"));
          return a => (0, s.jsx)(t, {
            ...a,
            channelId: e.id,
            guildId: e.guild_id
          })
        })
      },
      isDone: t
    }
  },
  J = e => {
    let t = null != e.defaultReactionEmoji;
    return {
      name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_TITLE,
      description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_DEFAULT_REACTION_DESCRIPTION,
      clickHandler: () => {
        X(B.ForumOnboardingCTAs.DEFAULT_REACTION), (0, h.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([a.e("99387"), a.e("80404")]).then(a.bind(a, "158586"));
          return a => (0, s.jsx)(t, {
            ...a,
            channel: e
          })
        })
      },
      isDone: t
    }
  },
  $ = (e, t, n) => ({
    name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_TITLE,
    description: t ? V.default.Messages.MEDIA_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION : V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_FIRST_POST_DESCRIPTION.format({
      onClick: e => {
        null != n && (e.preventDefault(), e.stopPropagation(), (0, U.trackForumUpsellModalViewed)(), (0, h.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([a.e("99387"), a.e("18417")]).then(a.bind(a, "740696"));
          return t => (0, s.jsx)(e, {
            ...t,
            guildId: n
          })
        }))
      }
    }),
    clickHandler: () => {
      X(B.ForumOnboardingCTAs.CREATE_POST), O.ComponentDispatch.dispatch(G.ComponentActions.FOCUS_COMPOSER_TITLE)
    },
    isDone: e
  }),
  ee = (e, t) => n.useCallback(() => (t(!1), L.default.hideAdminOnboarding(e, !0)), [e, t]),
  et = e => {
    let t = b.default.extractTimestamp(e);
    return o()().isBefore(o()(t).add(o().duration(15, "days")))
  },
  ea = (e, t, a) => {
    n.useEffect(() => {
      !e && a(!t)
    }, [e, a, t])
  },
  es = (e, t, a, s) => {
    let l = n.useRef(0);
    n.useEffect(() => (a || !e || t ? clearTimeout(l.current) : l.current = setTimeout(() => {
      s()
    }, 60 * R.default.Millis.SECOND), () => clearTimeout(l.current)), [e, t, s, a])
  },
  en = (e, t, a) => {
    n.useEffect(() => {
      e && t && a()
    }, [])
  },
  el = e => {
    let {
      isAllDone: t,
      isVisible: a,
      canManageChannel: s,
      guildId: l,
      channel: r
    } = e, i = (0, m.useStateFromStores)([S.default], () => null != l ? S.default.getRoles(l) : void 0), o = n.useCallback(() => {
      O.ComponentDispatch.dispatch(G.ComponentActions.REMEASURE_TARGET)
    }, []);
    n.useEffect(() => {
      o()
    }, [o, t, a, s, i, r.id, r.permissionOverwrites])
  },
  er = () => {
    let [e, t] = n.useState(!0), a = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion);
    return {
      transitions: (0, u.useTransition)(e, {
        keys: e => e ? "shown" : "hidden",
        config: eu,
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
        immediate: a
      }),
      setVisible: t
    }
  },
  ei = e => {
    let t = (0, m.useStateFromStores)([x.default], () => x.default.useReducedMotion);
    return (0, u.useTransition)(e, {
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
  eo = e => {
    let {
      guild: t,
      roles: a
    } = e;
    return (0, s.jsx)("div", {
      className: z.rolesList,
      "aria-label": V.default.Messages.ROLES_LIST.format({
        numRoles: a.length
      }),
      children: a.map(e => (0, s.jsx)(g.MemberRole, {
        role: e,
        canRemove: !1,
        onRemove: G.NOOP_NULL,
        guildId: t.id,
        className: z.rolePill
      }, e.id))
    })
  },
  eu = {
    mass: 1,
    tension: 250,
    friction: 18,
    clamp: !0
  },
  ed = e => {
    let {
      guild: t,
      channel: l,
      hasAnyThread: r,
      handleHide: i
    } = e, [o, u] = n.useState(!1), d = (0, w.isOnboardingDismissed)(l.id), f = (0, m.useStateFromStores)([F.default], () => F.default.hasHidden(l.id)), g = function(e, t, l, r) {
      let i = null == e ? void 0 : e.id,
        o = (0, m.useStateFromStores)([S.default], () => null != i ? S.default.getRoles(i) : void 0);
      return n.useMemo(() => {
        let n = new q,
          i = (null == t ? void 0 : t.isMediaChannel()) === !0;
        return null != e && null != t && !i && null != o && n.addStep(function(e, t, n, l) {
          let r = (0, C.default)(n) ? c.combine(G.Permissions.VIEW_CHANNEL, G.Permissions.SEND_MESSAGES) : G.Permissions.SEND_MESSAGES,
            i = null != e ? (0, P.getAllExistingRolesWithPermission)(e, t, n, r).filter(t => n.permissionOverwrites.hasOwnProperty(t.id) || (0, _.isEveryoneRoleId)(e.id, t.id)) : [],
            o = i.length > 0,
            u = i.some(t => (0, _.isEveryoneRoleId)(e.id, t.id));
          return {
            name: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_TITLE,
            description: V.default.Messages.FORUM_CHANNEL_ONBOARDING_CHECKLIST_PERMISSION_DESCRIPTION,
            isDone: o && u,
            shouldWarn: o && !u,
            children: o ? (0, s.jsx)(eo, {
              guild: e,
              roles: i
            }) : null,
            clickHandler: () => {
              X(B.ForumOnboardingCTAs.PERMISSIONS), (0, h.openModalLazy)(async () => {
                let {
                  default: t
                } = await Promise.all([a.e("99387"), a.e("78704")]).then(a.bind(a, "560602"));
                return l(!0), a => (0, s.jsx)(t, {
                  ...a,
                  channel: n,
                  guild: e,
                  permission: r,
                  currentSelectedRoles: i
                })
              }, {
                modalKey: "SEND_MESSAGE_ROLE_PERMISSION_FIX_MODAL_KEY",
                onCloseRequest: G.NOOP_NULL,
                onCloseCallback: () => l(!1)
              })
            }
          }
        }(e, o, t, r)), !i && n.addStep(Z(t)), n.addStep(Q(t)), n.addStep(J(t)), n.addStep($(l, i, null == e ? void 0 : e.id)), n
      }, [t, e, o, l, r])
    }(t, l, r, u), x = g.isAllDone();
    return es(x, d || f || !et(l.id), o, i), {
      onboardingSteps: g,
      isHidden: f,
      isDismissed: d,
      isAllDone: x
    }
  },
  ec = () => n.useCallback(e => {
    var t;
    null === (t = e.clickHandler) || void 0 === t || t.call(e)
  }, []),
  em = e => {
    let {
      handleHide: t
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: t,
      className: z.closeButton,
      "aria-label": V.default.Messages.DISMISS,
      children: (0, s.jsx)(E.default, {
        className: z.closeIcon
      })
    })
  },
  eh = e => {
    let {
      expanded: t,
      onClick: a
    } = e;
    return (0, s.jsx)(h.Clickable, {
      onClick: a,
      className: z.closeButton,
      "aria-label": t ? V.default.Messages.COLLAPSE : V.default.Messages.EXPAND,
      children: t ? (0, s.jsx)(N.default, {
        className: z.closeIcon
      }) : (0, s.jsx)(M.default, {
        className: z.closeIcon
      })
    })
  };
t.default = e => {
  let {
    hasAnyThread: t,
    channel: a
  } = e, {
    onboardingExpanded: l
  } = (0, H.useForumPostComposerStore)(e => {
    let {
      onboardingExpanded: t
    } = e;
    return {
      onboardingExpanded: t
    }
  }), {
    tagFilter: i
  } = (0, y.useForumChannelStore)(a.id), o = (0, m.useStateFromStores)([S.default], () => S.default.getGuild(a.getGuildId())), c = (0, D.useCanManageChannel)(a), {
    transitions: f,
    setVisible: g
  } = er(), x = ei(l), C = ec(), _ = ee(a.id, g), {
    onboardingSteps: E,
    isDismissed: N,
    isHidden: M,
    isAllDone: O
  } = ed({
    guild: o,
    channel: a,
    hasAnyThread: t,
    handleHide: _
  }), R = !M && !N, b = (0, H.useForumPostComposerStoreApi)(), F = a.isMediaChannel(), L = e => b.getState().setOnboardingExpanded(e);
  return (en(O, R, _), el({
    isAllDone: O,
    isVisible: R,
    canManageChannel: c,
    guildId: null == o ? void 0 : o.id,
    channel: a
  }), ea(N, M, g), n.useEffect(() => {
    (!t || !R) && L(!0)
  }, []), null == o) ? null : R && c ? F ? t ? null : (0, s.jsx)(p.default, {
    channel: a
  }) : (0, s.jsx)(s.Fragment, {
    children: f((e, t) => t ? (0, s.jsx)(u.animated.div, {
      style: e,
      className: z.container,
      children: (0, s.jsxs)("div", {
        className: z.wrapper,
        children: [(0, s.jsx)("div", {
          className: z.headerRow,
          children: (0, s.jsxs)(h.HeadingLevel, {
            component: (0, s.jsx)(h.Heading, {
              variant: "heading-md/semibold",
              children: V.default.Messages.GET_STARTED
            }),
            children: [(0, s.jsx)(h.Heading, {
              variant: "heading-md/medium",
              className: z.header,
              children: V.default.Messages.FORUM_CHANNEL_ONBOARDING_COMPLETED_COUNT.format({
                numCompleted: E.completedSteps.toString(),
                numSteps: E.steps.length.toString()
              })
            }), (0, s.jsxs)(h.Text, {
              variant: "text-xs/normal",
              className: z.visibilityInfo,
              children: [(0, s.jsx)(A.default, {
                width: 12,
                height: 12,
                className: z.icon
              }), V.default.Messages.FORUM_CHANNEL_ONBOARDING_VISIBILITY]
            }), (0, s.jsx)(eh, {
              expanded: l,
              onClick: () => L(!l)
            }), (0, s.jsx)(em, {
              handleHide: _
            })]
          })
        }), x((e, t) => t ? (0, s.jsx)(u.animated.div, {
          style: e,
          className: z.listContainer,
          children: (0, s.jsx)("ol", {
            className: z.checklist,
            children: E.getSteps().map(e => (0, s.jsxs)(h.Clickable, {
              tag: "li",
              "aria-label": e.name,
              onClick: () => C(e),
              className: r()(z.stepContainer, {
                [z.completed]: e.isDone
              }),
              children: [e.shouldWarn ? (0, s.jsx)(j.default, {
                color: d.default.STATUS_DANGER,
                className: z.stepStatus
              }) : e.isDone ? (0, s.jsx)(h.IconBadge, {
                color: d.default.STATUS_POSITIVE_BACKGROUND,
                icon: T.default,
                style: Y,
                className: z.stepStatus
              }) : (0, s.jsx)(h.IconBadge, {
                disableColor: !0,
                icon: I.default,
                style: K,
                className: r()(z.stepStatus, z.completed)
              }), (0, s.jsxs)("div", {
                className: z.step,
                children: [(0, s.jsx)(h.Text, {
                  variant: "text-md/medium",
                  color: e.isDone ? "header-secondary" : "header-primary",
                  className: z.stepName,
                  children: e.name
                }), (0, s.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  color: "header-secondary",
                  className: z.stepDescription,
                  children: e.description
                }), e.children]
              }), (0, s.jsx)(v.default, {
                width: 12,
                className: z.stepStatus
              })]
            }, "onboard-step-".concat(e.index)))
          })
        }) : null)]
      })
    }) : null)
  }) : t ? null : (0, s.jsx)(k.default, {
    channelName: a.name,
    guildId: a.guild_id,
    tagFilter: i,
    channel: a
  })
}