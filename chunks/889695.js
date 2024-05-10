"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
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
  g = n("594174"),
  E = n("700785"),
  h = n("709054"),
  _ = n("962086"),
  p = n("160404"),
  C = n("225675"),
  I = n("981631"),
  m = n("689938"),
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

function M(e) {
  let {
    guildId: t
  } = e, n = (0, c.useStateFromStores)([g.default], () => g.default.getCurrentUser()), l = (0, c.useStateFromStores)([S.default], () => S.default.getGuild(t)), o = (0, c.useStateFromStores)([S.default], () => S.default.getRoles(t)), {
    impersonateType: M,
    viewingRoles: N
  } = (0, c.useStateFromStoresObject)([p.default], () => ({
    impersonateType: p.default.getImpersonateType(t),
    viewingRoles: p.default.getViewingRoles(t)
  })), v = M === C.ImpersonateType.SERVER_SHOP, O = (0, c.useStateFromStores)([f.default], () => null != n ? f.default.getTrueMember(t, n.id) : null), [A, L] = (0, d.useMultiSelect)(null == N ? [] : h.default.keys(N)), b = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      t = b.current;
    if (null != t && null != M) {
      for (let t of A) {
        let n = o[t];
        null != n && (e[t] = n)
      }(0, _.updateImpersonating)(t.id, {
        type: M,
        roles: e
      })
    }
  }, [A, M, o]);
  let x = null != l && null != n && null != O ? u()(o).filter(e => -1 !== O.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    P = i.useMemo(() => null != l && null != n ? Object.values(o).filter(e => e.id !== l.id).filter(e => {
      var t;
      return !v || (null === (t = e.tags) || void 0 === t ? void 0 : t.subscription_listing_id) != null
    }).filter(e => (null == x ? void 0 : x.id) === e.id || E.isRoleHigher(l, n.id, x, e)) : [], [l, n, v, x, o]);
  if (null == n || null == l || null == O) return null;
  let w = {};
  return (O.roles.forEach(e => {
    let t = o[e];
    null != t && (w[t.id] = t)
  }), a.has(E.computePermissionsForRoles({
    forceRoles: w,
    context: l
  }), a.combine(I.Permissions.MANAGE_GUILD, I.Permissions.MANAGE_ROLES)) || l.isOwner(n.id)) ? (0, r.jsx)("div", {
    className: T.container,
    children: (0, r.jsx)(d.Combobox, {
      placeholder: m.default.Messages.SEARCH_ROLES,
      value: A,
      onChange: L,
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
    children: m.default.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}