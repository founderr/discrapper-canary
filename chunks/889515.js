l.d(n, {
    Z: function () {
        return s;
    }
});
var t = l(735250);
l(470079);
var r = l(868819),
    a = l(970184),
    i = l(53887);
function s(e) {
    let { components: n, renderComponents: l } = e,
        { message: s } = (0, a.CJ)();
    return null == n || 0 === n.length
        ? null
        : (0, t.jsxs)('div', {
              className: i.container,
              children: [
                  (0, t.jsx)('div', {
                      className: i.children,
                      children: l(n)
                  }),
                  null != s
                      ? (0, t.jsx)(r.ZP, {
                            className: i.error,
                            message: s,
                            component: e
                        })
                      : null
              ]
          });
}
