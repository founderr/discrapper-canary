n.d(a, {
    Vq: function () {
        return x;
    },
    c8: function () {
        return k;
    },
    oQ: function () {
        return B;
    }
});
var t = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    i = n(692547),
    s = n(780384),
    d = n(481060),
    c = n(410030),
    l = n(600164),
    f = n(63063),
    u = n(211242),
    m = n(981631),
    g = n(388032),
    _ = n(792776),
    h = n(51125),
    b = n(47268);
function p(e) {
    let { className: a } = e,
        n = (0, c.ZP)(),
        r = (0, s.wj)(n) ? h : b;
    return (0, t.jsxs)('div', {
        className: o()(_.container, a),
        children: [
            (0, t.jsx)(d.Heading, {
                className: _.header,
                variant: 'heading-xl/semibold',
                children: g.intl.string(g.t.vwMEHR)
            }),
            (0, t.jsxs)(d.Text, {
                className: _.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, t.jsx)('p', { children: g.intl.string(g.t.fev8MT) }), (0, t.jsx)('p', { children: g.intl.format(g.t.IHxEJS, { helpdeskArticle: f.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, t.jsx)('img', {
                src: r,
                className: _.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function k() {
    return (0, t.jsx)(p, { className: _.settings });
}
function x(e) {
    let { onClose: a } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(d.ModalHeader, {
                className: _.blockedPaymentsModalHeader,
                justify: l.Z.Justify.END,
                children: (0, t.jsx)(d.ModalCloseButton, { onClick: a })
            }),
            (0, t.jsx)(d.ModalContent, {
                className: _.blockedPaymentsModalContent,
                children: (0, t.jsx)(p, { className: _.modal })
            })
        ]
    });
}
function B(e) {
    let { className: a } = e;
    return (0, u.Q)()
        ? (0, t.jsxs)(d.Card, {
              className: o()(_.blockedPaymentsWarning, a),
              type: d.Card.Types.CUSTOM,
              children: [
                  (0, t.jsx)(d.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: _.blockedPaymentsWarningIcon,
                      color: i.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, t.jsx)(d.Text, {
                      variant: 'text-sm/normal',
                      children: g.intl.format(g.t.NYkcCg, { helpdeskArticle: f.Z.getArticleURL(m.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
