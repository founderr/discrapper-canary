var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(826298),
    c = n(579060);
t.Z = l.memo(function (e) {
    var t;
    let { className: n, channel: l, section: r } = e,
        u = null != r ? (0, o.ky)(r) : null;
    return (0, i.jsx)('div', {
        className: s()(n, c.wrapper),
        children: (0, i.jsx)('div', {
            className: c.icon,
            children:
                null != u
                    ? (0, i.jsx)(a.Tooltip, {
                          text: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : '',
                          position: 'top',
                          children: (e) =>
                              (0, i.jsx)(u, {
                                  ...e,
                                  channel: l,
                                  section: r,
                                  width: 24,
                                  height: 24
                              })
                      })
                    : null
        })
    });
});
