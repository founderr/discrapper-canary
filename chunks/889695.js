"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120"), n("724458"), n("653041");
var r = n("735250"),
  i = n("470079"),
  l = n("658722"),
  s = n.n(l),
  o = n("392711"),
  u = n.n(o),
  a = n("149765"),
  c = n("442837"),
  d = n("481060"),
  f = n("271383"),
  S = n("430824"),
  h = n("594174"),
  g = n("700785"),
  E = n("709054"),
  _ = n("962086"),
  p = n("160404"),
  C = n("225675"),
  m = n("981631"),
  I = n("689938"),
  T = n("717404");

function R(e) {
  var t;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (t = e.colorString) && void 0 !== t ? t : "currentColor"
    },
    children: e.name
  })
}

function v(e) {
  let {
    guildId: t
  } = e, n = (0, c.useStateFromStores)([h.default], () => h.default.getCurrentUser()), l = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t)), o = (0, c.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: v,
    viewingRoles: M
  } = (0, c.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), N = v === C.ImpersonateType.SERVER_SHOP, O = (0, c.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [b, x] = (0, d.useMultiSelect)(null == M ? [] : E.default.keys(M)), A = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = A.current;
    if (null != t && null != v) {
      for (let t of b) {
        let n = o[t];
        null != n && (e[t] = n)
      }(0, _.updateImpersonating)(t.id, {
        type: v,
        roles: e
      })
    }
  }, [b, v, o]);
  let L = null != l && null != n && null != O ? u()(o).filter(e => -1 !== O.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    P = i.useMemo(() => null != l && null != n ? Object.values(o).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !N || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == L ? void 0 : L.id) === e.id || g.isRoleHigher(l, n.id, L, e)) : [], [l, n, N, L, o]);
  if (null == n || null == l || null == O) return null;
  let D = {};
  return (O.roles.forEach(e => {
    let t = o[e];
    null != t && (D[t.id] = t)
  }), a.has(g.computePermissionsForRoles({
    forceRoles: D,
    context: l
  }), a.combine(m.Permissions.MANAGE_GUILD, m.Permissions.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: T.container,
    children: (0, r.jsx)(d.Combobox, {
      placeholder: I.default.Messages.SEARCH_ROLES,
      value: b,
      onChange: x,
      autoFocus: !0,
      children: e => {
        let t = P.reduce((t, n) => (s()(e.toLowerCase(), n.name.toLowerCase()) && t.push((0, r.jsxs)(d.ComboboxItem, {
            value: n.id,
            children: [(0, r.jsx)(d.ComboboxItem.Label, {
              children: R(n)
            }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
          }, n.id)), t), []),
          n = o[l.getEveryoneRoleId()];
        return null != n && t.push((0, r.jsxs)(d.ComboboxItem, {
          value: n.id,
          disabled: !0,
          children: [(0, r.jsx)(d.ComboboxItem.Label, {
            children: R(n)
          }), (0, r.jsx)(d.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, n.id)), t
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: I.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}