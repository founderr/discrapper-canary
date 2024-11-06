e.r(n),
    e.d(n, {
        default: function () {
            return s;
        }
    });
var l = e(200651);
e(192379);
var r = e(481060),
    i = e(239091),
    a = e(358085),
    u = e(29264),
    o = e(905041),
    d = e(388032);
function s(t) {
    let { src: n, onSelect: e } = t,
        s = (0, u.Z)(n),
        c = (0, o.Z)(n, null);
    return a.isPlatformEmbedded
        ? (0, l.jsxs)(r.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': d.intl.string(d.t.Zow2V1),
              onSelect: e,
              children: [(0, l.jsx)(r.MenuGroup, { children: s }), (0, l.jsx)(r.MenuGroup, { children: c })]
          })
        : null;
}
