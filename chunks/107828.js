"use strict";
s.r(n), s.d(n, {
  Application: function() {
    return U
  },
  Channel: function() {
    return M
  },
  GroupDM: function() {
    return S
  },
  Guild: function() {
    return A
  },
  Header: function() {
    return R
  },
  Link: function() {
    return D
  },
  User: function() {
    return b
  }
}), s("47120");
var t, r = s("735250"),
  a = s("470079"),
  l = s("481060"),
  i = s("43267"),
  c = s("933557"),
  d = s("471445"),
  u = s("16206"),
  o = s("754688"),
  h = s("430824"),
  p = s("699516"),
  f = s("594174"),
  m = s("51144"),
  C = s("2093"),
  E = s("366695"),
  N = s("346656"),
  x = s("409216"),
  _ = s("136033"),
  I = s("757698"),
  g = s("630641"),
  v = s("689938"),
  j = s("259285");

function T(e, n, s) {
  return n in e ? Object.defineProperty(e, n, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = s, e
}
class L extends a.PureComponent {
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
      id: a,
      "aria-label": i
    } = this.props;
    return (0, r.jsxs)(l.Clickable, {
      role: "option",
      id: a,
      "aria-label": i,
      "aria-selected": e,
      focusProps: {
        enabled: !1
      },
      tabIndex: -1,
      innerRef: this.setRef,
      className: j.result,
      onClick: this.handleClick,
      onMouseEnter: this.handleMouseEnter,
      onContextMenu: t,
      children: [n, null != s ? (0, r.jsx)("div", {
        className: j.score,
        children: s >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), T(this, "node", void 0), T(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), T(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: n
      } = this.props, {
        node: s
      } = this;
      null != s && n(e, s)
    }), T(this, "setRef", e => {
      this.node = e
    })
  }
}
class A extends a.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: j.guildIconContainer,
      children: (0, r.jsx)(N.default, {
        tabIndex: -1,
        guild: e,
        size: N.default.Sizes.MINI,
        className: j.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: j.name,
      children: (0, r.jsx)("span", {
        className: j.match,
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
      className: e ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: j.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return v.default.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      id: i
    } = this.props;
    return (0, r.jsx)(L, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      children: this.renderContent()
    })
  }
}
class M extends(t = a.Component) {
  renderIcon() {
    var e;
    let {
      channel: n
    } = this.props, s = (0, d.getChannelIconComponent)(n);
    if (null == s) return null;
    let t = null !== (e = (0, u.default)(n)) && void 0 !== e ? e : "";
    return (0, r.jsx)("div", {
      className: j.iconContainer,
      role: "img",
      "aria-label": t,
      children: (0, r.jsx)(s, {
        className: j.icon,
        width: 16,
        height: 16
      })
    })
  }
  renderName() {
    let e, n;
    let {
      mentions: s,
      category: t,
      channel: a
    } = this.props;
    return null != s && s > 0 && (e = (0, r.jsx)(C.default, {
      className: j.badge,
      value: s
    })), null != t && (n = (0, r.jsx)("span", {
      className: j.note,
      children: (0, c.computeChannelName)(t, f.default, p.default)
    })), (0, r.jsxs)("div", {
      className: j.name,
      children: [(0, r.jsx)("span", {
        className: j.match,
        children: (0, c.computeChannelName)(a, f.default, p.default)
      }), e, this.renderVoiceStates(), n]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: n
    } = this.props;
    return null == e ? null : (0, r.jsx)(x.default, {
      className: j.voiceSummaryContainer,
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
      className: e || null != n && n > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: j.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: n
    } = this.props, s = null === (e = h.default.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, t = (0, c.computeChannelName)(n, f.default, p.default), r = (0, u.default)(n);
    return v.default.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
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
      focused: a,
      score: l,
      id: i
    } = this.props;
    return (0, r.jsx)(L, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      children: this.renderContent()
    })
  }
}
T(M, "defaultProps", {
  unread: !1
});
class S extends a.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: j.dmIconContainer,
      children: (0, r.jsx)(l.Avatar, {
        src: (0, i.getChannelIconURL)(e),
        size: l.AvatarSizes.SIZE_20,
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
    return null != n && n > 0 && (e = (0, r.jsx)(C.default, {
      className: j.badge,
      value: n
    })), (0, r.jsxs)("div", {
      className: j.name,
      children: [(0, r.jsx)("span", {
        className: j.match,
        children: (0, c.computeChannelName)(s, f.default, p.default)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: null != e && e > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: j.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: n
    } = this.props, s = (0, c.computeChannelName)(e, f.default, p.default);
    return null != n && n > 0 ? v.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: s,
      mentions: n
    }) : v.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: s
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      id: i
    } = this.props;
    return (0, r.jsx)(L, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      children: this.renderContent()
    })
  }
}
class b extends a.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, r.jsx)("div", {
      className: j.iconContainer,
      children: (0, r.jsx)(l.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: l.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: n,
      comparator: s
    } = this.props, t = p.default.getNickname(n.id);
    return ((e = s === n.tag || null == s || "" === s ? n.username : s) === n.username || e === n.id) && (e = null != t ? t : m.default.getName(n)), e
  }
  renderName() {
    let e;
    let {
      user: n,
      mentions: s
    } = this.props, t = this.getDisplayNickname();
    return null != s && s > 0 && (e = (0, r.jsx)(C.default, {
      className: j.badge,
      value: s
    })), (0, r.jsxs)("div", {
      className: j.name,
      children: [(0, r.jsx)("span", {
        className: j.match,
        children: t
      }), e, (0, r.jsx)("span", {
        className: j.username,
        children: m.default.getUserTag(n)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: null != n && n > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, r.jsx)("div", {
        className: j.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: n
    } = this.props, s = this.getDisplayNickname(), t = m.default.getUserTag(n);
    return null != e && e > 0 ? v.default.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: s,
      id: t,
      mentions: e
    }) : v.default.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
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
      focused: a,
      score: l,
      id: i
    } = this.props;
    return (0, r.jsx)(L, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      children: this.renderContent()
    })
  }
}
class U extends a.Component {
  renderContent() {
    let {
      children: e,
      application: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: j.contentDefault,
      children: [(0, r.jsx)("div", {
        className: j.iconContainer,
        children: (0, r.jsx)(E.default, {
          tabIndex: -1,
          className: j.gameIcon,
          game: n,
          size: j.gameIconSize
        })
      }), n.name, (0, r.jsx)("div", {
        className: j.misc,
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
      id: a
    } = this.props;
    return (0, r.jsx)(L, {
      id: a,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      focused: t,
      children: this.renderContent()
    })
  }
}
class R extends a.Component {
  render() {
    return (0, r.jsx)("div", {
      className: j.__invalid_resultDefault,
      children: (0, r.jsx)("div", {
        className: j.contentDefault,
        children: (0, r.jsx)("div", {
          className: j.header,
          children: this.props.children
        })
      })
    })
  }
}
class D extends a.Component {
  renderContent() {
    let e, n;
    let {
      link: s,
      children: t
    } = this.props, a = (0, o.tryParseChannelPath)(s.path);
    return null == a || void 0 === a.messageId ? (e = v.default.Messages.QUICKSWITCHER_LINK_UNKNOWN, n = (0, r.jsx)(I.default, {
      width: 16,
      height: 16
    })) : (0, o.isAccessibleChannelPath)(a) ? (e = v.default.Messages.QUICKSWITCHER_LINK_MESSAGE, n = (0, r.jsx)(_.default, {
      width: 16,
      height: 16
    })) : (e = v.default.Messages.QUICKSWITCHER_LINK_NO_ACCESS, n = (0, r.jsx)(g.default, {
      width: 16,
      height: 16
    })), (0, r.jsxs)("div", {
      className: j.contentDefault,
      children: [(0, r.jsx)("div", {
        className: j.iconContainer,
        children: n
      }), e, (0, r.jsx)("div", {
        className: j.misc,
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
      focused: a,
      score: l,
      id: i
    } = this.props;
    return (0, r.jsx)(L, {
      id: i,
      onMouseEnter: e,
      onClick: n,
      onFocus: s,
      onContextMenu: t,
      focused: a,
      score: l,
      children: this.renderContent()
    })
  }
}