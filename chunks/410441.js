l.d(n, {
    Z: function () {
        return a;
    }
});
var t = l(735250);
l(470079);
var r = l(481060),
    i = l(76927);
function a(e) {
    let { onClick: n, Icon: l, 'aria-label': a } = e,
        s = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, t.jsx)(l, {
            color: s.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, t.jsx)('div', {
              className: i.container,
              'aria-label': a,
              children: u
          })
        : (0, t.jsx)(r.Tooltip, {
              text: a,
              children: (e) =>
                  (0, t.jsx)(r.Clickable, {
                      className: i.container,
                      ...e,
                      onClick: n,
                      children: u
                  })
          });
}
