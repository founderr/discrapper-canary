"use strict";
n.r(t), n.d(t, {
  ImageUploaderIcon: function() {
    return v
  },
  default: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  r = n.n(s),
  i = n("627445"),
  u = n.n(i),
  o = n("77078"),
  d = n("159885"),
  c = n("694187"),
  f = n("49111"),
  E = n("782340"),
  h = n("911686");

function v(e) {
  let {
    className: t,
    icon: n = null
  } = e;
  return (0, l.jsx)("div", {
    className: r(h.imageUploaderIcon, t),
    children: n
  })
}
class I extends a.PureComponent {
  handleExternalFileChange(e) {
    u(null != this.inputRef.current, "ImageInputRef asked to handleExternalFileChange when not mounted"), this.inputRef.current.handleFileChange(e)
  }
  render() {
    var e;
    let t, n, a, s;
    let {
      image: i,
      hint: u,
      name: I,
      makeURL: _,
      disabled: C,
      onChange: m,
      showIcon: p,
      showIconDisabled: T,
      className: g,
      imageClassName: N,
      iconClassName: x,
      iconWrapperClassName: S,
      icon: A,
      hideSize: L,
      imageStyle: y,
      showRemoveButton: M,
      maxFileSizeBytes: R,
      onFileSizeError: j,
      onOpenImageSelectModal: D,
      "aria-label": O
    } = this.props;
    if (null != (t = null != i && /^data:/.test(i) ? i : _(i)) ? n = 'url("'.concat(t, '")') : null != I && (a = (0, l.jsx)("div", {
        className: h.imageUploaderAcronym,
        children: (0, d.getAcronym)(I)
      })), C) return (0, l.jsx)("div", {
      className: r(h.imageUploader, h.disabled, g),
      children: (0, l.jsxs)("div", {
        className: r(h.imageUploaderInner, N),
        style: {
          ...y,
          backgroundImage: n
        },
        children: [a, T && (0, l.jsx)("div", {
          className: r(h.imageUploaderIcon, h.imageUploaderIconDisabled, x),
          children: A
        })]
      })
    });
    null != i ? s = (0, l.jsx)(o.Anchor, {
      className: h.removeButton,
      onClick: this.handleRemove,
      children: E.default.Messages.REMOVE
    }) : !L && (s = (0, l.jsx)("small", {
      className: h.sizeInfo,
      children: E.default.Messages.MINIMUM_SIZE.format({
        size: f.AVATAR_SIZE
      })
    }));
    let G = null !== (e = null != O ? O : u) && void 0 !== e ? e : E.default.Messages.CHANGE_AVATAR;
    return (0, l.jsxs)("div", {
      className: r(h.imageUploader, g),
      children: [(0, l.jsx)(o.FocusRing, {
        within: !0,
        children: (0, l.jsxs)("div", {
          className: p ? r(h.imageUploaderIconWrapper, S) : void 0,
          children: [(0, l.jsxs)("div", {
            className: r(h.imageUploaderInner, N),
            style: {
              ...y,
              backgroundImage: n
            },
            children: [(0, l.jsx)("span", {
              "aria-hidden": !0,
              children: a
            }), null != D ? (0, l.jsx)(o.Clickable, {
              className: h.imageUploaderFileInput,
              "aria-label": G,
              onClick: D
            }) : (0, l.jsx)(c.default, {
              ref: this.inputRef,
              onChange: m,
              className: h.imageUploaderFileInput,
              "aria-label": G,
              tabIndex: 0,
              maxFileSizeBytes: R,
              onFileSizeError: j
            })]
          }), null != u && (0, l.jsx)("div", {
            className: h.imageUploaderHint,
            "aria-hidden": "true",
            children: u
          }), p && (0, l.jsx)(v, {
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
I.defaultProps = {
  name: "",
  makeURL: e => e,
  disabled: !1,
  showIcon: !1,
  hideSize: !1,
  showRemoveButton: !0,
  maxFileSizeBytes: 1 / 0,
  icon: null
};
var _ = I