let i, l;
var a = n(200651);
n(192379);
var r = n(481060),
    s = n(570140),
    o = n(341382),
    c = n(981631);
let u = null;
function d(e) {
    null != i && e ? i() : null != l && l(), (i = null), (l = null);
}
t.Z = {
    init() {
        s.Z.subscribe('PREMIUM_REQUIRED_MODAL_OPEN', (e) => {
            if ((d(!1), (u = e.context), (i = e.resolve), (l = e.reject), c.e3s === e.context)) {
                let e;
                (e = !1),
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: t } = await n.e('29393').then(n.bind(n, 134817));
                            return (n) => {
                                let { onClose: i, ...l } = n;
                                return (0, a.jsx)(t, {
                                    ...l,
                                    onClose: (t) => {
                                        (e = t), i();
                                    }
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, o.M)(e);
                            }
                        }
                    );
            }
        }),
            s.Z.subscribe('PREMIUM_REQUIRED_MODAL_CLOSE', (e) => {
                let { shouldContinue: t } = e;
                (u = null), d(t);
            }),
            s.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), d(!1));
            });
    }
};
