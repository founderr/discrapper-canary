n.d(t, {
    Z: function () {
        return i;
    }
});
var a = n(735250);
n(470079);
var r = n(481060),
    s = n(832923);
function i(e) {
    let { onClick: t, Icon: n, 'aria-label': i } = e,
        o = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, a.jsx)(n, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, a.jsx)('div', {
              className: s.container,
              'aria-label': i,
              children: l
          })
        : (0, a.jsx)(r.Tooltip, {
              text: i,
              children: (e) =>
                  (0, a.jsx)(r.Clickable, {
                      className: s.container,
                      ...e,
                      onClick: t,
                      children: l
                  })
          });
}
