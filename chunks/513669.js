"use strict";
t.r(A), t.d(A, {
  default: function() {
    return h
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("481060"),
  i = t("813197"),
  o = t("54264"),
  d = t("185403"),
  u = t("740727"),
  c = t("689938"),
  g = t("42258");
let f = "custom-image",
  C = l.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: l,
      disabled: s = !1,
      name: i,
      alt: o,
      data: d
    } = e, u = i === t, c = (0, n.useRadioItem)({
      isSelected: u,
      label: o
    }), f = s ? void 0 : () => {
      l(d, i)
    };
    return (0, a.jsx)(n.Clickable, {
      ref: A,
      className: r()(g.radioOption, {
        [g.selected]: u,
        [g.disabled]: s
      }),
      onClick: f,
      "aria-disabled": s,
      ...c,
      children: (0, a.jsx)("img", {
        src: d,
        alt: o,
        className: g.radioOptionImage
      })
    })
  });

function h(e) {
  let {
    presetImages: A,
    image: t,
    imageName: s,
    savedImageName: h,
    onChange: T,
    uploadButtonLabel: U = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: p = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: m = !1
  } = e, I = s === f, [v, E] = l.useState(I ? t : null), [q, D] = l.useState(null), N = l.useRef(null), O = l.useRef(null);
  l.useEffect(() => {
    h !== f && (E(null), D(null))
  }, [h]);
  let L = null != q ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: q
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    R = (0, n.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: m
    }),
    x = () => {
      var e;
      return null === (e = N.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      s === f && T(A[0].data, A[0].name), E(null), D(null)
    };
  return l.useEffect(() => {
    if (I && null != q) {
      var e, A;
      null === (A = O.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus()
    }
  }, [I, q]), (0, a.jsxs)("div", {
    className: g.imageSelectionContainer,
    children: [(0, a.jsx)(n.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: r()(g.uploadButton, {
          [g.disabled]: m,
          [g.hidden]: null != v
        }),
        "aria-disabled": m,
        children: [(0, a.jsx)(o.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(n.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: U
        }), (0, a.jsx)(i.default, {
          ref: N,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (D(A.name), E(e), T(e, f))
          },
          "aria-label": U
        })]
      })
    }), null != v && (0, a.jsxs)("div", {
      className: g.customImageActionContainer,
      children: [(0, a.jsx)(n.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(n.Clickable, {
          ...e,
          className: g.customImageAction,
          onClick: x,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(d.default, {
            className: g.editIcon
          })
        })
      }), (0, a.jsx)(n.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(n.Clickable, {
          ...e,
          className: g.customImageAction,
          onClick: P,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(u.default, {
            className: g.deleteIcon
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      "aria-label": p,
      ...R,
      className: g.radioGroup,
      children: [null != v && (0, a.jsx)(C, {
        ref: O,
        selectedImageName: s,
        onChange: T,
        disabled: m,
        name: f,
        alt: L,
        data: v
      }), A.map(e => (0, a.jsx)(C, {
        selectedImageName: s,
        onChange: T,
        disabled: m,
        ...e
      }, e.name))]
    })]
  })
}