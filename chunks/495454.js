"use strict";
s.r(t), s.d(t, {
  getRiskyPerms: function() {
    return f
  },
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("316693"),
  r = s("77078"),
  o = s("957255"),
  d = s("578706"),
  u = s("423487"),
  c = s("991170"),
  E = s("695838"),
  _ = s("69741"),
  I = s("782340"),
  T = s("854743");

function f(e) {
  return _.MODERATOR_PERMISSIONS.filter(t => (null == e ? void 0 : e.id) !== E.FAVORITES_RAW_GUILD_ID && c.default.canEveryone(t, e))
}

function S(e) {
  let {
    guild: t
  } = e, l = t.roles[t.getEveryoneRoleId()], c = f(t), E = c.length > 0, S = _.MODERATOR_PERMISSIONS.some(e => !o.default.can(e, t, null, {
    [l.id]: {
      ...l,
      permissions: i.default.remove(l.permissions, e)
    }
  })), m = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: T.itemContent,
      children: [(0, a.jsx)(r.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: I.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: I.default.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({
          numPerms: c.length
        })
      })]
    }), E ? (0, a.jsx)(u.default, {
      height: 24,
      width: 24,
      className: T.warning,
      "aria-label": I.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
    }) : (0, a.jsx)(d.default, {
      height: 24,
      width: 24,
      className: T.check,
      "aria-label": I.default.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
    })]
  });
  return E ? S ? (0, a.jsx)(r.Tooltip, {
    text: I.default.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
    children: e => (0, a.jsx)("div", {
      className: n(T.simpleItemWrapper, T.disabled),
      ...e,
      children: m
    })
  }) : (0, a.jsx)(r.Clickable, {
    onClick: () => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await s.el("343600").then(s.bind(s, "343600"));
        return s => (0, a.jsx)(e, {
          guild: t,
          ...s
        })
      })
    },
    className: n(T.simpleItemWrapper, T.clickable),
    children: m
  }) : (0, a.jsx)("div", {
    className: T.simpleItemWrapper,
    children: m
  })
}