t.d(n, {
    Vq: function () {
        return E;
    },
    c8: function () {
        return b;
    },
    oQ: function () {
        return I;
    }
});
var o = t(735250);
t(470079);
var r = t(120356),
    a = t.n(r),
    i = t(692547),
    c = t(780384),
    l = t(481060),
    s = t(410030),
    u = t(600164),
    d = t(63063),
    p = t(211242),
    _ = t(981631),
    f = t(689938),
    m = t(943981),
    h = t(51125),
    g = t(47268);
function S(e) {
    let { className: n } = e,
        t = (0, s.ZP)(),
        r = (0, c.wj)(t) ? h : g;
    return (0, o.jsxs)('div', {
        className: a()(m.container, n),
        children: [
            (0, o.jsx)(l.Heading, {
                className: m.header,
                variant: 'heading-xl/semibold',
                children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, o.jsxs)(l.Text, {
                className: m.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [(0, o.jsx)('p', { children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, o.jsx)('p', { children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) }) })]
            }),
            (0, o.jsx)('img', {
                src: r,
                className: m.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function b() {
    return (0, o.jsx)(S, { className: m.settings });
}
function E(e) {
    let { onClose: n } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(l.ModalHeader, {
                className: m.blockedPaymentsModalHeader,
                justify: u.Z.Justify.END,
                children: (0, o.jsx)(l.ModalCloseButton, { onClick: n })
            }),
            (0, o.jsx)(l.ModalContent, {
                className: m.blockedPaymentsModalContent,
                children: (0, o.jsx)(S, { className: m.modal })
            })
        ]
    });
}
function I(e) {
    let { className: n } = e;
    return (0, p.Q)()
        ? (0, o.jsxs)(l.Card, {
              className: a()(m.blockedPaymentsWarning, n),
              type: l.Card.Types.CUSTOM,
              children: [
                  (0, o.jsx)(l.CircleWarningIcon, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      className: m.blockedPaymentsWarningIcon,
                      color: i.Z.unsafe_rawColors.YELLOW_300.css
                  }),
                  (0, o.jsx)(l.Text, {
                      variant: 'text-sm/normal',
                      children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: d.Z.getArticleURL(_.BhN.BLOCKED_PAYMENTS) })
                  })
              ]
          })
        : null;
}
