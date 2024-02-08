"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("917351"),
  u = n("446674"),
  o = n("77078"),
  d = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  I = n("923959"),
  _ = n("305961"),
  h = n("683911"),
  T = n("476765"),
  v = n("354023"),
  N = n("686904"),
  m = n("398604"),
  S = n("322224"),
  g = n("152475"),
  C = n("799547"),
  p = n("189443"),
  x = n("841363"),
  A = n("558286"),
  R = n("560309"),
  M = n("151859"),
  L = n("299342"),
  y = n("499950"),
  O = n("27754"),
  D = n("745049"),
  j = n("49111"),
  U = n("782340"),
  V = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: P,
  INVITE_OPTIONS_UNLIMITED: G
} = v.default;

function b(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(E.ConfettiCannonContext);
  return i.useEffect(() => {
    let e = null == t ? void 0 : t.getScrollerNode();
    if (null == e) return;
    let l = e.getBoundingClientRect();
    n({
      position: {
        type: "static-random",
        minValue: {
          x: l.left - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.left + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: -20,
          y: -20
        },
        maxValue: {
          x: -60,
          y: -60
        }
      }
    }, 80), n({
      position: {
        type: "static-random",
        minValue: {
          x: l.right - 100,
          y: l.top - 100
        },
        maxValue: {
          x: l.right + 100,
          y: l.top + 100
        }
      },
      velocity: {
        type: "static-random",
        minValue: {
          x: 20,
          y: -20
        },
        maxValue: {
          x: 60,
          y: -60
        }
      }
    }, 80)
  }, [n, t]), null
}

function F(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: d,
    isEdit: E,
    formErrors: f,
    transitionState: I,
    loading: _,
    error: v,
    onChange: N,
    onSave: S,
    onClose: g,
    createdEvent: C
  } = e, p = (0, T.useUID)(), x = i.useRef(n), O = !(0, r.isEqual)(x.current, n), D = i.useMemo(() => [{
    slideId: 0,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || O),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: U.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, O]), j = Object.keys(l).length, P = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, j - 1)), [F, w] = i.useState(P ? 1 : 0), [k, H] = i.useState(!1), B = i.useMemo(() => D.slice(0, F + 1).map(e => e.valid).every(Boolean), [D, F]), z = F >= D.length ? 3 : D[G(F)].slideId, Y = 3 === z, Z = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Z(Y);
  let K = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    X = i.useRef(null),
    W = e => {
      H(!1), w(G(e))
    };
  i.useEffect(() => {
    null != C && W(3)
  }, [null == C ? void 0 : C.id, W]);
  let q = () => {
      if (!B) return;
      let e = 2 === z;
      e ? S() : Y ? g() : W(F + 1)
    },
    J = () => {
      W(F - 1)
    },
    Q = U.default.Messages.NEXT;
  return 2 === z && (Q = E ? U.default.Messages.SAVE_EVENT : U.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: I,
      "aria-labelledby": p,
      size: o.ModalSize.DYNAMIC,
      children: [!K && Y ? (0, s.jsx)(b, {
        modal: X.current
      }) : null, (0, s.jsxs)(o.ModalContent, {
        className: V.content,
        scrollerRef: X,
        children: [!Y && (0, s.jsx)(h.default, {
          steps: D.map(e => e.label),
          stepIndex: F,
          onClick: e => {
            e < F ? J() : e > F && q()
          }
        }), (0, s.jsxs)(o.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            H(e === z)
          },
          children: [(0, s.jsx)(o.Slide, {
            id: 0,
            children: (0, s.jsx)(R.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: k,
              onChange: N
            })
          }), (0, s.jsx)(o.Slide, {
            id: 1,
            children: (0, s.jsx)(L.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: d,
              onChange: N,
              error: v,
              validationErrorMessage: f.schedule,
              isSlideReady: k
            })
          }), (0, s.jsx)(o.Slide, {
            id: 2,
            children: (0, s.jsx)(M.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: v
            })
          }), (0, s.jsx)(o.Slide, {
            id: 3,
            children: (0, s.jsx)(y.default, {
              onClose: g,
              event: C
            })
          })]
        })]
      }), !Y && (0, s.jsxs)(o.ModalFooter, {
        className: V.footer,
        children: [(0, s.jsxs)("div", {
          className: V.inline,
          children: [(0, s.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: g,
            children: U.default.Messages.CANCEL
          }), (0, s.jsx)(o.Button, {
            onClick: q,
            disabled: !B,
            className: V.button,
            submitting: _,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.MIN,
          onClick: J,
          color: o.Button.Colors.LINK,
          children: U.default.Messages.BACK
        })]
      })]
    })
  })
}

function w(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(t)), h = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([I.default], () => I.default.getDefaultChannel(t), [t]), v = (0, p.getInitialGuildEventData)(h, T), [A, R] = i.useState(v), [M] = i.useState((0, p.isEditingEvent)(h)), [L, y] = i.useState(null), V = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && d.default.createInvite(l, {
      max_age: P.value,
      max_uses: G.value
    }, j.InstantInviteSources.GUILD_EVENTS), n ? y(e) : c()
  }, b = (0, f.default)(E, null == h ? void 0 : h.id, A), [w, {
    loading: k,
    error: H
  }] = (0, N.default)(async () => {
    if (null != L) return;
    let e = {
      broadcastToDirectoryChannels: b.broadcastToDirectoryChannels
    };
    if (M && null != l) return await S.default.saveEvent(l, A, t, e), c();
    let n = await S.default.createGuildEvent(A, t, e);
    return V(n.body), n
  }), B = i.useMemo(() => (0, O.default)(A, M), [A, M]);
  return (0, s.jsx)(F, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: b,
    isEdit: M,
    formErrors: B,
    transitionState: a,
    loading: k,
    error: H,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, x.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, C.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== D.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === D.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      R(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == h ? void 0 : h.scheduled_start_time) !== A.scheduledStartTime || h.scheduled_end_time !== A.scheduledEndTime || !(0, r.isEqual)(h.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && M && e ? (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: U.default.Messages.EDIT_ALL_EVENTS,
          confirmText: U.default.Messages.SAVE_EVENT,
          cancelText: U.default.Messages.NEVERMIND,
          onConfirm: w,
          children: [(0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: U.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: U.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : w()
    },
    onClose: c,
    createdEvent: L
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"