n.r(t),
    n.d(t, {
        default: function () {
            return d;
        }
    });
var a = n(735250);
n(470079);
var l = n(481060),
    i = n(239091),
    r = n(358085),
    s = n(29264),
    o = n(905041),
    u = n(689938);
function d(e) {
    let { src: t, onSelect: n } = e,
        d = (0, s.Z)(t),
        c = (0, o.Z)(t, null);
    return r.isPlatformEmbedded
        ? (0, a.jsxs)(l.Menu, {
              navId: 'image-context',
              onClose: i.Zy,
              'aria-label': u.Z.Messages.IMAGE_ACTIONS_MENU_LABEL,
              onSelect: n,
              children: [(0, a.jsx)(l.MenuGroup, { children: d }), (0, a.jsx)(l.MenuGroup, { children: c })]
          })
        : null;
}
