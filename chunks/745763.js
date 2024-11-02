t.r(e),
    t.d(e, {
        default: function () {
            return s;
        }
    });
var l = t(200651);
t(192379);
var o = t(481060),
    r = t(239091),
    u = t(358085),
    c = t(998502),
    i = t(89013),
    a = t(388032);
function s(n) {
    let { text: e, onSelect: t } = n,
        s = (0, i.Z)(e);
    return u.isPlatformEmbedded
        ? (0, l.jsxs)(o.Menu, {
              navId: 'text-context',
              onClose: r.Zy,
              'aria-label': a.intl.string(a.t.s285pq),
              onSelect: t,
              children: [
                  (0, l.jsx)(o.MenuGroup, { children: s }),
                  (0, l.jsx)(o.MenuGroup, {
                      children: (0, l.jsx)(o.MenuItem, {
                          id: 'copy',
                          label: a.intl.string(a.t.OpuAlJ),
                          action: () => c.ZP.copy(e)
                      })
                  })
              ]
          })
        : null;
}
