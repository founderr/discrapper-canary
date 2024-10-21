n.d(t, {
    g: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379);
function a(e) {
    let [t, n] = i.useState(),
        a = i.useCallback(
            (t) => {
                n(t), e();
            },
            [e]
        );
    return {
        onSelectApplication: a,
        onCloseAppDetails: i.useCallback(() => {
            n(void 0), e();
        }, [e]),
        selectedAppId: t
    };
}
