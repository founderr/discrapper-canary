t.d(n, {
  Z: function() {
    return A
  }
}), t(653041), t(47120);
var i = t(735250),
  s = t(470079),
  l = t(149765),
  a = t(442837),
  r = t(481060),
  o = t(749210),
  c = t(412899),
  d = t(995648),
  u = t(422559),
  I = t(598077),
  N = t(271383),
  E = t(430824),
  T = t(467679),
  m = t(285952),
  _ = t(823379),
  h = t(700785),
  O = t(689938),
  g = t(645874);

function A(e) {
  var n;
  let {
    guild: t,
    applicationIntegration: A
  } = e, C = (0, a.e7)([E.Z], () => E.Z.getRoles(t.id)), {
    application: S
  } = A, x = null != S.bot ? new I.Z(S.bot) : null, p = (0, a.e7)([N.ZP], () => null != x ? N.ZP.getMember(t.id, x.id) : null, [x, t]), R = null == x ? void 0 : x.id;
  s.useEffect(() => {
    if (null != R) o.Z.requestMembersById(t.id, R)
  }, [t.id, R]);
  let Z = s.useMemo(() => {
    var e, n, i;
    let s = C[t.getEveryoneRoleId()],
      a = null !== (n = null == p ? void 0 : null === (e = p.roles) || void 0 === e ? void 0 : e.map(e => C[e]).filter(_.lm)) && void 0 !== n ? n : [],
      r = null !== (i = null == s ? void 0 : s.permissions) && void 0 !== i ? i : h.Hn;
    for (let e of a) r = l.IH(r, e.permissions);
    return r
  }, [t, C, p]);
  return null == x ? null : (0, i.jsx)(r.Card, {
    editable: !0,
    className: g.card,
    children: (0, i.jsxs)(m.Z, {
      direction: m.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: x.getAvatarURL(t.id, 32),
          className: g.iconWrapper
        }), (0, i.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: O.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: x
          })
        }), (0, i.jsx)(T.Z, {
          className: g.tag,
          verified: x.isVerifiedBot()
        })]
      }), function(e, n, t, s) {
        let a = [],
          o = [];
        for (let e of u.VY) l.e$(s, e) ? a.push(e) : o.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(r.FormDivider, {
            className: g.divider
          }), t.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.FormTitle, {
              className: g.permissionHeader,
              children: O.Z.Messages.ROLES_LIST.format({
                numRoles: t.length
              })
            }), (0, i.jsx)(c.ZP, {
              className: g.rolePills,
              user: e,
              guild: n,
              userRoles: t,
              wrap: !1,
              readOnly: !0
            })]
          }) : null, a.length > 0 || o.length > 0 ? (0, i.jsx)(d.Z, {
            className: g.permissionList,
            grantedPermissions: a,
            grantedPermissionsHeader: O.Z.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: O.Z.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null]
        })
      }(x, t, null !== (n = null == p ? void 0 : p.roles) && void 0 !== n ? n : [], Z)]
    })
  })
}