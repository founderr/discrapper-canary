t.d(n, {
    P: function () {
        return r;
    }
});
var i = t(192379),
    a = t(135431);
function r(e, n) {
    let t = i.useMemo(
        () =>
            null != e &&
            (0, a.Eb)({
                customInstallUrl: e.custom_install_url,
                installParams: e.install_params,
                integrationTypesConfig: e.integration_types_config
            }),
        [e]
    );
    return {
        canInstall: t,
        install: i.useCallback(
            (t) => {
                if (null != e)
                    (0, a.LO)({
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
