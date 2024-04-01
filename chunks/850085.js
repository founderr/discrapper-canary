"use strict";
a.r(t), a("47120"), a("411104");
var n = a("735250"),
  s = a("470079"),
  l = a("392711"),
  r = a("481060"),
  i = a("100527"),
  u = a("906732"),
  o = a("488499"),
  c = a("84017"),
  d = a("626135"),
  A = a("197712"),
  E = a("511004"),
  f = a("486324"),
  h = a("981631"),
  _ = a("678916"),
  R = a("689938"),
  p = a("491856");
t.default = e => {
  let {
    file: t,
    imgURI: a,
    transitionState: g,
    allowSkip: I = !1,
    onCrop: m,
    onClose: N,
    uploadType: M = f.UploadTypes.AVATAR,
    showUpsellHeader: T = !1,
    analyticsPage: S
  } = e, [L, y] = s.useState({
    width: 0,
    height: 0
  }), [U, x] = s.useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), [B, D] = s.useState(!1), [P, C] = s.useState(1), [v, w] = s.useState({
    x: 0,
    y: 0
  }), [j, b] = s.useState(null), [G, O] = s.useState(!1), {
    analyticsLocations: k
  } = (0, u.default)(i.default.IMAGE_CROPPING_MODAL), V = s.useRef({
    x: 0,
    y: 0
  }), H = s.useRef(null), F = s.useRef(null), z = "image/gif" === t.type;
  s.useEffect(() => {
    (0, E.default)()
  }, []), s.useEffect(() => {
    z && T && d.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: h.AnalyticsSections.CROP_GIF_MODAL,
      location: {
        page: S
      }
    })
  }, [T, S, z]);
  let X = () => {
      switch (M) {
        case f.UploadTypes.BANNER:
          return {
            height: f.USER_BANNER_MAX_HEIGHT, width: f.USER_BANNER_MAX_WIDTH
          };
        case f.UploadTypes.VIDEO_BACKGROUND:
          return _.BACKGROUND_REPLACEMENT_SIZE;
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
    W = s.useCallback((e, t, a) => {
      V.current = (0, A.getBoundedCoordinates)(e, t, a), null != H.current && (H.current.style.transform = "translate3d(".concat(V.current.x, "px, ").concat(V.current.y, "px, 0)"))
    }, [H]),
    K = s.useCallback(() => {
      if (null == H.current || P > 1) return;
      let {
        width: e,
        height: t
      } = H.current.getBoundingClientRect(), {
        width: a,
        height: n
      } = (0, A.adjustImageDimensionsForAspectRatio)(M, e, t), s = (0, A.calculateOverlaySize)(M, a, n, t);
      b({
        width: a,
        height: n
      }), y(s), x((0, A.calculateDragBoundaries)(a, n, s))
    }, [M, P]),
    Y = s.useCallback(e => {
      let {
        x: t,
        y: a
      } = V.current;
      if (!B || e.clientX === t && e.clientY === a) return;
      let n = e.clientX - v.x;
      W(n, e.clientY - v.y, U)
    }, [U, B, v, W]),
    Z = () => {
      D(!1)
    },
    q = () => {
      let e = X();
      return e.width !== e.height
    },
    J = async () => {
      let e;
      if (null == H.current) return;
      O(!0);
      let a = H.current,
        n = X();
      if (z) try {
        let {
          result: s,
          cancelFn: l
        } = await (0, A.cropGIF)(t, a, L, V.current, n);
        F.current = l, e = await s, F.current = null
      } catch (e) {
        var s;
        throw null === (s = F.current) || void 0 === s || s.call(F), F.current = null, Error("Error cropping GIF")
      } else e = (0, A.cropStaticImage)(a, L, V.current, n);
      await m(e, t), O(!1), N()
    };
  return s.useEffect(() => (window.addEventListener("mouseup", Z), window.addEventListener("resize", K), () => {
    window.removeEventListener("mouseup", Z), window.removeEventListener("resize", K)
  }), [K]), s.useEffect(() => () => {
    null != F.current && F.current()
  }, []), s.useEffect(() => {
    if (B) return window.addEventListener("mousemove", Y), () => window.removeEventListener("mousemove", Y)
  }, [Y, B]), (0, n.jsx)(u.AnalyticsLocationProvider, {
    value: k,
    children: (0, n.jsxs)(r.ModalRoot, {
      onAnimationEnd: K,
      transitionState: g,
      size: r.ModalSize.MEDIUM,
      children: [T && (0, n.jsx)(o.default, {
        type: M,
        analyticsPage: S,
        analyticsSection: h.AnalyticsSections.CROP_GIF_MODAL,
        isGIF: z,
        banner: a
      }), (0, n.jsx)(r.ModalHeader, {
        separator: !1,
        children: (0, n.jsx)(r.FormTitle, {
          className: p.titleCase,
          tag: r.FormTitleTags.H1,
          children: R.default.Messages.AVATAR_UPLOAD_EDIT_MEDIA
        })
      }), (0, n.jsxs)(r.ModalContent, {
        className: p.modalContent,
        children: [(0, n.jsxs)("div", {
          className: p.editingContainer,
          children: [(0, n.jsx)("img", {
            style: {
              opacity: null == j ? 0 : 1,
              transform: "translate3d(".concat(V.current.x, "px, ").concat(V.current.y, "px, 0px)"),
              ...(() => {
                if (null == j) return {};
                let e = j.width / j.height,
                  t = q() && e > f.BANNER_ASPECT_RATIO ? L.height / j.height : 1;
                return {
                  width: j.width * P * t,
                  minWidth: j.width * P * t,
                  height: j.height * P * t
                }
              })()
            },
            className: G ? p.imageDisabled : p.imageEnabled,
            src: a,
            alt: "avatar",
            ref: H,
            onMouseDown: e => {
              let t = e.clientX - V.current.x;
              w({
                x: t,
                y: e.clientY - V.current.y
              }), D(!0)
            },
            draggable: !1
          }), (0, n.jsx)("div", {
            className: M === f.UploadTypes.AVATAR ? p.overlayAvatar : p.overlayBanner,
            style: {
              opacity: null == j ? 0 : 1,
              width: L.width,
              height: L.height
            }
          })]
        }), (0, n.jsxs)("div", {
          className: p.sliderContainer,
          children: [(0, n.jsx)(c.default, {
            className: p.icon,
            width: 24,
            height: 24
          }), (0, n.jsx)(r.Slider, {
            initialValue: 1,
            minValue: 1,
            maxValue: 2,
            keyboardStep: .025,
            asValueChanges: e => {
              if (null == j) return;
              let {
                width: t,
                height: a
              } = j, n = (0, A.calculateDragBoundaries)(t * e, a * e, L), {
                x: s,
                y: r
              } = V.current;
              (!(0, l.inRange)(s, n.right, n.left) || !(0, l.inRange)(r, n.top, n.bottom)) && W(s, r, n), C(e), x(n)
            },
            disabled: G,
            equidistant: !0,
            hideBubble: !0,
            "aria-label": R.default.Messages.FORM_LABEL_AVATAR_SIZE
          }), (0, n.jsx)(c.default, {
            className: p.icon,
            width: 48,
            height: 48
          })]
        })]
      }), (0, n.jsxs)(r.ModalFooter, {
        className: p.modalFooter,
        children: [I ? (0, n.jsx)(r.Button, {
          className: p.cancelButton,
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          size: r.ButtonSizes.SMALL,
          onClick: () => {
            I && (m(a, t), N())
          },
          children: R.default.Messages.AVATAR_UPLOAD_SKIP
        }) : null, (0, n.jsxs)("div", {
          className: p.buttonsRight,
          children: [(0, n.jsx)(r.Button, {
            className: p.cancelButton,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            size: r.ButtonSizes.SMALL,
            onClick: () => {
              if (null != F.current) {
                F.current(), F.current = null, O(!1);
                return
              }
              N()
            },
            children: R.default.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, n.jsx)(r.Button, {
            submitting: G,
            size: r.ButtonSizes.SMALL,
            onClick: J,
            children: R.default.Messages.AVATAR_UPLOAD_APPLY
          })]
        })]
      })]
    })
  })
}