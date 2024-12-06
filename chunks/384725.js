var n = i(200651);
i(192379);
var a = i(481060),
    l = i(570140);
t.Z = {
    open(e) {
        l.Z.dispatch({
            type: 'SAFETY_HUB_APPEAL_OPEN',
            classificationId: e
        }),
            (0, a.openModalLazy)(async () => {
                let { default: t } = await i.e('65652').then(i.bind(i, 208265));
                return (i) =>
                    (0, n.jsx)(t, {
                        classificationId: e,
                        ...i
                    });
            });
    },
    close() {
        l.Z.dispatch({ type: 'SAFETY_HUB_APPEAL_CLOSE' });
    }
};
