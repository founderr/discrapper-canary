t.d(n, {
    b: function () {
        return a;
    }
});
var o = t(735250),
    r = t(470079),
    s = t(120356),
    c = t.n(s),
    i = t(481060),
    l = t(481022);
function a(e) {
    let { chunks: n, columns: t, className: s } = e,
        a = r.useMemo(() => ({ '--secure-frames-columns': t }), [t]);
    return null == n
        ? (0, o.jsx)('div', {
              className: l.loading,
              children: (0, o.jsx)(i.Spinner, {})
          })
        : (0, o.jsx)('div', {
              style: a,
              className: c()(l.code, s),
              children: n.map((e, n) =>
                  (0, o.jsx)(
                      'div',
                      {
                          className: c()(l.chunk, { [l.divider]: n > t - 1 }),
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
