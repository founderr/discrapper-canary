i.r(n), i.d(n, {
  default: function() {
    return L
  }
}), i(47120);
var t = i(735250),
  a = i(470079),
  l = i(442837),
  s = i(481060),
  o = i(100527),
  c = i(906732),
  r = i(807582),
  d = i(813197),
  u = i(430824),
  p = i(914010),
  x = i(594174),
  f = i(451478),
  m = i(626135),
  g = i(74538),
  h = i(621961),
  C = i(884858),
  j = i(981631),
  N = i(486324),
  M = i(869783),
  I = i(689938),
  _ = i(864306);
let b = [{
  gif: i(495682),
  png: i(458060)
}, {
  gif: i(842786),
  png: i(460790)
}, {
  gif: i(578831),
  png: i(642193)
}, {
  gif: i(145908),
  png: i(690695)
}];

function A(e) {
  let {
    shouldAnimate: n = !0
  } = e, [i, l] = a.useState(!1);
  return (0, t.jsx)("div", {
    className: _.gifGrid,
    onMouseMove: () => l(!0),
    onMouseLeave: () => l(!1),
    children: b.map(e => (0, t.jsx)("div", {
      className: _.gif,
      style: {
        backgroundImage: "url(".concat(n || i ? e.gif : e.png, ")")
      }
    }, e.gif))
  })
}

function E(e) {
  let {
    guildFeature: n,
    guild: i
  } = e;
  return null == n || null == i ? null : (0, t.jsx)("div", {
    className: _.pillWrapper,
    children: (0, t.jsx)(r.Z, {
      guildFeature: n,
      guild: i,
      hideTooltip: !0
    })
  })
}

function T(e) {
  let {
    uploadType: n,
    guild: i
  } = e;
  return (0, t.jsxs)("div", {
    className: _.optionBoxText,
    children: [(0, t.jsx)(E, {
      guild: i,
      guildFeature: (0, h.C)(n, {
        isGIF: !0
      })
    }), (0, t.jsxs)("div", {
      className: _.optionBoxDescription,
      children: [(0, h.K)(n) && (0, t.jsx)(s.TooltipContainer, {
        className: _.nitroWheelFlairContainer,
        text: I.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
        children: (0, t.jsx)(s.NitroWheelIcon, {
          size: "md",
          color: "currentColor",
          className: _.nitroWheelFlair
        })
      }), I.Z.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF]
    })]
  })
}

function v(e) {
  let {
    title: n,
    uploadType: i,
    guild: a
  } = e;
  return (0, t.jsxs)("div", {
    className: _.optionBoxText,
    children: [(0, t.jsx)(E, {
      guildFeature: (0, h.C)(i, {
        isGIF: !1
      }),
      guild: a
    }), (0, t.jsx)("div", {
      className: _.optionBoxDescription,
      children: n
    })]
  })
}

function L(e) {
  let {
    transitionState: n,
    onClose: r,
    onComplete: h,
    uploadType: b,
    maxFileSizeBytes: E,
    showUpsellHeader: L,
    filters: O,
    analyticsLocation: P,
    analyticsLocations: F = [],
    modalSubTitle: y,
    imageSpecifications: Z,
    modalTitle: S = I.Z.Messages.SELECT_IMAGE_MODAL_TITLE,
    uploadOptionTitle: k = I.Z.Messages.UPLOAD_IMAGE
  } = e, D = (0, l.e7)([f.Z], () => f.Z.isFocused()), G = (0, l.e7)([x.default], () => x.default.getCurrentUser()), B = (0, l.e7)([p.Z], () => p.Z.getGuildId()), R = (0, l.e7)([u.Z], () => u.Z.getGuild(B)), {
    reducedMotion: U
  } = a.useContext(s.AccessibilityPreferencesContext), z = (0, s.useModalContext)(), w = !g.ZP.canUseAnimatedAvatar(G) && b === N.pC.AVATAR, {
    analyticsLocations: H
  } = (0, c.ZP)(F, o.Z.SELECT_IMAGE_MODAL);

  function W(e, n) {
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r(), h(e, n, i)
  }
  return a.useEffect(() => {
    w && m.default.track(j.rMx.PREMIUM_UPSELL_VIEWED, {
      type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location_stack: H
    }), m.default.track(j.rMx.OPEN_MODAL, {
      type: j.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
      location: P
    })
  }, [w, P, H]), (0, t.jsxs)(s.ModalRoot, {
    transitionState: n,
    size: s.ModalSize.SMALL,
    children: [(0, t.jsxs)(s.ModalHeader, {
      className: _.modalHeader,
      separator: !1,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(s.FormTitle, {
          tag: s.FormTitleTags.H1,
          className: _.modalTitle,
          children: S
        }), null != y ? (0, t.jsx)(s.Text, {
          variant: "text-md/normal",
          children: y
        }) : null]
      }), (0, t.jsx)(s.ModalCloseButton, {
        onClick: r,
        className: _.modalCloseButton
      })]
    }), (0, t.jsxs)(s.ModalContent, {
      className: _.modalContent,
      children: [(0, t.jsxs)("div", {
        className: _.imagePickerContainer,
        children: [(0, t.jsxs)(s.Clickable, {
          className: _.optionBox,
          children: [(0, t.jsx)("div", {
            className: _.contentCircle,
            children: (0, t.jsx)(s.ImagePlusIcon, {
              size: "md",
              color: "currentColor",
              className: _.uploadIcon
            })
          }), (0, t.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, t.jsx)(v, {
              title: k,
              uploadType: b,
              guild: R
            })
          }), (0, t.jsx)(d.ZP, {
            onChange: function(e, n) {
              if (n.type === M.m.MP4) return W(e, n);
              (0, s.openModalLazy)(async () => {
                let {
                  default: a
                } = await Promise.all([i.e("99387"), i.e("48017")]).then(i.bind(i, 850085));
                return i => (0, t.jsx)(a, {
                  imgURI: e,
                  file: n,
                  onCrop: W,
                  uploadType: b,
                  showUpsellHeader: L,
                  allowSkip: !0,
                  analyticsPage: null == P ? void 0 : P.page,
                  ...i
                })
              }, {
                contextKey: z
              })
            },
            maxFileSizeBytes: E,
            onFileSizeError: function() {
              r(), (0, C.Z)(E)
            },
            filters: O
          })]
        }), (0, t.jsxs)(s.Clickable, {
          className: _.optionBox,
          onClick: function() {
            (0, s.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([i.e("99387"), i.e("72891")]).then(i.bind(i, 195297));
              return n => (0, t.jsx)(e, {
                uploadType: b,
                onComplete: (e, n) => W(e, n, !0),
                showUpsellHeader: L,
                analyticsPage: null == P ? void 0 : P.page,
                ...n
              })
            }, {
              contextKey: z
            })
          },
          children: [(0, t.jsxs)("div", {
            className: _.contentCircle,
            children: [(0, t.jsx)(A, {
              shouldAnimate: D && !U.enabled
            }), (0, t.jsx)("div", {
              className: _.gifIconContainer,
              children: (0, t.jsx)(s.GifIcon, {
                size: "custom",
                width: 29,
                height: 29,
                color: "currentColor",
                className: _.gifIcon
              })
            })]
          }), (0, t.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: (0, t.jsx)(T, {
              uploadType: b,
              guild: R
            })
          })]
        })]
      }), null != Z ? (0, t.jsx)(s.Text, {
        className: _.imageSpecifications,
        variant: "text-sm/normal",
        children: Z
      }) : null]
    })]
  })
}