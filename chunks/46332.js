r.d(n, {
    L: function () {
        return f;
    }
});
var i = r(373793),
    a = r(367907),
    s = r(213459),
    o = r(812206),
    l = r(69580),
    u = r(541099),
    c = r(981631),
    d = r(689079);
function f(e) {
    var n, r, f;
    let { applicationId: _, channel: h, onSuccess: p, sectionName: m, location: g, entrypoint: E, commandIntegrationTypes: v } = e;
    if ((null != v && !v.includes(i.Y.USER_INSTALL)) || _ === d.bi.BUILT_IN || s.ZP.hasUserStateApplication(_) || (null != h && s.ZP.hasContextStateApplication(_, h.id, h.guild_id))) return null == p || p(), Promise.resolve(!0);
    let I = null != E ? E : u.Z.lastShownEntrypoint();
    (0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
        location: g,
        application_id: _,
        section_name: m,
        source: I
    });
    let T = o.Z.getApplication(_),
        b = i.Y.USER_INSTALL,
        y = null == T ? void 0 : null === (f = T.integrationTypesConfig) || void 0 === f ? void 0 : null === (r = f[b]) || void 0 === r ? void 0 : null === (n = r.oauth2InstallParams) || void 0 === n ? void 0 : n.scopes;
    return new Promise((e) => {
        (0, l.openOAuth2Modal)(
            {
                clientId: _,
                integrationType: b,
                scopes: y,
                callback: (n) => {
                    let { location: r } = n;
                    null != r &&
                        ((0, a.yw)(c.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
                            location: g,
                            application_id: _,
                            section_name: m,
                            source: I
                        }),
                        e(!0),
                        null == p || p());
                }
            },
            () => {
                e(!1);
            }
        );
    });
}
