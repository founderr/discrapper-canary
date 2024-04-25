"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("47120"), s("653041");
var a, i, n = s("735250"),
  l = s("470079"),
  r = s("392711"),
  d = s.n(r),
  o = s("913527"),
  u = s.n(o),
  c = s("699581"),
  h = s("374470"),
  S = s("442837"),
  N = s("692547"),
  g = s("481060"),
  f = s("92114"),
  m = s("798140"),
  E = s("740504"),
  T = s("933557"),
  _ = s("471445"),
  x = s("423589"),
  I = s("74888"),
  O = s("444899"),
  C = s("11352"),
  p = s("610617"),
  M = s("777861"),
  v = s("131704"),
  L = s("592125"),
  A = s("324067"),
  j = s("650774"),
  R = s("430824"),
  b = s("699516"),
  U = s("9156"),
  G = s("594174"),
  F = s("285952"),
  P = s("353872"),
  D = s("823379"),
  y = s("63063"),
  k = s("621600"),
  H = s("981631"),
  w = s("969943"),
  B = s("689938"),
  Y = s("154460");

function V(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(i = a || (a = {})).MUTED = "muted", i.MESSAGE_NOTIFICATIONS = "message_notifications", i.SUPPRESS_EVERYONE = "suppress_everyone", i.SUPPRESS_ROLES = "suppress_roles", i.MOBILE_PUSH = "mobile_push", i.MUTE_EVENTS = "mute_scheduled_events", i.NOTIFY_HIGHLIGHTS = "notify_highlights";
class W extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: s,
      channelOverridesProp: a
    } = t;
    return e.channelOverrides !== a ? (s = new Set(s), (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
      overrides: s,
      channelOverridesProp: e.channelOverrides
    }) : null
  }
  componentDidUpdate(e, t) {
    let {
      lastSelected: s
    } = this.state, a = null != s ? this._channelRefs[s] : null;
    if (null != this._scroller && null != a && s !== t.lastSelected) {
      let e = (0, c.findDOMNode)(a);
      if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
        var i;
        null === (i = this._scroller) || void 0 === i || i.scrollIntoViewNode({
          node: e,
          animate: !0,
          padding: 20,
          callback: () => this.setState({
            lastSelected: null
          })
        }), a.highlight()
      }
    }
    if (this.props.channelOverrides !== e.channelOverrides) {
      let {
        overrides: e
      } = this.state;
      e = new Set(e), (0, x.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
        overrides: e
      })
    }
  }
  handleCheckboxChange(e, t, s) {
    f.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: t
    }, s)
  }
  handleRadioChange(e, t, s) {
    let {
      value: a
    } = t;
    f.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: a
    }, s)
  }
  renderHeader() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : (0, n.jsxs)(g.ModalHeader, {
      children: [(0, n.jsxs)(F.default.Child, {
        children: [(0, n.jsx)(g.Heading, {
          variant: "heading-lg/semibold",
          children: B.default.Messages.NOTIFICATION_SETTINGS
        }), (0, n.jsx)(g.Text, {
          variant: "text-md/normal",
          className: Y.guildName,
          children: e.name
        })]
      }), (0, n.jsx)(F.default.Child, {
        grow: 0,
        children: (0, n.jsx)(g.ModalCloseButton, {
          onClick: this.props.onClose
        })
      })]
    })
  }
  renderFooter() {
    return (0, n.jsx)(g.ModalFooter, {
      children: (0, n.jsx)(g.Button, {
        onClick: this.props.onClose,
        children: B.default.Messages.DONE
      })
    })
  }
  renderMute() {
    var e;
    let {
      muted: t,
      muteConfig: s,
      guild: a
    } = this.props, i = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : w.MuteUntilSeconds.ALWAYS;
    return null == a ? null : (0, n.jsxs)(g.FormItem, {
      className: Y.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: e => this.handleCheckboxChange("muted", e, k.NotificationLabel.muted(e)),
        note: B.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
        children: B.default.Messages.FORM_LABEL_MUTE_SERVER.format({
          name: a.name
        })
      }), t ? (0, n.jsxs)(F.default, {
        className: Y.spacing,
        align: F.default.Align.CENTER,
        children: [(0, n.jsxs)(F.default, {
          direction: F.default.Direction.VERTICAL,
          className: Y.__invalid_muteUntilTextWrapper,
          children: [(0, n.jsx)(g.FormTitle, {
            tag: "h3",
            className: Y.muteUntilTitle,
            children: B.default.Messages.MUTE_UNTIL
          }), (0, n.jsx)(M.default, {
            className: Y.muteUntilText,
            muteConfig: s
          })]
        }), (0, n.jsx)(g.SingleSelect, {
          className: Y.muteTimeSelector,
          options: (0, x.getMuteTimeOptions)(),
          value: i,
          onChange: this.handleSelectMuteTime
        })]
      }) : null, (0, n.jsx)(g.FormDivider, {})]
    })
  }
  renderServerSettings() {
    var e;
    let {
      messageNotifications: t,
      muted: s,
      memberCount: a
    } = this.props;
    return (0, n.jsxs)("div", {
      className: Y.spacing,
      children: [(0, n.jsx)(g.FormItem, {
        title: B.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
        className: Y.largeSpacing,
        children: (0, n.jsx)(g.RadioGroup, {
          disabled: s,
          value: t,
          onChange: e => this.handleRadioChange("message_notifications", e, k.NotificationLabel.notifications(e.value)),
          options: (e = a, [{
            name: B.default.Messages.FORM_LABEL_ALL_MESSAGES,
            value: H.UserNotificationSettings.ALL_MESSAGES,
            desc: null != e && e >= H.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? B.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
          }, {
            name: B.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
            value: H.UserNotificationSettings.ONLY_MENTIONS
          }, {
            name: B.default.Messages.FORM_LABEL_NOTHING,
            value: H.UserNotificationSettings.NO_MESSAGES
          }])
        })
      }), (0, n.jsx)(g.FormDivider, {})]
    })
  }
  renderNotificationOptions() {
    let {
      suppressEveryone: e,
      suppressRoles: t,
      mobilePush: s,
      muted: a,
      muteEvents: i,
      notifyHighlights: l,
      guildId: r
    } = this.props;
    return (0, n.jsxs)(g.FormItem, {
      className: Y.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, k.NotificationLabel.suppressEveryone(e)),
        value: e,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, k.NotificationLabel.suppressRoles(e)),
        value: t,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_ROLES
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => {
          f.default.updateGuildNotificationSettings(r, {
            notify_highlights: e ? H.HighlightSettings.DISABLED : H.HighlightSettings.ENABLED
          }, k.NotificationLabel.highlights(!e))
        },
        value: a || l === H.HighlightSettings.DISABLED,
        disabled: a,
        note: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: B.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }), (0, n.jsx)("div", {
            className: Y.highlightsLink,
            children: (0, n.jsx)(g.Anchor, {
              href: y.default.getArticleURL(H.HelpdeskArticles.HIGHLIGHTS),
              children: B.default.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })]
        }),
        children: (0, n.jsx)(n.Fragment, {
          children: B.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
        })
      }), (0, n.jsx)(g.FormSwitch, {
        value: i,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, k.NotificationLabel.mutedEvents(e)),
        children: B.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
      }), (0, n.jsx)(g.FormSwitch, {
        value: !a && s,
        disabled: a,
        onChange: e => this.handleCheckboxChange("mobile_push", e, k.NotificationLabel.mobilePush(e)),
        children: B.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
      })]
    })
  }
  renderCustomNotificationSoundOptions() {
    let {
      shouldShowCustomNotificationSounds: e,
      guildId: t,
      onClose: s
    } = this.props;
    if (e) return (0, n.jsx)(p.default, {
      guildId: t,
      onClose: s
    })
  }
  renderOverrideSelect() {
    let {
      channels: e,
      categories: t
    } = this.props, s = d()(e).filter(e => {
      let {
        channel: s
      } = e;
      return s.type !== H.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, T.computeChannelName)(t, G.default, b.default)
      }
    }).value();
    return (0, n.jsxs)(g.FormItem, {
      title: B.default.Messages.NOTIFICATION_OVERRIDES,
      className: Y.largeSpacing,
      children: [(0, n.jsx)(g.FormText, {
        type: g.FormText.Types.DESCRIPTION,
        className: Y.smallSpacing,
        children: B.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      }), (0, n.jsx)(g.SearchableSelect, {
        value: H.EMPTY_STRING_SNOWFLAKE_ID,
        placeholder: B.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
        renderOptionLabel: this.renderOptionLabel,
        options: s,
        onChange: this.handleSelectChange
      })]
    })
  }
  renderChannelNotifications() {
    let {
      channelOverrides: e,
      muted: t,
      channels: s,
      messageNotifications: a,
      categories: i,
      checkboxColor: l
    } = this.props, {
      overrides: r
    } = this.state, d = s.map(s => {
      let {
        channel: d
      } = s;
      if (!r.has(d.id) || null != i[d.id] && 0 === i[d.id].length) return null;
      let o = e[d.id];
      return (0, n.jsx)(O.ChannelNotificationSettings, {
        ref: e => {
          this._channelRefs[d.id] = e
        },
        channel: d,
        guildMuted: t,
        muted: null != o && (0, m.computeIsMuted)(o),
        messageNotifications: null != o ? o.message_notifications : null,
        guildMessageNotifications: a,
        onDelete: this.handleDeleteOverride,
        checkboxColor: l
      }, d.id)
    }).filter(D.isNotNullish);
    return (0 === r.size || 0 === d.length) && d.push((0, n.jsx)("div", {
      className: Y.overridePlaceholder,
      children: (0, n.jsx)(g.Text, {
        className: Y.overrideHeader,
        variant: "text-sm/semibold",
        children: B.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      })
    }, "placeholder")), (0, n.jsxs)("div", {
      className: Y.overrideList,
      children: [(0, n.jsxs)(F.default, {
        children: [(0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: Y.headerName,
          children: B.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_ALL
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_MENTIONS
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_NOTHING
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: (0, n.jsx)(g.Tooltip, {
            text: B.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
            position: "bottom",
            children: e => (0, n.jsx)("span", {
              ...e,
              children: B.default.Messages.SOUND_MUTE
            })
          })
        })]
      }), d]
    })
  }
  render() {
    return (0, n.jsxs)(g.ModalRoot, {
      "aria-label": B.default.Messages.NOTIFICATION_SETTINGS,
      size: g.ModalSize.MEDIUM,
      transitionState: this.props.transitionState,
      children: [this.renderHeader(), (0, n.jsxs)(g.ModalContent, {
        scrollerRef: this.setScrollerRef,
        children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
      }), this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), V(this, "_scroller", null), V(this, "_channelRefs", {}), V(this, "state", {
      overrides: new Set((0, x.filterOverrides)(this.props.channelOverrides)),
      channelOverridesProp: this.props.channelOverrides,
      lastSelected: null
    }), V(this, "setScrollerRef", e => {
      this._scroller = e
    }), V(this, "handleSelectChange", e => {
      if (null == e) return;
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).add(e), this.setState({
        overrides: t,
        lastSelected: e
      })
    }), V(this, "handleSelectMuteTime", e => {
      let t = e > 0 ? u()().add(e, "second").toISOString() : null;
      f.default.updateGuildNotificationSettings(this.props.guildId, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: t
        }
      }, k.NotificationLabels.Muted)
    }), V(this, "handleDeleteOverride", e => {
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).delete(e), this.setState({
        overrides: t
      })
    }), V(this, "renderOptionLabel", e => {
      let t = L.default.getChannel(e.value);
      if (null == t) return e.label;
      let s = L.default.getChannel(t.parent_id),
        a = null != s ? s.name : null;
      return (0, n.jsx)(P.default, {
        icon: (0, _.getChannelIconComponent)(t),
        title: e.label,
        subtitle: a
      })
    })
  }
}

function z(e) {
  let {
    guildId: t,
    ...s
  } = e, a = (0, S.useStateFromStoresObject)([A.default, R.default, j.default, U.default], () => {
    let e = A.default.getCategories(t);
    return {
      guildId: t,
      categories: e,
      guild: R.default.getGuild(t),
      memberCount: j.default.getMemberCount(t),
      suppressEveryone: U.default.isSuppressEveryoneEnabled(t),
      suppressRoles: U.default.isSuppressRolesEnabled(t),
      muteEvents: U.default.isMuteScheduledEventsEnabled(t),
      mobilePush: U.default.isMobilePushEnabled(t),
      muted: U.default.isMuted(t),
      muteConfig: U.default.getMuteConfig(t),
      messageNotifications: U.default.getMessageNotifications(t),
      channelOverrides: U.default.getChannelOverrides(t),
      channels: (0, E.default)(e._categories, e, e => {
        let {
          channel: {
            type: t
          }
        } = e;
        return (0, v.isGuildSelectableChannelType)(t) || t === H.ChannelTypes.GUILD_CATEGORY
      }),
      notifyHighlights: U.default.getNotifyHighlights(t)
    }
  }), i = C.CustomNotificationSoundExperiment.useExperiment({
    location: "connected_notification_settings"
  }, {
    autoTrackExposure: !0
  }).enabled, l = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
  return (0, n.jsx)(W, {
    ...a,
    ...s,
    shouldShowCustomNotificationSounds: i,
    checkboxColor: l
  })
}

function X(e) {
  let t = (0, x.useShouldUseNewNotificationSystem)("NotificationSettingsModal") ? I.default : z;
  return (0, n.jsx)(t, {
    ...e
  })
}