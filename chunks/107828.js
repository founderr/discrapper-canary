n.d(s, {
  $W: function() {
    return M
  },
  Mx: function() {
    return Z
  },
  PZ: function() {
    return L
  },
  h4: function() {
    return b
  },
  ic: function() {
    return j
  },
  n5: function() {
    return A
  },
  rU: function() {
    return U
  }
}), n(47120);
var r, t = n(735250),
  a = n(470079),
  i = n(481060),
  l = n(43267),
  c = n(933557),
  o = n(471445),
  d = n(16206),
  u = n(754688),
  h = n(430824),
  p = n(699516),
  m = n(594174),
  N = n(51144),
  C = n(2093),
  x = n(366695),
  E = n(346656),
  f = n(409216),
  _ = n(689938),
  I = n(431172);

function g(e, s, n) {
  return s in e ? Object.defineProperty(e, s, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = n, e
}
class v extends a.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: s
    } = this.props, {
      node: n
    } = this;
    e && null != n && s(n)
  }
  componentDidUpdate(e) {
    let {
      focused: s,
      onFocus: n
    } = this.props, {
      node: r
    } = this;
    null != r && s && !e.focused && n(r)
  }
  render() {
    let {
      focused: e,
      children: s,
      score: n,
      onContextMenu: r,
      id: a,
      "aria-label": l
    } = this.props;
    return (0, t.jsxs)(i.Clickable, {
      role: "option",
      id: a,
      "aria-label": l,
      "aria-selected": e,
      focusProps: {
        enabled: !1
      },
      tabIndex: -1,
      innerRef: this.setRef,
      className: I.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: r,
      children: [s, null != n ? (0, t.jsx)("div", {
        className: I.score,
        children: n >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "node", void 0), g(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: s
      } = this.props, {
        node: n
      } = this;
      null != n && s(e, n)
    }), g(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: s
      } = this.props, {
        node: n
      } = this;
      null != n && s(e, n)
    }), g(this, "setRef", e => {
      this.node = e
    })
  }
}
class j extends a.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: I.guildIconContainer,
      children: (0, t.jsx)(E.Z, {
        tabIndex: -1,
        guild: e,
        size: E.Z.Sizes.MINI,
        className: I.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: I.name,
      children: (0, t.jsx)("span", {
        className: I.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: s
    } = this.props;
    return (0, t.jsxs)("div", {
      className: e ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: I.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return _.Z.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      children: this.renderContent()
    })
  }
}
class M extends(r = a.Component) {
  renderIcon() {
    var e;
    let {
      channel: s
    } = this.props, n = (0, o.KS)(s);
    if (null == n) return null;
    let r = null !== (e = (0, d.Z)(s)) && void 0 !== e ? e : "";
    return (0, t.jsx)("div", {
      className: I.iconContainer,
      role: "img",
      "aria-label": r,
      children: (0, t.jsx)(n, {
        className: I.icon,
        size: "xs",
        color: "currentColor"
      })
    })
  }
  renderName() {
    let e, s;
    let {
      mentions: n,
      category: r,
      channel: a
    } = this.props;
    return null != n && n > 0 && (e = (0, t.jsx)(C.Z, {
      className: I.badge,
      value: n
    })), null != r && (s = (0, t.jsx)("span", {
      className: I.note,
      children: (0, c.F6)(r, m.default, p.Z)
    })), (0, t.jsxs)("div", {
      className: I.name,
      children: [(0, t.jsx)("span", {
        className: I.match,
        children: (0, c.F6)(a, m.default, p.Z)
      }), e, this.renderVoiceStates(), s]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: s
    } = this.props;
    return null == e ? null : (0, t.jsx)(f.Z, {
      className: I.voiceSummaryContainer,
      guildId: s.guild_id,
      users: e.map(e => {
        let {
          user: s
        } = e;
        return {
          user: s
        }
      }),
      max: 4
    })
  }
  renderContent() {
    let {
      unread: e,
      mentions: s,
      children: n
    } = this.props;
    return (0, t.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != s && s > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: I.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: s
    } = this.props, n = null === (e = h.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, r = (0, c.F6)(s, m.default, p.Z), t = (0, d.Z)(s);
    return _.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: r,
      type: t,
      guild: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      children: this.renderContent()
    })
  }
}
g(M, "defaultProps", {
  unread: !1
});
class L extends a.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: I.dmIconContainer,
      children: (0, t.jsx)(i.Avatar, {
        src: (0, l.x)(e),
        size: i.AvatarSizes.SIZE_20,
        "aria-hidden": !0
      })
    })
  }
  renderName() {
    let e;
    let {
      mentions: s,
      channel: n
    } = this.props;
    return null != s && s > 0 && (e = (0, t.jsx)(C.Z, {
      className: I.badge,
      value: s
    })), (0, t.jsxs)("div", {
      className: I.name,
      children: [(0, t.jsx)("span", {
        className: I.match,
        children: (0, c.F6)(n, m.default, p.Z)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: s
    } = this.props;
    return (0, t.jsxs)("div", {
      className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: I.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: s
    } = this.props, n = (0, c.F6)(e, m.default, p.Z);
    return null != s && s > 0 ? _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: n,
      mentions: s
    }) : _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      children: this.renderContent()
    })
  }
}
class A extends a.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: I.iconContainer,
      children: (0, t.jsx)(i.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: i.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: s,
      comparator: n
    } = this.props, r = p.Z.getNickname(s.id);
    return ((e = n === s.tag || null == n || "" === n ? s.username : n) === s.username || e === s.id) && (e = null != r ? r : N.ZP.getName(s)), e
  }
  renderName() {
    let e;
    let {
      user: s,
      mentions: n
    } = this.props, r = this.getDisplayNickname();
    return null != n && n > 0 && (e = (0, t.jsx)(C.Z, {
      className: I.badge,
      value: n
    })), (0, t.jsxs)("div", {
      className: I.name,
      children: [(0, t.jsx)("span", {
        className: I.match,
        children: r
      }), e, (0, t.jsx)("span", {
        className: I.username,
        children: N.ZP.getUserTag(s)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: s
    } = this.props;
    return (0, t.jsxs)("div", {
      className: null != s && s > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: I.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: s
    } = this.props, n = this.getDisplayNickname(), r = N.ZP.getUserTag(s);
    return null != e && e > 0 ? _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: n,
      id: r,
      mentions: e
    }) : _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: n,
      id: r
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      children: this.renderContent()
    })
  }
}
class Z extends a.Component {
  renderContent() {
    let {
      children: e,
      application: s
    } = this.props;
    return (0, t.jsxs)("div", {
      className: I.contentDefault,
      children: [(0, t.jsx)("div", {
        className: I.iconContainer,
        children: (0, t.jsx)(x.Z, {
          tabIndex: -1,
          className: I.gameIcon,
          game: s,
          size: I.gameIconSize
        })
      }), s.name, (0, t.jsx)("div", {
        className: I.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      focused: r,
      id: a
    } = this.props;
    return (0, t.jsx)(v, {
      id: a,
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      focused: r,
      children: this.renderContent()
    })
  }
}
class b extends a.Component {
  render() {
    return (0, t.jsx)("div", {
      className: I.__invalid_resultDefault,
      children: (0, t.jsx)("div", {
        className: I.contentDefault,
        children: (0, t.jsx)("div", {
          className: I.header,
          children: this.props.children
        })
      })
    })
  }
}
class U extends a.Component {
  renderContent() {
    let e, s;
    let {
      link: n,
      children: r
    } = this.props, a = (0, u.Qj)(n.path);
    return null == a || void 0 === a.messageId ? (e = _.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN, s = (0, t.jsx)(i.LinkIcon, {
      size: "xs",
      color: "currentColor"
    })) : (0, u.VO)(a) ? (e = _.Z.Messages.QUICKSWITCHER_LINK_MESSAGE, s = (0, t.jsx)(i.ChatArrowRightIcon, {
      size: "xs",
      color: "currentColor"
    })) : (e = _.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS, s = (0, t.jsx)(i.LockIcon, {
      size: "xs",
      color: "currentColor"
    })), (0, t.jsxs)("div", {
      className: I.contentDefault,
      children: [(0, t.jsx)("div", {
        className: I.iconContainer,
        children: s
      }), e, (0, t.jsx)("div", {
        className: I.misc,
        children: r
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: r,
      focused: a,
      score: i,
      children: this.renderContent()
    })
  }
}