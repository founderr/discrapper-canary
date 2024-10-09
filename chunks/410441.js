a.d(n, {
    Z: function () {
        return i;
    }
});
var t = a(735250);
a(470079);
var r = a(481060),
    s = a(832923);
function i(e) {
    let { onClick: n, Icon: a, 'aria-label': i } = e,
        o = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, t.jsx)(a, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, t.jsx)('div', {
              className: s.container,
              'aria-label': i,
              children: l
          })
        : (0, t.jsx)(r.Tooltip, {
              text: i,
              children: (e) =>
                  (0, t.jsx)(r.Clickable, {
                      className: s.container,
                      ...e,
                      onClick: n,
                      children: l
                  })
          });
}
