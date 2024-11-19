var r = n(200651);
n(192379);
var i = n(481060);
t.Z = {
    show(e) {
        let { url: t, trustUrl: a, onConfirm: s, onCancel: o, isProtocol: l, contextKey: u } = e;
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await n.e('85668').then(n.bind(n, 720553));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        url: t,
                        isProtocol: l,
                        trustUrl: a,
                        onConfirm: s,
                        onCancel: o
                    });
            },
            { contextKey: u }
        );
    }
};
