var r = n(200651);
n(192379);
var i = n(433517),
    a = n(481060),
    s = n(358085);
t.Z = {
    show(e) {
        (0, a.openModalLazy)(async () => {
            let { default: t } = await n.e('2435').then(n.bind(n, 821606));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    url: e
                });
        });
    },
    getBlockedDomains() {
        if ((0, s.isDesktop)()) {
            let e = i.K.get('BlockedDomainsV2');
            return Promise.resolve(null == e ? [] : e.split('\n'));
        }
        return Promise.resolve([]);
    },
    saveBlockedDomains(e) {
        (0, s.isDesktop)() && i.K.set('BlockedDomainsV2', e.join('\n'));
    }
};
