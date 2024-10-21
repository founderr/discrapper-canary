var i = n(200651),
    s = n(192379),
    a = n(120356),
    l = n.n(a),
    r = n(481060),
    o = n(826298),
    c = n(579060);
t.Z = s.memo(function (e) {
    var t;
    let { className: n, channel: s, section: a } = e,
        u = null != a ? (0, o.ky)(a) : null;
    return (0, i.jsx)('div', {
        className: l()(n, c.wrapper),
        children: (0, i.jsx)('div', {
            className: c.icon,
            children:
                null != u
                    ? (0, i.jsx)(r.Tooltip, {
                          text: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                          position: 'top',
                          children: (e) =>
                              (0, i.jsx)(u, {
                                  ...e,
                                  channel: s,
                                  section: a,
                                  width: 24,
                                  height: 24
                              })
                      })
                    : null
        })
    });
});
