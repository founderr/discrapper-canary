var i = r(200651);
r(192379);
var a = r(433517),
    s = r(481060),
    o = r(358085);
n.Z = {
    show(e) {
        (0, s.openModalLazy)(async () => {
            let { default: n } = await r.e('2435').then(r.bind(r, 821606));
            return (r) =>
                (0, i.jsx)(n, {
                    ...r,
                    url: e
                });
        });
    },
    getBlockedDomains() {
        if ((0, o.isDesktop)()) {
            let e = a.K.get('BlockedDomainsV2');
            return Promise.resolve(null == e ? [] : e.split('\n'));
        }
        return Promise.resolve([]);
    },
    saveBlockedDomains(e) {
        (0, o.isDesktop)() && a.K.set('BlockedDomainsV2', e.join('\n'));
    }
};
