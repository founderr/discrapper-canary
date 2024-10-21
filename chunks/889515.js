t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(200651);
t(192379);
var i = t(868819),
    a = t(970184),
    r = t(383720);
function o(e) {
    let { components: n, renderComponents: t } = e,
        { message: o } = (0, a.CJ)();
    return null == n || 0 === n.length
        ? null
        : (0, l.jsxs)('div', {
              className: r.container,
              children: [
                  (0, l.jsx)('div', {
                      className: r.children,
                      children: t(n)
                  }),
                  null != o
                      ? (0, l.jsx)(i.ZP, {
                            className: r.error,
                            message: o,
                            component: e
                        })
                      : null
              ]
          });
}
