"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007"), n("808653"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("448105"),
  s = n.n(l),
  u = n("917351"),
  o = n.n(u),
  a = n("316693"),
  d = n("446674"),
  c = n("77078"),
  f = n("26989"),
  S = n("305961"),
  E = n("697218"),
  _ = n("991170"),
  h = n("479756"),
  g = n("38654"),
  p = n("507950"),
  C = n("49111"),
  I = n("782340"),
  m = n("29124");

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
    impersonateType: u,
    viewingRoles: v
  } = (0, d.useStateFromStoresObject)([g.default], () => ({
    impersonateType: g.default.getImpersonateType(t),
    viewingRoles: g.default.getViewingRoles(t)
  })), R = u === p.ImpersonateType.SERVER_SHOP, N = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [M, O] = (0, c.useMultiSelect)(null == v ? [] : Object.keys(v)), L = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      t = L.current;
    if (null != t && null != u) {
      for (let n of M) {
        let i = t.getRole(n);
        null != i && (e[n] = i)
      }(0, h.updateImpersonating)(t.id, {
        type: u,
        roles: e
      })
    }
  }, [M, u]);
  let A = null != l && null != n && null != N ? o(l.roles).filter(e => -1 !== N.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    b = r.useMemo(() => null != l && null != n ? Object.values(l.roles).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !R || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == A ? void 0 : A.id) === e.id || _.default.isRoleHigher(l, n.id, A, e)) : [], [l, n, R, A]);
  if (null == n || null == l || null == N) return null;
  let x = {};
  N.roles.forEach(e => {
    let t = l.roles[e];
    null != t && (x[t.id] = t)
  });
  let P = a.default.has(_.default.computePermissionsForRoles({
    forceRoles: x,
    context: l
  }), a.default.combine(C.Permissions.MANAGE_GUILD, C.Permissions.MANAGE_ROLES));
  return P || l.isOwner(n.id) ? (0, i.jsx)("div", {
    className: m.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: I.default.Messages.SEARCH_ROLES,
      value: M,
      onChange: O,
      autoFocus: !0,
      children: e => {
        let t = b.reduce((t, n) => (s(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
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
    children: I.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}