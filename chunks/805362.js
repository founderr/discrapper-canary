l.r(t),
    l.d(t, {
        default: function () {
            return d;
        }
    });
var e = l(200651);
l(192379);
var i = l(481060),
    u = l(239091),
    r = l(358085),
    a = l(905041),
    o = l(388032);
function d(n) {
    let { href: t, textContent: l, onSelect: d } = n,
        c = (0, a.Z)(t, l);
    return r.isPlatformEmbedded && null != c
        ? (0, e.jsx)(i.Menu, {
              navId: 'image-context',
              onClose: u.Zy,
              'aria-label': o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, e.jsx)(i.MenuGroup, { children: c })
          })
        : null;
}
