let s, i;
var r = n(200651);
n(192379);
var o = n(481060),
    l = n(570140),
    a = n(341382),
    c = n(981631);
let u = null;
function d(e) {
    null != s && e ? s() : null != i && i(), (s = null), (i = null);
}
t.Z = {
    init() {
        l.Z.subscribe('PREMIUM_REQUIRED_MODAL_OPEN', (e) => {
            if ((d(!1), (u = e.context), (s = e.resolve), (i = e.reject), c.e3s === e.context)) {
                let e;
                (e = !1),
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: t } = await n.e('29393').then(n.bind(n, 134817));
                            return (n) => {
                                let { onClose: s, ...i } = n;
                                return (0, r.jsx)(t, {
                                    ...i,
                                    onClose: (t) => {
                                        (e = t), s();
                                    }
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, a.M)(e);
                            }
                        }
                    );
            }
        }),
            l.Z.subscribe('PREMIUM_REQUIRED_MODAL_CLOSE', (e) => {
                let { shouldContinue: t } = e;
                (u = null), d(t);
            }),
            l.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), d(!1));
            });
    }
};
