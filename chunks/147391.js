n.d(t, {
    L: function () {
        return c;
    }
});
var i = n(373793),
    a = n(367907),
    o = n(69580),
    l = n(812206),
    d = n(981631),
    r = n(689079);
function c(e) {
    var t, n, c, m, u;
    let { applicationId: s, userIndexState: p, guildIndexState: _, sectionName: E, location: g, source: M } = e;
    if (s === r.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) != null) return Promise.resolve(!0);
    (0, a.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: g,
        application_id: s,
        section_name: E,
        source: M
    });
    let A = l.Z.getApplication(s),
        C = i.Y.USER_INSTALL,
        I = null == A ? void 0 : null === (u = A.integrationTypesConfig) || void 0 === u ? void 0 : null === (m = u[C]) || void 0 === m ? void 0 : null === (c = m.oauth2InstallParams) || void 0 === c ? void 0 : c.scopes;
    return new Promise((e) => {
        (0, o.openOAuth2Modal)(
            {
                clientId: s,
                integrationType: C,
                scopes: I,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, a.yw)(d.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                              location: g,
                              application_id: s,
                              section_name: E,
                              source: M
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
