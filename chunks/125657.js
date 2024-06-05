"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("653041"), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("149765"),
  i = l("442837"),
  r = l("481060"),
  o = l("749210"),
  d = l("412899"),
  u = l("995648"),
  c = l("422559"),
  f = l("598077"),
  I = l("271383"),
  m = l("430824"),
  T = l("467679"),
  E = l("285952"),
  N = l("823379"),
  _ = l("700785"),
  S = l("689938"),
  h = l("69674");

function g(e) {
  var t;
  let {
    guild: l,
    applicationIntegration: g
  } = e, p = (0, i.useStateFromStores)([m.default], () => m.default.getRoles(l.id)), {
    application: O
  } = g, A = null != O.bot ? new f.default(O.bot) : null, C = (0, i.useStateFromStores)([I.default], () => null != A ? I.default.getMember(l.id, A.id) : null, [A, l]), x = null == A ? void 0 : A.id;
  a.useEffect(() => {
    null != x && o.default.requestMembersById(l.id, x)
  }, [l.id, x]);
  let R = a.useMemo(() => {
    var e, t, n;
    let a = p[l.getEveryoneRoleId()],
      i = null !== (t = null == C ? void 0 : null === (e = C.roles) || void 0 === e ? void 0 : e.map(e => p[e]).filter(N.isNotNullish)) && void 0 !== t ? t : [],
      r = null !== (n = null == a ? void 0 : a.permissions) && void 0 !== n ? n : _.NONE;
    for (let e of i) r = s.add(r, e.permissions);
    return r
  }, [l, p, C]);
  return null == A ? null : (0, n.jsx)(r.Card, {
    editable: !0,
    className: h.card,
    children: (0, n.jsxs)(E.default, {
      direction: E.default.Direction.VERTICAL,
      children: [(0, n.jsxs)(E.default, {
        align: E.default.Align.CENTER,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: A.getAvatarURL(l.id, 32),
          className: h.iconWrapper
        }), (0, n.jsx)(r.Text, {
          color: "header-primary",
          variant: "text-sm/normal",
          children: S.default.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({
            user: A
          })
        }), (0, n.jsx)(T.default, {
          className: h.tag,
          verified: A.isVerifiedBot()
        })]
      }), function(e, t, l, a) {
        let i = [],
          o = [];
        for (let e of c.OrderedPermissions) s.has(a, e) ? i.push(e) : o.push(e);
        return (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(r.FormDivider, {
            className: h.divider
          }), l.length > 0 ? (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(r.FormTitle, {
              className: h.permissionHeader,
              children: S.default.Messages.ROLES_LIST.format({
                numRoles: l.length
              })
            }), (0, n.jsx)(d.default, {
              className: h.rolePills,
              user: e,
              guild: t,
              userRoles: l,
              wrap: !1,
              readOnly: !0
            })]
          }) : null, i.length > 0 || o.length > 0 ? (0, n.jsx)(u.default, {
            className: h.permissionList,
            grantedPermissions: i,
            grantedPermissionsHeader: S.default.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
            disabledPermissions: o,
            disabledPermissionsHeader: S.default.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
          }) : null]
        })
      }(A, l, null !== (t = null == C ? void 0 : C.roles) && void 0 !== t ? t : [], R)]
    })
  })
}