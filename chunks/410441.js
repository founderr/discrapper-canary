t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var r = t(481060),
    s = t(832923);
function o(e) {
    let { onClick: n, Icon: t, 'aria-label': o } = e,
        i = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, a.jsx)(t, {
            color: i.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, a.jsx)('div', {
              className: s.container,
              'aria-label': o,
              children: l
          })
        : (0, a.jsx)(r.Tooltip, {
              text: o,
              children: (e) =>
                  (0, a.jsx)(r.Clickable, {
                      className: s.container,
                      ...e,
                      onClick: n,
                      children: l
                  })
          });
}
