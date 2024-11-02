t.d(n, {
    L: function () {
        return d;
    }
});
var i = t(373793),
    l = t(367907),
    a = t(69580),
    o = t(812206),
    r = t(981631),
    c = t(689079);
function d(e) {
    var n, t, d, u, s;
    let { applicationId: m, userIndexState: E, guildIndexState: p, sectionName: g, location: C, source: _ } = e;
    if (m === c.bi.BUILT_IN || (null === (n = E.result) || void 0 === n ? void 0 : n.sections[m]) != null || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[m]) != null) return Promise.resolve(!0);
    (0, l.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: C,
        application_id: m,
        section_name: g,
        source: _
    });
    let f = o.Z.getApplication(m),
        v = i.Y.USER_INSTALL,
        M = null == f ? void 0 : null === (s = f.integrationTypesConfig) || void 0 === s ? void 0 : null === (u = s[v]) || void 0 === u ? void 0 : null === (d = u.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
    return new Promise((e) => {
        (0, a.openOAuth2Modal)(
            {
                clientId: m,
                integrationType: v,
                scopes: M,
                callback: (n) => {
                    let { location: t } = n;
                    null != t
                        ? ((0, l.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: C,
                              application_id: m,
                              section_name: g,
                              source: _
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
