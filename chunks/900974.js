var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140);
let l = !1,
    s = null;
t.Z = {
    init() {
        a.Z.subscribe('CONNECTION_OPEN', (e) => {
            let { pendingPayments: t } = e;
            if (null != t && t.length > 0) {
                var a;
                if (s === t[0] || null == (s = t[0])) return;
                (a = s),
                    l ||
                        ((l = !0),
                        (0, r.openModalLazy)(async () => {
                            let { default: e } = await n.e('7232').then(n.bind(n, 645586));
                            return (t) => {
                                let { transitionState: n, onClose: r } = t;
                                return (0, i.jsx)(e, {
                                    pendingPayment: a,
                                    transitionState: n,
                                    onClose: () => ((l = !1), r())
                                });
                            };
                        }));
            }
        });
    }
};
