"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("47120"), s("653041");
var i, a, n = s("735250"),
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
  _ = s("933557"),
  T = s("471445"),
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
  U = s("699516"),
  b = s("9156"),
  G = s("594174"),
  F = s("285952"),
  D = s("353872"),
  P = s("823379"),
  y = s("63063"),
  H = s("621600"),
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
}(a = i || (i = {})).MUTED = "muted", a.MESSAGE_NOTIFICATIONS = "message_notifications", a.SUPPRESS_EVERYONE = "suppress_everyone", a.SUPPRESS_ROLES = "suppress_roles", a.MOBILE_PUSH = "mobile_push", a.MUTE_EVENTS = "mute_scheduled_events", a.NOTIFY_HIGHLIGHTS = "notify_highlights";
class W extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: s,
      channelOverridesProp: i
    } = t;
    return e.channelOverrides !== i ? (s = new Set(s), (0, x.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
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
        var a;
        null === (a = this._scroller) || void 0 === a || a.scrollIntoViewNode({
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
      value: i
    } = t;
    f.default.updateGuildNotificationSettings(this.props.guildId, {
      [e]: i
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
      guild: i
    } = this.props, a = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : k.MuteUntilSeconds.ALWAYS;
    return null == i ? null : (0, n.jsxs)(g.FormItem, {
      className: Y.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: e => this.handleCheckboxChange("muted", e, H.NotificationLabel.muted(e)),
        note: B.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
        children: B.default.Messages.FORM_LABEL_MUTE_SERVER.format({
          name: i.name
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
          value: a,
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
      memberCount: i
    } = this.props;
    return (0, n.jsxs)("div", {
      className: Y.spacing,
      children: [(0, n.jsx)(g.FormItem, {
        title: B.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
        className: Y.largeSpacing,
        children: (0, n.jsx)(g.RadioGroup, {
          disabled: s,
          value: t,
          onChange: e => this.handleRadioChange("message_notifications", e, H.NotificationLabel.notifications(e.value)),
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
      }), (0, n.jsx)(g.FormDivider, {})]
    })
  }
  renderNotificationOptions() {
    let {
      suppressEveryone: e,
      suppressRoles: t,
      mobilePush: s,
      muted: i,
      muteEvents: a,
      notifyHighlights: l,
      guildId: r
    } = this.props;
    return (0, n.jsxs)(g.FormItem, {
      className: Y.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, H.NotificationLabel.suppressEveryone(e)),
        value: e,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, H.NotificationLabel.suppressRoles(e)),
        value: t,
        children: B.default.Messages.FORM_LABEL_SUPPRESS_ROLES
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => {
          f.default.updateGuildNotificationSettings(r, {
            notify_highlights: e ? w.HighlightSettings.DISABLED : w.HighlightSettings.ENABLED
          }, H.NotificationLabel.highlights(!e))
        },
        value: i || l === w.HighlightSettings.DISABLED,
        disabled: i,
        note: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: B.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }), (0, n.jsx)("div", {
            className: Y.highlightsLink,
            children: (0, n.jsx)(g.Anchor, {
              href: y.default.getArticleURL(w.HelpdeskArticles.HIGHLIGHTS),
              children: B.default.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })]
        }),
        children: (0, n.jsx)(n.Fragment, {
          children: B.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
        })
      }), (0, n.jsx)(g.FormSwitch, {
        value: a,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, H.NotificationLabel.mutedEvents(e)),
        children: B.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
      }), (0, n.jsx)(g.FormSwitch, {
        value: !i && s,
        disabled: i,
        onChange: e => this.handleCheckboxChange("mobile_push", e, H.NotificationLabel.mobilePush(e)),
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
      return s.type !== w.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
    }).map(e => {
      let {
        channel: t
      } = e;
      return {
        value: t.id,
        label: (0, _.computeChannelName)(t, G.default, U.default)
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
      categories: a,
      checkboxColor: l
    } = this.props, {
      overrides: r
    } = this.state, d = s.map(s => {
      let {
        channel: d
      } = s;
      if (!r.has(d.id) || null != a[d.id] && 0 === a[d.id].length) return null;
      let o = e[d.id];
      return (0, n.jsx)(O.ChannelNotificationSettings, {
        ref: e => {
          this._channelRefs[d.id] = e
        },
        channel: d,
        guildMuted: t,
        muted: null != o && (0, m.computeIsMuted)(o),
        messageNotifications: null != o ? o.message_notifications : null,
        guildMessageNotifications: i,
        onDelete: this.handleDeleteOverride,
        checkboxColor: l
      }, d.id)
    }).filter(P.isNotNullish);
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
      }, H.NotificationLabels.Muted)
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
      return (0, n.jsx)(D.default, {
        icon: (0, T.getChannelIconComponent)(t),
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
  } = e, i = (0, S.useStateFromStoresObject)([A.default, R.default, j.default, b.default], () => {
    let e = A.default.getCategories(t);
    return {
      guildId: t,
      categories: e,
      guild: R.default.getGuild(t),
      memberCount: j.default.getMemberCount(t),
      suppressEveryone: b.default.isSuppressEveryoneEnabled(t),
      suppressRoles: b.default.isSuppressRolesEnabled(t),
      muteEvents: b.default.isMuteScheduledEventsEnabled(t),
      mobilePush: b.default.isMobilePushEnabled(t),
      muted: b.default.isMuted(t),
      muteConfig: b.default.getMuteConfig(t),
      messageNotifications: b.default.getMessageNotifications(t),
      channelOverrides: b.default.getChannelOverrides(t),
      channels: (0, E.default)(e._categories, e, e => {
        let {
          channel: {
            type: t
          }
        } = e;
        return (0, v.isGuildSelectableChannelType)(t) || t === w.ChannelTypes.GUILD_CATEGORY
      }),
      notifyHighlights: b.default.getNotifyHighlights(t)
    }
  }), a = C.CustomNotificationSoundExperiment.useExperiment({
    location: "connected_notification_settings"
  }, {
    autoTrackExposure: !0
  }).enabled, l = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
  return (0, n.jsx)(W, {
    ...i,
    ...s,
    shouldShowCustomNotificationSounds: a,
    checkboxColor: l
  })
}

function X(e) {
  let t = (0, x.useShouldUseNewNotificationSystem)("NotificationSettingsModal") ? I.default : z;
  return (0, n.jsx)(t, {
    ...e
  })
}