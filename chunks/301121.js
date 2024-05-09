"use strict";
s.r(t), s.d(t, {
  default: function() {
    return el
  }
}), s("47120"), s("733860"), s("773603");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("913527"),
  u = s.n(d),
  c = s("442837"),
  S = s("524437"),
  E = s("481060"),
  T = s("668781"),
  f = s("409700"),
  m = s("809206"),
  _ = s("230711"),
  g = s("651530"),
  h = s("163268"),
  I = s("294602"),
  N = s("592204"),
  p = s("712950"),
  C = s("610697"),
  A = s("880257"),
  O = s("236289"),
  x = s("518560"),
  R = s("237292"),
  M = s("604849"),
  v = s("278828"),
  D = s("480294"),
  L = s("430824"),
  P = s("663389"),
  j = s("594174"),
  b = s("285952"),
  U = s("153124"),
  y = s("626135"),
  B = s("63063"),
  F = s("78451"),
  G = s("709054"),
  k = s("88658"),
  w = s("695346"),
  H = s("3957"),
  V = s("279743"),
  Y = s("973005"),
  W = s("526761"),
  K = s("981631"),
  z = s("800530"),
  Q = s("689938"),
  q = s("79849"),
  Z = s("611273");

function X(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function J() {
  var e;
  let t = null === (e = (0, A.default)()) || void 0 === e || e,
    s = (0, R.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    n = (0, M.useSafetyAlertsSettingOrDefault)(),
    l = (0, H.useScrollToSetting)(W.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    }), (0, a.jsx)(E.FormSection, {
      ref: l,
      children: (0, a.jsxs)(E.FormItem, {
        className: i()(q.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: Z.marginBottom8,
          children: Q.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormSwitch, {
          value: n,
          note: Q.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: B.default.getArticleURL(K.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: v.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: Q.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)(V.default, {
          animationDelay: 1e3,
          scrollPosition: W.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function $(e, t) {
  y.default.track(K.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function ee() {
  let e = (0, C.default)(),
    t = w.DefaultGuildsRestricted.useSetting(),
    s = w.MessageRequestRestrictedDefault.useSetting(),
    n = (0, H.useScrollToSetting)(W.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: q.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormItem, {
        ref: n,
        children: (0, a.jsx)(E.FormSwitch, {
          value: !s,
          note: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: B.default.getArticleURL(K.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void es({
              header: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: Q.default.Messages.NO_TEXT,
              cancelText: Q.default.Messages.YES_TEXT,
              confirmButtonColor: E.Button.Colors.BRAND,
              onConfirm: () => {
                w.MessageRequestRestrictedDefault.updateSetting(e), $(e, !1)
              },
              onCancel: () => {
                w.MessageRequestRestrictedDefault.updateSetting(e), w.MessageRequestRestrictedGuildIds.updateSetting(e ? G.default.keys(L.default.getGuilds()) : []), $(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)(V.default, {
        animationDelay: 700,
        scrollPosition: W.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function et() {
  var e;
  let t = null === (e = (0, A.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: l
    } = (0, I.useExplicitContentSettingOrDefault)(),
    i = (0, H.useScrollToSetting)(W.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: S.ExplicitContentRedaction.SHOW,
      label: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: q.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: Z.marginBottom8,
        children: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom8,
        children: Q.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: B.default.getArticleURL(K.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        ref: i,
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: Q.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: Q.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: l,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: Q.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(V.default, {
        scrollPosition: W.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function es(e) {
  let {
    body: t,
    ...s
  } = e;
  (0, E.openModal)(e => (0, a.jsx)(E.ConfirmModal, {
    ...e,
    ...s,
    children: (0, a.jsx)(E.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function ea(e) {
  let {
    message: t
  } = e;
  es({
    header: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: Q.default.Messages.OKAY,
    body: t
  })
}
class en extends n.PureComponent {
  componentDidMount() {
    (0, f.fetchConsents)(), (0, m.getHarvestStatus)().then(e => {
      let t = {
        requestingHarvest: !1,
        currentHarvestRequest: e.body
      };
      this.setState(t)
    }, () => {
      this.setState({
        requestingHarvest: !1
      })
    })
  }
  componentDidUpdate(e) {
    e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({
      defaultGuildsRestricted: this.props.defaultGuildsRestricted
    })
  }
  showGuildRestrictionModal(e) {
    es({
      header: Q.default.Messages.USER_DM_SETTINGS_TITLE,
      body: Q.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: Q.default.Messages.NO_TEXT,
      cancelText: Q.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        w.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        w.DefaultGuildsRestricted.updateSetting(e), w.RestrictedGuildIds.updateSetting(e ? G.default.keys(L.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    y.default.track(K.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    es({
      header: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: Q.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: Q.default.Messages.NO_TEXT,
      cancelText: Q.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        w.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        w.MessageRequestRestrictedDefault.updateSetting(e), w.MessageRequestRestrictedGuildIds.updateSetting(e ? G.default.keys(L.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    y.default.track(K.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: Q.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: Z.marginBottom8,
          children: Q.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: B.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, F.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? w.DmSpamFilterV2.updateSetting(e).then(() => {
              w.ExplicitContentFilter.updateSetting(s)
            }) : w.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = Y.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        children: [(0, a.jsx)(et, {}), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom4,
          title: Q.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: Q.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: B.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, F.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return w.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(J, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: Z.marginBottom40,
        title: Q.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: Z.marginBottom4,
          title: Q.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: Q.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: B.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, F.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return w.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(J, {})]
    })
  }
  renderKeywordFiltering() {
    if (!this.props.keywordFilteringEnabled) return null;
    let {
      profanity: e,
      slurs: t,
      sexualContent: s
    } = this.props.keywordFilter;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom8,
          children: Q.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: Z.marginBottom8,
          children: Q.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, a.jsx)(E.FormSwitch, {
          value: e,
          note: Q.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
          onChange: e => w.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: Q.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
        }), (0, a.jsx)(E.FormSwitch, {
          value: t,
          note: Q.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
          onChange: t => w.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: Q.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
        }), (0, a.jsx)(E.FormSwitch, {
          value: s,
          note: Q.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
          onChange: s => w.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: Q.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
        })]
      })
    })
  }
  renderServerPrivacy() {
    let {
      viewNsfwGuilds: e,
      currentUser: t,
      viewNsfwCommands: s
    } = this.props, {
      defaultGuildsRestricted: n
    } = this.state, l = !0 === t.nsfwAllowed;
    return (0, a.jsxs)(E.FormSection, {
      className: Z.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: Z.marginBottom8,
        children: Q.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !n,
        note: Q.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: Q.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!l && e,
        note: Q.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !l,
        onChange: w.ViewNsfwGuilds.updateSetting,
        children: Q.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, a.jsx)(ee, {}), (0, a.jsx)(E.FormSwitch, {
        value: !!l && s,
        note: Q.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !l,
        onChange: w.ViewNsfwCommands.updateSetting,
        children: Q.default.Messages.NSFW_DM_COMMANDS_HEADER
      })]
    })
  }
  renderDataPrivacy() {
    let {
      usageStatistics: e,
      personalization: t,
      dropsOptedOut: s
    } = this.props;
    return (0, a.jsxs)(E.FormSection, {
      className: Z.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: Z.marginBottom8,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: Q.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: B.default.getArticleURL(K.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: Q.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: B.default.getArticleURL(K.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s,
        note: Q.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: B.default.getArticleURL(K.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsx)("div", {
          children: Q.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i()(Z.marginTop20, Z.marginBottom8),
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom20,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            _.default.setSection(K.UserSettingsSections.ACCOUNT)
          }
        })
      }), this.renderHarvestRequest()]
    })
  }
  renderHarvestRequest() {
    let e;
    let {
      currentUser: t
    } = this.props, {
      requestingHarvest: s,
      currentHarvestRequest: l
    } = this.state, i = (0, k.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
      text: t.verified ? null : Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: n
        } = e;
        return (0, a.jsx)(E.Button, {
          disabled: i,
          onClick: this.handleDataDownloadRequest,
          onMouseEnter: t,
          onMouseLeave: n,
          look: E.Button.Looks.OUTLINED,
          color: E.Button.Colors.BRAND,
          submitting: s,
          children: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: q.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: Q.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u()(l.created_at).add(K.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(b.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: Z.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom20,
        children: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: B.default.getArticleURL(K.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: Z.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: Q.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: K.MarketingURLs.TERMS,
          privacyLink: K.MarketingURLs.PRIVACY
        })
      })
    })
  }
  renderStaffOnlySettings() {
    let {
      currentUser: e,
      nonSpamRetrainingOptIn: t
    } = this.props;
    return e.isStaff() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: Z.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: Z.marginBottom40,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom8,
          children: Q.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: Q.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, k.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? k.NonSpamRetrainingOptInOptions.UNDECIDED : t ? k.NonSpamRetrainingOptInOptions.OPTIN : k.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return w.NonSpamRetrainingOptIn.updateSetting(k.NonSpamRetrainingOptInOptionsToValue[t])
            }
          })]
        })]
      })]
    }) : null
  }
  renderSettingsBody() {
    let {
      fetchedConsents: e
    } = this.props;
    return (0, a.jsxs)(E.FormSection, {
      tag: E.FormTitleTags.H1,
      title: Q.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderKeywordFiltering(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t
    } = this.props, {
      selectedTab: s
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let n = s === z.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.TabBar, {
        className: q.settingsTabBar,
        "aria-label": Q.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: s,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, a.jsx)(E.TabBar.Item, {
          className: q.settingsTabBarItem,
          id: z.SafetyHubView.SETTINGS,
          "aria-label": Q.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: Q.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), (0, a.jsx)(E.TabBar.Item, {
          className: q.settingsTabBarItem,
          id: z.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": Q.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: Q.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, a.jsx)(E.TabBar.Panel, {
        id: s,
        "aria-labelledby": (0, U.uid)(),
        className: i()(q.contentPanel, {
          [q.contentPanelNagbar]: n
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[s]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), X(this, "SETTINGS_TABS", {
      [z.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [z.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(x.default, {})
    }), X(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), X(this, "handleChangeDropsOptedOut", () => {
      w.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), X(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? es({
        header: Q.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: Q.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: Q.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: Q.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, f.setConsents)([], [K.Consents.USAGE_STATISTICS]).catch(ea)
      }) : (0, f.setConsents)([K.Consents.USAGE_STATISTICS], []).catch(ea)
    }), X(this, "handlePersonalizationChange", () => {
      this.props.personalization ? es({
        header: Q.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: Q.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: Q.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, f.setConsents)([], [K.Consents.PERSONALIZATION]).catch(ea)
        },
        body: Q.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, f.setConsents)([K.Consents.PERSONALIZATION], []).catch(ea)
    }), X(this, "handleDataDownloadRequest", () => {
      es({
        header: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, m.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), T.default.show({
                body: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : T.default.show({
                title: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => T.default.show({
              title: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: Q.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }), X(this, "handleTabSelect", e => {
      this.setState({
        selectedTab: e
      })
    });
    let {
      defaultGuildsRestricted: t
    } = e;
    this.state = {
      defaultGuildsRestricted: t,
      currentHarvestRequest: null,
      requestingHarvest: !0,
      selectedTab: z.SafetyHubView.SETTINGS
    }
  }
}

function el() {
  let e = (0, c.useStateFromStores)([j.default], () => {
      let e = j.default.getCurrentUser();
      return o()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([D.default], () => ({
      fetchedConsents: D.default.fetchedConsents,
      usageStatistics: D.default.hasConsented(K.Consents.USAGE_STATISTICS),
      personalization: D.default.hasConsented(K.Consents.PERSONALIZATION)
    })),
    s = (0, c.useStateFromStores)([O.default], () => O.default.getFetchError()),
    n = (0, c.useStateFromStores)([P.default], () => P.default.getSubsection()),
    l = (0, g.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, N.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    r = (0, p.useKeywordFilterSettings)(),
    d = (0, A.default)();
  return (0, a.jsx)(en, {
    currentUser: e,
    defaultGuildsRestricted: w.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: w.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: w.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: w.ViewNsfwCommands.useSetting(),
    explicitContentFilter: w.ExplicitContentFilter.useSetting(),
    keywordFilter: r,
    dmSpamFilter: w.DmSpamFilterV2.useSetting(),
    showCurrentGame: w.ShowCurrentGame.useSetting(),
    dropsOptedOut: w.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: l,
    keywordFilteringEnabled: i,
    userIsConsideredAdult: null == d || d,
    subsection: n,
    ...t
  })
}