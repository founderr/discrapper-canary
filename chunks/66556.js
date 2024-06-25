n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(731290),
  o = n(594174),
  c = n(502568),
  u = n(91159),
  d = n(593130),
  h = n(689938),
  m = n(603066);

function E(e) {
  let {
    channel: t
  } = e, [n, E] = i.useState(!1), p = (0, s.e7)([r.Z, o.default], () => {
    let e = o.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !r.Z.didAgree(t.getGuildId()))
  }, [t]), g = i.useCallback(() => {
    E(!1)
  }, []), f = i.useCallback(() => {
    !n && (0, u.U4)("Popout"), E(!n)
  }, [n]);
  return (0, l.jsx)(a.Popout, {
    animation: a.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    shouldShow: n,
    onRequestClose: g,
    renderPopout: function() {
      return (0, l.jsx)(a.Dialog, {
        children: (0, l.jsx)(d.Z, {
          className: m.browser,
          channel: t,
          onClose: g
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, l.jsx)(c.JO, {
        ...e,
        className: m.icon,
        onClick: f,
        icon: a.ThreadIcon,
        "aria-label": h.Z.Messages.THREADS,
        tooltip: n ? null : h.Z.Messages.THREADS,
        disabled: p,
        selected: n
      })
    }
  })
}