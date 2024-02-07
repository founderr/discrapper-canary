"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("917351"),
  u = n("446674"),
  d = n("77078"),
  o = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  I = n("923959"),
  _ = n("305961"),
  h = n("683911"),
  T = n("476765"),
  v = n("354023"),
  N = n("686904"),
  S = n("398604"),
  m = n("322224"),
  g = n("152475"),
  C = n("799547"),
  x = n("189443"),
  p = n("841363"),
  A = n("558286"),
  R = n("560309"),
  L = n("151859"),
  M = n("299342"),
  O = n("499950"),
  D = n("27754"),
  y = n("745049"),
  j = n("49111"),
  V = n("782340"),
  U = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: G,
  INVITE_OPTIONS_UNLIMITED: P
} = v.default;

function w(e) {
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
    editBroadcastInfoData: o,
    isEdit: E,
    formErrors: f,
    transitionState: I,
    loading: _,
    error: v,
    onChange: N,
    onSave: m,
    onClose: g,
    createdEvent: C
  } = e, x = (0, T.useUID)(), p = i.useRef(n), D = !(0, r.isEqual)(p.current, n), y = i.useMemo(() => [{
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
  }], [f, E, D]), j = Object.keys(l).length, G = (0, S.isGuildScheduledEventActive)(n), P = e => Math.max(0, Math.min(e, j - 1)), [F, H] = i.useState(G ? 1 : 0), [b, k] = i.useState(!1), B = i.useMemo(() => y.slice(0, F + 1).map(e => e.valid).every(Boolean), [y, F]), z = F >= y.length ? 3 : y[P(F)].slideId, Z = 3 === z, Y = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Y(Z);
  let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    W = i.useRef(null),
    K = e => {
      k(!1), H(P(e))
    };
  i.useEffect(() => {
    null != C && K(3)
  }, [null == C ? void 0 : C.id, K]);
  let q = () => {
      if (!B) return;
      let e = 2 === z;
      e ? m() : Z ? g() : K(F + 1)
    },
    Q = () => {
      K(F - 1)
    },
    J = V.default.Messages.NEXT;
  return 2 === z && (J = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(d.ModalRoot, {
      transitionState: I,
      "aria-labelledby": x,
      size: d.ModalSize.DYNAMIC,
      children: [!X && Z ? (0, s.jsx)(w, {
        modal: W.current
      }) : null, (0, s.jsxs)(d.ModalContent, {
        className: U.content,
        scrollerRef: W,
        children: [!Z && (0, s.jsx)(h.default, {
          steps: y.map(e => e.label),
          stepIndex: F,
          onClick: e => {
            e < F ? Q() : e > F && q()
          }
        }), (0, s.jsxs)(d.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            k(e === z)
          },
          children: [(0, s.jsx)(d.Slide, {
            id: 0,
            children: (0, s.jsx)(R.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: b,
              onChange: N
            })
          }), (0, s.jsx)(d.Slide, {
            id: 1,
            children: (0, s.jsx)(M.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: N,
              error: v,
              validationErrorMessage: f.schedule,
              isSlideReady: b
            })
          }), (0, s.jsx)(d.Slide, {
            id: 2,
            children: (0, s.jsx)(L.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: v
            })
          }), (0, s.jsx)(d.Slide, {
            id: 3,
            children: (0, s.jsx)(O.default, {
              onClose: g,
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
            onClick: g,
            children: V.default.Messages.CANCEL
          }), (0, s.jsx)(d.Button, {
            onClick: q,
            disabled: !B,
            className: U.button,
            submitting: _,
            children: J
          })]
        }), 0 !== z && (0, s.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          onClick: Q,
          color: d.Button.Colors.LINK,
          children: V.default.Messages.BACK
        })]
      })]
    })
  })
}

function H(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(t)), h = (0, u.useStateFromStores)([S.default], () => S.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([I.default], () => I.default.getDefaultChannel(t), [t]), v = (0, x.getInitialGuildEventData)(h, T), [A, R] = i.useState(v), [L] = i.useState((0, x.isEditingEvent)(h)), [M, O] = i.useState(null), U = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && o.default.createInvite(l, {
      max_age: G.value,
      max_uses: P.value
    }, j.InstantInviteSources.GUILD_EVENTS), n ? O(e) : c()
  }, w = (0, f.default)(E, null == h ? void 0 : h.id, A), [H, {
    loading: b,
    error: k
  }] = (0, N.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: w.broadcastToDirectoryChannels
    };
    if (L && null != l) return await m.default.saveEvent(l, A, t, e), c();
    let n = await m.default.createGuildEvent(A, t, e);
    return U(n.body), n
  }), B = i.useMemo(() => (0, D.default)(A, L), [A, L]);
  return (0, s.jsx)(F, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: w,
    isEdit: L,
    formErrors: B,
    transitionState: a,
    loading: b,
    error: k,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, p.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, C.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== y.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === y.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      R(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == h ? void 0 : h.scheduled_start_time) !== A.scheduledStartTime || h.scheduled_end_time !== A.scheduledEndTime || !(0, r.isEqual)(h.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && L && e ? (0, d.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: V.default.Messages.EDIT_ALL_EVENTS,
          confirmText: V.default.Messages.SAVE_EVENT,
          cancelText: V.default.Messages.NEVERMIND,
          onConfirm: H,
          children: [(0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : H()
    },
    onClose: c,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"