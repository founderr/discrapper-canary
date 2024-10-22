var i = n(200651),
    a = n(192379),
    s = n(149765),
    r = n(481060),
    l = n(995648),
    o = n(422559),
    c = n(689938),
    d = n(141381);
t.Z = function (e) {
    var t;
    let { application: n } = e,
        u = a.useMemo(() => {
            var e;
            let t = null == n ? void 0 : null === (e = n.install_params) || void 0 === e ? void 0 : e.permissions;
            if (null != t) return o.VY.filter((e) => s.e$(s.vB(t), e));
        }, [null == n ? void 0 : null === (t = n.install_params) || void 0 === t ? void 0 : t.permissions]);
    return null != u && u.length > 0
        ? (0, i.jsxs)('div', {
              className: d.sectionContainer,
              children: [
                  (0, i.jsx)(r.Heading, {
                      variant: 'heading-lg/semibold',
                      color: 'header-primary',
                      children: c.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_HEADING
                  }),
                  (0, i.jsx)(l.Z, {
                      className: d.contentContainer,
                      grantedPermissions: u,
                      grantedPermissionsHeader: c.Z.Messages.APP_DIRECTORY_PROFILE_REQUIRED_PERMISSIONS_SUB_HEADING
                  })
              ]
          })
        : null;
};
