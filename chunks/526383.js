n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(442837),
    r = n(430824),
    l = n(981631);
function a() {
    return (0, i.Wu)([r.Z], () =>
        Object.entries(r.Z.getGuilds())
            .filter((e) => {
                let [t, n] = e;
                return n.hasFeature(l.oNc.HUB);
            })
            .map((e) => {
                let [t, n] = e;
                return n;
            })
    );
}
