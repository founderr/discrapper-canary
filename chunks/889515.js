t.d(n, {
    Z: function () {
        return o;
    }
});
var l = t(735250);
t(470079);
var a = t(868819),
    i = t(970184),
    r = t(53887);
function o(e) {
    let { components: n, renderComponents: t } = e,
        { message: o } = (0, i.CJ)();
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
                      ? (0, l.jsx)(a.ZP, {
                            className: r.error,
                            message: o,
                            component: e
                        })
                      : null
              ]
          });
}
