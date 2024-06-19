t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
    return J
  },
  default: function() {
    return $
  }
}), t(47120);
var n, a, s = t(735250),
  r = t(470079),
  l = t(120356),
  o = t.n(l),
  i = t(512722),
  d = t.n(i),
  c = t(831209),
  u = t(399606),
  C = t(215569),
  g = t(481060),
  T = t(749210),
  U = t(852860),
  m = t(607070),
  I = t(725803),
  h = t(76535),
  p = t(215388),
  v = t(674180),
  q = t(884858),
  f = t(695346),
  E = t(430824),
  N = t(153124),
  O = t(937615),
  D = t(73346),
  R = t(506071),
  x = t(587123),
  L = t(240864),
  P = t(863663),
  V = t(923400),
  Z = t(623488),
  S = t(152980),
  j = t(120651),
  b = t(871388),
  F = t(412110),
  M = t(513669),
  G = t(972797),
  _ = t(943516),
  K = t(302463),
  W = t(981631),
  B = t(674563),
  X = t(689938),
  z = t(791627);
let Q = (0, N.hQ)(),
  k = (0, N.hQ)(),
  H = (0, N.hQ)();

function y(e) {
  let {
    text: A,
    onChange: t,
    value: n,
    disabled: a,
    warning: r
  } = e, l = (0, N.Dt)(), i = a ? "text-muted" : "text-normal";
  return (0, s.jsxs)("label", {
    className: o()(z.benefitToggleContainer, {
      [z.disabled]: a
    }),
    htmlFor: l,
    children: [(0, s.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: i,
      children: A
    }), null != r && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(g.Spacer, {
        size: 4,
        horizontal: !0
      }), r]
    }), (0, s.jsx)(g.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(g.Switch, {
      onChange: t,
      checked: n,
      disabled: a,
      id: l
    })]
  })
}

function Y(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: n
    } = e;
    return t.toString().includes(A) || n.includes(A)
  })
}

function w(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: n
  } = e, {
    priceTiers: a
  } = (0, h.R)(A, W.RG5.GUILD_PRODUCTS), l = r.useMemo(() => (null != a ? a : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, O.T4)(e, W.pKx.USD)
  })), [a, t]);
  return (0, s.jsx)(g.SearchableSelect, {
    value: t,
    placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: l,
    onChange: n,
    filter: Y,
    "aria-required": !0
  })
}

function J(e) {
  var A, n, a, l, o, i, h, q;
  let {
    guildId: N,
    productId: Y,
    transitionState: J,
    onClose: ee
  } = e, [eA, et] = r.useState(Y), en = (0, u.e7)([L.Z], () => null == eA ? null : L.Z.getGuildProduct(eA), [eA]), ea = (null == en ? void 0 : en.published) === !0, {
    application: es
  } = (0, I.Z)(N, B.wW.GUILD_ROLE_SUBSCRIPTIONS), er = V.M["0"], el = (0, u.e7)([m.Z], () => m.Z.useReducedMotion), eo = f.QK.useSetting(), ei = (0, R.n)(), ed = r.useCallback(() => {
    var e;
    return (null == en ? void 0 : null === (e = en.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? er.data : (0, D._W)(en.image_asset.application_id, en.image_asset, 600, ei && eo ? void 0 : "webp")
  }, [er, en, ei, eo]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ec
  } = (0, v.gX)(N);
  r.useEffect(() => {
    ec && (ee(), (0, b.B)(X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, X.Z.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [ec, ee]);
  let [eu, eC] = r.useState(null !== (a = null == en ? void 0 : en.name) && void 0 !== a ? a : ""), [eg, eT] = r.useState(null !== (l = null == en ? void 0 : en.description) && void 0 !== l ? l : ""), [eU, em] = r.useState(null !== (o = null == en ? void 0 : en.price_tier) && void 0 !== o ? o : void 0), [eI, eh] = r.useState(ed), [ep, ev] = r.useState(null !== (i = null == en ? void 0 : null === (A = en.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== i ? i : er.name), [eq, ef] = r.useState(!1), [eE, eN] = r.useState(), eO = r.useMemo(() => null != eU ? (0, O.T4)(eU, W.pKx.USD) : void 0, [eU]), [eD, eR] = r.useState(!0), {
    changesSaving: ex,
    saveError: eL,
    saveProductWithAttachments: eP,
    hasUnsavedAttachmentChanges: eV,
    cancelUnusedUploads: eZ
  } = (0, x.P)(), eS = (null == en ? void 0 : en.attachments) != null && (null == en ? void 0 : en.attachments.length) > 0, ej = null != eL ? eL : eE, eb = null != ex && "published" in ex, eF = null != ex && !eb, eM = null !== (h = null == en ? void 0 : en.role_id) && void 0 !== h ? h : null, [eG, e_] = r.useState(), eK = null != eG || null != eM, eW = (0, u.e7)([E.Z], () => null != eM && null !== eG ? E.Z.getRole(N, eM) : null != eG ? eG : void 0, [eG, eM, N]), eB = "";
  eK && eD ? eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eK ? eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eD && (eB = X.Z.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eX = () => {
      eR(!1), eZ()
    },
    [ez, eQ] = r.useState(),
    {
      changes: ek,
      hasUnsavedChanges: eH,
      canSaveForDraft: ey,
      canSaveForPublished: eY,
      canPublishOrUnpublish: ew
    } = r.useMemo(() => (0, P.fG)({
      guildProductListing: en,
      name: eu,
      priceTier: eU,
      description: eg,
      image: eI,
      imageName: ep,
      isImageChanged: eq,
      newRoleParams: eG,
      hasSavedAttachments: eS,
      hasUnsavedAttachmentChanges: eV
    }), [en, eu, eU, eg, eI, ep, eq, eG, eS, eV]),
    eJ = r.useMemo(() => eH || null == ez || "publish" === ez || null != ej ? null : (0, s.jsx)(g.SlideIn, {
      className: z.successNotice,
      children: (0, s.jsx)(U.Z, {
        message: (0, s.jsxs)("div", {
          className: z.successNoticeMessage,
          children: [(0, s.jsx)(g.CircleCheckIcon, {
            size: "md",
            color: c.Z.BUTTON_POSITIVE_BACKGROUND,
            secondaryColor: c.Z.WHITE
          }), (0, s.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ez ? X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => eQ(void 0),
        onResetText: X.Z.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [ej, eH, ez]),
    e$ = r.useCallback(() => {
      eH ? (0, j.Z)({
        title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          ee()
        }
      }) : ee()
    }, [ee, eH]);
  r.useEffect(() => {
    (0, g.updateModal)(K.Yz, e => (0, s.jsx)($, {
      guildId: N,
      productId: eA,
      ...e
    }), e$)
  }, [N, e$, eA]);
  let e0 = async e => {
    let A = (0, P.pM)({
      newRoleParams: eG
    });
    if (eN(A), null != A) return;
    let t = await eP(e);
    if (ef(!1), null != t) {
      if (null != e.name && eC(t.name), null != e.description && eT(t.description), null != eG) {
        let e = t.role_id;
        d()(null != e, "Cannot update role without role ID"), await T.Z.updateRole(N, e, eG)
      }
      e_(void 0), et(t.id), "published" in e && !0 === e.published && ee()
    }
  };
  r.useEffect(() => {
    if (null != ej) {
      var e;
      (0, F.V)(ej, N, null == es ? void 0 : null === (e = es.team) || void 0 === e ? void 0 : e.id)
    }
  }, [ej, N, es]), r.useEffect(() => {
    eH && eQ(void 0)
  }, [eH]);
  let e1 = r.useRef(null);
  return (0, s.jsxs)(g.ModalRoot, {
    transitionState: J,
    size: g.ModalSize.DYNAMIC,
    className: z.modalRoot,
    "aria-labelledby": Q,
    children: [(0, s.jsxs)(g.ModalHeader, {
      className: z.modalHeader,
      separator: !1,
      children: [(0, s.jsxs)("div", {
        className: z.headerText,
        children: [(0, s.jsx)(g.Heading, {
          id: Q,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, s.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, s.jsx)(g.ModalCloseButton, {
        onClick: e$,
        className: z.__invalid_modalCloseButton
      })]
    }), (0, s.jsxs)(g.ModalContent, {
      className: z.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(g.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: z.productFieldsSection,
          ref: e1,
          children: [(0, s.jsx)(g.FormItem, {
            title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: k,
            error: null == ej ? void 0 : ej.getFirstFieldErrorMessage("name"),
            children: (0, s.jsx)(g.TextArea, {
              value: eu,
              onChange: eC,
              id: k,
              maxLength: 100,
              placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eu.length > 0,
              showRemainingCharacterCount: eu.length > 0,
              required: !0,
              className: eu.length > 0 ? z.nameArea : void 0
            })
          }), (0, s.jsx)(g.FormItem, {
            title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == ej ? void 0 : ej.getFirstFieldErrorMessage("description"),
            htmlFor: H,
            children: (0, s.jsx)(p.Z, {
              id: H,
              className: z.descriptionArea,
              value: eg,
              onChange: eT,
              maxLength: 1500,
              placeholder: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: eg.length > 0,
              parentModalKey: K.Yz,
              required: !0
            })
          }), (0, s.jsx)(g.FormItem, {
            title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == ej ? void 0 : ej.getFirstFieldErrorMessage("price_tier"),
            children: (0, s.jsx)(w, {
              guildId: N,
              selectedPriceTier: eU,
              setPriceTier: em
            })
          }), (0, s.jsxs)(g.FormItem, {
            title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == ej ? void 0 : ej.getFirstFieldErrorMessage("image"),
            titleClassName: z.thumbnailLabel,
            children: [(0, s.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, s.jsx)(g.Spacer, {
              size: 10
            }), (0, s.jsx)(M.Z, {
              presetImages: V.M,
              radioGroupAriaLabel: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: eI,
              imageName: ep,
              savedImageName: null == en ? void 0 : null === (n = en.image_asset) || void 0 === n ? void 0 : n.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eh(e), ev(A), ef(e.startsWith("data:") || A !== (null == en ? void 0 : null === (t = en.image_asset) || void 0 === t ? void 0 : t.filename))
                }
              }
            })]
          }), eD ? (0, s.jsx)(g.FormItem, {
            title: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == ej ? void 0 : ej.getFirstFieldErrorMessage("attachments"),
            children: (0, s.jsx)(S.s, {
              onFileAdded: () => {
                var e;
                null === (e = e1.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eK ? (0, s.jsx)(_.ZP, {
            error: null !== (q = null == ej ? void 0 : ej.getFirstFieldErrorMessage(P.NB)) && void 0 !== q ? q : void 0,
            newRoleParams: eG,
            setNewRoleParams: e_,
            guildId: N,
            listingRoleId: eM,
            productId: eA
          }) : null]
        })
      }), (0, s.jsx)("div", {
        className: z.horizontalSeparator
      }), (0, s.jsx)(g.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: z.productPreview,
          children: [(0, s.jsx)(G.Z, {
            disabled: !ew,
            disabledTooltip: ea ? X.Z.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : X.Z.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: ea,
            onClick: () => {
              d()(ew, "Attempting to publish/unpublish when not allowed"), eQ(ea ? "unpublish" : "publish"), e0({
                ...ek,
                published: !ea
              })
            },
            submitting: eb
          }), (0, s.jsx)("div", {
            className: z.verticalSeparator
          }), (0, s.jsx)(g.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: z.previewHeading,
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, s.jsx)(g.Spacer, {
            size: 4
          }), (0, s.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, s.jsx)(g.Spacer, {
            size: 16
          }), (0, s.jsx)(Z.Z, {
            imageUrl: eI,
            name: "" === eu ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eu,
            description: "" === eg ? X.Z.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eg,
            formattedPrice: eO,
            role: eW,
            productType: eB,
            ctaComponent: (0, s.jsx)(g.ShinyButton, {
              shineSize: g.ShinyButton.ShineSizes.SMALL,
              pauseAnimation: el || !ei,
              className: z.productPreviewCtaButton,
              children: X.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, s.jsx)(g.ModalFooter, {
      children: (0, s.jsxs)("div", {
        className: z.footerActionButtons,
        children: [(0, s.jsxs)("div", {
          className: z.footerActionLeftButtons,
          children: [(0, s.jsx)(y, {
            text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eK,
            onChange: e => {
              e ? e_((0, _.YP)()) : e_(void 0)
            },
            warning: null === eG ? (0, s.jsx)(_.aN, {}) : void 0,
            disabled: null != eM
          }), (0, s.jsx)(y, {
            text: X.Z.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eD,
            onChange: e => {
              e ? eR(!0) : eV ? (0, g.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, 481060));
                return A => (0, s.jsx)(e, {
                  ...A,
                  header: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: X.Z.Messages.REMOVE,
                  cancelText: X.Z.Messages.CANCEL,
                  onConfirm: eX,
                  children: (0, s.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: X.Z.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : eX()
            },
            disabled: eS
          })]
        }), (0, s.jsx)("div", {
          className: z.footerActionRightButtons,
          children: ea ? (0, s.jsx)(g.Button, {
            color: g.Button.Colors.PRIMARY,
            disabled: !eY,
            submitting: eF,
            onClick: () => {
              d()(eY, "cannot save changes for published product without adding all fields"), eQ("update_publish"), e0(ek)
            },
            children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(g.Button, {
              color: g.Button.Colors.PRIMARY,
              disabled: !ey,
              submitting: eF,
              onClick: () => {
                d()(ey, "cannot save changes without name or price tier"), eQ("draft"), e0(ek)
              },
              children: X.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, s.jsx)(C.W, {
      component: "div",
      className: z.successNoticeContainer,
      children: eJ
    })]
  })
}

function $(e) {
  var A;
  return (0, s.jsx)(x.W, {
    guildId: e.guildId,
    editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
    onFileSizeError: () => (0, q.Z)(K.ve),
    children: (0, s.jsx)(J, {
      ...e
    })
  })
}(a = n || (n = {})).DRAFT = "draft", a.PUBLISH = "publish", a.UPDATE_PUBLISH = "update_publish", a.UNPUBLISH = "unpublish"