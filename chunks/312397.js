"use strict";
s.r(t), s.d(t, {
  GuildSettingsOverviewNotice: function() {
    return eN
  },
  default: function() {
    return eh
  }
}), s("47120"), s("733860");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("392711"),
  u = s.n(d),
  c = s("442837"),
  E = s("692547"),
  _ = s("780384"),
  I = s("481060"),
  T = s("852860"),
  S = s("902840"),
  f = s("410030"),
  m = s("100527"),
  N = s("367907"),
  g = s("906732"),
  h = s("740504"),
  C = s("933557"),
  R = s("471445"),
  x = s("890477"),
  L = s("688465"),
  O = s("807582"),
  A = s("48217"),
  p = s("26323"),
  M = s("35125"),
  D = s("536442"),
  v = s("142497"),
  j = s("884858"),
  G = s("516129"),
  U = s("813197"),
  P = s("208567"),
  b = s("592125"),
  y = s("324067"),
  B = s("650774"),
  F = s("496675"),
  H = s("699516"),
  k = s("594174"),
  w = s("285952"),
  V = s("976644"),
  Y = s("353872"),
  W = s("709586"),
  z = s("26290"),
  K = s("768581"),
  Z = s("630388"),
  X = s("823379"),
  Q = s("63063"),
  J = s("434404"),
  q = s("999382"),
  $ = s("203377"),
  ee = s("981631"),
  et = s("30513"),
  es = s("486324"),
  ea = s("200299"),
  el = s("689938"),
  en = s("81041"),
  ei = s("935653"),
  er = s("449874");

function eo(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let ed = "NO_AFK_CHANNEL",
  eu = "NO_SYSTEM_CHANNEL",
  ec = "".concat(60),
  eE = "".concat(300),
  e_ = "".concat(900),
  eI = "".concat(1800),
  eT = "".concat(3600);

function eS(e) {
  return ef(e[0])
}

function ef(e) {
  if (null == e) return;
  let {
    label: t,
    channel: s,
    category: l
  } = e, n = (0, R.getChannelIconComponent)(s), i = null != l ? (0, C.computeChannelName)(l, k.default, H.default) : null;
  return (0, a.jsx)(Y.default, {
    title: t,
    icon: n,
    subtitle: i
  })
}

function em(e) {
  return {
    value: e.id,
    label: (0, C.computeChannelName)(e, k.default, H.default),
    channel: e,
    category: b.default.getChannel(e.parent_id)
  }
}
let eN = () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: s,
    errors: n
  } = (0, c.useStateFromStoresObject)([q.default], () => q.default.getProps()), i = l.useMemo(() => (0, $.getSettingsErrorMessage)(n), [n]), r = l.useCallback(() => {
    if (null == e) return;
    let s = {
      name: e.name,
      icon: e.icon,
      splash: e.splash,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      systemChannelId: e.systemChannelId,
      safetyAlertsChannelId: e.safetyAlertsChannelId,
      verificationLevel: e.verificationLevel,
      defaultMessageNotifications: e.defaultMessageNotifications,
      explicitContentFilter: e.explicitContentFilter,
      description: e.description,
      banner: e.banner,
      systemChannelFlags: e.systemChannelFlags,
      publicUpdatesChannelId: e.publicUpdatesChannelId,
      premiumProgressBarEnabled: e.premiumProgressBarEnabled,
      homeHeader: e.homeHeader,
      clan: e.clan
    };
    !(0, X.areSetsEqual)(new Set(e.features), new Set(t.features)) && (s.features = e.features), J.default.saveGuild(e.id, s)
  }, [e, t]), o = l.useCallback(() => {
    null != e && J.default.init(e.id)
  }, [e]);
  return (0, a.jsx)(T.default, {
    submitting: s,
    errorMessage: i,
    onSave: r,
    onReset: o
  })
};
class eg extends l.PureComponent {
  componentDidMount() {
    if (this.props.subsection === ee.GuildSettingsSubsections.DISPLAY && null != this._displaySectionRef.current) {
      let e = this._displaySectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === ee.GuildSettingsSubsections.INVITE && null != this._inviteSectionRef.current) {
      let e = this._inviteSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === ee.GuildSettingsSubsections.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
      let e = this._notificationSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    }
  }
  handleNameChange(e) {
    J.default.updateGuild({
      name: e
    })
  }
  handleAFKChannelChange(e) {
    e === ed && (e = null), J.default.updateGuild({
      afkChannelId: e
    })
  }
  handleAFKTimeoutChange(e) {
    J.default.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }
  handleSystemChannelChange(e) {
    e === eu && (e = null), J.default.updateGuild({
      systemChannelId: e
    })
  }
  handleDefaultMessageNotificationsChange(e) {
    let {
      value: t
    } = e;
    J.default.updateGuild({
      defaultMessageNotifications: t
    })
  }
  handleSplashChange(e) {
    J.default.updateGuild({
      splash: e
    })
  }
  handleSystemChannelFlagsChange(e, t) {
    let {
      guild: s
    } = this.props, a = (0, Z.setFlag)(s.systemChannelFlags, e, t);
    J.default.updateGuild({
      systemChannelFlags: a
    })
  }
  handlePremiumProgressBarEnabledChange(e) {
    J.default.updateGuild({
      premiumProgressBarEnabled: e
    })
  }
  handleChangeDescription(e) {
    J.default.updateGuild({
      description: e
    })
  }
  renderBaseSettings() {
    let {
      guild: e,
      errors: t,
      canManageGuild: s
    } = this.props;
    return (0, a.jsxs)(w.default, {
      className: i()(en.__invalid_baseSection),
      children: [(0, a.jsxs)(w.default, {
        basis: "50%",
        justify: w.default.Justify.BETWEEN,
        children: [(0, a.jsxs)(w.default.Child, {
          wrap: !0,
          children: [(0, a.jsx)(P.default, {
            showIcon: !0,
            name: e.name,
            image: e.icon,
            onChange: this.handleIconChange,
            disabled: !s,
            hint: el.default.Messages.CHANGE_ICON,
            makeURL: t => K.default.getGuildIconURL({
              id: e.id,
              icon: t,
              canAnimate: !0,
              size: 100
            }),
            className: i()({
              [en.avatarUploader]: s,
              [en.avatarUploaderDisabled]: !s
            }),
            imageClassName: i()(en.avatarUploaderInner, {
              [en.avatarUploaderInnerEmpty]: null == e.icon
            })
          }), null != t.icon ? (0, a.jsx)("div", {
            className: en.iconError,
            children: t.icon
          }) : null]
        }), (0, a.jsxs)(w.default, {
          direction: w.default.Direction.VERTICAL,
          align: w.default.Align.START,
          style: {
            maxWidth: 180
          },
          children: [(0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: en.marginBottom8,
            children: el.default.Messages.GUILD_SETTINGS_ICON_RECOMMEND
          }), (0, a.jsxs)(I.Button, {
            look: I.ButtonLooks.OUTLINED,
            color: I.ButtonColors.PRIMARY,
            disabled: !s,
            className: en.marginTop8,
            onClick: this.handleUploadImage,
            children: [el.default.Messages.UPLOAD_IMAGE, (0, a.jsx)(U.default, {
              ref: this._imageInputRef,
              onChange: this.handleOpenImageCroppingModal,
              disabled: !s
            })]
          })]
        })]
      }), (0, a.jsx)(w.default.Child, {
        basis: "50%",
        children: (0, a.jsx)(I.FormItem, {
          title: el.default.Messages.FORM_LABEL_SERVER_NAME,
          className: en.marginBottom20,
          children: (0, a.jsx)(I.TextInput, {
            type: "text",
            disabled: !s,
            value: e.name,
            maxLength: 100,
            onChange: this.handleNameChange,
            error: t.name
          })
        })
      })]
    })
  }
  renderAFKSection() {
    var e;
    let {
      guild: t,
      canManageGuild: s,
      channels: l
    } = this.props, n = null != t.afkTimeout ? "".concat(t.afkTimeout) : null, i = null !== (e = t.afkChannelId) && void 0 !== e ? e : ed, r = [{
      value: ec,
      label: el.default.Messages.DURATION_MINUTES.format({
        minutes: 1
      })
    }, {
      value: eE,
      label: el.default.Messages.DURATION_MINUTES.format({
        minutes: 5
      })
    }, {
      value: e_,
      label: el.default.Messages.DURATION_MINUTES.format({
        minutes: 15
      })
    }, {
      value: eI,
      label: el.default.Messages.DURATION_MINUTES.format({
        minutes: 30
      })
    }, {
      value: eT,
      label: el.default.Messages.DURATION_HOURS.format({
        hours: 1
      })
    }], o = u()(l).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === ee.ChannelTypes.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return em(t)
    }).value();
    return o.unshift({
      value: ed,
      label: el.default.Messages.NO_AFK_CHANNEL
    }), (0, a.jsxs)(I.FormSection, {
      className: en.divider,
      children: [(0, a.jsxs)(w.default, {
        children: [(0, a.jsx)(w.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(I.FormItem, {
            title: el.default.Messages.FORM_LABEL_AFK_CHANNEL,
            children: (0, a.jsx)(I.SingleSelect, {
              value: i,
              options: o,
              onChange: this.handleAFKChannelChange,
              isDisabled: !s,
              renderOptionLabel: ef,
              renderOptionValue: eS
            })
          })
        }), (0, a.jsx)(w.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(I.FormItem, {
            title: el.default.Messages.FORM_LABEL_AFK_TIMEOUT,
            children: (0, a.jsx)(I.SingleSelect, {
              value: n,
              options: r,
              isDisabled: i === ed || !s,
              onChange: this.handleAFKTimeoutChange
            })
          })
        })]
      }), (0, a.jsx)(I.FormText, {
        className: en.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: el.default.Messages.FORM_HELP_AFK_CHANNEL
      })]
    })
  }
  renderJoinNotificationSection() {
    var e;
    let {
      guild: t,
      channels: s,
      canManageGuild: l,
      eligibleForDeadchatPrompt: n
    } = this.props, r = null !== (e = t.systemChannelId) && void 0 !== e ? e : eu, o = u()(s).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === ee.ChannelTypes.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return em(t)
    }).value();
    o.unshift({
      value: eu,
      label: el.default.Messages.NO_SYSTEM_CHANNEL
    });
    let d = (0, M.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings)(t),
      c = d || (0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      E = d || (0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, a.jsxs)(I.FormSection, {
      className: en.divider,
      children: [(0, a.jsx)(I.FormTitle, {
        children: el.default.Messages.FORM_LABEL_SYSTEM_CHANNEL
      }), (0, a.jsx)(I.SingleSelect, {
        value: r,
        options: o,
        isDisabled: !l,
        onChange: this.handleSystemChannelChange,
        renderOptionLabel: ef,
        renderOptionValue: eS
      }), (0, a.jsx)(I.FormText, {
        className: en.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL
      }), (0, a.jsx)(I.FormSwitch, {
        className: en.marginTop20,
        onChange: this.handleShowJoinsChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowJoinRepliesChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowSubscriptionsChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowGuildRemindersChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
      }), c && (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
      }), E && (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
      }), n && (0, a.jsx)(I.FormSwitch, {
        className: i()(en.__invalid_marginReset, en.marginTop20),
        onChange: this.handleShowDeadchatPromptMessageChange,
        value: !(0, Z.hasFlag)(t.systemChannelFlags, ee.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
        hideBorder: !0,
        disabled: !l || r === eu,
        children: (0, a.jsxs)("div", {
          className: en.flexRow,
          children: [el.default.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE, (0, a.jsx)(L.default, {})]
        })
      })]
    })
  }
  renderNotificationSection() {
    let {
      guild: e,
      canManageGuild: t,
      guildMemberCount: s
    } = this.props, l = [{
      name: el.default.Messages.FORM_LABEL_ALL_MESSAGES,
      value: ee.UserNotificationSettings.ALL_MESSAGES,
      desc: null != s && s >= ee.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? el.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
    }, {
      name: el.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
      value: ee.UserNotificationSettings.ONLY_MENTIONS
    }];
    return (0, a.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, a.jsxs)(I.FormSection, {
        className: en.divider,
        children: [(0, a.jsx)(I.FormTitle, {
          children: el.default.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS
        }), (0, a.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: en.marginBottom20,
          children: el.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
        }), (0, a.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: en.marginBottom20,
          children: el.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
        }), (0, a.jsx)(I.RadioGroup, {
          options: l,
          value: e.defaultMessageNotifications,
          disabled: !t,
          onChange: this.handleDefaultMessageNotificationsChange
        })]
      })
    })
  }
  renderSummariesSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, S.canGuildUseConversationSummaries)(e, !1) ? (0, a.jsx)("div", {
      children: (0, a.jsx)(I.FormSection, {
        className: en.divider,
        children: (0, a.jsx)(I.FormSwitch, {
          className: i()(en.marginTop8, en.marginBottom8),
          onChange: this.handleConversationSummariesToggle,
          value: e.hasFeature(ee.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
          hideBorder: !0,
          note: el.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
            helpdeskArticle: Q.default.getArticleURL(ee.HelpdeskArticles.CONVERSATION_SUMMARIES)
          }),
          disabled: !t,
          children: (0, a.jsxs)("div", {
            className: en.badgedItem,
            children: [el.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE, (0, a.jsx)(z.TextBadge, {
              text: el.default.Messages.BETA,
              color: E.default.unsafe_rawColors.BRAND_500.css,
              className: en.__invalid_betaTag
            })]
          })
        })
      })
    }) : null
  }
  renderServerInviteBGSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props, s = e.hasFeature(ee.GuildFeatures.INVITE_SPLASH), l = t && s, n = (0, a.jsx)(G.default, {
      image: e.splash,
      makeURL: t => null != t ? K.default.getGuildSplashURL({
        id: e.id,
        splash: t
      }) : null,
      disabled: !l,
      onChange: this.handleSplashChange,
      hint: el.default.Messages.CHANGE_SPLASH,
      enabled: l,
      maxFileSizeBytes: ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onFileSizeError: () => (0, j.default)(ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    });
    return (0, a.jsx)("div", {
      ref: this._inviteSectionRef,
      children: (0, a.jsx)(I.FormSection, {
        className: en.divider,
        children: (0, a.jsxs)(w.default, {
          basis: "50%",
          direction: w.default.Direction.HORIZONTAL,
          align: w.default.Justify.START,
          children: [(0, a.jsxs)(w.default.Child, {
            wrap: !0,
            basis: "50%",
            children: [(0, a.jsxs)(I.FormTitle, {
              className: en.flexFormTitle,
              children: [(0, a.jsx)("div", {
                children: el.default.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND
              }), (0, a.jsx)(O.default, {
                guild: e,
                guildFeature: ee.GuildFeatures.INVITE_SPLASH,
                className: en.guildFeatureAvailabilityIndicator,
                onClick: this.handleInviteSplashUpsellIndicator
              })]
            }), (0, a.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              className: en.marginBottom8,
              children: el.default.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
            }), (0, a.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              children: el.default.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({
                articleURL: Q.default.getArticleURL(ee.HelpdeskArticles.GUILD_INVITE_SPLASH)
              })
            }), s ? (0, a.jsxs)(I.Button, {
              disabled: !l,
              color: I.ButtonColors.BRAND,
              className: en.marginTop16,
              children: [el.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(U.default, {
                disabled: !l,
                onChange: this.handleSplashChange,
                maxFileSizeBytes: ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                onFileSizeError: () => (0, j.default)(ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
              })]
            }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)]
          }), (0, a.jsx)(w.default.Child, {
            wrap: !0,
            basis: "50%",
            children: s ? n : (0, a.jsx)(I.Clickable, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: en.upsell,
              onClick: this.handleInviteSplashUpsellUpload,
              children: n
            })
          })]
        })
      })
    })
  }
  renderBanner() {
    let {
      guild: e,
      canManageGuild: t,
      analyticsLocations: s
    } = this.props, l = e.hasFeature(ee.GuildFeatures.BANNER), n = e.hasFeature(ee.GuildFeatures.ANIMATED_BANNER), i = l && t, r = (0, a.jsx)(G.default, {
      image: e.banner,
      makeURL: t => null != t ? K.default.getGuildBannerURL({
        id: e.id,
        banner: t
      }, n) : null,
      disabled: !i,
      onChange: this.handleBannerChange,
      hint: el.default.Messages.CHANGE_SPLASH,
      onOpenImageSelectModal: () => eC(es.UploadTypes.GUILD_BANNER, ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: ee.AnalyticsPages.GUILD_SETTINGS,
        section: ee.AnalyticsSections.GUILD_BANNER
      }, s),
      enabled: i
    }), o = (0, a.jsx)(I.Button, {
      disabled: !i,
      color: I.Button.Colors.BRAND,
      className: en.marginTop16,
      onClick: () => eC(es.UploadTypes.GUILD_BANNER, ea.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: ee.AnalyticsPages.GUILD_SETTINGS,
        section: ee.AnalyticsSections.GUILD_BANNER
      }, s),
      children: el.default.Messages.UPLOAD_BACKGROUND
    });
    return (0, a.jsx)(I.FormSection, {
      className: en.divider,
      children: (0, a.jsxs)(w.default, {
        basis: "50%",
        direction: w.default.Direction.HORIZONTAL,
        align: w.default.Justify.START,
        children: [(0, a.jsxs)(w.default.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, a.jsxs)(I.FormTitle, {
            className: en.flexFormTitle,
            children: [(0, a.jsx)("div", {
              children: el.default.Messages.FORM_LABEL_SERVER_BANNER
            }), (0, a.jsx)(O.default, {
              guild: e,
              guildFeature: ee.GuildFeatures.BANNER,
              className: en.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: en.marginBottom8,
            children: el.default.Messages.FORM_HELP_SERVER_BANNER
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            children: el.default.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({
              articleURL: Q.default.getArticleURL(ee.HelpdeskArticles.GUILD_BANNER_SPLASH)
            })
          }), l ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, a.jsx)(w.default.Child, {
          wrap: !0,
          basis: "50%",
          children: l ? r : (0, a.jsx)(I.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: en.upsell,
            onClick: this.handleBannerUpsellUpload,
            children: r
          })
        })]
      })
    })
  }
  renderProgressBar() {
    let {
      guild: e,
      canManageGuild: t,
      theme: s
    } = this.props;
    return (0, a.jsx)(I.FormSection, {
      children: (0, a.jsxs)(w.default, {
        align: w.default.Align.START,
        children: [(0, a.jsxs)(w.default, {
          basis: "50%",
          direction: w.default.Direction.VERTICAL,
          align: w.default.Align.STRETCH,
          children: [(0, a.jsx)(I.FormSwitch, {
            className: i()(en.marginTop8, en.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !t,
            children: el.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: en.marginBottom8,
            children: el.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
          })]
        }), (0, a.jsx)(w.default.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, a.jsx)("img", {
            alt: el.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
            src: (0, _.isThemeLight)(s) ? er : ei,
            className: en.progressBarImage
          })
        })]
      })
    })
  }
  renderDisplaySection() {
    return (0, a.jsx)("div", {
      ref: this._displaySectionRef,
      children: (0, a.jsxs)(I.FormSection, {
        title: el.default.Messages.DISPLAY,
        tag: I.FormTitleTags.H1,
        className: en.divider,
        children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
      })
    })
  }
  render() {
    return (0, a.jsxs)(I.FormSection, {
      title: el.default.Messages.SERVER_OVERVIEW,
      tag: I.FormTitleTags.H1,
      children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderNotificationSection(), this.renderDisplaySection()]
    })
  }
  constructor(...e) {
    super(...e), eo(this, "_imageInputRef", l.createRef()), eo(this, "_displaySectionRef", l.createRef()), eo(this, "_inviteSectionRef", l.createRef()), eo(this, "_notificationSectionRef", l.createRef()), eo(this, "handleIconChange", e => {
      J.default.updateGuild({
        icon: e
      })
    }), eo(this, "handleOpenImageCroppingModal", (e, t) => {
      (0, I.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([s.e("99387"), s.e("75409")]).then(s.bind(s, "850085"));
        return s => (0, a.jsx)(l, {
          onCrop: this.handleIconChange,
          imgURI: e,
          file: t,
          ...s
        })
      })
    }), eo(this, "handleUploadImage", e => {
      var t;
      e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue())
    }), eo(this, "handleShowJoinsChange", e => this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS, !e)), eo(this, "handleShowSubscriptionsChange", e => this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)), eo(this, "handleShowGuildRemindersChange", e => {
      this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e)
    }), eo(this, "handleShowJoinRepliesChange", e => this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)), eo(this, "handleShowGuildRoleSubscriptionPurchaseMessages", e => {
      this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e)
    }), eo(this, "handleShowDeadchatPromptMessageChange", e => {
      this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e)
    }), eo(this, "handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange", e => {
      this.handleSystemChannelFlagsChange(ee.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e)
    }), eo(this, "handleHomeHeaderChange", (e, t) => {
      if (null == e || void 0 === t) {
        J.default.updateGuild({
          homeHeader: null
        });
        return
      }(0, I.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([s.e("99387"), s.e("75409")]).then(s.bind(s, "850085"));
        return s => (0, a.jsx)(l, {
          imgURI: e,
          file: t,
          onCrop: e => J.default.updateGuild({
            homeHeader: e
          }),
          uploadType: es.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }), eo(this, "handleBannerChange", (e, t) => {
      let {
        guild: s,
        analyticsLocations: a
      } = this.props, l = null == t ? void 0 : t.type, n = {
        page: ee.AnalyticsPages.GUILD_SETTINGS,
        section: ee.AnalyticsSections.ANIMATED_GUILD_BANNER_UPSELL,
        object: "temp"
      };
      if (null != l && null != e) {
        if ("image/gif" !== l || s.hasFeature(ee.GuildFeatures.ANIMATED_BANNER)) {
          if (!s.hasFeature(ee.GuildFeatures.BANNER)) {
            n.object = ee.AnalyticsObjects.IMAGE_CROPPING_MODAL, (0, A.openGuildBannerUpsellModal)({
              guild: s,
              analyticsLocations: a,
              analyticsLocation: n,
              banner: e,
              isGIF: !1
            });
            return
          }
        } else {
          n.object = ee.AnalyticsObjects.GIF_CROPPING_MODAL, (0, A.openGuildBannerUpsellModal)({
            guild: s,
            analyticsLocations: a,
            analyticsLocation: n,
            banner: e,
            isGIF: !0
          });
          return
        }
      }
      J.default.updateGuild({
        banner: e
      })
    }), eo(this, "handleShowModalUpsell", (e, t, s, a) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: l,
        analyticsLocations: n
      } = this.props;
      (0, N.trackWithMetadata)(ee.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: t,
          object: ee.AnalyticsObjects.LEARN_MORE
        },
        guild_id: null == l ? void 0 : l.id,
        location_stack: n
      }), (0, p.default)({
        analyticsLocations: n,
        analyticsSourceLocation: {
          section: t,
          object: s,
          page: ee.AnalyticsPages.GUILD_SETTINGS
        },
        guild: l,
        perks: a
      })
    }), eo(this, "handleInviteSplashUpsellIndicator", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_INVITE_BACKGROUND, ee.AnalyticsObjects.BADGE, (0, et.guildInviteUpsellPerks)())
    }), eo(this, "handleInviteSplashUpsellButton", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_INVITE_BACKGROUND, ee.AnalyticsObjects.BUTTON_CTA, (0, et.guildInviteUpsellPerks)())
    }), eo(this, "handleInviteSplashUpsellUpload", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_INVITE_BACKGROUND, ee.AnalyticsObjects.UPLOAD_IMAGE, (0, et.guildInviteUpsellPerks)())
    }), eo(this, "handleBannerUpsellIndicator", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_BANNER, ee.AnalyticsObjects.BADGE, (0, et.guildBannerUpsellPerks)())
    }), eo(this, "handleBannerUpsellButton", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_BANNER, ee.AnalyticsObjects.BUTTON_CTA, (0, et.guildBannerUpsellPerks)())
    }), eo(this, "handleBannerUpsellUpload", e => {
      this.handleShowModalUpsell(e, ee.AnalyticsSections.GUILD_BANNER, ee.AnalyticsObjects.UPLOAD_IMAGE, (0, et.guildBannerUpsellPerks)())
    }), eo(this, "handleConversationSummariesToggle", e => {
      let {
        guild: t
      } = this.props, s = new Set(t.features);
      e ? s.add(ee.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : s.delete(ee.GuildFeatures.SUMMARIES_ENABLED_BY_USER), J.default.updateGuild({
        features: s
      })
    }), eo(this, "uploadBGUpsellButton", e => (0, a.jsxs)(V.default, {
      color: I.Button.Colors.GREEN,
      className: i()(en.marginTop16),
      innerClassName: en.upsellButton,
      onClick: e,
      children: [(0, a.jsx)(W.default, {
        height: 16,
        width: 16,
        className: en.premiumUpsellBadge
      }), " ", el.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    }))
  }
}

function eh() {
  var e;
  let {
    guild: t,
    errors: s,
    submitting: n,
    subsection: i
  } = (0, c.useStateFromStoresObject)([q.default], () => q.default.getProps()), r = (0, f.default)(), {
    analyticsLocations: d
  } = (0, g.default)(m.default.OVERVIEW);
  l.useEffect(() => {
    (0, v.hideHotspot)(D.HotspotLocations.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL)
  }, []);
  let u = (0, c.useStateFromStores)([y.default], () => y.default.getCategories(null == t ? void 0 : t.id)),
    E = l.useMemo(() => (0, h.default)(u._categories, u), [u]),
    {
      canManageGuild: _,
      isGuildAdmin: I
    } = (0, c.useStateFromStoresObject)([F.default], () => ({
      canManageGuild: F.default.can(ee.Permissions.MANAGE_GUILD, t),
      isGuildAdmin: F.default.can(ee.Permissions.ADMINISTRATOR, t)
    })),
    T = (0, c.useStateFromStores)([B.default], () => B.default.getMemberCount(null == t ? void 0 : t.id)),
    S = (0, c.useStateFromStores)([k.default], () => k.default.getCurrentUser());
  o()(null != S, "GuildSettingsOverview: currentUser cannot be undefined");
  let {
    enableDeadchat: N
  } = x.SimpleDeadchatPromptExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : ee.EMPTY_STRING_SNOWFLAKE_ID,
    location: "guild_settings"
  }, {
    disable: null == t,
    autoTrackExposure: !0
  });
  return null == t ? null : (0, a.jsx)(g.AnalyticsLocationProvider, {
    value: d,
    children: (0, a.jsx)(eg, {
      channels: E,
      canManageGuild: _,
      isGuildAdmin: I,
      subsection: i,
      guild: t,
      errors: s,
      submitting: n,
      currentUser: S,
      guildMemberCount: T,
      theme: r,
      analyticsLocations: d,
      eligibleForDeadchatPrompt: N
    })
  })
}

function eC(e, t, l) {
  let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
    i = arguments.length > 4 ? arguments[4] : void 0,
    r = arguments.length > 5 ? arguments[5] : void 0;
  (0, I.openModalLazy)(async () => {
    let {
      default: o
    } = await Promise.all([s.e("99387"), s.e("82634")]).then(s.bind(s, "28130"));
    return s => (0, a.jsx)(o, {
      maxFileSizeBytes: t,
      onComplete: l,
      uploadType: e,
      showUpsellHeader: n,
      analyticsLocation: i,
      analyticsLocations: r,
      ...s
    })
  })
}