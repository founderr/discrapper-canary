"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("907002"),
  i = n("446674"),
  r = n("413197"),
  u = n("84339"),
  o = n("485328"),
  d = n("982108"),
  c = n("561744"),
  f = n("994906"),
  h = n("249957"),
  m = n("598263"),
  p = n("276867"),
  E = n("789150"),
  g = n("49111");

function C(e, t) {
  return n => {
    if (0 === n) return "auto";
    let l = "forwards" === t.current,
      a = n > 0,
      s = !1;
    return a && l && "left" === e && (s = !0), a && !l && "right" === e && (s = !0), !a && l && "right" === e && (s = !0), !a && !l && "left" === e && (s = !0), s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function S(e) {
  var t, n;
  let {
    userId: S,
    guildId: _,
    onClose: I,
    analyticsLocation: T,
    className: v
  } = e, x = (0, i.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(_), [_]), N = null !== (t = null == x ? void 0 : x.details.modViewPanel) && void 0 !== t ? t : E.ModViewPanel.INFO, A = (0, u.default)(S);
  let M = null == (n = N) ? null : n === E.ModViewPanel.INFO ? "backwards" : "forwards",
    R = (0, c.default)(M),
    {
      reducedMotion: j
    } = a.useContext(r.AccessibilityPreferencesContext),
    L = a.useCallback(e => {
      null != x && (0, f.openGuildMemberModViewSidebar)(_, S, x.baseChannelId, {
        modViewPanel: e
      })
    }, [x, _, S]),
    O = a.useMemo(() => ({
      [g.KeybindActions.CLOSE_MODAL]: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          if (N === E.ModViewPanel.INFO) return I();
          return L(E.ModViewPanel.INFO)
        }
      }
    }), [I, N, L]);
  a.useEffect(() => (o.default.enable(), o.default.enableTemp(O), () => o.default.disableTemp()), [O]);
  let y = (0, s.useTransition)(N, {
    immediate: A !== S,
    value: 0,
    from: {
      value: 1
    },
    enter: {
      value: 0
    },
    leave: {
      value: -1
    }
  });
  return (0, l.jsx)(s.animated.div, {
    style: {
      position: "relative",
      height: "100%",
      flex: 1,
      overflow: "hidden"
    },
    children: y((e, t, n) => {
      var a, i, r;
      let {
        key: u
      } = n;
      return (0, l.jsx)(s.animated.div, {
        style: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%",
          ...j.enabled ? {
            opacity: null === (a = e.value) || void 0 === a ? void 0 : a.to(e => 1 - Math.abs(e))
          } : {
            left: null === (i = e.value) || void 0 === i ? void 0 : i.to(C("left", R)),
            right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C("right", R))
          }
        },
        children: function(e) {
          switch (e) {
            case E.ModViewPanel.INFO:
              return (0, l.jsx)(h.default, {
                userId: S,
                guildId: _,
                onNavigate: L,
                className: v
              });
            case E.ModViewPanel.MESSAGE_HISTORY:
              return (0, l.jsx)(m.default, {
                userId: S,
                guildId: _,
                onNavigate: () => L(E.ModViewPanel.INFO),
                className: v
              });
            case E.ModViewPanel.PERMISSIONS:
              return (0, l.jsx)(p.default, {
                userId: S,
                guildId: _,
                onNavigate: () => L(E.ModViewPanel.INFO),
                className: v
              });
            default:
              return null
          }
        }(t)
      }, u)
    })
  })
}