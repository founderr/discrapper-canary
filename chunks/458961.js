t.r(A),
    t.d(A, {
        GuildProductEditModalContent: function () {
            return J;
        },
        default: function () {
            return $;
        }
    }),
    t(47120);
var n,
    a,
    s = t(735250),
    r = t(470079),
    o = t(120356),
    l = t.n(o),
    i = t(512722),
    d = t.n(i),
    c = t(831209),
    u = t(399606),
    C = t(215569),
    g = t(481060),
    T = t(749210),
    I = t(852860),
    U = t(607070),
    p = t(725803),
    h = t(313201),
    m = t(76535),
    f = t(215388),
    v = t(674180),
    q = t(884858),
    E = t(695346),
    O = t(430824),
    N = t(937615),
    D = t(73346),
    R = t(506071),
    L = t(587123),
    x = t(240864),
    b = t(863663),
    P = t(923400),
    V = t(623488),
    S = t(152980),
    Z = t(120651),
    F = t(871388),
    _ = t(412110),
    j = t(513669),
    M = t(972797),
    G = t(943516),
    K = t(302463),
    W = t(981631),
    B = t(674563),
    X = t(689938),
    z = t(268995);
let Q = (0, h.hQ)(),
    H = (0, h.hQ)(),
    y = (0, h.hQ)();
function k(e) {
    let { text: A, onChange: t, value: n, disabled: a, warning: r } = e,
        o = (0, h.Dt)(),
        i = a ? 'text-muted' : 'text-normal';
    return (0, s.jsxs)('label', {
        className: l()(z.benefitToggleContainer, { [z.disabled]: a }),
        htmlFor: o,
        children: [
            (0, s.jsx)(g.Text, {
                variant: 'text-sm/medium',
                color: i,
                children: A
            }),
            null != r &&
                (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(g.Spacer, {
                            size: 4,
                            horizontal: !0
                        }),
                        r
                    ]
                }),
            (0, s.jsx)(g.Spacer, {
                size: 16,
                horizontal: !0
            }),
            (0, s.jsx)(g.Switch, {
                onChange: t,
                checked: n,
                disabled: a,
                id: o
            })
        ]
    });
}
function Y(e, A) {
    return e.filter((e) => {
        let { value: t, label: n } = e;
        return t.toString().includes(A) || n.includes(A);
    });
}
function w(e) {
    let { guildId: A, selectedPriceTier: t, setPriceTier: n } = e,
        { priceTiers: a } = (0, m.R)(A, W.RG5.GUILD_PRODUCTS),
        o = r.useMemo(
            () =>
                (null != a ? a : null != t ? [t] : []).map((e) => ({
                    value: e,
                    label: (0, N.T4)(e, W.pKx.USD)
                })),
            [a, t]
        );
    return (0, s.jsx)(g.SearchableSelect, {
        value: t,
        placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
        maxVisibleItems: 5,
        options: o,
        onChange: n,
        filter: Y,
        'aria-required': !0
    });
}
function J(e) {
    var A, n, a, o, l, i, h, m;
    let { guildId: q, productId: Y, transitionState: J, onClose: ee } = e,
        [eA, et] = r.useState(Y),
        en = (0, u.e7)([x.Z], () => (null == eA ? null : x.Z.getGuildProduct(eA)), [eA]),
        ea = (null == en ? void 0 : en.published) === !0,
        { application: es } = (0, p.Z)(q, B.wW.GUILD_ROLE_SUBSCRIPTIONS),
        er = P.M['0'],
        eo = (0, u.e7)([U.Z], () => U.Z.useReducedMotion),
        el = E.QK.useSetting(),
        ei = (0, R.n)(),
        ed = r.useCallback(() => {
            var e;
            return (null == en ? void 0 : null === (e = en.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? er.data : (0, D._W)(en.image_asset.application_id, en.image_asset, 600, ei && el ? void 0 : 'webp');
        }, [er, en, ei, el]),
        { shouldRestrictUpdatingCreatorMonetizationSettings: ec } = (0, v.gX)(q);
    r.useEffect(() => {
        ec && (ee(), (0, F.B)(X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY));
    }, [ec, ee]);
    let [eu, eC] = r.useState(null !== (a = null == en ? void 0 : en.name) && void 0 !== a ? a : ''),
        [eg, eT] = r.useState(null !== (o = null == en ? void 0 : en.description) && void 0 !== o ? o : ''),
        [eI, eU] = r.useState(null !== (l = null == en ? void 0 : en.price_tier) && void 0 !== l ? l : void 0),
        [ep, eh] = r.useState(ed),
        [em, ef] = r.useState(null !== (i = null == en ? void 0 : null === (A = en.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== i ? i : er.name),
        [ev, eq] = r.useState(!1),
        [eE, eO] = r.useState(),
        eN = r.useMemo(() => (null != eI ? (0, N.T4)(eI, W.pKx.USD) : void 0), [eI]),
        [eD, eR] = r.useState(!0),
        { changesSaving: eL, saveError: ex, saveProductWithAttachments: eb, hasUnsavedAttachmentChanges: eP, cancelUnusedUploads: eV } = (0, L.P)(),
        eS = (null == en ? void 0 : en.attachments) != null && (null == en ? void 0 : en.attachments.length) > 0,
        eZ = null != ex ? ex : eE,
        eF = null != eL && 'published' in eL,
        e_ = null != eL && !eF,
        ej = null !== (h = null == en ? void 0 : en.role_id) && void 0 !== h ? h : null,
        [eM, eG] = r.useState(),
        eK = null != eM || null != ej,
        eW = (0, u.e7)([O.Z], () => (null != ej && null !== eM ? O.Z.getRole(q, ej) : null != eM ? eM : void 0), [eM, ej, q]),
        eB = '';
    eK && eD ? (eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE) : eK ? (eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE) : eD && (eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
    let eX = () => {
            eR(!1), eV();
        },
        [ez, eQ] = r.useState(),
        {
            changes: eH,
            hasUnsavedChanges: ey,
            canSaveForDraft: ek,
            canSaveForPublished: eY,
            canPublishOrUnpublish: ew
        } = r.useMemo(
            () =>
                (0, b.fG)({
                    guildProductListing: en,
                    name: eu,
                    priceTier: eI,
                    description: eg,
                    image: ep,
                    imageName: em,
                    isImageChanged: ev,
                    newRoleParams: eM,
                    hasSavedAttachments: eS,
                    hasUnsavedAttachmentChanges: eP
                }),
            [en, eu, eI, eg, ep, em, ev, eM, eS, eP]
        ),
        eJ = r.useMemo(
            () =>
                ey || null == ez || 'publish' === ez || null != eZ
                    ? null
                    : (0, s.jsx)(g.SlideIn, {
                          className: z.successNotice,
                          children: (0, s.jsx)(I.Z, {
                              message: (0, s.jsxs)('div', {
                                  className: z.successNoticeMessage,
                                  children: [
                                      (0, s.jsx)(g.CircleCheckIcon, {
                                          size: 'md',
                                          color: c.Z.BUTTON_POSITIVE_BACKGROUND,
                                          secondaryColor: c.Z.WHITE
                                      }),
                                      (0, s.jsx)(g.Text, {
                                          variant: 'text-md/medium',
                                          children: 'draft' === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : 'update_publish' === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
                                      })
                                  ]
                              }),
                              onReset: () => eQ(void 0),
                              onResetText: X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
                          })
                      }),
            [eZ, ey, ez]
        ),
        e$ = r.useCallback(() => {
            ey
                ? (0, Z.Z)({
                      title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
                      body: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                      cta: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                      closeLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                      onConfirm: () => {
                          ee();
                      }
                  })
                : ee();
        }, [ee, ey]);
    r.useEffect(() => {
        (0, g.updateModal)(
            K.Yz,
            (e) =>
                (0, s.jsx)($, {
                    guildId: q,
                    productId: eA,
                    ...e
                }),
            e$
        );
    }, [q, e$, eA]);
    let e0 = async (e) => {
        let A = (0, b.pM)({ newRoleParams: eM });
        if ((eO(A), null != A)) return;
        let t = await eb(e);
        if ((eq(!1), null != t)) {
            if ((null != e.name && eC(t.name), null != e.description && eT(t.description), null != eM)) {
                let e = t.role_id;
                d()(null != e, 'Cannot update role without role ID'), await T.Z.updateRole(q, e, eM);
            }
            eG(void 0), et(t.id), 'published' in e && !0 === e.published && ee();
        }
    };
    r.useEffect(() => {
        if (null != eZ) {
            var e;
            (0, _.V)(eZ, q, null == es ? void 0 : null === (e = es.team) || void 0 === e ? void 0 : e.id);
        }
    }, [eZ, q, es]),
        r.useEffect(() => {
            ey && eQ(void 0);
        }, [ey]);
    let e1 = r.useRef(null);
    return (0, s.jsxs)(g.ModalRoot, {
        transitionState: J,
        size: g.ModalSize.DYNAMIC,
        className: z.modalRoot,
        'aria-labelledby': Q,
        children: [
            (0, s.jsxs)(g.ModalHeader, {
                className: z.modalHeader,
                separator: !1,
                children: [
                    (0, s.jsxs)('div', {
                        className: z.headerText,
                        children: [
                            (0, s.jsx)(g.Heading, {
                                id: Q,
                                variant: 'heading-xl/semibold',
                                color: 'header-primary',
                                children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
                            }),
                            (0, s.jsx)(g.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
                            })
                        ]
                    }),
                    (0, s.jsx)(g.ModalCloseButton, {
                        onClick: e$,
                        className: z.__invalid_modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(g.ModalContent, {
                className: z.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, s.jsx)(g.ScrollerThin, {
                        children: (0, s.jsxs)('div', {
                            className: z.productFieldsSection,
                            ref: e1,
                            children: [
                                (0, s.jsx)(g.FormItem, {
                                    title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
                                    tag: 'label',
                                    htmlFor: H,
                                    error: null == eZ ? void 0 : eZ.getFirstFieldErrorMessage('name'),
                                    children: (0, s.jsx)(g.TextArea, {
                                        value: eu,
                                        onChange: eC,
                                        id: H,
                                        maxLength: 100,
                                        placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
                                        rows: 1,
                                        autosize: !0,
                                        showCharacterCount: eu.length > 0,
                                        showRemainingCharacterCount: eu.length > 0,
                                        required: !0,
                                        className: eu.length > 0 ? z.nameArea : void 0
                                    })
                                }),
                                (0, s.jsx)(g.FormItem, {
                                    title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
                                    tag: 'label',
                                    error: null == eZ ? void 0 : eZ.getFirstFieldErrorMessage('description'),
                                    htmlFor: y,
                                    children: (0, s.jsx)(f.Z, {
                                        id: y,
                                        className: z.descriptionArea,
                                        value: eg,
                                        onChange: eT,
                                        maxLength: 1500,
                                        placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
                                        showCharacterCount: eg.length > 0,
                                        parentModalKey: K.Yz,
                                        required: !0
                                    })
                                }),
                                (0, s.jsx)(g.FormItem, {
                                    title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
                                    tag: 'label',
                                    error: null == eZ ? void 0 : eZ.getFirstFieldErrorMessage('price_tier'),
                                    children: (0, s.jsx)(w, {
                                        guildId: q,
                                        selectedPriceTier: eI,
                                        setPriceTier: eU
                                    })
                                }),
                                (0, s.jsxs)(g.FormItem, {
                                    title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
                                    tag: 'label',
                                    error: null == eZ ? void 0 : eZ.getFirstFieldErrorMessage('image'),
                                    titleClassName: z.thumbnailLabel,
                                    children: [
                                        (0, s.jsx)(g.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
                                        }),
                                        (0, s.jsx)(g.Spacer, { size: 10 }),
                                        (0, s.jsx)(j.Z, {
                                            presetImages: P.M,
                                            radioGroupAriaLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
                                            image: ep,
                                            imageName: em,
                                            savedImageName: null == en ? void 0 : null === (n = en.image_asset) || void 0 === n ? void 0 : n.filename,
                                            onChange: (e, A) => {
                                                if (null != e) {
                                                    var t;
                                                    eh(e), ef(A), eq(e.startsWith('data:') || A !== (null == en ? void 0 : null === (t = en.image_asset) || void 0 === t ? void 0 : t.filename));
                                                }
                                            }
                                        })
                                    ]
                                }),
                                eD
                                    ? (0, s.jsx)(g.FormItem, {
                                          title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
                                          error: null == eZ ? void 0 : eZ.getFirstFieldErrorMessage('attachments'),
                                          children: (0, s.jsx)(S.s, {
                                              onFileAdded: () => {
                                                  var e;
                                                  null === (e = e1.current) ||
                                                      void 0 === e ||
                                                      e.scrollIntoView({
                                                          behavior: 'smooth',
                                                          block: 'end'
                                                      });
                                              }
                                          })
                                      })
                                    : null,
                                eK
                                    ? (0, s.jsx)(G.ZP, {
                                          error: null !== (m = null == eZ ? void 0 : eZ.getFirstFieldErrorMessage(b.NB)) && void 0 !== m ? m : void 0,
                                          newRoleParams: eM,
                                          setNewRoleParams: eG,
                                          guildId: q,
                                          listingRoleId: ej,
                                          productId: eA
                                      })
                                    : null
                            ]
                        })
                    }),
                    (0, s.jsx)('div', { className: z.horizontalSeparator }),
                    (0, s.jsx)(g.ScrollerThin, {
                        children: (0, s.jsxs)('div', {
                            className: z.productPreview,
                            children: [
                                (0, s.jsx)(M.Z, {
                                    disabled: !ew,
                                    disabledTooltip: ea ? X.Z.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : X.Z.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
                                    published: ea,
                                    onClick: () => {
                                        d()(ew, 'Attempting to publish/unpublish when not allowed'),
                                            eQ(ea ? 'unpublish' : 'publish'),
                                            e0({
                                                ...eH,
                                                published: !ea
                                            });
                                    },
                                    submitting: eF
                                }),
                                (0, s.jsx)('div', { className: z.verticalSeparator }),
                                (0, s.jsx)(g.Heading, {
                                    variant: 'text-xs/bold',
                                    color: 'header-secondary',
                                    className: z.previewHeading,
                                    children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
                                }),
                                (0, s.jsx)(g.Spacer, { size: 4 }),
                                (0, s.jsx)(g.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
                                }),
                                (0, s.jsx)(g.Spacer, { size: 16 }),
                                (0, s.jsx)(V.Z, {
                                    imageUrl: ep,
                                    name: '' === eu ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eu,
                                    description: '' === eg ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eg,
                                    formattedPrice: eN,
                                    role: eW,
                                    productType: eB,
                                    ctaComponent: (0, s.jsx)(g.ShinyButton, {
                                        shineSize: g.ShinyButton.ShineSizes.SMALL,
                                        pauseAnimation: eo || !ei,
                                        className: z.productPreviewCtaButton,
                                        children: X.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
                                    }),
                                    cardWidth: 340,
                                    thumbnailHeight: 190
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, s.jsx)(g.ModalFooter, {
                children: (0, s.jsxs)('div', {
                    className: z.footerActionButtons,
                    children: [
                        (0, s.jsxs)('div', {
                            className: z.footerActionLeftButtons,
                            children: [
                                (0, s.jsx)(k, {
                                    text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
                                    value: eK,
                                    onChange: (e) => {
                                        e ? eG((0, G.YP)()) : eG(void 0);
                                    },
                                    warning: null === eM ? (0, s.jsx)(G.aN, {}) : void 0,
                                    disabled: null != ej
                                }),
                                (0, s.jsx)(k, {
                                    text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
                                    value: eD,
                                    onChange: (e) => {
                                        e
                                            ? eR(!0)
                                            : eP
                                              ? (0, g.openModalLazy)(async () => {
                                                    let { ConfirmModal: e } = await Promise.resolve().then(t.bind(t, 481060));
                                                    return (A) =>
                                                        (0, s.jsx)(e, {
                                                            ...A,
                                                            header: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                                                            confirmText: X.Z.Messages.REMOVE,
                                                            cancelText: X.Z.Messages.CANCEL,
                                                            onConfirm: eX,
                                                            children: (0, s.jsx)(g.Text, {
                                                                variant: 'text-md/normal',
                                                                children: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                                                            })
                                                        });
                                                })
                                              : eX();
                                    },
                                    disabled: eS
                                })
                            ]
                        }),
                        (0, s.jsx)('div', {
                            className: z.footerActionRightButtons,
                            children: ea
                                ? (0, s.jsx)(g.Button, {
                                      color: g.Button.Colors.PRIMARY,
                                      disabled: !eY,
                                      submitting: e_,
                                      onClick: () => {
                                          d()(eY, 'cannot save changes for published product without adding all fields'), eQ('update_publish'), e0(eH);
                                      },
                                      children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
                                  })
                                : (0, s.jsx)(s.Fragment, {
                                      children: (0, s.jsx)(g.Button, {
                                          color: g.Button.Colors.PRIMARY,
                                          disabled: !ek,
                                          submitting: e_,
                                          onClick: () => {
                                              d()(ek, 'cannot save changes without name or price tier'), eQ('draft'), e0(eH);
                                          },
                                          children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
                                      })
                                  })
                        })
                    ]
                })
            }),
            (0, s.jsx)(C.W, {
                component: 'div',
                className: z.successNoticeContainer,
                children: eJ
            })
        ]
    });
}
function $(e) {
    var A;
    return (0, s.jsx)(L.W, {
        guildId: e.guildId,
        editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
        onFileSizeError: () => (0, q.Z)(K.ve),
        children: (0, s.jsx)(J, { ...e })
    });
}
((a = n || (n = {})).DRAFT = 'draft'), (a.PUBLISH = 'publish'), (a.UPDATE_PUBLISH = 'update_publish'), (a.UNPUBLISH = 'unpublish');
