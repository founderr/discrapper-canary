t.d(a, {
    Vq: function () {
        return I;
    },
    c8: function () {
        return C;
    },
    oQ: function () {
        return T;
    }
});
var n = t(735250);
t(470079);
var s = t(120356),
    r = t.n(s),
    l = t(692547),
    o = t(780384),
    i = t(481060),
    c = t(410030),
    u = t(600164),
    d = t(63063),
    E = t(211242),
    _ = t(981631),
    A = t(689938),
    m = t(943981),
    N = t(51125),
    p = t(47268);
function h(e) {
    let { className: a } = e,
        t = (0, c.ZP)(),
        s = (0, o.wj)(t) ? N : p;
    return (0, n.jsxs)('div', {
        className: r()(m.container, a),
        children: [
            (0, n.jsx)(i.Heading, {
                className: m.header,
                variant: 'heading-xl/semibold',
                children: A.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, n.jsxs)(i.Text, {
                className: m.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, n.jsx)('p', { children: A.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, n.jsx)('p', { children: A.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, n.jsx)('img', {
                src: s,
                className: m.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function C() {
    return (0, n.jsx)(h, { className: m.settings });
}
function I(e) {
    let { onClose: a } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.ModalHeader, {
                className: m.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, n.jsx)(i.ModalCloseButton, { onClick: a })
            }),
            (0, n.jsx)(i.ModalContent, {
                className: m.blockedPaymentsModalContent,
                children: (0, n.jsx)(h, { className: m.modal })
            })
        ]
    });
}
function T(e) {
    let { className: a } = e;
    return (0, E.Q)()
        ? (0, n.jsxs)(i.Card, {
              className: r()(m.blockedPaymentsWarning, a),
              type: i.Card.Types.CUSTOM,
              children: [
                  (0, n.jsx)(i.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: m.blockedPaymentsWarningIcon,
                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, n.jsx)(i.Text, {
                      variant: 'text-sm/normal',
                      children: A.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
