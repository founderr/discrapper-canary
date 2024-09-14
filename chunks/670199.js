s.d(n, {
    Z: function () {
        return x;
    }
});
var a = s(735250);
s(470079);
var t = s(120356),
    i = s.n(t),
    l = s(481060),
    o = s(600164),
    r = s(219230),
    c = s(788080),
    d = s(548647),
    _ = s(696375),
    E = s(97568),
    N = s(800530),
    u = s(689938),
    A = s(487043);
function x(e) {
    var n, s;
    let { classification: t, isSpam: x = !1, isCoppa: I = !1, className: m, onClose: S, onNext: C } = e,
        T = (0, d.n)(),
        h = null !== (n = null == t ? void 0 : t.explainer_link) && void 0 !== n ? n : '',
        L = null != t && null != t.flagged_content && t.flagged_content.length > 0,
        M = (0, c.c7)(null == t ? void 0 : t.description),
        p = !x && !I,
        P = (0, r.B)('classification_evidence'),
        O = null != t && (((0, c.FB)(t) && P) || L);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: A.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        className: A.title,
                        variant: 'heading-xl/semibold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_HEADER
                    }),
                    (0, a.jsx)(l.Text, {
                        className: A.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBHEADER
                    }),
                    null != S &&
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: A.closeButton,
                            onClick: S
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: i()(A.modalContent, !O && A.evidenceOffset, m),
                paddingFix: !1,
                children: [
                    O && (0, a.jsx)(E.s, { flaggedContent: null !== (s = t.flagged_content) && void 0 !== s ? s : [] }),
                    (0, a.jsx)(l.Text, {
                        className: A.optionHeader,
                        color: 'header-secondary',
                        variant: 'text-xs/bold',
                        children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_POLICY_HEADER
                    }),
                    (0, a.jsx)('div', {
                        className: A.policyContainer,
                        children: (0, a.jsx)(l.Text, {
                            variant: 'text-md/semibold',
                            children: M
                        })
                    }),
                    I &&
                        (0, a.jsx)(_.Z, {
                            url: N.sQ.AGE_VERIFICATION_LINK,
                            text: u.Z.Messages.APPEAL_INGESTION_AGE_VERIFICATION_LINK_TITLE,
                            onClick: () => T(N.n0.ClickAgeVerificationLink)
                        }),
                    x &&
                        !I &&
                        (0, a.jsx)(_.Z, {
                            url: N.sQ.SPAM_LINK,
                            text: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_SUBMIT_SPAM,
                            onClick: () => T(N.n0.ClickSpamWebformLink)
                        }),
                    !I &&
                        (0, a.jsx)(_.Z, {
                            text: u.Z.Messages.APPEAL_INGESTION_LEARN_MORE_LINK_TITLE,
                            url: h,
                            onClick: () => T(N.n0.ClickLearnMoreLink)
                        }),
                    p &&
                        (0, a.jsx)(l.Text, {
                            className: A.learnMore,
                            variant: 'text-xs/normal',
                            children: u.Z.Messages.APPEAL_INGESTION_MODAL_SPEED_BUMP_LEARN_MORE_OTHER_OPTIONS_DSA.format()
                        })
                ]
            }),
            p &&
                (0, a.jsx)(l.ModalFooter, {
                    children: (0, a.jsx)(l.Button, {
                        onClick: C,
                        color: l.Button.Colors.BRAND,
                        children: u.Z.Messages.NEXT
                    })
                })
        ]
    });
}
