"use strict";
t.d(s, {
  R: function() {
    return N
  },
  Z: function() {
    return m
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(149765),
  r = t(442837),
  o = t(481060),
  c = t(430824),
  d = t(496675),
  u = t(700785),
  E = t(647086),
  _ = t(135899),
  I = t(689938),
  T = t(609191);

function N(e) {
  return _.$X.filter(s => (null == e ? void 0 : e.id) !== E._ && u.oz(s, e))
}

function m(e) {
  let {
    guild: s
  } = e, i = (0, r.e7)([c.Z], () => c.Z.getRole(s.id, s.getEveryoneRoleId())), u = N(s), E = u.length > 0, m = _.$X.some(e => !d.Z.can(e, s, null, {
    [i.id]: {
      ...i,
      permissions: a.Od(i.permissions, e)
    }
  })), S = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: T.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: I.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: I.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({
          numPerms: u.length
        })
      })]
    }), E ? (0, n.jsx)(o.CircleExclamationPointIcon, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: T.warning,
      "aria-label": I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
    }) : (0, n.jsx)(o.CircleCheckIcon, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: T.check,
      "aria-label": I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
    })]
  });
  return E ? m ? (0, n.jsx)(o.Tooltip, {
    text: I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
    children: e => (0, n.jsx)("div", {
      className: l()(T.simpleItemWrapper, T.disabled),
      ...e,
      children: S
    })
  }) : (0, n.jsx)(o.Clickable, {
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("39627")]).then(t.bind(t, 193845));
        return t => (0, n.jsx)(e, {
          guild: s,
          ...t
        })
      })
    },
    className: l()(T.simpleItemWrapper, T.clickable),
    children: S
  }) : (0, n.jsx)("div", {
    className: T.simpleItemWrapper,
    children: S
  })
}