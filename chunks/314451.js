"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("782568"),
  o = n("31336"),
  u = n("906467"),
  d = n("274522"),
  c = n("54017"),
  f = n("441957"),
  h = n("502568"),
  E = n("63063"),
  m = n("689938");

function p() {
  let e = (0, s.useStateFromStores)([u.default], () => u.default.isDeveloper),
    [t, p] = l.useState(!1),
    [g, S] = l.useState(0),
    N = e => {
      clearTimeout(g), S(setTimeout(() => {
        p(e)
      }, 100))
    };
  return (0, a.jsx)("div", {
    onMouseEnter: () => N(!0),
    onMouseLeave: () => N(!1),
    children: (0, a.jsx)(i.Popout, {
      shouldShow: t,
      animation: i.Popout.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      onRequestOpen: () => p(!0),
      onRequestClose: () => p(!1),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          isDiscordDeveloper: l
        } = e;
        return (0, a.jsx)(i.Menu, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": m.default.Messages.GUILD_ACTIONS_MENU_LABEL,
          children: (0, a.jsxs)(i.MenuGroup, {
            children: [(0, a.jsx)(i.MenuItem, {
              id: "staff-help-bug-reporter",
              label: m.default.Messages.BUG_REPORT_TITLE,
              icon: d.default,
              action: () => (0, i.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("83051")]).then(n.bind(n, "115072"));
                return t => (0, a.jsx)(e, {
                  ...t
                })
              })
            }), l && (0, a.jsx)(i.MenuItem, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: c.default,
              action: () => (0, o.toggleDisplayDevTools)()
            }), (0, a.jsx)(i.MenuItem, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: f.default,
              action: () => (0, r.default)(E.SUPPORT_LOCATION)
            })]
          })
        })
      })({
        onClose: () => p(!1),
        isDiscordDeveloper: e
      }),
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, a.jsx)(h.Icon, {
          ...e,
          icon: d.default,
          "aria-label": m.default.Messages.HELP,
          selected: n
        })
      }
    })
  })
}