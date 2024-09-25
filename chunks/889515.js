n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(868819),
    a = n(970184),
    o = n(383720);
function s(e) {
    let { components: t, renderComponents: n } = e,
        { message: s } = (0, a.CJ)();
    return null == t || 0 === t.length
        ? null
        : (0, r.jsxs)('div', {
              className: o.container,
              children: [
                  (0, r.jsx)('div', {
                      className: o.children,
                      children: n(t)
                  }),
                  null != s
                      ? (0, r.jsx)(i.ZP, {
                            className: o.error,
                            message: s,
                            component: e
                        })
                      : null
              ]
          });
}
