n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(392711),
    r = n.n(i),
    a = n(243814),
    l = n(186901),
    s = n(981631);
function o(e, t) {
    return {
        [s.zMe.VOICE_SETTINGS_UPDATE]: {
            scope: {
                [l.Gp.ANY]: [a.x.RPC, a.x.RPC_VOICE_READ]
            },
            handler: () => (t) => {
                let { prevState: n, dispatch: i } = t,
                    a = e();
                return !r().isEqual(a, n) && i(a), a;
            }
        },
        [s.zMe.VOICE_SETTINGS_UPDATE_2]: {
            scope: l.lH,
            handler(e) {
                let { socket: n } = e;
                return (e) => {
                    let { prevState: i, dispatch: a } = e;
                    if (null == n.application.id) return i;
                    let l = t(n.application.id);
                    return !r().isEqual(l, i) && a(l), l;
                };
            }
        }
    };
}
