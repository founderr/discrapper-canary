t.d(n, {
    Vq: function () {
        return v;
    },
    c8: function () {
        return m;
    },
    oQ: function () {
        return C;
    }
});
var o = t(735250);
t(470079);
var r = t(120356), a = t.n(r), i = t(692547), c = t(780384), s = t(481060), l = t(410030), d = t(285952), u = t(63063), f = t(211242), p = t(981631), _ = t(689938), h = t(736802), b = t(51125), g = t(47268);
function x(e) {
    let {className: n} = e, t = (0, l.ZP)(), r = (0, c.wj)(t) ? b : g;
    return (0, o.jsxs)('div', {
        className: a()(h.container, n),
        children: [
            (0, o.jsx)(s.Heading, {
                className: h.header,
                variant: 'heading-xl/semibold',
                children: _.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
            }),
            (0, o.jsxs)(s.Text, {
                className: h.description,
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: [
                    (0, o.jsx)('p', { children: _.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }),
                    (0, o.jsx)('p', { children: _.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: u.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS) }) })
                ]
            }),
            (0, o.jsx)('img', {
                src: r,
                className: h.splashImage,
                alt: 'Blocked Payments'
            })
        ]
    });
}
function m() {
    return (0, o.jsx)(x, { className: h.settings });
}
function v(e) {
    let {onClose: n} = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(s.ModalHeader, {
                className: h.blockedPaymentsModalHeader,
                justify: d.Z.Justify.END,
                children: (0, o.jsx)(s.ModalCloseButton, { onClick: n })
            }),
            (0, o.jsx)(s.ModalContent, {
                className: h.blockedPaymentsModalContent,
                children: (0, o.jsx)(x, { className: h.modal })
            })
        ]
    });
}
function C(e) {
    let {className: n} = e;
    return (0, f.Q)() ? (0, o.jsxs)(s.Card, {
        className: a()(h.blockedPaymentsWarning, n),
        type: s.Card.Types.CUSTOM,
        children: [
            (0, o.jsx)(s.CircleExclamationPointIcon, {
                size: 'custom',
                width: 20,
                height: 20,
                className: h.blockedPaymentsWarningIcon,
                color: i.Z.unsafe_rawColors.YELLOW_300.css
            }),
            (0, o.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: _.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: u.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS) })
            })
        ]
    }) : null;
}
