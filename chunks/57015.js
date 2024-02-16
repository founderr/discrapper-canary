"use strict";
n.r(e), n.d(e, {
  default: function() {
    return T
  }
}), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  a = n("917351"),
  s = n("77078"),
  l = n("812204"),
  u = n("685665"),
  o = n("652914"),
  c = n("95689"),
  d = n("599110"),
  f = n("8731"),
  _ = n("817295"),
  h = n("75015"),
  E = n("49111"),
  A = n("917219"),
  p = n("782340"),
  I = n("304379"),
  T = t => {
    let {
      file: e,
      imgURI: n,
      transitionState: T,
      allowSkip: m = !1,
      onCrop: g,
      onClose: R,
      uploadType: N = h.UploadTypes.AVATAR,
      showUpsellHeader: v = !1,
      analyticsPage: C
    } = t, [M, w] = r.useState({
      width: 0,
      height: 0
    }), [S, O] = r.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [D, L] = r.useState(!1), [y, b] = r.useState(1), [P, U] = r.useState({
      x: 0,
      y: 0
    }), [x, H] = r.useState(null), [G, B] = r.useState(!1), {
      AnalyticsLocationProvider: V
    } = (0, u.default)(l.default.IMAGE_CROPPING_MODAL), W = r.useRef({
      x: 0,
      y: 0
    }), F = r.useRef(null), j = r.useRef(null), z = "image/gif" === e.type;
    r.useEffect(() => {
      (0, _.default)()
    }, []), r.useEffect(() => {
      z && v && d.default.track(E.AnalyticEvents.OPEN_MODAL, {
        type: E.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: C
        }
      })
    }, [v, C, z]);
    let k = () => {
        switch (N) {
          case h.UploadTypes.BANNER:
            return {
              height: h.USER_BANNER_MAX_HEIGHT, width: h.USER_BANNER_MAX_WIDTH
            };
          case h.UploadTypes.VIDEO_BACKGROUND:
            return A.BACKGROUND_REPLACEMENT_SIZE;
          case h.UploadTypes.AVATAR:
          case h.UploadTypes.AVATAR_DECORATION:
            return {
              height: E.AVATAR_MAX_SIZE, width: E.AVATAR_MAX_SIZE
            };
          case h.UploadTypes.GUILD_BANNER:
            return {
              height: h.GUILD_BANNER_MAX_HEIGHT, width: h.GUILD_BANNER_MAX_WIDTH
            };
          case h.UploadTypes.SCHEDULED_EVENT_IMAGE:
            return {
              height: h.SCHEDULED_EVENT_IMAGE_MAX_HEIGHT, width: h.SCHEDULED_EVENT_IMAGE_MAX_WIDTH
            };
          case h.UploadTypes.HOME_HEADER:
            return {
              height: h.HOME_HEADER_MAX_HEIGHT, width: h.HOME_HEADER_MAX_WIDTH
            }
        }
      },
      X = r.useCallback((t, e, n) => {
        W.current = (0, f.getBoundedCoordinates)(t, e, n), null != F.current && (F.current.style.transform = "translate3d(".concat(W.current.x, "px, ").concat(W.current.y, "px, 0)"))
      }, [F]),
      Y = r.useCallback(() => {
        if (null == F.current || y > 1) return;
        let {
          width: t,
          height: e
        } = F.current.getBoundingClientRect(), {
          width: n,
          height: i
        } = (0, f.adjustImageDimensionsForAspectRatio)(N, t, e), r = (0, f.calculateOverlaySize)(N, n, i, e);
        H({
          width: n,
          height: i
        }), w(r), O((0, f.calculateDragBoundaries)(n, i, r))
      }, [N, y]),
      Z = r.useCallback(t => {
        let {
          x: e,
          y: n
        } = W.current;
        if (!D || t.clientX === e && t.clientY === n) return;
        let i = t.clientX - P.x,
          r = t.clientY - P.y;
        X(i, r, S)
      }, [S, D, P, X]),
      K = () => {
        L(!1)
      },
      q = () => {
        let t = k();
        return t.width !== t.height
      },
      $ = async () => {
        let t;
        if (null == F.current) return;
        B(!0);
        let n = F.current,
          i = k();
        if (z) try {
          let {
            result: r,
            cancelFn: a
          } = await (0, f.cropGIF)(e, n, M, W.current, i);
          j.current = a, t = await r, j.current = null
        } catch (t) {
          var r;
          throw null === (r = j.current) || void 0 === r || r.call(j), j.current = null, Error("Error cropping GIF")
        } else t = (0, f.cropStaticImage)(n, M, W.current, i);
        await g(t, e), B(!1), R()
      };
    return r.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
      window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
    }), [Y]), r.useEffect(() => () => {
      null != j.current && j.current()
    }, []), r.useEffect(() => {
      if (D) return window.addEventListener("mousemove", Z), () => window.removeEventListener("mousemove", Z)
    }, [Z, D]), (0, i.jsx)(V, {
      children: (0, i.jsxs)(s.ModalRoot, {
        onAnimationEnd: Y,
        transitionState: T,
        size: s.ModalSize.MEDIUM,
        children: [v && (0, i.jsx)(o.default, {
          type: N,
          analyticsPage: C,
          analyticsSection: E.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: z,
          banner: n
        }), (0, i.jsx)(s.ModalHeader, {
          separator: !1,
          children: (0, i.jsx)(s.FormTitle, {
            className: I.titleCase,
            tag: s.FormTitleTags.H1,
            children: p.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, i.jsxs)(s.ModalContent, {
          className: I.modalContent,
          children: [(0, i.jsxs)("div", {
            className: I.editingContainer,
            children: [(0, i.jsx)("img", {
              style: {
                opacity: null == x ? 0 : 1,
                transform: "translate3d(".concat(W.current.x, "px, ").concat(W.current.y, "px, 0px)"),
                ...(() => {
                  if (null == x) return {};
                  let t = x.width / x.height,
                    e = q() && t > h.BANNER_ASPECT_RATIO ? M.height / x.height : 1;
                  return {
                    width: x.width * y * e,
                    minWidth: x.width * y * e,
                    height: x.height * y * e
                  }
                })()
              },
              className: G ? I.imageDisabled : I.imageEnabled,
              src: n,
              alt: "avatar",
              ref: F,
              onMouseDown: t => {
                let e = t.clientX - W.current.x,
                  n = t.clientY - W.current.y;
                U({
                  x: e,
                  y: n
                }), L(!0)
              },
              draggable: !1
            }), (0, i.jsx)("div", {
              className: N === h.UploadTypes.AVATAR ? I.overlayAvatar : I.overlayBanner,
              style: {
                opacity: null == x ? 0 : 1,
                width: M.width,
                height: M.height
              }
            })]
          }), (0, i.jsxs)("div", {
            className: I.sliderContainer,
            children: [(0, i.jsx)(c.default, {
              className: I.icon,
              width: 24,
              height: 24
            }), (0, i.jsx)(s.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: t => {
                if (null == x) return;
                let {
                  width: e,
                  height: n
                } = x, i = (0, f.calculateDragBoundaries)(e * t, n * t, M), {
                  x: r,
                  y: s
                } = W.current;
                (!(0, a.inRange)(r, i.right, i.left) || !(0, a.inRange)(s, i.top, i.bottom)) && X(r, s, i), b(t), O(i)
              },
              disabled: G,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": p.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, i.jsx)(c.default, {
              className: I.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, i.jsxs)(s.ModalFooter, {
          className: I.modalFooter,
          children: [m ? (0, i.jsx)(s.Button, {
            className: I.cancelButton,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.PRIMARY,
            size: s.ButtonSizes.SMALL,
            onClick: () => {
              m && (g(n, e), R())
            },
            children: p.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, i.jsxs)("div", {
            className: I.buttonsRight,
            children: [(0, i.jsx)(s.Button, {
              className: I.cancelButton,
              look: s.Button.Looks.LINK,
              color: s.Button.Colors.PRIMARY,
              size: s.ButtonSizes.SMALL,
              onClick: () => {
                if (null != j.current) {
                  j.current(), j.current = null, B(!1);
                  return
                }
                R()
              },
              children: p.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, i.jsx)(s.Button, {
              submitting: G,
              size: s.ButtonSizes.SMALL,
              onClick: $,
              children: p.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }