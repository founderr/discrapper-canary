t.d(n, {
  Z: function() {
    return R
  }
}), t(47120), t(724458), t(653041);
var r = t(735250),
  i = t(470079),
  l = t(658722),
  o = t.n(l),
  u = t(392711),
  s = t.n(u),
  a = t(149765),
  c = t(442837),
  d = t(481060),
  f = t(271383),
  E = t(430824),
  _ = t(594174),
  I = t(700785),
  S = t(709054),
  g = t(962086),
  p = t(160404),
  T = t(225675),
  h = t(981631),
  C = t(689938),
  m = t(209740);

function N(e) {
  var n;
  return (0, r.jsx)("span", {
    style: {
      color: null !== (n = e.colorString) && void 0 !== n ? n : "currentColor"
    },
    children: e.name
  })
}

function R(e) {
  let {
    guildId: n
  } = e, t = (0, c.e7)([_.default], () => _.default.getCurrentUser()), l = (0, c.e7)([E.Z], () => E.Z.getGuild(n)), u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)), {
    impersonateType: R,
    viewingRoles: O
  } = (0, c.cj)([p.Z], () => ({
    impersonateType: p.Z.getImpersonateType(n),
    viewingRoles: p.Z.getViewingRoles(n)
  })), M = R === T.z.SERVER_SHOP, v = (0, c.e7)([f.ZP], () => null != t ? f.ZP.getTrueMember(n, t.id) : null), [A, b] = (0, d.useMultiSelect)(null == O ? [] : S.default.keys(O)), P = i.useRef(l);
  i.useEffect(() => {
    let e = {},
      n = P.current;
    if (null != n && null != R) {
      for (let n of A) {
        let t = u[n];
        null != t && (e[n] = t)
      }(0, g.Zm)(n.id, {
        type: R,
        roles: e
      })
    }
  }, [A, R, u]);
  let Z = null != l && null != t && null != v ? s()(u).filter(e => -1 !== v.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
    x = i.useMemo(() => null != l && null != t ? Object.values(u).filter(e => e.id !== l.id).filter(e => {
      var n;
      return !M || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null
    }).filter(e => (null == Z ? void 0 : Z.id) === e.id || I.r6(l, t.id, Z, e)) : [], [l, t, M, Z, u]);
  if (null == t || null == l || null == v) return null;
  let L = {};
  return (v.roles.forEach(e => {
    let n = u[e];
    null != n && (L[n.id] = n)
  }), a.e$(I.I0({
    forceRoles: L,
    context: l
  }), a.$e(h.Plq.MANAGE_GUILD, h.Plq.MANAGE_ROLES)) || l.isOwner(t.id)) ? (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(d.Combobox, {
      placeholder: C.Z.Messages.SEARCH_ROLES,
      value: A,
      onChange: b,
      autoFocus: !0,
      children: e => {
        let n = x.reduce((n, t) => (o()(e.toLowerCase(), t.name.toLowerCase()) && n.push((0, r.jsxs)(d.ComboboxItem, {
            value: t.id,
            children: [(0, r.jsx)(d.ComboboxItem.Label, {
              children: N(t)
            }), (0, r.jsx)(d.ComboboxItem.Checkbox, {})]
          }, t.id)), n), []),
          t = u[l.getEveryoneRoleId()];
        return null != t && n.push((0, r.jsxs)(d.ComboboxItem, {
          value: t.id,
          disabled: !0,
          children: [(0, r.jsx)(d.ComboboxItem.Label, {
            children: N(t)
          }), (0, r.jsx)(d.ComboboxItem.Checkbox, {
            checked: !0
          })]
        }, t.id)), n
      }
    })
  }) : (0, r.jsx)(d.Text, {
    variant: "text-md/medium",
    children: C.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
  })
}