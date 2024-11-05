e.r(t),
    e.d(t, {
        default: function () {
            return d;
        }
    });
var r = e(200651);
e(192379);
var l = e(481060),
    i = e(239091),
    a = e(358085),
    u = e(905041),
    o = e(388032);
function d(n) {
    let { href: t, textContent: e, onSelect: d } = n,
        s = (0, u.Z)(t, e);
    return a.isPlatformEmbedded && null != s
        ? (0, r.jsx)(l.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': o.intl.string(o.t.Zow2V1),
              onSelect: d,
              children: (0, r.jsx)(l.MenuGroup, { children: s })
          })
        : null;
}
