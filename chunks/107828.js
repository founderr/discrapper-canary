"use strict";
n.r(s), n.d(s, {
  Application: function() {
    return S
  },
  Channel: function() {
    return L
  },
  GroupDM: function() {
    return U
  },
  Guild: function() {
    return T
  },
  Header: function() {
    return D
  },
  Link: function() {
    return b
  },
  User: function() {
    return R
  }
}), n("47120");
var t, a = n("735250"),
  r = n("470079"),
  l = n("481060"),
  i = n("43267"),
  c = n("933557"),
  d = n("471445"),
  u = n("16206"),
  o = n("754688"),
  h = n("430824"),
  p = n("699516"),
  f = n("594174"),
  m = n("51144"),
  C = n("2093"),
  N = n("366695"),
  x = n("346656"),
  g = n("409216"),
  E = n("136033"),
  v = n("757698"),
  I = n("630641"),
  _ = n("689938"),
  j = n("259285");

function A(e, s, n) {
  return s in e ? Object.defineProperty(e, s, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = n, e
}
class M extends r.PureComponent {
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
      node: t
    } = this;
    null != t && s && !e.focused && n(t)
  }
  render() {
    let {
      focused: e,
      children: s,
      score: n,
      onContextMenu: t,
      id: r,
      "aria-label": i
    } = this.props;
    return (0, a.jsxs)(l.Clickable, {
      role: "option",
      id: r,
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
      children: [s, null != n ? (0, a.jsx)("div", {
        className: j.score,
        children: n >> 0
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), A(this, "node", void 0), A(this, "handleClick", e => {
      e.preventDefault();
      let {
        onClick: s
      } = this.props, {
        node: n
      } = this;
      null != n && s(e, n)
    }), A(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: s
      } = this.props, {
        node: n
      } = this;
      null != n && s(e, n)
    }), A(this, "setRef", e => {
      this.node = e
    })
  }
}
class T extends r.Component {
  renderIcon() {
    let {
      guild: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: j.guildIconContainer,
      children: (0, a.jsx)(x.default, {
        tabIndex: -1,
        guild: e,
        size: x.default.Sizes.MINI,
        className: j.guildIcon
      })
    })
  }
  renderName() {
    let {
      guild: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: j.name,
      children: (0, a.jsx)("span", {
        className: j.match,
        children: e.name
      })
    })
  }
  renderContent() {
    let {
      unread: e,
      children: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: e ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: j.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      guild: e
    } = this.props;
    return _.default.Messages.QUICK_SWITCHER_RESULTS_GUILD_LABEL.format({
      name: e.name
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      id: i
    } = this.props;
    return (0, a.jsx)(M, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      children: this.renderContent()
    })
  }
}
class L extends(t = r.Component) {
  renderIcon() {
    var e;
    let {
      channel: s
    } = this.props, n = (0, d.getChannelIconComponent)(s);
    if (null == n) return null;
    let t = null !== (e = (0, u.default)(s)) && void 0 !== e ? e : "";
    return (0, a.jsx)("div", {
      className: j.iconContainer,
      role: "img",
      "aria-label": t,
      children: (0, a.jsx)(n, {
        className: j.icon,
        width: 16,
        height: 16
      })
    })
  }
  renderName() {
    let e, s;
    let {
      mentions: n,
      category: t,
      channel: r
    } = this.props;
    return null != n && n > 0 && (e = (0, a.jsx)(C.default, {
      className: j.badge,
      value: n
    })), null != t && (s = (0, a.jsx)("span", {
      className: j.note,
      children: (0, c.computeChannelName)(t, f.default, p.default)
    })), (0, a.jsxs)("div", {
      className: j.name,
      children: [(0, a.jsx)("span", {
        className: j.match,
        children: (0, c.computeChannelName)(r, f.default, p.default)
      }), e, this.renderVoiceStates(), s]
    })
  }
  renderVoiceStates() {
    let {
      voiceStates: e,
      channel: s
    } = this.props;
    return null == e ? null : (0, a.jsx)(g.default, {
      className: j.voiceSummaryContainer,
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
    return (0, a.jsxs)("div", {
      "aria-hidden": !0,
      className: e || null != s && s > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: j.misc,
        children: n
      })]
    })
  }
  getAccessibilityLabel() {
    var e;
    let {
      channel: s
    } = this.props, n = null === (e = h.default.getGuild(this.props.channel.guild_id)) || void 0 === e ? void 0 : e.name, t = (0, c.computeChannelName)(s, f.default, p.default), a = (0, u.default)(s);
    return _.default.Messages.QUICK_SWITCHER_RESULTS_CHANNEL_LABEL.format({
      name: t,
      type: a,
      guild: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      id: i
    } = this.props;
    return (0, a.jsx)(M, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      children: this.renderContent()
    })
  }
}
A(L, "defaultProps", {
  unread: !1
});
class U extends r.Component {
  renderIcon() {
    let {
      channel: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: j.dmIconContainer,
      children: (0, a.jsx)(l.Avatar, {
        src: (0, i.getChannelIconURL)(e),
        size: l.AvatarSizes.SIZE_20,
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
    return null != s && s > 0 && (e = (0, a.jsx)(C.default, {
      className: j.badge,
      value: s
    })), (0, a.jsxs)("div", {
      className: j.name,
      children: [(0, a.jsx)("span", {
        className: j.match,
        children: (0, c.computeChannelName)(n, f.default, p.default)
      }), e]
    })
  }
  renderContent() {
    let {
      mentions: e,
      children: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: null != e && e > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: j.misc,
        children: s
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      channel: e,
      mentions: s
    } = this.props, n = (0, c.computeChannelName)(e, f.default, p.default);
    return null != s && s > 0 ? _.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_UNREAD_LABEL.format({
      name: n,
      mentions: s
    }) : _.default.Messages.QUICK_SWITCHER_RESULTS_GROUP_DM_LABEL.format({
      name: n
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      id: i
    } = this.props;
    return (0, a.jsx)(M, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      children: this.renderContent()
    })
  }
}
class R extends r.Component {
  renderIcon() {
    let {
      user: e
    } = this.props;
    return (0, a.jsx)("div", {
      className: j.iconContainer,
      children: (0, a.jsx)(l.Avatar, {
        src: e.getAvatarURL(void 0, 20),
        "aria-hidden": !0,
        size: l.AvatarSizes.SIZE_20
      })
    })
  }
  getDisplayNickname() {
    let e;
    let {
      user: s,
      comparator: n
    } = this.props, t = p.default.getNickname(s.id);
    return ((e = n === s.tag || null == n || "" === n ? s.username : n) === s.username || e === s.id) && (e = null != t ? t : m.default.getName(s)), e
  }
  renderName() {
    let e;
    let {
      user: s,
      mentions: n
    } = this.props, t = this.getDisplayNickname();
    return null != n && n > 0 && (e = (0, a.jsx)(C.default, {
      className: j.badge,
      value: n
    })), (0, a.jsxs)("div", {
      className: j.name,
      children: [(0, a.jsx)("span", {
        className: j.match,
        children: t
      }), e, (0, a.jsx)("span", {
        className: j.username,
        children: m.default.getUserTag(s)
      })]
    })
  }
  renderContent() {
    let {
      children: e,
      mentions: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: null != s && s > 0 ? j.contentUnread : j.contentDefault,
      children: [this.renderIcon(), this.renderName(), (0, a.jsx)("div", {
        className: j.misc,
        children: e
      })]
    })
  }
  getAccessibilityLabel() {
    let {
      mentions: e,
      user: s
    } = this.props, n = this.getDisplayNickname(), t = m.default.getUserTag(s);
    return null != e && e > 0 ? _.default.Messages.QUICK_SWITCHER_RESULTS_USER_UNREAD_LABEL.format({
      name: n,
      id: t,
      mentions: e
    }) : _.default.Messages.QUICK_SWITCHER_RESULTS_USER_LABEL.format({
      name: n,
      id: t
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      id: i
    } = this.props;
    return (0, a.jsx)(M, {
      id: i,
      "aria-label": this.getAccessibilityLabel(),
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      children: this.renderContent()
    })
  }
}
class S extends r.Component {
  renderContent() {
    let {
      children: e,
      application: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: j.contentDefault,
      children: [(0, a.jsx)("div", {
        className: j.iconContainer,
        children: (0, a.jsx)(N.default, {
          tabIndex: -1,
          className: j.gameIcon,
          game: s,
          size: j.gameIconSize
        })
      }), s.name, (0, a.jsx)("div", {
        className: j.misc,
        children: e
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      focused: t,
      id: r
    } = this.props;
    return (0, a.jsx)(M, {
      id: r,
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      focused: t,
      children: this.renderContent()
    })
  }
}
class D extends r.Component {
  render() {
    return (0, a.jsx)("div", {
      className: j.__invalid_resultDefault,
      children: (0, a.jsx)("div", {
        className: j.contentDefault,
        children: (0, a.jsx)("div", {
          className: j.header,
          children: this.props.children
        })
      })
    })
  }
}
class b extends r.Component {
  renderContent() {
    let e, s;
    let {
      link: n,
      children: t
    } = this.props, r = (0, o.tryParseChannelPath)(n.path);
    return null == r || void 0 === r.messageId ? (e = _.default.Messages.QUICKSWITCHER_LINK_UNKNOWN, s = (0, a.jsx)(v.default, {
      width: 16,
      height: 16
    })) : (0, o.isAccessibleChannelPath)(r) ? (e = _.default.Messages.QUICKSWITCHER_LINK_MESSAGE, s = (0, a.jsx)(E.default, {
      width: 16,
      height: 16
    })) : (e = _.default.Messages.QUICKSWITCHER_LINK_NO_ACCESS, s = (0, a.jsx)(I.default, {
      width: 16,
      height: 16
    })), (0, a.jsxs)("div", {
      className: j.contentDefault,
      children: [(0, a.jsx)("div", {
        className: j.iconContainer,
        children: s
      }), e, (0, a.jsx)("div", {
        className: j.misc,
        children: t
      })]
    })
  }
  render() {
    let {
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      id: i
    } = this.props;
    return (0, a.jsx)(M, {
      id: i,
      onMouseEnter: e,
      onClick: s,
      onFocus: n,
      onContextMenu: t,
      focused: r,
      score: l,
      children: this.renderContent()
    })
  }
}