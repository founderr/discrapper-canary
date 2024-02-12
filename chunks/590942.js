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
  o = n("77078"),
  d = n("970728"),
  c = n("206230"),
  f = n("526887"),
  E = n("960757"),
  h = n("923959"),
  v = n("305961"),
  I = n("683911"),
  _ = n("476765"),
  C = n("354023"),
  m = n("686904"),
  p = n("398604"),
  T = n("322224"),
  g = n("152475"),
  N = n("799547"),
  x = n("189443"),
  S = n("841363"),
  A = n("558286"),
  L = n("560309"),
  y = n("151859"),
  M = n("299342"),
  R = n("499950"),
  j = n("27754"),
  D = n("745049"),
  O = n("49111"),
  G = n("782340"),
  U = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: V,
  INVITE_OPTIONS_UNLIMITED: b
} = C.default;

function P(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = r.useContext(f.ConfettiCannonContext);
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
    editBroadcastInfoData: d,
    isEdit: f,
    formErrors: E,
    transitionState: h,
    loading: v,
    error: C,
    onChange: m,
    onSave: T,
    onClose: g,
    createdEvent: N
  } = e, x = (0, _.useUID)(), S = r.useRef(n), j = !(0, i.isEqual)(S.current, n), D = r.useMemo(() => [{
    slideId: 0,
    label: G.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == E.entity,
    userErrorMessage: E.entity
  }, {
    slideId: 1,
    label: G.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == E.schedule && null == E.topic && (!f || j),
    userErrorMessage: E.schedule
  }, {
    slideId: 2,
    label: G.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [E, f, j]), O = Object.keys(l).length, V = (0, p.isGuildScheduledEventActive)(n), b = e => Math.max(0, Math.min(e, O - 1)), [w, B] = r.useState(V ? 1 : 0), [k, F] = r.useState(!1), H = r.useMemo(() => D.slice(0, w + 1).map(e => e.valid).every(Boolean), [D, w]), z = w >= D.length ? 3 : D[b(w)].slideId, Z = 3 === z, Y = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Y(Z);
  let W = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    K = r.useRef(null),
    q = e => {
      F(!1), B(b(e))
    };
  r.useEffect(() => {
    null != N && q(3)
  }, [null == N ? void 0 : N.id, q]);
  let X = () => {
      if (!H) return;
      let e = 2 === z;
      e ? T() : Z ? g() : q(w + 1)
    },
    Q = () => {
      q(w - 1)
    },
    J = G.default.Messages.NEXT;
  return 2 === z && (J = f ? G.default.Messages.SAVE_EVENT : G.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: h,
      "aria-labelledby": x,
      size: o.ModalSize.DYNAMIC,
      children: [!W && Z ? (0, s.jsx)(P, {
        modal: K.current
      }) : null, (0, s.jsxs)(o.ModalContent, {
        className: U.content,
        scrollerRef: K,
        children: [!Z && (0, s.jsx)(I.default, {
          steps: D.map(e => e.label),
          stepIndex: w,
          onClick: e => {
            e < w ? Q() : e > w && X()
          }
        }), (0, s.jsxs)(o.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            F(e === z)
          },
          children: [(0, s.jsx)(o.Slide, {
            id: 0,
            children: (0, s.jsx)(L.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: E.entity,
              isSlideReady: k,
              onChange: m
            })
          }), (0, s.jsx)(o.Slide, {
            id: 1,
            children: (0, s.jsx)(M.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: d,
              onChange: m,
              error: C,
              validationErrorMessage: E.schedule,
              isSlideReady: k
            })
          }), (0, s.jsx)(o.Slide, {
            id: 2,
            children: (0, s.jsx)(y.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: C
            })
          }), (0, s.jsx)(o.Slide, {
            id: 3,
            children: (0, s.jsx)(R.default, {
              onClose: g,
              event: N
            })
          })]
        })]
      }), !Z && (0, s.jsxs)(o.ModalFooter, {
        className: U.footer,
        children: [(0, s.jsxs)("div", {
          className: U.inline,
          children: [(0, s.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: g,
            children: G.default.Messages.CANCEL
          }), (0, s.jsx)(o.Button, {
            onClick: X,
            disabled: !H,
            className: U.button,
            submitting: v,
            children: J
          })]
        }), 0 !== z && (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.MIN,
          onClick: Q,
          color: o.Button.Colors.LINK,
          children: G.default.Messages.BACK
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
  } = e, f = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t)), I = (0, u.useStateFromStores)([p.default], () => p.default.getGuildScheduledEvent(l), [l]), _ = (0, u.useStateFromStores)([h.default], () => h.default.getDefaultChannel(t), [t]), C = (0, x.getInitialGuildEventData)(I, _), [A, L] = r.useState(C), [y] = r.useState((0, x.isEditingEvent)(I)), [M, R] = r.useState(null), U = e => {
    var t;
    let n = (0, g.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == _ ? void 0 : _.id;
    null != l && d.default.createInvite(l, {
      max_age: V.value,
      max_uses: b.value
    }, O.InstantInviteSources.GUILD_EVENTS), n ? R(e) : c()
  }, P = (0, E.default)(f, null == I ? void 0 : I.id, A), [B, {
    loading: k,
    error: F
  }] = (0, m.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
    };
    if (y && null != l) return await T.default.saveEvent(l, A, t, e), c();
    let n = await T.default.createGuildEvent(A, t, e);
    return U(n.body), n
  }), H = r.useMemo(() => (0, j.default)(A, y), [A, y]);
  return (0, s.jsx)(w, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: P,
    isEdit: y,
    formErrors: H,
    transitionState: a,
    loading: k,
    error: F,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, S.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, N.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== D.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === D.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      L(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == I ? void 0 : I.scheduled_start_time) !== A.scheduledStartTime || I.scheduled_end_time !== A.scheduledEndTime || !(0, i.isEqual)(I.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && y && e ? (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: G.default.Messages.EDIT_ALL_EVENTS,
          confirmText: G.default.Messages.SAVE_EVENT,
          cancelText: G.default.Messages.NEVERMIND,
          onConfirm: B,
          children: [(0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: G.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: G.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : B()
    },
    onClose: c,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"