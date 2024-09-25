n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(832923);
function o(e) {
    let { onClick: t, Icon: n, 'aria-label': o } = e,
        s = (0, i.useToken)(i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, r.jsx)(n, {
            color: s.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == t
        ? (0, r.jsx)('div', {
              className: a.container,
              'aria-label': o,
              children: l
          })
        : (0, r.jsx)(i.Tooltip, {
              text: o,
              children: (e) =>
                  (0, r.jsx)(i.Clickable, {
                      className: a.container,
                      ...e,
                      onClick: t,
                      children: l
                  })
          });
}
