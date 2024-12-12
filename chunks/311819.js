r.d(n, {
    J: function () {
        return s;
    }
});
var i = r(47120);
var a = r(981631);
function s(e) {
    let { id: n, customInstallUrl: r, installParams: i, integrationTypesConfig: s } = e;
    if (null != r) return r;
    let o = {};
    o.client_id = n;
    let l = null != s && Object.values(s).some((e) => (null == e ? void 0 : e.oauth2_install_params) != null || (null == e ? void 0 : e.oauth2InstallParams) != null);
    if (null != i && !l) {
        let { permissions: e, scopes: n } = i;
        null != e && (o.permissions = e), null != n && (o.scope = n.join(' '));
    }
    let u = Object.entries(o)
        .map((e) => {
            let [n, r] = e;
            return ''.concat(n, '=').concat(encodeURIComponent(r));
        })
        .join('&');
    return ''.concat(location.protocol, '//').concat(location.host).concat(a.Z5c.OAUTH2_AUTHORIZE, '?').concat(u);
}
