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
  g = s(974695);

function E(e, t, s) {
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
    className: l()(g.imageUploaderIcon, t),
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
      makeURL: E,
      disabled: h,
      onChange: x,
      showIcon: I,
      showIconDisabled: _,
      className: T,
      imageClassName: L,
      iconClassName: N,
      iconWrapperClassName: S,
      icon: b,
      hideSize: v,
      imageStyle: O,
      showRemoveButton: Z,
      maxFileSizeBytes: A,
      onFileSizeError: R,
      onOpenImageSelectModal: j,
      "aria-label": P
    } = this.props;
    if (null != (t = null != i && /^data:/.test(i) ? i : E(i)) ? s = 'url("'.concat(t, '")') : null != c && (n = (0, r.jsx)("div", {
        className: g.imageUploaderAcronym,
        children: (0, d.Zg)(c)
      })), h) return (0, r.jsx)("div", {
      className: l()(g.imageUploader, g.disabled, T),
      children: (0, r.jsxs)("div", {
        className: l()(g.imageUploaderInner, L),
        style: {
          ...O,
          backgroundImage: s
        },
        children: [n, _ && (0, r.jsx)("div", {
          className: l()(g.imageUploaderIcon, g.imageUploaderIconDisabled, N),
          children: b
        })]
      })
    });
    null != i ? a = (0, r.jsx)(u.Anchor, {
      className: g.removeButton,
      onClick: this.handleRemove,
      children: p.Z.Messages.REMOVE
    }) : !v && (a = (0, r.jsx)("small", {
      className: g.sizeInfo,
      children: p.Z.Messages.MINIMUM_SIZE.format({
        size: f.IXf
      })
    }));
    let M = null !== (e = null != P ? P : o) && void 0 !== e ? e : p.Z.Messages.CHANGE_AVATAR;
    return (0, r.jsxs)("div", {
      className: l()(g.imageUploader, T),
      children: [(0, r.jsx)(u.FocusRing, {
        within: !0,
        children: (0, r.jsxs)("div", {
          className: I ? l()(g.imageUploaderIconWrapper, S) : void 0,
          children: [(0, r.jsxs)("div", {
            className: l()(g.imageUploaderInner, L),
            style: {
              ...O,
              backgroundImage: s
            },
            children: [(0, r.jsx)("span", {
              "aria-hidden": !0,
              children: n
            }), null != j ? (0, r.jsx)(u.Clickable, {
              className: g.imageUploaderFileInput,
              "aria-label": M,
              onClick: j
            }) : (0, r.jsx)(C.ZP, {
              ref: this.inputRef,
              onChange: x,
              className: g.imageUploaderFileInput,
              "aria-label": M,
              tabIndex: 0,
              maxFileSizeBytes: A,
              onFileSizeError: R
            })]
          }), null != o && (0, r.jsx)("div", {
            className: g.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), I && (0, r.jsx)(m, {
            className: N,
            icon: b
          })]
        })
      }), Z ? a : null]
    })
  }
  constructor(...e) {
    super(...e), E(this, "inputRef", a.createRef()), E(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
E(h, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), t.Z = h