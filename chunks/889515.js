l.d(n, {
    Z: function () {
        return s;
    }
});
var t = l(735250);
l(470079);
var r = l(868819),
    i = l(970184),
    a = l(53887);
function s(e) {
    let { components: n, renderComponents: l } = e,
        { message: s } = (0, i.CJ)();
    return null == n || 0 === n.length
        ? null
        : (0, t.jsxs)('div', {
              className: a.container,
              children: [
                  (0, t.jsx)('div', {
                      className: a.children,
                      children: l(n)
                  }),
                  null != s
                      ? (0, t.jsx)(r.ZP, {
                            className: a.error,
                            message: s,
                            component: e
                        })
                      : null
              ]
          });
}
