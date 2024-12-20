n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(547972),
    a = n(326528);
function l() {
    let e = (0, a.b)().map((e) =>
        (0, r.jsx)(
            o.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, i.Z)(e.id)
            },
            e.id
        )
    );
    return (0, r.jsx)(r.Fragment, { children: e });
}
