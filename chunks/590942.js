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
  d = n("77078"),
  o = n("970728"),
  c = n("206230"),
  E = n("526887"),
  f = n("960757"),
  h = n("923959"),
  v = n("305961"),
  _ = n("683911"),
  I = n("476765"),
  m = n("354023"),
  T = n("686904"),
  N = n("398604"),
  g = n("322224"),
  C = n("152475"),
  x = n("799547"),
  p = n("189443"),
  S = n("841363"),
  A = n("558286"),
  L = n("560309"),
  R = n("151859"),
  M = n("299342"),
  y = n("499950"),
  D = n("27754"),
  j = n("745049"),
  G = n("49111"),
  V = n("782340"),
  O = n("872994");
let {
  INVITE_OPTIONS_7_DAYS: U,
  INVITE_OPTIONS_UNLIMITED: b
} = m.default;

function P(e) {
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

function B(e) {
  let {
    guildId: t,
    guildEvent: n,
    guildEventId: a,
    editBroadcastInfoData: o,
    isEdit: E,
    formErrors: f,
    transitionState: h,
    loading: v,
    error: m,
    onChange: T,
    onSave: g,
    onClose: C,
    createdEvent: x
  } = e, p = (0, I.useUID)(), S = i.useRef(n), D = !(0, r.isEqual)(S.current, n), j = i.useMemo(() => [{
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
  }], [f, E, D]), G = Object.keys(l).length, U = (0, N.isGuildScheduledEventActive)(n), b = e => Math.max(0, Math.min(e, G - 1)), [B, F] = i.useState(U ? 1 : 0), [w, k] = i.useState(!1), H = i.useMemo(() => j.slice(0, B + 1).map(e => e.valid).every(Boolean), [j, B]), z = B >= j.length ? 3 : j[b(B)].slideId, Y = 3 === z, Z = (0, A.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
  Z(Y);
  let W = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    X = i.useRef(null),
    q = e => {
      k(!1), F(b(e))
    };
  i.useEffect(() => {
    null != x && q(3)
  }, [null == x ? void 0 : x.id, q]);
  let K = () => {
      if (!H) return;
      let e = 2 === z;
      e ? g() : Y ? C() : q(B + 1)
    },
    J = () => {
      q(B - 1)
    },
    Q = V.default.Messages.NEXT;
  return 2 === z && (Q = E ? V.default.Messages.SAVE_EVENT : V.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(d.ModalRoot, {
      transitionState: h,
      "aria-labelledby": p,
      size: d.ModalSize.DYNAMIC,
      children: [!W && Y ? (0, s.jsx)(P, {
        modal: X.current
      }) : null, (0, s.jsxs)(d.ModalContent, {
        className: O.content,
        scrollerRef: X,
        children: [!Y && (0, s.jsx)(_.default, {
          steps: j.map(e => e.label),
          stepIndex: B,
          onClick: e => {
            e < B ? J() : e > B && K()
          }
        }), (0, s.jsxs)(d.Slides, {
          activeSlide: z,
          width: 440,
          onSlideReady: e => {
            k(e === z)
          },
          children: [(0, s.jsx)(d.Slide, {
            id: 0,
            children: (0, s.jsx)(L.default, {
              guildId: t,
              guildEvent: n,
              validationErrorMessage: f.entity,
              isSlideReady: w,
              onChange: T
            })
          }), (0, s.jsx)(d.Slide, {
            id: 1,
            children: (0, s.jsx)(M.default, {
              guildEvent: n,
              guildEventId: a,
              guildId: t,
              editBroadcastInfoData: o,
              onChange: T,
              error: m,
              validationErrorMessage: f.schedule,
              isSlideReady: w
            })
          }), (0, s.jsx)(d.Slide, {
            id: 2,
            children: (0, s.jsx)(R.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: m
            })
          }), (0, s.jsx)(d.Slide, {
            id: 3,
            children: (0, s.jsx)(y.default, {
              onClose: C,
              event: x
            })
          })]
        })]
      }), !Y && (0, s.jsxs)(d.ModalFooter, {
        className: O.footer,
        children: [(0, s.jsxs)("div", {
          className: O.inline,
          children: [(0, s.jsx)(d.Button, {
            color: d.Button.Colors.PRIMARY,
            onClick: C,
            children: V.default.Messages.CANCEL
          }), (0, s.jsx)(d.Button, {
            onClick: K,
            disabled: !H,
            className: O.button,
            submitting: v,
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

function F(e) {
  let {
    guildId: t,
    guildScheduledEventId: l,
    transitionState: a,
    onClose: c
  } = e, E = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t)), _ = (0, u.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(l), [l]), I = (0, u.useStateFromStores)([h.default], () => h.default.getDefaultChannel(t), [t]), m = (0, p.getInitialGuildEventData)(_, I), [A, L] = i.useState(m), [R] = i.useState((0, p.isEditingEvent)(_)), [M, y] = i.useState(null), O = e => {
    var t;
    let n = (0, C.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == I ? void 0 : I.id;
    null != l && o.default.createInvite(l, {
      max_age: U.value,
      max_uses: b.value
    }, G.InstantInviteSources.GUILD_EVENTS), n ? y(e) : c()
  }, P = (0, f.default)(E, null == _ ? void 0 : _.id, A), [F, {
    loading: w,
    error: k
  }] = (0, T.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: P.broadcastToDirectoryChannels
    };
    if (R && null != l) return await g.default.saveEvent(l, A, t, e), c();
    let n = await g.default.createGuildEvent(A, t, e);
    return O(n.body), n
  }), H = i.useMemo(() => (0, D.default)(A, R), [A, R]);
  return (0, s.jsx)(B, {
    guildId: t,
    guildEvent: A,
    guildEventId: l,
    editBroadcastInfoData: P,
    isEdit: R,
    formErrors: H,
    transitionState: a,
    loading: w,
    error: k,
    onChange: e => {
      if (null != e.entityType) {
        var n;
        let l = (0, S.getChannelTypeFromEntity)(e.entityType),
          [a] = (0, x.getEventChannelsByType)(t, l);
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== j.GuildScheduledEventEntityTypes.EXTERNAL && A.entityType === j.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      L(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      let e = (null == _ ? void 0 : _.scheduled_start_time) !== A.scheduledStartTime || _.scheduled_end_time !== A.scheduledEndTime || !(0, r.isEqual)(_.recurrence_rule, A.recurrenceRule);
      null != A.recurrenceRule && R && e ? (0, d.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: V.default.Messages.EDIT_ALL_EVENTS,
          confirmText: V.default.Messages.SAVE_EVENT,
          cancelText: V.default.Messages.NEVERMIND,
          onConfirm: F,
          children: [(0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: V.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : F()
    },
    onClose: c,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"