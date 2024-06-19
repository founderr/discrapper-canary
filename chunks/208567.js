t.d(s, {
  S: function() {
    return T
  }
}), t(47120);
var l, n = t(735250),
  i = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(512722),
  d = t.n(o),
  c = t(481060),
  u = t(624138),
  h = t(813197),
  m = t(981631),
  g = t(689938),
  E = t(974695);

function N(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function T(e) {
  let {
    className: s,
    icon: t = null
  } = e;
  return (0, n.jsx)("div", {
    className: r()(E.imageUploaderIcon, s),
    children: t
  })
}
class p extends(l = i.PureComponent) {
  handleExternalFileChange(e) {
    d()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let s, t, l, i;
    let {
      image: a,
      hint: o,
      name: d,
      makeURL: N,
      disabled: p,
      onChange: S,
      showIcon: x,
      showIconDisabled: M,
      className: C,
      imageClassName: I,
      iconClassName: R,
      iconWrapperClassName: _,
      icon: Z,
      hideSize: f,
      imageStyle: v,
      showRemoveButton: j,
      maxFileSizeBytes: O,
      onFileSizeError: A,
      onOpenImageSelectModal: L,
      "aria-label": b
    } = this.props;
    if (null != (s = null != a && /^data:/.test(a) ? a : N(a)) ? t = 'url("'.concat(s, '")') : null != d && (l = (0, n.jsx)("div", {
        className: E.imageUploaderAcronym,
        children: (0, u.Zg)(d)
      })), p) return (0, n.jsx)("div", {
      className: r()(E.imageUploader, E.disabled, C),
      children: (0, n.jsxs)("div", {
        className: r()(E.imageUploaderInner, I),
        style: {
          ...v,
          backgroundImage: t
        },
        children: [l, M && (0, n.jsx)("div", {
          className: r()(E.imageUploaderIcon, E.imageUploaderIconDisabled, R),
          children: Z
        })]
      })
    });
    null != a ? i = (0, n.jsx)(c.Anchor, {
      className: E.removeButton,
      onClick: this.handleRemove,
      children: g.Z.Messages.REMOVE
    }) : !f && (i = (0, n.jsx)("small", {
      className: E.sizeInfo,
      children: g.Z.Messages.MINIMUM_SIZE.format({
        size: m.IXf
      })
    }));
    let D = null !== (e = null != b ? b : o) && void 0 !== e ? e : g.Z.Messages.CHANGE_AVATAR;
    return (0, n.jsxs)("div", {
      className: r()(E.imageUploader, C),
      children: [(0, n.jsx)(c.FocusRing, {
        within: !0,
        children: (0, n.jsxs)("div", {
          className: x ? r()(E.imageUploaderIconWrapper, _) : void 0,
          children: [(0, n.jsxs)("div", {
            className: r()(E.imageUploaderInner, I),
            style: {
              ...v,
              backgroundImage: t
            },
            children: [(0, n.jsx)("span", {
              "aria-hidden": !0,
              children: l
            }), null != L ? (0, n.jsx)(c.Clickable, {
              className: E.imageUploaderFileInput,
              "aria-label": D,
              onClick: L
            }) : (0, n.jsx)(h.ZP, {
              ref: this.inputRef,
              onChange: S,
              className: E.imageUploaderFileInput,
              "aria-label": D,
              tabIndex: 0,
              maxFileSizeBytes: O,
              onFileSizeError: A
            })]
          }), null != o && (0, n.jsx)("div", {
            className: E.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), x && (0, n.jsx)(T, {
            className: R,
            icon: Z
          })]
        })
      }), j ? i : null]
    })
  }
  constructor(...e) {
    super(...e), N(this, "inputRef", i.createRef()), N(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
N(p, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), s.Z = p