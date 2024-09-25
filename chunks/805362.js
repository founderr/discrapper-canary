l.r(e),
    l.d(e, {
        default: function () {
            return o;
        }
    });
var t = l(735250);
l(470079);
var u = l(481060),
    i = l(239091),
    r = l(358085),
    a = l(905041),
    d = l(689938);
function o(n) {
    let { href: e, textContent: l, onSelect: o } = n,
        c = (0, a.Z)(e, l);
    return r.isPlatformEmbedded && null != c
        ? (0, t.jsx)(u.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': d.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: o,
              children: (0, t.jsx)(u.MenuGroup, { children: c })
          })
        : null;
}
