"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("247013"),
  o = n("697218"),
  u = n("959097"),
  d = n("664336"),
  c = n("487269"),
  f = n("537560"),
  h = n("782340"),
  m = n("16064");

function p(e) {
  let {
    channel: t
  } = e, [n, p] = l.useState(!1), E = (0, s.useStateFromStores)([r.default, o.default], () => {
    let e = o.default.getCurrentUser();
    return null == e || t.isNSFW() && (!e.nsfwAllowed || !r.default.didAgree(t.getGuildId()))
  }, [t]), S = l.useCallback(() => {
    p(!1)
  }, []), g = l.useCallback(() => {
    !n && (0, c.trackThreadBrowserOpened)("Popout"), p(!n)
  }, [n]);
  return (0, a.jsx)(i.Popout, {
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    shouldShow: n,
    onRequestClose: S,
    renderPopout: function() {
      return (0, a.jsx)(i.Dialog, {
        children: (0, a.jsx)(f.default, {
          className: m.browser,
          channel: t,
          onClose: S
        })
      })
    },
    children: (e, t) => {
      let {
        isShown: n
      } = t;
      return (0, a.jsx)(d.Icon, {
        ...e,
        className: m.icon,
        onClick: g,
        icon: u.default,
        "aria-label": h.default.Messages.THREADS,
        tooltip: n ? null : h.default.Messages.THREADS,
        disabled: E,
        selected: n
      })
    }
  })
}