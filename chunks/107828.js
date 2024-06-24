s.d(n, {
  $W: function() {
    return M
  },
  Mx: function() {
    return b
  },
  PZ: function() {
    return L
  },
  h4: function() {
    return A
  },
  ic: function() {
    return j
  },
  n5: function() {
    return Z
  },
  rU: function() {
    return U
  }
}), s(47120);
var r, t = s(735250),
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
  N = s(51144),
  C = s(2093),
  x = s(366695),
  f = s(346656),
  E = s(409216),
  _ = s(689938),
  g = s(431172);

function I(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = s, e
}
class v extends i.PureComponent {
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
      node: r
    } = this;
    null != r && n && !e.focused && s(r)
  }
  render() {
    let {
      focused: e,
      children: n,
      score: s,
      onContextMenu: r,
      id: i,
      "aria-label": l
    } = this.props;
    return (0, t.jsxs)(a.Clickable, {
      role: "option",
      id: i,
      "aria-label": l,
      "aria-selected": e,
      focusProps: {
        enabled: !1
      },
      tabIndex: -1,
      innerRef: this.setRef,
      className: g.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: r,
      children: [n, null != s ? (0, t.jsx)("div", {
        className: g.score,
        children: s >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), I(this, "node", void 0), I(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), I(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), I(this, "setRef", e => {
      this.node = e
    })
  }
}
class j extends i.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: g.guildIconContainer,
      children: (0, t.jsx)(f.Z, {
        tabIndex: -1,
        guild: e,
        size: f.Z.Sizes.MINI,
        className: g.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: g.name,
      children: (0, t.jsx)("span", {
        className: g.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: n
    } = this.props;
    return (0, t.jsxs)("div", {
      className: e ? g.contentUnread : g.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: g.misc,
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
      onContextMenu: r,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class M extends(r = i.Component) {
  renderIcon() {
    var e;
    let {
      channel: n
    } = this.props, s = (0, o.KS)(n);
    if (null == s) return null;
    let r = null !== (e = (0, d.Z)(n)) && void 0 !== e ? e : "";
    return (0, t.jsx)("div", {
      className: g.iconContainer,
      role: "img",
      "aria-label": r,
      children: (0, t.jsx)(s, {
        className: g.icon,
        size: "xs",
        color: "currentColor"
      })
    })
  }
  renderName() {
    let e, n;
    let {
      mentions: s,
      category: r,
      channel: i
    } = this.props;
    return null != s && s > 0 && (e = (0, t.jsx)(C.Z, {
      className: g.badge,
      value: s
    })), null != r && (n = (0, t.jsx)("span", {
      className: g.note,
      children: (0, c.F6)(r, m.default, p.Z)
    })), (0, t.jsxs)("div", {
      className: g.name,
      children: [(0, t.jsx)("span", {
        className: g.match,
        children: (0, c.F6)(i, m.default, p.Z)
      }), e, this.renderVoiceStates(), n]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: n
    } = this.props;
    return null == e ? null : (0, t.jsx)(E.Z, {
      className: g.voiceSummaryContainer,
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
    return (0, t.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != n && n > 0 ? g.contentUnread : g.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: g.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: n
    } = this.props, s = null === (e = h.Z.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, r = (0, c.F6)(n, m.default, p.Z), t = (0, d.Z)(n);
    return _.Z.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: r,
      type: t,
      guild: s
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
I(M, "defaultProps", {
  unread: !1
});
class L extends i.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: g.dmIconContainer,
      children: (0, t.jsx)(a.Avatar, {
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
    return null != n && n > 0 && (e = (0, t.jsx)(C.Z, {
      className: g.badge,
      value: n
    })), (0, t.jsxs)("div", {
      className: g.name,
      children: [(0, t.jsx)("span", {
        className: g.match,
        children: (0, c.F6)(s, m.default, p.Z)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: n
    } = this.props;
    return (0, t.jsxs)("div", {
      className: null != e && e > 0 ? g.contentUnread : g.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: g.misc,
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
      onContextMenu: r,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class Z extends i.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, t.jsx)("div", {
      className: g.iconContainer,
      children: (0, t.jsx)(a.Avatar, {
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
    } = this.props, r = p.Z.getNickname(n.id);
    return ((e = s === n.tag || null == s || "" === s ? n.username : s) === n.username || e === n.id) && (e = null != r ? r : N.ZP.getName(n)), e
  }
  renderName() {
    let e;
    let {
      user: n,
      mentions: s
    } = this.props, r = this.getDisplayNickname();
    return null != s && s > 0 && (e = (0, t.jsx)(C.Z, {
      className: g.badge,
      value: s
    })), (0, t.jsxs)("div", {
      className: g.name,
      children: [(0, t.jsx)("span", {
        className: g.match,
        children: r
      }), e, (0, t.jsx)("span", {
        className: g.username,
        children: N.ZP.getUserTag(n)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: n
    } = this.props;
    return (0, t.jsxs)("div", {
      className: null != n && n > 0 ? g.contentUnread : g.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, t.jsx)("div", {
        className: g.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: n
    } = this.props, s = this.getDisplayNickname(), r = N.ZP.getUserTag(n);
    return null != e && e > 0 ? _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: s,
      id: r,
      mentions: e
    }) : _.Z.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: s,
      id: r
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}
class b extends i.Component {
  renderContent() {
    let {
      children: e,
      application: n
    } = this.props;
    return (0, t.jsxs)("div", {
      className: g.contentDefault,
      children: [(0, t.jsx)("div", {
        className: g.iconContainer,
        children: (0, t.jsx)(x.Z, {
          tabIndex: -1,
          className: g.gameIcon,
          game: n,
          size: g.gameIconSize
        })
      }), n.name, (0, t.jsx)("div", {
        className: g.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      focused: r,
      id: i
    } = this.props;
    return (0, t.jsx)(v, {
      id: i,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      focused: r,
      children: this.renderContent()
    })
  }
}
class A extends i.Component {
  render() {
    return (0, t.jsx)("div", {
      className: g.__invalid_resultDefault,
      children: (0, t.jsx)("div", {
        className: g.contentDefault,
        children: (0, t.jsx)("div", {
          className: g.header,
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
      children: r
    } = this.props, i = (0, u.Qj)(s.path);
    return null == i || void 0 === i.messageId ? (e = _.Z.Messages.QUICKSWITCHER_LINK_UNKNOWN, n = (0, t.jsx)(a.LinkIcon, {
      size: "xs",
      color: "currentColor"
    })) : (0, u.VO)(i) ? (e = _.Z.Messages.QUICKSWITCHER_LINK_MESSAGE, n = (0, t.jsx)(a.ChatArrowRightIcon, {
      size: "xs",
      color: "currentColor"
    })) : (e = _.Z.Messages.QUICKSWITCHER_LINK_NO_ACCESS, n = (0, t.jsx)(a.LockIcon, {
      size: "xs",
      color: "currentColor"
    })), (0, t.jsxs)("div", {
      className: g.contentDefault,
      children: [(0, t.jsx)("div", {
        className: g.iconContainer,
        children: n
      }), e, (0, t.jsx)("div", {
        className: g.misc,
        children: r
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      id: l
    } = this.props;
    return (0, t.jsx)(v, {
      id: l,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: r,
      focused: i,
      score: a,
      children: this.renderContent()
    })
  }
}