n.d(t, {
    L: function () {
        return d;
    }
});
var o = n(373793),
    a = n(367907),
    i = n(69580),
    l = n(812206),
    r = n(981631),
    c = n(689079);
function d(e) {
    var t, n, d, u, m;
    let { applicationId: s, userIndexState: p, guildIndexState: _, sectionName: E, location: g, source: M } = e;
    if (s === c.bi.BUILT_IN || (null === (t = p.result) || void 0 === t ? void 0 : t.sections[s]) != null || (null === (n = _.result) || void 0 === n ? void 0 : n.sections[s]) != null) return Promise.resolve(!0);
    (0, a.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: g,
        application_id: s,
        section_name: E,
        source: M
    });
    let x = l.Z.getApplication(s),
        C = o.Y.USER_INSTALL,
        A = null == x ? void 0 : null === (m = x.integrationTypesConfig) || void 0 === m ? void 0 : null === (u = m[C]) || void 0 === u ? void 0 : null === (d = u.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
    return new Promise((e) => {
        (0, i.openOAuth2Modal)(
            {
                clientId: s,
                integrationType: C,
                scopes: A,
                callback: (t) => {
                    let { location: n } = t;
                    null != n
                        ? ((0, a.yw)(r.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
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
