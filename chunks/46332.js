r.d(n, {
    L: function () {
        return d;
    }
});
var i = r(373793),
    a = r(367907),
    s = r(812206),
    o = r(69580),
    l = r(541099),
    u = r(981631),
    c = r(689079);
function d(e) {
    var n, r, d, f, _;
    let { applicationId: h, userIndexState: p, guildIndexState: m, onSuccess: g, sectionName: E, location: v, entrypoint: I, commandIntegrationTypes: T } = e;
    if ((null != T && !T.includes(i.Y.USER_INSTALL)) || h === c.bi.BUILT_IN || (null === (n = p.result) || void 0 === n ? void 0 : n.sections[h]) != null || (null === (r = m.result) || void 0 === r ? void 0 : r.sections[h]) != null) return null == g || g(), Promise.resolve(!0);
    let b = null != I ? I : l.Z.lastShownEntrypoint();
    (0, a.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: v,
        application_id: h,
        section_name: E,
        source: b
    });
    let y = s.Z.getApplication(h),
        S = i.Y.USER_INSTALL,
        A = null == y ? void 0 : null === (_ = y.integrationTypesConfig) || void 0 === _ ? void 0 : null === (f = _[S]) || void 0 === f ? void 0 : null === (d = f.oauth2InstallParams) || void 0 === d ? void 0 : d.scopes;
    return new Promise((e) => {
        (0, o.openOAuth2Modal)(
            {
                clientId: h,
                integrationType: S,
                scopes: A,
                callback: (n) => {
                    let { location: r } = n;
                    null != r &&
                        ((0, a.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: v,
                            application_id: h,
                            section_name: E,
                            source: b
                        }),
                        e(!0),
                        null == g || g());
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
