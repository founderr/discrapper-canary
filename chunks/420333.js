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
  s = n("685665"),
  o = n("634544"),
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
  y = n("991207"),
  v = n("782340"),
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
  } = e, [n, i] = r.useState(!1);
  return (0, a.jsx)("div", {
    className: R.gifGrid,
    onMouseMove: () => i(!0),
    onMouseLeave: () => i(!1),
    children: P.map(e => (0, a.jsx)("div", {
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
  return null == t || null == n ? null : (0, a.jsx)("div", {
    className: R.pillWrapper,
    children: (0, a.jsx)(o.default, {
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
    className: R.optionBoxText,
    children: [(0, a.jsx)(U, {
      guild: n,
      guildFeature: (0, A.getGuildFeatureFromUploadType)(t, {
        isGIF: !0
      })
    }), (0, a.jsxs)("div", {
      className: R.optionBoxDescription,
      children: [(0, A.shouldShowPremiumIconForGIFPickerOption)(t) && (0, a.jsx)(u.TooltipContainer, {
        className: R.nitroWheelFlairContainer,
        text: v.default.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, a.jsx)(S.default, {
          className: R.nitroWheelFlair
        })
      }), v.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
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
    className: R.optionBoxText,
    children: [(0, a.jsx)(U, {
      guildFeature: (0, A.getGuildFeatureFromUploadType)(n, {
        isGIF: !1
      }),
      guild: r
    }), (0, a.jsx)("div", {
      className: R.optionBoxDescription,
      children: t
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    onClose: o,
    onComplete: S,
    uploadType: A,
    maxFileSizeBytes: P,
    showUpsellHeader: U,
    filters: M,
    analyticsLocation: x,
    analyticsLocations: F = [],
    modalSubTitle: D,
    imageSpecifications: b,
    modalTitle: G = v.default.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: H = v.default.Messages.UPLOAD_IMAGE
  } = e, w = (0, i.useStateFromStores)([_.default], () => _.default.isFocused()), j = (0, i.useStateFromStores)([E.default], () => E.default.getCurrentUser()), V = (0, i.useStateFromStores)([f.default], () => f.default.getGuildId()), k = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(V)), {
    reducedMotion: B
  } = r.useContext(u.AccessibilityPreferencesContext), Z = (0, u.useModalContext)(), K = !C.default.canUseAnimatedAvatar(j) && A === m.UploadTypes.AVATAR, {
    analyticsLocations: W
  } = (0, s.default)(F, l.default.SELECT_IMAGE_MODAL);

  function z(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o(), S(e, t, n)
  }
  return r.useEffect(() => {
    K && h.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: W
    }), h.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: N.AnalyticsSections.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: x
    })
  }, [K, x, W]), (0, a.jsxs)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.SMALL,
    children: [(0, a.jsxs)(u.ModalHeader, {
      className: R.modalHeader,
      separator: !1,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H1,
          className: R.modalTitle,
          children: G
        }), null != D ? (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          children: D
        }) : null]
      }), (0, a.jsx)(u.ModalCloseButton, {
        onClick: o,
        className: R.modalCloseButton
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: R.modalContent,
      children: [(0, a.jsxs)("div", {
        className: R.imagePickerContainer,
        children: [(0, a.jsxs)(u.Clickable, {
          className: R.optionBox,
          children: [(0, a.jsx)("div", {
            className: R.contentCircle,
            children: (0, a.jsx)(T.default, {
              className: R.uploadIcon
            })
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(L, {
              title: H,
              uploadType: A,
              guild: k
            })
          }), (0, a.jsx)(c.default, {
            onChange: function(e, t) {
              if (t.type === y.FileTypes.MP4) return z(e, t);
              (0, u.openModalLazy)(async () => {
                let {
                  default: r
                } = await n.el("57015").then(n.bind(n, "57015"));
                return n => (0, a.jsx)(r, {
                  imgURI: e,
                  file: t,
                  onCrop: z,
                  uploadType: A,
                  showUpsellHeader: U,
                  allowSkip: !0,
                  analyticsPage: null == x ? void 0 : x.page,
                  ...n
                })
              }, {
                contextKey: Z
              })
            },
            maxFileSizeBytes: P,
            onFileSizeError: function() {
              o(), (0, I.default)(P)
            },
            filters: M
          })]
        }), (0, a.jsxs)(u.Clickable, {
          className: R.optionBox,
          onClick: function() {
            (0, u.openModalLazy)(async () => {
              let {
                default: e
              } = await n.el("646077").then(n.bind(n, "646077"));
              return t => (0, a.jsx)(e, {
                uploadType: A,
                onComplete: (e, t) => z(e, t, !0),
                showUpsellHeader: U,
                analyticsPage: null == x ? void 0 : x.page,
                ...t
              })
            }, {
              contextKey: Z
            })
          },
          children: [(0, a.jsxs)("div", {
            className: R.contentCircle,
            children: [(0, a.jsx)(g, {
              shouldAnimate: w && !B.enabled
            }), (0, a.jsx)("div", {
              className: R.gifIconContainer,
              children: (0, a.jsx)(p.default, {
                className: R.gifIcon
              })
            })]
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, a.jsx)(O, {
              uploadType: A,
              guild: k
            })
          })]
        })]
      }), null != b ? (0, a.jsx)(u.Text, {
        className: R.imageSpecifications,
        variant: "text-sm/normal",
        children: b
      }) : null]
    })]
  })
}