t.d(s, {
    L1: function () {
        return I;
    },
    o1: function () {
        return S;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(570140),
    l = t(782568),
    c = t(313201),
    d = t(960359),
    _ = t(524347),
    u = t(853197),
    E = t(689938),
    T = t(347301);
function S(e) {
    let { onClose: s, code: t, copyInputTitle: a, bodyText: i } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.ModalHeader, {
                separator: !1,
                className: T.headerContainer,
                children: [
                    (0, n.jsx)('div', { className: T.dropArt }),
                    (0, n.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: E.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                    })
                ]
            }),
            (0, n.jsxs)(r.ModalContent, {
                className: T.modalContent,
                children: [
                    (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        className: T.codeBodyText,
                        children: i
                    }),
                    (0, n.jsx)(r.FormDivider, { className: T.formDivider }),
                    (0, n.jsx)(r.FormSection, {
                        title: a,
                        className: T.formSection,
                        children: (0, n.jsx)(r.Button, {
                            onClick: () => (0, l.Z)(t),
                            color: r.Button.Colors.BRAND,
                            look: r.Button.Looks.FILLED,
                            children: E.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
                        })
                    })
                ]
            }),
            (0, n.jsx)(r.ModalFooter, {
                className: T.modalFooter,
                children: (0, n.jsx)(r.Button, {
                    className: T.closeButton,
                    onClick: s,
                    look: r.Button.Looks.LINK,
                    color: T.closeButton,
                    children: E.Z.Messages.CLOSE
                })
            })
        ]
    });
}
function I(e) {
    let { onClose: s, errorCode: t } = e,
        a = {
            260000: E.Z.Messages.DROPS_USER_NOT_ENROLLED_ERROR,
            260001: E.Z.Messages.DROPS_QUEST_NOT_COMPLETED_ERROR,
            260002: E.Z.Messages.DROPS_NO_CODE_AVAILABLE_ERROR,
            260003: E.Z.Messages.DROPS_CODE_ALREADY_CLAIMED_ERROR
        },
        i = E.Z.Messages.GENERIC_ERROR_BODY;
    return (
        null != a[t] && (i = a[t]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(r.ModalHeader, {
                    separator: !1,
                    className: T.errorHeader,
                    children: [
                        (0, n.jsx)('div', { className: T.errorArt }),
                        (0, n.jsx)(r.Heading, {
                            variant: 'heading-xl/semibold',
                            children: E.Z.Messages.GENERIC_ERROR_TITLE
                        })
                    ]
                }),
                (0, n.jsx)(r.ModalContent, {
                    className: T.errorBody,
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        className: T.bodyText,
                        children: i
                    })
                }),
                (0, n.jsx)(r.ModalFooter, {
                    children: (0, n.jsx)(r.Button, {
                        color: r.Button.Colors.BRAND,
                        onClick: s,
                        children: E.Z.Messages.CLOSE
                    })
                })
            ]
        })
    );
}
s.ZP = function (e) {
    let { onClose: s, code: l, drop: I, platform: N, transitionState: m } = e,
        C = (0, c.Dt)(),
        [A, g] = a.useState();
    a.useEffect(() => {
        null == l &&
            o.Z.wait(async () => {
                await (0, d.dN)(I.dropsQuestId);
            });
    }, [I.dropsQuestId, l]);
    let h = (0, i.e7)([_.Z], () => _.Z.platformAvailability);
    return (0, n.jsx)(r.ModalRoot, {
        transitionState: m,
        'aria-labelledby': C,
        children: (0, n.jsx)(n.Fragment, {
            children: (() => {
                if (null != l)
                    return (0, n.jsx)(S, {
                        bodyText: I.messages.claimTip(),
                        onClose: s,
                        copyInputTitle: E.Z.Messages.DROPS_REDEMPTION_CODE_PLATFORM_TITLE.format({ platform: N }),
                        code: l
                    });
                if (null === h)
                    return (0, n.jsx)('div', {
                        className: T.spinnerContainer,
                        children: (0, n.jsx)(r.Spinner, {})
                    });
                {
                    let e = h.length > 0,
                        a = 1 === h.length;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)(r.ModalHeader, {
                                separator: !1,
                                className: T.headerContainer,
                                children: [
                                    (0, n.jsx)('div', { className: T.dropArt }),
                                    (0, n.jsx)(r.Heading, {
                                        variant: 'heading-lg/semibold',
                                        children: E.Z.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                                    })
                                ]
                            }),
                            (0, n.jsxs)(r.ModalContent, {
                                children: [
                                    (0, n.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        className: T.dropBodyText,
                                        children: a ? E.Z.Messages.DROPS_MODAL_CHOOSE_SINGLE_PLATFORM.format({ platform: (0, u.Un)(h[0]) }) : E.Z.Messages.DROPS_MODAL_CHOOSE_PLATFORM.format({ title: I.title })
                                    }),
                                    (0, n.jsx)(r.FormDivider, { className: T.formDivider }),
                                    (0, n.jsxs)(r.FormSection, {
                                        className: T.dropFormSection,
                                        children: [
                                            (0, n.jsx)(r.SingleSelect, {
                                                onChange: g,
                                                options: h.map((e) => ({
                                                    value: e,
                                                    label: (0, u.Un)(e)
                                                })),
                                                value: a ? h[0] : A,
                                                isDisabled: !e,
                                                className: e ? '' : T.selectDangerBorder,
                                                look: e ? r.SelectLooks.FILLED : r.SelectLooks.CUSTOM
                                            }),
                                            !e &&
                                                (0, n.jsx)(r.Text, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-danger',
                                                    className: T.errorCodesText,
                                                    children: E.Z.Messages.DROPS_CODES_RAN_OUT
                                                })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsxs)(r.ModalFooter, {
                                children: [
                                    e &&
                                        (0, n.jsx)(r.Button, {
                                            color: r.Button.Colors.BRAND,
                                            onClick: () => {
                                                (0, r.openModalLazy)(async () => {
                                                    let { default: e } = await t.e('5004').then(t.bind(t, 233070));
                                                    return (t) =>
                                                        (void 0 !== A || a) &&
                                                        (0, n.jsx)(e, {
                                                            ...t,
                                                            platform: void 0 === A ? h[0] : A,
                                                            code: l,
                                                            dropsQuestId: I.dropsQuestId,
                                                            closeParentModal: s,
                                                            singlePlatformClaim: a
                                                        });
                                                });
                                            },
                                            disabled: void 0 === A && !a,
                                            children: E.Z.Messages.UNLOCK_CODE
                                        }),
                                    e
                                        ? (0, n.jsx)(r.Button, {
                                              onClick: s,
                                              look: r.Button.Looks.LINK,
                                              color: T.maybeLaterButton,
                                              children: E.Z.Messages.MAYBE_LATER
                                          })
                                        : (0, n.jsx)(r.Button, {
                                              onClick: s,
                                              look: r.Button.Looks.LINK,
                                              color: T.closeButton,
                                              children: E.Z.Messages.CLOSE
                                          })
                                ]
                            })
                        ]
                    });
                }
            })()
        })
    });
};
