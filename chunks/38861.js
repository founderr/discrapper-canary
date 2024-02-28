"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("247013"),
  u = n("697218"),
  o = n("959097"),
  d = n("664336"),
  c = n("487269"),
  f = n("537560"),
  h = n("782340"),
  m = n("613968");

function p(e) {
  let {
    channel: t
  } = e, [n, p] = a.useState(!1), E = (0, s.useStateFromStores)([r.default, u.default], () => {
    let e = u.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !r.default.didAgree(t.getGuildId()))
  }, [t]), g = a.useCallback(() => {
    p(!1)
  }, []), C = a.useCallback(() => {
    !n && (0, c.trackThreadBrowserOpened)("Popout"), p(!n)
  }, [n]);
  return (0, l.jsx)(i.Popout, {
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    shouldShow: n,
    onRequestClose: g,
    renderPopout: function() {
      return (0, l.jsx)(i.Dialog, {
        children: (0, l.jsx)(f.default, {
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
      return (0, l.jsx)(d.Icon, {
        ...e,
        className: m.icon,
        onClick: C,
        icon: o.default,
        "aria-label": h.default.Messages.THREADS,
        tooltip: n ? null : h.default.Messages.THREADS,
        disabled: E,
        selected: n
      })
    }
  })
}