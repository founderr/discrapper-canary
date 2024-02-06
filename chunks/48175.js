"use strict";
t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
    return et
  },
  default: function() {
    return ea
  }
}), t("222007");
var a, n, l = t("37983"),
  r = t("884691"),
  s = t("414456"),
  o = t.n(s),
  i = t("627445"),
  d = t.n(i),
  u = t("171210"),
  c = t("65597"),
  f = t("266491"),
  C = t("77078"),
  g = t("851387"),
  T = t("45299"),
  h = t("206230"),
  m = t("228100"),
  U = t("741515"),
  I = t("435032"),
  p = t("465869"),
  v = t("424960"),
  E = t("845579"),
  q = t("305961"),
  N = t("181114"),
  O = t("965397"),
  x = t("191814"),
  R = t("476765"),
  L = t("578706"),
  D = t("153160"),
  P = t("271560"),
  V = t("866190"),
  j = t("949435"),
  M = t("565559"),
  S = t("757515"),
  b = t("740259"),
  F = t("492724"),
  G = t("155539"),
  _ = t("959875"),
  K = t("669297"),
  B = t("836312"),
  W = t("795785"),
  X = t("850861"),
  z = t("570114"),
  Q = t("307785"),
  y = t("49111"),
  Z = t("988268"),
  H = t("782340"),
  w = t("496848");
let k = (0, R.uid)(),
  Y = (0, R.uid)(),
  J = (0, R.uid)();

function $(e) {
  let {
    text: A,
    onChange: t,
    value: a,
    disabled: n,
    warning: r
  } = e, s = (0, R.useUID)(), i = n ? "text-muted" : "text-normal";
  return (0, l.jsxs)("label", {
    className: o(w.benefitToggleContainer, {
      [w.disabled]: n
    }),
    htmlFor: s,
    children: [(0, l.jsx)(C.Text, {
      variant: "text-sm/medium",
      color: i,
      children: A
    }), null != r && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(x.default, {
        size: 4,
        horizontal: !0
      }), r]
    }), (0, l.jsx)(x.default, {
      size: 16,
      horizontal: !0
    }), (0, l.jsx)(C.Switch, {
      onChange: t,
      checked: a,
      disabled: n,
      id: s
    })]
  })
}

function ee(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: a
    } = e;
    return t.toString().includes(A) || a.includes(A)
  })
}

function eA(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: a
  } = e, {
    priceTiers: n
  } = (0, U.usePriceTiers)(A, y.PriceTierTypes.GUILD_PRODUCTS), s = r.useMemo(() => (null != n ? n : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, D.formatPrice)(e, y.CurrencyCodes.USD)
  })), [n, t]);
  return (0, l.jsx)(C.SearchableSelect, {
    value: t,
    placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: s,
    onChange: a,
    filter: ee,
    "aria-required": !0
  })
}

function et(e) {
  var A, a, n, s, o, i, U, v;
  let {
    guildId: R,
    productId: ee,
    transitionState: et,
    onClose: en
  } = e, [el, er] = r.useState(ee), es = (0, c.default)([M.default], () => null == el ? null : M.default.getGuildProduct(el), [el]), eo = (null == es ? void 0 : es.published) === !0, {
    application: ei
  } = (0, m.default)(R, Z.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), ed = b.PRODUCT_IMAGE_PRESETS[0], eu = (0, c.default)([h.default], () => h.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), ef = (0, V.useIsWindowFocused)(), eC = r.useCallback(() => {
    var e;
    return (null == es ? void 0 : null === (e = es.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ed.data : (0, P.getAssetURL)(es.image_asset.application_id, es.image_asset, 600, ef && ec ? void 0 : "webp")
  }, [ed, es, ef, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eg
  } = (0, p.useShouldRestrictUpdatingCreatorMonetizationSettings)(R);
  r.useEffect(() => {
    eg && (en(), (0, K.openErrorDialog)(H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [eg, en]);
  let [eT, eh] = r.useState(null !== (n = null == es ? void 0 : es.name) && void 0 !== n ? n : ""), [em, eU] = r.useState(null !== (s = null == es ? void 0 : es.description) && void 0 !== s ? s : ""), [eI, ep] = r.useState(null !== (o = null == es ? void 0 : es.price_tier) && void 0 !== o ? o : void 0), [ev, eE] = r.useState(eC), [eq, eN] = r.useState(null !== (i = null == es ? void 0 : null === (A = es.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== i ? i : ed.name), [eO, ex] = r.useState(!1), [eR, eL] = r.useState(), eD = r.useMemo(() => null != eI ? (0, D.formatPrice)(eI, y.CurrencyCodes.USD) : void 0, [eI]), [eP, eV] = r.useState(!0), {
    changesSaving: ej,
    saveError: eM,
    saveProductWithAttachments: eS,
    hasUnsavedAttachmentChanges: eb,
    cancelUnusedUploads: eF
  } = (0, j.useGuildProductAttachmentManagerContext)(), eG = (null == es ? void 0 : es.attachments) != null && (null == es ? void 0 : es.attachments.length) > 0, e_ = null != eM ? eM : eR, eK = null != ej && "published" in ej, eB = null != ej && !eK, eW = null !== (U = null == es ? void 0 : es.role_id) && void 0 !== U ? U : null, [eX, ez] = r.useState(), eQ = null != eX || null != eW, ey = (0, c.default)([q.default], () => {
    if (null != eW && null !== eX) {
      let e = q.default.getGuild(R);
      return null == e ? void 0 : e.roles[eW]
    }
    return null != eX ? eX : void 0
  }, [eX, eW, R]), eZ = "";
  eQ && eP ? eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eQ ? eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (eZ = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eH = () => {
      eV(!1), eF()
    },
    [ew, ek] = r.useState(),
    {
      changes: eY,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = r.useMemo(() => (0, S.computeProductChanges)({
      guildProductListing: es,
      name: eT,
      priceTier: eI,
      description: em,
      image: ev,
      imageName: eq,
      isImageChanged: eO,
      newRoleParams: eX,
      hasSavedAttachments: eG,
      hasUnsavedAttachmentChanges: eb
    }), [es, eT, eI, em, ev, eq, eO, eX, eG, eb]),
    e6 = r.useMemo(() => eJ || null == ew || "publish" === ew || null != e_ ? null : (0, l.jsx)(O.default, {
      className: w.successNotice,
      children: (0, l.jsx)(T.default, {
        message: (0, l.jsxs)("div", {
          className: w.successNoticeMessage,
          children: [(0, l.jsx)(L.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, l.jsx)(C.Text, {
            variant: "text-md/medium",
            children: "draft" === ew ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ew ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => ek(void 0),
        onResetText: H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [e_, eJ, ew]),
    e9 = r.useCallback(() => {
      eJ ? (0, _.default)({
        title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          en()
        }
      }) : en()
    }, [en, eJ]);
  r.useEffect(() => {
    (0, C.updateModal)(Q.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, l.jsx)(ea, {
      guildId: R,
      productId: el,
      ...e
    }), e9)
  }, [R, e9, el]);
  let e3 = async e => {
    let A = (0, S.describeProductChangeValidation)({
      newRoleParams: eX
    });
    if (eL(A), null != A) return;
    let t = await eS(e);
    if (ex(!1), null != t) {
      if (null != e.name && eh(t.name), null != e.description && eU(t.description), null != eX) {
        let e = t.role_id;
        d(null != e, "Cannot update role without role ID"), await g.default.updateRole(R, e, eX)
      }
      ez(void 0), er(t.id), "published" in e && !0 === e.published && en()
    }
  };
  r.useEffect(() => {
    if (null != e_) {
      var e;
      (0, B.showPublishErrorDialog)(e_, R, null == ei ? void 0 : null === (e = ei.team) || void 0 === e ? void 0 : e.id)
    }
  }, [e_, R, ei]), r.useEffect(() => {
    eJ && ek(void 0)
  }, [eJ]);
  let e2 = r.useRef(null);
  return (0, l.jsxs)(C.ModalRoot, {
    transitionState: et,
    size: C.ModalSize.DYNAMIC,
    className: w.modalRoot,
    "aria-labelledby": k,
    children: [(0, l.jsxs)(C.ModalHeader, {
      className: w.modalHeader,
      separator: !1,
      children: [(0, l.jsxs)("div", {
        className: w.headerText,
        children: [(0, l.jsx)(C.Heading, {
          id: k,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, l.jsx)(C.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, l.jsx)(C.ModalCloseButton, {
        onClick: e9,
        className: w.modalCloseButton
      })]
    }), (0, l.jsxs)(C.ModalContent, {
      className: w.modalContent,
      scrollbarType: "none",
      children: [(0, l.jsx)(C.ScrollerThin, {
        children: (0, l.jsxs)("div", {
          className: w.productFieldsSection,
          ref: e2,
          children: [(0, l.jsx)(C.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: Y,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("name"),
            children: (0, l.jsx)(C.TextArea, {
              value: eT,
              onChange: eh,
              id: Y,
              maxLength: 100,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eT.length > 0,
              showRemainingCharacterCount: eT.length > 0,
              required: !0,
              className: eT.length > 0 ? w.nameArea : void 0
            })
          }), (0, l.jsx)(C.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("description"),
            htmlFor: J,
            children: (0, l.jsx)(I.default, {
              id: J,
              className: w.descriptionArea,
              value: em,
              onChange: eU,
              maxLength: 1500,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: em.length > 0,
              parentModalKey: Q.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, l.jsx)(C.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("price_tier"),
            children: (0, l.jsx)(eA, {
              guildId: R,
              selectedPriceTier: eI,
              setPriceTier: ep
            })
          }), (0, l.jsxs)(C.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("image"),
            titleClassName: w.thumbnailLabel,
            children: [(0, l.jsx)(C.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, l.jsx)(x.default, {
              size: 10
            }), (0, l.jsx)(W.default, {
              presetImages: b.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: ev,
              imageName: eq,
              savedImageName: null == es ? void 0 : null === (a = es.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eE(e), eN(A), ex(e.startsWith("data:") || A !== (null == es ? void 0 : null === (t = es.image_asset) || void 0 === t ? void 0 : t.filename))
                }
              }
            })]
          }), eP ? (0, l.jsx)(C.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("attachments"),
            children: (0, l.jsx)(G.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eQ ? (0, l.jsx)(z.default, {
            error: null !== (v = null == e_ ? void 0 : e_.getFirstFieldErrorMessage(S.ROLE_FIELD_NAME)) && void 0 !== v ? v : void 0,
            newRoleParams: eX,
            setNewRoleParams: ez,
            guildId: R,
            listingRoleId: eW,
            productId: el
          }) : null]
        })
      }), (0, l.jsx)("div", {
        className: w.horizontalSeparator
      }), (0, l.jsx)(C.ScrollerThin, {
        children: (0, l.jsxs)("div", {
          className: w.productPreview,
          children: [(0, l.jsx)(X.default, {
            disabled: !e1,
            disabledTooltip: eo ? H.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : H.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: eo,
            onClick: () => {
              d(e1, "Attempting to publish/unpublish when not allowed"), ek(eo ? "unpublish" : "publish"), e3({
                ...eY,
                published: !eo
              })
            },
            submitting: eK
          }), (0, l.jsx)("div", {
            className: w.verticalSeparator
          }), (0, l.jsx)(C.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: w.previewHeading,
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, l.jsx)(x.default, {
            size: 4
          }), (0, l.jsx)(C.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, l.jsx)(x.default, {
            size: 16
          }), (0, l.jsx)(F.default, {
            imageUrl: ev,
            name: "" === eT ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eT,
            description: "" === em ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : em,
            formattedPrice: eD,
            role: ey,
            productType: eZ,
            ctaComponent: (0, l.jsx)(N.default, {
              shineSize: N.default.ShineSizes.SMALL,
              pauseAnimation: eu || !ef,
              className: w.productPreviewCtaButton,
              children: H.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, l.jsx)(C.ModalFooter, {
      children: (0, l.jsxs)("div", {
        className: w.footerActionButtons,
        children: [(0, l.jsxs)("div", {
          className: w.footerActionLeftButtons,
          children: [(0, l.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eQ,
            onChange: e => {
              e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
            },
            warning: null === eX ? (0, l.jsx)(z.WarningIcon, {}) : void 0,
            disabled: null != eW
          }), (0, l.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eP,
            onChange: e => {
              e ? eV(!0) : eb ? (0, C.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await t.el("77078").then(t.bind(t, "77078"));
                return A => (0, l.jsx)(e, {
                  ...A,
                  header: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: H.default.Messages.REMOVE,
                  cancelText: H.default.Messages.CANCEL,
                  onConfirm: eH,
                  children: (0, l.jsx)(C.Text, {
                    variant: "text-md/normal",
                    children: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : eH()
            },
            disabled: eG
          })]
        }), (0, l.jsx)("div", {
          className: w.footerActionRightButtons,
          children: eo ? (0, l.jsx)(C.Button, {
            color: C.Button.Colors.PRIMARY,
            disabled: !e0,
            submitting: eB,
            onClick: () => {
              d(e0, "cannot save changes for published product without adding all fields"), ek("update_publish"), e3(eY)
            },
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)(C.Button, {
              color: C.Button.Colors.PRIMARY,
              disabled: !e$,
              submitting: eB,
              onClick: () => {
                d(e$, "cannot save changes without name or price tier"), ek("draft"), e3(eY)
              },
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, l.jsx)(f.default, {
      component: "div",
      className: w.successNoticeContainer,
      children: e6
    })]
  })
}

function ea(e) {
  var A;
  return (0, l.jsx)(j.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
    onFileSizeError: () => (0, v.default)(Q.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, l.jsx)(et, {
      ...e
    })
  })
}(n = a || (a = {})).DRAFT = "draft", n.PUBLISH = "publish", n.UPDATE_PUBLISH = "update_publish", n.UNPUBLISH = "unpublish"