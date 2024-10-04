t.d(n, {
    Z: function () {
        return f;
    }
}),
    t(653041),
    t(47120);
var i = t(735250),
    a = t(470079),
    s = t(149765),
    l = t(442837),
    r = t(481060),
    o = t(749210),
    c = t(412899),
    d = t(995648),
    u = t(385499),
    I = t(600164),
    m = t(422559),
    _ = t(598077),
    N = t(271383),
    E = t(430824),
    T = t(823379),
    h = t(700785),
    p = t(689938),
    g = t(452199);
function f(e) {
    var n;
    let { guild: t, applicationIntegration: f } = e,
        x = (0, l.e7)([E.Z], () => E.Z.getRoles(t.id)),
        { application: C } = f,
        O = null != C.bot ? new _.Z(C.bot) : null,
        S = (0, l.e7)([N.ZP], () => (null != O ? N.ZP.getMember(t.id, O.id) : null), [O, t]),
        A = null == O ? void 0 : O.id;
    a.useEffect(() => {
        if (null != A) o.Z.requestMembersById(t.id, A);
    }, [t.id, A]);
    let R = a.useMemo(() => {
        var e, n, i;
        let a = x[t.getEveryoneRoleId()],
            l = null !== (n = null == S ? void 0 : null === (e = S.roles) || void 0 === e ? void 0 : e.map((e) => x[e]).filter(T.lm)) && void 0 !== n ? n : [],
            r = null !== (i = null == a ? void 0 : a.permissions) && void 0 !== i ? i : h.Hn;
        for (let e of l) r = s.IH(r, e.permissions);
        return r;
    }, [t, x, S]);
    return null == O
        ? null
        : (0, i.jsx)(r.Card, {
              editable: !0,
              className: g.card,
              children: (0, i.jsxs)(I.Z, {
                  direction: I.Z.Direction.VERTICAL,
                  children: [
                      (0, i.jsxs)(I.Z, {
                          align: I.Z.Align.CENTER,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: O.getAvatarURL(t.id, 32),
                                  className: g.iconWrapper
                              }),
                              (0, i.jsx)(r.Text, {
                                  color: 'header-primary',
                                  variant: 'text-sm/normal',
                                  children: p.Z.Messages.INTEGRATIONS_APPLICATION_BOT_NAME.format({ user: O })
                              }),
                              (0, i.jsx)(u.Z, {
                                  className: g.tag,
                                  verified: O.isVerifiedBot()
                              })
                          ]
                      }),
                      (function (e, n, t, a) {
                          let l = [],
                              o = [];
                          for (let e of m.VY) s.e$(a, e) ? l.push(e) : o.push(e);
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.FormDivider, { className: g.divider }),
                                  t.length > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(r.FormTitle, {
                                                    className: g.permissionHeader,
                                                    children: p.Z.Messages.ROLES_LIST.format({ numRoles: t.length })
                                                }),
                                                (0, i.jsx)(c.ZP, {
                                                    className: g.rolePills,
                                                    user: e,
                                                    guild: n,
                                                    userRoles: t,
                                                    wrap: !1,
                                                    readOnly: !0
                                                })
                                            ]
                                        })
                                      : null,
                                  l.length > 0 || o.length > 0
                                      ? (0, i.jsx)(d.Z, {
                                            className: g.permissionList,
                                            grantedPermissions: l,
                                            grantedPermissionsHeader: p.Z.Messages.INTEGRATIONS_APPLICATION_GRANTED_PERMISSIONS,
                                            disabledPermissions: o,
                                            disabledPermissionsHeader: p.Z.Messages.INTEGRATIONS_APPLICATION_DENIED_PERMISSIONS
                                        })
                                      : null
                              ]
                          });
                      })(O, t, null !== (n = null == S ? void 0 : S.roles) && void 0 !== n ? n : [], R)
                  ]
              })
          });
}
