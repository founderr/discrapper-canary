n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(927359),
    l = n(975298),
    u = n(501862),
    c = n(63063),
    d = n(981631),
    f = n(474936),
    _ = n(388032),
    h = n(551648);
function p(e) {
    let { hide: t, pillClassName: n, containerClassName: i } = e,
        { fractionalState: p, endsAt: m } = (0, l.Z)(),
        g = (0, o.Z)(m, o.a.LONG_TIME_LEFT);
    return !0 === t || p === f.a$.NONE
        ? null
        : (0, r.jsx)(s.Tooltip, {
              text: _.intl.string(_.t['4RgA6O']),
              tooltipClassName: h.tooltip,
              children: (e) =>
                  (0, r.jsx)('div', {
                      ...e,
                      className: a()(h.unavailableCounterContainer, i),
                      children: (0, r.jsx)(s.Clickable, {
                          style: { cursor: 'pointer' },
                          onClick: () => {
                              window.open(c.Z.getArticleURL(d.BhN.FRACTIONAL_PREMIUM_ABOUT), '_blank');
                          },
                          children: (0, r.jsxs)('div', {
                              className: a()(h.unavailableCounterPill, n),
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-sm/bold',
                                      className: h.unavailableCounterPillText,
                                      children: _.intl.string(_.t['5nrJDA']).toUpperCase()
                                  }),
                                  (0, r.jsx)(u.Z, {
                                      countdownText: g,
                                      className: h.countDownText
                                  })
                              ]
                          })
                      })
                  })
          });
}
