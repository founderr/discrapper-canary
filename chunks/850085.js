n.r(t), n(47120), n(411104);
var r = n(735250),
  i = n(470079),
  s = n(392711),
  a = n(481060),
  l = n(100527),
  o = n(906732),
  c = n(488499),
  u = n(626135),
  d = n(197712),
  h = n(511004),
  A = n(486324),
  E = n(981631),
  g = n(678916),
  m = n(689938),
  R = n(745217);
t.default = e => {
  let {
    file: t,
    imgURI: n,
    transitionState: f,
    allowSkip: _ = !1,
    onCrop: N,
    onClose: I,
    uploadType: M = A.pC.AVATAR,
    showUpsellHeader: x = !1,
    analyticsPage: L
  } = e, [C, p] = i.useState({
    width: 0,
    height: 0
  }), [P, Z] = i.useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }), [S, v] = i.useState(!1), [w, j] = i.useState(1), [B, T] = i.useState({
    x: 0,
    y: 0
  }), [y, D] = i.useState(null), [b, U] = i.useState(!1), {
    analyticsLocations: k
  } = (0, o.ZP)(l.Z.IMAGE_CROPPING_MODAL), O = i.useRef({
    x: 0,
    y: 0
  }), V = i.useRef(null), z = i.useRef(null), G = "image/gif" === t.type;
  i.useEffect(() => {
    (0, h.Z)()
  }, []), i.useEffect(() => {
    G && x && u.default.track(E.rMx.OPEN_MODAL, {
      type: E.jXE.CROP_GIF_MODAL,
      location: {
        page: L
      }
    })
  }, [x, L, G]);
  let F = () => {
      switch (M) {
        case A.pC.BANNER:
          return {
            height: A.f, width: A.L0
          };
        case A.pC.VIDEO_BACKGROUND:
          return g.HE;
        case A.pC.AVATAR:
        case A.pC.AVATAR_DECORATION:
          return {
            height: E.dGM, width: E.dGM
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
    H = i.useCallback((e, t, n) => {
      O.current = (0, d.U$)(e, t, n), null != V.current && (V.current.style.transform = "translate3d(".concat(O.current.x, "px, ").concat(O.current.y, "px, 0)"))
    }, [V]),
    K = i.useCallback(() => {
      if (null == V.current || w > 1) return;
      let {
        width: e,
        height: t
      } = V.current.getBoundingClientRect(), {
        width: n,
        height: r
      } = (0, d.Es)(M, e, t), i = (0, d.AK)(M, n, r, t);
      D({
        width: n,
        height: r
      }), p(i), Z((0, d.kH)(n, r, i))
    }, [M, w]),
    W = i.useCallback(e => {
      let {
        x: t,
        y: n
      } = O.current;
      if (!S || e.clientX === t && e.clientY === n) return;
      let r = e.clientX - B.x;
      H(r, e.clientY - B.y, P)
    }, [P, S, B, H]),
    X = () => {
      v(!1)
    },
    Y = () => {
      let e = F();
      return e.width !== e.height
    },
    q = async () => {
      let e;
      if (null == V.current) return;
      U(!0);
      let n = V.current,
        r = F();
      if (G) try {
        let {
          result: i,
          cancelFn: s
        } = await (0, d.$p)(t, n, C, O.current, r);
        z.current = s, e = await i, z.current = null
      } catch (e) {
        var i;
        throw null === (i = z.current) || void 0 === i || i.call(z), z.current = null, Error("Error cropping GIF")
      } else e = (0, d.PT)(n, C, O.current, r);
      await N(e, t), U(!1), I()
    };
  return i.useEffect(() => (window.addEventListener("mouseup", X), window.addEventListener("resize", K), () => {
    window.removeEventListener("mouseup", X), window.removeEventListener("resize", K)
  }), [K]), i.useEffect(() => () => {
    null != z.current && z.current()
  }, []), i.useEffect(() => {
    if (S) return window.addEventListener("mousemove", W), () => window.removeEventListener("mousemove", W)
  }, [W, S]), (0, r.jsx)(o.Gt, {
    value: k,
    children: (0, r.jsxs)(a.ModalRoot, {
      onAnimationEnd: K,
      transitionState: f,
      size: a.ModalSize.MEDIUM,
      children: [x && (0, r.jsx)(c.Z, {
        type: M,
        analyticsPage: L,
        analyticsSection: E.jXE.CROP_GIF_MODAL,
        isGIF: G,
        banner: n
      }), (0, r.jsx)(a.ModalHeader, {
        separator: !1,
        children: (0, r.jsx)(a.FormTitle, {
          className: R.titleCase,
          tag: a.FormTitleTags.H1,
          children: m.Z.Messages.AVATAR_UPLOAD_EDIT_MEDIA
        })
      }), (0, r.jsxs)(a.ModalContent, {
        className: R.modalContent,
        children: [(0, r.jsxs)("div", {
          className: R.editingContainer,
          children: [(0, r.jsx)("img", {
            style: {
              opacity: null == y ? 0 : 1,
              transform: "translate3d(".concat(O.current.x, "px, ").concat(O.current.y, "px, 0px)"),
              ...(() => {
                if (null == y) return {};
                let e = y.width / y.height,
                  t = Y() && e > A.MY ? C.height / y.height : 1;
                return {
                  width: y.width * w * t,
                  minWidth: y.width * w * t,
                  height: y.height * w * t
                }
              })()
            },
            className: b ? R.imageDisabled : R.imageEnabled,
            src: n,
            alt: "avatar",
            ref: V,
            onMouseDown: e => {
              let t = e.clientX - O.current.x;
              T({
                x: t,
                y: e.clientY - O.current.y
              }), v(!0)
            },
            draggable: !1
          }), (0, r.jsx)("div", {
            className: M === A.pC.AVATAR ? R.overlayAvatar : R.overlayBanner,
            style: {
              opacity: null == y ? 0 : 1,
              width: C.width,
              height: C.height
            }
          })]
        }), (0, r.jsxs)("div", {
          className: R.sliderContainer,
          children: [(0, r.jsx)(a.ImageIcon, {
            size: "md",
            color: "currentColor",
            className: R.icon
          }), (0, r.jsx)(a.Slider, {
            initialValue: 1,
            minValue: 1,
            maxValue: 2,
            keyboardStep: .025,
            asValueChanges: e => {
              if (null == y) return;
              let {
                width: t,
                height: n
              } = y, r = (0, d.kH)(t * e, n * e, C), {
                x: i,
                y: a
              } = O.current;
              (!(0, s.inRange)(i, r.right, r.left) || !(0, s.inRange)(a, r.top, r.bottom)) && H(i, a, r), j(e), Z(r)
            },
            disabled: b,
            equidistant: !0,
            hideBubble: !0,
            "aria-label": m.Z.Messages.FORM_LABEL_AVATAR_SIZE
          }), (0, r.jsx)(a.ImageIcon, {
            size: "custom",
            color: "currentColor",
            className: R.icon,
            width: 48,
            height: 48
          })]
        })]
      }), (0, r.jsxs)(a.ModalFooter, {
        className: R.modalFooter,
        children: [_ ? (0, r.jsx)(a.Button, {
          className: R.cancelButton,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          size: a.ButtonSizes.SMALL,
          onClick: () => {
            _ && (N(n, t), I())
          },
          children: m.Z.Messages.AVATAR_UPLOAD_SKIP
        }) : null, (0, r.jsxs)("div", {
          className: R.buttonsRight,
          children: [(0, r.jsx)(a.Button, {
            className: R.cancelButton,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.PRIMARY,
            size: a.ButtonSizes.SMALL,
            onClick: () => {
              if (null != z.current) {
                z.current(), z.current = null, U(!1);
                return
              }
              I()
            },
            children: m.Z.Messages.AVATAR_UPLOAD_CANCEL
          }), (0, r.jsx)(a.Button, {
            submitting: b,
            size: a.ButtonSizes.SMALL,
            onClick: q,
            children: m.Z.Messages.AVATAR_UPLOAD_APPLY
          })]
        })]
      })]
    })
  })
}