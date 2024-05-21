"use strict";
l.r(t), l.d(t, {
  ChannelSettingsOverviewNotice: function() {
    return ep
  },
  default: function() {
    return ex
  }
}), l("789020"), l("47120"), l("733860"), l("653041");
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  i = l.n(n),
  r = l("313361"),
  o = l("683860"),
  d = l("442837"),
  u = l("692547"),
  c = l("780384"),
  h = l("481060"),
  m = l("787014"),
  f = l("771340"),
  E = l("410575"),
  g = l("852860"),
  S = l("129865"),
  T = l("902840"),
  N = l("933557"),
  p = l("541716"),
  C = l("752305"),
  _ = l("893718"),
  x = l("907040"),
  M = l("633302"),
  I = l("109434"),
  R = l("162389"),
  A = l("946458"),
  O = l("859802"),
  L = l("968437"),
  v = l("665906"),
  j = l("456077"),
  y = l("747212"),
  b = l("210887"),
  D = l("131704"),
  F = l("314897"),
  P = l("388610"),
  w = l("430824"),
  U = l("496675"),
  H = l("903223"),
  B = l("594174"),
  G = l("285952"),
  V = l("153124"),
  k = l("26290"),
  W = l("934415"),
  Y = l("70956"),
  z = l("630388"),
  K = l("63063"),
  Z = l("129724"),
  Q = l("296146"),
  X = l("564735"),
  J = l("981631"),
  q = l("176505"),
  $ = l("185923"),
  ee = l("710352"),
  et = l("369701"),
  el = l("124368"),
  es = l("689938"),
  ea = l("59467"),
  en = l("611273");

function ei(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let er = (0, V.uid)(),
  eo = (0, V.uid)(),
  ed = (0, V.uid)(),
  eu = (0, V.uid)(),
  ec = (0, V.uid)(),
  eh = (0, V.uid)(),
  em = (0, V.uid)(),
  ef = (0, V.uid)(),
  eE = (0, V.uid)(),
  eg = (0, V.uid)(),
  eS = (0, V.uid)(),
  eT = (0, D.createChannelRecord)({
    id: "1",
    type: J.ChannelTypes.DM
  }),
  eN = "AUTOMATIC_RTC_REGION",
  ep = d.default.connectStores([P.default], () => {
    let {
      channel: e,
      submitting: t
    } = P.default.getProps();
    return {
      channel: e,
      submitting: t,
      onReset() {
        null != e && (0, m.init)(e.id)
      },
      onSave() {
        if (null == e) return;
        let {
          name: t,
          type: l,
          topic: s,
          bitrate: a,
          userLimit: n,
          nsfw: i,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          threadMetadata: u,
          defaultAutoArchiveDuration: c,
          template: h,
          rtcRegion: f,
          videoQualityMode: E,
          defaultReactionEmoji: g,
          availableTags: S,
          defaultSortOrder: T,
          defaultForumLayout: N
        } = e;
        e.isThread() && (t = (0, j.default)(t, !0)), (0, m.saveChannel)(e.id, {
          name: t,
          type: l,
          topic: s,
          bitrate: a,
          userLimit: n,
          nsfw: i,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          autoArchiveDuration: null == u ? void 0 : u.autoArchiveDuration,
          locked: null == u ? void 0 : u.locked,
          invitable: null == u ? void 0 : u.invitable,
          defaultAutoArchiveDuration: c,
          template: h,
          rtcRegion: f,
          videoQualityMode: E,
          defaultReactionEmoji: g,
          availableTags: S,
          defaultSortOrder: T,
          defaultForumLayout: N
        })
      }
    }
  })(g.default);

function eC(e) {
  var t;
  let {
    channel: l,
    onChange: n
  } = e, [i, r] = a.useState(null !== (t = l.rateLimitPerUser) && void 0 !== t ? t : 0), [o, d] = a.useState(null), u = a.useMemo(() => {
    let e = [...null != o ? o : J.SLOWMODE_VALUES];
    return !e.includes(i) && e.unshift(i), e.map(e => ({
      label: (0, Z.getSecondsSliderLabel)(e, !1),
      value: e
    }))
  }, [o, i]), c = a.useCallback(e => {
    r(e), n(e), d(null)
  }, [n]), m = a.useCallback(e => {
    if ("" === e) {
      d(null);
      return
    }
    let t = [],
      l = parseInt(e, 10);
    if (Number.isNaN(l)) {
      d(null);
      return
    }
    l <= J.SLOWMODE_MAX_VALUE && t.push(l);
    let s = l * Y.default.Seconds.MINUTE;
    s <= J.SLOWMODE_MAX_VALUE && t.push(s);
    let a = l * Y.default.Seconds.HOUR;
    a <= J.SLOWMODE_MAX_VALUE && t.push(a), d(t)
  }, []), f = a.useCallback(() => {
    d(null)
  }, []);
  return (0, s.jsx)(h.SearchableSelect, {
    className: en.marginBottom8,
    value: i,
    onChange: c,
    onSearchChange: m,
    options: u,
    onBlur: f,
    placeholder: es.default.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  })
}
class e_ extends a.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && f.default.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var t, l, s, a;
    let n = null !== (s = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== s ? s : "";
    (null !== (a = null === (l = e.channel) || void 0 === l ? void 0 : l.topic) && void 0 !== a ? a : "") !== n && n !== this.state.textTopicValue && this.setState({
      textTopicValue: n,
      richTopicValue: (0, C.toRichValue)(n)
    })
  }
  getError(e) {
    let {
      errors: t
    } = this.props;
    return null == t ? void 0 : t[e]
  }
  getCooldownSliderMarker(e) {
    return (0, Z.getSecondsSliderLabel)(e, !0)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, Z.getSecondsSliderLabel)(e * Y.default.Seconds.MINUTE, !0)
  }
  renderChannelInfo(e, t) {
    var l, a, n, d, c, m;
    let f, g;
    let {
      canManageChannels: S,
      canSendMessages: T,
      isThreadModerator: N,
      canManageThread: C,
      guild: x,
      isForumPost: I,
      isOwner: O,
      showAdvancedSlowModeSetting: v
    } = this.props, j = D.THREAD_CHANNEL_TYPES.has(e.type), b = e.isForumLikeChannel(), F = b && (null === (l = e.availableTags) || void 0 === l ? void 0 : l.every(e => e.moderated)), P = (null === (a = B.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()) === !0, w = D.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: b ? es.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : es.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
        className: en.marginTop20,
        children: b ? (0, s.jsx)(_.default, {
          innerClassName: ea.forumGuidelines,
          characterCountClassName: ea.forumGuidelinesCharacterCount,
          maxCharacterCount: q.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
          onChange: this.handleChangeRichTopic,
          placeholder: es.default.Messages.CHANNEL_TOPIC_EMPTY,
          channel: eT,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: p.ChatInputTypes.FORUM_CHANNEL_GUIDELINES,
          onBlur: () => {
            this.setState({
              topicFocused: !1
            })
          },
          onFocus: () => {
            this.setState({
              topicFocused: !0
            })
          },
          focused: this.state.topicFocused,
          onSubmit: this.handleSubmit,
          disableThemedBackground: !0
        }) : (0, s.jsx)(h.TextArea, {
          autoFocus: this.props.subsection === J.ChannelSettingsSubsections.TOPIC,
          placeholder: es.default.Messages.CHANNEL_TOPIC_EMPTY,
          value: M.default.translateSurrogatesToInlineEmoji(e.topic),
          onChange: this.handleChangeTopic,
          error: this.getError("topic"),
          maxLength: q.MAX_CHANNEL_TOPIC_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, U = b && P ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: es.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
        className: en.marginTop20,
        children: (0, s.jsx)(h.TextArea, {
          placeholder: es.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
          value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: ee.MAX_FORUM_TEMPLATE_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, H = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: er,
          className: ea.formTitle,
          children: es.default.Messages.FORUM_TAGS
        }), (0, s.jsx)(h.FormText, {
          id: eo,
          type: h.FormText.Types.DESCRIPTION,
          className: ea.description,
          children: es.default.Messages.FORM_HELP_FORUM_TAGS
        }), (0, s.jsx)(R.default, {
          channel: e
        })]
      }), (0, s.jsx)(h.Checkbox, {
        disabled: !S || F,
        value: e.hasFlag(q.ChannelFlags.REQUIRE_TAG),
        type: h.Checkbox.Types.INVERTED,
        onChange: (e, t) => this.handleRequireTagChanged(t),
        children: (0, s.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: es.default.Messages.FORUM_REQUIRE_TAG_NOTE
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, G = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: ea.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(ea.settingsLeft, ea.settingsDefaultReaction),
          children: [(0, s.jsx)(h.FormTitle, {
            id: ed,
            className: ea.formTitle,
            children: es.default.Messages.FORUM_DEFAULT_REACTION
          }), (0, s.jsx)(h.FormText, {
            id: eo,
            type: h.FormText.Types.DESCRIPTION,
            className: ea.description,
            children: es.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
          }), (0, s.jsxs)("div", {
            className: ea.buttonRow,
            children: [(0, s.jsx)(h.Popout, {
              renderPopout: this.renderEmojiPicker,
              position: "right",
              animation: h.Popout.Animation.NONE,
              align: "center",
              children: e => (0, s.jsx)(h.Button, {
                ...e,
                disabled: !S,
                onClick: t => {
                  var l;
                  null === (l = e.onClick) || void 0 === l || l.call(e, t)
                },
                children: es.default.Messages.SELECT_EMOJI
              })
            }), null != e.defaultReactionEmoji ? (0, s.jsx)(h.Button, {
              className: ea.removeButton,
              onClick: () => this.handleChangeDefaultReactionEmoji(null),
              size: h.Button.Sizes.MIN,
              look: h.Button.Looks.LINK,
              color: h.Button.Colors.RED,
              children: es.default.Messages.REMOVE
            }) : null]
          })]
        }), (0, s.jsx)(A.default, {
          reactionEmoji: e.defaultReactionEmoji
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, V = e.isForumChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: ea.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(ea.settingsLeft, ea.settingsDefaultView),
          children: [(0, s.jsx)(h.FormSection, {
            title: es.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
            children: (0, s.jsx)(h.SingleSelect, {
              options: [{
                label: es.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                value: r.ForumLayout.LIST
              }, {
                label: es.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                value: r.ForumLayout.GRID
              }],
              value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), (0, s.jsx)(h.FormText, {
            className: en.marginTop8,
            type: h.FormText.Types.DESCRIPTION,
            children: es.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
          })]
        }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, s.jsx)(Q.default, {
          className: ea.defaultImageView
        }) : (0, s.jsx)(X.default, {
          className: ea.defaultImageView
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, W = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(h.FormSection, {
          title: es.default.Messages.FORUM_DEFAULT_SORT_ORDER,
          children: (0, s.jsx)(h.SingleSelect, {
            options: [{
              label: es.default.Messages.FORUM_SORT_ACTIVITY,
              value: o.ThreadSortOrder.LATEST_ACTIVITY
            }, {
              label: es.default.Messages.FORUM_SORT_CREATION,
              value: o.ThreadSortOrder.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: es.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, Y = j ? N : S, z = D.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: eu,
          className: en.marginBottom8,
          children: es.default.Messages.FORM_LABEL_SLOWMODE
        }), b ? (0, s.jsx)(h.FormTitle, {
          className: en.marginTop20,
          children: es.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null, !0 === v ? (0, s.jsx)(eC, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, s.jsx)(h.Slider, {
          className: en.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: J.SLOWMODE_VALUES,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !Y,
          equidistant: !0,
          "aria-labelledby": eu,
          "aria-describedby": ec
        }), (0, s.jsx)(h.FormText, {
          id: ec,
          type: h.FormText.Types.DESCRIPTION,
          children: b ? es.default.Messages.FORM_HELP_SLOWMODE_FORUM : j ? es.default.Messages.FORM_HELP_SLOWMODE_THREAD : es.default.Messages.FORM_HELP_SLOWMODE
        }), b ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h.FormTitle, {
            className: en.marginTop20,
            children: es.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
          }), (0, s.jsx)(h.Slider, {
            className: en.marginTop20,
            initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
            markers: J.SLOWMODE_VALUES,
            stickToMarkers: !0,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !Y,
            equidistant: !0,
            "aria-labelledby": eu,
            "aria-describedby": ec
          }), (0, s.jsx)(h.FormText, {
            type: h.FormText.Types.DESCRIPTION,
            children: es.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
          })]
        }) : null]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      })]
    }) : null, Z = j && null != e.threadMetadata ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(E.default, {
          page: J.AnalyticsPages.CHANNEL_SETTINGS,
          children: (0, s.jsx)(y.default, {
            autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : el.DEFAULT_AUTO_ARCHIVE_DURATION,
            guild: x,
            channel: e,
            onChange: this.handleAutoArchiveDurationChanged,
            isDisabled: !C
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: I ? es.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : es.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
      })]
    }) : null, $ = e.type === J.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: es.default.Messages.FORM_HELP_THREAD_INVITABLE,
        onChange: this.handleInvitableChanged,
        value: e.threadMetadata.invitable,
        hideBorder: !0,
        disabled: !C,
        children: es.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
      })
    }) : null, et = D.NSFW_CHANNEL_TYPES.has(e.type) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: es.default.Messages.FORM_HELP_NSFW,
        onChange: this.handleNSFWChange,
        value: e.isNSFW(),
        hideBorder: !0,
        disabled: !S,
        children: es.default.Messages.FORM_LABEL_NSFW_CHANNEL
      })
    }) : null, ei = D.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != x && x.hasFeature(J.GuildFeatures.NEWS) && e.id !== (null == x ? void 0 : x.rulesChannelId) && e.id !== (null == x ? void 0 : x.publicUpdatesChannelId) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: es.default.Messages.FORM_HELP_NEWS.format({
          documentationLink: K.default.getArticleURL(J.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
        }),
        onChange: this.handleNewsChange,
        value: e.type === J.ChannelTypes.GUILD_ANNOUNCEMENT,
        hideBorder: !0,
        disabled: !S,
        children: es.default.Messages.FORM_LABEL_NEWS_CHANNEL
      })
    }) : null, eh = D.THREADED_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, s.jsx)(E.default, {
        page: J.AnalyticsPages.CHANNEL_SETTINGS,
        children: (0, s.jsx)(y.default, {
          autoArchiveDuration: (0, L.getAutoArchiveDuration)(e, null),
          guild: x,
          channel: e,
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          isDisabled: !S
        })
      }), (0, s.jsx)(h.FormText, {
        className: en.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: e.isForumLikeChannel() ? es.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : es.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
      })]
    }) : null, em = this.props.showChannelSummariesSettings ? (0, s.jsx)(h.FormSwitch, {
      note: es.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: K.default.getArticleURL(J.HelpdeskArticles.CONVERSATION_SUMMARIES)
      }),
      onChange: this.handleChannelSummariesToggled,
      value: !e.hasFlag(q.ChannelFlags.SUMMARIES_DISABLED) && (null == x ? void 0 : x.hasFeature(J.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      hideBorder: !0,
      disabled: !S || !(null == x ? void 0 : x.hasFeature(J.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      children: (0, s.jsxs)("div", {
        className: ea.badgedItem,
        children: [es.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, s.jsx)(k.TextBadge, {
          text: es.default.Messages.BETA,
          color: u.default.unsafe_rawColors.BRAND_500.css,
          className: ea.__invalid_betaTag
        })]
      })
    }) : null, ef = e.isMediaChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, s.jsx)(h.FormSwitch, {
        onChange: this.handleShowMediaOptionsToggled,
        value: !e.hasFlag(q.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        note: es.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
        hideBorder: !0,
        disabled: !S,
        children: es.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
      })]
    }) : null;
    return e.type === J.ChannelTypes.GUILD_CATEGORY ? (g = es.default.Messages.CATEGORY_NAME, f = "category-name") : e.isForumPost() ? (g = es.default.Messages.FORUM_POST_TITLE, f = "post-title") : j ? (g = es.default.Messages.THREAD_NAME, f = "thread-name") : (g = es.default.Messages.FORM_LABEL_CHANNEL_NAME, f = "channel-name"), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: g,
        children: (0, s.jsx)(h.TextInput, {
          value: t,
          onChange: this.handleChangeName,
          onBlur: this.handleBlurName,
          error: this.getError("name"),
          name: f,
          autoFocus: !0,
          disabled: O ? !T : !S,
          maxLength: J.MAX_CHANNEL_NAME_LENGTH
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), w, U, H, G, z, Z, V, W, $, et, ei, em, eh, ef]
    })
  }
  renderHomeFlags(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!(0, O.canSeeGuildHome)(e.guild_id)) return null;
    let l = J.ChannelTypesSets.GUILD_PARENTABLE.has(e.type) ? (0, s.jsx)("div", {
        children: (0, s.jsx)(h.FormSwitch, {
          note: es.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL_DESCRIPTION,
          onChange: this.handleActiveChannelsRemovedChange,
          value: !e.hasFlag(q.ChannelFlags.ACTIVE_CHANNELS_REMOVED),
          hideBorder: !0,
          disabled: !t,
          children: (0, s.jsxs)("div", {
            className: ea.badgedItem,
            children: [es.default.Messages.ACTIVE_CHANNELS_SHOW_CHANNEL, (0, s.jsx)(k.TextBadge, {
              text: es.default.Messages.BETA,
              color: u.default.unsafe_rawColors.BRAND_500.css,
              className: ea.__invalid_betaTag
            })]
          })
        })
      }) : null,
      a = et.GUILD_FEED_CHANNEL_TYPES.has(e.type) ? (0, s.jsx)("div", {
        children: (0, s.jsx)(h.FormSwitch, {
          note: es.default.Messages.GUILD_FEED_DEMOTE_CHANNEL_DESCRIPTION.format({
            warningHook: (e, t) => (0, s.jsx)("span", {
              className: ea.warningText,
              children: e
            }, t)
          }),
          onChange: this.handleGuildFeedRemovedChange,
          value: e.hasFlag(q.ChannelFlags.GUILD_FEED_REMOVED),
          hideBorder: !0,
          disabled: !t,
          children: (0, s.jsxs)("div", {
            className: ea.badgedItem,
            children: [es.default.Messages.GUILD_FEED_DEMOTE_CHANNEL, (0, s.jsx)(k.TextBadge, {
              text: es.default.Messages.BETA,
              color: u.default.unsafe_rawColors.BRAND_500.css,
              className: ea.__invalid_betaTag
            })]
          })
        })
      }) : null;
    return null == l && null == a ? null : (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }), (0, s.jsxs)(h.FormItem, {
        title: es.default.Messages.GUILD_HOME,
        children: [(0, s.jsx)(h.Text, {
          className: en.marginBottom20,
          variant: "text-sm/normal",
          color: "header-secondary",
          children: es.default.Messages.GUILD_HOME_CHANNEL_SETTINGS_SUBTITLE.format({
            helpCenterLink: K.default.getArticleURL(J.HelpdeskArticles.GUILD_HOME)
          })
        }), l, a]
      })]
    })
  }
  renderBitrate(e) {
    return "".concat(Math.round(e / 1e3), "kbps")
  }
  renderVoiceBitrate(e, t) {
    let {
      canManageChannels: l
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let a = (0, W.getBitrateLimit)(t, e),
      n = this.getError("bitrate");
    return (0, s.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: eh,
        children: es.default.Messages.FORM_LABEL_BITRATE
      }), "" !== n && (0, s.jsx)(h.FormText, {
        id: em,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: en.marginBottom8,
        children: n
      }), (0, s.jsx)(h.Slider, {
        initialValue: Math.min(e.bitrate, a),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [J.BITRATE_MIN, J.BITRATE_DEFAULT, a],
        minValue: J.BITRATE_MIN,
        maxValue: a,
        keyboardStep: J.BITRATE_STEP,
        disabled: !l,
        "aria-labelledby": eh,
        "aria-describedby": null != n && "" !== n ? em : ef
      }), a > J.BITRATE_DEFAULT ? (0, s.jsx)(h.FormText, {
        id: ef,
        type: h.FormTextTypes.DESCRIPTION,
        children: es.default.Messages.FORM_HELP_BITRATE.format({
          bitrate: J.BITRATE_DEFAULT / 1e3
        })
      }) : null]
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != e && null != e.guild_id && D.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || v.VoiceInThreadsExperiment.getCurrentConfig({
      guildId: e.guild_id,
      location: "9b50bd_1"
    }).enabled)
  }
  renderVideoQualityMode(e) {
    var t;
    let {
      canManageChannels: l
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let a = [{
      value: J.VideoQualityMode.AUTO,
      name: es.default.Messages.VIDEO_QUALITY_MODE_AUTO
    }, {
      value: J.VideoQualityMode.FULL,
      name: es.default.Messages.VIDEO_QUALITY_MODE_FULL
    }];
    return (0, s.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, s.jsx)(h.FormItem, {
        title: es.default.Messages.FORM_LABEL_VIDEO_QUALITY,
        children: (0, s.jsx)(h.RadioGroup, {
          onChange: e => {
            let {
              value: t
            } = e;
            return this.handleVideoQualityModeChange(t)
          },
          options: a,
          value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : J.VideoQualityMode.AUTO,
          disabled: !l
        })
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: es.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? es.default.Messages.NO_USER_LIMIT : es.default.Messages.NUM_USERS.format({
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let l = this.getError("user_limit"),
      a = e.isGuildStageVoice() ? J.MAX_STAGE_VOICE_USER_LIMIT : J.MAX_VOICE_USER_LIMIT;
    return (0, s.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      className: en.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: eE,
        children: es.default.Messages.FORM_LABEL_USER_LIMIT
      }), "" !== l && (0, s.jsx)(h.FormText, {
        id: eg,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: en.marginBottom8,
        children: l
      }), (0, s.jsx)(h.Slider, {
        initialValue: Math.min(e.userLimit, a),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, a],
        minValue: 0,
        maxValue: a,
        disabled: !t,
        "aria-labelledby": eE,
        "aria-describedby": null != l && "" !== l ? eg : eS
      }), (0, s.jsx)(h.FormText, {
        id: eS,
        type: h.FormTextTypes.DESCRIPTION,
        children: (e.isGuildStageVoice() ? es.default.Messages.FORM_HELP_USER_LIMIT_STAGE : es.default.Messages.FORM_HELP_USER_LIMIT).format()
      })]
    })
  }
  renderRegionOverride(e) {
    var t;
    let {
      regions: l,
      canManageChannels: a,
      guild: n
    } = this.props;
    if (null == n || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
    let i = [];
    null != l && (i = l.filter(e => !e.deprecated && !e.hidden).map(e => ({
      label: e.name,
      value: e.id
    }))).unshift({
      label: es.default.Messages.AUTOMATIC_REGION,
      value: eN
    });
    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eN;
    return (0, s.jsxs)(G.default, {
      direction: G.default.Direction.VERTICAL,
      children: [(0, s.jsx)(h.FormTitle, {
        children: es.default.Messages.FORM_LABEL_REGION_OVERRIDE
      }), (0, s.jsx)(h.SingleSelect, {
        options: i,
        value: r,
        onChange: this.handleRegionChange,
        isDisabled: !a
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: es.default.Messages.FORM_HELP_REGION_OVERRIDE
      })]
    })
  }
  renderJuiceImage(e) {
    let t;
    let {
      theme: a
    } = this.props;
    return t = e.type === J.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(a) ? l("309095") : l("925442") : (0, c.isThemeDark)(a) ? l("316491") : l("301358"), (0, s.jsx)(G.default, {
      justify: G.default.Justify.CENTER,
      className: en.marginTop60,
      children: (0, s.jsx)("img", {
        alt: "",
        width: 280,
        height: 165,
        src: t
      })
    })
  }
  render() {
    let {
      channel: e,
      channelName: t,
      guild: l
    } = this.props;
    return null == e || null == t || null == l ? null : (0, s.jsxs)(h.FormSection, {
      className: "channel-settings-overview",
      tag: h.FormTitleTags.H1,
      title: es.default.Messages.OVERVIEW,
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, s.jsx)(h.FormDivider, {
        className: i()(en.marginTop40, en.marginBottom40)
      }) : null, this.renderVoiceBitrate(e, l), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderHomeFlags(e), this.renderJuiceImage(e)]
    })
  }
  handleSubmit() {
    return new Promise(e => {
      e({
        shouldClear: !1,
        shouldRefocus: !0
      })
    })
  }
  constructor(e) {
    var t, a;
    super(e), ei(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: l
      } = this.props;
      return (0, s.jsx)(x.default, {
        guildId: null == l ? void 0 : l.guild_id,
        closePopout: t,
        onSelectEmoji: (e, l) => {
          this.handleChangeDefaultReactionEmoji(e), l && t()
        },
        pickerIntention: $.EmojiIntention.COMMUNITY_CONTENT,
        channel: l
      })
    }), ei(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, z.setFlag)(t.flags, q.ChannelFlags.REQUIRE_TAG, e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ei(this, "handleChangeName", e => {
      let {
        channel: t
      } = this.props;
      null != t && (t.isThread() ? e = (0, j.default)(e, !1) : J.ChannelTypesSets.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, W.sanitizeGuildTextChannelName)(e)), (0, m.updateChannel)({
        name: e
      }))
    }), ei(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? void 0 : e.isThread()) && null != t) {
        let e = (0, j.default)(t, !0);
        e !== t && (0, m.updateChannel)({
          name: e
        })
      }
    }), ei(this, "handleChangeTopic", e => {
      (0, m.updateChannel)({
        topic: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ei(this, "handleChangeRichTopic", (e, t, l) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: l
      }), this.handleChangeTopic(t)
    }), ei(this, "handleChangeTemplate", e => {
      (0, m.updateChannel)({
        template: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ei(this, "handleChangeDefaultReactionEmoji", e => {
      let t = null == e ? null : (null == e ? void 0 : e.id) != null ? {
        emojiId: e.id,
        emojiName: void 0
      } : {
        emojiId: void 0,
        emojiName: e.optionallyDiverseSequence
      };
      (0, m.updateChannel)({
        defaultReactionEmoji: t
      })
    }), ei(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ei(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultSortOrder: e
      })
    }), ei(this, "handleChangeBitrate", e => {
      (0, m.updateChannel)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ei(this, "handleUserLimitChange", e => {
      (0, m.updateChannel)({
        userLimit: Math.round(e)
      })
    }), ei(this, "handleNSFWChange", e => {
      (0, m.updateChannel)({
        nsfw: e
      })
    }), ei(this, "handleGuildFeedRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      if (!e) {
        let e = (0, z.setFlag)(t.flags, q.ChannelFlags.GUILD_FEED_REMOVED, !1);
        (0, m.updateChannel)({
          flags: e
        });
        return
      }(0, h.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([l.e("49237"), l.e("99387"), l.e("15180")]).then(l.bind(l, "75777"));
        return l => (0, s.jsx)(e, {
          ...l,
          channelId: t.id,
          onSubmit: () => {
            let e = (0, z.setFlag)(t.flags, q.ChannelFlags.GUILD_FEED_REMOVED, !0);
            (0, m.updateChannel)({
              flags: e
            })
          }
        })
      })
    }), ei(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, z.setFlag)(t.flags, q.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ei(this, "handleNewsChange", e => {
      (0, m.updateChannel)({
        type: e ? J.ChannelTypes.GUILD_ANNOUNCEMENT : J.ChannelTypes.GUILD_TEXT
      })
    }), ei(this, "handleChangeSlowmode", e => {
      (0, m.updateChannel)({
        rateLimitPerUser: e
      })
    }), ei(this, "handleChangeThreadMessageSlowmode", e => {
      (0, m.updateChannel)({
        defaultThreadRateLimitPerUser: e
      })
    }), ei(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, m.updateChannel)({
        defaultAutoArchiveDuration: e
      })
    }), ei(this, "handleRegionChange", e => {
      (0, m.updateChannel)({
        rtcRegion: e === eN ? null : e
      })
    }), ei(this, "handleVideoQualityModeChange", e => {
      (0, m.updateChannel)({
        videoQualityMode: e
      })
    }), ei(this, "handleAutoArchiveDurationChanged", e => {
      (0, m.updateChannel)({
        autoArchiveDuration: e
      })
    }), ei(this, "handleInvitableChanged", e => {
      (0, m.updateChannel)({
        invitable: e
      })
    }), ei(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, z.setFlag)(t.flags, q.ChannelFlags.SUMMARIES_DISABLED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ei(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, z.setFlag)(t.flags, q.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, m.updateChannel)({
        flags: l
      })
    });
    let n = null !== (a = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== a ? a : "";
    this.state = {
      textTopicValue: n,
      richTopicValue: (0, C.toRichValue)(n),
      topicFocused: !1
    }
  }
}

function ex() {
  let {
    errors: e,
    channel: t,
    submitting: l,
    subsection: n
  } = (0, d.useStateFromStoresObject)([P.default], () => P.default.getProps()), i = (0, d.useStateFromStores)([H.default], () => {
    var e;
    return H.default.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null)
  }), r = (0, d.useStateFromStores)([b.default], () => b.default.theme), o = (0, d.useStateFromStores)([w.default], () => w.default.getGuild(null == t ? void 0 : t.getGuildId())), u = (0, v.useCanManageThread)(t), c = (0, v.useIsThreadModerator)(t), {
    canManageChannels: h,
    canSendMessages: m
  } = (0, d.useStateFromStoresObject)([U.default], () => ({
    canManageChannels: U.default.can(J.Permissions.MANAGE_CHANNELS, t),
    canSendMessages: U.default.can(J.Permissions.SEND_MESSAGES, t)
  })), f = (0, N.default)(t), E = F.default.getId(), g = (0, I.useForumChannelStoreApi)(), p = null == t ? void 0 : t.id, C = (0, T.useChannelSummariesExperiment)(t, !1, !0), _ = S.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, x = a.useCallback(e => {
    null != p && g.getState().setLayoutType(p, e)
  }, [p, g]);
  return (0, s.jsx)(e_, {
    errors: e,
    channel: t,
    channelName: f,
    submitting: l,
    regions: i,
    theme: r,
    guild: o,
    canManageChannels: (null == t ? void 0 : t.isThread()) ? u : h,
    canSendMessages: m,
    isThreadModerator: c,
    canManageThread: u,
    subsection: n,
    isForumPost: null != t && t.isForumPost(),
    isOwner: null == t ? void 0 : t.isOwner(E),
    handleSetDefaultLayout: x,
    showChannelSummariesSettings: C,
    showAdvancedSlowModeSetting: _
  })
}