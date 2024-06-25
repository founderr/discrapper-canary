n.r(e), n(47120), n(411104);
var r = n(735250),
  i = n(470079),
  a = n(392711),
  s = n(481060),
  l = n(100527),
  u = n(906732),
  c = n(488499),
  o = n(626135),
  h = n(197712),
  d = n(511004),
  A = n(486324),
  g = n(981631),
  E = n(678916),
  m = n(689938),
  p = n(745217);
e.default = t => {
  let {
    file: e,
    imgURI: n,
    transitionState: w,
    allowSkip: C = !1,
    onCrop: f,
    onClose: R,
    uploadType: M = A.pC.AVATAR,
    showUpsellHeader: _ = !1,
    analyticsPage: L
  } = t, [N, v] = i.useState({
    width: 0,
    height: 0
  }), [x, I] = i.useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), [D, y] = i.useState(!1), [O, T] = i.useState(1), [B, b] = i.useState({
    x: 0,
    y: 0
  }), [P, S] = i.useState(null), [V, j] = i.useState(!1), {
    analyticsLocations: G
  } = (0, u.ZP)(l.Z.IMAGE_CROPPING_MODAL), U = i.useRef({
    x: 0,
    y: 0
  }), k = i.useRef(null), H = i.useRef(null), F = "image/gif" === e.type;
  i.useEffect(() => {
    (0, d.Z)()
  }, []), i.useEffect(() => {
    F && _ && o.default.track(g.rMx.OPEN_MODAL, {
      type: g.jXE.CROP_GIF_MODAL,
      location: {
        page: L
      }
    })
  }, [_, L, F]);
  let z = () => {
      switch (M) {
        case A.pC.BANNER:
          return {
            height: A.f, width: A.L0
          };
        case A.pC.VIDEO_BACKGROUND:
          return E.HE;
        case A.pC.AVATAR:
        case A.pC.AVATAR_DECORATION:
          return {
            height: g.dGM, width: g.dGM
          };
        case A.pC.GUILD_BANNER:
          return {
            height: A._T, width: A.X_
          };
        case A.pC.SCHEDULED_EVENT_IMAGE:
          return {
            height: A.xT, width: A.d6
          };
        case A.pC.HOME_HEADER:
          return {
            height: A.Uo, width: A.N8
          }
      }
    },
    Z = i.useCallback((t, e, n) => {
      U.current = (0, h.U$)(t, e, n), null != k.current && (k.current.style.transform = "translate3d(".concat(U.current.x, "px, ").concat(U.current.y, "px, 0)"))
    }, [k]),
    Y = i.useCallback(() => {
      if (null == k.current || O > 1) return;
      let {
        width: t,
        height: e
      } = k.current.getBoundingClientRect(), {
        width: n,
        height: r
      } = (0, h.Es)(M, t, e), i = (0, h.AK)(M, n, r, e);
      S({
        width: n,
        height: r
      }), v(i), I((0, h.kH)(n, r, i))
    }, [M, O]),
    J = i.useCallback(t => {
      let {
        x: e,
        y: n
      } = U.current;
      if (!D || t.clientX === e && t.clientY === n) return;
      let r = t.clientX - B.x;
      Z(r, t.clientY - B.y, x)
    }, [x, D, B, Z]),
    K = () => {
      y(!1)
    },
    X = () => {
      let t = z();
      return t.width !== t.height
    },
    W = async () => {
      let t;
      if (null == k.current) return;
      j(!0);
      let n = k.current,
        r = z();
      if (F) try {
        let {
          result: i,
          cancelFn: a
        } = await (0, h.$p)(e, n, N, U.current, r);
        H.current = a, t = await i, H.current = null
      } catch (t) {
        var i;
        throw null === (i = H.current) || void 0 === i || i.call(H), H.current = null, Error("Error cropping GIF")
      } else t = (0, h.PT)(n, N, U.current, r);
      await f(t, e), j(!1), R()
    };
  return i.useEffect(() => (window.addEventListener("mouseup", K), window.addEventListener("resize", Y), () => {
    window.removeEventListener("mouseup", K), window.removeEventListener("resize", Y)
  }), [Y]), i.useEffect(() => () => {
    null != H.current && H.current()
  }, []), i.useEffect(() => {
    if (D) return window.addEventListener("mousemove", J), () => window.removeEventListener("mousemove", J)
  }, [J, D]), (0, r.jsx)(u.Gt, {
    value: G,
    children: (0, r.jsxs)(s.ModalRoot, {
      onAnimationEnd: Y,
      transitionState: w,
      size: s.ModalSize.MEDIUM,
      children: [_ && (0, r.jsx)(c.Z, {
        type: M,
        analyticsPage: L,
        analyticsSection: g.jXE.CROP_GIF_MODAL,
        isGIF: F,
        banner: n
      }), (0, r.jsx)(s.ModalHeader, {
        separator: !1,
        children: (0, r.jsx)(s.FormTitle, {
          className: p.titleCase,
          tag: s.FormTitleTags.H1,
          children: m.Z.Messages.AVATAR_UPLOAD_EDIT_MEDIA
        })
      }), (0, r.jsxs)(s.ModalContent, {
        className: p.modalContent,
        children: [(0, r.jsxs)("div", {
          className: p.editingContainer,
          children: [(0, r.jsx)("img", {
            style: {
              opacity: null == P ? 0 : 1,
              transform: "translate3d(".concat(U.current.x, "px, ").concat(U.current.y, "px, 0px)"),
              ...(() => {
                if (null == P) return {};
                let t = P.width / P.height,
                  e = X() && t > A.MY ? N.height / P.height : 1;
                return {
                  width: P.width * O * e,
                  minWidth: P.width * O * e,
                  height: P.height * O * e
                }
              })()
            },
            className: V ? p.imageDisabled : p.imageEnabled,
            src: n,
            alt: "avatar",
            ref: k,
            onMouseDown: t => {
              let e = t.clientX - U.current.x;
              b({
                x: e,
                y: t.clientY - U.current.y
              }), y(!0)
            },
            draggable: !1
          }), (0, r.jsx)("div", {
            className: M === A.pC.AVATAR ? p.overlayAvatar : p.overlayBanner,
            style: {
              opacity: null == P ? 0 : 1,
              width: N.width,
              height: N.height
            }
          })]
        }), (0, r.jsxs)("div", {
          className: p.sliderContainer,
          children: [(0, r.jsx)(s.ImageIcon, {
            size: "md",
            color: "currentColor",
            className: p.icon
          }), (0, r.jsx)(s.Slider, {
            initialValue: 1,
            minValue: 1,
            maxValue: 2,
            keyboardStep: .025,
            asValueChanges: t => {
              if (null == P) return;
              let {
                width: e,
                height: n
              } = P, r = (0, h.kH)(e * t, n * t, N), {
                x: i,
                y: s
              } = U.current;
              (!(0, a.inRange)(i, r.right, r.left) || !(0, a.inRange)(s, r.top, r.bottom)) && Z(i, s, r), T(t), I(r)
            },
            disabled: V,
            equidistant: !0,
            hideBubble: !0,
            "aria-label": m.Z.Messages.FORM_LABEL_AVATAR_SIZE
          }), (0, r.jsx)(s.ImageIcon, {
            size: "custom",
            color: "currentColor",
            className: p.icon,
            width: 48,
            height: 48
          })]
        })]
      }), (0, r.jsxs)(s.ModalFooter, {
        className: p.modalFooter,
        children: [C ? (0, r.jsx)(s.Button, {
          className: p.cancelButton,
          look: s.Button.Looks.LINK,
          color: s.Button.Colors.PRIMARY,
          size: s.ButtonSizes.SMALL,
          onClick: () => {
            C && (f(n, e), R())
          },
          children: m.Z.Messages.AVATAR_UPLOAD_SKIP
        }) : null, (0, r.jsxs)("div", {
          className: p.buttonsRight,
          children: [(0, r.jsx)(s.Button, {
            className: p.cancelButton,
            look: s.Button.Looks.LINK,
            color: s.Button.Colors.PRIMARY,
            size: s.ButtonSizes.SMALL,
            onClick: () => {
              if (null != H.current) {
                H.current(), H.current = null, j(!1);
                return
              }
              R()
            },
            children: m.Z.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, r.jsx)(s.Button, {
            submitting: V,
            size: s.ButtonSizes.SMALL,
            onClick: W,
            children: m.Z.Messages.AVATAR_UPLOAD_APPLY
          })]
        })]
      })]
    })
  })
}