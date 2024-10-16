t.d(n, {
    L: function () {
        return r;
    }
});
var i = t(373793),
    a = t(367907),
    l = t(69580),
    o = t(812206),
    c = t(981631),
    d = t(689079);
function r(e) {
    var n, t, r, u, s;
    let { applicationId: m, userIndexState: E, guildIndexState: _, sectionName: p, location: M, source: C } = e;
    if (m === d.bi.BUILT_IN || (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) != null || (null === (t = _.result) || void 0 === t ? void 0 : t.sections[m]) != null) return Promise.resolve(!0);
    (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: M,
        application_id: m,
        section_name: p,
        source: C
    });
    let g = o.Z.getApplication(m),
        A = i.Y.USER_INSTALL,
        v = null == g ? void 0 : null === (s = g.integrationTypesConfig) || void 0 === s ? void 0 : null === (u = s[A]) || void 0 === u ? void 0 : null === (r = u.oauth2InstallParams) || void 0 === r ? void 0 : r.scopes;
    return new Promise((e) => {
        (0, l.openOAuth2Modal)(
            {
                clientId: m,
                integrationType: A,
                scopes: v,
                callback: (n) => {
                    let { location: t } = n;
                    null != t
                        ? ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: M,
                              application_id: m,
                              section_name: p,
                              source: C
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
