"use strict";
t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
    return et
  },
  default: function() {
    return ea
  }
}), t("222007");
var a, l, n = t("37983"),
  s = t("884691"),
  r = t("414456"),
  i = t.n(r),
  o = t("627445"),
  d = t.n(o),
  u = t("171210"),
  c = t("65597"),
  f = t("266491"),
  g = t("77078"),
  C = t("851387"),
  h = t("45299"),
  T = t("206230"),
  m = t("228100"),
  U = t("741515"),
  p = t("435032"),
  I = t("465869"),
  v = t("424960"),
  E = t("845579"),
  q = t("305961"),
  D = t("181114"),
  N = t("965397"),
  O = t("191814"),
  L = t("476765"),
  R = t("578706"),
  x = t("153160"),
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
  W = t("836312"),
  B = t("795785"),
  X = t("850861"),
  z = t("570114"),
  Q = t("307785"),
  Z = t("49111"),
  y = t("988268"),
  H = t("782340"),
  k = t("496848");
let w = (0, L.uid)(),
  Y = (0, L.uid)(),
  J = (0, L.uid)();

function $(e) {
  let {
    text: A,
    onChange: t,
    value: a,
    disabled: l,
    warning: s
  } = e, r = (0, L.useUID)(), o = l ? "text-muted" : "text-normal";
  return (0, n.jsxs)("label", {
    className: i(k.benefitToggleContainer, {
      [k.disabled]: l
    }),
    htmlFor: r,
    children: [(0, n.jsx)(g.Text, {
      variant: "text-sm/medium",
      color: o,
      children: A
    }), null != s && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(O.default, {
        size: 4,
        horizontal: !0
      }), s]
    }), (0, n.jsx)(O.default, {
      size: 16,
      horizontal: !0
    }), (0, n.jsx)(g.Switch, {
      onChange: t,
      checked: a,
      disabled: l,
      id: r
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
    priceTiers: l
  } = (0, U.usePriceTiers)(A, Z.PriceTierTypes.GUILD_PRODUCTS), r = s.useMemo(() => (null != l ? l : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, x.formatPrice)(e, Z.CurrencyCodes.USD)
  })), [l, t]);
  return (0, n.jsx)(g.SearchableSelect, {
    value: t,
    placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: r,
    onChange: a,
    filter: ee,
    "aria-required": !0
  })
}

function et(e) {
  var A, a, l, r, i, o, U, v;
  let {
    guildId: L,
    productId: ee,
    transitionState: et,
    onClose: el
  } = e, [en, es] = s.useState(ee), er = (0, c.default)([M.default], () => null == en ? null : M.default.getGuildProduct(en), [en]), ei = (null == er ? void 0 : er.published) === !0, {
    application: eo
  } = (0, m.default)(L, y.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), ed = b.PRODUCT_IMAGE_PRESETS[0], eu = (0, c.default)([T.default], () => T.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), ef = (0, V.useIsWindowFocused)(), eg = s.useCallback(() => {
    var e;
    return (null == er ? void 0 : null === (e = er.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ed.data : (0, P.getAssetURL)(er.image_asset.application_id, er.image_asset, 600, ef && ec ? void 0 : "webp")
  }, [ed, er, ef, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eC
  } = (0, I.useShouldRestrictUpdatingCreatorMonetizationSettings)(L);
  s.useEffect(() => {
    eC && (el(), (0, K.openErrorDialog)(H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, H.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [eC, el]);
  let [eh, eT] = s.useState(null !== (l = null == er ? void 0 : er.name) && void 0 !== l ? l : ""), [em, eU] = s.useState(null !== (r = null == er ? void 0 : er.description) && void 0 !== r ? r : ""), [ep, eI] = s.useState(null !== (i = null == er ? void 0 : er.price_tier) && void 0 !== i ? i : void 0), [ev, eE] = s.useState(eg), [eq, eD] = s.useState(null !== (o = null == er ? void 0 : null === (A = er.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== o ? o : ed.name), [eN, eO] = s.useState(!1), [eL, eR] = s.useState(), ex = s.useMemo(() => null != ep ? (0, x.formatPrice)(ep, Z.CurrencyCodes.USD) : void 0, [ep]), [eP, eV] = s.useState(!0), {
    changesSaving: ej,
    saveError: eM,
    saveProductWithAttachments: eS,
    hasUnsavedAttachmentChanges: eb,
    cancelUnusedUploads: eF
  } = (0, j.useGuildProductAttachmentManagerContext)(), eG = (null == er ? void 0 : er.attachments) != null && (null == er ? void 0 : er.attachments.length) > 0, e_ = null != eM ? eM : eL, eK = null != ej && "published" in ej, eW = null != ej && !eK, eB = null !== (U = null == er ? void 0 : er.role_id) && void 0 !== U ? U : null, [eX, ez] = s.useState(), eQ = null != eX || null != eB, eZ = (0, c.default)([q.default], () => {
    if (null != eB && null !== eX) {
      let e = q.default.getGuild(L);
      return null == e ? void 0 : e.roles[eB]
    }
    return null != eX ? eX : void 0
  }, [eX, eB, L]), ey = "";
  eQ && eP ? ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eQ ? ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (ey = H.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eH = () => {
      eV(!1), eF()
    },
    [ek, ew] = s.useState(),
    {
      changes: eY,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = s.useMemo(() => (0, S.computeProductChanges)({
      guildProductListing: er,
      name: eh,
      priceTier: ep,
      description: em,
      image: ev,
      imageName: eq,
      isImageChanged: eN,
      newRoleParams: eX,
      hasSavedAttachments: eG,
      hasUnsavedAttachmentChanges: eb
    }), [er, eh, ep, em, ev, eq, eN, eX, eG, eb]),
    e6 = s.useMemo(() => eJ || null == ek || "publish" === ek || null != e_ ? null : (0, n.jsx)(N.default, {
      className: k.successNotice,
      children: (0, n.jsx)(h.default, {
        message: (0, n.jsxs)("div", {
          className: k.successNoticeMessage,
          children: [(0, n.jsx)(R.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, n.jsx)(g.Text, {
            variant: "text-md/medium",
            children: "draft" === ek ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ek ? H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => ew(void 0),
        onResetText: H.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [e_, eJ, ek]),
    e3 = s.useCallback(() => {
      eJ ? (0, _.default)({
        title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          el()
        }
      }) : el()
    }, [el, eJ]);
  s.useEffect(() => {
    (0, g.updateModal)(Q.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, n.jsx)(ea, {
      guildId: L,
      productId: en,
      ...e
    }), e3)
  }, [L, e3, en]);
  let e9 = async e => {
    let A = (0, S.describeProductChangeValidation)({
      newRoleParams: eX
    });
    if (eR(A), null != A) return;
    let t = await eS(e);
    if (eO(!1), null != t) {
      if (null != e.name && eT(t.name), null != e.description && eU(t.description), null != eX) {
        let e = t.role_id;
        d(null != e, "Cannot update role without role ID"), await C.default.updateRole(L, e, eX)
      }
      ez(void 0), es(t.id), "published" in e && !0 === e.published && el()
    }
  };
  s.useEffect(() => {
    if (null != e_) {
      var e;
      (0, W.showPublishErrorDialog)(e_, L, null == eo ? void 0 : null === (e = eo.team) || void 0 === e ? void 0 : e.id)
    }
  }, [e_, L, eo]), s.useEffect(() => {
    eJ && ew(void 0)
  }, [eJ]);
  let e2 = s.useRef(null);
  return (0, n.jsxs)(g.ModalRoot, {
    transitionState: et,
    size: g.ModalSize.DYNAMIC,
    className: k.modalRoot,
    "aria-labelledby": w,
    children: [(0, n.jsxs)(g.ModalHeader, {
      className: k.modalHeader,
      separator: !1,
      children: [(0, n.jsxs)("div", {
        className: k.headerText,
        children: [(0, n.jsx)(g.Heading, {
          id: w,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, n.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, n.jsx)(g.ModalCloseButton, {
        onClick: e3,
        className: k.modalCloseButton
      })]
    }), (0, n.jsxs)(g.ModalContent, {
      className: k.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.ScrollerThin, {
        children: (0, n.jsxs)("div", {
          className: k.productFieldsSection,
          ref: e2,
          children: [(0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: Y,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("name"),
            children: (0, n.jsx)(g.TextArea, {
              value: eh,
              onChange: eT,
              id: Y,
              maxLength: 100,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eh.length > 0,
              showRemainingCharacterCount: eh.length > 0,
              required: !0,
              className: eh.length > 0 ? k.nameArea : void 0
            })
          }), (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("description"),
            htmlFor: J,
            children: (0, n.jsx)(p.default, {
              id: J,
              className: k.descriptionArea,
              value: em,
              onChange: eU,
              maxLength: 1500,
              placeholder: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: em.length > 0,
              parentModalKey: Q.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("price_tier"),
            children: (0, n.jsx)(eA, {
              guildId: L,
              selectedPriceTier: ep,
              setPriceTier: eI
            })
          }), (0, n.jsxs)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("image"),
            titleClassName: k.thumbnailLabel,
            children: [(0, n.jsx)(g.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, n.jsx)(O.default, {
              size: 10
            }), (0, n.jsx)(B.default, {
              presetImages: b.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: ev,
              imageName: eq,
              savedImageName: null == er ? void 0 : null === (a = er.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eE(e), eD(A), eO(e.startsWith("data:") || A !== (null == er ? void 0 : null === (t = er.image_asset) || void 0 === t ? void 0 : t.filename))
                }
              }
            })]
          }), eP ? (0, n.jsx)(g.FormItem, {
            title: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("attachments"),
            children: (0, n.jsx)(G.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eQ ? (0, n.jsx)(z.default, {
            error: null !== (v = null == e_ ? void 0 : e_.getFirstFieldErrorMessage(S.ROLE_FIELD_NAME)) && void 0 !== v ? v : void 0,
            newRoleParams: eX,
            setNewRoleParams: ez,
            guildId: L,
            listingRoleId: eB,
            productId: en
          }) : null]
        })
      }), (0, n.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, n.jsx)(g.ScrollerThin, {
        children: (0, n.jsxs)("div", {
          className: k.productPreview,
          children: [(0, n.jsx)(X.default, {
            disabled: !e1,
            disabledTooltip: ei ? H.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : H.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: ei,
            onClick: () => {
              d(e1, "Attempting to publish/unpublish when not allowed"), ew(ei ? "unpublish" : "publish"), e9({
                ...eY,
                published: !ei
              })
            },
            submitting: eK
          }), (0, n.jsx)("div", {
            className: k.verticalSeparator
          }), (0, n.jsx)(g.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: k.previewHeading,
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, n.jsx)(O.default, {
            size: 4
          }), (0, n.jsx)(g.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, n.jsx)(O.default, {
            size: 16
          }), (0, n.jsx)(F.default, {
            imageUrl: ev,
            name: "" === eh ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eh,
            description: "" === em ? H.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : em,
            formattedPrice: ex,
            role: eZ,
            productType: ey,
            ctaComponent: (0, n.jsx)(D.default, {
              shineSize: D.default.ShineSizes.SMALL,
              pauseAnimation: eu || !ef,
              className: k.productPreviewCtaButton,
              children: H.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, n.jsx)(g.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: k.footerActionButtons,
        children: [(0, n.jsxs)("div", {
          className: k.footerActionLeftButtons,
          children: [(0, n.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eQ,
            onChange: e => {
              e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
            },
            warning: null === eX ? (0, n.jsx)(z.WarningIcon, {}) : void 0,
            disabled: null != eB
          }), (0, n.jsx)($, {
            text: H.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eP,
            onChange: e => {
              e ? eV(!0) : eb ? (0, g.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await t.el("77078").then(t.bind(t, "77078"));
                return A => (0, n.jsx)(e, {
                  ...A,
                  header: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: H.default.Messages.REMOVE,
                  cancelText: H.default.Messages.CANCEL,
                  onConfirm: eH,
                  children: (0, n.jsx)(g.Text, {
                    variant: "text-md/normal",
                    children: H.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : eH()
            },
            disabled: eG
          })]
        }), (0, n.jsx)("div", {
          className: k.footerActionRightButtons,
          children: ei ? (0, n.jsx)(g.Button, {
            color: g.Button.Colors.PRIMARY,
            disabled: !e0,
            submitting: eW,
            onClick: () => {
              d(e0, "cannot save changes for published product without adding all fields"), ew("update_publish"), e9(eY)
            },
            children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(g.Button, {
              color: g.Button.Colors.PRIMARY,
              disabled: !e$,
              submitting: eW,
              onClick: () => {
                d(e$, "cannot save changes without name or price tier"), ew("draft"), e9(eY)
              },
              children: H.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, n.jsx)(f.default, {
      component: "div",
      className: k.successNoticeContainer,
      children: e6
    })]
  })
}

function ea(e) {
  var A;
  return (0, n.jsx)(j.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
    onFileSizeError: () => (0, v.default)(Q.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, n.jsx)(et, {
      ...e
    })
  })
}(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"