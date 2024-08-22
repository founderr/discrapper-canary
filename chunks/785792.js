t.d(n, {
    b: function () {
        return a;
    }
});
var o = t(735250),
    s = t(470079),
    c = t(120356),
    r = t.n(c),
    i = t(481060),
    l = t(481022);
function a(e) {
    let { chunks: n, columns: t, className: c } = e,
        a = s.useMemo(() => ({ '--secure-frames-columns': t }), [t]);
    return null == n
        ? (0, o.jsx)('div', {
              className: l.loading,
              children: (0, o.jsx)(i.Spinner, {})
          })
        : (0, o.jsx)('div', {
              style: a,
              className: r()(l.code, c),
              children: n.map((e, n) =>
                  (0, o.jsx)(
                      'div',
                      {
                          className: r()(l.chunk, { [l.divider]: n > t - 1 }),
                          children: (0, o.jsx)(i.Text, {
                              className: l.codeText,
                              variant: 'code',
                              color: 'text-normal',
                              children: e
                          })
                      },
                      ''.concat(e, '-').concat(n)
                  )
              )
          });
}
