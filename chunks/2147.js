"use strict";
l.r(t), l.d(t, {
  ChannelSettingsOverviewNotice: function() {
    return eS
  },
  default: function() {
    return ep
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
  k = l("934415"),
  V = l("70956"),
  W = l("630388"),
  Y = l("63063"),
  z = l("129724"),
  K = l("296146"),
  Z = l("564735"),
  Q = l("981631"),
  X = l("176505"),
  J = l("185923"),
  q = l("710352"),
  $ = l("124368"),
  ee = l("689938"),
  et = l("59467"),
  el = l("611273");

function es(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let ea = (0, G.uid)(),
  en = (0, G.uid)(),
  ei = (0, G.uid)(),
  er = (0, G.uid)(),
  eo = (0, G.uid)(),
  ed = (0, G.uid)(),
  eu = (0, G.uid)(),
  ec = (0, G.uid)(),
  eh = (0, G.uid)(),
  em = (0, G.uid)(),
  ef = (0, G.uid)(),
  eE = (0, b.createChannelRecord)({
    id: "1",
    type: Q.ChannelTypes.DM
  }),
  eg = "AUTOMATIC_RTC_REGION",
  eS = d.default.connectStores([F.default], () => {
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

function eT(e) {
  var t;
  let {
    channel: l,
    onChange: n
  } = e, [i, r] = a.useState(null !== (t = l.rateLimitPerUser) && void 0 !== t ? t : 0), [o, d] = a.useState(null), u = a.useMemo(() => {
    let e = [...null != o ? o : Q.SLOWMODE_VALUES];
    return !e.includes(i) && e.unshift(i), e.map(e => ({
      label: (0, z.getSecondsSliderLabel)(e, !1),
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
    l <= Q.SLOWMODE_MAX_VALUE && t.push(l);
    let s = l * V.default.Seconds.MINUTE;
    s <= Q.SLOWMODE_MAX_VALUE && t.push(s);
    let a = l * V.default.Seconds.HOUR;
    a <= Q.SLOWMODE_MAX_VALUE && t.push(a), d(t)
  }, []), f = a.useCallback(() => {
    d(null)
  }, []);
  return (0, s.jsx)(h.SearchableSelect, {
    className: el.marginBottom8,
    value: i,
    onChange: c,
    onSearchChange: m,
    options: u,
    onBlur: f,
    placeholder: ee.default.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  })
}
class eN extends a.PureComponent {
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
    return (0, z.getSecondsSliderLabel)(e, !0)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, z.getSecondsSliderLabel)(e * V.default.Seconds.MINUTE, !0)
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
        title: D ? ee.default.Messages.FORM_LABEL_CHANNEL_GUIDELINES : ee.default.Messages.FORM_LABEL_CHANNEL_TOPIC,
        className: el.marginTop20,
        children: D ? (0, s.jsx)(x.default, {
          innerClassName: et.forumGuidelines,
          characterCountClassName: et.forumGuidelinesCharacterCount,
          maxCharacterCount: X.MAX_FORUM_CHANNEL_TOPIC_LENGTH,
          onChange: this.handleChangeRichTopic,
          placeholder: ee.default.Messages.CHANNEL_TOPIC_EMPTY,
          channel: eE,
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
          autoFocus: this.props.subsection === Q.ChannelSettingsSubsections.TOPIC,
          placeholder: ee.default.Messages.CHANNEL_TOPIC_EMPTY,
          value: M.default.translateSurrogatesToInlineEmoji(e.topic),
          onChange: this.handleChangeTopic,
          error: this.getError("topic"),
          maxLength: X.MAX_CHANNEL_TOPIC_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, U = D && P ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        title: ee.default.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
        className: el.marginTop20,
        children: (0, s.jsx)(h.TextArea, {
          placeholder: ee.default.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
          value: M.default.translateSurrogatesToInlineEmoji(null !== (n = e.template) && void 0 !== n ? n : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: q.MAX_FORUM_TEMPLATE_LENGTH,
          disabled: !S,
          autosize: !0
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, H = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: ea,
          className: et.formTitle,
          children: ee.default.Messages.FORUM_TAGS
        }), (0, s.jsx)(h.FormText, {
          id: en,
          type: h.FormText.Types.DESCRIPTION,
          className: et.description,
          children: ee.default.Messages.FORM_HELP_FORUM_TAGS
        }), (0, s.jsx)(I.default, {
          channel: e
        })]
      }), (0, s.jsx)(h.Checkbox, {
        disabled: !S || F,
        value: e.hasFlag(X.ChannelFlags.REQUIRE_TAG),
        type: h.Checkbox.Types.INVERTED,
        onChange: (e, t) => this.handleRequireTagChanged(t),
        children: (0, s.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: ee.default.Messages.FORUM_REQUIRE_TAG_NOTE
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, G = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: et.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(et.settingsLeft, et.settingsDefaultReaction),
          children: [(0, s.jsx)(h.FormTitle, {
            id: ei,
            className: et.formTitle,
            children: ee.default.Messages.FORUM_DEFAULT_REACTION
          }), (0, s.jsx)(h.FormText, {
            id: en,
            type: h.FormText.Types.DESCRIPTION,
            className: et.description,
            children: ee.default.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
          }), (0, s.jsxs)("div", {
            className: et.buttonRow,
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
                children: ee.default.Messages.SELECT_EMOJI
              })
            }), null != e.defaultReactionEmoji ? (0, s.jsx)(h.Button, {
              className: et.removeButton,
              onClick: () => this.handleChangeDefaultReactionEmoji(null),
              size: h.Button.Sizes.MIN,
              look: h.Button.Looks.LINK,
              color: h.Button.Colors.RED,
              children: ee.default.Messages.REMOVE
            }) : null]
          })]
        }), (0, s.jsx)(A.default, {
          reactionEmoji: e.defaultReactionEmoji
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, k = e.isForumChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: et.twoColumnSettings,
        children: [(0, s.jsxs)(h.FormItem, {
          className: i()(et.settingsLeft, et.settingsDefaultView),
          children: [(0, s.jsx)(h.FormSection, {
            title: ee.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
            children: (0, s.jsx)(h.SingleSelect, {
              options: [{
                label: ee.default.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                value: r.ForumLayout.LIST
              }, {
                label: ee.default.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                value: r.ForumLayout.GRID
              }],
              value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.ForumLayout.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), (0, s.jsx)(h.FormText, {
            className: el.marginTop8,
            type: h.FormText.Types.DESCRIPTION,
            children: ee.default.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
          })]
        }), e.defaultForumLayout === r.ForumLayout.GRID ? (0, s.jsx)(K.default, {
          className: et.defaultImageView
        }) : (0, s.jsx)(Z.default, {
          className: et.defaultImageView
        })]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, V = e.isForumLikeChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(h.FormSection, {
          title: ee.default.Messages.FORUM_DEFAULT_SORT_ORDER,
          children: (0, s.jsx)(h.SingleSelect, {
            options: [{
              label: ee.default.Messages.FORUM_SORT_ACTIVITY,
              value: o.ThreadSortOrder.LATEST_ACTIVITY
            }, {
              label: ee.default.Messages.FORUM_SORT_CREATION,
              value: o.ThreadSortOrder.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: el.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: ee.default.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, W = y ? N : S, z = b.SLOWMODE_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsxs)(h.FormItem, {
        children: [(0, s.jsx)(h.FormTitle, {
          id: er,
          className: el.marginBottom8,
          children: ee.default.Messages.FORM_LABEL_SLOWMODE
        }), D ? (0, s.jsx)(h.FormTitle, {
          className: el.marginTop20,
          children: ee.default.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null, !0 === L ? (0, s.jsx)(eT, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, s.jsx)(h.Slider, {
          className: el.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: Q.SLOWMODE_VALUES,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !W,
          equidistant: !0,
          "aria-labelledby": er,
          "aria-describedby": eo
        }), (0, s.jsx)(h.FormText, {
          id: eo,
          type: h.FormText.Types.DESCRIPTION,
          children: D ? ee.default.Messages.FORM_HELP_SLOWMODE_FORUM : y ? ee.default.Messages.FORM_HELP_SLOWMODE_THREAD : ee.default.Messages.FORM_HELP_SLOWMODE
        }), D ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h.FormTitle, {
            className: el.marginTop20,
            children: ee.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
          }), (0, s.jsx)(h.Slider, {
            className: el.marginTop20,
            initialValue: null !== (c = e.defaultThreadRateLimitPerUser) && void 0 !== c ? c : 0,
            markers: Q.SLOWMODE_VALUES,
            stickToMarkers: !0,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !W,
            equidistant: !0,
            "aria-labelledby": er,
            "aria-describedby": eo
          }), (0, s.jsx)(h.FormText, {
            type: h.FormText.Types.DESCRIPTION,
            children: ee.default.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
          })]
        }) : null]
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      })]
    }) : null, J = y && null != e.threadMetadata ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormItem, {
        children: (0, s.jsx)(E.default, {
          page: Q.AnalyticsPages.CHANNEL_SETTINGS,
          children: (0, s.jsx)(j.default, {
            autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : $.DEFAULT_AUTO_ARCHIVE_DURATION,
            guild: _,
            channel: e,
            onChange: this.handleAutoArchiveDurationChanged,
            isDisabled: !C
          })
        })
      }), (0, s.jsx)(h.FormText, {
        className: el.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: R ? ee.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.default.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
      })]
    }) : null, es = e.type === Q.ChannelTypes.PRIVATE_THREAD && null != e.threadMetadata ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: ee.default.Messages.FORM_HELP_THREAD_INVITABLE,
        onChange: this.handleInvitableChanged,
        value: e.threadMetadata.invitable,
        hideBorder: !0,
        disabled: !C,
        children: ee.default.Messages.THREAD_INVITABLE_TOGGLE_LABEL
      })
    }) : null, ed = b.NSFW_CHANNEL_TYPES.has(e.type) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: ee.default.Messages.FORM_HELP_NSFW,
        onChange: this.handleNSFWChange,
        value: e.isNSFW(),
        hideBorder: !0,
        disabled: !S,
        children: ee.default.Messages.FORM_LABEL_NSFW_CHANNEL
      })
    }) : null, eu = b.TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES.has(e.type) && null != _ && _.hasFeature(Q.GuildFeatures.NEWS) && e.id !== (null == _ ? void 0 : _.rulesChannelId) && e.id !== (null == _ ? void 0 : _.publicUpdatesChannelId) ? (0, s.jsx)("div", {
      children: (0, s.jsx)(h.FormSwitch, {
        note: ee.default.Messages.FORM_HELP_NEWS.format({
          documentationLink: Y.default.getArticleURL(Q.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
        }),
        onChange: this.handleNewsChange,
        value: e.type === Q.ChannelTypes.GUILD_ANNOUNCEMENT,
        hideBorder: !0,
        disabled: !S,
        children: ee.default.Messages.FORM_LABEL_NEWS_CHANNEL
      })
    }) : null, ec = b.THREADED_CHANNEL_TYPES.has(e.type) ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      }), (0, s.jsx)(E.default, {
        page: Q.AnalyticsPages.CHANNEL_SETTINGS,
        children: (0, s.jsx)(j.default, {
          autoArchiveDuration: (0, O.getAutoArchiveDuration)(e, null),
          guild: _,
          channel: e,
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          isDisabled: !S
        })
      }), (0, s.jsx)(h.FormText, {
        className: el.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: e.isForumLikeChannel() ? ee.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.default.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
      })]
    }) : null, eh = this.props.showChannelSummariesSettings ? (0, s.jsx)(h.FormSwitch, {
      note: ee.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: Y.default.getArticleURL(Q.HelpdeskArticles.CONVERSATION_SUMMARIES)
      }),
      onChange: this.handleChannelSummariesToggled,
      value: !e.hasFlag(X.ChannelFlags.SUMMARIES_DISABLED) && (null == _ ? void 0 : _.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      hideBorder: !0,
      disabled: !S || !(null == _ ? void 0 : _.hasFeature(Q.GuildFeatures.SUMMARIES_ENABLED_BY_USER)),
      children: (0, s.jsxs)("div", {
        className: et.badgedItem,
        children: [ee.default.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, s.jsx)(h.TextBadge, {
          text: ee.default.Messages.BETA,
          color: u.default.unsafe_rawColors.BRAND_500.css,
          className: et.__invalid_betaTag
        })]
      })
    }) : null, em = e.isMediaChannel() ? (0, s.jsxs)("div", {
      children: [(0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      }), (0, s.jsx)(h.FormSwitch, {
        onChange: this.handleShowMediaOptionsToggled,
        value: !e.hasFlag(X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        note: ee.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
        hideBorder: !0,
        disabled: !S,
        children: ee.default.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
      })]
    }) : null;
    return e.type === Q.ChannelTypes.GUILD_CATEGORY ? (g = ee.default.Messages.CATEGORY_NAME, f = "category-name") : e.isForumPost() ? (g = ee.default.Messages.FORUM_POST_TITLE, f = "post-title") : y ? (g = ee.default.Messages.THREAD_NAME, f = "thread-name") : (g = ee.default.Messages.FORM_LABEL_CHANNEL_NAME, f = "channel-name"), (0, s.jsxs)("div", {
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
          maxLength: Q.MAX_CHANNEL_NAME_LENGTH
        })
      }), (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
      }), w, U, H, G, z, J, k, V, es, ed, eu, eh, ec, em]
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
    let a = (0, k.getBitrateLimit)(t, e),
      n = this.getError("bitrate");
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: el.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: ed,
        children: ee.default.Messages.FORM_LABEL_BITRATE
      }), "" !== n && (0, s.jsx)(h.FormText, {
        id: eu,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: el.marginBottom8,
        children: n
      }), (0, s.jsx)(h.Slider, {
        initialValue: Math.min(e.bitrate, a),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [Q.BITRATE_MIN, Q.BITRATE_DEFAULT, a],
        minValue: Q.BITRATE_MIN,
        maxValue: a,
        keyboardStep: Q.BITRATE_STEP,
        disabled: !l,
        "aria-labelledby": ed,
        "aria-describedby": null != n && "" !== n ? eu : ec
      }), a > Q.BITRATE_DEFAULT ? (0, s.jsx)(h.FormText, {
        id: ec,
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.default.Messages.FORM_HELP_BITRATE.format({
          bitrate: Q.BITRATE_DEFAULT / 1e3
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
      value: Q.VideoQualityMode.AUTO,
      name: ee.default.Messages.VIDEO_QUALITY_MODE_AUTO
    }, {
      value: Q.VideoQualityMode.FULL,
      name: ee.default.Messages.VIDEO_QUALITY_MODE_FULL
    }];
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: el.marginBottom40,
      children: [(0, s.jsx)(h.FormItem, {
        title: ee.default.Messages.FORM_LABEL_VIDEO_QUALITY,
        children: (0, s.jsx)(h.RadioGroup, {
          onChange: e => {
            let {
              value: t
            } = e;
            return this.handleVideoQualityModeChange(t)
          },
          options: a,
          value: null !== (t = e.videoQualityMode) && void 0 !== t ? t : Q.VideoQualityMode.AUTO,
          disabled: !l
        })
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.default.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ee.default.Messages.NO_USER_LIMIT : ee.default.Messages.NUM_USERS.format({
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let l = this.getError("user_limit"),
      a = e.isGuildStageVoice() ? Q.MAX_STAGE_VOICE_USER_LIMIT : Q.MAX_VOICE_USER_LIMIT;
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      className: el.marginBottom40,
      children: [(0, s.jsx)(h.FormTitle, {
        id: eh,
        children: ee.default.Messages.FORM_LABEL_USER_LIMIT
      }), "" !== l && (0, s.jsx)(h.FormText, {
        id: em,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: u.default.unsafe_rawColors.RED_400.css
        },
        className: el.marginBottom8,
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
        "aria-labelledby": eh,
        "aria-describedby": null != l && "" !== l ? em : ef
      }), (0, s.jsx)(h.FormText, {
        id: ef,
        type: h.FormTextTypes.DESCRIPTION,
        children: (e.isGuildStageVoice() ? ee.default.Messages.FORM_HELP_USER_LIMIT_STAGE : ee.default.Messages.FORM_HELP_USER_LIMIT).format()
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
      label: ee.default.Messages.AUTOMATIC_REGION,
      value: eg
    });
    let r = null !== (t = e.rtcRegion) && void 0 !== t ? t : eg;
    return (0, s.jsxs)(H.default, {
      direction: H.default.Direction.VERTICAL,
      children: [(0, s.jsx)(h.FormTitle, {
        children: ee.default.Messages.FORM_LABEL_REGION_OVERRIDE
      }), (0, s.jsx)(h.SingleSelect, {
        options: i,
        value: r,
        onChange: this.handleRegionChange,
        isDisabled: !a
      }), (0, s.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.default.Messages.FORM_HELP_REGION_OVERRIDE
      })]
    })
  }
  renderJuiceImage(e) {
    let t;
    let {
      theme: a
    } = this.props;
    return t = e.type === Q.ChannelTypes.GUILD_CATEGORY ? (0, c.isThemeDark)(a) ? l("309095") : l("925442") : (0, c.isThemeDark)(a) ? l("316491") : l("301358"), (0, s.jsx)(H.default, {
      justify: H.default.Justify.CENTER,
      className: el.marginTop60,
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
      title: ee.default.Messages.OVERVIEW,
      children: [this.renderChannelInfo(e, t), this.showVoiceSettings() ? (0, s.jsx)(h.FormDivider, {
        className: i()(el.marginTop40, el.marginBottom40)
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
    super(e), es(this, "renderEmojiPicker", e => {
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
        pickerIntention: J.EmojiIntention.COMMUNITY_CONTENT,
        channel: l
      })
    }), es(this, "handleRequireTagChanged", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, W.setFlag)(t.flags, X.ChannelFlags.REQUIRE_TAG, e);
      (0, m.updateChannel)({
        flags: l
      })
    }), es(this, "handleChangeName", e => {
      let {
        channel: t
      } = this.props;
      null != t && (t.isThread() ? e = (0, L.default)(e, !1) : Q.ChannelTypesSets.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, k.sanitizeGuildTextChannelName)(e)), (0, m.updateChannel)({
        name: e
      }))
    }), es(this, "handleBlurName", () => {
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
    }), es(this, "handleChangeTopic", e => {
      (0, m.updateChannel)({
        topic: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), es(this, "handleChangeRichTopic", (e, t, l) => {
      this.setState({
        textTopicValue: t,
        richTopicValue: l
      }), this.handleChangeTopic(t)
    }), es(this, "handleChangeTemplate", e => {
      (0, m.updateChannel)({
        template: M.default.translateInlineEmojiToSurrogates(e)
      })
    }), es(this, "handleChangeDefaultReactionEmoji", e => {
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
    }), es(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), es(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      (0, m.updateChannel)({
        defaultSortOrder: e
      })
    }), es(this, "handleChangeBitrate", e => {
      (0, m.updateChannel)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), es(this, "handleUserLimitChange", e => {
      (0, m.updateChannel)({
        userLimit: Math.round(e)
      })
    }), es(this, "handleNSFWChange", e => {
      (0, m.updateChannel)({
        nsfw: e
      })
    }), es(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, W.setFlag)(t.flags, X.ChannelFlags.ACTIVE_CHANNELS_REMOVED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), es(this, "handleNewsChange", e => {
      (0, m.updateChannel)({
        type: e ? Q.ChannelTypes.GUILD_ANNOUNCEMENT : Q.ChannelTypes.GUILD_TEXT
      })
    }), es(this, "handleChangeSlowmode", e => {
      (0, m.updateChannel)({
        rateLimitPerUser: e
      })
    }), es(this, "handleChangeThreadMessageSlowmode", e => {
      (0, m.updateChannel)({
        defaultThreadRateLimitPerUser: e
      })
    }), es(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, m.updateChannel)({
        defaultAutoArchiveDuration: e
      })
    }), es(this, "handleRegionChange", e => {
      (0, m.updateChannel)({
        rtcRegion: e === eg ? null : e
      })
    }), es(this, "handleVideoQualityModeChange", e => {
      (0, m.updateChannel)({
        videoQualityMode: e
      })
    }), es(this, "handleAutoArchiveDurationChanged", e => {
      (0, m.updateChannel)({
        autoArchiveDuration: e
      })
    }), es(this, "handleInvitableChanged", e => {
      (0, m.updateChannel)({
        invitable: e
      })
    }), es(this, "handleChannelSummariesToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, W.setFlag)(t.flags, X.ChannelFlags.SUMMARIES_DISABLED, !e);
      (0, m.updateChannel)({
        flags: l
      })
    }), es(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: t
      } = this.props;
      if (null == t) return null;
      let l = (0, W.setFlag)(t.flags, X.ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
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

function ep() {
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
    canManageChannels: w.default.can(Q.Permissions.MANAGE_CHANNELS, t),
    canSendMessages: w.default.can(Q.Permissions.SEND_MESSAGES, t)
  })), f = (0, N.default)(t), E = D.default.getId(), g = (0, R.useForumChannelStoreApi)(), p = null == t ? void 0 : t.id, C = (0, T.useChannelSummariesExperiment)(t, !1, !0), x = S.default.useExperiment({
    guildId: null == t ? void 0 : t.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, _ = a.useCallback(e => {
    null != p && g.getState().setLayoutType(p, e)
  }, [p, g]);
  return (0, s.jsx)(eN, {
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