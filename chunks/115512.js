n.r(e),
    n.d(e, {
        default: function () {
            return s;
        }
    });
var l = n(200651);
n(192379);
var i = n(481060),
    a = n(239091),
    r = n(358085),
    u = n(29264),
    o = n(905041),
    d = n(388032);
function s(t) {
    let { src: e, onSelect: n } = t,
        s = (0, u.Z)(e),
        c = (0, o.Z)(e, null);
    return r.isPlatformEmbedded
        ? (0, l.jsxs)(i.Menu, {
              navId: 'image-context',
              onClose: a.Zy,
              'aria-label': d.intl.string(d.t.Zow2V1),
              onSelect: n,
              children: [(0, l.jsx)(i.MenuGroup, { children: s }), (0, l.jsx)(i.MenuGroup, { children: c })]
          })
        : null;
}
