"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("70102");
var r = n("37983"),
  i = n("884691"),
  a = n("917351"),
  l = n("77078"),
  u = n("812204"),
  s = n("685665"),
  o = n("652914"),
  c = n("95689"),
  d = n("599110"),
  E = n("8731"),
  _ = n("817295"),
  f = n("75015"),
  A = n("49111"),
  T = n("917219"),
  h = n("782340"),
  I = n("879777"),
  R = e => {
    let {
      file: t,
      imgURI: n,
      transitionState: R,
      allowSkip: p = !1,
      onCrop: N,
      onClose: C,
      uploadType: m = f.UploadTypes.AVATAR,
      showUpsellHeader: M = !1,
      analyticsPage: g
    } = e, [S, O] = i.useState({
      width: 0,
      height: 0
    }), [v, D] = i.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [L, y] = i.useState(!1), [H, U] = i.useState(1), [P, w] = i.useState({
      x: 0,
      y: 0
    }), [B, x] = i.useState(null), [G, V] = i.useState(!1), {
      AnalyticsLocationProvider: b
    } = (0, s.default)(u.default.IMAGE_CROPPING_MODAL), j = i.useRef({
      x: 0,
      y: 0
    }), F = i.useRef(null), W = i.useRef(null), Z = "image/gif" === t.type;
    i.useEffect(() => {
      (0, _.default)()
    }, []), i.useEffect(() => {
      Z && M && d.default.track(A.AnalyticEvents.OPEN_MODAL, {
        type: A.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: g
        }
      })
    }, [M, g, Z]);
    let k = () => {
        switch (m) {
          case f.UploadTypes.BANNER:
            return {
              height: f.USER_BANNER_MAX_HEIGHT, width: f.USER_BANNER_MAX_WIDTH
            };
          case f.UploadTypes.VIDEO_BACKGROUND:
            return T.BACKGROUND_REPLACEMENT_SIZE;
          case f.UploadTypes.AVATAR:
          case f.UploadTypes.AVATAR_DECORATION:
            return {
              height: A.AVATAR_MAX_SIZE, width: A.AVATAR_MAX_SIZE
            };
          case f.UploadTypes.GUILD_BANNER:
            return {
              height: f.GUILD_BANNER_MAX_HEIGHT, width: f.GUILD_BANNER_MAX_WIDTH
            };
          case f.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return {
              height: f.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: f.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
            };
          case f.UploadTypes.HOME_HEADER:
            return {
              height: f.HOME_HEADER_MAX_HEIGHT, width: f.HOME_HEADER_MAX_WIDTH
            }
        }
      },
      X = i.useCallback((e, t, n) => {
        j.current = (0, E.getBoundedCoordinates)(e, t, n), null != F.current && (F.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
      }, [F]),
      Y = i.useCallback(() => {
        if (null == F.current || H > 1) return;
        let {
          width: e,
          height: t
        } = F.current.getBoundingClientRect(), {
          width: n,
          height: r
        } = (0, E.adjustImageDimensionsForAspectRatio)(m, e, t), i = (0, E.calculateOverlaySize)(m, n, r, t);
        x({
          width: n,
          height: r
        }), O(i), D((0, E.calculateDragBoundaries)(n, r, i))
      }, [m, H]),
      z = i.useCallback(e => {
        let {
          x: t,
          y: n
        } = j.current;
        if (!L || e.clientX === t && e.clientY === n) return;
        let r = e.clientX - P.x,
          i = e.clientY - P.y;
        X(r, i, v)
      }, [v, L, P, X]),
      K = () => {
        y(!1)
      },
      q = () => {
        let e = k();
        return e.width !== e.height
      },
      Q = async () => {
        let e;
        if (null == F.current) return;
        V(!0);
        let n = F.current,
          r = k();
        if (Z) try {
          let {
            result: i,
            cancelFn: a
          } = await (0, E.cropGIF)(t, n, S, j.current, r);
          W.current = a, e = await i, W.current = null
        } catch (e) {
          var i;
          throw null === (i = W.current) || void 0 === i || i.call(W), W.current = null, Error("Error cropping GIF")
        } else e = (0, E.cropStaticImage)(n, S, j.current, r);
        await N(e, t), V(!1), C()
      };
    return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
      window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
    }), [Y]), i.useEffect(() => () => {
      null != W.current && W.current()
    }, []), i.useEffect(() => {
      if (L) return window.addEventListener("mousemove", z), () => window.removeEventListener("mousemove", z)
    }, [z, L]), (0, r.jsx)(b, {
      children: (0, r.jsxs)(l.ModalRoot, {
        onAnimationEnd: Y,
        transitionState: R,
        size: l.ModalSize.MEDIUM,
        children: [M && (0, r.jsx)(o.default, {
          type: m,
          analyticsPage: g,
          analyticsSection: A.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: Z,
          banner: n
        }), (0, r.jsx)(l.ModalHeader, {
          separator: !1,
          children: (0, r.jsx)(l.FormTitle, {
            className: I.titleCase,
            tag: l.FormTitleTags.H1,
            children: h.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, r.jsxs)(l.ModalContent, {
          className: I.modalContent,
          children: [(0, r.jsxs)("div", {
            className: I.editingContainer,
            children: [(0, r.jsx)("img", {
              style: {
                opacity: null == B ? 0 : 1,
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                ...(() => {
                  if (null == B) return {};
                  let e = B.width / B.height,
                    t = q() && e > f.BANNER_ASPECT_RATIO ? S.height / B.height : 1;
                  return {
                    width: B.width * H * t,
                    minWidth: B.width * H * t,
                    height: B.height * H * t
                  }
                })()
              },
              className: G ? I.imageDisabled : I.imageEnabled,
              src: n,
              alt: "avatar",
              ref: F,
              onMouseDown: e => {
                let t = e.clientX - j.current.x,
                  n = e.clientY - j.current.y;
                w({
                  x: t,
                  y: n
                }), y(!0)
              },
              draggable: !1
            }), (0, r.jsx)("div", {
              className: m === f.UploadTypes.AVATAR ? I.overlayAvatar : I.overlayBanner,
              style: {
                opacity: null == B ? 0 : 1,
                width: S.width,
                height: S.height
              }
            })]
          }), (0, r.jsxs)("div", {
            className: I.sliderContainer,
            children: [(0, r.jsx)(c.default, {
              className: I.icon,
              width: 24,
              height: 24
            }), (0, r.jsx)(l.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: e => {
                if (null == B) return;
                let {
                  width: t,
                  height: n
                } = B, r = (0, E.calculateDragBoundaries)(t * e, n * e, S), {
                  x: i,
                  y: l
                } = j.current;
                (!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(l, r.top, r.bottom)) && X(i, l, r), U(e), D(r)
              },
              disabled: G,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": h.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, r.jsx)(c.default, {
              className: I.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, r.jsxs)(l.ModalFooter, {
          className: I.modalFooter,
          children: [p ? (0, r.jsx)(l.Button, {
            className: I.cancelButton,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            size: l.ButtonSizes.SMALL,
            onClick: () => {
              p && (N(n, t), C())
            },
            children: h.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, r.jsxs)("div", {
            className: I.buttonsRight,
            children: [(0, r.jsx)(l.Button, {
              className: I.cancelButton,
              look: l.Button.Looks.LINK,
              color: l.Button.Colors.PRIMARY,
              size: l.ButtonSizes.SMALL,
              onClick: () => {
                if (null != W.current) {
                  W.current(), W.current = null, V(!1);
                  return
                }
                C()
              },
              children: h.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, r.jsx)(l.Button, {
              submitting: G,
              size: l.ButtonSizes.SMALL,
              onClick: Q,
              children: h.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }