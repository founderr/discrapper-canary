n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(23536),
  o = n(40851),
  c = n(762914),
  u = n(731290),
  d = n(306680),
  h = n(594174),
  m = n(502568),
  p = n(585483),
  E = n(981631),
  g = n(689938);
t.Z = function(e) {
  let {
    channel: t
  } = e, n = (0, s.e7)([u.Z, h.default], () => {
    let e = h.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId()))
  }, [t]), [f, C] = i.useState(!1), _ = (0, s.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]), I = (0, o.Aq)(), x = (0, c.Dd)(t.id), T = i.useCallback(() => {
    !n && C(e => !e)
  }, [n]);

  function N(e) {
    !(null == e ? void 0 : e.shiftKey) && I.dispatch(E.CkL.POPOUT_CLOSE)
  }
  return (i.useEffect(() => (p.S.subscribe(E.CkL.TOGGLE_CHANNEL_PINS, T), () => {
    p.S.unsubscribe(E.CkL.TOGGLE_CHANNEL_PINS, T)
  }), [T]), x) ? null : (0, l.jsx)(a.Popout, {
    shouldShow: f,
    animation: a.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    ignoreModalClicks: !0,
    onRequestClose: () => C(!1),
    renderPopout: function(e) {
      return (0, l.jsx)(r.Z, {
        ...e,
        onJump: N,
        channel: t
      })
    },
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, l.jsx)(m.JO, {
        ...e,
        onClick: T,
        tooltip: i ? null : g.Z.Messages.PINNED_MESSAGES,
        icon: a.PinIcon,
        "aria-label": g.Z.Messages.PINNED_MESSAGES,
        disabled: n,
        showBadge: _,
        selected: i
      })
    }
  })
}