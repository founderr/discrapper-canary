"use strict";
s.r(t), s.d(t, {
  default: function() {
    return z
  }
}), s("47120"), s("653041");
var i, a, n = s("735250"),
  l = s("470079"),
  r = s("392711"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
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
  I = s("423589"),
  x = s("74888"),
  C = s("444899"),
  O = s("11352"),
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
  P = s("823379"),
  D = s("63063"),
  k = s("621600"),
  y = s("981631"),
  H = s("969943"),
  w = s("689938"),
  B = s("410279");

function Y(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(a = i || (i = {})).MUTED = "muted", a.MESSAGE_NOTIFICATIONS = "message_notifications", a.SUPPRESS_EVERYONE = "suppress_everyone", a.SUPPRESS_ROLES = "suppress_roles", a.MOBILE_PUSH = "mobile_push", a.MUTE_EVENTS = "mute_scheduled_events", a.NOTIFY_HIGHLIGHTS = "notify_highlights";
class V extends l.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      overrides: s,
      channelOverridesProp: i
    } = t;
    return e.channelOverrides !== i ? (s = new Set(s), (0, I.filterOverrides)(e.channelOverrides).forEach(e => s.add(e)), {
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
      e = new Set(e), (0, I.filterOverrides)(this.props.channelOverrides).forEach(t => e.add(t)), this.setState({
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
          children: w.default.Messages.NOTIFICATION_SETTINGS
        }), (0, n.jsx)(g.Text, {
          variant: "text-md/normal",
          className: B.guildName,
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
        children: w.default.Messages.DONE
      })
    })
  }
  renderMute() {
    var e;
    let {
      muted: t,
      muteConfig: s,
      guild: i
    } = this.props, a = null !== (e = null == s ? void 0 : s.selected_time_window) && void 0 !== e ? e : H.MuteUntilSeconds.ALWAYS;
    return null == i ? null : (0, n.jsxs)(g.FormItem, {
      className: B.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        hideBorder: !0,
        value: t,
        onChange: e => this.handleCheckboxChange("muted", e, k.NotificationLabel.muted(e)),
        note: w.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
        children: w.default.Messages.FORM_LABEL_MUTE_SERVER.format({
          name: i.name
        })
      }), t ? (0, n.jsxs)(F.default, {
        className: B.spacing,
        align: F.default.Align.CENTER,
        children: [(0, n.jsxs)(F.default, {
          direction: F.default.Direction.VERTICAL,
          className: B.__invalid_muteUntilTextWrapper,
          children: [(0, n.jsx)(g.FormTitle, {
            tag: "h3",
            className: B.muteUntilTitle,
            children: w.default.Messages.MUTE_UNTIL
          }), (0, n.jsx)(M.default, {
            className: B.muteUntilText,
            muteConfig: s
          })]
        }), (0, n.jsx)(g.SingleSelect, {
          className: B.muteTimeSelector,
          options: (0, I.getMuteTimeOptions)(),
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
      className: B.spacing,
      children: [(0, n.jsx)(g.FormItem, {
        title: w.default.Messages.FORM_LABEL_SERVER_NOTIFICATION_SETTINGS,
        className: B.largeSpacing,
        children: (0, n.jsx)(g.RadioGroup, {
          disabled: s,
          value: t,
          onChange: e => this.handleRadioChange("message_notifications", e, k.NotificationLabel.notifications(e.value)),
          options: (e = i, [{
            name: w.default.Messages.FORM_LABEL_ALL_MESSAGES,
            value: y.UserNotificationSettings.ALL_MESSAGES,
            desc: null != e && e >= y.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? w.default.Messages.LARGE_GUILD_NOTIFY_ALL_MESSAGES_DESCRIPTION : null
          }, {
            name: w.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
            value: y.UserNotificationSettings.ONLY_MENTIONS
          }, {
            name: w.default.Messages.FORM_LABEL_NOTHING,
            value: y.UserNotificationSettings.NO_MESSAGES
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
      className: B.largeSpacing,
      children: [(0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_everyone", e, k.NotificationLabel.suppressEveryone(e)),
        value: e,
        children: w.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format()
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => this.handleCheckboxChange("suppress_roles", e, k.NotificationLabel.suppressRoles(e)),
        value: t,
        children: w.default.Messages.FORM_LABEL_SUPPRESS_ROLES
      }), (0, n.jsx)(g.FormSwitch, {
        onChange: e => {
          f.default.updateGuildNotificationSettings(r, {
            notify_highlights: e ? y.HighlightSettings.DISABLED : y.HighlightSettings.ENABLED
          }, k.NotificationLabel.highlights(!e))
        },
        value: i || l === y.HighlightSettings.DISABLED,
        disabled: i,
        note: (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(g.Text, {
            variant: "text-sm/normal",
            children: w.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT
          }), (0, n.jsx)("div", {
            className: B.highlightsLink,
            children: (0, n.jsx)(g.Anchor, {
              href: D.default.getArticleURL(y.HelpdeskArticles.HIGHLIGHTS),
              children: w.default.Messages.HIGHLIGHTS_LEARN_MORE
            })
          })]
        }),
        children: (0, n.jsx)(n.Fragment, {
          children: w.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS
        })
      }), (0, n.jsx)(g.FormSwitch, {
        value: a,
        onChange: e => this.handleCheckboxChange("mute_scheduled_events", e, k.NotificationLabel.mutedEvents(e)),
        children: w.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS
      }), (0, n.jsx)(g.FormSwitch, {
        value: !i && s,
        disabled: i,
        onChange: e => this.handleCheckboxChange("mobile_push", e, k.NotificationLabel.mobilePush(e)),
        children: w.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS
      })]
    })
  }
  renderCustomNotificationSoundOptions() {
    let {
      shouldShowCustomNotificationSounds: e,
      guildId: t,
      onClose: s
    } = this.props;
    if (e) return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(p.default, {
        guildId: t,
        onClose: s
      }), (0, n.jsx)(g.FormDivider, {
        className: B.customNotificationSoundsDivider
      })]
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
      return s.type !== y.ChannelTypes.GUILD_CATEGORY || null != t[s.id] && t[s.id].length > 0
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
      title: w.default.Messages.NOTIFICATION_OVERRIDES,
      className: B.largeSpacing,
      children: [(0, n.jsx)(g.FormText, {
        type: g.FormText.Types.DESCRIPTION,
        className: B.smallSpacing,
        children: w.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      }), (0, n.jsx)(g.SearchableSelect, {
        value: y.EMPTY_STRING_SNOWFLAKE_ID,
        placeholder: w.default.Messages.SELECT_CHANNEL_OR_CATEGORY,
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
    } = this.state, o = s.map(s => {
      let {
        channel: o
      } = s;
      if (!r.has(o.id) || null != a[o.id] && 0 === a[o.id].length) return null;
      let d = e[o.id];
      return (0, n.jsx)(C.ChannelNotificationSettings, {
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
    return (0 === r.size || 0 === o.length) && o.push((0, n.jsx)("div", {
      className: B.overridePlaceholder,
      children: (0, n.jsx)(g.Text, {
        className: B.overrideHeader,
        variant: "text-sm/semibold",
        children: w.default.Messages.ADD_CHANNEL_TO_OVERRIDE
      })
    }, "placeholder")), (0, n.jsxs)("div", {
      className: B.overrideList,
      children: [(0, n.jsxs)(F.default, {
        children: [(0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: B.headerName,
          children: w.default.Messages.CHANNEL_OR_CATEGORY
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: B.headerOption,
          children: w.default.Messages.FORM_LABEL_ALL
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: B.headerOption,
          children: w.default.Messages.FORM_LABEL_MENTIONS
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: B.headerOption,
          children: w.default.Messages.FORM_LABEL_NOTHING
        }), (0, n.jsx)(g.Heading, {
          variant: "eyebrow",
          className: B.headerOption,
          children: (0, n.jsx)(g.Tooltip, {
            text: w.default.Messages.FORM_LABEL_MUTE_SERVER_DESCRIPTION,
            position: "bottom",
            children: e => (0, n.jsx)("span", {
              ...e,
              children: w.default.Messages.SOUND_MUTE
            })
          })
        })]
      }), o]
    })
  }
  render() {
    return (0, n.jsxs)(g.ModalRoot, {
      "aria-label": w.default.Messages.NOTIFICATION_SETTINGS,
      size: g.ModalSize.MEDIUM,
      transitionState: this.props.transitionState,
      children: [this.renderHeader(), (0, n.jsxs)(g.ModalContent, {
        scrollerRef: this.setScrollerRef,
        children: [this.renderMute(), this.renderServerSettings(), this.renderCustomNotificationSoundOptions(), this.renderNotificationOptions(), this.renderOverrideSelect(), this.renderChannelNotifications()]
      }), this.renderFooter()]
    })
  }
  constructor(...e) {
    super(...e), Y(this, "_scroller", null), Y(this, "_channelRefs", {}), Y(this, "state", {
      overrides: new Set((0, I.filterOverrides)(this.props.channelOverrides)),
      channelOverridesProp: this.props.channelOverrides,
      lastSelected: null
    }), Y(this, "setScrollerRef", e => {
      this._scroller = e
    }), Y(this, "handleSelectChange", e => {
      if (null == e) return;
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).add(e), this.setState({
        overrides: t,
        lastSelected: e
      })
    }), Y(this, "handleSelectMuteTime", e => {
      let t = e > 0 ? u()().add(e, "second").toISOString() : null;
      f.default.updateGuildNotificationSettings(this.props.guildId, {
        muted: !0,
        mute_config: {
          selected_time_window: e,
          end_time: t
        }
      }, k.NotificationLabels.Muted)
    }), Y(this, "handleDeleteOverride", e => {
      let {
        overrides: t
      } = this.state;
      (t = new Set(t)).delete(e), this.setState({
        overrides: t
      })
    }), Y(this, "renderOptionLabel", e => {
      let t = L.default.getChannel(e.value);
      if (null == t) return e.label;
      let s = L.default.getChannel(t.parent_id),
        i = null != s ? s.name : null;
      return (0, n.jsx)(g.IconSelectOption, {
        icon: (0, _.getChannelIconComponent)(t),
        title: e.label,
        subtitle: i
      })
    })
  }
}

function W(e) {
  let {
    guildId: t,
    ...s
  } = e, i = (0, S.useStateFromStoresObject)([A.default, R.default, j.default, U.default], () => {
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
        return (0, v.isGuildSelectableChannelType)(t) || t === y.ChannelTypes.GUILD_CATEGORY
      }),
      notifyHighlights: U.default.getNotifyHighlights(t)
    }
  }), a = O.CustomNotificationSoundExperiment.useExperiment({
    location: "connected_notification_settings"
  }, {
    autoTrackExposure: !0
  }).enabled, l = (0, g.useToken)(N.default.unsafe_rawColors.GREEN_360).hex();
  return (0, n.jsx)(V, {
    ...i,
    ...s,
    shouldShowCustomNotificationSounds: a,
    checkboxColor: l
  })
}

function z(e) {
  let t = (0, I.useShouldUseNewNotificationSystem)("NotificationSettingsModal") ? x.default : W;
  return (0, n.jsx)(t, {
    ...e
  })
}