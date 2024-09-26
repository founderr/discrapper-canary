n.d(t, {
    Vq: function () {
        return m;
    },
    c8: function () {
        return C;
    },
    oQ: function () {
        return f;
    }
});
var s = n(735250);
n(470079);
var a = n(120356),
    r = n.n(a),
    i = n(692547),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(600164),
    _ = n(63063),
    E = n(211242),
    u = n(981631),
    T = n(689938),
    I = n(943981),
    R = n(51125),
    g = n(47268);
function N(e) {
    let { className: t } = e,
        n = (0, c.ZP)(),
        a = (0, l.wj)(n) ? R : g;
    return (0, s.jsxs)('div', {
        className: r()(I.container, t),
        children: [
            (0, s.jsx)(o.Heading, {
                className: I.header,
                variant: 'heading-xl/semibold',
                children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, s.jsxs)(o.Text, {
                className: I.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, s.jsx)('p', { children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, s.jsx)('p', { children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: _.Z.getArticleURL(u.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, s.jsx)('img', {
                src: a,
                className: I.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function C() {
    return (0, s.jsx)(N, { className: I.settings });
}
function m(e) {
    let { onClose: t } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.ModalHeader, {
                className: I.blockedPaymentsModalHeader,
                justify: d.Z.Justify.END,
                children: (0, s.jsx)(o.ModalCloseButton, { onClick: t })
            }),
            (0, s.jsx)(o.ModalContent, {
                className: I.blockedPaymentsModalContent,
                children: (0, s.jsx)(N, { className: I.modal })
            })
        ]
    });
}
function f(e) {
    let { className: t } = e;
    return (0, E.Q)()
        ? (0, s.jsxs)(o.Card, {
              className: r()(I.blockedPaymentsWarning, t),
              type: o.Card.Types.CUSTOM,
              children: [
                  (0, s.jsx)(o.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: I.blockedPaymentsWarningIcon,
                      color: i.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, s.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: T.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: _.Z.getArticleURL(u.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
