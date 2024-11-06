t.d(n, {
    Z: function () {
        return a;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(832923);
function a(e) {
    let { onClick: n, Icon: t, 'aria-label': a } = e,
        o = (0, i.useToken)(i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        s = (0, l.jsx)(t, {
            color: o.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, l.jsx)('div', {
              className: r.container,
              'aria-label': a,
              children: s
          })
        : (0, l.jsx)(i.Tooltip, {
              text: a,
              children: (e) =>
                  (0, l.jsx)(i.Clickable, {
                      className: r.container,
                      ...e,
                      onClick: n,
                      children: s
                  })
          });
}
