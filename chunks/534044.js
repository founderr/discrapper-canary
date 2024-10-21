s.d(n, {
    Z: function () {
        return A;
    }
});
var a = s(200651);
s(192379);
var t = s(120356),
    i = s.n(t),
    l = s(481060),
    o = s(600164),
    r = s(548647),
    c = s(696375),
    d = s(800530),
    _ = s(689938),
    E = s(549476),
    N = s(487043),
    u = s(160557);
function A(e) {
    let { className: n, onNext: s, onClose: t } = e,
        A = (0, r.n)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                direction: o.Z.Direction.VERTICAL,
                className: N.header,
                separator: !1,
                children: [
                    (0, a.jsx)('div', {
                        className: E.iconContainer,
                        children: (0, a.jsx)('img', {
                            src: u,
                            alt: '',
                            className: E.icon
                        })
                    }),
                    (0, a.jsx)(l.Heading, {
                        className: N.title,
                        variant: 'heading-xl/semibold',
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_HEADER
                    }),
                    (0, a.jsx)(l.Heading, {
                        className: N.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_SUBHEADER
                    }),
                    null != t &&
                        (0, a.jsx)(l.ModalCloseButton, {
                            className: N.closeButton,
                            onClick: t
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: i()(E.modalContent, n),
                paddingFix: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-md/bold',
                        color: 'header-primary',
                        className: E.actionsHeader,
                        children: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_ACTIONS_HEADER
                    }),
                    (0, a.jsx)(c.Z, {
                        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_GUIDELINES_LINK,
                        url: d.sQ.COMMUNITY_GUIDELINES,
                        onClick: () => A(d.n0.ClickCommunityGuidelinesLink)
                    }),
                    (0, a.jsx)(c.Z, {
                        text: _.Z.Messages.APPEAL_INGESTION_MODAL_REQUEST_SENT_RULES_LINK,
                        url: d.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
                        onClick: () => A(d.n0.ClickWarningSystemHelpcenterLink)
                    })
                ]
            }),
            (0, a.jsx)(l.ModalFooter, {
                children: (0, a.jsx)(l.Button, {
                    onClick: s,
                    color: l.Button.Colors.BRAND,
                    children: _.Z.Messages.DONE
                })
            })
        ]
    });
}
