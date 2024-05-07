"use strict";
t.r(A), t.d(A, {
  GuildProductEditModalContent: function() {
    return et
  },
  default: function() {
    return ea
  }
}), t("47120");
var a, l, s = t("735250"),
  n = t("470079"),
  r = t("120356"),
  o = t.n(r),
  i = t("512722"),
  d = t.n(i),
  u = t("831209"),
  c = t("399606"),
  C = t("215569"),
  f = t("481060"),
  g = t("749210"),
  T = t("852860"),
  U = t("607070"),
  h = t("725803"),
  m = t("76535"),
  I = t("215388"),
  v = t("674180"),
  p = t("884858"),
  E = t("695346"),
  q = t("430824"),
  N = t("976644"),
  R = t("864293"),
  L = t("682864"),
  O = t("153124"),
  x = t("441674"),
  D = t("937615"),
  P = t("73346"),
  V = t("506071"),
  j = t("587123"),
  S = t("240864"),
  M = t("863663"),
  b = t("923400"),
  F = t("623488"),
  G = t("152980"),
  _ = t("120651"),
  K = t("871388"),
  B = t("412110"),
  W = t("513669"),
  X = t("972797"),
  z = t("943516"),
  Q = t("302463"),
  Z = t("981631"),
  H = t("674563"),
  y = t("689938"),
  k = t("921836");
let w = (0, O.uid)(),
  Y = (0, O.uid)(),
  J = (0, O.uid)();

function $(e) {
  let {
    text: A,
    onChange: t,
    value: a,
    disabled: l,
    warning: n
  } = e, r = (0, O.useUID)(), i = l ? "text-muted" : "text-normal";
  return (0, s.jsxs)("label", {
    className: o()(k.benefitToggleContainer, {
      [k.disabled]: l
    }),
    htmlFor: r,
    children: [(0, s.jsx)(f.Text, {
      variant: "text-sm/medium",
      color: i,
      children: A
    }), null != n && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(L.default, {
        size: 4,
        horizontal: !0
      }), n]
    }), (0, s.jsx)(L.default, {
      size: 16,
      horizontal: !0
    }), (0, s.jsx)(f.Switch, {
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
  } = (0, m.usePriceTiers)(A, Z.PriceTierTypes.GUILD_PRODUCTS), r = n.useMemo(() => (null != l ? l : null != t ? [t] : []).map(e => ({
    value: e,
    label: (0, D.formatPrice)(e, Z.CurrencyCodes.USD)
  })), [l, t]);
  return (0, s.jsx)(f.SearchableSelect, {
    value: t,
    placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_PLACEHOLDER,
    maxVisibleItems: 5,
    options: r,
    onChange: a,
    filter: ee,
    "aria-required": !0
  })
}

function et(e) {
  var A, a, l, r, o, i, m, p;
  let {
    guildId: O,
    productId: ee,
    transitionState: et,
    onClose: el
  } = e, [es, en] = n.useState(ee), er = (0, c.useStateFromStores)([S.default], () => null == es ? null : S.default.getGuildProduct(es), [es]), eo = (null == er ? void 0 : er.published) === !0, {
    application: ei
  } = (0, h.default)(O, H.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), ed = b.PRODUCT_IMAGE_PRESETS["0"], eu = (0, c.useStateFromStores)([U.default], () => U.default.useReducedMotion), ec = E.GifAutoPlay.useSetting(), eC = (0, V.useIsWindowFocused)(), ef = n.useCallback(() => {
    var e;
    return (null == er ? void 0 : null === (e = er.image_asset) || void 0 === e ? void 0 : e.application_id) == null ? ed.data : (0, P.getAssetURL)(er.image_asset.application_id, er.image_asset, 600, eC && ec ? void 0 : "webp")
  }, [ed, er, eC, ec]), {
    shouldRestrictUpdatingCreatorMonetizationSettings: eg
  } = (0, v.useShouldRestrictUpdatingCreatorMonetizationSettings)(O);
  n.useEffect(() => {
    eg && (el(), (0, K.openErrorDialog)(y.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_TITLE, y.default.Messages.CREATOR_MONETIZATION_RESTRICTED_GUILD_CANNOT_EDIT_PRODUCT_BODY))
  }, [eg, el]);
  let [eT, eU] = n.useState(null !== (l = null == er ? void 0 : er.name) && void 0 !== l ? l : ""), [eh, em] = n.useState(null !== (r = null == er ? void 0 : er.description) && void 0 !== r ? r : ""), [eI, ev] = n.useState(null !== (o = null == er ? void 0 : er.price_tier) && void 0 !== o ? o : void 0), [ep, eE] = n.useState(ef), [eq, eN] = n.useState(null !== (i = null == er ? void 0 : null === (A = er.image_asset) || void 0 === A ? void 0 : A.filename) && void 0 !== i ? i : ed.name), [eR, eL] = n.useState(!1), [eO, ex] = n.useState(), eD = n.useMemo(() => null != eI ? (0, D.formatPrice)(eI, Z.CurrencyCodes.USD) : void 0, [eI]), [eP, eV] = n.useState(!0), {
    changesSaving: ej,
    saveError: eS,
    saveProductWithAttachments: eM,
    hasUnsavedAttachmentChanges: eb,
    cancelUnusedUploads: eF
  } = (0, j.useGuildProductAttachmentManagerContext)(), eG = (null == er ? void 0 : er.attachments) != null && (null == er ? void 0 : er.attachments.length) > 0, e_ = null != eS ? eS : eO, eK = null != ej && "published" in ej, eB = null != ej && !eK, eW = null !== (m = null == er ? void 0 : er.role_id) && void 0 !== m ? m : null, [eX, ez] = n.useState(), eQ = null != eX || null != eW, eZ = (0, c.useStateFromStores)([q.default], () => null != eW && null !== eX ? q.default.getRole(O, eW) : null != eX ? eX : void 0, [eX, eW, O]), eH = "";
  eQ && eP ? eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE : eQ ? eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE : eP && (eH = y.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE);
  let ey = () => {
      eV(!1), eF()
    },
    [ek, ew] = n.useState(),
    {
      changes: eY,
      hasUnsavedChanges: eJ,
      canSaveForDraft: e$,
      canSaveForPublished: e0,
      canPublishOrUnpublish: e1
    } = n.useMemo(() => (0, M.computeProductChanges)({
      guildProductListing: er,
      name: eT,
      priceTier: eI,
      description: eh,
      image: ep,
      imageName: eq,
      isImageChanged: eR,
      newRoleParams: eX,
      hasSavedAttachments: eG,
      hasUnsavedAttachmentChanges: eb
    }), [er, eT, eI, eh, ep, eq, eR, eX, eG, eb]),
    e6 = n.useMemo(() => eJ || null == ek || "publish" === ek || null != e_ ? null : (0, s.jsx)(R.default, {
      className: k.successNotice,
      children: (0, s.jsx)(T.default, {
        message: (0, s.jsxs)("div", {
          className: k.successNoticeMessage,
          children: [(0, s.jsx)(x.default, {
            color: u.default.BUTTON_POSITIVE_BACKGROUND,
            backgroundColor: u.default.WHITE
          }), (0, s.jsx)(f.Text, {
            variant: "text-md/medium",
            children: "draft" === ek ? y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_SAVE_DRAFT_SUCCESS : "update_publish" === ek ? y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UPDATE_PUBLISH_SUCCESS : y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_MODAL_UNPUBLISH_SUCCESS
          })]
        }),
        onReset: () => ew(void 0),
        onResetText: y.default.Messages.GUILD_PRODUCT_EDIT_NOTICE_BAR_DISMISS
      })
    }), [e_, eJ, ek]),
    e3 = n.useCallback(() => {
      eJ ? (0, _.default)({
        title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_TITLE,
        body: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BODY,
        cta: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
        closeLabel: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
        onConfirm: () => {
          el()
        }
      }) : el()
    }, [el, eJ]);
  n.useEffect(() => {
    (0, f.updateModal)(Q.GUILD_PRODUCT_EDIT_MODAL_KEY, e => (0, s.jsx)(ea, {
      guildId: O,
      productId: es,
      ...e
    }), e3)
  }, [O, e3, es]);
  let e9 = async e => {
    let A = (0, M.describeProductChangeValidation)({
      newRoleParams: eX
    });
    if (ex(A), null != A) return;
    let t = await eM(e);
    if (eL(!1), null != t) {
      if (null != e.name && eU(t.name), null != e.description && em(t.description), null != eX) {
        let e = t.role_id;
        d()(null != e, "Cannot update role without role ID"), await g.default.updateRole(O, e, eX)
      }
      ez(void 0), en(t.id), "published" in e && !0 === e.published && el()
    }
  };
  n.useEffect(() => {
    if (null != e_) {
      var e;
      (0, B.showPublishErrorDialog)(e_, O, null == ei ? void 0 : null === (e = ei.team) || void 0 === e ? void 0 : e.id)
    }
  }, [e_, O, ei]), n.useEffect(() => {
    eJ && ew(void 0)
  }, [eJ]);
  let e2 = n.useRef(null);
  return (0, s.jsxs)(f.ModalRoot, {
    transitionState: et,
    size: f.ModalSize.DYNAMIC,
    className: k.modalRoot,
    "aria-labelledby": w,
    children: [(0, s.jsxs)(f.ModalHeader, {
      className: k.modalHeader,
      separator: !1,
      children: [(0, s.jsxs)("div", {
        className: k.headerText,
        children: [(0, s.jsx)(f.Heading, {
          id: w,
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_HEADING
        }), (0, s.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION
        })]
      }), (0, s.jsx)(f.ModalCloseButton, {
        onClick: e3,
        className: k.__invalid_modalCloseButton
      })]
    }), (0, s.jsxs)(f.ModalContent, {
      className: k.modalContent,
      scrollbarType: "none",
      children: [(0, s.jsx)(f.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: k.productFieldsSection,
          ref: e2,
          children: [(0, s.jsx)(f.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_LABEL,
            tag: "label",
            htmlFor: Y,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("name"),
            children: (0, s.jsx)(f.TextArea, {
              value: eT,
              onChange: eU,
              id: Y,
              maxLength: 100,
              placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_NAME_PLACEHOLDER,
              rows: 1,
              autosize: !0,
              showCharacterCount: eT.length > 0,
              showRemainingCharacterCount: eT.length > 0,
              required: !0,
              className: eT.length > 0 ? k.nameArea : void 0
            })
          }), (0, s.jsx)(f.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("description"),
            htmlFor: J,
            children: (0, s.jsx)(I.default, {
              id: J,
              className: k.descriptionArea,
              value: eh,
              onChange: em,
              maxLength: 1500,
              placeholder: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_DESCRIPTION_PLACEHOLDER,
              showCharacterCount: eh.length > 0,
              parentModalKey: Q.GUILD_PRODUCT_EDIT_MODAL_KEY,
              required: !0
            })
          }), (0, s.jsx)(f.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_PRICE_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("price_tier"),
            children: (0, s.jsx)(eA, {
              guildId: O,
              selectedPriceTier: eI,
              setPriceTier: ev
            })
          }), (0, s.jsxs)(f.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_LABEL,
            tag: "label",
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("image"),
            titleClassName: k.thumbnailLabel,
            children: [(0, s.jsx)(f.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_DESCRIPTION
            }), (0, s.jsx)(L.default, {
              size: 10
            }), (0, s.jsx)(W.default, {
              presetImages: b.PRODUCT_IMAGE_PRESETS,
              radioGroupAriaLabel: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_THUMBNAIL_RADIO_GROUP_ARIA_LABEL,
              image: ep,
              imageName: eq,
              savedImageName: null == er ? void 0 : null === (a = er.image_asset) || void 0 === a ? void 0 : a.filename,
              onChange: (e, A) => {
                if (null != e) {
                  var t;
                  eE(e), eN(A), eL(e.startsWith("data:") || A !== (null == er ? void 0 : null === (t = er.image_asset) || void 0 === t ? void 0 : t.filename))
                }
              }
            })]
          }), eP ? (0, s.jsx)(f.FormItem, {
            title: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_ATTACHMENTS_LABEL,
            error: null == e_ ? void 0 : e_.getFirstFieldErrorMessage("attachments"),
            children: (0, s.jsx)(G.AttachmentsUploadComponent, {
              onFileAdded: () => {
                var e;
                null === (e = e2.current) || void 0 === e || e.scrollIntoView({
                  behavior: "smooth",
                  block: "end"
                })
              }
            })
          }) : null, eQ ? (0, s.jsx)(z.default, {
            error: null !== (p = null == e_ ? void 0 : e_.getFirstFieldErrorMessage(M.ROLE_FIELD_NAME)) && void 0 !== p ? p : void 0,
            newRoleParams: eX,
            setNewRoleParams: ez,
            guildId: O,
            listingRoleId: eW,
            productId: es
          }) : null]
        })
      }), (0, s.jsx)("div", {
        className: k.horizontalSeparator
      }), (0, s.jsx)(f.ScrollerThin, {
        children: (0, s.jsxs)("div", {
          className: k.productPreview,
          children: [(0, s.jsx)(X.default, {
            disabled: !e1,
            disabledTooltip: eo ? y.default.Messages.GUILD_PRODUCT_UNPUBLISH_REQUIRES_SAVE : y.default.Messages.GUILD_PRODUCT_PUBLISH_REQUIRES_SAVE,
            published: eo,
            onClick: () => {
              d()(e1, "Attempting to publish/unpublish when not allowed"), ew(eo ? "unpublish" : "publish"), e9({
                ...eY,
                published: !eo
              })
            },
            submitting: eK
          }), (0, s.jsx)("div", {
            className: k.verticalSeparator
          }), (0, s.jsx)(f.Heading, {
            variant: "text-xs/bold",
            color: "header-secondary",
            className: k.previewHeading,
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_HEADING
          }), (0, s.jsx)(L.default, {
            size: 4
          }), (0, s.jsx)(f.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_CARD_PREVIEW_DESCRIPTION
          }), (0, s.jsx)(L.default, {
            size: 16
          }), (0, s.jsx)(F.default, {
            imageUrl: ep,
            name: "" === eT ? y.default.Messages.GUILD_PRODUCT_CARD_EMPTY_NAME : eT,
            description: "" === eh ? y.default.Messages.GUILD_PRODUCT_CARD_EMPTY_DESCRIPTION : eh,
            formattedPrice: eD,
            role: eZ,
            productType: eH,
            ctaComponent: (0, s.jsx)(N.default, {
              shineSize: N.default.ShineSizes.SMALL,
              pauseAnimation: eu || !eC,
              className: k.productPreviewCtaButton,
              children: y.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
            }),
            cardWidth: 340,
            thumbnailHeight: 190
          })]
        })
      })]
    }), (0, s.jsx)(f.ModalFooter, {
      children: (0, s.jsxs)("div", {
        className: k.footerActionButtons,
        children: [(0, s.jsxs)("div", {
          className: k.footerActionLeftButtons,
          children: [(0, s.jsx)($, {
            text: y.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ROLE_TOGGLE_LABEL,
            value: eQ,
            onChange: e => {
              e ? ez((0, z.getInitialNewRoleParams)()) : ez(void 0)
            },
            warning: null === eX ? (0, s.jsx)(z.WarningIcon, {}) : void 0,
            disabled: null != eW
          }), (0, s.jsx)($, {
            text: y.default.Messages.GUILD_PRODUCT_SETTINGS_INCLUDE_ATTACHMENTS_TOGGLE_LABEL,
            value: eP,
            onChange: e => {
              e ? eV(!0) : eb ? (0, f.openModalLazy)(async () => {
                let {
                  ConfirmModal: e
                } = await Promise.resolve().then(t.bind(t, "481060"));
                return A => (0, s.jsx)(e, {
                  ...A,
                  header: y.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_HEADER,
                  confirmText: y.default.Messages.REMOVE,
                  cancelText: y.default.Messages.CANCEL,
                  onConfirm: ey,
                  children: (0, s.jsx)(f.Text, {
                    variant: "text-md/normal",
                    children: y.default.Messages.GUILD_PRODUCT_CANCEL_ATTACHMENTS_CONFIRMATION_BODY
                  })
                })
              }) : ey()
            },
            disabled: eG
          })]
        }), (0, s.jsx)("div", {
          className: k.footerActionRightButtons,
          children: eo ? (0, s.jsx)(f.Button, {
            color: f.Button.Colors.PRIMARY,
            disabled: !e0,
            submitting: eB,
            onClick: () => {
              d()(e0, "cannot save changes for published product without adding all fields"), ew("update_publish"), e9(eY)
            },
            children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_CHANGES_BUTTON
          }) : (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(f.Button, {
              color: f.Button.Colors.PRIMARY,
              disabled: !e$,
              submitting: eB,
              onClick: () => {
                d()(e$, "cannot save changes without name or price tier"), ew("draft"), e9(eY)
              },
              children: y.default.Messages.GUILD_PRODUCT_EDIT_MODAL_SAVE_DRAFT_BUTTON
            })
          })
        })]
      })
    }), (0, s.jsx)(C.TransitionGroup, {
      component: "div",
      className: k.successNoticeContainer,
      children: e6
    })]
  })
}

function ea(e) {
  var A;
  return (0, s.jsx)(j.GuildProductAttachmentManagerContextProvider, {
    guildId: e.guildId,
    editSkuId: null !== (A = e.productId) && void 0 !== A ? A : void 0,
    onFileSizeError: () => (0, p.default)(Q.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES),
    children: (0, s.jsx)(et, {
      ...e
    })
  })
}(l = a || (a = {})).DRAFT = "draft", l.PUBLISH = "publish", l.UPDATE_PUBLISH = "update_publish", l.UNPUBLISH = "unpublish"