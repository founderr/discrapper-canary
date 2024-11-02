e.r(t),
    e.d(t, {
        default: function () {
            return d;
        }
    });
var i = e(200651);
e(192379);
var a = e(481060),
    c = e(239091),
    u = e(294299),
    r = e(388032);
function d(n) {
    let { libraryApplication: t, onPlay: e, onSelect: d } = n,
        l = (0, u.Z)(t, e);
    return (0, i.jsx)(a.Menu, {
        navId: 'launch-context',
        onClose: c.Zy,
        'aria-label': r.intl.string(r.t.tKobzc),
        onSelect: d,
        children: l
    });
}
