"use strict";
i.r(t), i.d(t, {
  RichTagTypes: function() {
    return n
  },
  SearchBarIcon: function() {
    return _
  },
  default: function() {
    return h
  }
}), i("424973"), i("222007");
var n, s, l = i("37983"),
  r = i("884691"),
  a = i("414456"),
  o = i.n(a),
  u = i("77078"),
  c = i("476263"),
  d = i("945330"),
  f = i("229915"),
  E = i("439932"),
  m = i("49111"),
  I = i("782340"),
  p = i("515315");
let g = Object.freeze({
  SMALL: p.small,
  MEDIUM: p.medium,
  LARGE: p.large
});
(s = n || (n = {})).MEMBER = "MEMBER", s.ROLE = "ROLE", s.CHANNEL = "CHANNEL", s.GUILD = "GUILD", s.USER = "USER";
let _ = e => {
  let {
    hasContent: t,
    onClear: i,
    className: n,
    themeOverride: s,
    size: r = g.SMALL
  } = e;
  return (0, l.jsx)(u.Clickable, {
    className: o(n, p.iconLayout, r, (0, E.getThemeClass)(s), {
      [p.clear]: t
    }),
    onClick: e => {
      e.stopPropagation(), null != i && i(e)
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    tabIndex: t ? 0 : -1,
    "aria-hidden": !t,
    "aria-label": I.default.Messages.SEARCH_CLEAR,
    focusProps: {
      offset: 4
    },
    children: (0, l.jsxs)("div", {
      className: p.iconContainer,
      children: [(0, l.jsx)(f.default, {
        className: o({
          [p.icon]: !0,
          [p.visible]: !t
        })
      }), (0, l.jsx)(d.default, {
        className: o({
          [p.icon]: !0,
          [p.visible]: t
        })
      })]
    })
  })
};
class S extends r.Component {
  componentDidUpdate(e) {
    let {
      focusAfterReady: t,
      isReady: i
    } = this.props;
    t && !e.isReady && i && this.focus()
  }
  handleKeyDownGrid(e) {
    let {
      selectedRow: t,
      selectedColumn: i,
      sections: n,
      query: s,
      tags: l,
      onSelectionChange: r,
      onSelect: a,
      onRemoveTag: o,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== n.length) {
      switch (e.keyCode) {
        case m.KeyboardKeys.BACKSPACE:
          (null == s || 0 === s.length) && null != l && l.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(l.length - 1));
          break;
        case m.KeyboardKeys.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, i = 0) : ((t += 1) >= n.length && (t = n.length - 1), i >= n[t] && (i = n[t] - 1));
          break;
        case m.KeyboardKeys.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, i = 0) : i >= n[t] && (i = n[t] - 1);
          break;
        case m.KeyboardKeys.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (i -= 1) < 0 && ((t -= 1) >= 0 ? i = n[t] - 1 : t < 0 && (t = 0, i = 0));
          break;
        case m.KeyboardKeys.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (i += 1) >= n[t] && (i = 0, (t += 1) >= n.length && (t = n.length - 1, i = n[t] - 1));
          break;
        case m.KeyboardKeys.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === i && (i = 0), t >= n.length || i >= n[t]) return;
          null != a && a(t, i, e);
          return;
        case m.KeyboardKeys.ESCAPE:
          e.preventDefault(), u && e.stopPropagation(), null != a && a(null, null, e);
          return;
        default:
          return
      }
      null != r && r(t, i)
    }
  }
  handleKeyDownList(e) {
    let {
      sections: t,
      selectedSection: i,
      selectedRow: n,
      onSelect: s,
      onSelectionChange: l,
      query: r,
      tags: a,
      preventEscapePropagation: o
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case m.KeyboardKeys.BACKSPACE:
        if ((null == r || 0 === r.length) && null != a && a.length > 0) {
          var c, d;
          e.preventDefault(), e.stopPropagation(), null === (c = (d = this.props).onRemoveTag) || void 0 === c || c.call(d, a.length - 1)
        }
        break;
      case m.KeyboardKeys.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > i && ++n >= t[i] && (++i >= t.length && (i = 0), n = 0), null == l || l(i, n);
        break;
      case m.KeyboardKeys.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --n < 0 && (--i < 0 && (i = t.length - 1), n = t[i] - 1), null == l || l(i, n);
        break;
      case m.KeyboardKeys.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > i && t[i] > n && (null == s || s(i, n, e));
        break;
      case m.KeyboardKeys.ESCAPE:
        e.preventDefault(), o && e.stopPropagation(), null == s || s(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: i = I.default.Messages.DM_SEARCH_PLACEHOLDER,
      themeOverride: n,
      disabled: s,
      onClear: r,
      size: a,
      maxHeight: f,
      tags: m,
      onActivate: g,
      className: S,
      inputProps: h,
      focusAfterReady: C
    } = this.props, T = null != t && t.length > 0, N = !1, v = [];
    return null != m && m.length > 0 && ("string" == typeof m[0] ? m.forEach((e, t) => v.push((0, l.jsxs)(u.Anchor, {
      focusProps: {
        offset: 4
      },
      className: p.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, l.jsx)(d.default, {
        className: p.close,
        "aria-label": I.default.Messages.REMOVE
      })]
    }, t))) : (N = !0, m.forEach((e, t) => v.push((0, l.jsxs)(u.Anchor, {
      className: o(p.tag, p.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, l.jsx)(u.Avatar, {
        src: e.avatar,
        "aria-hidden": !0,
        size: u.AvatarSizes.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, l.jsx)("span", {
        className: p.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, l.jsx)(c.default, {
        guild: e.guild,
        active: !0,
        size: c.default.Sizes.SMOL
      }), (0, l.jsx)("span", {
        className: p.tagLabel,
        children: e.label
      }), (0, l.jsx)(d.default, {
        className: p.close,
        "aria-label": I.default.Messages.REMOVE
      })]
    }, t))))), (0, l.jsx)(u.FocusRing, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, l.jsx)("div", {
        ref: this.containerRef,
        className: o(S, p.container, a, (0, E.getThemeClass)(n), {
          [p.disabled]: s
        }),
        children: (0, l.jsxs)(u.ScrollerThin, {
          className: p.inner,
          style: {
            maxHeight: f
          },
          children: [v, (0, l.jsx)("input", {
            className: o(p.input, {
              [p.richTagInput]: N
            }),
            type: "text",
            ref: this.ref,
            spellCheck: "false",
            placeholder: i,
            value: t,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            disabled: s,
            "aria-disabled": s,
            autoFocus: !C && e,
            onMouseDown: g,
            ...this.defaultInputProps,
            ...h
          }), null != r ? (0, l.jsx)(_, {
            size: a,
            themeOverride: n,
            hasContent: T,
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
    }, this.ref = r.createRef(), this.containerRef = r.createRef(), this.handleKeyDown = e => {
      let {
        onActivate: t,
        onKeyDown: i,
        onQueryChange: n,
        useKeyboardNavigation: s
      } = this.props;
      null != i && i(e);
      let {
        current: l
      } = this.ref;
      if (null == l || null != t) {
        e.keyCode !== m.KeyboardKeys.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === m.KeyboardKeys.ESCAPE && null != l.value && "" !== l.value && l.value.length > 0) {
        l.value = "", null != n && n("");
        return
      }
      s && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
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
S.Sizes = g, S.defaultProps = {
  size: g.SMALL,
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
var h = S