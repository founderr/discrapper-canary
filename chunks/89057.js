n.d(t, {
    Vq: function () {
        return C;
    },
    c8: function () {
        return N;
    },
    oQ: function () {
        return p;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(692547),
    o = n(780384),
    l = n(481060),
    c = n(410030),
    d = n(600164),
    _ = n(63063),
    u = n(211242),
    E = n(981631),
    T = n(689938),
    I = n(943981),
    R = n(51125),
    m = n(47268);
function g(e) {
    let { className: t } = e,
        n = (0, c.ZP)(),
        a = (0, o.wj)(n) ? R : m;
    return (0, s.jsxs)('div', {
        className: r()(I.container, t),
        children: [
            (0, s.jsx)(l.Heading, {
                className: I.header,
                variant: 'heading-xl/semibold',
                children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, s.jsxs)(l.Text, {
                className: I.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, s.jsx)('p', { children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, s.jsx)('p', { children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: _.Z.getArticleURL(E.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, s.jsx)('img', {
                src: a,
                className: I.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function N() {
    return (0, s.jsx)(g, { className: I.settings });
}
function C(e) {
    let { onClose: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.ModalHeader, {
                className: I.blockedPaymentsModalHeader,
                justify: d.Z.Justify.END,
                children: (0, s.jsx)(l.ModalCloseButton, { onClick: t })
            }),
            (0, s.jsx)(l.ModalContent, {
                className: I.blockedPaymentsModalContent,
                children: (0, s.jsx)(g, { className: I.modal })
            })
        ]
    });
}
function p(e) {
    let { className: t } = e;
    return (0, u.Q)()
        ? (0, s.jsxs)(l.Card, {
              className: r()(I.blockedPaymentsWarning, t),
              type: l.Card.Types.CUSTOM,
              children: [
                  (0, s.jsx)(l.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: I.blockedPaymentsWarningIcon,
                      color: i.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, s.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: _.Z.getArticleURL(E.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
