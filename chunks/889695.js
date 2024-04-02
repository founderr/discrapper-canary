"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120"), n("724458"), n("653041");
var i = n("735250"),
  r = n("470079"),
  l = n("658722"),
  s = n.n(l),
  u = n("392711"),
  o = n.n(u),
  a = n("149765"),
  d = n("442837"),
  c = n("481060"),
  f = n("271383"),
  S = n("430824"),
  E = n("594174"),
  _ = n("700785"),
  g = n("709054"),
  h = n("962086"),
  p = n("160404"),
  C = n("225675"),
  I = n("981631"),
  T = n("689938"),
  m = n("591174");

function R(e) {
  var t;
  return (0, i.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function N(e) {
  let {
    guildId: t
  } = e, n = (0, d.useStateFromStores)([E.default], () => E.default.getCurrentUser()), l = (0, d.useStateFromStores)([S.default], () => S.default.getGuild(t)), u = (0, d.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: N,
    viewingRoles: v
  } = (0, d.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), O = N === C.ImpersonateType.SERVER_SHOP, A = (0, d.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [M, L] = (0, c.useMultiSelect)(null == v ? [] : g.default.keys(v)), b = r.useRef(l);
  r.useEffect(() => {
    let e = {},
      t = b.current;
    if (null != t && null != N) {
      for (let t of M) {
        let n = u[t];
        null != n && (e[t] = n)
      }(0, h.updateImpersonating)(t.id, {
        type: N,
        roles: e
      })
    }
  }, [M, N, u]);
  let P = null != l && null != n && null != A ? o()(u).filter(e => -1 !== A.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = r.useMemo(() => null != l && null != n ? Object.values(u).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !O || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == P ? void 0 : P.id) === e.id || _.isRoleHigher(l, n.id, P, e)) : [], [l, n, O, P, u]);
  if (null == n || null == l || null == A) return null;
  let G = {};
  return (A.roles.forEach(e => {
    let t = u[e];
    null != t && (G[t.id] = t)
  }), a.has(_.computePermissionsForRoles({
    forceRoles: G,
    context: l
  }), a.combine(I.Permissions.MANAGE_GUILD, I.Permissions.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, i.jsx)("div", {
    className: m.container,
    children: (0, i.jsx)(c.Combobox, {
      placeholder: T.default.Messages.SEARCH_ROLES,
      value: M,
      onChange: L,
      autoFocus: !0,
      children: e => {
        let t = x.reduce((t, n) => (s()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, i.jsxs)(c.ComboboxItem, {
            value: n.id,
            children: [(0, i.jsx)(c.ComboboxItem.Label, {
              children: R(n)
            }), (0, i.jsx)(c.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = u[l.getEveryoneRoleId()];
        return null != n && t.push((0, i.jsxs)(c.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, i.jsx)(c.ComboboxItem.Label, {
            children: R(n)
          }), (0, i.jsx)(c.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, i.jsx)(c.Text, {
    variant: "text-md/medium",
    children: T.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}