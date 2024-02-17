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
  A = n("822516"),
  L = n("558286"),
  R = n("560309"),
  M = n("151859"),
  y = n("299342"),
  D = n("499950"),
  j = n("27754"),
  G = n("745049"),
  V = n("49111"),
  O = n("782340"),
  U = n("872994");
let {
  INVITE_OPTIONS_7_DAYS: b,
  INVITE_OPTIONS_UNLIMITED: P
} = m.default;

function B(e) {
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
    transitionState: h,
    loading: v,
    error: m,
    onChange: T,
    onSave: g,
    onClose: C,
    createdEvent: x
  } = e, p = (0, I.useUID)(), S = i.useRef(n), A = !(0, r.isEqual)(S.current, n), j = i.useMemo(() => [{
    slideId: 0,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_1,
    valid: null == f.entity,
    userErrorMessage: f.entity
  }, {
    slideId: 1,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_2,
    valid: null == f.schedule && null == f.topic && (!E || A),
    userErrorMessage: f.schedule
  }, {
    slideId: 2,
    label: O.default.Messages.GUILD_EVENT_MODAL_PROGRESS_BAR_STEP_3,
    valid: !0
  }], [f, E, A]), G = Object.keys(l).length, V = (0, N.isGuildScheduledEventActive)(n), b = e => Math.max(0, Math.min(e, G - 1)), [P, F] = i.useState(V ? 1 : 0), [w, k] = i.useState(!1), H = i.useMemo(() => j.slice(0, P + 1).map(e => e.valid).every(Boolean), [j, P]), z = P >= j.length ? 3 : j[b(P)].slideId, Y = 3 === z, Z = (0, L.useGuildEventModalStore)(e => e.onUpdateCanCloseModal);
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
      e ? g() : Y ? C() : q(P + 1)
    },
    J = () => {
      q(P - 1)
    },
    Q = O.default.Messages.NEXT;
  return 2 === z && (Q = E ? O.default.Messages.SAVE_EVENT : O.default.Messages.SCHEDULE_EVENT), (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(d.ModalRoot, {
      transitionState: h,
      "aria-labelledby": p,
      size: d.ModalSize.DYNAMIC,
      children: [!W && Y ? (0, s.jsx)(B, {
        modal: X.current
      }) : null, (0, s.jsxs)(d.ModalContent, {
        className: U.content,
        scrollerRef: X,
        children: [!Y && (0, s.jsx)(_.default, {
          steps: j.map(e => e.label),
          stepIndex: P,
          onClick: e => {
            e < P ? J() : e > P && K()
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
              isSlideReady: w,
              onChange: T
            })
          }), (0, s.jsx)(d.Slide, {
            id: 1,
            children: (0, s.jsx)(y.default, {
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
            children: (0, s.jsx)(M.default, {
              guildId: t,
              guildEvent: n,
              guildEventId: a,
              error: m
            })
          }), (0, s.jsx)(d.Slide, {
            id: 3,
            children: (0, s.jsx)(D.default, {
              onClose: C,
              event: x
            })
          })]
        })]
      }), !Y && (0, s.jsxs)(d.ModalFooter, {
        className: U.footer,
        children: [(0, s.jsxs)("div", {
          className: U.inline,
          children: [(0, s.jsx)(d.Button, {
            color: d.Button.Colors.PRIMARY,
            onClick: C,
            children: O.default.Messages.CANCEL
          }), (0, s.jsx)(d.Button, {
            onClick: K,
            disabled: !H,
            className: U.button,
            submitting: v,
            children: Q
          })]
        }), 0 !== z && (0, s.jsx)(d.Button, {
          look: d.Button.Looks.LINK,
          size: d.Button.Sizes.MIN,
          onClick: J,
          color: d.Button.Colors.LINK,
          children: O.default.Messages.BACK
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
    onClose: r
  } = e, c = (0, u.useStateFromStores)([v.default], () => v.default.getGuild(t)), E = (0, u.useStateFromStores)([N.default], () => N.default.getGuildScheduledEvent(l), [l]), _ = (0, u.useStateFromStores)([h.default], () => h.default.getDefaultChannel(t), [t]), I = (0, p.getInitialGuildEventData)(E, _), [m, L] = i.useState(I), [R] = i.useState((0, p.isEditingEvent)(E)), [M, y] = i.useState(null), D = e => {
    var t;
    let n = (0, C.isGuildEventInvitable)(e),
      l = null !== (t = e.channel_id) && void 0 !== t ? t : null == _ ? void 0 : _.id;
    null != l && o.default.createInvite(l, {
      max_age: b.value,
      max_uses: P.value
    }, V.InstantInviteSources.GUILD_EVENTS), n ? y(e) : r()
  }, U = (0, f.default)(c, null == E ? void 0 : E.id, m), [B, {
    loading: w,
    error: k
  }] = (0, T.default)(async () => {
    if (null != M) return;
    let e = {
      broadcastToDirectoryChannels: U.broadcastToDirectoryChannels
    };
    if (R && null != l) return await g.default.saveEvent(l, m, t, e), r();
    let n = await g.default.createGuildEvent(m, t, e);
    return D(n.body), n
  }), H = i.useMemo(() => (0, j.default)(m, R), [m, R]);
  return (0, s.jsx)(F, {
    guildId: t,
    guildEvent: m,
    guildEventId: l,
    editBroadcastInfoData: U,
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
        e.channelId = null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : null, e.entityType !== G.GuildScheduledEventEntityTypes.EXTERNAL && m.entityType === G.GuildScheduledEventEntityTypes.EXTERNAL && (e.entityMetadata = null)
      }
      L(t => ({
        ...t,
        ...e
      }))
    },
    onSave: () => {
      null != m.recurrenceRule && R && (0, A.hasScheduleChanges)(E, m) ? (0, d.openModalLazy)(async () => {
        let {
          ConfirmModal: e
        } = await n.el("77078").then(n.bind(n, "77078"));
        return t => (0, s.jsxs)(e, {
          ...t,
          header: O.default.Messages.EDIT_ALL_EVENTS,
          confirmText: O.default.Messages.SAVE_EVENT,
          cancelText: O.default.Messages.NEVERMIND,
          onConfirm: B,
          children: [(0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_CONFIRM
          }), (0, s.jsx)("br", {}), (0, s.jsx)(d.Text, {
            variant: "text-md/normal",
            children: O.default.Messages.GUILD_EVENT_EDIT_CONFIRM_BODY_EDIT_ALL_HINT.format()
          })]
        })
      }) : B()
    },
    onClose: r,
    createdEvent: M
  })
}(a = l || (l = {}))[a.ENTITY = 0] = "ENTITY", a[a.SETTINGS = 1] = "SETTINGS", a[a.PREVIEW = 2] = "PREVIEW", a[a.SUCCESS = 3] = "SUCCESS"