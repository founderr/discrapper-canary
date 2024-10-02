t.d(n, {
    P: function () {
        return l;
    }
});
var a = t(470079),
    i = t(135431);
function l(e, n) {
    let t = a.useMemo(
        () =>
            null != e &&
            (0, i.Eb)({
                customInstallUrl: e.custom_install_url,
                installParams: e.install_params,
                integrationTypesConfig: e.integration_types_config
            }),
        [e]
    );
    return {
        canInstall: t,
        install: a.useCallback(
            (t) => {
                if (null != e)
                    (0, i.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: null != n ? n : void 0,
                        source: t
                    });
            },
            [e, n]
        )
    };
}
