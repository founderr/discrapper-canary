var i = n(200651),
    r = n(192379),
    l = n(149765),
    a = n(481060),
    s = n(995648),
    o = n(422559),
    c = n(388032),
    d = n(414164);
t.Z = function (e) {
    var t;
    let { application: n } = e,
        u = r.useMemo(() => {
            var e;
            let t = null == n ? void 0 : null === (e = n.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return o.VY.filter((e) => l.e$(l.vB(t), e));
        }, [null == n ? void 0 : null === (t = n.install_params) || void 0 === t ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, i.jsxs)('div', {
              className: d.sectionContainer,
              children: [
                  (0, i.jsx)(a.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: c.intl.string(c.t.runNFx)
                  }),
                  (0, i.jsx)(s.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.intl.string(c.t.SLgiND)
                  })
              ]
          })
        : null;
};
