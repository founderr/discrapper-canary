t.d(n, {
    Z: function () {
        return i;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    s = t(832923);
function i(e) {
    let { onClick: n, Icon: t, 'aria-label': i } = e,
        o = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        l = (0, a.jsx)(t, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
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
                      onClick: n,
                      children: l
                  })
          });
}
