var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(55935),
    l = n(543388),
    u = n(223021),
    c = n(388032),
    d = n(12645);
function f(e) {
    let { tooltipProps: t, timeFormatted: n, children: i, compact: a, timestamp: s, id: o } = e;
    return (0, r.jsx)('time', {
        ...t,
        id: o,
        dateTime: s.toISOString(),
        children:
            null != i
                ? i
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('i', {
                              className: d.separator,
                              'aria-hidden': !0,
                              children: a ? '[' : ' \u2014 '
                          }),
                          n,
                          a &&
                              (0, r.jsxs)('i', {
                                  className: d.separator,
                                  'aria-hidden': !0,
                                  children: [']', ' ']
                              })
                      ]
                  })
    });
}
t.Z = function (e) {
    let { children: t, className: n, compact: i = !1, timestamp: _, isVisibleOnlyOnHover: p = !1, cozyAlt: h = !1, isInline: m = !0, id: g, isEdited: E = !1, application: v } = e,
        b = (0, o.Hg)(_),
        I = i ? (0, o.vc)(_, 'LT') : (0, o.Y4)(_),
        T = i ? (0, u.Z)(I) : null,
        S = E ? c.intl.formatToPlainString(c.t.CDzOFR, { timeFormatted: b }) : b;
    return (0, r.jsx)('span', {
        className: a()(n, T, {
            [d.timestamp]: !0,
            [d.timestampVisibleOnHover]: p,
            [d.timestampInline]: m,
            [d.alt]: h
        }),
        children:
            null == v
                ? (0, r.jsx)(s.Tooltip, {
                      text: (0, o.vc)(_, 'LLLL'),
                      'aria-label': S,
                      tooltipClassName: d.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, r.jsx)(f, {
                              tooltipProps: e,
                              timeFormatted: I,
                              timestamp: _,
                              id: g,
                              compact: i,
                              children: t
                          })
                  })
                : (0, r.jsx)(l.Z, {
                      application: v,
                      timestamp: _,
                      compact: i,
                      children: (0, r.jsx)(f, {
                          timeFormatted: I,
                          timestamp: _,
                          id: g,
                          compact: i,
                          children: t
                      })
                  })
    });
};
