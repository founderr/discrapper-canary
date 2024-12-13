let i, l;
var r = n(200651);
n(192379);
var o = n(481060),
    a = n(570140),
    s = n(341382),
    c = n(981631);
let d = null;
function u(e) {
    null != i && e ? i() : null != l && l(), (i = null), (l = null);
}
t.Z = {
    init() {
        a.Z.subscribe('PREMIUM_REQUIRED_MODAL_OPEN', (e) => {
            if ((u(!1), (d = e.context), (i = e.resolve), (l = e.reject), c.e3s === e.context)) {
                let e;
                (e = !1),
                    (0, o.openModalLazy)(
                        async () => {
                            let { default: t } = await n.e('29393').then(n.bind(n, 134817));
                            return (n) => {
                                let { onClose: i, ...l } = n;
                                return (0, r.jsx)(t, {
                                    ...l,
                                    onClose: (t) => {
                                        (e = t), i();
                                    }
                                });
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, s.M)(e);
                            }
                        }
                    );
            }
        }),
            a.Z.subscribe('PREMIUM_REQUIRED_MODAL_CLOSE', (e) => {
                let { shouldContinue: t } = e;
                (d = null), u(t);
            }),
            a.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', (e) => {
                let { locked: t } = e;
                t && null != d && ((d = null), u(!1));
            });
    }
};
