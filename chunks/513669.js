t.d(A, {
  Z: function() {
    return C
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  s = t(120356),
  r = t.n(s),
  l = t(481060),
  o = t(813197),
  i = t(689938),
  d = t(713774);
let c = "custom-image",
  u = a.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: a,
      disabled: s = !1,
      name: o,
      alt: i,
      data: c
    } = e, u = o === t, C = (0, l.useRadioItem)({
      isSelected: u,
      label: i
    }), g = s ? void 0 : () => {
      a(c, o)
    };
    return (0, n.jsx)(l.Clickable, {
      ref: A,
      className: r()(d.radioOption, {
        [d.selected]: u,
        [d.disabled]: s
      }),
      onClick: g,
      "aria-disabled": s,
      ...C,
      children: (0, n.jsx)("img", {
        src: c,
        alt: i,
        className: d.radioOptionImage
      })
    })
  });

function C(e) {
  let {
    presetImages: A,
    image: t,
    imageName: s,
    savedImageName: C,
    onChange: g,
    uploadButtonLabel: T = i.Z.Messages.UPLOAD_IMAGE,
    radioGroupAriaLabel: U = i.Z.Messages.CUSTOM_IMAGE_SELECTOR_RADIO_GROUP_ARIA_LABEL,
    disabled: m = !1
  } = e, I = s === c, [h, p] = a.useState(I ? t : null), [v, q] = a.useState(null), f = a.useRef(null), E = a.useRef(null);
  a.useEffect(() => {
    C !== c && (p(null), q(null))
  }, [C]);
  let N = null != v ? i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE_WITH_FILENAME.format({
      filename: v
    }) : i.Z.Messages.CUSTOM_IMAGE_SELECTOR_YOUR_CUSTOM_IMAGE,
    O = (0, l.useRadioGroup)({
      orientation: "horizontal",
      isDisabled: m
    }),
    D = () => {
      var e;
      return null === (e = f.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
    },
    R = () => {
      s === c && g(A[0].data, A[0].name), p(null), q(null)
    };
  return a.useEffect(() => {
    if (I && null != v) {
      var e, A;
      null === (A = E.current) || void 0 === A || null === (e = A.ref) || void 0 === e || e.focus()
    }
  }, [I, v]), (0, n.jsxs)("div", {
    className: d.imageSelectionContainer,
    children: [(0, n.jsx)(l.FocusRing, {
      within: !0,
      children: (0, n.jsxs)("div", {
        className: r()(d.uploadButton, {
          [d.disabled]: m,
          [d.hidden]: null != h
        }),
        "aria-disabled": m,
        children: [(0, n.jsx)(l.ImagePlusIcon, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": !0
        }), (0, n.jsx)(l.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": !0,
          children: T
        }), (0, n.jsx)(o.ZP, {
          ref: f,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (q(A.name), p(e), g(e, c))
          },
          "aria-label": T
        })]
      })
    }), null != h && (0, n.jsxs)("div", {
      className: d.customImageActionContainer,
      children: [(0, n.jsx)(l.Tooltip, {
        text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, n.jsx)(l.Clickable, {
          ...e,
          className: d.customImageAction,
          onClick: D,
          "aria-label": i.Z.Messages.CUSTOM_IMAGE_SELECTOR_EDIT_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: v
          }),
          children: (0, n.jsx)(l.PencilIcon, {
            size: "xs",
            color: "currentColor",
            className: d.editIcon
          })
        })
      }), (0, n.jsx)(l.Tooltip, {
        text: i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_IMAGE_TOOLTIP,
        hideOnClick: !0,
        children: e => (0, n.jsx)(l.Clickable, {
          ...e,
          className: d.customImageAction,
          onClick: R,
          "aria-label": i.Z.Messages.CUSTOM_IMAGE_SELECTOR_DELETE_CUSTOM_IMAGE_ARIA_LABEL.format({
            filename: v
          }),
          children: (0, n.jsx)(l.TrashIcon, {
            size: "md",
            color: "currentColor",
            className: d.deleteIcon
          })
        })
      })]
    }), (0, n.jsxs)("div", {
      "aria-label": U,
      ...O,
      className: d.radioGroup,
      children: [null != h && (0, n.jsx)(u, {
        ref: E,
        selectedImageName: s,
        onChange: g,
        disabled: m,
        name: c,
        alt: N,
        data: h
      }), A.map(e => (0, n.jsx)(u, {
        selectedImageName: s,
        onChange: g,
        disabled: m,
        ...e
      }, e.name))]
    })]
  })
}