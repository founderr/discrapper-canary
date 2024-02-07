"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007");
var l, a, s = n("37983"),
  r = n("884691"),
  i = n("917351"),
  u = n("446674"),
  d = n("77078"),
  o = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  I = n("923959"),
  h = n("305961"),
  _ = n("683911"),
  T = n("476765"),
  N = n("354023"),
  v = n("686904"),
  m = n("398604"),
  g = n("322224"),
  S = n("152475"),
  C = n("799547"),
  x = n("189443"),
  p = n("841363"),
  A = n("558286"),
  L = n("560309"),
  O = n("151859"),
  M = n("299342"),
  R = n("499950"),
  D = n("27754"),
  y = n("745049"),
  j = n("49111"),
  V = n("782340"),
  U = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: P,
  INVITE_OPTIONS_UNLIMITED: G
} = N.default;

function H(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = r.useContext(E.ConfettiCannonContext);
  return r.useEffect(() => {
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

function w(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: o,
    isEdit: E,
    formErrors: f,
    transitionState: I,
    loading: h,
    error: N,
    onChange: v,
    onSave: g,
    onClose: S,
    createdEvent: C
  } = e, x = (0, T.useUID)(), p = r.useRef(n), D = !(0, i.isEqual)(p.current, n), y = r.useMemo(() => [{
    slideId: 0,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || D),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, D]), j = Object.keys(l).length, P = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, j - 1)), [w, B] = r.useState(P ? 1 : 0), [F, b] = r.useState(!1), k = r.useMemo(() => y.slice(0, w + 1).map(e => e.valid).every(Boolean), [y, w]), z = w >= y.length ? 3 : y[G(w)].slideId, Z = 3 === z, Y = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Y(Z);
  let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    W = r.useRef(null),
    q = e => {
      b(!1), B(G(e))
    };
  r.useEffect(() => {
    null != C && q(3)
  }, [null == C ? void 0 : C.id, q]);
  let K = () => {
      if (!k) return;
      let e = 2 === z;
      e ? g() : Z ? S() : q(w + 1)
    },
    J = () => {
      q(w - 1)
    },
    Q = V.default.Messages.NEXT;
  return 2 === z && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(d.ModalRoot, {
      transitionState: I,
      "aria-labelledby": x,
      size: d.ModalSize.DYNAMIC,
      children: [!X && Z ? (0, s.jsx)(H, {
        modal: W.current
      }) : null, (0, s.jsxs)(d.ModalContent, {
        className: U.content,
        scrollerRef: W,
        children: [!Z && (0, s.jsx)(_.default, {
          steps: y.map(e => e.label),
          stepIndex: w,
          onClick: e => {
            e < w ? J() : e > w && K()
          }
        }), (0, s.jsxs)(d.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            b(e === z)
          },
          children: [(0, s.jsx)(d.Slide, {
            id: 0,
            children: (0, s.jsx)(L.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: F,
              onChange: v
            })
          }), (0, s.jsx)(d.Slide, {
            id: 1,
            children: (0, s.jsx)(M.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: v,
              error: N,
              validationErrorMessage: f.schedule,
              isSlideReady: F
            })
          }), (0, s.jsx)(d.Slide, {
            id: 2,
            children: (0, s.jsx)(O.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: N
            })
          }), (0, s.jsx)(d.Slide, {
            id: 3,
            children: (0, s.jsx)(R.default, {
              onClose: S,
              event: C
            })
          })]
        })]
      }), !Z && (0, s.jsxs)(d.ModalFooter, {
        className: U.footer,
        children: [(0, s.jsxs)("div", {
          className: U.inline,
          children: [(0, s.jsx)(d.Button, {
            color: d.Button.Colors.PRIMARY,
            onClick: S,
            children: V.default.Messages.CANCEL
          }), (0, s.jsx)(d.Button, {
            onClick: K,
            disabled: !k,
            className: U.button,
            submitting: h,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          onClick: J,
          color: d.Button.Colors.LINK,
          children: V.default.Messages.BACK
        })]
      })]
    })
  })
}

function B(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([h.default], () => h.default.getGuild(t)), _ = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([I.default], () => I.default.getDefaultChannel(t), [t]), N = (0, x.getInitialGuildEventData)(_, T), [A, L] = r.useState(N), [O] = r.useState((0, x.isEditingEvent)(_)), [M, R] = r.useState(null), U = e => {
    var t;
    let n = (0, S.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && o.default.createInvite(l, {
      max_age: P.value,
      max_uses: G.value
    }, j.InstantInviteSources.GUILD_EVENTS), n ? R(e) : c()
  }, H = (0, f.default)(E, null == _ ? void 0 : _.id, A), [B, {
    loading: F,
    error: b
  }] = (0, v.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: H.broadcastToDirectoryChannels
    };
    if (O && null != l) return await g.default.saveEvent(l, A, t, e), c();
    let n = await g.default.createGuildEvent(A, t, e);
    return U(n.body), n
  }), k = r.useMemo(() => (0, D.default)(A, O), [A, O]);
  return (0, s.jsx)(w, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: H,
    isEdit: O,
    formErrors: k,
    transitionState: a,
    loading: F,
    error: b,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, p.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, C.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      L(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == _ ? void 0 : _.scheduled_start_time) !== A.scheduledStartTime || _.scheduled_end_time !== A.scheduledEndTime || !(0, i.isEqual)(_.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && O && e ? (0, d.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: V.default.Messages.EDIT_ALL_EVENTS,
          confirmText: V.default.Messages.SAVE_EVENT,
          cancelText: V.default.Messages.NEVERMIND,
          onConfirm: B,
          children: [(0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : B()
    },
    onClose: c,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"