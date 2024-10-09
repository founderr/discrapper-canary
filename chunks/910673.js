n.r(t);
var a = n(735250),
    o = n(470079),
    r = n(481060),
    l = n(230711),
    s = n(782568),
    i = n(880257),
    d = n(187819),
    E = n(63063),
    _ = n(163268),
    u = n(981631),
    c = n(526761),
    I = n(689938),
    C = n(754812),
    R = n(444812);
t.default = (e) => {
    let { channelId: t, messageId: T, transitionState: f, onClose: A } = e,
        N = (0, i.Z)(),
        m = (0, d._p)({
            location: 'explicit-media-learn-more',
            autoTrackExposure: !1
        }),
        M = o.useCallback(
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
        o.useEffect(() => {
            (0, _.aP)({
                action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
                channelId: t,
                messageId: T
            });
        }, [t, T]),
        (0, a.jsxs)(r.ModalRoot, {
            transitionState: f,
            'aria-label': I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
            children: [
                (0, a.jsx)(r.ModalHeader, {
                    separator: !1,
                    className: C.modalHeader,
                    children: (0, a.jsx)('img', {
                        src: R,
                        alt: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
                        className: C.headerImg
                    })
                }),
                (0, a.jsxs)(r.ModalContent, {
                    className: C.modalBody,
                    children: [
                        (0, a.jsx)(r.Heading, {
                            variant: 'heading-lg/bold',
                            className: C.modalInteriorHeader,
                            children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
                        }),
                        (0, a.jsx)(r.Text, {
                            variant: 'text-md/normal',
                            color: 'header-secondary',
                            children: N ? I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT : I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
                        }),
                        (0, a.jsxs)('div', {
                            className: C.buttonContainer,
                            children: [
                                N
                                    ? (0, a.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: function () {
                                              M(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), l.Z.open(u.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: m ? c.to.EXPLICIT_MEDIA_REDACTION_V2 : c.to.EXPLICIT_MEDIA_REDACTION }), A();
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
                                      })
                                    : (0, a.jsx)(r.Button, {
                                          color: r.Button.Colors.BRAND,
                                          onClick: () => {
                                              (0, s.Z)(E.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION));
                                          },
                                          fullWidth: !0,
                                          children: I.Z.Messages.LEARN_MORE
                                      }),
                                (0, a.jsx)(r.Button, {
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: function () {
                                        A(), M(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
                                    },
                                    fullWidth: !0,
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
                                }),
                                (0, a.jsx)(r.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: I.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
                                        handleFalsePositiveHook: () => {
                                            A(),
                                                M(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
                                                (0, r.openModalLazy)(async () => {
                                                    let { default: e } = await n(788679);
                                                    return (n) =>
                                                        (0, a.jsx)(e, {
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
