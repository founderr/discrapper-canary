i.r(t),
    i.d(t, {
        default: function () {
            return c;
        }
    });
var e = i(200651),
    l = i(192379),
    a = i(481060),
    r = i(239091),
    d = i(299206),
    u = i(388032);
function c(n) {
    var t;
    let i = (0, d.Z)({
        id: n.id,
        label: n.label,
        shiftId: n.shiftId
    });
    return (
        l.useEffect(() => {
            null == i && (0, r.Zy)();
        }, [i]),
        (0, e.jsx)(a.Menu, {
            onSelect: n.onSelect,
            navId: 'dev-context',
            'aria-label': null !== (t = n['aria-label']) && void 0 !== t ? t : u.intl.string(u.t.ogxXGh),
            onClose: r.Zy,
            children: i
        })
    );
}
