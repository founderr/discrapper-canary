"use strict";
l.r(a), l.d(a, {
  ImageUploaderIcon: function() {
    return h
  },
  default: function() {
    return g
  }
}), l("222007");
var t = l("37983"),
  i = l("884691"),
  n = l("414456"),
  r = l.n(n),
  s = l("627445"),
  o = l.n(s),
  u = l("77078"),
  d = l("159885"),
  c = l("694187"),
  f = l("49111"),
  m = l("782340"),
  v = l("574448");

function h(e) {
  let {
    className: a,
    icon: l = null
  } = e;
  return (0, t.jsx)("div", {
    className: r(v.imageUploaderIcon, a),
    children: l
  })
}
class p extends i.PureComponent {
  handleExternalFileChange(e) {
    o(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let a, l, i, n;
    let {
      image: s,
      hint: o,
      name: p,
      makeURL: g,
      disabled: I,
      onChange: x,
      showIcon: S,
      showIconDisabled: A,
      className: U,
      imageClassName: N,
      iconClassName: E,
      iconWrapperClassName: T,
      icon: j,
      hideSize: y,
      imageStyle: C,
      showRemoveButton: P,
      maxFileSizeBytes: b,
      onFileSizeError: M,
      onOpenImageSelectModal: R,
      "aria-label": _
    } = this.props;
    if (null != (a = null != s && /^data:/.test(s) ? s : g(s)) ? l = 'url("'.concat(a, '")') : null != p && (i = (0, t.jsx)("div", {
        className: v.imageUploaderAcronym,
        children: (0, d.getAcronym)(p)
      })), I) return (0, t.jsx)("div", {
      className: r(v.imageUploader, v.disabled, U),
      children: (0, t.jsxs)("div", {
        className: r(v.imageUploaderInner, N),
        style: {
          ...C,
          backgroundImage: l
        },
        children: [i, A && (0, t.jsx)("div", {
          className: r(v.imageUploaderIcon, v.imageUploaderIconDisabled, E),
          children: j
        })]
      })
    });
    null != s ? n = (0, t.jsx)(u.Anchor, {
      className: v.removeButton,
      onClick: this.handleRemove,
      children: m.default.Messages.REMOVE
    }) : !y && (n = (0, t.jsx)("small", {
      className: v.sizeInfo,
      children: m.default.Messages.MINIMUM_SIZE.format({
        size: f.AVATAR_SIZE
      })
    }));
    let k = null !== (e = null != _ ? _ : o) && void 0 !== e ? e : m.default.Messages.CHANGE_AVATAR;
    return (0, t.jsxs)("div", {
      className: r(v.imageUploader, U),
      children: [(0, t.jsx)(u.FocusRing, {
        within: !0,
        children: (0, t.jsxs)("div", {
          className: S ? r(v.imageUploaderIconWrapper, T) : void 0,
          children: [(0, t.jsxs)("div", {
            className: r(v.imageUploaderInner, N),
            style: {
              ...C,
              backgroundImage: l
            },
            children: [(0, t.jsx)("span", {
              "aria-hidden": !0,
              children: i
            }), null != R ? (0, t.jsx)(u.Clickable, {
              className: v.imageUploaderFileInput,
              "aria-label": k,
              onClick: R
            }) : (0, t.jsx)(c.default, {
              ref: this.inputRef,
              onChange: x,
              className: v.imageUploaderFileInput,
              "aria-label": k,
              tabIndex: 0,
              maxFileSizeBytes: b,
              onFileSizeError: M
            })]
          }), null != o && (0, t.jsx)("div", {
            className: v.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), S && (0, t.jsx)(h, {
            className: E,
            icon: j
          })]
        })
      }), P ? n : null]
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = i.createRef(), this.handleRemove = () => {
      this.props.onChange(null)
    }
  }
}
p.defaultProps = {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
};
var g = p