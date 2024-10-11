n.d(t, {
    g: function () {
        return a;
    }
}),
    n(47120);
var i = n(470079);
function a() {
    let [e, t] = i.useState(),
        n = i.useCallback((e) => {
            t(e);
        }, []);
    return {
        onSelectApplication: n,
        onCloseAppDetails: i.useCallback(() => {
            t(void 0);
        }, []),
        selectedAppId: e
    };
}
