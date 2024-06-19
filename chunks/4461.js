a.d(n, {
  P: function() {
    return l
  }
});
var t = a(470079),
  i = a(135431);

function l(e, n) {
  let a = t.useMemo(() => null != e && (0, i.E)({
    customInstallUrl: e.custom_install_url,
    installParams: e.install_params,
    integrationTypesConfig: e.integration_types_config
  }), [e]);
  return {
    canInstall: a,
    install: t.useCallback(a => {
      if (null != e)(0, i.L)({
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config,
        guildId: null != n ? n : void 0,
        source: a
      })
    }, [e, n])
  }
}