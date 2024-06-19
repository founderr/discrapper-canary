n.r(t), n.d(t, {
  MemberListContentSettingsMenu: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(485267),
  r = n(146282),
  o = n(981631),
  c = n(689938);
let u = e => {
  let {
    closePopout: t
  } = e, u = (0, i.e7)([r.Z], () => r.Z.hidden);
  return (0, l.jsx)(s.Menu, {
    onSelect: () => {},
    navId: "member-list-settings-menu",
    variant: "fixed",
    onClose: null != t ? t : o.dG4,
    "aria-label": c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ALT,
    children: (0, l.jsxs)(s.MenuGroup, {
      children: [(0, l.jsx)(s.MenuItem, {
        id: "about",
        label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_ABOUT,
        icon: s.CircleInformationIcon,
        action: () => {
          (0, s.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("71517")]).then(n.bind(n, 549505));
            return t => (0, l.jsx)(e, {
              ...t
            })
          }), null == t || t()
        }
      }), (0, l.jsx)(s.MenuCheckboxItem, {
        id: "hide",
        label: c.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_SETTINGS_HIDE,
        checked: u,
        action: () => {
          (0, a.l)(), null == t || t()
        }
      })]
    })
  })
};
t.default = () => (0, l.jsx)(s.Popout, {
  animation: s.Popout.Animation.NONE,
  position: "bottom",
  align: "right",
  renderPopout: e => {
    let {
      closePopout: t
    } = e;
    return (0, l.jsx)(u, {
      closePopout: t
    })
  },
  children: e => (0, l.jsx)(s.Clickable, {
    ...e,
    onClick: t => {
      t.stopPropagation(), e.onClick(t)
    },
    style: {
      width: "12px",
      height: "12px"
    },
    children: (0, l.jsx)(s.SettingsIcon, {
      size: "xxs"
    })
  })
})