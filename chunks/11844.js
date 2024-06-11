"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("481060"),
  l = s("906732"),
  r = s("879892"),
  o = s("709586"),
  d = s("267642"),
  u = s("981631"),
  c = s("689938"),
  S = s("190285");
t.default = function() {
  let e = n.useRef(null),
    {
      analyticsLocations: t
    } = (0, l.default)();

  function E(s) {
    null != e.current && (0, i.closeModal)(e.current), (0, r.addAppliedGuildBoosts)({
      analyticsLocation: {
        page: u.AnalyticsPages.GUILD_BOOSTING_USER_SETTINGS,
        section: u.AnalyticsSections.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: u.AnalyticsObjects.BUTTON_CTA,
        objectType: u.AnalyticsObjectTypes.BUY
      },
      analyticsLocations: t,
      guild: s
    })
  }
  async function T() {
    e.current = await (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(s.bind(s, "719228"));
      return t => (0, a.jsx)(e, {
        ...t,
        onSelectGuild: E
      })
    }, {
      onCloseRequest: () => {
        null != e.current && (0, i.closeModal)(e.current)
      }
    })
  }
  let _ = (0, d.generateBlockGuildSubscriptionPurchasesNode)();
  return (0, a.jsxs)("div", {
    className: S.wrapper,
    children: [(0, a.jsx)(o.default, {
      className: S.boostIcon,
      width: 16,
      height: 16
    }), (0, a.jsx)(i.Text, {
      className: S.copy,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: c.default.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
        boostAnyGuildHook: (e, t) => {
          let s = null != _,
            n = (0, a.jsx)(i.Button, {
              className: S.cta,
              disabled: s,
              color: i.Button.Colors.LINK,
              look: i.Button.Looks.LINK,
              onClick: s ? void 0 : T,
              children: e
            }, t);
          return s ? (0, a.jsx)(i.Tooltip, {
            text: _,
            children: e => (0, a.jsx)("span", {
              ...e,
              children: n
            })
          }, t) : n
        }
      })
    })]
  })
}