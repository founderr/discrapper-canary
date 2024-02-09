"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var l, a, s = n("37983"),
  i = n("884691"),
  r = n("917351"),
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
  g = n("398604"),
  T = n("322224"),
  p = n("152475"),
  N = n("799547"),
  x = n("189443"),
  S = n("841363"),
  A = n("558286"),
  L = n("560309"),
  y = n("151859"),
  R = n("299342"),
  M = n("499950"),
  j = n("27754"),
  D = n("745049"),
  G = n("49111"),
  O = n("782340"),
  V = n("738021");
let {
  INVITE_OPTIONS_7_DAYS: U,
  INVITE_OPTIONS_UNLIMITED: b
} = C.default;

function P(e) {
  let {
    modal: t
  } = e, {
    createMultipleConfetti: n
  } = i.useContext(f.ConfettiCannonContext);
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
    onClose: p,
    createdEvent: N
  } = e, x = (0, _.useUID)(), S = i.useRef(n), j = !(0, r.isEqual)(S.current, n), D = i.useMemo(() => [{
    slideId: 0,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == E.entity,
    userErrorMessage: E.entity
  }, {
    slideId: 1,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == E.schedule && null == E.topic && (!f || j),
    userErrorMessage: E.schedule
  }, {
    slideId: 2,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [E, f, j]), G = Object.keys(l).length, U = (0, g.isGuildScheduledEventActive)(n), b = e => Math.max(0, Math.min(e, G - 1)), [w, F] = i.useState(U ? 1 : 0), [k, B] = i.useState(!1), H = i.useMemo(() => D.slice(0, w + 1).map(e => e.valid).every(Boolean), [D, w]), z = w >= D.length ? 3 : D[b(w)].slideId, Z = 3 === z, Y = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Y(Z);
  let W = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    K = i.useRef(null),
    X = e => {
      B(!1), F(b(e))
    };
  i.useEffect(() => {
    null != N && X(3)
  }, [null == N ? void 0 : N.id, X]);
  let q = () => {
      if (!H) return;
      let e = 2 === z;
      e ? T() : Z ? p() : X(w + 1)
    },
    J = () => {
      X(w - 1)
    },
    Q = O.default.Messages.NEXT;
  return 2 === z && (Q = f ? O.default.Messages.SAVE_EVENT : O.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(o.ModalRoot, {
      transitionState: h,
      "aria-labelledby": x,
      size: o.ModalSize.DYNAMIC,
      children: [!W && Z ? (0, s.jsx)(P, {
        modal: K.current
      }) : null, (0, s.jsxs)(o.ModalContent, {
        className: V.content,
        scrollerRef: K,
        children: [!Z && (0, s.jsx)(I.default, {
          steps: D.map(e => e.label),
          stepIndex: w,
          onClick: e => {
            e < w ? J() : e > w && q()
          }
        }), (0, s.jsxs)(o.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            B(e === z)
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
            children: (0, s.jsx)(R.default, {
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
            children: (0, s.jsx)(M.default, {
              onClose: p,
              event: N
            })
          })]
        })]
      }), !Z && (0, s.jsxs)(o.ModalFooter, {
        className: V.footer,
        children: [(0, s.jsxs)("div", {
          className: V.inline,
          children: [(0, s.jsx)(o.Button, {
            color: o.Button.Colors.PRIMARY,
            onClick: p,
            children: O.default.Messages.CANCEL
          }), (0, s.jsx)(o.Button, {
            onClick: q,
            disabled: !H,
            className: V.button,
            submitting: v,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          size: o.Button.Sizes.MIN,
          onClick: J,
          color: o.Button.Colors.LINK,
          children: O.default.Messages.BACK
        })]
      })]
    })
  })
}

function F(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, f = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t)), I = (0, u.useStateFromStores)([g.default], () => g.default.getGuildScheduledEvent(l), [l]), _ = (0, u.useStateFromStores)([h.default], () => h.default.getDefaultChannel(t), [t]), C = (0, x.getInitialGuildEventData)(I, _), [A, L] = i.useState(C), [y] = i.useState((0, x.isEditingEvent)(I)), [R, M] = i.useState(null), V = e => {
    var t;
    let n = (0, p.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == _ ? void 0 : _.id;
    null != l && d.default.createInvite(l, {
      max_age: U.value,
      max_uses: b.value
    }, G.InstantInviteSources.GUILD_EVENTS), n ? M(e) : c()
  }, P = (0, E.default)(f, null == I ? void 0 : I.id, A), [F, {
    loading: k,
    error: B
  }] = (0, m.default)(async () => {
    if (null != R) return;
    let e = {
      broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
    };
    if (y && null != l) return await T.default.saveEvent(l, A, t, e), c();
    let n = await T.default.createGuildEvent(A, t, e);
    return V(n.body), n
  }), H = i.useMemo(() => (0, j.default)(A, y), [A, y]);
  return (0, s.jsx)(w, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: P,
    isEdit: y,
    formErrors: H,
    transitionState: a,
    loading: k,
    error: B,
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
      let e = (null == I ? void 0 : I.scheduled_start_time) !== A.scheduledStartTime || I.scheduled_end_time !== A.scheduledEndTime || !(0, r.isEqual)(I.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && y && e ? (0, o.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: O.default.Messages.EDIT_ALL_EVENTS,
          confirmText: O.default.Messages.SAVE_EVENT,
          cancelText: O.default.Messages.NEVERMIND,
          onConfirm: F,
          children: [(0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : F()
    },
    onClose: c,
    createdEvent: R
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"