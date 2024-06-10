"use strict";
l.r(t), l.d(t, {
  ChannelSettingsOverviewNotice: function() {
    return eT
  },
  default: function() {
    return eC
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
  x = l("893718"),
  _ = l("907040"),
  M = l("633302"),
  R = l("109434"),
  I = l("162389"),
  A = l("946458"),
  O = l("968437"),
  v = l("665906"),
  L = l("456077"),
  j = l("747212"),
  y = l("210887"),
  b = l("131704"),
  D = l("314897"),
  F = l("388610"),
  P = l("430824"),
  w = l("496675"),
  U = l("903223"),
  B = l("594174"),
  H = l("285952"),
  G = l("153124"),
  k = l("26290"),
  V = l("934415"),
  W = l("70956"),
  Y = l("630388"),
  z = l("63063"),
  K = l("129724"),
  Z = l("296146"),
  Q = l("564735"),
  X = l("981631"),
  J = l("176505"),
  q = l("185923"),
  $ = l("710352"),
  ee = l("124368"),
  et = l("689938"),
  el = l("59467"),
  es = l("611273");

function ea(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let en = (0, G.uid)(),
  ei = (0, G.uid)(),
  er = (0, G.uid)(),
  eo = (0, G.uid)(),
  ed = (0, G.uid)(),
  eu = (0, G.uid)(),
  ec = (0, G.uid)(),
  eh = (0, G.uid)(),
  em = (0, G.uid)(),
  ef = (0, G.uid)(),
  eE = (0, G.uid)(),
  eg = (0, b.createChannelRecord)({
    id: "1",
    type: X.ChannelTypes.DM
  }),
  eS = "AUTOMATIC_RTC_REGION",
  eT = d.default.connectStores([F.default], () => {
    let {
      channel: e,
      submitting: t
    } = F.default.getProps();
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
        e.isThread() && (t = (0, L.default)(t, !0)), (0, m.saveChannel)(e.id, {
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

function eN(e) {
  var t;
  let {
    channel: l,
    onChange: n
  } = e, [i, r] = a.useState(null !== (t = l.rateLimitPerUser) && void 0 !== t ? t : 0), [o, d] = a.useState(null), u = a.useMemo(() => {
    let e = [...null != o ? o : X.SLOWMODE_VALUES];
    return !e.includes(i) && e.unshift(i), e.map(e => ({
      label: (0, K.getSecondsSliderLabel)(e, !1),
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
    l <= X.SLOWMODE_MAX_VALUE && t.push(l);
    let s = l * W.default.Seconds.MINUTE;
    s <= X.SLOWMODE_MAX_VALUE && t.push(s);
    let a = l * W.default.Seconds.HOUR;
    a <= X.SLOWMODE_MAX_VALUE && t.push(a), d(t)
  }, []), f = a.useCallback(() => {
    d(null)
  }, []);
  return (0, s.jsx)(h.SearchableSelect, {
    className: es.marginBottom8,
    value: i,
    onChange: c,
    onSearchChange: m,
    options: u,
    onBlur: f,
    placeholder: et.default.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  })
}
class ep extends a.PureComponent {
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
    return (0, K.getSecondsSliderLabel)(e, !0)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, K.getSecondsSliderLabel)(e * W.default.Seconds.MINUTE, !0)
  }
  renderChannelInfo(e, t) {
    var l, a, n, d, c, m;
    let f, g;
    let {
      canManageChannels: S,
      canSendMessages: T,
      isThreadModerator: N,
      canManageThread: C,
      guild: _,
      isForumPost: R,
      isOwner: v,
      showAdvancedSlowModeSetting: L
    } = this.props, y = b.THREAD_CHANNEL_TYPES.has(e.type), D = e.isForumLikeChannel(), F = D && (null === (l = e.availableTags) || void 0 === l ? void 0 : l.every(e => e.moderated)), P = (null === (a = B.default.getCurrentUser()) || void 0 === a ? void 0 : a.isStaff()) === !0, w = b.TOPIC_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: D ? et.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : et.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
        className: es.marginTop20,
        children: D ? (0, s.jsx)(x.default, {
          innerClassName: el.forumGuidelines,
          characterCountClassName: el.forumGuidelinesCharacterCount,
          maxCharacterCount: J.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
          onChange: this.handleChangeRichTopic,
          placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
          channel: eg,
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
          autoFocus: this.props.subsection === X.ChannelSettingsSubsections.TOPIC,
          placeholder: et.default.Messages.CHANNEL_TOPIC_EMPTY,
          value: M.default.translateSurrogatesToInlineEmoji(e.topic),
          onChange: this.handleChangeTopic,
          error: this.getError("topic"),
          maxLength: J.MAX_CHANNEL_TOPIC_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, U = D && P ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: et.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
        className: es.marginTop20,
        children: (0, s.jsx)(h.TextArea, {
          placeholder: et.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
          value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: $.MAX_FORUM_TEMPLATE_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, H = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: en,
          className: el.formTitle,
          children: et.default.Messages.FORUM_TAGS
        }), (0, s.jsx)(h.FormText, {
          id: ei,
          type: h.FormText.Types.DESCRIPTION,
          className: el.description,
          children: et.default.Messages.FORM_HELP_FORUM_TAGS
        }), (0, s.jsx)(I.default, {
          channel: e
        })]
      }), (0, s.jsx)(h.Checkbox, {
        disabled: !S || F,
        value: e.hasFlag(J.ChannelFlags.REQUIRE_TAG),
        type: h.Checkbox.Types.INVERTED,
        onChange: (e, t) => this.handleRequireTagChanged(t),
        children: (0, s.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: et.default.Messages.FORUM_REQUIRE_TAG_NOTE
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, G = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: el.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(el.settingsLeft, el.settingsDefaultReaction),
          children: [(0, s.jsx)(h.FormTitle, {
            id: er,
            className: el.formTitle,
            children: et.default.Messages.FORUM_DEFAULT_REACTION
          }), (0, s.jsx)(h.FormText, {
            id: ei,
            type: h.FormText.Types.DESCRIPTION,
            className: el.description,
            children: et.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
          }), (0, s.jsxs)("div", {
            className: el.buttonRow,
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
                children: et.default.Messages.SELECT_EMOJI
              })
            }), null != e.defaultReactionEmoji ? (0, s.jsx)(h.Button, {
              className: el.removeButton,
              onClick: () => this.handleChangeDefaultReactionEmoji(null),
              size: h.Button.Sizes.MIN,
              look: h.Button.Looks.LINK,
              color: h.Button.Colors.RED,
              children: et.default.Messages.REMOVE
            }) : null]
          })]
        }), (0, s.jsx)(A.default, {
          reactionEmoji: e.defaultReactionEmoji
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, V = e.isForumChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: el.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(el.settingsLeft, el.settingsDefaultView),
          children: [(0, s.jsx)(h.FormSection, {
            title: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
            children: (0, s.jsx)(h.SingleSelect, {
              options: [{
                label: et.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                value: r.ForumLayout.LIST
              }, {
                label: et.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                value: r.ForumLayout.GRID
              }],
              value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), (0, s.jsx)(h.FormText, {
            className: es.marginTop8,
            type: h.FormText.Types.DESCRIPTION,
            children: et.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
          })]
        }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, s.jsx)(Z.default, {
          className: el.defaultImageView
        }) : (0, s.jsx)(Q.default, {
          className: el.defaultImageView
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, W = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(h.FormSection, {
          title: et.default.Messages.FORUM_DEFAULT_SORT_ORDER,
          children: (0, s.jsx)(h.SingleSelect, {
            options: [{
              label: et.default.Messages.FORUM_SORT_ACTIVITY,
              value: o.ThreadSortOrder.LATEST_ACTIVITY
            }, {
              label: et.default.Messages.FORUM_SORT_CREATION,
              value: o.ThreadSortOrder.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: es.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: et.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, Y = y ? N : S, K = b.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: eo,
          className: es.marginBottom8,
          children: et.default.Messages.FORM_LABEL_SLOWMODE
        }), D ? (0, s.jsx)(h.FormTitle, {
          className: es.marginTop20,
          children: et.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null, !0 === L ? (0, s.jsx)(eN, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, s.jsx)(h.Slider, {
          className: es.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: X.SLOWMODE_VALUES,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !Y,
          equidistant: !0,
          "aria-labelledby": eo,
          "aria-describedby": ed
        }), (0, s.jsx)(h.FormText, {
          id: ed,
          type: h.FormText.Types.DESCRIPTION,
          children: D ? et.default.Messages.FORM_HELP_SLOWMODE_FORUM : y ? et.default.Messages.FORM_HELP_SLOWMODE_THREAD : et.default.Messages.FORM_HELP_SLOWMODE
        }), D ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h.FormTitle, {
            className: es.marginTop20,
            children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
          }), (0, s.jsx)(h.Slider, {
            className: es.marginTop20,
            initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
            markers: X.SLOWMODE_VALUES,
            stickToMarkers: !0,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !Y,
            equidistant: !0,
            "aria-labelledby": eo,
            "aria-describedby": ed
          }), (0, s.jsx)(h.FormText, {
            type: h.FormText.Types.DESCRIPTION,
            children: et.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
          })]
        }) : null]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      })]
    }) : null, q = y && null != e.threadMetadata ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(E.default, {
          page: X.AnalyticsPages.CHANNEL_SETTINGS,
          children: (0, s.jsx)(j.default, {
            autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : ee.DEFAULT_AUTO_ARCHIVE_DURATION,
            guild: _,
            channel: e,
            onChange: this.handleAutoArchiveDurationChanged,
            isDisabled: !C
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: es.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: R ? et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
      })]
    }) : null, ea = e.type === X.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: et.default.Messages.FORM_HELP_THREAD_INVITABLE,
        onChange: this.handleInvitableChanged,
        value: e.threadMetadata.invitable,
        hideBorder: !0,
        disabled: !C,
        children: et.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
      })
    }) : null, eu = b.NSFW_CHANNEL_TYPES.has(e.type) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: et.default.Messages.FORM_HELP_NSFW,
        onChange: this.handleNSFWChange,
        value: e.isNSFW(),
        hideBorder: !0,
        disabled: !S,
        children: et.default.Messages.FORM_LABEL_NSFW_CHANNEL
      })
    }) : null, ec = b.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != _ && _.hasFeature(X.GuildFeatures.NEWS) && e.id !== (null == _ ? void 0 : _.rulesChannelId) && e.id !== (null == _ ? void 0 : _.publicUpdatesChannelId) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: et.default.Messages.FORM_HELP_NEWS.format({
          documentationLink: z.default.getArticleURL(X.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
        }),
        onChange: this.handleNewsChange,
        value: e.type === X.ChannelTypes.GUILD_ANNOUNCEMENT,
        hideBorder: !0,
        disabled: !S,
        children: et.default.Messages.FORM_LABEL_NEWS_CHANNEL
      })
    }) : null, eh = b.THREADED_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      }), (0, s.jsx)(E.default, {
        page: X.AnalyticsPages.CHANNEL_SETTINGS,
        children: (0, s.jsx)(j.default, {
          autoArchiveDuration: (0, O.getAutoArchiveDuration)(e, null),
          guild: _,
          channel: e,
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          isDisabled: !S
        })
      }), (0, s.jsx)(h.FormText, {
        className: es.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: e.isForumLikeChannel() ? et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : et.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
      })]
    }) : null, em = this.props.showChannelSummariesSettings ? (0, s.jsx)(h.FormSwitch, {
      note: et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: z.default.getArticleURL(X.HelpdeskArticles.CONVERSATION_SUMMARIES)
      }),
      onChange: this.handleChannelSummariesToggled,
      value: !e.hasFlag(J.ChannelFlags.SUMMARIES_DISABLED) && (null == _ ? void 0 : _.hasFeature(X.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      hideBorder: !0,
      disabled: !S || !(null == _ ? void 0 : _.hasFeature(X.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      children: (0, s.jsxs)("div", {
        className: el.badgedItem,
        children: [et.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, s.jsx)(k.TextBadge, {
          text: et.default.Messages.BETA,
          color: u.default.unsafe_rawColors.BRAND_500.css,
          className: el.__invalid_betaTag
        })]
      })
    }) : null, ef = e.isMediaChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      }), (0, s.jsx)(h.FormSwitch, {
        onChange: this.handleShowMediaOptionsToggled,
        value: !e.hasFlag(J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        note: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
        hideBorder: !0,
        disabled: !S,
        children: et.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
      })]
    }) : null;
    return e.type === X.ChannelTypes.GUILD_CATEGORY ? (g = et.default.Messages.CATEGORY_NAME, f = "category-name") : e.isForumPost() ? (g = et.default.Messages.FORUM_POST_TITLE, f = "post-title") : y ? (g = et.default.Messages.THREAD_NAME, f = "thread-name") : (g = et.default.Messages.FORM_LABEL_CHANNEL_NAME, f = "channel-name"), (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: g,
        children: (0, s.jsx)(h.TextInput, {
          value: t,
          onChange: this.handleChangeName,
          onBlur: this.handleBlurName,
          error: this.getError("name"),
          name: f,
          autoFocus: !0,
          disabled: v ? !T : !S,
          maxLength: X.MAX_CHANNEL_NAME_LENGTH
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      }), w, U, H, G, K, q, V, W, ea, eu, ec, em, eh, ef]
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
    let a = (0, V.getBitrateLimit)(t, e),
      n = this.getError("bitrate");
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: es.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: eu,
        children: et.default.Messages.FORM_LABEL_BITRATE
      }), "" !== n && (0, s.jsx)(h.FormText, {
        id: ec,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: es.marginBottom8,
        children: n
      }), (0, s.jsx)(h.Slider, {
        initialValue: Math.min(e.bitrate, a),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [X.BITRATE_MIN, X.BITRATE_DEFAULT, a],
        minValue: X.BITRATE_MIN,
        maxValue: a,
        keyboardStep: X.BITRATE_STEP,
        disabled: !l,
        "aria-labelledby": eu,
        "aria-describedby": null != n && "" !== n ? ec : eh
      }), a > X.BITRATE_DEFAULT ? (0, s.jsx)(h.FormText, {
        id: eh,
        type: h.FormTextTypes.DESCRIPTION,
        children: et.default.Messages.FORM_HELP_BITRATE.format({
          bitrate: X.BITRATE_DEFAULT / 1e3
        })
      }) : null]
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != e && null != e.guild_id && b.EDITABLE_VOICE_SETTINGS_TYPES.has(e.type) && (e.isGuildVocal() || v.VoiceInThreadsExperiment.getCurrentConfig({
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
      value: X.VideoQualityMode.AUTO,
      name: et.default.Messages.VIDEO_QUALITY_MODE_AUTO
    }, {
      value: X.VideoQualityMode.FULL,
      name: et.default.Messages.VIDEO_QUALITY_MODE_FULL
    }];
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: es.marginBottom40,
      children: [(0, s.jsx)(h.FormItem, {
        title: et.default.Messages.FORM_LABEL_VIDEO_QUALITY,
        children: (0, s.jsx)(h.RadioGroup, {
          onChange: e => {
            let {
              value: t
            } = e;
            return this.handleVideoQualityModeChange(t)
          },
          options: a,
          value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : X.VideoQualityMode.AUTO,
          disabled: !l
        })
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: et.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? et.default.Messages.NO_USER_LIMIT : et.default.Messages.NUM_USERS.format({
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let l = this.getError("user_limit"),
      a = e.isGuildStageVoice() ? X.MAX_STAGE_VOICE_USER_LIMIT : X.MAX_VOICE_USER_LIMIT;
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: es.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: em,
        children: et.default.Messages.FORM_LABEL_USER_LIMIT
      }), "" !== l && (0, s.jsx)(h.FormText, {
        id: ef,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: es.marginBottom8,
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
        "aria-labelledby": em,
        "aria-describedby": null != l && "" !== l ? ef : eE
      }), (0, s.jsx)(h.FormText, {
        id: eE,
        type: h.FormTextTypes.DESCRIPTION,
        children: (e.isGuildStageVoice() ? et.default.Messages.FORM_HELP_USER_LIMIT_STAGE : et.default.Messages.FORM_HELP_USER_LIMIT).format()
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
      label: et.default.Messages.AUTOMATIC_REGION,
      value: eS
    });
    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eS;
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      children: [(0, s.jsx)(h.FormTitle, {
        children: et.default.Messages.FORM_LABEL_REGION_OVERRIDE
      }), (0, s.jsx)(h.SingleSelect, {
        options: i,
        value: r,
        onChange: this.handleRegionChange,
        isDisabled: !a
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: et.default.Messages.FORM_HELP_REGION_OVERRIDE
      })]
    })
  }
  renderJuiceImage(e) {
    let t;
    let {
      theme: a
    } = this.props;
    return t = e.type === X.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(a) ? l("309095") : l("925442") : (0, c.isThemeDark)(a) ? l("316491") : l("301358"), (0, s.jsx)(H.default, {
      justify: H.default.Justify.CENTER,
      className: es.marginTop60,
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
      title: et.default.Messages.OVERVIEW,
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, s.jsx)(h.FormDivider, {
        className: i()(es.marginTop40, es.marginBottom40)
      }) : null, this.renderVoiceBitrate(e, l), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
    var t, l;
    super(e), ea(this, "renderEmojiPicker", e => {
      let {
        closePopout: t
      } = e, {
        channel: l
      } = this.props;
      return (0, s.jsx)(_.default, {
        guildId: null == l ? void 0 : l.guild_id,
        closePopout: t,
        onSelectEmoji: (e, l) => {
          this.handleChangeDefaultReactionEmoji(e), l && t()
        },
        pickerIntention: q.EmojiIntention.COMMUNITY_CONTENT,
        channel: l
      })
    }), ea(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, Y.setFlag)(t.flags, J.ChannelFlags.REQUIRE_TAG, e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ea(this, "handleChangeName", e => {
      let {
        channel: t
      } = this.props;
      null != t && (t.isThread() ? e = (0, L.default)(e, !1) : X.ChannelTypesSets.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, V.sanitizeGuildTextChannelName)(e)), (0, m.updateChannel)({
        name: e
      }))
    }), ea(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: t
      } = this.props;
      if ((null == e ? void 0 : e.isThread()) && null != t) {
        let e = (0, L.default)(t, !0);
        e !== t && (0, m.updateChannel)({
          name: e
        })
      }
    }), ea(this, "handleChangeTopic", e => {
      (0, m.updateChannel)({
        topic: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ea(this, "handleChangeRichTopic", (e, t, l) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: l
      }), this.handleChangeTopic(t)
    }), ea(this, "handleChangeTemplate", e => {
      (0, m.updateChannel)({
        template: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), ea(this, "handleChangeDefaultReactionEmoji", e => {
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
    }), ea(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), ea(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultSortOrder: e
      })
    }), ea(this, "handleChangeBitrate", e => {
      (0, m.updateChannel)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), ea(this, "handleUserLimitChange", e => {
      (0, m.updateChannel)({
        userLimit: Math.round(e)
      })
    }), ea(this, "handleNSFWChange", e => {
      (0, m.updateChannel)({
        nsfw: e
      })
    }), ea(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, Y.setFlag)(t.flags, J.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ea(this, "handleNewsChange", e => {
      (0, m.updateChannel)({
        type: e ? X.ChannelTypes.GUILD_ANNOUNCEMENT : X.ChannelTypes.GUILD_TEXT
      })
    }), ea(this, "handleChangeSlowmode", e => {
      (0, m.updateChannel)({
        rateLimitPerUser: e
      })
    }), ea(this, "handleChangeThreadMessageSlowmode", e => {
      (0, m.updateChannel)({
        defaultThreadRateLimitPerUser: e
      })
    }), ea(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, m.updateChannel)({
        defaultAutoArchiveDuration: e
      })
    }), ea(this, "handleRegionChange", e => {
      (0, m.updateChannel)({
        rtcRegion: e === eS ? null : e
      })
    }), ea(this, "handleVideoQualityModeChange", e => {
      (0, m.updateChannel)({
        videoQualityMode: e
      })
    }), ea(this, "handleAutoArchiveDurationChanged", e => {
      (0, m.updateChannel)({
        autoArchiveDuration: e
      })
    }), ea(this, "handleInvitableChanged", e => {
      (0, m.updateChannel)({
        invitable: e
      })
    }), ea(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, Y.setFlag)(t.flags, J.ChannelFlags.SUMMARIES_DISABLED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), ea(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, Y.setFlag)(t.flags, J.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, m.updateChannel)({
        flags: l
      })
    });
    let a = null !== (l = null === (t = this.props.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== l ? l : "";
    this.state = {
      textTopicValue: a,
      richTopicValue: (0, C.toRichValue)(a),
      topicFocused: !1
    }
  }
}

function eC() {
  let {
    errors: e,
    channel: t,
    submitting: l,
    subsection: n
  } = (0, d.useStateFromStoresObject)([F.default], () => F.default.getProps()), i = (0, d.useStateFromStores)([U.default], () => {
    var e;
    return U.default.getRegions(null !== (e = null == t ? void 0 : t.getGuildId()) && void 0 !== e ? e : null)
  }), r = (0, d.useStateFromStores)([y.default], () => y.default.theme), o = (0, d.useStateFromStores)([P.default], () => P.default.getGuild(null == t ? void 0 : t.getGuildId())), u = (0, v.useCanManageThread)(t), c = (0, v.useIsThreadModerator)(t), {
    canManageChannels: h,
    canSendMessages: m
  } = (0, d.useStateFromStoresObject)([w.default], () => ({
    canManageChannels: w.default.can(X.Permissions.MANAGE_CHANNELS, t),
    canSendMessages: w.default.can(X.Permissions.SEND_MESSAGES, t)
  })), f = (0, N.default)(t), E = D.default.getId(), g = (0, R.useForumChannelStoreApi)(), p = null == t ? void 0 : t.id, C = (0, T.useChannelSummariesExperiment)(t, !1, !0), x = S.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, _ = a.useCallback(e => {
    null != p && g.getState().setLayoutType(p, e)
  }, [p, g]);
  return (0, s.jsx)(ep, {
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
    handleSetDefaultLayout: _,
    showChannelSummariesSettings: C,
    showAdvancedSlowModeSetting: x
  })
}