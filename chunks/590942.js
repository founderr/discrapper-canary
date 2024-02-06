"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  m = n("398604"),
  S = n("322224"),
  g = n("152475"),
  C = n("799547"),
  p = n("189443"),
  x = n("841363"),
  A = n("558286"),
  R = n("560309"),
  L = n("151859"),
  O = n("299342"),
  M = n("499950"),
  D = n("27754"),
  y = n("745049"),
  U = n("49111"),
  j = n("782340"),
  V = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: P,
  INVITE_OPTIONS_UNLIMITED: G
} = v.default;

function F(e) {
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

function H(e) {
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
    onSave: S,
    onClose: g,
    createdEvent: C
  } = e, p = (0, T.useUID)(), x = i.useRef(n), D = !(0, r.isEqual)(x.current, n), y = i.useMemo(() => [{
    slideId: 0,
    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || D),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: j.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, D]), U = Object.keys(l).length, P = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, U - 1)), [H, b] = i.useState(P ? 1 : 0), [B, w] = i.useState(!1), k = i.useMemo(() => y.slice(0, H + 1).map(e => e.valid).every(Boolean), [y, H]), z = H >= y.length ? 3 : y[G(H)].slideId, Y = 3 === z, Z = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Z(Y);
  let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    K = i.useRef(null),
    W = e => {
      w(!1), b(G(e))
    };
  i.useEffect(() => {
    null != C && W(3)
  }, [null == C ? void 0 : C.id, W]);
  let q = () => {
      if (!k) return;
      let e = 2 === z;
      e ? S() : Y ? g() : W(H + 1)
    },
    J = () => {
      W(H - 1)
    },
    Q = j.default.Messages.NEXT;
  return 2 === z && (Q = E ? j.default.Messages.SAVE_EVENT : j.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(d.ModalRoot, {
      transitionState: I,
      "aria-labelledby": p,
      size: d.ModalSize.DYNAMIC,
      children: [!X && Y ? (0, s.jsx)(F, {
        modal: K.current
      }) : null, (0, s.jsxs)(d.ModalContent, {
        className: V.content,
        scrollerRef: K,
        children: [!Y && (0, s.jsx)(h.default, {
          steps: y.map(e => e.label),
          stepIndex: H,
          onClick: e => {
            e < H ? J() : e > H && q()
          }
        }), (0, s.jsxs)(d.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            w(e === z)
          },
          children: [(0, s.jsx)(d.Slide, {
            id: 0,
            children: (0, s.jsx)(R.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: B,
              onChange: N
            })
          }), (0, s.jsx)(d.Slide, {
            id: 1,
            children: (0, s.jsx)(O.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: N,
              error: v,
              validationErrorMessage: f.schedule,
              isSlideReady: B
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
            children: (0, s.jsx)(M.default, {
              onClose: g,
              event: C
            })
          })]
        })]
      }), !Y && (0, s.jsxs)(d.ModalFooter, {
        className: V.footer,
        children: [(0, s.jsxs)("div", {
          className: V.inline,
          children: [(0, s.jsx)(d.Button, {
            color: d.Button.Colors.PRIMARY,
            onClick: g,
            children: j.default.Messages.CANCEL
          }), (0, s.jsx)(d.Button, {
            onClick: q,
            disabled: !k,
            className: V.button,
            submitting: _,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          onClick: J,
          color: d.Button.Colors.LINK,
          children: j.default.Messages.BACK
        })]
      })]
    })
  })
}

function b(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(t)), h = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([I.default], () => I.default.getDefaultChannel(t), [t]), v = (0, p.getInitialGuildEventData)(h, T), [A, R] = i.useState(v), [L] = i.useState((0, p.isEditingEvent)(h)), [O, M] = i.useState(null), V = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && o.default.createInvite(l, {
      max_age: P.value,
      max_uses: G.value
    }, U.InstantInviteSources.GUILD_EVENTS), n ? M(e) : c()
  }, F = (0, f.default)(E, null == h ? void 0 : h.id, A), [b, {
    loading: B,
    error: w
  }] = (0, N.default)(async () => {
    if (null != O) return;
    let e = {
      broadcastToDirectoryChannels: F.broadcastToDirectoryChannels
    };
    if (L && null != l) return await S.default.saveEvent(l, A, t, e), c();
    let n = await S.default.createGuildEvent(A, t, e);
    return V(n.body), n
  }), k = i.useMemo(() => (0, D.default)(A, L), [A, L]);
  return (0, s.jsx)(H, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: F,
    isEdit: L,
    formErrors: k,
    transitionState: a,
    loading: B,
    error: w,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, x.getChannelTypeFromEntity)(e.entityType),
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
          header: j.default.Messages.EDIT_ALL_EVENTS,
          confirmText: j.default.Messages.SAVE_EVENT,
          cancelText: j.default.Messages.NEVERMIND,
          onConfirm: b,
          children: [(0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: j.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : b()
    },
    onClose: c,
    createdEvent: O
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"