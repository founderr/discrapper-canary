t.d(n, {
  S: function() {
    return _
  }
}), t(47120);
var i, l = t(735250),
  s = t(470079),
  a = t(120356),
  r = t.n(a),
  o = t(512722),
  c = t.n(o),
  d = t(481060),
  u = t(624138),
  I = t(813197),
  N = t(981631),
  E = t(689938),
  T = t(974695);

function m(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}

function _(e) {
  let {
    className: n,
    icon: t = null
  } = e;
  return (0, l.jsx)("div", {
    className: r()(T.imageUploaderIcon, n),
    children: t
  })
}
class h extends(i = s.PureComponent) {
  handleExternalFileChange(e) {
    c()(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let n, t, i, s;
    let {
      image: a,
      hint: o,
      name: c,
      makeURL: m,
      disabled: h,
      onChange: g,
      showIcon: O,
      showIconDisabled: A,
      className: x,
      imageClassName: C,
      iconClassName: S,
      iconWrapperClassName: p,
      icon: R,
      hideSize: Z,
      imageStyle: f,
      showRemoveButton: M,
      maxFileSizeBytes: L,
      onFileSizeError: v,
      onOpenImageSelectModal: j,
      "aria-label": b
    } = this.props;
    if (null != (n = null != a && /^data:/.test(a) ? a : m(a)) ? t = 'url("'.concat(n, '")') : null != c && (i = (0, l.jsx)("div", {
        className: T.imageUploaderAcronym,
        children: (0, u.Zg)(c)
      })), h) return (0, l.jsx)("div", {
      className: r()(T.imageUploader, T.disabled, x),
      children: (0, l.jsxs)("div", {
        className: r()(T.imageUploaderInner, C),
        style: {
          ...f,
          backgroundImage: t
        },
        children: [i, A && (0, l.jsx)("div", {
          className: r()(T.imageUploaderIcon, T.imageUploaderIconDisabled, S),
          children: R
        })]
      })
    });
    null != a ? s = (0, l.jsx)(d.Anchor, {
      className: T.removeButton,
      onClick: this.handleRemove,
      children: E.Z.Messages.REMOVE
    }) : !Z && (s = (0, l.jsx)("small", {
      className: T.sizeInfo,
      children: E.Z.Messages.MINIMUM_SIZE.format({
        size: N.IXf
      })
    }));
    let P = null !== (e = null != b ? b : o) && void 0 !== e ? e : E.Z.Messages.CHANGE_AVATAR;
    return (0, l.jsxs)("div", {
      className: r()(T.imageUploader, x),
      children: [(0, l.jsx)(d.FocusRing, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: O ? r()(T.imageUploaderIconWrapper, p) : void 0,
          children: [(0, l.jsxs)("div", {
            className: r()(T.imageUploaderInner, C),
            style: {
              ...f,
              backgroundImage: t
            },
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: i
            }), null != j ? (0, l.jsx)(d.Clickable, {
              className: T.imageUploaderFileInput,
              "aria-label": P,
              onClick: j
            }) : (0, l.jsx)(I.ZP, {
              ref: this.inputRef,
              onChange: g,
              className: T.imageUploaderFileInput,
              "aria-label": P,
              tabIndex: 0,
              maxFileSizeBytes: L,
              onFileSizeError: v
            })]
          }), null != o && (0, l.jsx)("div", {
            className: T.imageUploaderHint,
            "aria-hidden": "true",
            children: o
          }), O && (0, l.jsx)(_, {
            className: S,
            icon: R
          })]
        })
      }), M ? s : null]
    })
  }
  constructor(...e) {
    super(...e), m(this, "inputRef", s.createRef()), m(this, "handleRemove", () => {
      this.props.onChange(null)
    })
  }
}
m(h, "defaultProps", {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
}), n.Z = h