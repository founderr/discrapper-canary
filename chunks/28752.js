"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(373793),
  l = n(974674),
  u = n(481060),
  _ = n(688465),
  c = n(768581),
  d = n(63063),
  E = n(981631),
  I = n(182294),
  T = n(689079),
  h = n(689938),
  f = n(82849);

function S(e) {
  let {
    inApp: t,
    application: n,
    onSelect: s
  } = e, S = r.useMemo(() => c.ZP.getApplicationIconURL({
    id: n.id,
    icon: n.icon
  }), [n.icon, n.id]), A = r.useMemo(() => [{
    type: a.Y.USER_INSTALL,
    icon: u.UserPlusIcon,
    title: h.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
    subtitle: h.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
    beta: !1
  }, {
    type: a.Y.GUILD_INSTALL,
    icon: u.ServerIcon,
    title: h.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
    subtitle: h.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
    beta: !1
  }].filter(e => {
    var t, i;
    return (null === (i = n.integrationTypesConfig) || void 0 === i ? void 0 : null === (t = i[e.type]) || void 0 === t ? void 0 : t.oauth2InstallParams) != null
  }), [n.integrationTypesConfig]);
  return (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsxs)("div", {
      className: f.header,
      children: [(0, i.jsx)(l.qE, {
        src: S,
        size: I.EF.SIZE_80,
        "aria-label": n.name
      }), (0, i.jsx)(u.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: n.name
      })]
    }), (0, i.jsx)("ul", {
      className: f.rows,
      children: A.map(e => (0, i.jsxs)(u.Clickable, {
        tag: "li",
        className: o()(f.row, {
          [f.inApp]: t
        }),
        onClick: () => s(e.type),
        children: [(0, i.jsx)(e.icon, {
          size: "md",
          color: "currentColor",
          className: f.leftIcon
        }), (0, i.jsxs)("div", {
          className: f.rowInner,
          children: [(0, i.jsxs)("div", {
            className: f.rowDetails,
            children: [(0, i.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "interactive-active",
              children: e.title
            }), (0, i.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-muted",
              children: e.subtitle
            })]
          }), e.beta && (0, i.jsx)(_.Z, {}), (0, i.jsx)(u.ChevronSmallRightIcon, {
            size: "md",
            color: "currentColor",
            className: f.rightIcon
          })]
        })]
      }, e.type))
    }), (0, i.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: f.learnMore,
      children: h.Z.Messages.OAUTH2_INTEGRATION_SELECT_DETAILS.format({
        betaUserLimit: T.um,
        learnMoreUrl: d.Z.getArticleURL(E.BhN.USING_APPS_FAQ)
      })
    })]
  })
}