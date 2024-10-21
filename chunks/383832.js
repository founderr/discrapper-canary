n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var a = n(481060),
    s = n(570140),
    r = n(71509);
function l() {
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('52030'), n.e('11260'), n.e('32870')]).then(n.bind(n, 266653));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                s.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }),
                    s.Z.dispatch({
                        type: 'LOGIN_RESET',
                        isMultiAccount: !0
                    });
            },
            modalKey: r.Ui
        }
    );
}
