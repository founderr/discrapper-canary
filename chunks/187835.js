n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(603592),
    o = n(388032);
let a = 'DOWNLOAD_APPS';
function s() {
    let e = (0, l.useModalsStore)((e) => (0, l.hasModalOpenSelector)(e, a));
    return (0, i.jsx)(r.Z, {
        id: 'app-download-button',
        onClick: () => {
            (0, l.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: 'Guilds',
                            ...t
                        });
                },
                { modalKey: a }
            );
        },
        selected: e,
        tooltip: o.intl.string(o.t.Z7jwrK),
        icon: l.DownloadIcon
    });
}
