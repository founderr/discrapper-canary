t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var l = t(481060),
    r = t(76927);
function o(n) {
    let { onClick: e, Icon: t, 'aria-label': o } = n,
        a = (0, l.useToken)(l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        u = (0, i.jsx)(t, {
            color: a.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == e
        ? (0, i.jsx)('div', {
              className: r.container,
              'aria-label': o,
              children: u
          })
        : (0, i.jsx)(l.Tooltip, {
              text: o,
              children: (n) =>
                  (0, i.jsx)(l.Clickable, {
                      className: r.container,
                      ...n,
                      onClick: e,
                      children: u
                  })
          });
}
