n.d(a, {
  P: function() {
    return l
  }
});
var t = n(470079),
  i = n(135431);

function l(e, a) {
  let n = t.useMemo(() => null != e && (0, i.E)({
    customInstallUrl: e.custom_install_url,
    installParams: e.install_params,
    integrationTypesConfig: e.integration_types_config
  }), [e]);
  return {
    canInstall: n,
    install: t.useCallback(n => {
      if (null != e)(0, i.L)({
        applicationId: e.id,
        customInstallUrl: e.custom_install_url,
        installParams: e.install_params,
        integrationTypesConfig: e.integration_types_config,
        guildId: null != a ? a : void 0,
        source: n
      })
    }, [e, a])
  }
}