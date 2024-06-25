t.d(n, {
  Z: function() {
    return A
  }
}), t(653041), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(149765),
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
  g = t(689938),
  O = t(645874);

function A(e) {
  var n;
  let {
    guild: t,
    applicationIntegration: A
  } = e, x = (0, a.e7)([E.Z], () => E.Z.getRoles(t.id)), {
    application: C
  } = A, S = null != C.bot ? new I.Z(C.bot) : null, p = (0, a.e7)([N.ZP], () => null != S ? N.ZP.getMember(t.id, S.id) : null, [S, t]), R = null == S ? void 0 : S.id;
  l.useEffect(() => {
    if (null != R) o.Z.requestMembersById(t.id, R)
  }, [t.id, R]);
  let Z = l.useMemo(() => {
    var e, n, i;
    let l = x[t.getEveryoneRoleId()],
      a = null !== (n = null == p ? void 0 : null === (e = p.roles) || void 0 === e ? void 0 : e.map(e => x[e]).filter(_.lm)) && void 0 !== n ? n : [],
      r = null !== (i = null == l ? void 0 : l.permissions) && void 0 !== i ? i : h.Hn;
    for (let e of a) r = s.IH(r, e.permissions);
    return r
  }, [t, x, p]);
  return null == S ? null : (0, i.jsx)(r.Card, {
    editable: !0,
    className: O.card,
    children: (0, i.jsxs)(m.Z, {
      direction: m.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: S.getAvatarURL(t.id, 32),
          className: O.iconWrapper
        }), (0, i.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: g.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: S
          })
        }), (0, i.jsx)(T.Z, {
          className: O.tag,
          verified: S.isVerifiedBot()
        })]
      }), function(e, n, t, l) {
        let a = [],
          o = [];
        for (let e of u.VY) s.e$(l, e) ? a.push(e) : o.push(e);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(r.FormDivider, {
            className: O.divider
          }), t.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.FormTitle, {
              className: O.permissionHeader,
              children: g.Z.Messages.ROLES_LIST.format({
                numRoles: t.length
              })
            }), (0, i.jsx)(c.ZP, {
              className: O.rolePills,
              user: e,
              guild: n,
              userRoles: t,
              wrap: !1,
              readOnly: !0
            })]
          }) : null, a.length > 0 || o.length > 0 ? (0, i.jsx)(d.Z, {
            className: O.permissionList,
            grantedPermissions: a,
            grantedPermissionsHeader: g.Z.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: g.Z.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null]
        })
      }(S, t, null !== (n = null == p ? void 0 : p.roles) && void 0 !== n ? n : [], Z)]
    })
  })
}