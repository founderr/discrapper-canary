var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(826298),
    c = n(579060);
t.Z = l.memo(function (e) {
    var t;
    let { className: n, channel: l, section: a } = e,
        d = null != a ? (0, o.ky)(a) : null;
    return (0, i.jsx)('div', {
        className: r()(n, c.wrapper),
        children: (0, i.jsx)('div', {
            className: c.icon,
            children:
                null != d
                    ? (0, i.jsx)(s.Tooltip, {
                          text: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : '',
                          position: 'top',
                          children: (e) =>
                              (0, i.jsx)(d, {
                                  ...e,
                                  channel: l,
                                  section: a,
                                  width: 24,
                                  height: 24
                              })
                      })
                    : null
        })
    });
});
