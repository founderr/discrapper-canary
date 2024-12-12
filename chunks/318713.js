var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(55935),
    u = r(543388),
    c = r(223021),
    d = r(388032),
    f = r(507304);
function _(e) {
    let { children: n, className: r, compact: a = !1, timestamp: _, isVisibleOnlyOnHover: p = !1, cozyAlt: m = !1, isInline: g = !0, id: E, isEdited: v = !1, application: I } = e,
        T = (0, l.Hg)(_),
        b = a ? (0, l.vc)(_, 'LT') : (0, l.Y4)(_),
        y = a ? (0, c.Z)(b) : null,
        S = v ? d.intl.formatToPlainString(d.t.CDzOFR, { timeFormatted: T }) : T;
    return (0, i.jsx)('span', {
        className: s()(r, y, {
            [f.timestamp]: !0,
            [f.timestampVisibleOnHover]: p,
            [f.timestampInline]: g,
            [f.alt]: m
        }),
        children:
            null == I
                ? (0, i.jsx)(o.Tooltip, {
                      text: (0, l.vc)(_, 'LLLL'),
                      'aria-label': S,
                      tooltipClassName: f.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, i.jsx)(h, {
                              tooltipProps: e,
                              timeFormatted: b,
                              timestamp: _,
                              id: E,
                              compact: a,
                              children: n
                          })
                  })
                : (0, i.jsx)(u.Z, {
                      application: I,
                      timestamp: _,
                      compact: a,
                      children: (0, i.jsx)(h, {
                          timeFormatted: b,
                          timestamp: _,
                          id: E,
                          compact: a,
                          children: n
                      })
                  })
    });
}
function h(e) {
    let { tooltipProps: n, timeFormatted: r, children: a, compact: s, timestamp: o, id: l } = e;
    return (0, i.jsx)('time', {
        ...n,
        id: l,
        dateTime: o.toISOString(),
        children:
            null != a
                ? a
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)('i', {
                              className: f.separator,
                              'aria-hidden': !0,
                              children: s ? '[' : ' \u2014 '
                          }),
                          r,
                          s &&
                              (0, i.jsxs)('i', {
                                  className: f.separator,
                                  'aria-hidden': !0,
                                  children: [']', ' ']
                              })
                      ]
                  })
    });
}
n.Z = _;
