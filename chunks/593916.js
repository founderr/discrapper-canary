"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
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
  h = n("299039"),
  g = n("479756"),
  p = n("38654"),
  C = n("507950"),
  I = n("49111"),
  m = n("782340"),
  T = n("29124");

function v(e) {
  var t;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function R(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), l = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), {
    impersonateType: u,
    viewingRoles: R
  } = (0, d.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), N = u === C.ImpersonateType.SERVER_SHOP, M = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [O, L] = (0, c.useMultiSelect)(null == R ? [] : h.default.keys(R)), A = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      t = A.current;
    if (null != t && null != u) {
      for (let n of O) {
        let i = t.getRole(n);
        null != i && (e[n] = i)
      }(0, g.updateImpersonating)(t.id, {
        type: u,
        roles: e
      })
    }
  }, [O, u]);
  let b = null != l && null != n && null != M ? o(l.roles).filter(e => -1 !== M.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = r.useMemo(() => null != l && null != n ? Object.values(l.roles).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !N || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == b ? void 0 : b.id) === e.id || _.default.isRoleHigher(l, n.id, b, e)) : [], [l, n, N, b]);
  if (null == n || null == l || null == M) return null;
  let P = {};
  M.roles.forEach(e => {
    let t = l.roles[e];
    null != t && (P[t.id] = t)
  });
  let w = a.default.has(_.default.computePermissionsForRoles({
    forceRoles: P,
    context: l
  }), a.default.combine(I.Permissions.MANAGE_GUILD, I.Permissions.MANAGE_ROLES));
  return w || l.isOwner(n.id) ? (0, i.jsx)("div", {
    className: T.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: m.default.Messages.SEARCH_ROLES,
      value: O,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = x.reduce((t, n) => (s(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, i.jsx)(c.ComboboxItem.Label, {
              children: v(n)
            }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = l.getRole(l.getEveryoneRoleId());
        return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, i.jsx)(c.ComboboxItem.Label, {
            children: v(n)
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