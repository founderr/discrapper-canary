"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var r = n("77078"),
  l = n("945330"),
  i = n("959097"),
  s = n("557872"),
  u = n("967241"),
  o = n("648564"),
  d = n("782340"),
  c = n("728360");

function f(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: f
  } = e;
  return (0, a.jsx)(r.ModalRoot, {
    className: c.modal,
    transitionState: f,
    "aria-label": d.default.Messages.THREADS,
    size: r.ModalSize.DYNAMIC,
    children: (0, a.jsxs)("div", {
      className: c.container,
      children: [(0, a.jsxs)("div", {
        className: c.header,
        children: [(0, a.jsx)(i.default, {
          className: c.threadIcon
        }), (0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          className: c.title,
          children: d.default.Messages.ALL_ACTIVE_THREADS
        }), (0, a.jsx)("div", {
          className: c.spacer
        }), (0, a.jsx)(r.Clickable, {
          className: c.closeIcon,
          onClick: n,
          "aria-label": d.default.Messages.CLOSE,
          children: (0, a.jsx)(l.default, {})
        })]
      }), (0, a.jsx)(s.default, {
        guildId: t,
        goToThread: (e, t) => {
          n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}