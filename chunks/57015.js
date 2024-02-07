"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("70102");
var i = n("37983"),
  r = n("884691"),
  a = n("917351"),
  l = n("77078"),
  s = n("812204"),
  u = n("685665"),
  o = n("652914"),
  c = n("95689"),
  d = n("599110"),
  _ = n("8731"),
  E = n("817295"),
  f = n("75015"),
  h = n("49111"),
  A = n("917219"),
  T = n("782340"),
  I = n("879777"),
  R = e => {
    let {
      file: t,
      imgURI: n,
      transitionState: R,
      allowSkip: p = !1,
      onCrop: m,
      onClose: N,
      uploadType: C = f.UploadTypes.AVATAR,
      showUpsellHeader: g = !1,
      analyticsPage: M
    } = e, [S, w] = r.useState({
      width: 0,
      height: 0
    }), [O, v] = r.useState({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), [D, L] = r.useState(!1), [U, y] = r.useState(1), [P, H] = r.useState({
      x: 0,
      y: 0
    }), [x, G] = r.useState(null), [B, b] = r.useState(!1), {
      AnalyticsLocationProvider: V
    } = (0, u.default)(s.default.IMAGE_CROPPING_MODAL), j = r.useRef({
      x: 0,
      y: 0
    }), W = r.useRef(null), F = r.useRef(null), k = "image/gif" === t.type;
    r.useEffect(() => {
      (0, E.default)()
    }, []), r.useEffect(() => {
      k && g && d.default.track(h.AnalyticEvents.OPEN_MODAL, {
        type: h.AnalyticsSections.CROP_GIF_MODAL,
        location: {
          page: M
        }
      })
    }, [g, M, k]);
    let Z = () => {
        switch (C) {
          case f.UploadTypes.BANNER:
            return {
              height: f.USER_BANNER_MAX_HEIGHT, width: f.USER_BANNER_MAX_WIDTH
            };
          case f.UploadTypes.VIDEO_BACKGROUND:
            return A.BACKGROUND_REPLACEMENT_SIZE;
          case f.UploadTypes.AVATAR:
          case f.UploadTypes.AVATAR_DECORATION:
            return {
              height: h.AVATAR_MAX_SIZE, width: h.AVATAR_MAX_SIZE
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
      z = r.useCallback((e, t, n) => {
        j.current = (0, _.getBoundedCoordinates)(e, t, n), null != W.current && (W.current.style.transform = "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0)"))
      }, [W]),
      X = r.useCallback(() => {
        if (null == W.current || U > 1) return;
        let {
          width: e,
          height: t
        } = W.current.getBoundingClientRect(), {
          width: n,
          height: i
        } = (0, _.adjustImageDimensionsForAspectRatio)(C, e, t), r = (0, _.calculateOverlaySize)(C, n, i, t);
        G({
          width: n,
          height: i
        }), w(r), v((0, _.calculateDragBoundaries)(n, i, r))
      }, [C, U]),
      Y = r.useCallback(e => {
        let {
          x: t,
          y: n
        } = j.current;
        if (!D || e.clientX === t && e.clientY === n) return;
        let i = e.clientX - P.x,
          r = e.clientY - P.y;
        z(i, r, O)
      }, [O, D, P, z]),
      K = () => {
        L(!1)
      },
      q = () => {
        let e = Z();
        return e.width !== e.height
      },
      Q = async () => {
        let e;
        if (null == W.current) return;
        b(!0);
        let n = W.current,
          i = Z();
        if (k) try {
          let {
            result: r,
            cancelFn: a
          } = await (0, _.cropGIF)(t, n, S, j.current, i);
          F.current = a, e = await r, F.current = null
        } catch (e) {
          var r;
          throw null === (r = F.current) || void 0 === r || r.call(F), F.current = null, Error("Error cropping GIF")
        } else e = (0, _.cropStaticImage)(n, S, j.current, i);
        await m(e, t), b(!1), N()
      };
    return r.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", X), () => {
      window.removeEventListener("mouseup", K), window.removeEventListener("resize", X)
    }), [X]), r.useEffect(() => () => {
      null != F.current && F.current()
    }, []), r.useEffect(() => {
      if (D) return window.addEventListener("mousemove", Y), () => window.removeEventListener("mousemove", Y)
    }, [Y, D]), (0, i.jsx)(V, {
      children: (0, i.jsxs)(l.ModalRoot, {
        onAnimationEnd: X,
        transitionState: R,
        size: l.ModalSize.MEDIUM,
        children: [g && (0, i.jsx)(o.default, {
          type: C,
          analyticsPage: M,
          analyticsSection: h.AnalyticsSections.CROP_GIF_MODAL,
          isGIF: k,
          banner: n
        }), (0, i.jsx)(l.ModalHeader, {
          separator: !1,
          children: (0, i.jsx)(l.FormTitle, {
            className: I.titleCase,
            tag: l.FormTitleTags.H1,
            children: T.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
          })
        }), (0, i.jsxs)(l.ModalContent, {
          className: I.modalContent,
          children: [(0, i.jsxs)("div", {
            className: I.editingContainer,
            children: [(0, i.jsx)("img", {
              style: {
                opacity: null == x ? 0 : 1,
                transform: "translate3d(".concat(j.current.x, "px, ").concat(j.current.y, "px, 0px)"),
                ...(() => {
                  if (null == x) return {};
                  let e = x.width / x.height,
                    t = q() && e > f.BANNER_ASPECT_RATIO ? S.height / x.height : 1;
                  return {
                    width: x.width * U * t,
                    minWidth: x.width * U * t,
                    height: x.height * U * t
                  }
                })()
              },
              className: B ? I.imageDisabled : I.imageEnabled,
              src: n,
              alt: "avatar",
              ref: W,
              onMouseDown: e => {
                let t = e.clientX - j.current.x,
                  n = e.clientY - j.current.y;
                H({
                  x: t,
                  y: n
                }), L(!0)
              },
              draggable: !1
            }), (0, i.jsx)("div", {
              className: C === f.UploadTypes.AVATAR ? I.overlayAvatar : I.overlayBanner,
              style: {
                opacity: null == x ? 0 : 1,
                width: S.width,
                height: S.height
              }
            })]
          }), (0, i.jsxs)("div", {
            className: I.sliderContainer,
            children: [(0, i.jsx)(c.default, {
              className: I.icon,
              width: 24,
              height: 24
            }), (0, i.jsx)(l.Slider, {
              initialValue: 1,
              minValue: 1,
              maxValue: 2,
              keyboardStep: .025,
              asValueChanges: e => {
                if (null == x) return;
                let {
                  width: t,
                  height: n
                } = x, i = (0, _.calculateDragBoundaries)(t * e, n * e, S), {
                  x: r,
                  y: l
                } = j.current;
                (!(0, a.inRange)(r, i.right, i.left) || !(0, a.inRange)(l, i.top, i.bottom)) && z(r, l, i), y(e), v(i)
              },
              disabled: B,
              equidistant: !0,
              hideBubble: !0,
              "aria-label": T.default.Messages.FORM_LABEL_AVATAR_SIZE
            }), (0, i.jsx)(c.default, {
              className: I.icon,
              width: 48,
              height: 48
            })]
          })]
        }), (0, i.jsxs)(l.ModalFooter, {
          className: I.modalFooter,
          children: [p ? (0, i.jsx)(l.Button, {
            className: I.cancelButton,
            look: l.Button.Looks.LINK,
            color: l.Button.Colors.PRIMARY,
            size: l.ButtonSizes.SMALL,
            onClick: () => {
              p && (m(n, t), N())
            },
            children: T.default.Messages.AVATAR_UPLOAD_SKIP
          }) : null, (0, i.jsxs)("div", {
            className: I.buttonsRight,
            children: [(0, i.jsx)(l.Button, {
              className: I.cancelButton,
              look: l.Button.Looks.LINK,
              color: l.Button.Colors.PRIMARY,
              size: l.ButtonSizes.SMALL,
              onClick: () => {
                if (null != F.current) {
                  F.current(), F.current = null, b(!1);
                  return
                }
                N()
              },
              children: T.default.Messages.AVATAR_UPLOAD_CANCEL
            }), (0, i.jsx)(l.Button, {
              submitting: B,
              size: l.ButtonSizes.SMALL,
              onClick: Q,
              children: T.default.Messages.AVATAR_UPLOAD_APPLY
            })]
          })]
        })]
      })
    })
  }