t.d(n, {
    Vq: function () {
        return E;
    },
    c8: function () {
        return N;
    },
    oQ: function () {
        return C;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    a = t.n(i),
    s = t(692547),
    o = t(780384),
    l = t(481060),
    c = t(410030),
    u = t(600164),
    d = t(63063),
    I = t(211242),
    _ = t(981631),
    m = t(689938),
    f = t(943981),
    p = t(51125),
    T = t(47268);
function h(e) {
    let { className: n } = e,
        t = (0, c.ZP)(),
        i = (0, o.wj)(t) ? p : T;
    return (0, r.jsxs)('div', {
        className: a()(f.container, n),
        children: [
            (0, r.jsx)(l.Heading, {
                className: f.header,
                variant: 'heading-xl/semibold',
                children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, r.jsxs)(l.Text, {
                className: f.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, r.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, r.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, r.jsx)('img', {
                src: i,
                className: f.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function N() {
    return (0, r.jsx)(h, { className: f.settings });
}
function E(e) {
    let { onClose: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.ModalHeader, {
                className: f.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, r.jsx)(l.ModalCloseButton, { onClick: n })
            }),
            (0, r.jsx)(l.ModalContent, {
                className: f.blockedPaymentsModalContent,
                children: (0, r.jsx)(h, { className: f.modal })
            })
        ]
    });
}
function C(e) {
    let { className: n } = e;
    return (0, I.Q)()
        ? (0, r.jsxs)(l.Card, {
              className: a()(f.blockedPaymentsWarning, n),
              type: l.Card.Types.CUSTOM,
              children: [
                  (0, r.jsx)(l.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: f.blockedPaymentsWarningIcon,
                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
