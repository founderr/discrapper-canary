n.d(t, {
    L: function () {
        return u;
    }
});
var r = n(373793),
    i = n(367907),
    a = n(69580),
    o = n(812206),
    s = n(981631),
    l = n(689079);
function u(e) {
    var t, n, u, c, d;
    let { applicationId: _, userIndexState: E, guildIndexState: f, sectionName: h, location: p, source: m } = e;
    if (_ === l.bi.BUILT_IN || (null === (t = E.result) || void 0 === t ? void 0 : t.sections[_]) != null || (null === (n = f.result) || void 0 === n ? void 0 : n.sections[_]) != null) return Promise.resolve(!0);
    (0, i.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: p,
        application_id: _,
        section_name: h,
        source: m
    });
    let I = o.Z.getApplication(_),
        T = r.Y.USER_INSTALL,
        g = null == I ? void 0 : null === (d = I.integrationTypesConfig) || void 0 === d ? void 0 : null === (c = d[T]) || void 0 === c ? void 0 : null === (u = c.oauth2InstallParams) || void 0 === u ? void 0 : u.scopes;
    return new Promise((e) => {
        (0, a.openOAuth2Modal)(
            {
                clientId: _,
                integrationType: T,
                scopes: g,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, i.yw)(s.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: p,
                              application_id: _,
                              section_name: h,
                              source: m
                          }),
                          e(!0))
                        : e(!1);
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
