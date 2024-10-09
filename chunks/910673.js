n.r(t);
var o = n(735250),
    a = n(470079),
    r = n(481060),
    l = n(230711),
    s = n(782568),
    i = n(880257),
    d = n(187819),
    E = n(63063),
    _ = n(163268),
    c = n(981631),
    u = n(526761),
    I = n(689938),
    C = n(754812),
    R = n(444812);
t.default = (e) => {
    let { channelId: t, messageId: T, transitionState: A, onClose: N } = e,
        O = (0, i.Z)(),
        M = (0, d._p)({
            location: 'explicit-media-learn-more',
            autoTrackExposure: !1
        }),
        h = a.useCallback(
            (e) => {
                (0, _.aP)({
                    action: e,
                    channelId: t,
                    messageId: T
                });
            },
            [t, T]
        );
    return (
        a.useEffect(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: T
            });
        }, [t, T]),
        (0, o.jsxs)(r.ModalRoot, {
            transitionState: A,
            'aria-label': I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
                (0, o.jsx)(r.ModalHeader, {
                    separator: !1,
                    className: C.modalHeader,
                    children: (0, o.jsx)('img', {
                        src: R,
                        alt: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                        className: C.headerImg
                    })
                }),
                (0, o.jsxs)(r.ModalContent, {
                    className: C.modalBody,
                    children: [
                        (0, o.jsx)(r.Heading, {
                            variant: 'heading-lg/bold',
                            className: C.modalInteriorHeader,
                            children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }),
                        (0, o.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: O ? I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }),
                        (0, o.jsxs)('div', {
                            className: C.buttonContainer,
                            children: [
                                O
                                    ? (0, o.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: function () {
                                              h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), M ? l.Z.open(c.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: u.to.EXPLICIT_MEDIA_REDACTION_V2 }) : l.Z.open(c.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: u.to.EXPLICIT_MEDIA_REDACTION }), N();
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                                      })
                                    : (0, o.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: () => {
                                              (0, s.Z)(E.Z.getArticleURL(c.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.LEARN_MORE
                                      }),
                                (0, o.jsx)(r.Button, {
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: function () {
                                        N(), h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                                }),
                                (0, o.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                        handleFalsePositiveHook: () => {
                                            N(),
                                                h(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, r.openModalLazy)(async () => {
                                                    let { default: e } = await n(788679);
                                                    return (n) =>
                                                        (0, o.jsx)(e, {
                                                            channelId: t,
                                                            messageId: T,
                                                            ...n
                                                        });
                                                });
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
