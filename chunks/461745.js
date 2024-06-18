"use strict";
n.d(t, {
  BK: function() {
    return f
  },
  Fj: function() {
    return i
  }
}), n(653041), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(481060),
  c = n(346656),
  d = n(792125),
  E = n(981631),
  I = n(689938),
  T = n(799639);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = Object.freeze({
  SMALL: T.small,
  MEDIUM: T.medium,
  LARGE: T.large
});
(s = i || (i = {})).MEMBER = "MEMBER", s.ROLE = "ROLE", s.CHANNEL = "CHANNEL", s.GUILD = "GUILD", s.USER = "USER";
let f = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    themeOverride: r,
    size: s = S.SMALL
  } = e;
  return (0, o.jsx)(_.Clickable, {
    className: u()(i, T.iconLayout, s, (0, d.Q)(r), {
      [T.clear]: t
    }),
    onClick: e => {
      e.stopPropagation(), null != n && n(e)
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    tabIndex: t ? 0 : -1,
    "aria-hidden": !t,
    "aria-label": I.Z.Messages.SEARCH_CLEAR,
    focusProps: {
      offset: 4
    },
    children: (0, o.jsxs)("div", {
      className: T.iconContainer,
      children: [(0, o.jsx)(_.MagnifyingGlassIcon, {
        size: "md",
        color: "currentColor",
        className: u()({
          [T.icon]: !0,
          [T.visible]: !t
        })
      }), (0, o.jsx)(_.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: u()({
          [T.icon]: !0,
          [T.visible]: t
        })
      })]
    })
  })
};
class N extends(r = a.Component) {
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
      query: r,
      tags: s,
      onSelectionChange: o,
      onSelect: a,
      onRemoveTag: l,
      preventEscapePropagation: u
    } = this.props;
    if (0 !== i.length) {
      switch (e.keyCode) {
        case E.yXg.BACKSPACE:
          (null == r || 0 === r.length) && null != s && s.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(s.length - 1));
          break;
        case E.yXg.ARROW_DOWN:
          e.preventDefault(), e.stopPropagation(), -1 === t ? (t = 0, n = 0) : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
          break;
        case E.yXg.ARROW_UP:
          e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? (t = 0, n = 0) : n >= i[t] && (n = i[t] - 1);
          break;
        case E.yXg.ARROW_LEFT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1) < 0 && ((t -= 1) >= 0 ? n = i[t] - 1 : t < 0 && (t = 0, n = 0));
          break;
        case E.yXg.ARROW_RIGHT:
          e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1) >= i[t] && (n = 0, (t += 1) >= i.length && (t = i.length - 1, n = i[t] - 1));
          break;
        case E.yXg.ENTER:
          if (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= i.length || n >= i[t]) return;
          null != a && a(t, n, e);
          return;
        case E.yXg.ESCAPE:
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
      onSelect: r,
      onSelectionChange: s,
      query: o,
      tags: a,
      preventEscapePropagation: l
    } = this.props, {
      current: u
    } = this.ref;
    if (null != u) switch (e.keyCode) {
      case E.yXg.BACKSPACE:
        if ((null == o || 0 === o.length) && null != a && a.length > 0) {
          var _, c;
          e.preventDefault(), e.stopPropagation(), null === (_ = (c = this.props).onRemoveTag) || void 0 === _ || _.call(c, a.length - 1)
        }
        break;
      case E.yXg.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), i = 0), null == s || s(n, i);
        break;
      case E.yXg.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --i < 0 && (--n < 0 && (n = t.length - 1), i = t[n] - 1), null == s || s(n, i);
        break;
      case E.yXg.ENTER:
        e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == r || r(n, i, e));
        break;
      case E.yXg.ESCAPE:
        e.preventDefault(), l && e.stopPropagation(), null == r || r(null, null, e), u.blur()
    }
  }
  render() {
    let {
      autoFocus: e,
      query: t,
      placeholder: n = I.Z.Messages.DM_SEARCH_PLACEHOLDER,
      themeOverride: i,
      disabled: r,
      onClear: s,
      size: a,
      maxHeight: l,
      tags: E,
      onActivate: h,
      className: S,
      inputProps: N,
      focusAfterReady: A
    } = this.props, m = null != t && t.length > 0, O = !1, R = [];
    return null != E && E.length > 0 && ("string" == typeof E[0] ? E.forEach((e, t) => R.push((0, o.jsxs)(_.Anchor, {
      focusProps: {
        offset: 4
      },
      className: T.tag,
      onClick: this.handleRemoveTag.bind(this, t),
      children: [e, (0, o.jsx)(_.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: T.close,
        "aria-label": I.Z.Messages.REMOVE
      })]
    }, t))) : (O = !0, E.forEach((e, t) => R.push((0, o.jsxs)(_.Anchor, {
      className: u()(T.tag, T.richTag),
      onClick: this.handleRemoveTag.bind(this, t),
      children: [("MEMBER" === e.type || "USER" === e.type) && null != e.avatar && (0, o.jsx)(_.Avatar, {
        src: e.avatar,
        "aria-hidden": !0,
        size: _.AvatarSizes.SIZE_16
      }), "ROLE" === e.type && null != e.color && (0, o.jsx)("span", {
        className: T.tagRoleColor,
        style: {
          backgroundColor: e.color
        }
      }), "GUILD" === e.type && null != e.guild && (0, o.jsx)(c.Z, {
        guild: e.guild,
        active: !0,
        size: c.Z.Sizes.SMOL
      }), (0, o.jsx)("span", {
        className: T.tagLabel,
        children: e.label
      }), (0, o.jsx)(_.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: T.close,
        "aria-label": I.Z.Messages.REMOVE
      })]
    }, t))))), (0, o.jsx)(_.FocusRing, {
      focusTarget: this.ref,
      ringTarget: this.containerRef,
      children: (0, o.jsx)("div", {
        ref: this.containerRef,
        className: u()(S, T.container, a, (0, d.Q)(i), {
          [T.disabled]: r
        }),
        children: (0, o.jsxs)(_.ScrollerThin, {
          className: T.inner,
          style: {
            maxHeight: l
          },
          children: [R, (0, o.jsx)("input", {
            className: u()(T.input, {
              [T.richTagInput]: O
            }),
            type: "text",
            ref: this.ref,
            spellCheck: "false",
            placeholder: n,
            value: t,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            disabled: r,
            "aria-disabled": r,
            autoFocus: !A && e,
            onMouseDown: h,
            ...this.defaultInputProps,
            ...N
          }), null != s ? (0, o.jsx)(f, {
            size: a,
            themeOverride: i,
            hasContent: m,
            onClear: this.handleClear
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "defaultInputProps", {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list"
    }), h(this, "ref", a.createRef()), h(this, "containerRef", a.createRef()), h(this, "handleKeyDown", e => {
      let {
        onActivate: t,
        onKeyDown: n,
        onQueryChange: i,
        useKeyboardNavigation: r
      } = this.props;
      null != n && n(e);
      let {
        current: s
      } = this.ref;
      if (null == s || null != t) {
        e.keyCode !== E.yXg.TAB && null != t && t(e);
        return
      }
      if (e.keyCode === E.yXg.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
        s.value = "", null != i && i("");
        return
      }
      r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e))
    }), h(this, "handleChange", e => {
      let {
        onQueryChange: t
      } = this.props;
      null != t && t(e.currentTarget.value)
    }), h(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      null != t && t(e)
    }), h(this, "handleClear", () => {
      let {
        onClear: e
      } = this.props, {
        current: t
      } = this.ref;
      null != e && e(), null != t && t.focus()
    }), h(this, "handleRemoveTag", e => {
      let {
        onRemoveTag: t
      } = this.props;
      null == t || t(e)
    }), h(this, "focus", () => {
      let {
        current: e
      } = this.ref;
      null != e && e.focus()
    })
  }
}
h(N, "Sizes", S), h(N, "defaultProps", {
  size: S.SMALL,
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
}), t.ZP = N