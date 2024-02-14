"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  r = n("884691"),
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
  A = n("719923"),
  I = n("354460"),
  C = n("424960"),
  N = n("49111"),
  m = n("75015"),
  y = n("991207"),
  R = n("782340"),
  P = n("81557");
let v = [{
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
  } = e, [n, i] = r.useState(!1);
  return (0, a.jsx)("div", {
    className: P.gifGrid,
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    children: v.map(e => (0, a.jsx)("div", {
      className: P.gif,
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
  return null == t || null == n ? null : (0, a.jsx)("div", {
    className: P.pillWrapper,
    children: (0, a.jsx)(s.default, {
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
  return (0, a.jsxs)("div", {
    className: P.optionBoxText,
    children: [(0, a.jsx)(U, {
      guild: n,
      guildFeature: (0, I.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, a.jsxs)("div", {
      className: P.optionBoxDescription,
      children: [(0, I.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(u.TooltipContainer, {
        className: P.nitroWheelFlairContainer,
        text: R.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, a.jsx)(S.default, {
          className: P.nitroWheelFlair
        })
      }), R.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function L(e) {
  let {
    title: t,
    uploadType: n,
    guild: r
  } = e;
  return (0, a.jsxs)("div", {
    className: P.optionBoxText,
    children: [(0, a.jsx)(U, {
      guildFeature: (0, I.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: r
    }), (0, a.jsx)("div", {
      className: P.optionBoxDescription,
      children: t
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    onClose: s,
    onComplete: S,
    uploadType: I,
    maxFileSizeBytes: v,
    showUpsellHeader: U,
    filters: M,
    analyticsLocation: F,
    analyticsLocations: x = [],
    modalSubTitle: D,
    imageSpecifications: b,
    modalTitle: G = R.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: j = R.default.Messages.UPLOAD_IMAGE
  } = e, w = (0, i.useStateFromStores)([_.default], () => _.default.isFocused()), H = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), V = (0, i.useStateFromStores)([f.default], () => f.default.getGuildId()), k = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(V)), {
    reducedMotion: B
  } = r.useContext(u.AccessibilityPreferencesContext), K = (0, u.useModalContext)(), W = !A.default.canUseAnimatedAvatar(H) && I === m.UploadTypes.AVATAR, {
    analyticsLocations: z
  } = (0, o.default)(x, l.default.SELECT_IMAGE_MODAL);

  function Z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    s(), S(e, t, n)
  }
  return r.useEffect(() => {
    W && h.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: z
    }), h.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: F
    })
  }, [W, F, z]), (0, a.jsxs)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.SMALL,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: P.modalHeader,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: P.modalTitle,
          children: G
        }), null != D ? (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          children: D
        }) : null]
      }), (0, a.jsx)(u.ModalCloseButton, {
        onClick: s,
        className: P.modalCloseButton
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: P.modalContent,
      children: [(0, a.jsxs)("div", {
        className: P.imagePickerContainer,
        children: [(0, a.jsxs)(u.Clickable, {
          className: P.optionBox,
          children: [(0, a.jsx)("div", {
            className: P.contentCircle,
            children: (0, a.jsx)(T.default, {
              className: P.uploadIcon
            })
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(L, {
              title: j,
              uploadType: I,
              guild: k
            })
          }), (0, a.jsx)(c.default, {
            onChange: function(e, t) {
              if (t.type === y.FileTypes.MP4) return Z(e, t);
              (0, u.openModalLazy)(async () => {
                let {
                  default: r
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, a.jsx)(r, {
                  imgURI: e,
                  file: t,
                  onCrop: Z,
                  uploadType: I,
                  showUpsellHeader: U,
                  allowSkip: !0,
                  analyticsPage: null == F ? void 0 : F.page,
                  ...n
                })
              }, {
                contextKey: K
              })
            },
            maxFileSizeBytes: v,
            onFileSizeError: function() {
              s(), (0, C.default)(v)
            },
            filters: M
          })]
        }), (0, a.jsxs)(u.Clickable, {
          className: P.optionBox,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, a.jsx)(e, {
                uploadType: I,
                onComplete: (e, t) => Z(e, t, !0),
                showUpsellHeader: U,
                analyticsPage: null == F ? void 0 : F.page,
                ...t
              })
            }, {
              contextKey: K
            })
          },
          children: [(0, a.jsxs)("div", {
            className: P.contentCircle,
            children: [(0, a.jsx)(g, {
              shouldAnimate: w && !B.enabled
            }), (0, a.jsx)("div", {
              className: P.gifIconContainer,
              children: (0, a.jsx)(p.default, {
                className: P.gifIcon
              })
            })]
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(O, {
              uploadType: I,
              guild: k
            })
          })]
        })]
      }), null != b ? (0, a.jsx)(u.Text, {
        className: P.imageSpecifications,
        variant: "text-sm/normal",
        children: b
      }) : null]
    })]
  })
}