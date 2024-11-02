i.d(e, {
    Z: function () {
        return c;
    }
}),
    i(47120);
var l = i(192379),
    t = i(881052),
    a = i(430927),
    r = i(610665);
let s = {
    onSuccess: () => {},
    permissionOverwrites: []
};
function c() {
    let [n, e] = l.useState(!1),
        [i, c] = l.useState(null);
    return [
        async function n(n, i) {
            let { onSuccess: l = s.onSuccess, permissionOverwrites: o = s.permissionOverwrites } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s;
            e(!0);
            try {
                await r.GV(n, o), await r.iQ(n, i), await (0, a.o)(n, l), await (0, a.T)(n, l), e(!1);
            } catch (n) {
                c(new t.Hx(n)), e(!1);
            }
            e(!1);
        },
        {
            loading: n,
            error: i
        }
    ];
}
