"use strict";
l.r(t), l.d(t, {
  ImageUploaderIcon: function() {
    return S
  }
}), l("47120");
var s, a = l("735250"),
  n = l("470079"),
  i = l("120356"),
  r = l.n(i),
  o = l("512722"),
  d = l.n(o),
  u = l("481060"),
  c = l("624138"),
  h = l("813197"),
  m = l("981631"),
  f = l("689938"),
  E = l("484452");

function g(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}

function S(e) {
  let {
    className: t,
    icon: l = null
  } = e;
  return (0, a.jsx)("div", {
    className: r()(E.imageUploaderIcon, t),
    children: l
  })
}
class T extends(s = n.PureComponent) {
  handleExternalFileChange(e) {
    d()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, l, s, n;
    let {
      image: i,
      hint: o,
      name: d,
      makeURL: g,
      disabled: T,
      onChange: N,
      showIcon: p,
      showIconDisabled: C,
      className: _,
      imageClassName: x,
      iconClassName: M,
      iconWrapperClassName: I,
      icon: R,
      hideSize: A,
      imageStyle: O,
      showRemoveButton: L,
      maxFileSizeBytes: v,
      onFileSizeError: j,
      onOpenImageSelectModal: y,
      "aria-label": b
    } = this.props;
    if (null != (t = null != i && /^data:/.test(i) ? i : g(i)) ? l = 'url("'.concat(t, '")') : null != d && (s = (0, a.jsx)("div", {
        className: E.imageUploaderAcronym,
        children: (0, c.getAcronym)(d)
      })), T) return (0, a.jsx)("div", {
      className: r()(E.imageUploader, E.disabled, _),
      children: (0, a.jsxs)("div", {
        className: r()(E.imageUploaderInner, x),
        style: {
          ...O,
          backgroundImage: l
        },
        children: [s, C && (0, a.jsx)("div", {
          className: r()(E.imageUploaderIcon, E.imageUploaderIconDisabled, M),
          children: R
        })]
      })
    });
    null != i ? n = (0, a.jsx)(u.Anchor, {
      className: E.removeButton,
      onClick: this.handleRemove,
      children: f.default.Messages.REMOVE
    }) : !A && (n = (0, a.jsx)("small", {
      className: E.sizeInfo,
      children: f.default.Messages.MINIMUM_SIZE.format({
        size: m.AVATAR_SIZE
      })
    }));
    let D = null !== (e = null != b ? b : o) && void 0 !== e ? e : f.default.Messages.CHANGE_AVATAR;
    return (0, a.jsxs)("div", {
      className: r()(E.imageUploader, _),
      children: [(0, a.jsx)(u.FocusRing, {
        within: !0,
        children: (0, a.jsxs)("div", {
          className: p ? r()(E.imageUploaderIconWrapper, I) : void 0,
          children: [(0, a.jsxs)("div", {
            className: r()(E.imageUploaderInner, x),
            style: {
              ...O,
              backgroundImage: l
            },
            children: [(0, a.jsx)("span", {
              "aria-hidden": !0,
              children: s
            }), null != y ? (0, a.jsx)(u.Clickable, {
              className: E.imageUploaderFileInput,
              "aria-label": D,
              onClick: y
            }) : (0, a.jsx)(h.default, {
              ref: this.inputRef,
              onChange: N,
              className: E.imageUploaderFileInput,
              "aria-label": D,
              tabIndex: 0,
              maxFileSizeBytes: v,
              onFileSizeError: j
            })]
          }), null != o && (0, a.jsx)("div", {
            className: E.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), p && (0, a.jsx)(S, {
            className: M,
            icon: R
          })]
        })
      }), L ? n : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", n.createRef()), g(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
g(T, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), t.default = T