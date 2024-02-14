"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007"), n("70102");
var r = n("37983"),
  i = n("884691"),
  a = n("917351"),
  s = n("77078"),
  u = n("812204"),
  l = n("685665"),
  o = n("652914"),
  c = n("95689"),
  d = n("599110"),
  f = n("8731"),
  h = n("817295"),
  _ = n("75015"),
  E = n("49111"),
  A = n("917219"),
  p = n("782340"),
  T = n("304379"),
  I = e => {
    let {
      file: t,
      imgURI: n,
      transitionState: I,
      allowSkip: m = !1,
      onCrop: g,
      onClose: R,
      uploadType: N = _.UploadTypes.AVATAR,
      showUpsellHeader: v = !1,
      analyticsPage: C
    } = e, [M, S] = i.useState({
      width: 0,
      height: 0
    }), [w, O] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [D, L] = i.useState(!1), [y, b] = i.useState(1), [U, P] = i.useState({
      x: 0,
      y: 0
    }), [x, H] = i.useState(null), [B, G] = i.useState(!1), {
      AnalyticsLocationProvider: V
    } = (0, l.default)(u.default.IMAGE_CROPPING_MODAL), j = i.useRef({
      x: 0,
      y: 0
    }), F = i.useRef(null), W = i.useRef(null), z = "image/gif" === t.type;
    i.useEffect(() => {
      (0, h.default)()
    }, []), i.useEffect(() => {
      z && v && d.default.track(E.AnalyticEvents.OPEN_MODAL, {
        type: E.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: C
        }
      })
    }, [v, C, z]);
    let k = () => {
        switch (N) {
          case _.UploadTypes.BANNER:
            return {
              height: _.USER_BANNER_MAX_HEIGHT, width: _.USER_BANNER_MAX_WIDTH
            };
          case _.UploadTypes.VIDEO_BACKGROUND:
            return A.BACKGROUND_REPLACEMENT_SIZE;
          case _.UploadTypes.AVATAR:
          case _.UploadTypes.AVATAR_DECORATION:
            return {
              height: E.AVATAR_MAX_SIZE, width: E.AVATAR_MAX_SIZE
            };
          case _.UploadTypes.GUILD_BANNER:
            return {
              height: _.GUILD_BANNER_MAX_HEIGHT, width: _.GUILD_BANNER_MAX_WIDTH
            };
          case _.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return {
              height: _.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: _.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
            };
          case _.UploadTypes.HOME_HEADER:
            return {
              height: _.HOME_HEADER_MAX_HEIGHT, width: _.HOME_HEADER_MAX_WIDTH
            }
        }
      },
      X = i.useCallback((e, t, n) => {
        j.current = (0, f.getBoundedCoordinates)(e, t, n), null != F.current && (F.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
      }, [F]),
      Y = i.useCallback(() => {
        if (null == F.current || y > 1) return;
        let {
          width: e,
          height: t
        } = F.current.getBoundingClientRect(), {
          width: n,
          height: r
        } = (0, f.adjustImageDimensionsForAspectRatio)(N, e, t), i = (0, f.calculateOverlaySize)(N, n, r, t);
        H({
          width: n,
          height: r
        }), S(i), O((0, f.calculateDragBoundaries)(n, r, i))
      }, [N, y]),
      Z = i.useCallback(e => {
        let {
          x: t,
          y: n
        } = j.current;
        if (!D || e.clientX === t && e.clientY === n) return;
        let r = e.clientX - U.x,
          i = e.clientY - U.y;
        X(r, i, w)
      }, [w, D, U, X]),
      K = () => {
        L(!1)
      },
      q = () => {
        let e = k();
        return e.width !== e.height
      },
      $ = async () => {
        let e;
        if (null == F.current) return;
        G(!0);
        let n = F.current,
          r = k();
        if (z) try {
          let {
            result: i,
            cancelFn: a
          } = await (0, f.cropGIF)(t, n, M, j.current, r);
          W.current = a, e = await i, W.current = null
        } catch (e) {
          var i;
          throw null === (i = W.current) || void 0 === i || i.call(W), W.current = null, Error("Error cropping GIF")
        } else e = (0, f.cropStaticImage)(n, M, j.current, r);
        await g(e, t), G(!1), R()
      };
    return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
      window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
    }), [Y]), i.useEffect(() => () => {
      null != W.current && W.current()
    }, []), i.useEffect(() => {
      if (D) return window.addEventListener("mousemove", Z), () => window.removeEventListener("mousemove", Z)
    }, [Z, D]), (0, r.jsx)(V, {
      children: (0, r.jsxs)(s.ModalRoot, {
        onAnimationEnd: Y,
        transitionState: I,
        size: s.ModalSize.MEDIUM,
        children: [v && (0, r.jsx)(o.default, {
          type: N,
          analyticsPage: C,
          analyticsSection: E.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: z,
          banner: n
        }), (0, r.jsx)(s.ModalHeader, {
          separator: !1,
          children: (0, r.jsx)(s.FormTitle, {
            className: T.titleCase,
            tag: s.FormTitleTags.H1,
            children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, r.jsxs)(s.ModalContent, {
          className: T.modalContent,
          children: [(0, r.jsxs)("div", {
            className: T.editingContainer,
            children: [(0, r.jsx)("img", {
              style: {
                opacity: null == x ? 0 : 1,
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                ...(() => {
                  if (null == x) return {};
                  let e = x.width / x.height,
                    t = q() && e > _.BANNER_ASPECT_RATIO ? M.height / x.height : 1;
                  return {
                    width: x.width * y * t,
                    minWidth: x.width * y * t,
                    height: x.height * y * t
                  }
                })()
              },
              className: B ? T.imageDisabled : T.imageEnabled,
              src: n,
              alt: "avatar",
              ref: F,
              onMouseDown: e => {
                let t = e.clientX - j.current.x,
                  n = e.clientY - j.current.y;
                P({
                  x: t,
                  y: n
                }), L(!0)
              },
              draggable: !1
            }), (0, r.jsx)("div", {
              className: N === _.UploadTypes.AVATAR ? T.overlayAvatar : T.overlayBanner,
              style: {
                opacity: null == x ? 0 : 1,
                width: M.width,
                height: M.height
              }
            })]
          }), (0, r.jsxs)("div", {
            className: T.sliderContainer,
            children: [(0, r.jsx)(c.default, {
              className: T.icon,
              width: 24,
              height: 24
            }), (0, r.jsx)(s.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: e => {
                if (null == x) return;
                let {
                  width: t,
                  height: n
                } = x, r = (0, f.calculateDragBoundaries)(t * e, n * e, M), {
                  x: i,
                  y: s
                } = j.current;
                (!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(s, r.top, r.bottom)) && X(i, s, r), b(e), O(r)
              },
              disabled: B,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, r.jsx)(c.default, {
              className: T.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, r.jsxs)(s.ModalFooter, {
          className: T.modalFooter,
          children: [m ? (0, r.jsx)(s.Button, {
            className: T.cancelButton,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.PRIMARY,
            size: s.ButtonSizes.SMALL,
            onClick: () => {
              m && (g(n, t), R())
            },
            children: p.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, r.jsxs)("div", {
            className: T.buttonsRight,
            children: [(0, r.jsx)(s.Button, {
              className: T.cancelButton,
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              size: s.ButtonSizes.SMALL,
              onClick: () => {
                if (null != W.current) {
                  W.current(), W.current = null, G(!1);
                  return
                }
                R()
              },
              children: p.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, r.jsx)(s.Button, {
              submitting: B,
              size: s.ButtonSizes.SMALL,
              onClick: $,
              children: p.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }