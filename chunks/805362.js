n.r(e),
    n.d(e, {
        default: function () {
            return d;
        }
    });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(239091),
    a = n(358085),
    u = n(905041),
    o = n(388032);
function d(t) {
    let { href: e, textContent: n, onSelect: d } = t,
        s = (0, u.Z)(e, n);
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
