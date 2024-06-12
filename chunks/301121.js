"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ef
  }
}), s("47120"), s("733860"), s("773603");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("120356"),
  o = s.n(r),
  d = s("512722"),
  u = s.n(d),
  c = s("913527"),
  S = s.n(c),
  E = s("442837"),
  T = s("524437"),
  _ = s("481060"),
  I = s("570140"),
  N = s("668781"),
  g = s("409700"),
  f = s("809206"),
  m = s("230711"),
  A = s("241420"),
  C = s("651530"),
  O = s("163268"),
  h = s("294602"),
  R = s("778825"),
  p = s("856768"),
  M = s("592204"),
  D = s("712950"),
  x = s("610697"),
  L = s("880257"),
  P = s("16703"),
  b = s("236289"),
  v = s("518560"),
  U = s("237292"),
  j = s("604849"),
  G = s("278828"),
  F = s("921801"),
  B = s("480294"),
  y = s("430824"),
  V = s("663389"),
  H = s("594174"),
  Y = s("285952"),
  k = s("153124"),
  w = s("626135"),
  W = s("63063"),
  K = s("78451"),
  Q = s("709054"),
  z = s("88658"),
  X = s("263399"),
  q = s("695346"),
  Z = s("3957"),
  J = s("279743"),
  $ = s("839469"),
  ee = s("973005"),
  et = s("703115"),
  es = s("526761"),
  ea = s("726985"),
  en = s("981631"),
  ei = s("800530"),
  el = s("689938"),
  er = s("79849"),
  eo = s("611273");

function ed(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function eu() {
  let e = (0, E.useStateFromStores)([R.default], () => R.default.getGuild()),
    t = (0, P.default)(),
    s = null != e ? e : t;
  l.useEffect(() => {
    w.default.track(en.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: et.UserGuildPrivacySettingsAction.VIEW_SETTINGS_PAGE
    })
  }, []);
  let a = l.useCallback(e => {
    null != e && I.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), w.default.track(en.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: et.UserGuildPrivacySettingsAction.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == s ? null : (0, i.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: el.default.Messages.PRIVACY_AND_SAFETY,
    children: [(0, i.jsx)(p.default, {
      className: er.guildSelector,
      guildId: s.id,
      onChange: a
    }), (0, i.jsx)(A.ConnectedPrivacySettings, {
      guild: s,
      ingress: A.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function ec() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    s = (0, U.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    a = (0, j.useSafetyAlertsSettingOrDefault)(),
    n = (0, Z.useScrollToSetting)(es.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, i.jsxs)(F.Subsetting, {
    setting: ea.WebSetting.PRIVACY_SAFETY_ALERTS,
    children: [(0, i.jsx)(_.FormDivider, {
      className: eo.marginBottom20
    }), (0, i.jsx)(_.FormSection, {
      ref: n,
      children: (0, i.jsxs)(_.FormItem, {
        className: o()(er.settingsBackgroundFlashElement),
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          faded: !0,
          className: eo.marginBottom8,
          children: el.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, i.jsx)(_.FormSwitch, {
          value: a,
          note: el.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: W.default.getArticleURL(en.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: G.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: el.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, i.jsx)(J.default, {
          animationDelay: 1e3,
          scrollPosition: es.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, i.jsx)(_.FormDivider, {
      className: eo.marginBottom20
    })]
  })
}

function eS(e, t) {
  w.default.track(en.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function eE() {
  let e = (0, x.default)(),
    t = q.DefaultGuildsRestricted.useSetting(),
    s = q.MessageRequestRestrictedDefault.useSetting(),
    a = (0, Z.useScrollToSetting)(es.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: er.settingsBackgroundFlashElement,
      children: [(0, i.jsx)(_.FormItem, {
        ref: a,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !s,
          note: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void eI({
              header: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: el.default.Messages.NO_TEXT,
              cancelText: el.default.Messages.YES_TEXT,
              confirmButtonColor: _.Button.Colors.BRAND,
              onConfirm: () => {
                q.MessageRequestRestrictedDefault.updateSetting(e), eS(e, !1)
              },
              onCancel: () => {
                q.MessageRequestRestrictedDefault.updateSetting(e), q.MessageRequestRestrictedGuildIds.updateSetting(e ? Q.default.keys(y.default.getGuilds()) : []), eS(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, i.jsx)(J.default, {
        animationDelay: 700,
        scrollPosition: es.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, i.jsx)(_.FormDivider, {
      className: eo.marginBottom20
    })]
  })
}

function eT() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: a,
      explicitContentNonFriendDm: n
    } = (0, h.useExplicitContentSettingOrDefault)(),
    l = (0, Z.useScrollToSetting)(es.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: el.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: T.ExplicitContentRedaction.BLOCK,
      label: el.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: el.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: T.ExplicitContentRedaction.SHOW,
      label: el.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: er.settingsBackgroundFlashElement,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        faded: !0,
        className: eo.marginBottom8,
        children: el.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, i.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: eo.marginBottom8,
        children: el.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: W.default.getArticleURL(en.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, i.jsx)(_.FormItem, {
        ref: l,
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: r,
          value: a,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, i.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, i.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, i.jsx)(J.default, {
        scrollPosition: es.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, i.jsx)(_.FormDivider, {
      className: eo.marginBottom20
    })]
  })
}

function e_(e) {
  let {
    modalProps: t,
    settings: {
      onConfirm: s,
      ...a
    }
  } = e, [n, r] = l.useState({
    Account: {
      value: "Account",
      label: el.default.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Analytics: {
      value: "Analytics",
      label: el.default.Messages.HARVEST_BACKEND_ANALYTICS,
      checked: !1
    },
    Activities: {
      value: "Activities",
      label: el.default.Messages.HARVEST_BACKEND_ACTIVITIES,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: el.default.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Programs: {
      value: "Programs",
      label: el.default.Messages.HARVEST_BACKEND_HUBSPOT,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: el.default.Messages.HARVEST_BACKEND_GUILDS,
      checked: !1
    }
  }), o = e => (t, s) => {
    r(t => ({
      ...t,
      [e]: {
        ...t[e],
        checked: s
      }
    }))
  };
  return (0, i.jsxs)(_.ConfirmModal, {
    ...t,
    ...a,
    onConfirm: () => {
      let e = Object.keys(n).filter(e => n[e].checked).map(e => n[e].value);
      null == s || s(e)
    },
    children: [(0, i.jsx)(_.Text, {
      variant: "text-md/normal",
      style: {
        marginBottom: "5px"
      },
      children: a.body
    }), Object.keys(n).map(e => {
      let {
        label: t,
        checked: s
      } = n[e];
      return (0, i.jsx)(_.Checkbox, {
        type: _.Checkbox.Types.INVERTED,
        value: s,
        style: {
          marginBottom: "2px"
        },
        onChange: o(e),
        children: (0, i.jsx)(_.Text, {
          variant: "text-md/normal",
          children: t
        })
      }, e)
    })]
  })
}(n = a || (a = {})).USERS = "Account", n.MESSAGES = "Messages", n.GUILDS = "Servers", n.ANALYTICS = "Analytics", n.ACTIVITIES = "Activities", n.HUBSPOT = "Programs";

function eI(e) {
  let {
    body: t,
    ...s
  } = e;
  (0, _.openModal)(e => (0, i.jsx)(_.ConfirmModal, {
    ...e,
    ...s,
    children: (0, i.jsx)(_.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function eN(e) {
  let {
    message: t
  } = e;
  eI({
    header: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: el.default.Messages.OKAY,
    body: t
  })
}
class eg extends l.PureComponent {
  componentDidMount() {
    (0, g.fetchConsents)(), (0, f.getHarvestStatus)().then(e => {
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
    eI({
      header: el.default.Messages.USER_DM_SETTINGS_TITLE,
      body: el.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: el.default.Messages.NO_TEXT,
      cancelText: el.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        q.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        q.DefaultGuildsRestricted.updateSetting(e), q.RestrictedGuildIds.updateSetting(e ? Q.default.keys(y.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    w.default.track(en.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    eI({
      header: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: el.default.Messages.NO_TEXT,
      cancelText: el.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        q.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        q.MessageRequestRestrictedDefault.updateSetting(e), q.MessageRequestRestrictedGuildIds.updateSetting(e ? Q.default.keys(y.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    w.default.track(en.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        title: el.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eo.marginBottom8,
          children: el.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: W.default.getArticleURL(en.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, i.jsx)(_.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, K.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === T.DmSpamFilterV2.DEFAULT_UNSET ? q.DmSpamFilterV2.updateSetting(e).then(() => {
              q.ExplicitContentFilter.updateSetting(s)
            }) : q.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== T.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = ee.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : T.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        children: [(0, i.jsx)(F.Subsetting, {
          setting: ea.WebSetting.PRIVACY_SENSITIVE_MEDIA,
          children: (0, i.jsx)(eT, {})
        }), (0, i.jsx)(F.Subsetting, {
          setting: ea.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: (0, i.jsxs)(_.FormItem, {
            tag: _.FormTitleTags.H5,
            className: eo.marginBottom4,
            title: el.default.Messages.USER_DM_SPAM_FILTER,
            children: [(0, i.jsx)(_.FormText, {
              type: _.FormTextTypes.DESCRIPTION,
              className: eo.marginBottom8,
              children: el.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: W.default.getArticleURL(en.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
              })
            }), (0, i.jsx)(_.RadioGroup, {
              value: t,
              options: (0, K.generateDmSpamOptions)(),
              onChange: e => {
                let {
                  value: t
                } = e;
                return q.DmSpamFilterV2.updateSetting(t)
              }
            })]
          })
        })]
      }), (0, i.jsx)(ec, {})]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H5,
        className: eo.marginBottom40,
        title: el.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, i.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H3,
          className: eo.marginBottom4,
          title: el.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, i.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: el.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: W.default.getArticleURL(en.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, i.jsx)(_.RadioGroup, {
            value: t,
            options: (0, K.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return q.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, i.jsx)(ec, {})]
    })
  }
  renderKeywordFiltering() {
    if (!this.props.keywordFilteringEnabled) return null;
    let {
      profanity: e,
      slurs: t,
      sexualContent: s
    } = this.props.keywordFilter;
    return (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: eo.marginBottom20,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: eo.marginBottom8,
          children: el.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eo.marginBottom8,
          children: el.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, i.jsx)(F.Subsetting, {
          setting: ea.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY,
          children: (0, i.jsx)(_.FormSwitch, {
            value: e,
            note: el.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
            onChange: e => q.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: el.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
          })
        }), (0, i.jsx)(F.Subsetting, {
          setting: ea.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS,
          children: (0, i.jsx)(_.FormSwitch, {
            value: t,
            note: el.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
            onChange: t => q.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: el.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
          })
        }), (0, i.jsx)(F.Subsetting, {
          setting: ea.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT,
          children: (0, i.jsx)(_.FormSwitch, {
            value: s,
            note: el.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
            onChange: s => q.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: el.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
          })
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
      defaultGuildsRestricted: a
    } = this.state, n = !0 === t.nsfwAllowed;
    return (0, i.jsxs)(_.FormSection, {
      className: eo.marginBottom40,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: eo.marginBottom8,
        children: el.default.Messages.USER_DM_SETTINGS
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !a,
          note: el.default.Messages.USER_DM_SETTINGS_HELP,
          onChange: this.handleChangeDefaultGuildsRestricted,
          children: el.default.Messages.NEW_GUILDS_DM_ALLOWED
        })
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !!n && e,
          note: el.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
          disabled: !n,
          onChange: q.ViewNsfwGuilds.updateSetting,
          children: el.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
        })
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
        children: (0, i.jsx)(eE, {})
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !!n && s,
          note: el.default.Messages.NSFW_DM_COMMANDS_CAPTION,
          disabled: !n,
          onChange: q.ViewNsfwCommands.updateSetting,
          children: el.default.Messages.NSFW_DM_COMMANDS_HEADER
        })
      })]
    })
  }
  renderDataPrivacy() {
    let {
      usageStatistics: e,
      personalization: t,
      dropsOptedOut: s
    } = this.props;
    return (0, i.jsxs)(_.FormSection, {
      className: eo.marginBottom40,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: eo.marginBottom8,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_IMPROVE_DISCORD,
        children: (0, i.jsx)(_.FormSwitch, {
          value: e,
          note: el.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
            helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
          }),
          onChange: this.handleUsageStatisticsChange,
          children: el.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
        })
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_PERSONALIZE,
        children: (0, i.jsx)(_.FormSwitch, {
          value: t,
          note: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
            helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
          }),
          onChange: this.handlePersonalizationChange,
          children: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
        })
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_QUESTS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !s,
          note: el.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
            helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
          }),
          onChange: this.handleChangeDropsOptedOut,
          children: (0, i.jsx)("div", {
            children: el.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
          })
        })
      }), (0, i.jsxs)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_BASIC_SERVICE,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H3,
          className: o()(eo.marginTop20, eo.marginBottom8),
          children: el.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
        }), (0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eo.marginBottom20,
          children: el.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
            onClick: () => {
              m.default.setSection(en.UserSettingsSections.ACCOUNT)
            }
          })
        }), (0, i.jsx)(_.FormDivider, {
          className: eo.marginBottom20
        })]
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_REQUEST,
        children: this.renderHarvestRequest()
      })]
    })
  }
  renderHarvestRequest() {
    let e;
    let {
      currentUser: t
    } = this.props, {
      requestingHarvest: s,
      currentHarvestRequest: a
    } = this.state, n = (0, z.harvestDisabled)(a, t), r = (0, i.jsx)(_.Tooltip, {
      text: t.verified ? null : el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: a
        } = e;
        return (0, i.jsx)(_.Button, {
          disabled: n,
          onClick: this.handleDataDownloadRequest,
          onMouseEnter: t,
          onMouseLeave: a,
          look: _.Button.Looks.FILLED,
          color: _.Button.Colors.BRAND,
          submitting: s,
          children: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return n && null != a && (e = (0, i.jsx)(_.Card, {
      className: er.card,
      children: (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        children: el.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: S()(a.created_at).add(en.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, i.jsx)(Y.default, {
      children: r
    })), (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, i.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: eo.marginBottom20,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, i.jsx)(_.FormSection, {
      className: eo.marginBottom40,
      children: (0, i.jsx)(_.FormNotice, {
        type: _.FormNotice.Types.PRIMARY,
        body: el.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: en.MarketingURLs.TERMS,
          privacyLink: en.MarketingURLs.PRIVACY
        })
      })
    })
  }
  renderStaffOnlySettings() {
    let {
      currentUser: e,
      nonSpamRetrainingOptIn: t
    } = this.props;
    return e.isStaff() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(_.FormDivider, {
        className: eo.marginBottom20
      }), (0, i.jsxs)(_.FormSection, {
        className: eo.marginBottom40,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: eo.marginBottom8,
          children: el.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, i.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H5,
          className: eo.marginBottom4,
          children: [(0, i.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: eo.marginBottom8,
            children: el.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, i.jsx)(_.RadioGroup, {
            options: (0, z.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? z.NonSpamRetrainingOptInOptions.UNDECIDED : t ? z.NonSpamRetrainingOptInOptions.OPTIN : z.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return q.NonSpamRetrainingOptIn.updateSetting(z.NonSpamRetrainingOptInOptionsToValue[t])
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
    return (0, i.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: el.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_KEYWORD_FILTER,
        children: this.renderKeywordFiltering()
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        children: this.renderServerPrivacy()
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_DATA_PRIVACY,
        children: e ? this.renderDataPrivacy() : null
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_TERMS_POLICY,
        children: this.renderPrivacyAndTermsNote()
      }), (0, i.jsx)(F.Subsetting, {
        setting: ea.WebSetting.PRIVACY_STAFF_ONLY,
        children: this.renderStaffOnlySettings()
      })]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t,
      guildPrivacySettingsEnabled: s,
      searchFilter: a
    } = this.props, {
      selectedTab: n
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let l = e => t => t === e,
      r = !1;
    null != a && null == a.find(l(ea.WebSetting.PRIVACY_USER_SETTINGS)) && null != a.find(l(ea.WebSetting.PRIVACY_ACCOUNT_STANDING)) && (this.setState({
      selectedTab: ei.SafetyHubView.ACCOUNT_STANDING
    }), r = !0);
    let d = n === ei.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.TabBar, {
        className: er.settingsTabBar,
        "aria-label": el.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: n,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [r ? null : (0, i.jsx)(_.TabBar.Item, {
          className: er.settingsTabBarItem,
          id: ei.SafetyHubView.SETTINGS,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), s && !r ? (0, i.jsx)(_.TabBar.Item, {
          className: er.settingsTabBarItem,
          id: ei.SafetyHubView.GUILD_SETTINGS,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: el.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, i.jsx)(_.TabBar.Item, {
          className: er.settingsTabBarItem,
          id: ei.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, i.jsx)(_.TabBar.Panel, {
        id: n,
        "aria-labelledby": (0, k.uid)(),
        className: o()(er.contentPanel, {
          [er.contentPanelNagbar]: d
        }),
        children: (0, i.jsx)("div", {
          children: this.SETTINGS_TABS[n]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), ed(this, "SETTINGS_TABS", {
      [ei.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [ei.SafetyHubView.ACCOUNT_STANDING]: () => (0, i.jsx)(v.default, {}),
      [ei.SafetyHubView.GUILD_SETTINGS]: () => (0, i.jsx)(eu, {})
    }), ed(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), ed(this, "handleChangeDropsOptedOut", () => {
      q.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), ed(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eI({
        header: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, g.setConsents)([], [en.Consents.USAGE_STATISTICS]).catch(eN)
      }) : (0, g.setConsents)([en.Consents.USAGE_STATISTICS], []).catch(eN)
    }), ed(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eI({
        header: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, g.setConsents)([], [en.Consents.PERSONALIZATION]).catch(eN)
        },
        body: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, g.setConsents)([en.Consents.PERSONALIZATION], []).catch(eN)
    }), ed(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: W.default.getArticleURL(en.HelpdeskArticles.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: _.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, f.requestHarvest)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), N.default.show({
                body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : N.default.show({
                title: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => N.default.show({
              title: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, _.openModal)(t => (0, i.jsx)(e_, {
        modalProps: t,
        settings: e
      }))
    }), ed(this, "handleTabSelect", e => {
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
      selectedTab: ei.SafetyHubView.SETTINGS
    }
  }
}

function ef() {
  let e = (0, E.useStateFromStores)([H.default], () => {
      let e = H.default.getCurrentUser();
      return u()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, E.useStateFromStoresObject)([B.default], () => ({
      fetchedConsents: B.default.fetchedConsents,
      usageStatistics: B.default.hasConsented(en.Consents.USAGE_STATISTICS),
      personalization: B.default.hasConsented(en.Consents.PERSONALIZATION)
    })),
    s = (0, E.useStateFromStores)([b.default], () => b.default.getFetchError()),
    a = (0, E.useStateFromStores)([V.default], () => V.default.getSubsection()),
    n = (0, C.useIsEligibleForExplicitMediaRedaction)(),
    l = (0, M.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    {
      hasSearchResults: r,
      searchResults: o
    } = (0, $.useSettingSearchResults)(),
    d = (0, D.useKeywordFilterSettings)(),
    c = (0, L.default)(),
    S = (0, X.useServerPrivacySettingsInUserSettingsEnabled)({
      location: "user_settings_privacy_safety"
    });
  return (0, i.jsx)(eg, {
    currentUser: e,
    defaultGuildsRestricted: q.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: q.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: q.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: q.ViewNsfwCommands.useSetting(),
    explicitContentFilter: q.ExplicitContentFilter.useSetting(),
    keywordFilter: d,
    dmSpamFilter: q.DmSpamFilterV2.useSetting(),
    showCurrentGame: q.ShowCurrentGame.useSetting(),
    dropsOptedOut: q.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: n,
    keywordFilteringEnabled: l,
    userIsConsideredAdult: null == c || c,
    subsection: a,
    guildPrivacySettingsEnabled: S,
    searchFilter: r ? o : void 0,
    ...t
  })
}