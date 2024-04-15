"use strict";
s.r(t), s.d(t, {
  GuildSettingsOverviewNotice: function() {
    return eC
  },
  default: function() {
    return ex
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
  L = s("963202"),
  O = s("688465"),
  A = s("807582"),
  p = s("48217"),
  M = s("26323"),
  D = s("859802"),
  v = s("744178"),
  j = s("35125"),
  G = s("536442"),
  U = s("142497"),
  P = s("884858"),
  b = s("516129"),
  B = s("813197"),
  y = s("208567"),
  F = s("592125"),
  H = s("324067"),
  k = s("650774"),
  w = s("496675"),
  V = s("699516"),
  Y = s("594174"),
  W = s("285952"),
  z = s("976644"),
  K = s("353872"),
  Z = s("709586"),
  X = s("26290"),
  Q = s("768581"),
  J = s("630388"),
  q = s("823379"),
  $ = s("63063"),
  ee = s("434404"),
  et = s("999382"),
  es = s("203377"),
  ea = s("981631"),
  el = s("30513"),
  en = s("486324"),
  ei = s("200299"),
  er = s("689938"),
  eo = s("342056"),
  ed = s("935653"),
  eu = s("449874");

function ec(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let eE = "NO_AFK_CHANNEL",
  e_ = "NO_SYSTEM_CHANNEL",
  eI = "".concat(60),
  eT = "".concat(300),
  eS = "".concat(900),
  ef = "".concat(1800),
  em = "".concat(3600);

function eN(e) {
  return eg(e[0])
}

function eg(e) {
  if (null == e) return;
  let {
    label: t,
    channel: s,
    category: l
  } = e, n = (0, R.getChannelIconComponent)(s), i = null != l ? (0, C.computeChannelName)(l, Y.default, V.default) : null;
  return (0, a.jsx)(K.default, {
    title: t,
    icon: n,
    subtitle: i
  })
}

function eh(e) {
  return {
    value: e.id,
    label: (0, C.computeChannelName)(e, Y.default, V.default),
    channel: e,
    category: F.default.getChannel(e.parent_id)
  }
}
let eC = () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: s,
    errors: n
  } = (0, c.useStateFromStoresObject)([et.default], () => et.default.getProps()), i = l.useMemo(() => (0, es.getSettingsErrorMessage)(n), [n]), r = l.useCallback(() => {
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
    !(0, q.areSetsEqual)(new Set(e.features), new Set(t.features)) && (s.features = e.features), ee.default.saveGuild(e.id, s)
  }, [e, t]), o = l.useCallback(() => {
    null != e && ee.default.init(e.id)
  }, [e]);
  return (0, a.jsx)(T.default, {
    submitting: s,
    errorMessage: i,
    onSave: r,
    onReset: o
  })
};
class eR extends l.PureComponent {
  componentDidMount() {
    if (this.props.subsection === ea.GuildSettingsSubsections.DISPLAY && null != this._displaySectionRef.current) {
      let e = this._displaySectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === ea.GuildSettingsSubsections.INVITE && null != this._inviteSectionRef.current) {
      let e = this._inviteSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === ea.GuildSettingsSubsections.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
      let e = this._notificationSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    }
  }
  handleNameChange(e) {
    ee.default.updateGuild({
      name: e
    })
  }
  handleClanTagChange(e) {
    ee.default.updateGuild({
      clan: {
        tag: e
      }
    })
  }
  handleAFKChannelChange(e) {
    e === eE && (e = null), ee.default.updateGuild({
      afkChannelId: e
    })
  }
  handleAFKTimeoutChange(e) {
    ee.default.updateGuild({
      afkTimeout: parseInt(e, 10)
    })
  }
  handleSystemChannelChange(e) {
    e === e_ && (e = null), ee.default.updateGuild({
      systemChannelId: e
    })
  }
  handleDefaultMessageNotificationsChange(e) {
    let {
      value: t
    } = e;
    ee.default.updateGuild({
      defaultMessageNotifications: t
    })
  }
  handleSplashChange(e) {
    ee.default.updateGuild({
      splash: e
    })
  }
  handleSystemChannelFlagsChange(e, t) {
    let {
      guild: s
    } = this.props, a = (0, J.setFlag)(s.systemChannelFlags, e, t);
    ee.default.updateGuild({
      systemChannelFlags: a
    })
  }
  handlePremiumProgressBarEnabledChange(e) {
    ee.default.updateGuild({
      premiumProgressBarEnabled: e
    })
  }
  handleChangeDescription(e) {
    ee.default.updateGuild({
      description: e
    })
  }
  renderBaseSettings() {
    var e, t;
    let {
      guild: s,
      errors: l,
      canManageGuild: n
    } = this.props;
    return (0, a.jsxs)(W.default, {
      className: i()(eo.__invalid_baseSection),
      children: [(0, a.jsxs)(W.default, {
        basis: "50%",
        justify: W.default.Justify.BETWEEN,
        children: [(0, a.jsxs)(W.default.Child, {
          wrap: !0,
          children: [(0, a.jsx)(y.default, {
            showIcon: !0,
            name: s.name,
            image: s.icon,
            onChange: this.handleIconChange,
            disabled: !n,
            hint: er.default.Messages.CHANGE_ICON,
            makeURL: e => Q.default.getGuildIconURL({
              id: s.id,
              icon: e,
              canAnimate: !0,
              size: 100
            }),
            className: i()({
              [eo.avatarUploader]: n,
              [eo.avatarUploaderDisabled]: !n
            }),
            imageClassName: i()(eo.avatarUploaderInner, {
              [eo.avatarUploaderInnerEmpty]: null == s.icon
            })
          }), null != l.icon ? (0, a.jsx)("div", {
            className: eo.iconError,
            children: l.icon
          }) : null]
        }), (0, a.jsxs)(W.default, {
          direction: W.default.Direction.VERTICAL,
          align: W.default.Align.START,
          style: {
            maxWidth: 180
          },
          children: [(0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: er.default.Messages.GUILD_SETTINGS_ICON_RECOMMEND
          }), (0, a.jsxs)(I.Button, {
            look: I.ButtonLooks.OUTLINED,
            color: I.ButtonColors.PRIMARY,
            disabled: !n,
            className: eo.marginTop8,
            onClick: this.handleUploadImage,
            children: [er.default.Messages.UPLOAD_IMAGE, (0, a.jsx)(B.default, {
              ref: this._imageInputRef,
              onChange: this.handleOpenImageCroppingModal,
              disabled: !n
            })]
          })]
        })]
      }), (0, a.jsxs)(W.default.Child, {
        basis: "50%",
        children: [(0, a.jsx)(I.FormItem, {
          title: er.default.Messages.FORM_LABEL_SERVER_NAME,
          className: eo.marginBottom20,
          children: (0, a.jsx)(I.TextInput, {
            type: "text",
            disabled: !n,
            value: s.name,
            maxLength: 100,
            onChange: this.handleNameChange,
            error: l.name
          })
        }), L.ClanExperiment.getCurrentConfig({
          location: "settings"
        }).enableClanCreation && (0, a.jsx)(I.FormItem, {
          title: er.default.Messages.CLAN_OVERVIEW_LABEL_CLAN_TAG,
          children: (0, a.jsx)(I.TextInput, {
            type: "text",
            disabled: !n,
            value: null !== (t = null === (e = s.clan) || void 0 === e ? void 0 : e.tag) && void 0 !== t ? t : "",
            maxLength: 100,
            onChange: this.handleClanTagChange,
            error: l.tag
          })
        })]
      })]
    })
  }
  renderAFKSection() {
    var e;
    let {
      guild: t,
      canManageGuild: s,
      channels: l
    } = this.props, n = null != t.afkTimeout ? "".concat(t.afkTimeout) : null, i = null !== (e = t.afkChannelId) && void 0 !== e ? e : eE, r = [{
      value: eI,
      label: er.default.Messages.DURATION_MINUTES.format({
        minutes: 1
      })
    }, {
      value: eT,
      label: er.default.Messages.DURATION_MINUTES.format({
        minutes: 5
      })
    }, {
      value: eS,
      label: er.default.Messages.DURATION_MINUTES.format({
        minutes: 15
      })
    }, {
      value: ef,
      label: er.default.Messages.DURATION_MINUTES.format({
        minutes: 30
      })
    }, {
      value: em,
      label: er.default.Messages.DURATION_HOURS.format({
        hours: 1
      })
    }], o = u()(l).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === ea.ChannelTypes.GUILD_VOICE
    }).map(e => {
      let {
        channel: t
      } = e;
      return eh(t)
    }).value();
    return o.unshift({
      value: eE,
      label: er.default.Messages.NO_AFK_CHANNEL
    }), (0, a.jsxs)(I.FormSection, {
      className: eo.divider,
      children: [(0, a.jsxs)(W.default, {
        children: [(0, a.jsx)(W.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(I.FormItem, {
            title: er.default.Messages.FORM_LABEL_AFK_CHANNEL,
            children: (0, a.jsx)(I.SingleSelect, {
              value: i,
              options: o,
              onChange: this.handleAFKChannelChange,
              isDisabled: !s,
              renderOptionLabel: eg,
              renderOptionValue: eN
            })
          })
        }), (0, a.jsx)(W.default.Child, {
          basis: "50%",
          children: (0, a.jsx)(I.FormItem, {
            title: er.default.Messages.FORM_LABEL_AFK_TIMEOUT,
            children: (0, a.jsx)(I.SingleSelect, {
              value: n,
              options: r,
              isDisabled: i === eE || !s,
              onChange: this.handleAFKTimeoutChange
            })
          })
        })]
      }), (0, a.jsx)(I.FormText, {
        className: eo.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: er.default.Messages.FORM_HELP_AFK_CHANNEL
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
    } = this.props, r = null !== (e = t.systemChannelId) && void 0 !== e ? e : e_, o = u()(s).filter(e => {
      let {
        channel: t
      } = e;
      return t.type === ea.ChannelTypes.GUILD_TEXT
    }).map(e => {
      let {
        channel: t
      } = e;
      return eh(t)
    }).value();
    o.unshift({
      value: e_,
      label: er.default.Messages.NO_SYSTEM_CHANNEL
    });
    let d = (0, j.isEligibleForRoleSubscriptionPurchaseSystemMessageSettings)(t),
      c = d || (0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
      E = d || (0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES);
    return (0, a.jsxs)(I.FormSection, {
      className: eo.divider,
      children: [(0, a.jsx)(I.FormTitle, {
        children: er.default.Messages.FORM_LABEL_SYSTEM_CHANNEL
      }), (0, a.jsx)(I.SingleSelect, {
        value: r,
        options: o,
        isDisabled: !l,
        onChange: this.handleSystemChannelChange,
        renderOptionLabel: eg,
        renderOptionValue: eN
      }), (0, a.jsx)(I.FormText, {
        className: eo.marginTop8,
        type: I.FormTextTypes.DESCRIPTION,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL
      }), (0, a.jsx)(I.FormSwitch, {
        className: eo.marginTop20,
        onChange: this.handleShowJoinsChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowJoinRepliesChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_JOIN_MESSAGE_REPLIES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowSubscriptionsChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTION_MESSAGES
      }), (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowGuildRemindersChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_GUILD_REMINDERS
      }), c && (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessages,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGES
      }), E && (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_ROLE_SUBSCRIPTION_PURCHASE_MESSAGE_REPLIES
      }), n && (0, a.jsx)(I.FormSwitch, {
        className: i()(eo.__invalid_marginReset, eo.marginTop20),
        onChange: this.handleShowDeadchatPromptMessageChange,
        value: !(0, J.hasFlag)(t.systemChannelFlags, ea.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT),
        hideBorder: !0,
        disabled: !l || r === e_,
        children: (0, a.jsxs)("div", {
          className: eo.flexRow,
          children: [er.default.Messages.FORM_HELP_SYSTEM_CHANNEL_DEADCHAT_PROMPT_MESSAGE, (0, a.jsx)(O.default, {})]
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
      name: er.default.Messages.FORM_LABEL_ALL_MESSAGES,
      value: ea.UserNotificationSettings.ALL_MESSAGES,
      desc: null != s && s >= ea.MAX_MEMBERS_NOTIFY_ALL_MESSAGES ? er.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATIONS_LARGE_GUILD_NOTIFY_ALL : null
    }, {
      name: er.default.Messages.FORM_LABEL_ONLY_MENTIONS.format(),
      value: ea.UserNotificationSettings.ONLY_MENTIONS
    }];
    return (0, a.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, a.jsxs)(I.FormSection, {
        className: eo.divider,
        children: [(0, a.jsx)(I.FormTitle, {
          children: er.default.Messages.FORM_LABEL_DEFAULT_NOTIFICATION_SETTINGS
        }), (0, a.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: eo.marginBottom20,
          children: er.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_INTRO
        }), (0, a.jsx)(I.FormText, {
          type: I.FormTextTypes.DESCRIPTION,
          className: eo.marginBottom20,
          children: er.default.Messages.GUILD_SETTINGS_DEFAULT_NOTIFICATION_SETTINGS_TIP
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
        className: eo.divider,
        children: (0, a.jsx)(I.FormSwitch, {
          className: i()(eo.marginTop8, eo.marginBottom8),
          onChange: this.handleConversationSummariesToggle,
          value: e.hasFeature(ea.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
          hideBorder: !0,
          note: er.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE_DESCRIPTION.format({
            helpdeskArticle: $.default.getArticleURL(ea.HelpdeskArticles.CONVERSATION_SUMMARIES)
          }),
          disabled: !t,
          children: (0, a.jsxs)("div", {
            className: eo.badgedItem,
            children: [er.default.Messages.GUILD_SETTINGS_SUMMARIES_TOGGLE, (0, a.jsx)(X.TextBadge, {
              text: er.default.Messages.BETA,
              color: E.default.unsafe_rawColors.BRAND_500.css,
              className: eo.__invalid_betaTag
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
    } = this.props, s = e.hasFeature(ea.GuildFeatures.INVITE_SPLASH), l = t && s, n = (0, a.jsx)(b.default, {
      image: e.splash,
      makeURL: t => null != t ? Q.default.getGuildSplashURL({
        id: e.id,
        splash: t
      }) : null,
      disabled: !l,
      onChange: this.handleSplashChange,
      hint: er.default.Messages.CHANGE_SPLASH,
      enabled: l,
      maxFileSizeBytes: ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onFileSizeError: () => (0, P.default)(ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    });
    return (0, a.jsx)("div", {
      ref: this._inviteSectionRef,
      children: (0, a.jsx)(I.FormSection, {
        className: eo.divider,
        children: (0, a.jsxs)(W.default, {
          basis: "50%",
          direction: W.default.Direction.HORIZONTAL,
          align: W.default.Justify.START,
          children: [(0, a.jsxs)(W.default.Child, {
            wrap: !0,
            basis: "50%",
            children: [(0, a.jsxs)(I.FormTitle, {
              className: eo.flexFormTitle,
              children: [(0, a.jsx)("div", {
                children: er.default.Messages.GUILD_SETTINGS_SERVER_INVITE_BACKGROUND
              }), (0, a.jsx)(A.default, {
                guild: e,
                guildFeature: ea.GuildFeatures.INVITE_SPLASH,
                className: eo.guildFeatureAvailabilityIndicator,
                onClick: this.handleInviteSplashUpsellIndicator
              })]
            }), (0, a.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              className: eo.marginBottom8,
              children: er.default.Messages.GUILD_SETTINGS_SPLASH_DESCRIPTION
            }), (0, a.jsx)(I.FormText, {
              type: I.FormTextTypes.DESCRIPTION,
              children: er.default.Messages.GUILD_SETTINGS_SPLASH_RECOMMEND.format({
                articleURL: $.default.getArticleURL(ea.HelpdeskArticles.GUILD_INVITE_SPLASH)
              })
            }), s ? (0, a.jsxs)(I.Button, {
              disabled: !l,
              color: I.ButtonColors.BRAND_NEW,
              className: eo.marginTop16,
              children: [er.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(B.default, {
                disabled: !l,
                onChange: this.handleSplashChange,
                maxFileSizeBytes: ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
                onFileSizeError: () => (0, P.default)(ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
              })]
            }) : this.uploadBGUpsellButton(this.handleInviteSplashUpsellButton)]
          }), (0, a.jsx)(W.default.Child, {
            wrap: !0,
            basis: "50%",
            children: s ? n : (0, a.jsx)(I.Clickable, {
              "aria-hidden": !0,
              tabIndex: -1,
              className: eo.upsell,
              onClick: this.handleInviteSplashUpsellUpload,
              children: n
            })
          })]
        })
      })
    })
  }
  renderHomeHeaderSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props, s = e.hasFeature(ea.GuildFeatures.BANNER), l = (0, D.canSeeGuildHome)(e.id), n = t && l && s, {
      hasNewHeader: i
    } = v.GuildHomeHeaderRedesignExperiment.getCurrentConfig({
      guildId: e.id,
      location: "4b6c0f_1"
    });
    if (!l || !i) return null;
    let r = (0, a.jsx)(b.default, {
      image: e.homeHeader,
      makeURL: t => null != t ? Q.default.getGuildHomeHeaderURL({
        id: e.id,
        homeHeader: t
      }) : null,
      disabled: !n,
      onChange: this.handleHomeHeaderChange,
      hint: er.default.Messages.CHANGE_HOME_HEADER,
      enabled: n,
      maxFileSizeBytes: ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
      onFileSizeError: () => (0, P.default)(ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
    });
    return (0, a.jsx)(I.FormSection, {
      className: eo.divider,
      children: (0, a.jsxs)(W.default, {
        basis: "50%",
        direction: W.default.Direction.HORIZONTAL,
        align: W.default.Justify.START,
        children: [(0, a.jsxs)(W.default.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, a.jsxs)(I.FormTitle, {
            className: eo.flexFormTitle,
            children: [(0, a.jsx)("div", {
              children: er.default.Messages.GUILD_SETTINGS_HOME_HEADER
            }), (0, a.jsx)(A.default, {
              guild: e,
              guildFeature: ea.GuildFeatures.BANNER,
              className: eo.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: er.default.Messages.GUILD_SETTINGS_HOME_HEADER_DESCRIPTION
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            children: er.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
          }), s ? (0, a.jsxs)(I.Button, {
            disabled: !n,
            color: I.ButtonColors.BRAND_NEW,
            className: eo.marginTop16,
            children: [er.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(B.default, {
              disabled: !n,
              onChange: this.handleHomeHeaderChange,
              maxFileSizeBytes: ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES,
              onFileSizeError: () => (0, P.default)(ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES)
            })]
          }) : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, a.jsx)(W.default.Child, {
          wrap: !0,
          basis: "50%",
          children: s ? r : (0, a.jsx)(I.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: eo.upsell,
            onClick: this.handleBannerUpsellUpload,
            children: r
          })
        })]
      })
    })
  }
  renderBanner() {
    let {
      guild: e,
      canManageGuild: t,
      analyticsLocations: s
    } = this.props, l = e.hasFeature(ea.GuildFeatures.BANNER), n = e.hasFeature(ea.GuildFeatures.ANIMATED_BANNER), i = l && t, r = (0, a.jsx)(b.default, {
      image: e.banner,
      makeURL: t => null != t ? Q.default.getGuildBannerURL({
        id: e.id,
        banner: t
      }, n) : null,
      disabled: !i,
      onChange: this.handleBannerChange,
      hint: er.default.Messages.CHANGE_SPLASH,
      onOpenImageSelectModal: () => eL(en.UploadTypes.GUILD_BANNER, ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: ea.AnalyticsPages.GUILD_SETTINGS,
        section: ea.AnalyticsSections.GUILD_BANNER
      }, s),
      enabled: i
    }), o = (0, a.jsx)(I.Button, {
      disabled: !i,
      color: I.Button.Colors.BRAND_NEW,
      className: eo.marginTop16,
      onClick: () => eL(en.UploadTypes.GUILD_BANNER, ei.MAX_IMAGE_UPLOAD_FILESIZE_BYTES, this.handleBannerChange, !0, {
        page: ea.AnalyticsPages.GUILD_SETTINGS,
        section: ea.AnalyticsSections.GUILD_BANNER
      }, s),
      children: er.default.Messages.UPLOAD_BACKGROUND
    });
    return (0, a.jsx)(I.FormSection, {
      className: eo.divider,
      children: (0, a.jsxs)(W.default, {
        basis: "50%",
        direction: W.default.Direction.HORIZONTAL,
        align: W.default.Justify.START,
        children: [(0, a.jsxs)(W.default.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, a.jsxs)(I.FormTitle, {
            className: eo.flexFormTitle,
            children: [(0, a.jsx)("div", {
              children: er.default.Messages.FORM_LABEL_SERVER_BANNER
            }), (0, a.jsx)(A.default, {
              guild: e,
              guildFeature: ea.GuildFeatures.BANNER,
              className: eo.guildFeatureAvailabilityIndicator,
              onClick: this.handleBannerUpsellIndicator
            })]
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: er.default.Messages.FORM_HELP_SERVER_BANNER
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            children: er.default.Messages.GUILD_SETTINGS_BANNER_RECOMMEND.format({
              articleURL: $.default.getArticleURL(ea.HelpdeskArticles.GUILD_BANNER_SPLASH)
            })
          }), l ? o : this.uploadBGUpsellButton(this.handleBannerUpsellButton)]
        }), (0, a.jsx)(W.default.Child, {
          wrap: !0,
          basis: "50%",
          children: l ? r : (0, a.jsx)(I.Clickable, {
            "aria-hidden": !0,
            tabIndex: -1,
            className: eo.upsell,
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
      children: (0, a.jsxs)(W.default, {
        align: W.default.Align.START,
        children: [(0, a.jsxs)(W.default, {
          basis: "50%",
          direction: W.default.Direction.VERTICAL,
          align: W.default.Align.STRETCH,
          children: [(0, a.jsx)(I.FormSwitch, {
            className: i()(eo.marginTop8, eo.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !t,
            children: er.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_TITLE
          }), (0, a.jsx)(I.FormText, {
            type: I.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: er.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_DESCRIPTION
          })]
        }), (0, a.jsx)(W.default.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, a.jsx)("img", {
            alt: er.default.Messages.GUILD_SETTINGS_PREMIUM_PROGRESS_BAR_IMG_ALT,
            src: (0, _.isThemeLight)(s) ? eu : ed,
            className: eo.progressBarImage
          })
        })]
      })
    })
  }
  renderDisplaySection() {
    return (0, a.jsx)("div", {
      ref: this._displaySectionRef,
      children: (0, a.jsxs)(I.FormSection, {
        title: er.default.Messages.DISPLAY,
        tag: I.FormTitleTags.H1,
        className: eo.divider,
        children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection(), this.renderHomeHeaderSection()]
      })
    })
  }
  render() {
    return (0, a.jsxs)(I.FormSection, {
      title: er.default.Messages.SERVER_OVERVIEW,
      tag: I.FormTitleTags.H1,
      children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderNotificationSection(), this.renderDisplaySection()]
    })
  }
  constructor(...e) {
    super(...e), ec(this, "_imageInputRef", l.createRef()), ec(this, "_displaySectionRef", l.createRef()), ec(this, "_inviteSectionRef", l.createRef()), ec(this, "_notificationSectionRef", l.createRef()), ec(this, "handleIconChange", e => {
      ee.default.updateGuild({
        icon: e
      })
    }), ec(this, "handleOpenImageCroppingModal", (e, t) => {
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
    }), ec(this, "handleUploadImage", e => {
      var t;
      e.target === e.currentTarget && (null === (t = this._imageInputRef.current) || void 0 === t || t.activateUploadDialogue())
    }), ec(this, "handleShowJoinsChange", e => this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS, !e)), ec(this, "handleShowSubscriptionsChange", e => this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS, !e)), ec(this, "handleShowGuildRemindersChange", e => {
      this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS, !e)
    }), ec(this, "handleShowJoinRepliesChange", e => this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES, !e)), ec(this, "handleShowGuildRoleSubscriptionPurchaseMessages", e => {
      this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS, !e)
    }), ec(this, "handleShowDeadchatPromptMessageChange", e => {
      this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_CHANNEL_PROMPT_DEADCHAT, !e)
    }), ec(this, "handleShowGuildRoleSubscriptionPurchaseMessageRepliesChange", e => {
      this.handleSystemChannelFlagsChange(ea.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES, !e)
    }), ec(this, "handleHomeHeaderChange", (e, t) => {
      if (null == e || void 0 === t) {
        ee.default.updateGuild({
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
          onCrop: e => ee.default.updateGuild({
            homeHeader: e
          }),
          uploadType: en.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }), ec(this, "handleBannerChange", (e, t) => {
      let {
        guild: s,
        analyticsLocations: a
      } = this.props, l = null == t ? void 0 : t.type, n = {
        page: ea.AnalyticsPages.GUILD_SETTINGS,
        section: ea.AnalyticsSections.ANIMATED_GUILD_BANNER_UPSELL,
        object: "temp"
      };
      if (null != l && null != e) {
        if ("image/gif" !== l || s.hasFeature(ea.GuildFeatures.ANIMATED_BANNER)) {
          if (!s.hasFeature(ea.GuildFeatures.BANNER)) {
            n.object = ea.AnalyticsObjects.IMAGE_CROPPING_MODAL, (0, p.openGuildBannerUpsellModal)({
              guild: s,
              analyticsLocations: a,
              analyticsLocation: n,
              banner: e,
              isGIF: !1
            });
            return
          }
        } else {
          n.object = ea.AnalyticsObjects.GIF_CROPPING_MODAL, (0, p.openGuildBannerUpsellModal)({
            guild: s,
            analyticsLocations: a,
            analyticsLocation: n,
            banner: e,
            isGIF: !0
          });
          return
        }
      }
      ee.default.updateGuild({
        banner: e
      })
    }), ec(this, "handleShowModalUpsell", (e, t, s, a) => {
      e.preventDefault(), e.stopPropagation();
      let {
        guild: l,
        analyticsLocations: n
      } = this.props;
      (0, N.trackWithMetadata)(ea.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
        location: {
          section: t,
          object: ea.AnalyticsObjects.LEARN_MORE
        },
        guild_id: null == l ? void 0 : l.id,
        location_stack: n
      }), (0, M.default)({
        analyticsLocations: n,
        analyticsSourceLocation: {
          section: t,
          object: s,
          page: ea.AnalyticsPages.GUILD_SETTINGS
        },
        guild: l,
        perks: a
      })
    }), ec(this, "handleInviteSplashUpsellIndicator", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_INVITE_BACKGROUND, ea.AnalyticsObjects.BADGE, (0, el.guildInviteUpsellPerks)())
    }), ec(this, "handleInviteSplashUpsellButton", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_INVITE_BACKGROUND, ea.AnalyticsObjects.BUTTON_CTA, (0, el.guildInviteUpsellPerks)())
    }), ec(this, "handleInviteSplashUpsellUpload", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_INVITE_BACKGROUND, ea.AnalyticsObjects.UPLOAD_IMAGE, (0, el.guildInviteUpsellPerks)())
    }), ec(this, "handleBannerUpsellIndicator", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_BANNER, ea.AnalyticsObjects.BADGE, (0, el.guildBannerUpsellPerks)())
    }), ec(this, "handleBannerUpsellButton", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_BANNER, ea.AnalyticsObjects.BUTTON_CTA, (0, el.guildBannerUpsellPerks)())
    }), ec(this, "handleBannerUpsellUpload", e => {
      this.handleShowModalUpsell(e, ea.AnalyticsSections.GUILD_BANNER, ea.AnalyticsObjects.UPLOAD_IMAGE, (0, el.guildBannerUpsellPerks)())
    }), ec(this, "handleConversationSummariesToggle", e => {
      let {
        guild: t
      } = this.props, s = new Set(t.features);
      e ? s.add(ea.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : s.delete(ea.GuildFeatures.SUMMARIES_ENABLED_BY_USER), ee.default.updateGuild({
        features: s
      })
    }), ec(this, "uploadBGUpsellButton", e => (0, a.jsxs)(z.default, {
      color: I.Button.Colors.GREEN,
      className: i()(eo.marginTop16),
      innerClassName: eo.upsellButton,
      onClick: e,
      children: [(0, a.jsx)(Z.default, {
        height: 16,
        width: 16,
        className: eo.premiumUpsellBadge
      }), " ", er.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA]
    }))
  }
}

function ex() {
  var e;
  let {
    guild: t,
    errors: s,
    submitting: n,
    subsection: i
  } = (0, c.useStateFromStoresObject)([et.default], () => et.default.getProps()), r = (0, f.default)(), {
    analyticsLocations: d
  } = (0, g.default)(m.default.OVERVIEW);
  l.useEffect(() => {
    (0, U.hideHotspot)(G.HotspotLocations.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL)
  }, []);
  let u = (0, c.useStateFromStores)([H.default], () => H.default.getCategories(null == t ? void 0 : t.id)),
    E = l.useMemo(() => (0, h.default)(u._categories, u), [u]),
    {
      canManageGuild: _,
      isGuildAdmin: I
    } = (0, c.useStateFromStoresObject)([w.default], () => ({
      canManageGuild: w.default.can(ea.Permissions.MANAGE_GUILD, t),
      isGuildAdmin: w.default.can(ea.Permissions.ADMINISTRATOR, t)
    })),
    T = (0, c.useStateFromStores)([k.default], () => k.default.getMemberCount(null == t ? void 0 : t.id)),
    S = (0, c.useStateFromStores)([Y.default], () => Y.default.getCurrentUser());
  o()(null != S, "GuildSettingsOverview: currentUser cannot be undefined");
  let {
    enableDeadchat: N
  } = x.SimpleDeadchatPromptExperiment.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : ea.EMPTY_STRING_SNOWFLAKE_ID,
    location: "guild_settings"
  }, {
    disable: null == t,
    autoTrackExposure: !0
  });
  return null == t ? null : (0, a.jsx)(g.AnalyticsLocationProvider, {
    value: d,
    children: (0, a.jsx)(eR, {
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

function eL(e, t, l) {
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