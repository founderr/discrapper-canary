t.d(s, {
  G: function() {
    return eN
  },
  Z: function() {
    return ex
  }
}), t(789020), t(47120), t(733860), t(653041);
var l = t(735250),
  n = t(470079),
  i = t(120356),
  a = t.n(i),
  r = t(313361),
  o = t(683860),
  d = t(442837),
  c = t(692547),
  u = t(780384),
  h = t(481060),
  m = t(787014),
  g = t(771340),
  E = t(410575),
  T = t(852860),
  N = t(129865),
  S = t(902840),
  p = t(933557),
  x = t(541716),
  M = t(752305),
  C = t(893718),
  _ = t(907040),
  R = t(633302),
  I = t(109434),
  Z = t(162389),
  f = t(946458),
  O = t(968437),
  v = t(665906),
  A = t(456077),
  j = t(747212),
  L = t(210887),
  b = t(131704),
  D = t(314897),
  y = t(388610),
  P = t(430824),
  F = t(496675),
  w = t(903223),
  B = t(594174),
  U = t(285952),
  H = t(153124),
  G = t(934415),
  k = t(70956),
  V = t(630388),
  W = t(63063),
  z = t(129724),
  Y = t(296146),
  Q = t(564735),
  q = t(981631),
  X = t(176505),
  K = t(185923),
  $ = t(710352),
  J = t(124368),
  ee = t(689938),
  es = t(666984),
  et = t(331651);

function el(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
let en = (0, H.hQ)(),
  ei = (0, H.hQ)(),
  ea = (0, H.hQ)(),
  er = (0, H.hQ)(),
  eo = (0, H.hQ)(),
  ed = (0, H.hQ)(),
  ec = (0, H.hQ)(),
  eu = (0, H.hQ)(),
  eh = (0, H.hQ)(),
  em = (0, H.hQ)(),
  eg = (0, H.hQ)(),
  eE = (0, b.kt)({
    id: "1",
    type: q.d4z.DM
  }),
  eT = "AUTOMATIC_RTC_REGION",
  eN = d.ZP.connectStores([y.Z], () => {
    let {
      channel: e,
      submitting: s
    } = y.Z.getProps();
    return {
      channel: e,
      submitting: s,
      onReset() {
        null != e && (0, m.S1)(e.id)
      },
      onSave() {
        if (null == e) return;
        let {
          name: s,
          type: t,
          topic: l,
          bitrate: n,
          userLimit: i,
          nsfw: a,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          threadMetadata: c,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: E,
          defaultReactionEmoji: T,
          availableTags: N,
          defaultSortOrder: S,
          defaultForumLayout: p
        } = e;
        e.isThread() && (s = (0, A.Z)(s, !0)), (0, m.wk)(e.id, {
          name: s,
          type: t,
          topic: l,
          bitrate: n,
          userLimit: i,
          nsfw: a,
          flags: r,
          rateLimitPerUser: o,
          defaultThreadRateLimitPerUser: d,
          autoArchiveDuration: null == c ? void 0 : c.autoArchiveDuration,
          locked: null == c ? void 0 : c.locked,
          invitable: null == c ? void 0 : c.invitable,
          defaultAutoArchiveDuration: u,
          template: h,
          rtcRegion: g,
          videoQualityMode: E,
          defaultReactionEmoji: T,
          availableTags: N,
          defaultSortOrder: S,
          defaultForumLayout: p
        })
      }
    }
  })(T.Z);

function eS(e) {
  var s;
  let {
    channel: t,
    onChange: i
  } = e, [a, r] = n.useState(null !== (s = t.rateLimitPerUser) && void 0 !== s ? s : 0), [o, d] = n.useState(null), c = n.useMemo(() => {
    let e = [...null != o ? o : q.BiE];
    return !e.includes(a) && e.unshift(a), e.map(e => ({
      label: (0, z.A)(e, !1),
      value: e
    }))
  }, [o, a]), u = n.useCallback(e => {
    r(e), i(e), d(null)
  }, [i]), m = n.useCallback(e => {
    if ("" === e) {
      d(null);
      return
    }
    let s = [],
      t = parseInt(e, 10);
    if (Number.isNaN(t)) {
      d(null);
      return
    }
    t <= q.GI0 && s.push(t);
    let l = t * k.Z.Seconds.MINUTE;
    l <= q.GI0 && s.push(l);
    let n = t * k.Z.Seconds.HOUR;
    n <= q.GI0 && s.push(n), d(s)
  }, []), g = n.useCallback(() => {
    d(null)
  }, []);
  return (0, l.jsx)(h.SearchableSelect, {
    className: et.marginBottom8,
    value: a,
    onChange: u,
    onSearchChange: m,
    options: c,
    onBlur: g,
    placeholder: ee.Z.Messages.FORM_LABEL_SLOWMODE_SEARCH_PLACEHOLDER
  })
}
class ep extends n.PureComponent {
  componentDidMount() {
    null == this.props.regions && null != this.props.guild && g.Z.fetchRegions(this.props.guild.id)
  }
  componentDidUpdate(e) {
    var s, t, l, n;
    let i = null !== (l = null === (s = this.props.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== l ? l : "";
    (null !== (n = null === (t = e.channel) || void 0 === t ? void 0 : t.topic) && void 0 !== n ? n : "") !== i && i !== this.state.textTopicValue && this.setState({
      textTopicValue: i,
      richTopicValue: (0, M.JM)(i)
    })
  }
  getError(e) {
    let {
      errors: s
    } = this.props;
    return null == s ? void 0 : s[e]
  }
  getCooldownSliderMarker(e) {
    return (0, z.A)(e, !0)
  }
  getAutoArchiveDurationSliderMarker(e) {
    return (0, z.A)(e * k.Z.Seconds.MINUTE, !0)
  }
  renderChannelInfo(e, s) {
    var t, n, i, d, u, m;
    let g, T;
    let {
      canManageChannels: N,
      canSendMessages: S,
      isThreadModerator: p,
      canManageThread: M,
      guild: _,
      isForumPost: I,
      isOwner: v,
      showAdvancedSlowModeSetting: A
    } = this.props, L = b.Ec.has(e.type), D = e.isForumLikeChannel(), y = D && (null === (t = e.availableTags) || void 0 === t ? void 0 : t.every(e => e.moderated)), P = (null === (n = B.default.getCurrentUser()) || void 0 === n ? void 0 : n.isStaff()) === !0, F = b.TK.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: D ? ee.Z.Messages.FORM_LABEL_CHANNEL_GUIDELINES : ee.Z.Messages.FORM_LABEL_CHANNEL_TOPIC,
        className: et.marginTop20,
        children: D ? (0, l.jsx)(C.Z, {
          innerClassName: es.forumGuidelines,
          characterCountClassName: es.forumGuidelinesCharacterCount,
          maxCharacterCount: X.Z7,
          onChange: this.handleChangeRichTopic,
          placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
          channel: eE,
          textValue: this.state.textTopicValue,
          richValue: this.state.richTopicValue,
          type: x.I.FORUM_CHANNEL_GUIDELINES,
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
        }) : (0, l.jsx)(h.TextArea, {
          autoFocus: this.props.subsection === q.ZfP.TOPIC,
          placeholder: ee.Z.Messages.CHANNEL_TOPIC_EMPTY,
          value: R.ZP.translateSurrogatesToInlineEmoji(e.topic),
          onChange: this.handleChangeTopic,
          error: this.getError("topic"),
          maxLength: X.$x,
          disabled: !N,
          autosize: !0
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, w = D && P ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: ee.Z.Messages.FORM_LABEL_CHANNEL_TEMPLATE,
        className: et.marginTop20,
        children: (0, l.jsx)(h.TextArea, {
          placeholder: ee.Z.Messages.FORM_PLACEHOLDER_CHANNEL_TEMPLATE,
          value: R.ZP.translateSurrogatesToInlineEmoji(null !== (i = e.template) && void 0 !== i ? i : ""),
          onChange: this.handleChangeTemplate,
          error: this.getError("template"),
          maxLength: $.Vb,
          disabled: !N,
          autosize: !0
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, U = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)(h.FormItem, {
        children: [(0, l.jsx)(h.FormTitle, {
          id: en,
          className: es.formTitle,
          children: ee.Z.Messages.FORUM_TAGS
        }), (0, l.jsx)(h.FormText, {
          id: ei,
          type: h.FormText.Types.DESCRIPTION,
          className: es.description,
          children: ee.Z.Messages.FORM_HELP_FORUM_TAGS
        }), (0, l.jsx)(Z.Z, {
          channel: e
        })]
      }), (0, l.jsx)(h.Checkbox, {
        disabled: !N || y,
        value: e.hasFlag(X.zZ.REQUIRE_TAG),
        type: h.Checkbox.Types.INVERTED,
        onChange: (e, s) => this.handleRequireTagChanged(s),
        children: (0, l.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: ee.Z.Messages.FORUM_REQUIRE_TAG_NOTE
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, H = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: es.twoColumnSettings,
        children: [(0, l.jsxs)(h.FormItem, {
          className: a()(es.settingsLeft, es.settingsDefaultReaction),
          children: [(0, l.jsx)(h.FormTitle, {
            id: ea,
            className: es.formTitle,
            children: ee.Z.Messages.FORUM_DEFAULT_REACTION
          }), (0, l.jsx)(h.FormText, {
            id: ei,
            type: h.FormText.Types.DESCRIPTION,
            className: es.description,
            children: ee.Z.Messages.FORUM_DEFAULT_REACTION_DESCRIPTION
          }), (0, l.jsxs)("div", {
            className: es.buttonRow,
            children: [(0, l.jsx)(h.Popout, {
              renderPopout: this.renderEmojiPicker,
              position: "right",
              animation: h.Popout.Animation.NONE,
              align: "center",
              children: e => (0, l.jsx)(h.Button, {
                ...e,
                disabled: !N,
                onClick: s => {
                  var t;
                  null === (t = e.onClick) || void 0 === t || t.call(e, s)
                },
                children: ee.Z.Messages.SELECT_EMOJI
              })
            }), null != e.defaultReactionEmoji ? (0, l.jsx)(h.Button, {
              className: es.removeButton,
              onClick: () => this.handleChangeDefaultReactionEmoji(null),
              size: h.Button.Sizes.MIN,
              look: h.Button.Looks.LINK,
              color: h.Button.Colors.RED,
              children: ee.Z.Messages.REMOVE
            }) : null]
          })]
        }), (0, l.jsx)(f.Z, {
          reactionEmoji: e.defaultReactionEmoji
        })]
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, G = e.isForumChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: es.twoColumnSettings,
        children: [(0, l.jsxs)(h.FormItem, {
          className: a()(es.settingsLeft, es.settingsDefaultView),
          children: [(0, l.jsx)(h.FormSection, {
            title: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT,
            children: (0, l.jsx)(h.SingleSelect, {
              options: [{
                label: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_LIST_VIEW,
                value: r.X.LIST
              }, {
                label: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_GRID_VIEW,
                value: r.X.GRID
              }],
              value: null !== (d = e.defaultForumLayout) && void 0 !== d ? d : r.X.LIST,
              onChange: this.handleChangeDefaultForumLayout
            })
          }), (0, l.jsx)(h.FormText, {
            className: et.marginTop8,
            type: h.FormText.Types.DESCRIPTION,
            children: ee.Z.Messages.FORUM_CHANNEL_SETTINGS_DEFAULT_LAYOUT_DESCRIPTION
          })]
        }), e.defaultForumLayout === r.X.GRID ? (0, l.jsx)(Y.Z, {
          className: es.defaultImageView
        }) : (0, l.jsx)(Q.Z, {
          className: es.defaultImageView
        })]
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, k = e.isForumLikeChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        children: (0, l.jsx)(h.FormSection, {
          title: ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER,
          children: (0, l.jsx)(h.SingleSelect, {
            options: [{
              label: ee.Z.Messages.FORUM_SORT_ACTIVITY,
              value: o.z.LATEST_ACTIVITY
            }, {
              label: ee.Z.Messages.FORUM_SORT_CREATION,
              value: o.z.CREATION_DATE
            }],
            value: e.getDefaultSortOrder(),
            onChange: this.handleChangeDefaultSortOrder
          })
        })
      }), (0, l.jsx)(h.FormText, {
        className: et.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: ee.Z.Messages.FORUM_DEFAULT_SORT_ORDER_DESCRIPTION
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, V = L ? p : N, z = b.X_.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsxs)(h.FormItem, {
        children: [(0, l.jsx)(h.FormTitle, {
          id: er,
          className: et.marginBottom8,
          children: ee.Z.Messages.FORM_LABEL_SLOWMODE
        }), D ? (0, l.jsx)(h.FormTitle, {
          className: et.marginTop20,
          children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_POSTS
        }) : null, !0 === A ? (0, l.jsx)(eS, {
          channel: e,
          onChange: this.handleChangeSlowmode
        }) : (0, l.jsx)(h.Slider, {
          className: et.marginTop20,
          initialValue: e.rateLimitPerUser,
          markers: q.BiE,
          stickToMarkers: !0,
          onValueChange: this.handleChangeSlowmode,
          onMarkerRender: this.getCooldownSliderMarker,
          disabled: !V,
          equidistant: !0,
          "aria-labelledby": er,
          "aria-describedby": eo
        }), (0, l.jsx)(h.FormText, {
          id: eo,
          type: h.FormText.Types.DESCRIPTION,
          children: D ? ee.Z.Messages.FORM_HELP_SLOWMODE_FORUM : L ? ee.Z.Messages.FORM_HELP_SLOWMODE_THREAD : ee.Z.Messages.FORM_HELP_SLOWMODE
        }), D ? (0, l.jsxs)(l.Fragment, {
          children: [(0, l.jsx)(h.FormTitle, {
            className: et.marginTop20,
            children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_MESSAGES
          }), (0, l.jsx)(h.Slider, {
            className: et.marginTop20,
            initialValue: null !== (u = e.defaultThreadRateLimitPerUser) && void 0 !== u ? u : 0,
            markers: q.BiE,
            stickToMarkers: !0,
            onValueChange: this.handleChangeThreadMessageSlowmode,
            onMarkerRender: this.getCooldownSliderMarker,
            disabled: !V,
            equidistant: !0,
            "aria-labelledby": er,
            "aria-describedby": eo
          }), (0, l.jsx)(h.FormText, {
            type: h.FormText.Types.DESCRIPTION,
            children: ee.Z.Messages.FORUM_SETTING_SLOW_MODE_MESSAGE_TEXT
          })]
        }) : null]
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      })]
    }) : null, K = L && null != e.threadMetadata ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        children: (0, l.jsx)(E.Z, {
          page: q.ZY5.CHANNEL_SETTINGS,
          children: (0, l.jsx)(j.Z, {
            autoArchiveDuration: null !== (m = e.threadMetadata.autoArchiveDuration) && void 0 !== m ? m : J.AX,
            guild: _,
            channel: e,
            onChange: this.handleAutoArchiveDurationChanged,
            isDisabled: !M
          })
        })
      }), (0, l.jsx)(h.FormText, {
        className: et.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: I ? ee.Z.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.Z.Messages.FORM_HELP_AUTO_ARCHIVE_DURATION
      })]
    }) : null, el = e.type === q.d4z.PRIVATE_THREAD && null != e.threadMetadata ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: ee.Z.Messages.FORM_HELP_THREAD_INVITABLE,
        onChange: this.handleInvitableChanged,
        value: e.threadMetadata.invitable,
        hideBorder: !0,
        disabled: !M,
        children: ee.Z.Messages.THREAD_INVITABLE_TOGGLE_LABEL
      })
    }) : null, ed = b.ov.has(e.type) ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: ee.Z.Messages.FORM_HELP_NSFW,
        onChange: this.handleNSFWChange,
        value: e.isNSFW(),
        hideBorder: !0,
        disabled: !N,
        children: ee.Z.Messages.FORM_LABEL_NSFW_CHANNEL
      })
    }) : null, ec = b.Y0.has(e.type) && null != _ && _.hasFeature(q.oNc.NEWS) && e.id !== (null == _ ? void 0 : _.rulesChannelId) && e.id !== (null == _ ? void 0 : _.publicUpdatesChannelId) ? (0, l.jsx)("div", {
      children: (0, l.jsx)(h.FormSwitch, {
        note: ee.Z.Messages.FORM_HELP_NEWS.format({
          documentationLink: W.Z.getArticleURL(q.BhN.ANNOUNCEMENT_CHANNELS)
        }),
        onChange: this.handleNewsChange,
        value: e.type === q.d4z.GUILD_ANNOUNCEMENT,
        hideBorder: !0,
        disabled: !N,
        children: ee.Z.Messages.FORM_LABEL_NEWS_CHANNEL
      })
    }) : null, eu = b.uC.has(e.type) ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      }), (0, l.jsx)(E.Z, {
        page: q.ZY5.CHANNEL_SETTINGS,
        children: (0, l.jsx)(j.Z, {
          autoArchiveDuration: (0, O.WD)(e, null),
          guild: _,
          channel: e,
          onChange: this.handleChangeDefaultAutoArchiveDuration,
          isDisabled: !N
        })
      }), (0, l.jsx)(h.FormText, {
        className: et.marginTop8,
        type: h.FormText.Types.DESCRIPTION,
        children: e.isForumLikeChannel() ? ee.Z.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION_FORUM_POST : ee.Z.Messages.FORM_HELP_DEFAULT_AUTO_ARCHIVE_DURATION
      })]
    }) : null, eh = this.props.showChannelSummariesSettings ? (0, l.jsx)(h.FormSwitch, {
      note: ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
        helpdeskArticle: W.Z.getArticleURL(q.BhN.CONVERSATION_SUMMARIES)
      }),
      onChange: this.handleChannelSummariesToggled,
      value: !e.hasFlag(X.zZ.SUMMARIES_DISABLED) && (null == _ ? void 0 : _.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
      hideBorder: !0,
      disabled: !N || !(null == _ ? void 0 : _.hasFeature(q.oNc.SUMMARIES_ENABLED_BY_USER)),
      children: (0, l.jsxs)("div", {
        className: es.badgedItem,
        children: [ee.Z.Messages.CHANNEL_SETTINGS_SUMMARIES_TOGGLE, (0, l.jsx)(h.TextBadge, {
          text: ee.Z.Messages.BETA,
          color: c.Z.unsafe_rawColors.BRAND_500.css,
          className: es.__invalid_betaTag
        })]
      })
    }) : null, em = e.isMediaChannel() ? (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      }), (0, l.jsx)(h.FormSwitch, {
        onChange: this.handleShowMediaOptionsToggled,
        value: !e.hasFlag(X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS),
        note: ee.Z.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_DESCRIPTION,
        hideBorder: !0,
        disabled: !N,
        children: ee.Z.Messages.MEDIA_CHANNEL_HIDE_MEDIA_DOWNLOAD_OPTIONS_TOGGLE_LABEL
      })]
    }) : null;
    return e.type === q.d4z.GUILD_CATEGORY ? (T = ee.Z.Messages.CATEGORY_NAME, g = "category-name") : e.isForumPost() ? (T = ee.Z.Messages.FORUM_POST_TITLE, g = "post-title") : L ? (T = ee.Z.Messages.THREAD_NAME, g = "thread-name") : (T = ee.Z.Messages.FORM_LABEL_CHANNEL_NAME, g = "channel-name"), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(h.FormItem, {
        title: T,
        children: (0, l.jsx)(h.TextInput, {
          value: s,
          onChange: this.handleChangeName,
          onBlur: this.handleBlurName,
          error: this.getError("name"),
          name: g,
          autoFocus: !0,
          disabled: v ? !S : !N,
          maxLength: q.HN8
        })
      }), (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      }), F, w, U, H, z, K, G, k, el, ed, ec, eh, eu, em]
    })
  }
  renderBitrate(e) {
    return "".concat(Math.round(e / 1e3), "kbps")
  }
  renderVoiceBitrate(e, s) {
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = (0, G.g7)(s, e),
      i = this.getError("bitrate");
    return (0, l.jsxs)(U.Z, {
      direction: U.Z.Direction.VERTICAL,
      className: et.marginBottom40,
      children: [(0, l.jsx)(h.FormTitle, {
        id: ed,
        children: ee.Z.Messages.FORM_LABEL_BITRATE
      }), "" !== i && (0, l.jsx)(h.FormText, {
        id: ec,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: c.Z.unsafe_rawColors.RED_400.css
        },
        className: et.marginBottom8,
        children: i
      }), (0, l.jsx)(h.Slider, {
        initialValue: Math.min(e.bitrate, n),
        onValueChange: this.handleChangeBitrate,
        onValueRender: this.renderBitrate,
        onMarkerRender: this.renderBitrate,
        markers: [q.Fc, q.epw, n],
        minValue: q.Fc,
        maxValue: n,
        keyboardStep: q.V7H,
        disabled: !t,
        "aria-labelledby": ed,
        "aria-describedby": null != i && "" !== i ? ec : eu
      }), n > q.epw ? (0, l.jsx)(h.FormText, {
        id: eu,
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.Z.Messages.FORM_HELP_BITRATE.format({
          bitrate: q.epw / 1e3
        })
      }) : null]
    })
  }
  showVoiceSettings() {
    let {
      channel: e
    } = this.props;
    return null != e && null != e.guild_id && b.vg.has(e.type) && (e.isGuildVocal() || v.tM.getCurrentConfig({
      guildId: e.guild_id,
      location: "9b50bd_1"
    }).enabled)
  }
  renderVideoQualityMode(e) {
    var s;
    let {
      canManageChannels: t
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let n = [{
      value: q.Ucd.AUTO,
      name: ee.Z.Messages.VIDEO_QUALITY_MODE_AUTO
    }, {
      value: q.Ucd.FULL,
      name: ee.Z.Messages.VIDEO_QUALITY_MODE_FULL
    }];
    return (0, l.jsxs)(U.Z, {
      direction: U.Z.Direction.VERTICAL,
      className: et.marginBottom40,
      children: [(0, l.jsx)(h.FormItem, {
        title: ee.Z.Messages.FORM_LABEL_VIDEO_QUALITY,
        children: (0, l.jsx)(h.RadioGroup, {
          onChange: e => {
            let {
              value: s
            } = e;
            return this.handleVideoQualityModeChange(s)
          },
          options: n,
          value: null !== (s = e.videoQualityMode) && void 0 !== s ? s : q.Ucd.AUTO,
          disabled: !t
        })
      }), (0, l.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.Z.Messages.FORM_HELP_VIDEO_QUALITY_MODE.format()
      })]
    })
  }
  onRenderUserLimit(e) {
    return 0 === (e = Math.round(e)) ? ee.Z.Messages.NO_USER_LIMIT : ee.Z.Messages.NUM_USERS.format({
      num: e
    })
  }
  renderUserLimit(e) {
    let {
      canManageChannels: s
    } = this.props;
    if (!this.showVoiceSettings()) return null;
    let t = this.getError("user_limit"),
      n = e.isGuildStageVoice() ? q.xGv : q.$pe;
    return (0, l.jsxs)(U.Z, {
      direction: U.Z.Direction.VERTICAL,
      className: et.marginBottom40,
      children: [(0, l.jsx)(h.FormTitle, {
        id: eh,
        children: ee.Z.Messages.FORM_LABEL_USER_LIMIT
      }), "" !== t && (0, l.jsx)(h.FormText, {
        id: em,
        type: h.FormTextTypes.DESCRIPTION,
        style: {
          color: c.Z.unsafe_rawColors.RED_400.css
        },
        className: et.marginBottom8,
        children: t
      }), (0, l.jsx)(h.Slider, {
        initialValue: Math.min(e.userLimit, n),
        onValueChange: this.handleUserLimitChange,
        onValueRender: this.onRenderUserLimit,
        onMarkerRender: e => 0 === Math.round(e) ? "∞" : e,
        markers: [0, n],
        minValue: 0,
        maxValue: n,
        disabled: !s,
        "aria-labelledby": eh,
        "aria-describedby": null != t && "" !== t ? em : eg
      }), (0, l.jsx)(h.FormText, {
        id: eg,
        type: h.FormTextTypes.DESCRIPTION,
        children: (e.isGuildStageVoice() ? ee.Z.Messages.FORM_HELP_USER_LIMIT_STAGE : ee.Z.Messages.FORM_HELP_USER_LIMIT).format()
      })]
    })
  }
  renderRegionOverride(e) {
    var s;
    let {
      regions: t,
      canManageChannels: n,
      guild: i
    } = this.props;
    if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
    let a = [];
    null != t && (a = t.filter(e => !e.deprecated && !e.hidden).map(e => ({
      label: e.name,
      value: e.id
    }))).unshift({
      label: ee.Z.Messages.AUTOMATIC_REGION,
      value: eT
    });
    let r = null !== (s = e.rtcRegion) && void 0 !== s ? s : eT;
    return (0, l.jsxs)(U.Z, {
      direction: U.Z.Direction.VERTICAL,
      children: [(0, l.jsx)(h.FormTitle, {
        children: ee.Z.Messages.FORM_LABEL_REGION_OVERRIDE
      }), (0, l.jsx)(h.SingleSelect, {
        options: a,
        value: r,
        onChange: this.handleRegionChange,
        isDisabled: !n
      }), (0, l.jsx)(h.FormText, {
        type: h.FormTextTypes.DESCRIPTION,
        children: ee.Z.Messages.FORM_HELP_REGION_OVERRIDE
      })]
    })
  }
  renderJuiceImage(e) {
    let s;
    let {
      theme: n
    } = this.props;
    return s = e.type === q.d4z.GUILD_CATEGORY ? (0, u.wj)(n) ? t(309095) : t(925442) : (0, u.wj)(n) ? t(316491) : t(301358), (0, l.jsx)(U.Z, {
      justify: U.Z.Justify.CENTER,
      className: et.marginTop60,
      children: (0, l.jsx)("img", {
        alt: "",
        width: 280,
        height: 165,
        src: s
      })
    })
  }
  render() {
    let {
      channel: e,
      channelName: s,
      guild: t
    } = this.props;
    return null == e || null == s || null == t ? null : (0, l.jsxs)(h.FormSection, {
      className: "channel-settings-overview",
      tag: h.FormTitleTags.H1,
      title: ee.Z.Messages.OVERVIEW,
      children: [this.renderChannelInfo(e, s), this.showVoiceSettings() ? (0, l.jsx)(h.FormDivider, {
        className: a()(et.marginTop40, et.marginBottom40)
      }) : null, this.renderVoiceBitrate(e, t), this.renderVideoQualityMode(e), this.renderUserLimit(e), this.renderRegionOverride(e), this.renderJuiceImage(e)]
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
    var s, t;
    super(e), el(this, "renderEmojiPicker", e => {
      let {
        closePopout: s
      } = e, {
        channel: t
      } = this.props;
      return (0, l.jsx)(_.Z, {
        guildId: null == t ? void 0 : t.guild_id,
        closePopout: s,
        onSelectEmoji: (e, t) => {
          this.handleChangeDefaultReactionEmoji(e), t && s()
        },
        pickerIntention: K.Hz.COMMUNITY_CONTENT,
        channel: t
      })
    }), el(this, "handleRequireTagChanged", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      let t = (0, V.mB)(s.flags, X.zZ.REQUIRE_TAG, e);
      (0, m.pW)({
        flags: t
      })
    }), el(this, "handleChangeName", e => {
      let {
        channel: s
      } = this.props;
      if (null != s) s.isThread() ? e = (0, A.Z)(e, !1) : q.TPd.LIMITED_CHANNEL_NAME.has(s.type) && (e = (0, G.Nj)(e)), (0, m.pW)({
        name: e
      })
    }), el(this, "handleBlurName", () => {
      let {
        channel: e,
        channelName: s
      } = this.props;
      if ((null == e ? void 0 : e.isThread()) && null != s) {
        let e = (0, A.Z)(s, !0);
        e !== s && (0, m.pW)({
          name: e
        })
      }
    }), el(this, "handleChangeTopic", e => {
      (0, m.pW)({
        topic: R.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), el(this, "handleChangeRichTopic", (e, s, t) => {
      this.setState({
        textTopicValue: s,
        richTopicValue: t
      }), this.handleChangeTopic(s)
    }), el(this, "handleChangeTemplate", e => {
      (0, m.pW)({
        template: R.ZP.translateInlineEmojiToSurrogates(e)
      })
    }), el(this, "handleChangeDefaultReactionEmoji", e => {
      let s = null == e ? null : (null == e ? void 0 : e.id) != null ? {
        emojiId: e.id,
        emojiName: void 0
      } : {
        emojiId: void 0,
        emojiName: e.optionallyDiverseSequence
      };
      (0, m.pW)({
        defaultReactionEmoji: s
      })
    }), el(this, "handleChangeDefaultForumLayout", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      (0, m.pW)({
        defaultForumLayout: e
      }), this.props.handleSetDefaultLayout(e)
    }), el(this, "handleChangeDefaultSortOrder", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      (0, m.pW)({
        defaultSortOrder: e
      })
    }), el(this, "handleChangeBitrate", e => {
      (0, m.pW)({
        bitrate: 1e3 * Math.round(e / 1e3)
      })
    }), el(this, "handleUserLimitChange", e => {
      (0, m.pW)({
        userLimit: Math.round(e)
      })
    }), el(this, "handleNSFWChange", e => {
      (0, m.pW)({
        nsfw: e
      })
    }), el(this, "handleActiveChannelsRemovedChange", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      let t = (0, V.mB)(s.flags, X.zZ.ACTIVE_CHANNELS_REMOVED, !e);
      (0, m.pW)({
        flags: t
      })
    }), el(this, "handleNewsChange", e => {
      (0, m.pW)({
        type: e ? q.d4z.GUILD_ANNOUNCEMENT : q.d4z.GUILD_TEXT
      })
    }), el(this, "handleChangeSlowmode", e => {
      (0, m.pW)({
        rateLimitPerUser: e
      })
    }), el(this, "handleChangeThreadMessageSlowmode", e => {
      (0, m.pW)({
        defaultThreadRateLimitPerUser: e
      })
    }), el(this, "handleChangeDefaultAutoArchiveDuration", e => {
      (0, m.pW)({
        defaultAutoArchiveDuration: e
      })
    }), el(this, "handleRegionChange", e => {
      (0, m.pW)({
        rtcRegion: e === eT ? null : e
      })
    }), el(this, "handleVideoQualityModeChange", e => {
      (0, m.pW)({
        videoQualityMode: e
      })
    }), el(this, "handleAutoArchiveDurationChanged", e => {
      (0, m.pW)({
        autoArchiveDuration: e
      })
    }), el(this, "handleInvitableChanged", e => {
      (0, m.pW)({
        invitable: e
      })
    }), el(this, "handleChannelSummariesToggled", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      let t = (0, V.mB)(s.flags, X.zZ.SUMMARIES_DISABLED, !e);
      (0, m.pW)({
        flags: t
      })
    }), el(this, "handleShowMediaOptionsToggled", e => {
      let {
        channel: s
      } = this.props;
      if (null == s) return null;
      let t = (0, V.mB)(s.flags, X.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
      (0, m.pW)({
        flags: t
      })
    });
    let n = null !== (t = null === (s = this.props.channel) || void 0 === s ? void 0 : s.topic) && void 0 !== t ? t : "";
    this.state = {
      textTopicValue: n,
      richTopicValue: (0, M.JM)(n),
      topicFocused: !1
    }
  }
}

function ex() {
  let {
    errors: e,
    channel: s,
    submitting: t,
    subsection: i
  } = (0, d.cj)([y.Z], () => y.Z.getProps()), a = (0, d.e7)([w.Z], () => {
    var e;
    return w.Z.getRegions(null !== (e = null == s ? void 0 : s.getGuildId()) && void 0 !== e ? e : null)
  }), r = (0, d.e7)([L.Z], () => L.Z.theme), o = (0, d.e7)([P.Z], () => P.Z.getGuild(null == s ? void 0 : s.getGuildId())), c = (0, v.C7)(s), u = (0, v.Xb)(s), {
    canManageChannels: h,
    canSendMessages: m
  } = (0, d.cj)([F.Z], () => ({
    canManageChannels: F.Z.can(q.Plq.MANAGE_CHANNELS, s),
    canSendMessages: F.Z.can(q.Plq.SEND_MESSAGES, s)
  })), g = (0, p.ZP)(s), E = D.default.getId(), T = (0, I.v)(), x = null == s ? void 0 : s.id, M = (0, S.ts)(s, !1, !0), C = N.Z.useExperiment({
    guildId: null == s ? void 0 : s.guild_id,
    location: "ChannelSettingsOverview"
  }).enabled, _ = n.useCallback(e => {
    null != x && T.getState().setLayoutType(x, e)
  }, [x, T]);
  return (0, l.jsx)(ep, {
    errors: e,
    channel: s,
    channelName: g,
    submitting: t,
    regions: a,
    theme: r,
    guild: o,
    canManageChannels: (null == s ? void 0 : s.isThread()) ? c : h,
    canSendMessages: m,
    isThreadModerator: u,
    canManageThread: c,
    subsection: i,
    isForumPost: null != s && s.isForumPost(),
    isOwner: null == s ? void 0 : s.isOwner(E),
    handleSetDefaultLayout: _,
    showChannelSummariesSettings: M,
    showAdvancedSlowModeSetting: C
  })
}