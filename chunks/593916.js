"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007"), n("808653"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("448105"),
  u = n.n(l),
  s = n("917351"),
  o = n.n(s),
  a = n("316693"),
  d = n("446674"),
  c = n("77078"),
  f = n("26989"),
  S = n("305961"),
  E = n("697218"),
  h = n("991170"),
  g = n("479756"),
  p = n("38654"),
  _ = n("507950"),
  C = n("49111"),
  m = n("782340"),
  I = n("729320");

function T(e) {
  var t;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), l = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), {
    impersonateType: s,
    viewingRoles: v
  } = (0, d.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), R = s === _.ImpersonateType.SERVER_SHOP, N = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [M, L] = (0, c.useMultiSelect)(null == v ? [] : Object.keys(v)), A = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      t = A.current;
    if (null != t && null != s) {
      for (let n of M) {
        let i = t.getRole(n);
        null != i && (e[n] = i)
      }(0, g.updateImpersonating)(t.id, {
        type: s,
        roles: e
      })
    }
  }, [M, s]);
  let O = null != l && null != n && null != N ? o(l.roles).filter(e => -1 !== N.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    b = r.useMemo(() => null != l && null != n ? Object.values(l.roles).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !R || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == O ? void 0 : O.id) === e.id || h.default.isRoleHigher(l, n.id, O, e)) : [], [l, n, R, O]);
  if (null == n || null == l || null == N) return null;
  let x = {};
  N.roles.forEach(e => {
    let t = l.roles[e];
    null != t && (x[t.id] = t)
  });
  let P = a.default.has(h.default.computePermissionsForRoles({
    forceRoles: x,
    context: l
  }), a.default.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES));
  return P || l.isOwner(n.id) ? (0, i.jsx)("div", {
    className: I.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: m.default.Messages.SEARCH_ROLES,
      value: M,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = b.reduce((t, n) => (u(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, i.jsx)(c.ComboboxItem.Label, {
              children: T(n)
            }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = l.getRole(l.id);
        return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, i.jsx)(c.ComboboxItem.Label, {
            children: T(n)
          }), (0, i.jsx)(c.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, i.jsx)(c.Text, {
    variant: "text-md/medium",
    children: m.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}