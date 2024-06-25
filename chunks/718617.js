n.d(t, {
  Z: function() {
    return _
  }
});
var l = n(735250),
  i = n(470079),
  s = n(920906),
  a = n(442837),
  r = n(186325),
  o = n(110924),
  c = n(714338),
  u = n(433355),
  d = n(863840),
  h = n(189432),
  m = n(727381),
  E = n(313692),
  p = n(596443),
  g = n(50493),
  f = n(981631);

function C(e, t) {
  return n => {
    if (0 === n) return "auto";
    let l = "forwards" === t.current,
      i = n > 0,
      s = !1;
    return i && l && "left" === e && (s = !0), i && !l && "right" === e && (s = !0), !i && l && "right" === e && (s = !0), !i && !l && "left" === e && (s = !0), s ? "calc(".concat(100 * Math.abs(n), "% + ").concat(Math.round(12 * Math.abs(n)), "px)") : "auto"
  }
}

function _(e) {
  var t, n;
  let {
    userId: _,
    guildId: I,
    onClose: x,
    analyticsLocation: T,
    className: N
  } = e, Z = (0, a.e7)([u.ZP], () => u.ZP.getGuildSidebarState(I), [I]), S = null !== (t = null == Z ? void 0 : Z.details.modViewPanel) && void 0 !== t ? t : g.k.INFO, v = (0, o.Z)(_);
  let A = null == (n = S) ? null : n === g.k.INFO ? "backwards" : "forwards",
    M = (0, d.Z)(A),
    {
      reducedMotion: R
    } = i.useContext(r.S),
    j = i.useCallback(e => {
      null != Z && (0, h.r)(I, _, Z.baseChannelId, {
        modViewPanel: e
      })
    }, [Z, I, _]),
    L = i.useMemo(() => ({
      [f.EkH.CLOSE_MODAL]: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          if (S === g.k.INFO) return x();
          return j(g.k.INFO)
        }
      }
    }), [x, S, j]);
  i.useEffect(() => (c.Z.enable(), c.Z.enableTemp(L), () => c.Z.disableTemp()), [L]);
  let O = (0, s.useTransition)(S, {
    immediate: v !== _,
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
    children: O((e, t, n) => {
      var i, a, r;
      let {
        key: o
      } = n;
      return (0, l.jsx)(s.animated.div, {
        style: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: "100%",
          height: "100%",
          ...R.enabled ? {
            opacity: null === (i = e.value) || void 0 === i ? void 0 : i.to(e => 1 - Math.abs(e))
          } : {
            left: null === (a = e.value) || void 0 === a ? void 0 : a.to(C("left", M)),
            right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C("right", M))
          }
        },
        children: function(e) {
          switch (e) {
            case g.k.INFO:
              return (0, l.jsx)(m.Z, {
                userId: _,
                guildId: I,
                onNavigate: j,
                className: N
              });
            case g.k.MESSAGE_HISTORY:
              return (0, l.jsx)(E.Z, {
                userId: _,
                guildId: I,
                onNavigate: () => j(g.k.INFO),
                className: N
              });
            case g.k.PERMISSIONS:
              return (0, l.jsx)(p.Z, {
                userId: _,
                guildId: I,
                onNavigate: () => j(g.k.INFO),
                className: N
              });
            default:
              return null
          }
        }(t)
      }, o)
    })
  })
}