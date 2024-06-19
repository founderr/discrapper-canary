var n = t(735250),
  i = t(470079),
  a = t(481060),
  l = t(906732),
  r = t(879892),
  o = t(709586),
  c = t(267642),
  E = t(981631),
  d = t(689938),
  _ = t(381168);
s.Z = function() {
  let e = i.useRef(null),
    {
      analyticsLocations: s
    } = (0, l.ZP)();

  function T(t) {
    null != e.current && (0, a.closeModal)(e.current), (0, r.u)({
      analyticsLocation: {
        page: E.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: E.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: E.qAy.BUTTON_CTA,
        objectType: E.Qqv.BUY
      },
      analyticsLocations: s,
      guild: t
    })
  }
  async function S() {
    e.current = await (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(t.bind(t, 719228));
      return s => (0, n.jsx)(e, {
        ...s,
        onSelectGuild: T
      })
    }, {
      onCloseRequest: () => {
        null != e.current && (0, a.closeModal)(e.current)
      }
    })
  }
  let u = (0, c.aq)();
  return (0, n.jsxs)("div", {
    className: _.wrapper,
    children: [(0, n.jsx)(o.Z, {
      className: _.boostIcon,
      width: 16,
      height: 16
    }), (0, n.jsx)(a.Text, {
      className: _.copy,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: d.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
        boostAnyGuildHook: (e, s) => {
          let t = null != u,
            i = (0, n.jsx)(a.Button, {
              className: _.cta,
              disabled: t,
              color: a.Button.Colors.LINK,
              look: a.Button.Looks.LINK,
              onClick: t ? void 0 : S,
              children: e
            }, s);
          return t ? (0, n.jsx)(a.Tooltip, {
            text: u,
            children: e => (0, n.jsx)("span", {
              ...e,
              children: i
            })
          }, s) : i
        }
      })
    })]
  })
}