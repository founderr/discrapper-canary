t.d(n, {
  Z: function() {
return M;
  }
}), t(47120), t(724458), t(653041);
var r = t(735250),
  i = t(470079),
  o = t(658722),
  l = t.n(o),
  u = t(392711),
  a = t.n(u),
  s = t(149765),
  c = t(442837),
  d = t(481060),
  _ = t(271383),
  E = t(430824),
  f = t(594174),
  I = t(700785),
  T = t(709054),
  S = t(962086),
  A = t(160404),
  N = t(225675),
  g = t(981631),
  p = t(689938),
  O = t(821492);

function C(e) {
  var n;
  return (0, r.jsx)('span', {
style: {
  color: null !== (n = e.colorString) && void 0 !== n ? n : 'currentColor'
},
children: e.name
  });
}

function M(e) {
  let {
guildId: n
  } = e, t = (0, c.e7)([f.default], () => f.default.getCurrentUser()), o = (0, c.e7)([E.Z], () => E.Z.getGuild(n)), u = (0, c.e7)([E.Z], () => E.Z.getRoles(n)), {
impersonateType: M,
viewingRoles: R
  } = (0, c.cj)([A.Z], () => ({
impersonateType: A.Z.getImpersonateType(n),
viewingRoles: A.Z.getViewingRoles(n)
  })), m = M === N.z.SERVER_SHOP, L = (0, c.e7)([_.ZP], () => null != t ? _.ZP.getTrueMember(n, t.id) : null), [h, D] = (0, d.useMultiSelect)(null == R ? [] : T.default.keys(R)), v = i.useRef(o);
  i.useEffect(() => {
let e = {},
  n = v.current;
if (null != n && null != M) {
  for (let n of h) {
    let t = u[n];
    null != t && (e[n] = t);
  }
  (0, S.Zm)(n.id, {
    type: M,
    roles: e
  });
}
  }, [
h,
M,
u
  ]);
  let U = null != o && null != t && null != L ? a()(u).filter(e => -1 !== L.roles.indexOf(e.id)).sortBy(e => -e.position).first() : void 0,
b = i.useMemo(() => null != o && null != t ? Object.values(u).filter(e => e.id !== o.id).filter(e => {
  var n;
  return !m || (null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
}).filter(e => (null == U ? void 0 : U.id) === e.id || I.r6(o, t.id, U, e)) : [], [
  o,
  t,
  m,
  U,
  u
]);
  if (null == t || null == o || null == L)
return null;
  let Z = {};
  return (L.roles.forEach(e => {
let n = u[e];
null != n && (Z[n.id] = n);
  }), s.e$(I.I0({
forceRoles: Z,
context: o
  }), s.$e(g.Plq.MANAGE_GUILD, g.Plq.MANAGE_ROLES)) || o.isOwner(t.id)) ? (0, r.jsx)('div', {
className: O.container,
children: (0, r.jsx)(d.Combobox, {
  placeholder: p.Z.Messages.SEARCH_ROLES,
  value: h,
  onChange: D,
  autoFocus: !0,
  children: e => {
    let n = b.reduce((n, t) => (l()(e.toLowerCase(), t.name.toLowerCase()) && n.push((0, r.jsxs)(d.ComboboxItem, {
        value: t.id,
        children: [
          (0, r.jsx)(d.ComboboxItem.Label, {
            children: C(t)
          }),
          (0, r.jsx)(d.ComboboxItem.Checkbox, {})
        ]
      }, t.id)), n), []),
      t = u[o.getEveryoneRoleId()];
    return null != t && n.push((0, r.jsxs)(d.ComboboxItem, {
      value: t.id,
      disabled: !0,
      children: [
        (0, r.jsx)(d.ComboboxItem.Label, {
          children: C(t)
        }),
        (0, r.jsx)(d.ComboboxItem.Checkbox, {
          checked: !0
        })
      ]
    }, t.id)), n;
  }
})
  }) : (0, r.jsx)(d.Text, {
variant: 'text-md/medium',
children: p.Z.Messages.VIEW_AS_ROLES_NO_ACCESS
  });
}