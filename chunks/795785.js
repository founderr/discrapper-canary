"use strict";
t.r(A), t.d(A, {
  default: function() {
    return T
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  r = t.n(n),
  s = t("77078"),
  o = t("694187"),
  i = t("818643"),
  d = t("987772"),
  u = t("228220"),
  c = t("782340"),
  f = t("610828");
let C = "custom-image",
  g = l.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: l,
      disabled: n = !1,
      name: o,
      alt: i,
      data: d
    } = e, u = o === t, c = (0, s.useRadioItem)({
      isSelected: u,
      label: i
    }), C = n ? void 0 : () => {
      l(d, o)
    };
    return (0, a.jsx)(s.Clickable, {
      ref: A,
      className: r(f.radioOption, {
        [f.selected]: u,
        [f.disabled]: n
      }),
      onClick: C,
      "aria-disabled": n,
      ...c,
      children: (0, a.jsx)("img", {
        src: d,
        alt: i,
        className: f.radioOptionImage
      })
    })
  });

function T(e) {
  let {
    presetImages: A,
    image: t,
    imageName: n,
    savedImageName: T,
    onChange: h,
    uploadButtonLabel: m = c.default.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: U = c.default.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: I = !1
  } = e, p = n === C, [v, E] = l.useState(p ? t : null), [q, N] = l.useState(null), O = l.useRef(null), x = l.useRef(null);
  l.useEffect(() => {
    T !== C && (E(null), N(null))
  }, [T]);
  let R = null != q ? c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: q
    }) : c.default.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    L = (0, s.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: I
    }),
    D = () => {
      var e;
      return null === (e = O.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    P = () => {
      n === C && h(A[0].data, A[0].name), E(null), N(null)
    };
  return l.useEffect(() => {
    if (p && null != q) {
      var e, A;
      null === (A = x.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus()
    }
  }, [p, q]), (0, a.jsxs)("div", {
    className: f.imageSelectionContainer,
    children: [(0, a.jsx)(s.FocusRing, {
      within: !0,
      children: (0, a.jsxs)("div", {
        className: r(f.uploadButton, {
          [f.disabled]: I,
          [f.hidden]: null != v
        }),
        "aria-disabled": I,
        children: [(0, a.jsx)(i.default, {
          width: 16,
          height: 16,
          color: "currentColor",
          "aria-hidden": !0
        }), (0, a.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: m
        }), (0, a.jsx)(o.default, {
          ref: O,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (N(A.name), E(e), h(e, C))
          },
          "aria-label": m
        })]
      })
    }), null != v && (0, a.jsxs)("div", {
      className: f.customImageActionContainer,
      children: [(0, a.jsx)(s.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(s.Clickable, {
          ...e,
          className: f.customImageAction,
          onClick: D,
          "aria-label": c.default.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: q
          }),
          children: (0, a.jsx)(d.default, {
            className: f.editIcon
          })
        })
      }), (0, a.jsx)(s.Tooltip, {
        text: c.default.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, a.jsx)(s.Clickable, {
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
      ...L,
      className: f.radioGroup,
      children: [null != v && (0, a.jsx)(g, {
        ref: x,
        selectedImageName: n,
        onChange: h,
        disabled: I,
        name: C,
        alt: R,
        data: v
      }), A.map(e => (0, a.jsx)(g, {
        selectedImageName: n,
        onChange: h,
        disabled: I,
        ...e
      }, e.name))]
    })]
  })
}