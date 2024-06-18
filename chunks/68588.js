"use strict";
n.d(t, {
  a: function() {
    return m
  }
}), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(120356),
  u = n.n(l),
  _ = n(692547),
  c = n(481060),
  d = n(169525),
  E = n(823379),
  I = n(689938),
  T = n(339692);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).TEXT = "text", s.ATTACHMENT = "attachment", s.EMBED = "embed";
let S = e => {
    let {
      className: t
    } = e;
    return (0, o.jsx)("div", {
      className: u()(T.spoilerWarning, t),
      children: I.Z.Messages.SPOILER
    })
  },
  f = e => {
    let {
      className: t,
      isSingleMosaicItem: n,
      obscureOnly: i
    } = e;
    return (0, o.jsx)("div", {
      className: u()(T.explicitContentWarning, t),
      children: i ? null : (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(c.ImageWarningIcon, {
          size: "lg",
          color: _.Z.colors.WHITE
        }), n && (0, o.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "always-white",
          className: T.explicitContentWarningText,
          children: I.Z.Messages.EXPLICIT_CONTENT_WARNING
        })]
      })
    })
  },
  N = e => {
    let {
      reason: t = d.wk.SPOILER,
      className: n,
      isSingleMosaicItem: i = !1
    } = e;
    switch (t) {
      case d.wk.SPOILER:
        return (0, o.jsx)(S, {
          className: n
        });
      case d.wk.EXPLICIT_CONTENT:
        return (0, o.jsx)(f, {
          isSingleMosaicItem: i,
          className: n
        });
      case d.wk.POTENTIAL_EXPLICIT_CONTENT:
        return (0, o.jsx)(f, {
          isSingleMosaicItem: i,
          className: n,
          obscureOnly: !0
        });
      default:
        return (0, E.vE)(t)
    }
  },
  A = e => {
    let {
      obscureReason: t,
      isVisible: n,
      handleToggleObscurity: i,
      obscurityControlClassName: r
    } = e;
    return t !== d.wk.EXPLICIT_CONTENT ? null : (0, o.jsx)("div", {
      className: u()(T.obscureButtonContainer, r),
      children: (0, o.jsx)(c.Clickable, {
        className: u()(T.obscureHoverButton),
        onClick: i,
        "aria-label": I.Z.Messages.EXPLICIT_CONTENT_BUTTON_TOOLTIP,
        children: n ? (0, o.jsx)(c.EyeIcon, {
          size: "md",
          color: "currentColor"
        }) : (0, o.jsx)(c.EyeSlashIcon, {
          size: "md",
          color: "currentColor"
        })
      })
    })
  },
  m = a.createContext(!1);
class O extends(r = a.PureComponent) {
  renderWithTooltip(e) {
    return (0, o.jsx)(c.Tooltip, {
      position: "left",
      text: this.state.visible ? null : this.tooltipText,
      children: t => {
        let {
          onMouseEnter: n,
          onMouseLeave: i
        } = t;
        return a.cloneElement(a.Children.only(e), {
          onMouseEnter: n,
          onMouseLeave: i
        })
      }
    })
  }
  renderObscuredAttachment() {
    let {
      children: e,
      inline: t,
      className: n,
      containerStyles: i,
      obscured: r = !0,
      reason: s = d.wk.SPOILER,
      isSingleMosaicItem: a = !1,
      obscurityControlClassName: l
    } = this.props, {
      visible: _
    } = this.state, E = (0, o.jsx)(m.Consumer, {
      children: E => {
        let I = E || _ || !r;
        return [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) && !t ? (0, o.jsxs)("div", {
          "aria-label": I ? void 0 : this.ariaLabel,
          "aria-expanded": I,
          style: i,
          className: u()(n, T.spoilerContent, T.spoilerContainer, {
            [T.hidden]: !I,
            [T.constrainedObscureContent]: a
          }),
          role: I ? "presentation" : "button",
          tabIndex: I ? -1 : 0,
          children: [I || t ? null : (0, o.jsx)(N, {
            reason: s,
            isSingleMosaicItem: a
          }), (0, o.jsx)("div", {
            "aria-hidden": !I,
            className: T.spoilerInnerContainer,
            children: e(!I)
          }), (0, o.jsx)(A, {
            obscureReason: s,
            isVisible: _,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: l
          })]
        }) : (0, o.jsxs)(c.Clickable, {
          onClick: I ? void 0 : this.removeObscurity,
          "aria-label": I ? void 0 : this.ariaLabel,
          "aria-expanded": I,
          style: i,
          className: u()(n, T.spoilerContent, T.spoilerContainer, {
            [T.hidden]: !I,
            [T.hiddenSpoiler]: !I
          }),
          role: I ? "presentation" : "button",
          tabIndex: I ? -1 : 0,
          children: [I || t ? null : (0, o.jsx)(N, {
            reason: s,
            isSingleMosaicItem: a
          }), (0, o.jsx)("div", {
            "aria-hidden": !I,
            className: T.spoilerInnerContainer,
            children: e(!I)
          })]
        })
      }
    });
    return t ? this.renderWithTooltip(E) : E
  }
  renderObscuredEmbed() {
    let {
      children: e,
      className: t,
      containerStyles: n,
      isSingleMosaicItem: i,
      obscurityControlClassName: r,
      reason: s = d.wk.SPOILER
    } = this.props, {
      visible: a
    } = this.state;
    return (0, o.jsx)(m.Consumer, {
      children: l => {
        let _ = l || a;
        return [d.wk.EXPLICIT_CONTENT, d.wk.POTENTIAL_EXPLICIT_CONTENT].includes(s) ? (0, o.jsxs)("div", {
          "aria-label": a ? void 0 : this.ariaLabel,
          "aria-expanded": _,
          style: n,
          className: u()(t, T.spoilerContent, T.spoilerContainer, {
            [T.hidden]: !_
          }),
          role: _ ? "presentation" : "button",
          tabIndex: _ ? -1 : 0,
          children: [_ ? null : (0, o.jsx)(N, {
            reason: s,
            isSingleMosaicItem: i
          }), (0, o.jsx)("div", {
            "aria-hidden": !_,
            className: T.spoilerInnerContainer,
            children: e(!_)
          }), (0, o.jsx)(A, {
            obscureReason: s,
            isVisible: a,
            handleToggleObscurity: this.handleToggleObscurity,
            obscurityControlClassName: r
          })]
        }) : (0, o.jsxs)(c.Clickable, {
          "aria-label": this.ariaLabel,
          "aria-expanded": _,
          className: u()(t, T.spoilerContent, T.spoilerContainer, {
            [T.hidden]: !_
          }),
          onClick: _ ? void 0 : this.removeObscurity,
          style: n,
          role: _ ? "presentation" : "button",
          tabIndex: _ ? -1 : 0,
          children: [_ ? null : (0, o.jsx)(N, {
            reason: s,
            className: T.embed
          }), (0, o.jsx)("div", {
            "aria-hidden": !_,
            children: e(!_)
          })]
        })
      }
    })
  }
  renderObscuredText() {
    let {
      children: e,
      renderTextElement: t,
      className: n
    } = this.props, {
      visible: i
    } = this.state, r = (0, o.jsx)(m.Consumer, {
      children: r => {
        let s = r || i,
          l = a.Children.toArray(e(s)),
          _ = a.Children.map(l, e => a.isValidElement(e) && null != t ? t(e, s) : e);
        return (0, o.jsx)(c.Clickable, {
          tag: "span",
          onClick: s ? void 0 : this.removeObscurity,
          "aria-label": s ? void 0 : this.ariaLabel,
          "aria-expanded": s,
          tabIndex: s ? -1 : 0,
          role: s ? "presentation" : "button",
          className: u()(n, T.spoilerContent, T.spoilerMarkdownContent, {
            [T.hidden]: !s
          }),
          children: (0, o.jsx)("span", {
            className: T.obscuredTextContent,
            children: (0, o.jsx)("span", {
              "aria-hidden": !s,
              className: T.obscuredTextContentInner,
              children: _
            })
          })
        })
      }
    });
    return this.renderWithTooltip(r)
  }
  render() {
    let {
      type: e = "text"
    } = this.props;
    switch (e) {
      case "text":
        return this.renderObscuredText();
      case "attachment":
        return this.renderObscuredAttachment();
      case "embed":
        return this.renderObscuredEmbed();
      default:
        return (0, E.vE)(e)
    }
  }
  get ariaLabel() {
    let {
      reason: e = d.wk.SPOILER
    } = this.props;
    switch (e) {
      case d.wk.SPOILER:
        return I.Z.Messages.SPOILER;
      case d.wk.EXPLICIT_CONTENT:
        return I.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case d.wk.POTENTIAL_EXPLICIT_CONTENT:
        return I.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, E.vE)(e)
    }
  }
  get tooltipText() {
    let {
      reason: e = d.wk.SPOILER
    } = this.props;
    switch (e) {
      case d.wk.SPOILER:
        return I.Z.Messages.SPOILER;
      case d.wk.EXPLICIT_CONTENT:
        return I.Z.Messages.EXPLICIT_CONTENT_WARNING_TOOLTIP;
      case d.wk.POTENTIAL_EXPLICIT_CONTENT:
        return I.Z.Messages.EXPLICIT_CONTENT_WARNING_PENDING;
      default:
        return (0, E.vE)(e)
    }
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      visible: !1
    }), h(this, "removeObscurity", e => {
      let {
        visible: t
      } = this.state;
      if (t) return;
      !t && (e.preventDefault(), e.stopPropagation()), this.setState({
        visible: !0
      });
      let {
        onReveal: n
      } = this.props;
      null != n && n()
    }), h(this, "handleToggleObscurity", e => {
      e.stopPropagation(), e.nativeEvent.stopPropagation();
      let {
        onToggleObscurity: t
      } = this.props;
      null != t && t(e), this.setState(e => ({
        visible: !e.visible
      }))
    }), h(this, "obscure", () => {
      let {
        visible: e
      } = this.state;
      e && this.setState({
        visible: !1
      })
    })
  }
}
h(O, "Types", i), h(O, "Reasons", d.wk), t.Z = O