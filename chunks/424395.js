n.d(t, {
    u: function () {
        return a;
    },
    v: function () {
        return o;
    }
});
let o = '1' === n(444675).env.USE_NEW_INTL_SYSTEM;
function a() {
    return n(515297)
        .filter((e) => {
            let { enabled: t } = e;
            return t;
        })
        .map((e) => {
            let { code: t, name: n } = e;
            return {
                value: t,
                name: n,
                localizedName: t
            };
        })
        .sort((e, t) => {
            let { name: n } = e,
                { name: o } = t;
            return (n = n.toLowerCase()), n < (o = o.toLowerCase()) ? -1 : n > o ? 1 : 0;
        });
}
