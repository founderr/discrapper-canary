"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  i = n("446674"),
  u = n("77078"),
  l = n("812204"),
  o = n("685665"),
  s = n("634544"),
  c = n("694187"),
  d = n("305961"),
  f = n("162771"),
  E = n("697218"),
  _ = n("471671"),
  p = n("887718"),
  T = n("818643"),
  S = n("216422"),
  h = n("599110"),
  C = n("719923"),
  A = n("354460"),
  I = n("424960"),
  N = n("49111"),
  m = n("75015"),
  v = n("991207"),
  y = n("782340"),
  R = n("461300");
let P = [{
  gif: n("6916"),
  png: n("12412")
}, {
  gif: n("463095"),
  png: n("733105")
}, {
  gif: n("749003"),
  png: n("918927")
}, {
  gif: n("54400"),
  png: n("122574")
}];

function g(e) {
  let {
    shouldAnimate: t = !0
  } = e, [n, i] = a.useState(!1);
  return (0, r.jsx)("div", {
    className: R.gifGrid,
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    children: P.map(e => (0, r.jsx)("div", {
      className: R.gif,
      style: {
        backgroundImage: "url(".concat(t || n ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function U(e) {
  let {
    guildFeature: t,
    guild: n
  } = e;
  return null == t || null == n ? null : (0, r.jsx)("div", {
    className: R.pillWrapper,
    children: (0, r.jsx)(s.default, {
      guildFeature: t,
      guild: n,
      hideTooltip: !0
    })
  })
}

function O(e) {
  let {
    uploadType: t,
    guild: n
  } = e;
  return (0, r.jsxs)("div", {
    className: R.optionBoxText,
    children: [(0, r.jsx)(U, {
      guild: n,
      guildFeature: (0, A.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, r.jsxs)("div", {
      className: R.optionBoxDescription,
      children: [(0, A.shouldShowPremiumIconForGIFPickerOption)(t) && (0, r.jsx)(u.TooltipContainer, {
        className: R.nitroWheelFlairContainer,
        text: y.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, r.jsx)(S.default, {
          className: R.nitroWheelFlair
        })
      }), y.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function L(e) {
  let {
    title: t,
    uploadType: n,
    guild: a
  } = e;
  return (0, r.jsxs)("div", {
    className: R.optionBoxText,
    children: [(0, r.jsx)(U, {
      guildFeature: (0, A.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: a
    }), (0, r.jsx)("div", {
      className: R.optionBoxDescription,
      children: t
    })]
  })
}

function x(e) {
  let {
    transitionState: t,
    onClose: s,
    onComplete: S,
    uploadType: A,
    maxFileSizeBytes: P,
    showUpsellHeader: U,
    filters: x,
    analyticsLocation: M,
    analyticsLocations: F = [],
    modalSubTitle: D,
    imageSpecifications: b,
    modalTitle: G = y.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: H = y.default.Messages.UPLOAD_IMAGE
  } = e, w = (0, i.useStateFromStores)([_.default], () => _.default.isFocused()), j = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), V = (0, i.useStateFromStores)([f.default], () => f.default.getGuildId()), k = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(V)), {
    reducedMotion: B
  } = a.useContext(u.AccessibilityPreferencesContext), Z = (0, u.useModalContext)(), K = !C.default.canUseAnimatedAvatar(j) && A === m.UploadTypes.AVATAR, {
    analyticsLocations: W
  } = (0, o.default)(F, l.default.SELECT_IMAGE_MODAL);

  function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    s(), S(e, t, n)
  }
  return a.useEffect(() => {
    K && h.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: W
    }), h.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: M
    })
  }, [K, M, W]), (0, r.jsxs)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.SMALL,
    children: [(0, r.jsxs)(u.ModalHeader, {
      className: R.modalHeader,
      separator: !1,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: R.modalTitle,
          children: G
        }), null != D ? (0, r.jsx)(u.Text, {
          variant: "text-md/normal",
          children: D
        }) : null]
      }), (0, r.jsx)(u.ModalCloseButton, {
        onClick: s,
        className: R.modalCloseButton
      })]
    }), (0, r.jsxs)(u.ModalContent, {
      className: R.modalContent,
      children: [(0, r.jsxs)("div", {
        className: R.imagePickerContainer,
        children: [(0, r.jsxs)(u.Clickable, {
          className: R.optionBox,
          children: [(0, r.jsx)("div", {
            className: R.contentCircle,
            children: (0, r.jsx)(T.default, {
              className: R.uploadIcon
            })
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(L, {
              title: H,
              uploadType: A,
              guild: k
            })
          }), (0, r.jsx)(c.default, {
            onChange: function(e, t) {
              if (t.type === v.FileTypes.MP4) return z(e, t);
              (0, u.openModalLazy)(async () => {
                let {
                  default: a
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, r.jsx)(a, {
                  imgURI: e,
                  file: t,
                  onCrop: z,
                  uploadType: A,
                  showUpsellHeader: U,
                  allowSkip: !0,
                  analyticsPage: null == M ? void 0 : M.page,
                  ...n
                })
              }, {
                contextKey: Z
              })
            },
            maxFileSizeBytes: P,
            onFileSizeError: function() {
              s(), (0, I.default)(P)
            },
            filters: x
          })]
        }), (0, r.jsxs)(u.Clickable, {
          className: R.optionBox,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, r.jsx)(e, {
                uploadType: A,
                onComplete: (e, t) => z(e, t, !0),
                showUpsellHeader: U,
                analyticsPage: null == M ? void 0 : M.page,
                ...t
              })
            }, {
              contextKey: Z
            })
          },
          children: [(0, r.jsxs)("div", {
            className: R.contentCircle,
            children: [(0, r.jsx)(g, {
              shouldAnimate: w && !B.enabled
            }), (0, r.jsx)("div", {
              className: R.gifIconContainer,
              children: (0, r.jsx)(p.default, {
                className: R.gifIcon
              })
            })]
          }), (0, r.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, r.jsx)(O, {
              uploadType: A,
              guild: k
            })
          })]
        })]
      }), null != b ? (0, r.jsx)(u.Text, {
        className: R.imageSpecifications,
        variant: "text-sm/normal",
        children: b
      }) : null]
    })]
  })
}