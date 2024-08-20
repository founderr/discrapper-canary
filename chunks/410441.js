n.d(a, {
    Z: function () {
        return o;
    }
});
var t = n(735250);
n(470079);
var r = n(481060),
    s = n(76927);
function o(e) {
    let { onClick: a, Icon: n, 'aria-label': o } = e,
        i = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, t.jsx)(n, {
            color: i.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == a
        ? (0, t.jsx)('div', {
              className: s.container,
              'aria-label': o,
              children: l
          })
        : (0, t.jsx)(r.Tooltip, {
              text: o,
              children: (e) =>
                  (0, t.jsx)(r.Clickable, {
                      className: s.container,
                      ...e,
                      onClick: a,
                      children: l
                  })
          });
}
