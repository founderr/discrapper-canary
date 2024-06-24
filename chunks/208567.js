"use strict";
s.d(t, {
  S: function() {
    return m
  }
}), s(47120);
var n, r = s(735250),
  a = s(470079),
  i = s(120356),
  l = s.n(i),
  o = s(512722),
  c = s.n(o),
  u = s(481060),
  d = s(624138),
  C = s(813197),
  f = s(981631),
  p = s(689938),
  E = s(974695);

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function m(e) {
  let {
    className: t,
    icon: s = null
  } = e;
  return (0, r.jsx)("div", {
    className: l()(E.imageUploaderIcon, t),
    children: s
  })
}
class h extends(n = a.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, s, n, a;
    let {
      image: i,
      hint: o,
      name: c,
      makeURL: g,
      disabled: h,
      onChange: x,
      showIcon: I,
      showIconDisabled: _,
      className: L,
      imageClassName: T,
      iconClassName: S,
      iconWrapperClassName: N,
      icon: b,
      hideSize: v,
      imageStyle: O,
      showRemoveButton: A,
      maxFileSizeBytes: Z,
      onFileSizeError: R,
      onOpenImageSelectModal: j,
      "aria-label": P
    } = this.props;
    if (null != (t = null != i && /^data:/.test(i) ? i : g(i)) ? s = 'url("'.concat(t, '")') : null != c && (n = (0, r.jsx)("div", {
        className: E.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), h) return (0, r.jsx)("div", {
      className: l()(E.imageUploader, E.disabled, L),
      children: (0, r.jsxs)("div", {
        className: l()(E.imageUploaderInner, T),
        style: {
          ...O,
          backgroundImage: s
        },
        children: [n, _ && (0, r.jsx)("div", {
          className: l()(E.imageUploaderIcon, E.imageUploaderIconDisabled, S),
          children: b
        })]
      })
    });
    null != i ? a = (0, r.jsx)(u.Anchor, {
      className: E.removeButton,
      onClick: this.handleRemove,
      children: p.Z.Messages.REMOVE
    }) : !v && (a = (0, r.jsx)("small", {
      className: E.sizeInfo,
      children: p.Z.Messages.MINIMUM_SIZE.format({
        size: f.IXf
      })
    }));
    let M = null !== (e = null != P ? P : o) && void 0 !== e ? e : p.Z.Messages.CHANGE_AVATAR;
    return (0, r.jsxs)("div", {
      className: l()(E.imageUploader, L),
      children: [(0, r.jsx)(u.FocusRing, {
        within: !0,
        children: (0, r.jsxs)("div", {
          className: I ? l()(E.imageUploaderIconWrapper, N) : void 0,
          children: [(0, r.jsxs)("div", {
            className: l()(E.imageUploaderInner, T),
            style: {
              ...O,
              backgroundImage: s
            },
            children: [(0, r.jsx)("span", {
              "aria-hidden": !0,
              children: n
            }), null != j ? (0, r.jsx)(u.Clickable, {
              className: E.imageUploaderFileInput,
              "aria-label": M,
              onClick: j
            }) : (0, r.jsx)(C.ZP, {
              ref: this.inputRef,
              onChange: x,
              className: E.imageUploaderFileInput,
              "aria-label": M,
              tabIndex: 0,
              maxFileSizeBytes: Z,
              onFileSizeError: R
            })]
          }), null != o && (0, r.jsx)("div", {
            className: E.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), I && (0, r.jsx)(m, {
            className: S,
            icon: b
          })]
        })
      }), A ? a : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "inputRef", a.createRef()), g(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
g(h, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), t.Z = h