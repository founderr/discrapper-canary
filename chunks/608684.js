"use strict";
n.r(t), n.d(t, {
  ImageUploaderIcon: function() {
    return _
  },
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("627445"),
  u = n.n(r),
  d = n("77078"),
  o = n("159885"),
  c = n("694187"),
  E = n("49111"),
  f = n("782340"),
  I = n("911686");

function _(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)("div", {
    className: i(I.imageUploaderIcon, t),
    children: n
  })
}
class h extends a.PureComponent {
  handleExternalFileChange(e) {
    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, a, s;
    let {
      image: r,
      hint: u,
      name: h,
      makeURL: T,
      disabled: v,
      onChange: N,
      showIcon: S,
      showIconDisabled: m,
      className: g,
      imageClassName: C,
      iconClassName: x,
      iconWrapperClassName: p,
      icon: A,
      hideSize: R,
      imageStyle: L,
      showRemoveButton: M,
      maxFileSizeBytes: O,
      onFileSizeError: D,
      onOpenImageSelectModal: y,
      "aria-label": j
    } = this.props;
    if (null != (t = null != r && /^data:/.test(r) ? r : T(r)) ? n = 'url("'.concat(t, '")') : null != h && (a = (0, l.jsx)("div", {
        className: I.imageUploaderAcronym,
        children: (0, o.getAcronym)(h)
      })), v) return (0, l.jsx)("div", {
      className: i(I.imageUploader, I.disabled, g),
      children: (0, l.jsxs)("div", {
        className: i(I.imageUploaderInner, C),
        style: {
          ...L,
          backgroundImage: n
        },
        children: [a, m && (0, l.jsx)("div", {
          className: i(I.imageUploaderIcon, I.imageUploaderIconDisabled, x),
          children: A
        })]
      })
    });
    null != r ? s = (0, l.jsx)(d.Anchor, {
      className: I.removeButton,
      onClick: this.handleRemove,
      children: f.default.Messages.REMOVE
    }) : !R && (s = (0, l.jsx)("small", {
      className: I.sizeInfo,
      children: f.default.Messages.MINIMUM_SIZE.format({
        size: E.AVATAR_SIZE
      })
    }));
    let V = null !== (e = null != j ? j : u) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
    return (0, l.jsxs)("div", {
      className: i(I.imageUploader, g),
      children: [(0, l.jsx)(d.FocusRing, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: S ? i(I.imageUploaderIconWrapper, p) : void 0,
          children: [(0, l.jsxs)("div", {
            className: i(I.imageUploaderInner, C),
            style: {
              ...L,
              backgroundImage: n
            },
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: a
            }), null != y ? (0, l.jsx)(d.Clickable, {
              className: I.imageUploaderFileInput,
              "aria-label": V,
              onClick: y
            }) : (0, l.jsx)(c.default, {
              ref: this.inputRef,
              onChange: N,
              className: I.imageUploaderFileInput,
              "aria-label": V,
              tabIndex: 0,
              maxFileSizeBytes: O,
              onFileSizeError: D
            })]
          }), null != u && (0, l.jsx)("div", {
            className: I.imageUploaderHint,
            "aria-hidden": "true",
            children: u
          }), S && (0, l.jsx)(_, {
            className: x,
            icon: A
          })]
        })
      }), M ? s : null]
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = a.createRef(), this.handleRemove = () => {
      this.props.onChange(null)
    }
  }
}
h.defaultProps = {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
};
var T = h