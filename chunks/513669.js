"use strict";
t.r(A), t.d(A, {
  default: function() {
    return T
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  n = t.n(s),
  r = t("481060"),
  o = t("813197"),
  i = t("54264"),
  d = t("185403"),
  u = t("740727"),
  c = t("689938"),
  C = t("42258");
let f = "custom-image",
  g = l.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: l,
      disabled: s = !1,
      name: o,
      alt: i,
      data: d
    } = e, u = o === t, c = (0, r.useRadioItem)({
      isSelected: u,
      label: i
    }), f = s ? void 0 : () => {
      l(d, o)
    };
    return (0, a.jsx)(r.Clickable, {
      ref: A,
      className: n()(C.radioOption, {
        [C.selected]: u,
        [C.disabled]: s
      }),
      onClick: f,
      "aria-disabled": s,
      ...c,
      children: (0, a.jsx)("img", {
        src: d,
        alt: i,
        className: C.radioOptionImage
      })
    })
  });

function T(e) {
  let {
    presetImages: A,
    image: t,
    imageName: s,
    savedImageName: T,
    onChange: U,
    uploadButtonLabel: h = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: m = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: I = !1
  } = e, v = s === f, [p, E] = l.useState(v ? t : null), [q, N] = l.useState(null), R = l.useRef(null), L = l.useRef(null);
  l.useEffect(() => {
    T !== f && (E(null), N(null))
  }, [T]);
  let O = null != q ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: q
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    x = (0, r.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: I
    }),
    D = () => {
      var e;
      return null === (e = R.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      s === f && U(A[0].data, A[0].name), E(null), N(null)
    };
  return l.useEffect(() => {
    if (v && null != q) {
      var e, A;
      null === (A = L.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus()
    }
  }, [v, q]), (0, a.jsxs)("div", {
    className: C.imageSelectionContainer,
    children: [(0, a.jsx)(r.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: n()(C.uploadButton, {
          [C.disabled]: I,
          [C.hidden]: null != p
        }),
        "aria-disabled": I,
        children: [(0, a.jsx)(i.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: h
        }), (0, a.jsx)(o.default, {
          ref: R,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (N(A.name), E(e), U(e, f))
          },
          "aria-label": h
        })]
      })
    }), null != p && (0, a.jsxs)("div", {
      className: C.customImageActionContainer,
      children: [(0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: C.customImageAction,
          onClick: D,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(d.default, {
            className: C.editIcon
          })
        })
      }), (0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: C.customImageAction,
          onClick: P,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(u.default, {
            className: C.deleteIcon
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      "aria-label": m,
      ...x,
      className: C.radioGroup,
      children: [null != p && (0, a.jsx)(g, {
        ref: L,
        selectedImageName: s,
        onChange: U,
        disabled: I,
        name: f,
        alt: O,
        data: p
      }), A.map(e => (0, a.jsx)(g, {
        selectedImageName: s,
        onChange: U,
        disabled: I,
        ...e
      }, e.name))]
    })]
  })
}