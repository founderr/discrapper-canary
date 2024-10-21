var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(55935),
    l = n(543388),
    u = n(223021),
    c = n(689938),
    d = n(825193);
function _(e) {
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
    let { children: t, className: n, compact: i = !1, timestamp: E, isVisibleOnlyOnHover: f = !1, cozyAlt: h = !1, isInline: p = !0, id: I, isEdited: m = !1, application: T } = e,
        S = (0, o.Hg)(E),
        g = i ? (0, o.vc)(E, 'LT') : (0, o.Y4)(E),
        A = i ? (0, u.Z)(g) : null,
        N = m ? c.Z.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({ timeFormatted: S }) : S;
    return (0, r.jsx)('span', {
        className: a()(n, A, {
            [d.timestamp]: !0,
            [d.timestampVisibleOnHover]: f,
            [d.timestampInline]: p,
            [d.alt]: h
        }),
        children:
            null == T
                ? (0, r.jsx)(s.Tooltip, {
                      text: (0, o.vc)(E, 'LLLL'),
                      'aria-label': N,
                      tooltipClassName: d.timestampTooltip,
                      delay: 750,
                      children: (e) =>
                          (0, r.jsx)(_, {
                              tooltipProps: e,
                              timeFormatted: g,
                              timestamp: E,
                              id: I,
                              compact: i,
                              children: t
                          })
                  })
                : (0, r.jsx)(l.Z, {
                      application: T,
                      timestamp: E,
                      compact: i,
                      children: (0, r.jsx)(_, {
                          timeFormatted: g,
                          timestamp: E,
                          id: I,
                          compact: i,
                          children: t
                      })
                  })
    });
};
