"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("37983");
a("884691");
var n = a("77078"),
  r = a("945330"),
  s = a("959097"),
  i = a("557872"),
  u = a("967241"),
  o = a("648564"),
  d = a("782340"),
  c = a("464771");

function f(e) {
  let {
    guildId: t,
    onClose: a,
    transitionState: f
  } = e;
  return (0, l.jsx)(n.ModalRoot, {
    className: c.modal,
    transitionState: f,
    "aria-label": d.default.Messages.THREADS,
    size: n.ModalSize.DYNAMIC,
    children: (0, l.jsxs)("div", {
      className: c.container,
      children: [(0, l.jsxs)("div", {
        className: c.header,
        children: [(0, l.jsx)(s.default, {
          className: c.threadIcon
        }), (0, l.jsx)(n.Heading, {
          variant: "heading-md/semibold",
          className: c.title,
          children: d.default.Messages.ALL_ACTIVE_THREADS
        }), (0, l.jsx)("div", {
          className: c.spacer
        }), (0, l.jsx)(n.Clickable, {
          className: c.closeIcon,
          onClick: a,
          "aria-label": d.default.Messages.CLOSE,
          children: (0, l.jsx)(r.default, {})
        })]
      }), (0, l.jsx)(i.default, {
        guildId: t,
        goToThread: (e, t) => {
          a(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
        }
      })]
    })
  })
}