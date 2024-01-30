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
  i = n("414456"),
  s = n.n(i),
  r = n("627445"),
  u = n.n(r),
  d = n("77078"),
  o = n("159885"),
  c = n("694187"),
  f = n("49111"),
  E = n("782340"),
  I = n("911686");

function _(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)("div", {
    className: s(I.imageUploaderIcon, t),
    children: n
  })
}
class h extends a.PureComponent {
  handleExternalFileChange(e) {
    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, a, i;
    let {
      image: r,
      hint: u,
      name: h,
      makeURL: T,
      disabled: v,
      onChange: N,
      showIcon: m,
      showIconDisabled: S,
      className: g,
      imageClassName: C,
      iconClassName: p,
      iconWrapperClassName: x,
      icon: L,
      hideSize: O,
      imageStyle: A,
      showRemoveButton: R,
      maxFileSizeBytes: M,
      onFileSizeError: y,
      onOpenImageSelectModal: D,
      "aria-label": U
    } = this.props;
    if (null != (t = null != r && /^data:/.test(r) ? r : T(r)) ? n = 'url("'.concat(t, '")') : null != h && (a = (0, l.jsx)("div", {
        className: I.imageUploaderAcronym,
        children: (0, o.getAcronym)(h)
      })), v) return (0, l.jsx)("div", {
      className: s(I.imageUploader, I.disabled, g),
      children: (0, l.jsxs)("div", {
        className: s(I.imageUploaderInner, C),
        style: {
          ...A,
          backgroundImage: n
        },
        children: [a, S && (0, l.jsx)("div", {
          className: s(I.imageUploaderIcon, I.imageUploaderIconDisabled, p),
          children: L
        })]
      })
    });
    null != r ? i = (0, l.jsx)(d.Anchor, {
      className: I.removeButton,
      onClick: this.handleRemove,
      children: E.default.Messages.REMOVE
    }) : !O && (i = (0, l.jsx)("small", {
      className: I.sizeInfo,
      children: E.default.Messages.MINIMUM_SIZE.format({
        size: f.AVATAR_SIZE
      })
    }));
    let V = null !== (e = null != U ? U : u) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
    return (0, l.jsxs)("div", {
      className: s(I.imageUploader, g),
      children: [(0, l.jsx)(d.FocusRing, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: m ? s(I.imageUploaderIconWrapper, x) : void 0,
          children: [(0, l.jsxs)("div", {
            className: s(I.imageUploaderInner, C),
            style: {
              ...A,
              backgroundImage: n
            },
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: a
            }), null != D ? (0, l.jsx)(d.Clickable, {
              className: I.imageUploaderFileInput,
              "aria-label": V,
              onClick: D
            }) : (0, l.jsx)(c.default, {
              ref: this.inputRef,
              onChange: N,
              className: I.imageUploaderFileInput,
              "aria-label": V,
              tabIndex: 0,
              maxFileSizeBytes: M,
              onFileSizeError: y
            })]
          }), null != u && (0, l.jsx)("div", {
            className: I.imageUploaderHint,
            "aria-hidden": "true",
            children: u
          }), m && (0, l.jsx)(_, {
            className: p,
            icon: L
          })]
        })
      }), R ? i : null]
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