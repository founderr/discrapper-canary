"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("47120"), s("653041");
var i, n, a = s("735250"),
  l = s("470079"),
  r = s("392711"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("699581"),
  h = s("374470"),
  S = s("442837"),
  N = s("692547"),
  f = s("481060"),
  g = s("92114"),
  m = s("798140"),
  E = s("740504"),
  _ = s("933557"),
  x = s("471445"),
  T = s("423589"),
  p = s("74888"),
  C = s("444899"),
  O = s("11352"),
  I = s("610617"),
  M = s("777861"),
  v = s("131704"),
  L = s("592125"),
  j = s("324067"),
  A = s("650774"),
  R = s("430824"),
  b = s("699516"),
  U = s("9156"),
  G = s("594174"),
  F = s("285952"),
  D = s("353872"),
  P = s("823379"),
  H = s("63063"),
  y = s("621600"),
  w = s("981631"),
  k = s("969943"),
  B = s("689938"),
  Y = s("154460");

function V(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(n = i || (i = {})).MUTED = "muted", n.MESSAGE_NOTIFICATIONS = "message_notifications", n.SUPPRESS_EVERYONE = "suppress_everyone", n.SUPPRESS_ROLES = "suppress_roles", n.MOBILE_PUSH = "mobile_push", n.MUTE_EVENTS = "mute_scheduled_events", n.NOTIFY_HIGHLIGHTS = "notify_highlights";
class W extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: s,
      channelOverridesProp: i
    } = t;
    return e.channelOverrides !== i ? (s = new Set(s), (0, T.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
      overrides: s,
      channelOverridesProp: e.channelOverrides
    }) : null
  }
  componentDidUpdate(e, t) {
    let {
      lastSelected: s
    } = this.state, i = null != s ? this._channelRefs[s] : null;
    if (null != this._scroller && null != i && s !== t.lastSelected) {
      let e = (0, c.findDOMNode)(i);
      if (null != this._scroller && (0, h.isElement)(e, HTMLElement)) {
        var n;
        null === (n = this._scroller) || void 0 === n || n.scrollIntoViewNode({
          node: e,
          animate: !0,
          padding: 20,
          callback: () => this.setState({
            lastSelected: null
          })
        }), i.highlight()
      }
    }
    if (this.props.channelOverrides !== e.channelOverrides) {
      let {
        overrides: e
      } = this.state;
      e = new Set(e), (0, T.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
        overrides: e
      })
    }
  }
  handleCheckboxChange(e, t, s) {
    g.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: t
    }, s)
  }
  handleRadioChange(e, t, s) {
    let {
      value: i
    } = t;
    g.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: i
    }, s)
  }
  renderHeader() {
    let {
      guild: e
    } = this.props;
    return null == e ? null : (0, a.jsxs)(f.ModalHeader, {
      children: [(0, a.jsxs)(F.default.Child, {
        children: [(0, a.jsx)(f.Heading, {
          variant: "heading-lg/semibold",
          children: B.default.Messages.NOTIFICATION_SETTINGS
        }), (0, a.jsx)(f.Text, {
          variant: "text-md/normal",
          className: Y.guildName,
          children: e.name
        })]
      }), (0, a.jsx)(F.default.Child, {
        grow: 0,
        children: (0, a.jsx)(f.ModalCloseButton, {
          onClick: this.props.onClose
        })
      })]
    })
  }
  renderFooter() {
    return (0, a.jsx)(f.ModalFooter, {
      children: (0, a.jsx)(f.Button, {
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
      guild: i
    } = this.props, n = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : k.MuteUntilSeconds.ALWAYS;
    return null == i ? null : (0, a.jsxs)(f.FormItem, {
      className: Y.largeSpacing,
      children: [(0, a.jsx)(f.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: e => this.handleCheckboxChange("muted", e, y.NotificationLabel.muted(e)),
        note: B.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
        children: B.default.Messages.FORM_LABEL_MUTE_SERVER.format({
          name: i.name
        })
      }), t ? (0, a.jsxs)(F.default, {
        className: Y.spacing,
        align: F.default.Align.CENTER,
        children: [(0, a.jsxs)(F.default, {
          direction: F.default.Direction.VERTICAL,
          className: Y.__invalid_muteUntilTextWrapper,
          children: [(0, a.jsx)(f.FormTitle, {
            tag: "h3",
            className: Y.muteUntilTitle,
            children: B.default.Messages.MUTE_UNTIL
          }), (0, a.jsx)(M.default, {
            className: Y.muteUntilText,
            muteConfig: s
          })]
        }), (0, a.jsx)(f.SingleSelect, {
          className: Y.muteTimeSelector,
          options: (0, T.getMuteTimeOptions)(),
          value: n,
          onChange: this.handleSelectMuteTime
        })]
      }) : null, (0, a.jsx)(f.FormDivider, {})]
    })
  }
  renderServerSettings() {
    var e;
    let {
      messageNotifications: t,
      muted: s,
      memberCount: i
    } = this.props;
    return (0, a.jsxs)("div", {
      className: Y.spacing,
      children: [(0, a.jsx)(f.FormItem, {
        title: B.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
        className: Y.largeSpacing,
        children: (0, a.jsx)(f.RadioGroup, {
          disabled: s,
          value: t,
          onChange: e => this.handleRadioChange("message_notifications", e, y.NotificationLabel.notifications(e.value)),
          options: (e = i, [{
            name: B.default.Messages.FORM_LABEL_ALL_MESSAGES,
            value: w.UserNotificationSettings.ALL_MESSAGES,
            desc: null != e && e >= w.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? B.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
          }, {
            name: B.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
            value: w.UserNotificationSettings.ONLY_MENTIONS
          }, {
            name: B.default.Messages.FORM_LABEL_NOTHING,
            value: w.UserNotificationSettings.NO_MESSAGES
          }])
        })
      }), (0, a.jsx)(f.FormDivider, {})]
    })
  }
  renderNotificationOptions() {
    let {
      suppressEveryone: e,
      suppressRoles: t,
      mobilePush: s,
      muted: i,
      muteEvents: n,
      notifyHighlights: l,
      guildId: r
    } = this.props;
    return (0, a.jsxs)(f.FormItem, {
      className: Y.largeSpacing,
      children: [(0, a.jsx)(f.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, y.NotificationLabel.suppressEveryone(e)),
        value: e,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
      }), (0, a.jsx)(f.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, y.NotificationLabel.suppressRoles(e)),
        value: t,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_ROLES
      }), (0, a.jsx)(f.FormSwitch, {
        onChange: e => {
          g.default.updateGuildNotificationSettings(r, {
            notify_highlights: e ? w.HighlightSettings.DISABLED : w.HighlightSettings.ENABLED
          }, y.NotificationLabel.highlights(!e))
        },
        value: i || l === w.HighlightSettings.DISABLED,
        disabled: i,
        note: (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.Text, {
            variant: "text-sm/normal",
            children: B.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }), (0, a.jsx)("div", {
            className: Y.highlightsLink,
            children: (0, a.jsx)(f.Anchor, {
              href: H.default.getArticleURL(w.HelpdeskArticles.HIGHLIGHTS),
              children: B.default.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })]
        }),
        children: (0, a.jsx)(a.Fragment, {
          children: B.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
        })
      }), (0, a.jsx)(f.FormSwitch, {
        value: n,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, y.NotificationLabel.mutedEvents(e)),
        children: B.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
      }), (0, a.jsx)(f.FormSwitch, {
        value: !i && s,
        disabled: i,
        onChange: e => this.handleCheckboxChange("mobile_push", e, y.NotificationLabel.mobilePush(e)),
        children: B.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
      })]
    })
  }
  renderCustomNotificationSoundOptions() {
    let {
      shouldShowCustomNotificationSounds: e,
      onClose: t
    } = this.props;
    if (e) return (0, a.jsx)(I.default, {
      onClose: t
    })
  }
  renderOverrideSelect() {
    let {
      channels: e,
      categories: t
    } = this.props, s = o()(e).filter(e => {
      let {
        channel: s
      } = e;
      return s.type !== w.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, _.computeChannelName)(t, G.default, b.default)
      }
    }).value();
    return (0, a.jsxs)(f.FormItem, {
      title: B.default.Messages.NOTIFICATION_OVERRIDES,
      className: Y.largeSpacing,
      children: [(0, a.jsx)(f.FormText, {
        type: f.FormText.Types.DESCRIPTION,
        className: Y.smallSpacing,
        children: B.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      }), (0, a.jsx)(f.SearchableSelect, {
        value: w.EMPTY_STRING_SNOWFLAKE_ID,
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
      messageNotifications: i,
      categories: n,
      checkboxColor: l
    } = this.props, {
      overrides: r
    } = this.state, o = s.map(s => {
      let {
        channel: o
      } = s;
      if (!r.has(o.id) || null != n[o.id] && 0 === n[o.id].length) return null;
      let d = e[o.id];
      return (0, a.jsx)(C.ChannelNotificationSettings, {
        ref: e => {
          this._channelRefs[o.id] = e
        },
        channel: o,
        guildMuted: t,
        muted: null != d && (0, m.computeIsMuted)(d),
        messageNotifications: null != d ? d.message_notifications : null,
        guildMessageNotifications: i,
        onDelete: this.handleDeleteOverride,
        checkboxColor: l
      }, o.id)
    }).filter(P.isNotNullish);
    return (0 === r.size || 0 === o.length) && o.push((0, a.jsx)("div", {
      className: Y.overridePlaceholder,
      children: (0, a.jsx)(f.Text, {
        className: Y.overrideHeader,
        variant: "text-sm/semibold",
        children: B.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      })
    }, "placeholder")), (0, a.jsxs)("div", {
      className: Y.overrideList,
      children: [(0, a.jsxs)(F.default, {
        children: [(0, a.jsx)(f.Heading, {
          variant: "eyebrow",
          className: Y.headerName,
          children: B.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, a.jsx)(f.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_ALL
        }), (0, a.jsx)(f.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_MENTIONS
        }), (0, a.jsx)(f.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: B.default.Messages.FORM_LABEL_NOTHING
        }), (0, a.jsx)(f.Heading, {
          variant: "eyebrow",
          className: Y.headerOption,
          children: (0, a.jsx)(f.Tooltip, {
            text: B.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
            position: "bottom",
            children: e => (0, a.jsx)("span", {
              ...e,
              children: B.default.Messages.SOUND_MUTE
            })
          })
        })]
      }), o]
    })
  }
  render() {
    return (0, a.jsxs)(f.ModalRoot, {
      "aria-label": B.default.Messages.NOTIFICATION_SETTINGS,
      size: f.ModalSize.MEDIUM,
      transitionState: this.props.transitionState,
      children: [this.renderHeader(), (0, a.jsxs)(f.ModalContent, {
        scrollerRef: this.setScrollerRef,
        children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
      }), this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), V(this, "_scroller", null), V(this, "_channelRefs", {}), V(this, "state", {
      overrides: new Set((0, T.filterOverrides)(this.props.channelOverrides)),
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
      g.default.updateGuildNotificationSettings(this.props.guildId, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: t
        }
      }, y.NotificationLabels.Muted)
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
        i = null != s ? s.name : null;
      return (0, a.jsx)(D.default, {
        icon: (0, x.getChannelIconComponent)(t),
        title: e.label,
        subtitle: i
      })
    })
  }
}

function z(e) {
  let {
    guildId: t,
    ...s
  } = e, i = (0, S.useStateFromStoresObject)([j.default, R.default, A.default, U.default], () => {
    let e = j.default.getCategories(t);
    return {
      guildId: t,
      categories: e,
      guild: R.default.getGuild(t),
      memberCount: A.default.getMemberCount(t),
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
        return (0, v.isGuildSelectableChannelType)(t) || t === w.ChannelTypes.GUILD_CATEGORY
      }),
      notifyHighlights: U.default.getNotifyHighlights(t)
    }
  }), n = O.CustomNotificationSoundExperiment.useExperiment({
    location: "connected_notification_settings"
  }, {
    autoTrackExposure: !0
  }).enabled, l = (0, f.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
  return (0, a.jsx)(W, {
    ...i,
    ...s,
    shouldShowCustomNotificationSounds: n,
    checkboxColor: l
  })
}

function X(e) {
  let t = (0, T.useShouldUseNewNotificationSystem)("NotificationSettingsModal") ? p.default : z;
  return (0, a.jsx)(t, {
    ...e
  })
}