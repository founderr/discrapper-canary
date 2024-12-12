n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    o = n(547972),
    l = n(326528);
function a() {
    let e = (0, l.b)().map((e) =>
        (0, i.jsx)(
            r.MenuItem,
            {
                id: e.id,
                label: e.title,
                action: () => (0, o.Z)(e.id)
            },
            e.id
        )
    );
    return (0, i.jsx)(i.Fragment, { children: e });
}
