n.d(t, {
  Z: function() {
    return _
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(782568),
  o = n(31336),
  c = n(906467),
  u = n(502568),
  d = n(63063),
  E = n(689938);

function _() {
  let e = (0, l.e7)([c.Z], () => c.Z.isDeveloper),
    [t, _] = i.useState(!1),
    [I, T] = i.useState(0),
    N = e => {
      clearTimeout(I), T(setTimeout(() => {
        _(e)
      }, 100))
    };
  return (0, s.jsx)("div", {
    onMouseEnter: () => N(!0),
    onMouseLeave: () => N(!1),
    children: (0, s.jsx)(a.Popout, {
      shouldShow: t,
      animation: a.Popout.Animation.NONE,
      position: "bottom",
      align: "right",
      autoInvert: !1,
      onRequestOpen: () => _(!0),
      onRequestClose: () => _(!1),
      renderPopout: () => (function(e) {
        let {
          onClose: t,
          isDiscordDeveloper: i
        } = e;
        return (0, s.jsx)(a.Menu, {
          onSelect: () => {},
          navId: "staff-help-popout",
          variant: "fixed",
          onClose: t,
          "aria-label": E.Z.Messages.GUILD_ACTIONS_MENU_LABEL,
          children: (0, s.jsxs)(a.MenuGroup, {
            children: [(0, s.jsx)(a.MenuItem, {
              id: "staff-help-bug-reporter",
              label: E.Z.Messages.BUG_REPORT_TITLE,
              icon: a.BugIcon,
              action: () => (0, a.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("99387"), n.e("83051")]).then(n.bind(n, 115072));
                return t => (0, s.jsx)(e, {
                  ...t
                })
              })
            }), i && (0, s.jsx)(a.MenuItem, {
              id: "staff-devtools",
              label: "Toggle DevTools",
              icon: a.StaffBadgeIcon,
              action: () => (0, o.SO)()
            }), (0, s.jsx)(a.MenuItem, {
              id: "staff-help-center",
              label: "Go to Help Center",
              icon: a.WindowLaunchIcon,
              action: () => (0, r.Z)(d.w)
            })]
          })
        })
      })({
        onClose: () => _(!1),
        isDiscordDeveloper: e
      }),
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, s.jsx)(u.JO, {
          ...e,
          icon: a.BugIcon,
          "aria-label": E.Z.Messages.HELP,
          selected: n
        })
      }
    })
  })
}