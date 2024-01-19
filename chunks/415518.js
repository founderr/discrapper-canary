"use strict";
l.r(t), l.d(t, {
  renderKeybindHint: function() {
    return p
  },
  renderSubtleHint: function() {
    return N
  },
  ColorSchemes: function() {
    return s
  },
  default: function() {
    return g
  }
});
var n, s, a = l("37983"),
  r = l("884691"),
  i = l("414456"),
  u = l.n(i),
  o = l("77078"),
  d = l("942699"),
  c = l("945330"),
  f = l("782340"),
  m = l("229804"),
  S = l("926622");
let h = e => e.stopPropagation(),
  C = () => (0, a.jsx)("div", {
    className: m.clickBlocker,
    onClick: h,
    onMouseEnter: h,
    onMouseOver: h
  }),
  E = () => (0, a.jsx)("div", {
    className: m.divider
  }),
  p = (e, t, l) => (0, a.jsx)("div", {
    className: m.keybindMessage,
    children: l.format({
      keybind: t,
      keybindHook: (e, l) => (0, a.jsx)(d.default, {
        keybind: t,
        className: m.keybind
      }, l)
    })
  }),
  N = (e, t) => (0, a.jsx)("div", {
    className: m.hintSubtleText,
    children: t
  });
(n = s || (s = {})).PRIMARY = "PRIMARY", n.BRAND = "BRAND", n.DANGER = "DANGER";
class Notification extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      expand: l
    } = e, {
      expanded: n
    } = t;
    return !n && l ? {
      expanded: !0
    } : null
  }
  componentDidMount() {
    let {
      onNotificationShow: e
    } = this.props;
    null == e || e()
  }
  componentDidUpdate(e) {
    let {
      onNotificationShow: t
    } = this.props;
    null != t && null == e.onNotificationShow && t()
  }
  renderCloseButton() {
    return (0, a.jsx)(o.Button, {
      look: o.Button.Looks.BLANK,
      size: o.Button.Sizes.NONE,
      onClick: this.handleDismiss,
      className: m.dismissButton,
      "aria-label": f.default.Messages.NOTIFICATION_DISMISS,
      children: (0, a.jsx)(c.default, {
        width: 16,
        height: 16,
        className: m.dismissIcon
      })
    })
  }
  renderHint() {
    let {
      props: {
        hint: e,
        colorScheme: t
      },
      state: {
        expanded: l
      }
    } = this;
    if (null == e) return null;
    if ("function" == typeof e) {
      let n = e(l, t);
      return null != n ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(E, {}), n]
      }, "hint-custom") : null
    }
    return (0, a.jsxs)(r.Fragment, {
      children: [(0, a.jsx)(E, {}), (0, a.jsx)("div", {
        className: "string" == typeof e ? m.hintText : void 0,
        children: e
      }, "hint-text")]
    }, "hint-text")
  }
  renderFooter() {
    let {
      props: {
        renderFooter: e,
        cancelText: t,
        confirmText: l,
        onConfirmClick: n,
        onCancelClick: s,
        hint: i,
        colorScheme: u
      },
      state: {
        expanded: d
      }
    } = this;
    if (!d) return null != i ? this.renderHint() : null;
    if (null != e) {
      let t = e(d, u);
      return null != t ? (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(E, {}), t]
      }, "footer-custom-content") : null
    }
    if (null != n || null != s) {
      let e = o.Button.Colors.GREEN,
        i = o.Button.Colors.PRIMARY,
        d = o.Button.Looks.FILLED;
      switch (u) {
        case "DANGER":
        case "BRAND":
          e = i = o.Button.Colors.WHITE, d = o.Button.Looks.OUTLINED
      }
      return (0, a.jsxs)(r.Fragment, {
        children: [(0, a.jsx)(E, {}), (0, a.jsxs)("div", {
          className: m.buttonContainer,
          children: [null != n ? (0, a.jsx)(o.Button, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            color: e,
            onClick: this.handleConfirmClick,
            className: m.button,
            innerClassName: m.innerText,
            children: null != l ? l : f.default.Messages.OKAY
          }) : null, null != s ? (0, a.jsx)(o.Button, {
            fullWidth: !0,
            size: o.Button.Sizes.SMALL,
            look: d,
            color: i,
            onClick: this.handleCancelClick,
            className: m.button,
            children: null != t ? t : f.default.Messages.CANCEL
          }) : null]
        })]
      }, "footer-button-content")
    }
    return this.renderHint()
  }
  renderIcon() {
    let {
      icon: e
    } = this.props;
    return null == e ? null : "string" == typeof e ? (0, a.jsx)(o.Avatar, {
      src: e,
      size: o.AvatarSizes.SIZE_40,
      className: m.avatar,
      "aria-hidden": !0
    }) : (0, a.jsx)("div", {
      className: m.avatar,
      children: e
    })
  }
  renderContent() {
    let {
      body: e,
      title: t,
      maxBodyLines: l
    } = this.props;
    return (0, a.jsxs)("div", {
      className: m.content,
      children: [this.renderIcon(), (0, a.jsxs)("div", {
        className: m.details,
        children: [(0, a.jsx)("div", {
          className: m.title,
          children: t
        }), null != e ? (0, a.jsx)("div", {
          className: u(m.body, S.marginTop4),
          style: {
            WebkitLineClamp: l,
            lineClamp: l
          },
          children: e
        }) : null]
      })]
    })
  }
  render() {
    let {
      props: {
        onNotificationClick: e,
        colorScheme: t,
        disabled: l
      },
      state: {
        expanded: n
      }
    } = this, s = null != e ? o.Clickable : "div";
    return (0, a.jsxs)(s, {
      onMouseOver: n ? null : this.handleMouseEnter,
      onFocus: n ? null : this.handleMouseEnter,
      onClick: e,
      className: u(m.container, {
        [m.themePrimary]: "PRIMARY" === t,
        [m.themeBrand]: "BRAND" === t,
        [m.themeDanger]: "DANGER" === t,
        [m.clickable]: null != e && !l
      }),
      children: [this.renderCloseButton(), this.renderContent(), this.renderFooter(), l ? (0, a.jsx)(C, {}) : null]
    })
  }
  constructor(e) {
    super(e), this.handleDismiss = e => {
      e.stopPropagation();
      let {
        onDismissClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleConfirmClick = e => {
      e.stopPropagation();
      let {
        onConfirmClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleCancelClick = e => {
      e.stopPropagation();
      let {
        onCancelClick: t
      } = this.props;
      null == t || t(e)
    }, this.handleMouseEnter = () => {
      !this.props.disabled && this.setState({
        expanded: !0
      })
    };
    let {
      expand: t
    } = e;
    this.state = {
      expanded: t
    }
  }
}
Notification.ColorSchemes = s, Notification.defaultProps = {
  maxBodyLines: void 0,
  colorScheme: "PRIMARY",
  expand: !1,
  disabled: !1
};
var g = Notification