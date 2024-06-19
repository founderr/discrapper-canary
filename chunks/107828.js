s.d(n, {
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
    return v
  },
  n5: function() {
    return A
  },
  rU: function() {
    return U
  }
}), s(47120);
var t, r = s(735250),
  i = s(470079),
  a = s(481060),
  l = s(43267),
  c = s(933557),
  o = s(471445),
  d = s(16206),
  u = s(754688),
  h = s(430824),
  p = s(699516),
  m = s(594174),
  C = s(51144),
  N = s(2093),
  x = s(366695),
  f = s(346656),
  E = s(409216),
  _ = s(689938),
  I = s(431172);

function g(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = s, e
}
class j extends i.PureComponent {
  componentDidMount() {
    let {
      focused: e,
      onFocus: n
    } = this.props, {
      node: s
    } = this;
    e && null != s && n(s)
  }
  componentDidUpdate(e) {
    let {
      focused: n,
      onFocus: s
    } = this.props, {
      node: t
    } = this;
    null != t && n && !e.focused && s(t)
  }
  render() {
    let {
      focused: e,
      children: n,
      score: s,
      onContextMenu: t,
      id: i,
      "aria-label": l
    } = this.props;
    return (0, r.jsxs)(a.Clickable, {
      role: "option",
      id: i,
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
      onContextMenu: t,
      children: [n, null != s ? (0, r.jsx)("div", {
        className: I.score,
        children: s >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "node", void 0), g(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), g(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), g(this, "setRef", e => {
      this.node = e
    })
  }
}
class v extends i.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: I.guildIconContainer,
      children: (0, r.jsx)(f.Z, {
        tabIndex: -1,
        guild: e,
        size: f.Z.Sizes.MINI,
        className: I.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: I.name,
      children: (0, r.jsx)("span", {
        className: I.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: e ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: I.misc,
        children: n
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
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, r.jsx)(j, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class M extends(t = i.Component) {
  renderIcon() {
    var e;
    let {
      channel: n
    } = this.props, s = (0, o.KS)(n);
    if (null == s) return null;
    let t = null !== (e = (0, d.Z)(n)) && void 0 !== e ? e : "";
    return (0, r.jsx)("div", {
      className: I.iconContainer,
      role: "img",
      "aria-label": t,
      children: (0, r.jsx)(s, {
        className: I.icon,
        size: "xs",
        color: "currentColor"
      })
    })
  }
  renderName() {
    let e, n;
    let {
      mentions: s,
      category: t,
      channel: i
    } = this.props;
    return null != s && s > 0 && (e = (0, r.jsx)(N.Z, {
      className: I.badge,
      value: s
    })), null != t && (n = (0, r.jsx)("span", {
      className: I.note,
      children: (0, c.F6)(t, m.default, p.Z)
    })), (0, r.jsxs)("div", {
      className: I.name,
      children: [(0, r.jsx)("span", {
        className: I.match,
        children: (0, c.F6)(i, m.default, p.Z)
      }), e, this.renderVoiceStates(), n]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: n
    } = this.props;
    return null == e ? null : (0, r.jsx)(E.Z, {
      className: I.voiceSummaryContainer,
      guildId: n.guild_id,
      users: e.map(e => {
        let {
          user: n
        } = e;
        return {
          user: n
        }
      }),
      max: 4
    })
  }
  renderContent() {
    let {
      unread: e,
      mentions: n,
      children: s
    } = this.props;
    return (0, r.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != n && n > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: I.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: n
    } = this.props, s = null === (e = h.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, t = (0, c.F6)(n, m.default, p.Z), r = (0, d.Z)(n);
    return _.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: t,
      type: r,
      guild: s
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, r.jsx)(j, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
g(M, "defaultProps", {
  unread: !1
});
class L extends i.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: I.dmIconContainer,
      children: (0, r.jsx)(a.Avatar, {
        src: (0, l.x)(e),
        size: a.AvatarSizes.SIZE_20,
        "aria-hidden": !0
      })
    })
  }
  renderName() {
    let e;
    let {
      mentions: n,
      channel: s
    } = this.props;
    return null != n && n > 0 && (e = (0, r.jsx)(N.Z, {
      className: I.badge,
      value: n
    })), (0, r.jsxs)("div", {
      className: I.name,
      children: [(0, r.jsx)("span", {
        className: I.match,
        children: (0, c.F6)(s, m.default, p.Z)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: null != e && e > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: I.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: n
    } = this.props, s = (0, c.F6)(e, m.default, p.Z);
    return null != n && n > 0 ? _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: s,
      mentions: n
    }) : _.Z.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: s
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, r.jsx)(j, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class A extends i.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: I.iconContainer,
      children: (0, r.jsx)(a.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: a.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: n,
      comparator: s
    } = this.props, t = p.Z.getNickname(n.id);
    return ((e = s === n.tag || null == s || "" === s ? n.username : s) === n.username || e === n.id) && (e = null != t ? t : C.ZP.getName(n)), e
  }
  renderName() {
    let e;
    let {
      user: n,
      mentions: s
    } = this.props, t = this.getDisplayNickname();
    return null != s && s > 0 && (e = (0, r.jsx)(N.Z, {
      className: I.badge,
      value: s
    })), (0, r.jsxs)("div", {
      className: I.name,
      children: [(0, r.jsx)("span", {
        className: I.match,
        children: t
      }), e, (0, r.jsx)("span", {
        className: I.username,
        children: C.ZP.getUserTag(n)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: null != n && n > 0 ? I.contentUnread : I.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: I.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: n
    } = this.props, s = this.getDisplayNickname(), t = C.ZP.getUserTag(n);
    return null != e && e > 0 ? _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: s,
      id: t,
      mentions: e
    }) : _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: s,
      id: t
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, r.jsx)(j, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class Z extends i.Component {
  renderContent() {
    let {
      children: e,
      application: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: I.contentDefault,
      children: [(0, r.jsx)("div", {
        className: I.iconContainer,
        children: (0, r.jsx)(x.Z, {
          tabIndex: -1,
          className: I.gameIcon,
          game: n,
          size: I.gameIconSize
        })
      }), n.name, (0, r.jsx)("div", {
        className: I.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      focused: t,
      id: i
    } = this.props;
    return (0, r.jsx)(j, {
      id: i,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      focused: t,
      children: this.renderContent()
    })
  }
}
class b extends i.Component {
  render() {
    return (0, r.jsx)("div", {
      className: I.__invalid_resultDefault,
      children: (0, r.jsx)("div", {
        className: I.contentDefault,
        children: (0, r.jsx)("div", {
          className: I.header,
          children: this.props.children
        })
      })
    })
  }
}
class U extends i.Component {
  renderContent() {
    let e, n;
    let {
      link: s,
      children: t
    } = this.props, i = (0, u.Qj)(s.path);
    return null == i || void 0 === i.messageId ? (e = _.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN, n = (0, r.jsx)(a.LinkIcon, {
      size: "xs",
      color: "currentColor"
    })) : (0, u.VO)(i) ? (e = _.Z.Messages.QUICKSWITCHER_LINK_MESSAGE, n = (0, r.jsx)(a.ChatArrowRightIcon, {
      size: "xs",
      color: "currentColor"
    })) : (e = _.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS, n = (0, r.jsx)(a.LockIcon, {
      size: "xs",
      color: "currentColor"
    })), (0, r.jsxs)("div", {
      className: I.contentDefault,
      children: [(0, r.jsx)("div", {
        className: I.iconContainer,
        children: n
      }), e, (0, r.jsx)("div", {
        className: I.misc,
        children: t
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, r.jsx)(j, {
      id: l,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}