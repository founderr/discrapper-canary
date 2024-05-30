"use strict";
n.r(t), n.d(t, {
  getApplicationInstallURL: function() {
    return r
  }
}), n("47120");
var i = n("981631");

function r(e) {
  let {
    id: t,
    customInstallUrl: n,
    installParams: r,
    integrationTypesConfig: s
  } = e;
  if (null != n) return n;
  let a = {};
  a.client_id = t;
  let o = null != s && Object.values(s).some(e => (null == e ? void 0 : e.oauth2_install_params) != null);
  if (null != r && !o) {
    let {
      permissions: e,
      scopes: t
    } = r;
    null != e && (a.permissions = e), null != t && (a.scope = t.join(" "))
  }
  let l = Object.entries(a).map(e => {
    let [t, n] = e;
    return "".concat(t, "=").concat(encodeURIComponent(n))
  }).join("&");
  return "".concat(location.protocol, "//").concat(location.host).concat(i.Routes.OAUTH2_AUTHORIZE, "?").concat(l)
}