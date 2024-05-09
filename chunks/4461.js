"use strict";
a.r(t), a.d(t, {
  useInstallApplication: function() {
    return s
  }
});
var l = a("470079"),
  n = a("135431");

function s(e, t) {
  let a = l.useMemo(() => null != e && (0, n.canInstallApplication)({
    customInstallUrl: e.custom_install_url,
    installParams: e.install_params,
    integrationTypesConfig: e.integration_types_config
  }), [e]);
  return {
    canInstall: a,
    install: l.useCallback(a => {
      null != e && (0, n.installApplication)({
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config,
        guildId: null != t ? t : void 0,
        source: a
      })
    }, [e, t])
  }
}