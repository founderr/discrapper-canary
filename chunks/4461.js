n.d(a, {
    P: function () {
        return r;
    }
});
var i = n(470079),
    t = n(135431);
function r(e, a) {
    let n = i.useMemo(
        () =>
            null != e &&
            (0, t.Eb)({
                customInstallUrl: e.custom_install_url,
                installParams: e.install_params,
                integrationTypesConfig: e.integration_types_config
            }),
        [e]
    );
    return {
        canInstall: n,
        install: i.useCallback(
            (n) => {
                if (null != e)
                    (0, t.LO)({
                        applicationId: e.id,
                        customInstallUrl: e.custom_install_url,
                        installParams: e.install_params,
                        integrationTypesConfig: e.integration_types_config,
                        guildId: null != a ? a : void 0,
                        source: n
                    });
            },
            [e, a]
        )
    };
}
