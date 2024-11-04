n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(442837),
    r = n(430824),
    a = n(981631);
function l() {
    return (0, i.Wu)([r.Z], () =>
        Object.entries(r.Z.getGuilds())
            .filter((e) => {
                let [t, n] = e;
                return n.hasFeature(a.oNc.HUB);
            })
            .map((e) => {
                let [t, n] = e;
                return n;
            })
    );
}
