l.d(n, {
    Z: function () {
        return a;
    }
});
var t = l(200651);
l(192379);
var i = l(481060),
    r = l(330997);
function a(e) {
    let { onClick: n, Icon: l, 'aria-label': a } = e,
        s = (0, i.useToken)(i.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY),
        o = (0, t.jsx)(l, {
            color: s.hex(),
            size: 'custom',
            width: 16,
            height: 16
        });
    return null == n
        ? (0, t.jsx)('div', {
              className: r.container,
              'aria-label': a,
              children: o
          })
        : (0, t.jsx)(i.Tooltip, {
              text: a,
              children: (e) =>
                  (0, t.jsx)(i.Clickable, {
                      className: r.container,
                      ...e,
                      onClick: n,
                      children: o
                  })
          });
}
