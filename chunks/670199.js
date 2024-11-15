t.d(n, {
    Z: function () {
        return N;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    s = t(481060),
    o = t(600164),
    r = t(219230),
    c = t(788080),
    d = t(548647),
    u = t(696375),
    x = t(97568),
    m = t(800530),
    C = t(388032),
    h = t(483760);
function N(e) {
    var n, t;
    let { classification: l, isDsaEligible: N = !1, isSpam: p = !1, isCoppa: _ = !1, className: g, onClose: j, onNext: b } = e,
        I = (0, d.n)(),
        E = null !== (n = null == l ? void 0 : l.explainer_link) && void 0 !== n ? n : '',
        T = null != l && null != l.flagged_content && l.flagged_content.length > 0,
        S = (0, c.c7)(null == l ? void 0 : l.description),
        v = !p && !_,
        f = (0, r.B)('classification_evidence'),
        A = null != l && (((0, c.FB)(l) && f) || T);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: h.header,
                separator: !1,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: h.title,
                        variant: 'heading-xl/semibold',
                        children: C.intl.string(C.t['C5q+pa'])
                    }),
                    (0, i.jsx)(s.Text, {
                        className: h.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: C.intl.string(C.t.URt7VF)
                    }),
                    null != j &&
                        (0, i.jsx)(s.ModalCloseButton, {
                            className: h.closeButton,
                            onClick: j
                        })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: a()(h.modalContent, !A && h.evidenceOffset, g),
                paddingFix: !1,
                children: [
                    A && (0, i.jsx)(x.s, { flaggedContent: null !== (t = l.flagged_content) && void 0 !== t ? t : [] }),
                    (0, i.jsx)(s.Text, {
                        className: h.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: C.intl.string(C.t.xsdcxs)
                    }),
                    (0, i.jsx)('div', {
                        className: h.policyContainer,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/semibold',
                            children: S
                        })
                    }),
                    _ &&
                        (0, i.jsx)(u.Z, {
                            url: m.sQ.AGE_VERIFICATION_LINK,
                            text: C.intl.string(C.t['gJs+kZ']),
                            onClick: () => I(m.n0.ClickAgeVerificationLink)
                        }),
                    p &&
                        !_ &&
                        (0, i.jsx)(u.Z, {
                            url: m.sQ.SPAM_LINK,
                            text: C.intl.string(C.t['PaNS+P']),
                            onClick: () => I(m.n0.ClickSpamWebformLink)
                        }),
                    !_ &&
                        (0, i.jsx)(u.Z, {
                            text: C.intl.string(C.t['Vtyn//']),
                            url: E,
                            onClick: () => I(m.n0.ClickLearnMoreLink)
                        }),
                    v &&
                        N &&
                        (0, i.jsx)(s.Text, {
                            className: h.learnMore,
                            variant: 'text-xs/normal',
                            children: C.intl.format(C.t.WMUgCQ, {})
                        })
                ]
            }),
            v &&
                (0, i.jsx)(s.ModalFooter, {
                    children: (0, i.jsx)(s.Button, {
                        onClick: b,
                        color: s.Button.Colors.BRAND,
                        children: C.intl.string(C.t.PDTjLC)
                    })
                })
        ]
    });
}
