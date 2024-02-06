"use strict";
n.r(t), n.d(t, {
  RichTagTypes: function() {
    return i
  },
  SearchBarIcon: function() {
    return S
  },
  default: function() {
    return T
  }
}), n("424973"), n("222007");
var i, l, r = n("37983"),
  o = n("884691"),
  a = n("414456"),
  s = n.n(a),
  u = n("77078"),
  c = n("476263"),
  d = n("945330"),
  f = n("229915"),
  E = n("439932"),
  p = n("49111"),
  h = n("782340"),
  _ = n("515315");
let C = Object.freeze({
  SMALL: _.small,
  MEDIUM: _.medium,
  LARGE: _.large
});
(l = i || (i = {})).MEMBER = "MEMBER", l.ROLE = "ROLE", l.CHANNEL = "CHANNEL", l.GUILD = "GUILD", l.USER = "USER";
let S = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    themeOverride: l,
    size: o = C.SMALL
  } = e;
  return (0, r.jsx)(u.Clickable, {
    className: s(i, _.iconLayout, o, (0, E.getThemeClass)(l), {
      [_.clear]: t
    }),
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    tabIndex: t ? 0 : -1,
    "aria-hidden": !t,
    "aria-label": h.default.Messages.SEARCH_CLEAR,
    focusProps: {
      offset: 4
    },
    children: (0, r.jsxs)("div", {
      className: _.iconContainer,
      children: [(0, r.jsx)(f.default, {
        className: s({
          [_.icon]: !0,
          [_.visible]: !t
        })
      }), (0, r.jsx)(d.default, {
        className: s({
          [_.icon]: !0,
          [_.visible]: t
        })
      })]
    })
  })
};
class I extends o.Component {
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: n
    } = this.props;
    t && !e.isReady && n && this.focus()
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: n,
      sections: i,
      query: l,
      tags: r,
      onSelectionChange: o,
      onSelect: a,
      onRemoveTag: s,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== i.length) {
      switch (e.keyCode) {
        case p.KeyboardKeys.BACKSPACE:
          (null == l || 0 === l.length) && null != r && r.length > 0 && (e.preventDefault(), e.stopPropagation(), null == s || s(r.length - 1));
          break;
        case p.KeyboardKeys.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
          break;
        case p.KeyboardKeys.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
          break;
        case p.KeyboardKeys.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case p.KeyboardKeys.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
          break;
        case p.KeyboardKeys.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
          null != a && a(t, n, e);
          return;
        case p.KeyboardKeys.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
          return;
        default:
          return
      }
      null != o && o(t, n)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: n,
      selectedRow: i,
      onSelect: l,
      onSelectionChange: r,
      query: o,
      tags: a,
      preventEscapePropagation: s
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case p.KeyboardKeys.BACKSPACE:
        if ((null == o || 0 === o.length) && null != a && a.length > 0) {
          var c, d;
          e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, a.length - 1)
        }
        break;
      case p.KeyboardKeys.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == r || r(n, i);
        break;
      case p.KeyboardKeys.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == r || r(n, i);
        break;
      case p.KeyboardKeys.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == l || l(n, i, e));
        break;
      case p.KeyboardKeys.ESCAPE:
        e.preventDefault(), s && e.stopPropagation(), null == l || l(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = h.default.Messages.DM_SEARCH_PLACEHOLDER,
      themeOverride: i,
      disabled: l,
      onClear: o,
      size: a,
      maxHeight: f,
      tags: p,
      onActivate: C,
      className: I,
      inputProps: T,
      focusAfterReady: g
    } = this.props, N = null != t && t.length > 0, v = !1, A = [];
    return null != p && p.length > 0 && ("string" == typeof p[0] ? p.forEach((e, t) => A.push((0, r.jsxs)(u.Anchor, {
      focusProps: {
        offset: 4
      },
      className: _.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, r.jsx)(d.default, {
        className: _.close,
        "aria-label": h.default.Messages.REMOVE
      })]
    }, t))) : (v = !0, p.forEach((e, t) => A.push((0, r.jsxs)(u.Anchor, {
      className: s(_.tag, _.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, r.jsx)(u.Avatar, {
        src: e.avatar,
        "aria-hidden": !0,
        size: u.AvatarSizes.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, r.jsx)("span", {
        className: _.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, r.jsx)(c.default, {
        guild: e.guild,
        active: !0,
        size: c.default.Sizes.SMOL
      }), (0, r.jsx)("span", {
        className: _.tagLabel,
        children: e.label
      }), (0, r.jsx)(d.default, {
        className: _.close,
        "aria-label": h.default.Messages.REMOVE
      })]
    }, t))))), (0, r.jsx)(u.FocusRing, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, r.jsx)("div", {
        ref: this.containerRef,
        className: s(I, _.container, a, (0, E.getThemeClass)(i), {
          [_.disabled]: l
        }),
        children: (0, r.jsxs)(u.ScrollerThin, {
          className: _.inner,
          style: {
            maxHeight: f
          },
          children: [A, (0, r.jsx)("input", {
            className: s(_.input, {
              [_.richTagInput]: v
            }),
            type: "text",
            ref: this.ref,
            spellCheck: "false",
            placeholder: n,
            value: t,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            disabled: l,
            "aria-disabled": l,
            autoFocus: !g && e,
            onMouseDown: C,
            ...this.defaultInputProps,
            ...T
          }), null != o ? (0, r.jsx)(S, {
            size: a,
            themeOverride: i,
            hasContent: N,
            onClear: this.handleClear
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.defaultInputProps = {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }, this.ref = o.createRef(), this.containerRef = o.createRef(), this.handleKeyDown = e => {
      let {
        onActivate: t,
        onKeyDown: n,
        onQueryChange: i,
        useKeyboardNavigation: l
      } = this.props;
      null != n && n(e);
      let {
        current: r
      } = this.ref;
      if (null == r || null != t) {
        e.keyCode !== p.KeyboardKeys.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === p.KeyboardKeys.ESCAPE && null != r.value && "" !== r.value && r.value.length > 0) {
        r.value = "", null != i && i("");
        return
      }
      l && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }, this.handleChange = e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }, this.handleFocus = e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }, this.handleClear = () => {
      let {
        onClear: e
      } = this.props, {
        current: t
      } = this.ref;
      null != e && e(), null != t && t.focus()
    }, this.handleRemoveTag = e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }, this.focus = () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    }
  }
}
I.Sizes = C, I.defaultProps = {
  size: C.SMALL,
  query: "",
  sections: [],
  selectedSection: 0,
  selectedRow: -1,
  selectedColumn: -1,
  gridResults: !1,
  disabled: !1,
  autoFocus: !1,
  preventEscapePropagation: !0,
  useKeyboardNavigation: !0
};
var T = I