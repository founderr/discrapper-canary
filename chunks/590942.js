"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var l, a, i = n("37983"),
  s = n("884691"),
  r = n("917351"),
  u = n("446674"),
  d = n("77078"),
  o = n("970728"),
  c = n("206230"),
  f = n("526887"),
  E = n("960757"),
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
  L = n("558286"),
  O = n("560309"),
  A = n("151859"),
  R = n("299342"),
  M = n("499950"),
  y = n("27754"),
  D = n("745049"),
  U = n("49111"),
  V = n("782340"),
  P = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: j,
  INVITE_OPTIONS_UNLIMITED: G
} = v.default;

function F(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = s.useContext(f.ConfettiCannonContext);
  return s.useEffect(() => {
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

function b(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: o,
    isEdit: f,
    formErrors: E,
    transitionState: I,
    loading: _,
    error: v,
    onChange: N,
    onSave: S,
    onClose: g,
    createdEvent: C
  } = e, p = (0, T.useUID)(), x = s.useRef(n), y = !(0, r.isEqual)(x.current, n), D = s.useMemo(() => [{
    slideId: 0,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == E.entity,
    userErrorMessage: E.entity
  }, {
    slideId: 1,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == E.schedule && null == E.topic && (!f || y),
    userErrorMessage: E.schedule
  }, {
    slideId: 2,
    label: V.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [E, f, y]), U = Object.keys(l).length, j = (0, m.isGuildScheduledEventActive)(n), G = e => Math.max(0, Math.min(e, U - 1)), [b, H] = s.useState(j ? 1 : 0), [B, w] = s.useState(!1), k = s.useMemo(() => D.slice(0, b + 1).map(e => e.valid).every(Boolean), [D, b]), z = b >= D.length ? 3 : D[G(b)].slideId, Y = 3 === z, Z = (0, L.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Z(Y);
  let X = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    K = s.useRef(null),
    W = e => {
      w(!1), H(G(e))
    };
  s.useEffect(() => {
    null != C && W(3)
  }, [null == C ? void 0 : C.id, W]);
  let q = () => {
      if (!k) return;
      let e = 2 === z;
      e ? S() : Y ? g() : W(b + 1)
    },
    J = () => {
      W(b - 1)
    },
    Q = V.default.Messages.NEXT;
  return 2 === z && (Q = f ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)(d.ModalRoot, {
      transitionState: I,
      "aria-labelledby": p,
      size: d.ModalSize.DYNAMIC,
      children: [!X && Y ? (0, i.jsx)(F, {
        modal: K.current
      }) : null, (0, i.jsxs)(d.ModalContent, {
        className: P.content,
        scrollerRef: K,
        children: [!Y && (0, i.jsx)(h.default, {
          steps: D.map(e => e.label),
          stepIndex: b,
          onClick: e => {
            e < b ? J() : e > b && q()
          }
        }), (0, i.jsxs)(d.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            w(e === z)
          },
          children: [(0, i.jsx)(d.Slide, {
            id: 0,
            children: (0, i.jsx)(O.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: E.entity,
              isSlideReady: B,
              onChange: N
            })
          }), (0, i.jsx)(d.Slide, {
            id: 1,
            children: (0, i.jsx)(R.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: N,
              error: v,
              validationErrorMessage: E.schedule,
              isSlideReady: B
            })
          }), (0, i.jsx)(d.Slide, {
            id: 2,
            children: (0, i.jsx)(A.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: v
            })
          }), (0, i.jsx)(d.Slide, {
            id: 3,
            children: (0, i.jsx)(M.default, {
              onClose: g,
              event: C
            })
          })]
        })]
      }), !Y && (0, i.jsxs)(d.ModalFooter, {
        className: P.footer,
        children: [(0, i.jsxs)("div", {
          className: P.inline,
          children: [(0, i.jsx)(d.Button, {
            color: d.Button.Colors.PRIMARY,
            onClick: g,
            children: V.default.Messages.CANCEL
          }), (0, i.jsx)(d.Button, {
            onClick: q,
            disabled: !k,
            className: P.button,
            submitting: _,
            children: Q
          })]
        }), 0 !== z && (0, i.jsx)(d.Button, {
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

function H(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, f = (0, u.useStateFromStores)([_.default], () => _.default.getGuild(t)), h = (0, u.useStateFromStores)([m.default], () => m.default.getGuildScheduledEvent(l), [l]), T = (0, u.useStateFromStores)([I.default], () => I.default.getDefaultChannel(t), [t]), v = (0, p.getInitialGuildEventData)(h, T), [L, O] = s.useState(v), [A] = s.useState((0, p.isEditingEvent)(h)), [R, M] = s.useState(null), P = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == T ? void 0 : T.id;
    null != l && o.default.createInvite(l, {
      max_age: j.value,
      max_uses: G.value
    }, U.InstantInviteSources.GUILD_EVENTS), n ? M(e) : c()
  }, F = (0, E.default)(f, null == h ? void 0 : h.id, L), [H, {
    loading: B,
    error: w
  }] = (0, N.default)(async () => {
    if (null != R) return;
    let e = {
      broadcastToDirectoryChannels: F.broadcastToDirectoryChannels
    };
    if (A && null != l) return await S.default.saveEvent(l, L, t, e), c();
    let n = await S.default.createGuildEvent(L, t, e);
    return P(n.body), n
  }), k = s.useMemo(() => (0, y.default)(L, A), [L, A]);
  return (0, i.jsx)(b, {
    guildId: t,
    guildEvent: L,
    guildEventId: l,
    editBroadcastInfoData: F,
    isEdit: A,
    formErrors: k,
    transitionState: a,
    loading: B,
    error: w,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, x.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, C.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== D.GuildScheduledEventEntityTypes.EXTERNAL && L.entityType === D.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      O(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == h ? void 0 : h.scheduled_start_time) !== L.scheduledStartTime || h.scheduled_end_time !== L.scheduledEndTime || !(0, r.isEqual)(h.recurrence_rule, L.recurrenceRule);
      null != L.recurrenceRule && A && e ? (0, d.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, i.jsxs)(e, {
          ...t,
          header: V.default.Messages.EDIT_ALL_EVENTS,
          confirmText: V.default.Messages.SAVE_EVENT,
          cancelText: V.default.Messages.NEVERMIND,
          onConfirm: H,
          children: [(0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, i.jsx)("br", {}), (0, i.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : H()
    },
    onClose: c,
    createdEvent: R
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"