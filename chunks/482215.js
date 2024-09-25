n.d(t, {
    K: function () {
        return d;
    },
    i: function () {
        return c;
    }
});
var r = n(735250),
    i = n(652874),
    a = n(442837),
    o = n(857192),
    s = n(90362);
let l = 8,
    u = 64,
    c = (0, i.Z)((e) => ({
        horizontalSpacing: l,
        verticalSpacing: l,
        maxHorizontalSpacing: u,
        maxVerticalSpacing: u,
        setHorizontalSpacing: (t) => {
            e({ horizontalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        },
        setVerticalSpacing: (t) => {
            e({ verticalSpacing: Math.round(Math.min(Math.max(t, 0), u)) });
        }
    }));
function d() {
    let e = (0, a.e7)([o.default], () => o.default.layoutDebuggingEnabled),
        { horizontalSpacing: t, verticalSpacing: n } = c();
    return e
        ? (0, r.jsx)('div', {
              className: s.container,
              children: (0, r.jsx)('div', {
                  className: s.gridOverlay,
                  'data-horizontal': t > 0,
                  'data-vertical': n > 0,
                  style: {
                      '--custom-grid-horizontal-spacing': ''.concat(t, 'px'),
                      '--custom-grid-vertical-spacing': ''.concat(n, 'px')
                  }
              })
          })
        : null;
}
