t.d(n, {
    Z: function () {
        return r;
    }
});
var l = t(735250);
t(470079);
var i = t(481060),
    a = t(832923);
function r(e) {
    let { onClick: n, Icon: t, 'aria-label': r } = e,
        o = (0, i.useToken)(i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, l.jsx)(t, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, l.jsx)('div', {
              className: a.container,
              'aria-label': r,
              children: s
          })
        : (0, l.jsx)(i.Tooltip, {
              text: r,
              children: (e) =>
                  (0, l.jsx)(i.Clickable, {
                      className: a.container,
                      ...e,
                      onClick: n,
                      children: s
                  })
          });
}
