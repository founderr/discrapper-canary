n.d(t, {
    J: function () {
        return a;
    }
});
var r = n(47120);
var i = n(981631);
function a(e) {
    let { id: t, customInstallUrl: n, installParams: r, integrationTypesConfig: a } = e;
    if (null != n) return n;
    let o = {};
    o.client_id = t;
    let s = null != a && Object.values(a).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != r && !s) {
        let { permissions: e, scopes: t } = r;
        null != e && (o.permissions = e), null != t && (o.scope = t.join(' '));
    }
    let l = Object.entries(o)
        .map((e) => {
            let [t, n] = e;
            return ''.concat(t, '=').concat(encodeURIComponent(n));
        })
        .join('&');
    return ''.concat(location.protocol, '//').concat(location.host).concat(i.Z5c.OAUTH2_AUTHORIZE, '?').concat(l);
}
