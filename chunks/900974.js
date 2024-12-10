var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140);
let a = !1,
    o = null;
t.Z = {
    init() {
        l.Z.subscribe('CONNECTION_OPEN', (e) => {
            let { pendingPayments: t } = e;
            if (null != t && t.length > 0) {
                var l;
                if (o === t[0] || null == (o = t[0])) return;
                (l = o),
                    a ||
                        ((a = !0),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('7232').then(n.bind(n, 645586));
                            return (t) => {
                                let { transitionState: n, onClose: r } = t;
                                return (0, i.jsx)(e, {
                                    pendingPayment: l,
                                    transitionState: n,
                                    onClose: () => ((a = !1), r())
                                });
                            };
                        }));
            }
        });
    }
};
