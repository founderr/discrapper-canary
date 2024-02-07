"use strict";
t.r(A), t.d(A, {
  default: function() {
    return h
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  s = t.n(n),
  r = t("77078"),
  i = t("694187"),
  o = t("818643"),
  d = t("987772"),
  u = t("228220"),
  c = t("782340"),
  f = t("610828");
let g = "custom-image",
  C = l.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: l,
      disabled: n = !1,
      name: i,
      alt: o,
      data: d
    } = e, u = i === t, c = (0, r.useRadioItem)({
      isSelected: u,
      label: o
    }), g = n ? void 0 : () => {
      l(d, i)
    };
    return (0, a.jsx)(r.Clickable, {
      ref: A,
      className: s(f.radioOption, {
        [f.selected]: u,
        [f.disabled]: n
      }),
      onClick: g,
      "aria-disabled": n,
      ...c,
      children: (0, a.jsx)("img", {
        src: d,
        alt: o,
        className: f.radioOptionImage
      })
    })
  });

function h(e) {
  let {
    presetImages: A,
    image: t,
    imageName: n,
    savedImageName: h,
    onChange: T,
    uploadButtonLabel: m = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: U = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: p = !1
  } = e, I = n === g, [v, E] = l.useState(I ? t : null), [q, D] = l.useState(null), N = l.useRef(null), O = l.useRef(null);
  l.useEffect(() => {
    h !== g && (E(null), D(null))
  }, [h]);
  let L = null != q ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: q
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    R = (0, r.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: p
    }),
    x = () => {
      var e;
      return null === (e = N.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      n === g && T(A[0].data, A[0].name), E(null), D(null)
    };
  return l.useEffect(() => {
    if (I && null != q) {
      var e, A;
      null === (A = O.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus()
    }
  }, [I, q]), (0, a.jsxs)("div", {
    className: f.imageSelectionContainer,
    children: [(0, a.jsx)(r.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: s(f.uploadButton, {
          [f.disabled]: p,
          [f.hidden]: null != v
        }),
        "aria-disabled": p,
        children: [(0, a.jsx)(o.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(r.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: m
        }), (0, a.jsx)(i.default, {
          ref: N,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (D(A.name), E(e), T(e, g))
          },
          "aria-label": m
        })]
      })
    }), null != v && (0, a.jsxs)("div", {
      className: f.customImageActionContainer,
      children: [(0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: f.customImageAction,
          onClick: x,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(d.default, {
            className: f.editIcon
          })
        })
      }), (0, a.jsx)(r.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(r.Clickable, {
          ...e,
          className: f.customImageAction,
          onClick: P,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(u.default, {
            className: f.deleteIcon
          })
        })
      })]
    }), (0, a.jsxs)("div", {
      "aria-label": U,
      ...R,
      className: f.radioGroup,
      children: [null != v && (0, a.jsx)(C, {
        ref: O,
        selectedImageName: n,
        onChange: T,
        disabled: p,
        name: g,
        alt: L,
        data: v
      }), A.map(e => (0, a.jsx)(C, {
        selectedImageName: n,
        onChange: T,
        disabled: p,
        ...e
      }, e.name))]
    })]
  })
}