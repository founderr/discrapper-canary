"use strict";
t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
    return $
  },
  default: function() {
    return ee
  }
}), t("47120");
var a, l, s = t("735250"),
  r = t("470079"),
  n = t("120356"),
  i = t.n(n),
  o = t("512722"),
  d = t.n(o),
  u = t("831209"),
  c = t("399606"),
  g = t("215569"),
  f = t("481060"),
  C = t("749210"),
  h = t("852860"),
  T = t("607070"),
  U = t("725803"),
  p = t("76535"),
  m = t("215388"),
  I = t("674180"),
  v = t("884858"),
  E = t("695346"),
  q = t("430824"),
  D = t("153124"),
  N = t("441674"),
  O = t("937615"),
  L = t("73346"),
  R = t("506071"),
  x = t("587123"),
  P = t("240864"),
  V = t("863663"),
  S = t("923400"),
  j = t("623488"),
  M = t("152980"),
  b = t("120651"),
  F = t("871388"),
  _ = t("412110"),
  G = t("513669"),
  K = t("972797"),
  B = t("943516"),
  W = t("302463"),
  X = t("981631"),
  z = t("674563"),
  Z = t("689938"),
  Q = t("588023");
let H = (0, D.uid)(),
  y = (0, D.uid)(),
  w = (0, D.uid)();

function k(e) {
  let {
    text: A,
    onChange: t,
    value: a,
    disabled: l,
    warning: r
  } = e, n = (0, D.useUID)(), o = l ? "text-muted" : "text-normal";
  return (0, s.jsxs)("label", {
    className: i()(Q.benefitToggleContainer, {
      [Q.disabled]: l
    }),
    htmlFor: n,
    children: [(0, s.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: o,
      children: A
    }), null != r && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(f.Spacer, {
        size: 4,
        horizontal: !0
      }), r]
    }), (0, s.jsx)(f.Spacer, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(f.Switch, {
      onChange: t,
      checked: a,
      disabled: l,
      id: n
    })]
  })
}

function Y(e, A) {
  return e.filter(e => {
    let {
      value: t,
      label: a
    } = e;
    return t.toString().includes(A) || a.includes(A)
  })
}

function J(e) {
  let {
    guildId: A,
    selectedPriceTier: t,
    setPriceTier: a
  } = e, {
    priceTiers: l
  } = (0, p.usePriceTiers)(A, X.PriceTierTypes.GUILD_PRODUCTS), n = r.useMemo(() => (null != l ? l : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, O.formatPrice)(e, X.CurrencyCodes.USD)
  })), [l, t]);
  return (0, s.jsx)(f.SearchableSelect, {
    value: t,
    placeholder: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: n,
    onChange: a,
    filter: Y,
    "aria-required": !0
  })
}

function $(e) {
  var A, a, l, n, i, o, p, v;
  let {
    guildId: D,
    productId: Y,
    transitionState: $,
    onClose: eA
  } = e, [et, ea] = r.useState(Y), el = (0, c.useStateFromStores)([P.default], () => null == et ? null : P.default.getGuildProduct(et), [et]), es = (null == el ? void 0 : el.published) === !0, {
    application: er
  } = (0, U.default)(D, z.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), en = S.PRODUCT_IMAGE_PRESETS["0"], ei = (0, c.useStateFromStores)([T.default], () => T.default.useReducedMotion), eo = E.GifAutoPlay.useSetting(), ed = (0, R.useIsWindowFocused)(), eu = r.useCallback(() => {
    var e;
    return (null == el ? void 0 : null === (e = el.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? en.data : (0, L.getAssetURL)(el.image_asset.application_id, el.image_asset, 600, ed && eo ? void 0 : "webp")
  }, [en, el, ed, eo]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: ec
  } = (0, I.useShouldRestrictUpdatingCreatorMonetizationSettings)(D);
  r.useEffect(() => {
    ec && (eA(), (0, F.openErrorDialog)(Z.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, Z.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [ec, eA]);
  let [eg, ef] = r.useState(null !== (l = null == el ? void 0 : el.name) && void 0 !== l ? l : ""), [eC, eh] = r.useState(null !== (n = null == el ? void 0 : el.description) && void 0 !== n ? n : ""), [eT, eU] = r.useState(null !== (i = null == el ? void 0 : el.price_tier) && void 0 !== i ? i : void 0), [ep, em] = r.useState(eu), [eI, ev] = r.useState(null !== (o = null == el ? void 0 : null === (A = el.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== o ? o : en.name), [eE, eq] = r.useState(!1), [eD, eN] = r.useState(), eO = r.useMemo(() => null != eT ? (0, O.formatPrice)(eT, X.CurrencyCodes.USD) : void 0, [eT]), [eL, eR] = r.useState(!0), {
    changesSaving: ex,
    saveError: eP,
    saveProductWithAttachments: eV,
    hasUnsavedAttachmentChanges: eS,
    cancelUnusedUploads: ej
  } = (0, x.useGuildProductAttachmentManagerContext)(), eM = (null == el ? void 0 : el.attachments) != null && (null == el ? void 0 : el.attachments.length) > 0, eb = null != eP ? eP : eD, eF = null != ex && "published" in ex, e_ = null != ex && !eF, eG = null !== (p = null == el ? void 0 : el.role_id) && void 0 !== p ? p : null, [eK, eB] = r.useState(), eW = null != eK || null != eG, eX = (0, c.useStateFromStores)([q.default], () => null != eG && null !== eK ? q.default.getRole(D, eG) : null != eK ? eK : void 0, [eK, eG, D]), ez = "";
  eW && eL ? ez = Z.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eW ? ez = Z.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eL && (ez = Z.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let eZ = () => {
      eR(!1), ej()
    },
    [eQ, eH] = r.useState(),
    {
      changes: ey,
      hasUnsavedChanges: ew,
      canSaveForDraft: ek,
      canSaveForPublished: eY,
      canPublishOrUnpublish: eJ
    } = r.useMemo(() => (0, V.computeProductChanges)({
      guildProductListing: el,
      name: eg,
      priceTier: eT,
      description: eC,
      image: ep,
      imageName: eI,
      isImageChanged: eE,
      newRoleParams: eK,
      hasSavedAttachments: eM,
      hasUnsavedAttachmentChanges: eS
    }), [el, eg, eT, eC, ep, eI, eE, eK, eM, eS]),
    e$ = r.useMemo(() => ew || null == eQ || "publish" === eQ || null != eb ? null : (0, s.jsx)(f.SlideIn, {
      className: Q.successNotice,
      children: (0, s.jsx)(h.default, {
        message: (0, s.jsxs)("div", {
          className: Q.successNoticeMessage,
          children: [(0, s.jsx)(N.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, s.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === eQ ? Z.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === eQ ? Z.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : Z.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => eH(void 0),
        onResetText: Z.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [eb, ew, eQ]),
    e0 = r.useCallback(() => {
      ew ? (0, b.default)({
        title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          eA()
        }
      }) : eA()
    }, [eA, ew]);
  r.useEffect(() => {
    (0, f.updateModal)(W.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, s.jsx)(ee, {
      guildId: D,
      productId: et,
      ...e
    }), e0)
  }, [D, e0, et]);
  let e1 = async e => {
    let A = (0, V.describeProductChangeValidation)({
      newRoleParams: eK
    });
    if (eN(A), null != A) return;
    let t = await eV(e);
    if (eq(!1), null != t) {
      if (null != e.name && ef(t.name), null != e.description && eh(t.description), null != eK) {
        let e = t.role_id;
        d()(null != e, "Cannot update role without role ID"), await C.default.updateRole(D, e, eK)
      }
      eB(void 0), ea(t.id), "published" in e && !0 === e.published && eA()
    }
  };
  r.useEffect(() => {
    if (null != eb) {
      var e;
      (0, _.showPublishErrorDialog)(eb, D, null == er ? void 0 : null === (e = er.team) || void 0 === e ? void 0 : e.id)
    }
  }, [eb, D, er]), r.useEffect(() => {
    ew && eH(void 0)
  }, [ew]);
  let e3 = r.useRef(null);
  return (0, s.jsxs)(f.ModalRoot, {
    transitionState: $,
    size: f.ModalSize.DYNAMIC,
    className: Q.modalRoot,
    "aria-labelledby": H,
    children: [(0, s.jsxs)(f.ModalHeader, {
      className: Q.modalHeader,
      separator: !1,
      children: [(0, s.jsxs)("div", {
        className: Q.headerText,
        children: [(0, s.jsx)(f.Heading, {
          id: H,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, s.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, s.jsx)(f.ModalCloseButton, {
        onClick: e0,
        className: Q.__invalid_modalCloseButton
      })]
    }), (0, s.jsxs)(f.ModalContent, {
      className: Q.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(f.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: Q.productFieldsSection,
          ref: e3,
          children: [(0, s.jsx)(f.FormItem, {
            title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: y,
            error: null == eb ? void 0 : eb.getFirstFieldErrorMessage("name"),
            children: (0, s.jsx)(f.TextArea, {
              value: eg,
              onChange: ef,
              id: y,
              maxLength: 100,
              placeholder: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eg.length > 0,
              showRemainingCharacterCount: eg.length > 0,
              required: !0,
              className: eg.length > 0 ? Q.nameArea : void 0
            })
          }), (0, s.jsx)(f.FormItem, {
            title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == eb ? void 0 : eb.getFirstFieldErrorMessage("description"),
            htmlFor: w,
            children: (0, s.jsx)(m.default, {
              id: w,
              className: Q.descriptionArea,
              value: eC,
              onChange: eh,
              maxLength: 1500,
              placeholder: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: eC.length > 0,
              parentModalKey: W.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, s.jsx)(f.FormItem, {
            title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == eb ? void 0 : eb.getFirstFieldErrorMessage("price_tier"),
            children: (0, s.jsx)(J, {
              guildId: D,
              selectedPriceTier: eT,
              setPriceTier: eU
            })
          }), (0, s.jsxs)(f.FormItem, {
            title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == eb ? void 0 : eb.getFirstFieldErrorMessage("image"),
            titleClassName: Q.thumbnailLabel,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, s.jsx)(f.Spacer, {
              size: 10
            }), (0, s.jsx)(G.default, {
              presetImages: S.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: ep,
              imageName: eI,
              savedImageName: null == el ? void 0 : null === (a = el.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  em(e), ev(A), eq(e.startsWith("data:") || A !== (null == el ? void 0 : null === (t = el.image_asset) || void 0 === t ? void 0 : t.filename))
                }
              }
            })]
          }), eL ? (0, s.jsx)(f.FormItem, {
            title: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == eb ? void 0 : eb.getFirstFieldErrorMessage("attachments"),
            children: (0, s.jsx)(M.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e3.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eW ? (0, s.jsx)(B.default, {
            error: null !== (v = null == eb ? void 0 : eb.getFirstFieldErrorMessage(V.ROLE_FIELD_NAME)) && void 0 !== v ? v : void 0,
            newRoleParams: eK,
            setNewRoleParams: eB,
            guildId: D,
            listingRoleId: eG,
            productId: et
          }) : null]
        })
      }), (0, s.jsx)("div", {
        className: Q.horizontalSeparator
      }), (0, s.jsx)(f.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: Q.productPreview,
          children: [(0, s.jsx)(K.default, {
            disabled: !eJ,
            disabledTooltip: es ? Z.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : Z.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: es,
            onClick: () => {
              d()(eJ, "Attempting to publish/unpublish when not allowed"), eH(es ? "unpublish" : "publish"), e1({
                ...ey,
                published: !es
              })
            },
            submitting: eF
          }), (0, s.jsx)("div", {
            className: Q.verticalSeparator
          }), (0, s.jsx)(f.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: Q.previewHeading,
            children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, s.jsx)(f.Spacer, {
            size: 4
          }), (0, s.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, s.jsx)(f.Spacer, {
            size: 16
          }), (0, s.jsx)(j.default, {
            imageUrl: ep,
            name: "" === eg ? Z.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eg,
            description: "" === eC ? Z.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eC,
            formattedPrice: eO,
            role: eX,
            productType: ez,
            ctaComponent: (0, s.jsx)(f.ShinyButton, {
              shineSize: f.ShinyButton.ShineSizes.SMALL,
              pauseAnimation: ei || !ed,
              className: Q.productPreviewCtaButton,
              children: Z.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, s.jsx)(f.ModalFooter, {
      children: (0, s.jsxs)("div", {
        className: Q.footerActionButtons,
        children: [(0, s.jsxs)("div", {
          className: Q.footerActionLeftButtons,
          children: [(0, s.jsx)(k, {
            text: Z.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eW,
            onChange: e => {
              e ? eB((0, B.getInitialNewRoleParams)()) : eB(void 0)
            },
            warning: null === eK ? (0, s.jsx)(B.WarningIcon, {}) : void 0,
            disabled: null != eG
          }), (0, s.jsx)(k, {
            text: Z.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eL,
            onChange: e => {
              e ? eR(!0) : eS ? (0, f.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, "481060"));
                return A => (0, s.jsx)(e, {
                  ...A,
                  header: Z.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: Z.default.Messages.REMOVE,
                  cancelText: Z.default.Messages.CANCEL,
                  onConfirm: eZ,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: Z.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : eZ()
            },
            disabled: eM
          })]
        }), (0, s.jsx)("div", {
          className: Q.footerActionRightButtons,
          children: es ? (0, s.jsx)(f.Button, {
            color: f.Button.Colors.PRIMARY,
            disabled: !eY,
            submitting: e_,
            onClick: () => {
              d()(eY, "cannot save changes for published product without adding all fields"), eH("update_publish"), e1(ey)
            },
            children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(f.Button, {
              color: f.Button.Colors.PRIMARY,
              disabled: !ek,
              submitting: e_,
              onClick: () => {
                d()(ek, "cannot save changes without name or price tier"), eH("draft"), e1(ey)
              },
              children: Z.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, s.jsx)(g.TransitionGroup, {
      component: "div",
      className: Q.successNoticeContainer,
      children: e$
    })]
  })
}

function ee(e) {
  var A;
  return (0, s.jsx)(x.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
    onFileSizeError: () => (0, v.default)(W.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, s.jsx)($, {
      ...e
    })
  })
}(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"