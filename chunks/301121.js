"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eA
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
  U = s("229502"),
  j = s("237292"),
  G = s("604849"),
  F = s("278828"),
  B = s("921801"),
  y = s("480294"),
  V = s("430824"),
  Y = s("663389"),
  H = s("594174"),
  k = s("285952"),
  w = s("153124"),
  W = s("626135"),
  K = s("63063"),
  Q = s("78451"),
  z = s("709054"),
  X = s("88658"),
  q = s("263399"),
  Z = s("695346"),
  J = s("3957"),
  $ = s("279743"),
  ee = s("76793"),
  et = s("839469"),
  es = s("973005"),
  ea = s("703115"),
  en = s("526761"),
  ei = s("726985"),
  el = s("981631"),
  er = s("800530"),
  eo = s("689938"),
  ed = s("79849"),
  eu = s("611273");

function ec(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function eS() {
  let e = (0, E.useStateFromStores)([R.default], () => R.default.getGuild()),
    t = (0, P.default)(),
    s = null != e ? e : t;
  l.useEffect(() => {
    W.default.track(el.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: ea.UserGuildPrivacySettingsAction.VIEW_SETTINGS_PAGE
    })
  }, []);
  let a = l.useCallback(e => {
    null != e && I.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), W.default.track(el.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: ea.UserGuildPrivacySettingsAction.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == s ? null : (0, i.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: eo.default.Messages.PRIVACY_AND_SAFETY,
    children: [(0, i.jsx)(p.default, {
      className: ed.guildSelector,
      guildId: s.id,
      onChange: a
    }), (0, i.jsx)(A.ConnectedPrivacySettings, {
      guild: s,
      ingress: A.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function eE() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    s = (0, j.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    a = (0, G.useSafetyAlertsSettingOrDefault)(),
    n = (0, J.useScrollToSetting)(en.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, i.jsxs)(B.Subsetting, {
    setting: ei.WebSetting.PRIVACY_SAFETY_ALERTS,
    children: [(0, i.jsx)(_.FormDivider, {
      className: eu.marginBottom20
    }), (0, i.jsx)(_.FormSection, {
      ref: n,
      children: (0, i.jsxs)(_.FormItem, {
        className: o()(ed.settingsBackgroundFlashElement),
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          faded: !0,
          className: eu.marginBottom8,
          children: eo.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, i.jsx)(_.FormSwitch, {
          value: a,
          note: eo.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: K.default.getArticleURL(el.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: F.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: eo.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, i.jsx)($.default, {
          animationDelay: 1e3,
          scrollPosition: en.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, i.jsx)(_.FormDivider, {
      className: eu.marginBottom20
    })]
  })
}

function eT(e, t) {
  W.default.track(el.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function e_() {
  let e = (0, x.default)(),
    t = Z.DefaultGuildsRestricted.useSetting(),
    s = Z.MessageRequestRestrictedDefault.useSetting(),
    a = (0, J.useScrollToSetting)(en.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: ed.settingsBackgroundFlashElement,
      children: [(0, i.jsx)(_.FormItem, {
        ref: a,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !s,
          note: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void eg({
              header: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: eo.default.Messages.NO_TEXT,
              cancelText: eo.default.Messages.YES_TEXT,
              confirmButtonColor: _.Button.Colors.BRAND,
              onConfirm: () => {
                Z.MessageRequestRestrictedDefault.updateSetting(e), eT(e, !1)
              },
              onCancel: () => {
                Z.MessageRequestRestrictedDefault.updateSetting(e), Z.MessageRequestRestrictedGuildIds.updateSetting(e ? z.default.keys(V.default.getGuilds()) : []), eT(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, i.jsx)($.default, {
        animationDelay: 700,
        scrollPosition: en.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, i.jsx)(_.FormDivider, {
      className: eu.marginBottom20
    })]
  })
}

function eI() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: a,
      explicitContentNonFriendDm: n
    } = (0, h.useExplicitContentSettingOrDefault)(),
    l = (0, J.useScrollToSetting)(en.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: T.ExplicitContentRedaction.BLOCK,
      label: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: T.ExplicitContentRedaction.SHOW,
      label: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: ed.settingsBackgroundFlashElement,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        faded: !0,
        className: eu.marginBottom8,
        children: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, i.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: eu.marginBottom8,
        children: eo.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: K.default.getArticleURL(el.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, i.jsx)(_.FormItem, {
        ref: l,
        tag: _.FormTitleTags.H3,
        className: eu.marginBottom20,
        title: eo.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: r,
          value: a,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, i.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eu.marginBottom20,
        title: eo.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, i.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eu.marginBottom20,
        title: eo.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, i.jsx)(_.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, O.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, i.jsx)($.default, {
        scrollPosition: en.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, i.jsx)(_.FormDivider, {
      className: eu.marginBottom20
    })]
  })
}

function eN(e) {
  let {
    modalProps: t,
    settings: {
      onConfirm: s,
      ...a
    }
  } = e, [n, r] = l.useState({
    Account: {
      value: "Account",
      label: eo.default.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Analytics: {
      value: "Analytics",
      label: eo.default.Messages.HARVEST_BACKEND_ANALYTICS,
      checked: !1
    },
    Activities: {
      value: "Activities",
      label: eo.default.Messages.HARVEST_BACKEND_ACTIVITIES,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: eo.default.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Programs: {
      value: "Programs",
      label: eo.default.Messages.HARVEST_BACKEND_HUBSPOT,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: eo.default.Messages.HARVEST_BACKEND_GUILDS,
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

function eg(e) {
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

function ef(e) {
  let {
    message: t
  } = e;
  eg({
    header: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: eo.default.Messages.OKAY,
    body: t
  })
}
class em extends l.PureComponent {
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
    eg({
      header: eo.default.Messages.USER_DM_SETTINGS_TITLE,
      body: eo.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: eo.default.Messages.NO_TEXT,
      cancelText: eo.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        Z.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        Z.DefaultGuildsRestricted.updateSetting(e), Z.RestrictedGuildIds.updateSetting(e ? z.default.keys(V.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    W.default.track(el.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    eg({
      header: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: eo.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: eo.default.Messages.NO_TEXT,
      cancelText: eo.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        Z.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        Z.MessageRequestRestrictedDefault.updateSetting(e), Z.MessageRequestRestrictedGuildIds.updateSetting(e ? z.default.keys(V.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    W.default.track(el.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, i.jsx)(i.Fragment, {
      children: (0, i.jsxs)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: eu.marginBottom20,
        title: eo.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eu.marginBottom8,
          children: eo.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: K.default.getArticleURL(el.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, i.jsx)(_.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, Q.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === T.DmSpamFilterV2.DEFAULT_UNSET ? Z.DmSpamFilterV2.updateSetting(e).then(() => {
              Z.ExplicitContentFilter.updateSetting(s)
            }) : Z.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== T.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = es.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : T.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: eu.marginBottom20,
        children: [(0, i.jsx)(B.Subsetting, {
          setting: ei.WebSetting.PRIVACY_SENSITIVE_MEDIA,
          children: (0, i.jsx)(eI, {})
        }), (0, i.jsx)(B.Subsetting, {
          setting: ei.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: (0, i.jsxs)(_.FormItem, {
            tag: _.FormTitleTags.H5,
            className: eu.marginBottom4,
            title: eo.default.Messages.USER_DM_SPAM_FILTER,
            children: [(0, i.jsx)(_.FormText, {
              type: _.FormTextTypes.DESCRIPTION,
              className: eu.marginBottom8,
              children: eo.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: K.default.getArticleURL(el.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
              })
            }), (0, i.jsx)(_.RadioGroup, {
              value: t,
              options: (0, Q.generateDmSpamOptions)(),
              onChange: e => {
                let {
                  value: t
                } = e;
                return Z.DmSpamFilterV2.updateSetting(t)
              }
            })]
          })
        })]
      }), (0, i.jsx)(eE, {})]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H5,
        className: eu.marginBottom40,
        title: eo.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, i.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H3,
          className: eu.marginBottom4,
          title: eo.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, i.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: eu.marginBottom8,
            children: eo.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: K.default.getArticleURL(el.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, i.jsx)(_.RadioGroup, {
            value: t,
            options: (0, Q.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return Z.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, i.jsx)(eE, {})]
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
        className: eu.marginBottom20,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: eu.marginBottom8,
          children: eo.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eu.marginBottom8,
          children: eo.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, i.jsx)(B.Subsetting, {
          setting: ei.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY,
          children: (0, i.jsx)(_.FormSwitch, {
            value: e,
            note: eo.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
            onChange: e => Z.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: eo.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
          })
        }), (0, i.jsx)(B.Subsetting, {
          setting: ei.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS,
          children: (0, i.jsx)(_.FormSwitch, {
            value: t,
            note: eo.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
            onChange: t => Z.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: eo.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
          })
        }), (0, i.jsx)(B.Subsetting, {
          setting: ei.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT,
          children: (0, i.jsx)(_.FormSwitch, {
            value: s,
            note: eo.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
            onChange: s => Z.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: eo.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
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
      className: eu.marginBottom40,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: eu.marginBottom8,
        children: eo.default.Messages.USER_DM_SETTINGS
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !a,
          note: eo.default.Messages.USER_DM_SETTINGS_HELP,
          onChange: this.handleChangeDefaultGuildsRestricted,
          children: eo.default.Messages.NEW_GUILDS_DM_ALLOWED
        })
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !!n && e,
          note: eo.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
          disabled: !n,
          onChange: Z.ViewNsfwGuilds.updateSetting,
          children: eo.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
        })
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
        children: (0, i.jsx)(e_, {})
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !!n && s,
          note: eo.default.Messages.NSFW_DM_COMMANDS_CAPTION,
          disabled: !n,
          onChange: Z.ViewNsfwCommands.updateSetting,
          children: eo.default.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: eu.marginBottom40,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: eu.marginBottom8,
        children: eo.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_IMPROVE_DISCORD,
        children: (0, i.jsx)(_.FormSwitch, {
          value: e,
          note: eo.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
            helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
          }),
          onChange: this.handleUsageStatisticsChange,
          children: eo.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
        })
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_PERSONALIZE,
        children: (0, i.jsx)(_.FormSwitch, {
          value: t,
          note: eo.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
            helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
          }),
          onChange: this.handlePersonalizationChange,
          children: eo.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
        })
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_QUESTS,
        children: (0, i.jsx)(_.FormSwitch, {
          value: !s,
          note: eo.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
            helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
          }),
          onChange: this.handleChangeDropsOptedOut,
          children: (0, i.jsx)("div", {
            children: eo.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
          })
        })
      }), (0, i.jsxs)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_BASIC_SERVICE,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H3,
          className: o()(eu.marginTop20, eu.marginBottom8),
          children: eo.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
        }), (0, i.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: eu.marginBottom20,
          children: eo.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
            onClick: () => {
              m.default.setSection(el.UserSettingsSections.ACCOUNT)
            }
          })
        }), (0, i.jsx)(_.FormDivider, {
          className: eu.marginBottom20
        })]
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_REQUEST,
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
    } = this.state, n = (0, X.harvestDisabled)(a, t), r = (0, i.jsx)(_.Tooltip, {
      text: t.verified ? null : eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return n && null != a && (e = (0, i.jsx)(_.Card, {
      className: ed.card,
      children: (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        children: eo.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: S()(a.created_at).add(el.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, i.jsx)(k.default, {
      children: r
    })), (0, i.jsxs)(l.Fragment, {
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        children: eo.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, i.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: eu.marginBottom20,
        children: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, i.jsx)(_.FormSection, {
      className: eu.marginBottom40,
      children: (0, i.jsx)(_.FormNotice, {
        type: _.FormNotice.Types.PRIMARY,
        body: eo.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: el.MarketingURLs.TERMS,
          privacyLink: el.MarketingURLs.PRIVACY
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
        className: eu.marginBottom20
      }), (0, i.jsxs)(_.FormSection, {
        className: eu.marginBottom40,
        children: [(0, i.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: eu.marginBottom8,
          children: eo.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, i.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H5,
          className: eu.marginBottom4,
          children: [(0, i.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: eu.marginBottom8,
            children: eo.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, i.jsx)(_.RadioGroup, {
            options: (0, X.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? X.NonSpamRetrainingOptInOptions.UNDECIDED : t ? X.NonSpamRetrainingOptInOptions.OPTIN : X.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return Z.NonSpamRetrainingOptIn.updateSetting(X.NonSpamRetrainingOptInOptionsToValue[t])
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
      title: eo.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_KEYWORD_FILTER,
        children: this.renderKeywordFiltering()
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        children: this.renderServerPrivacy()
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_DATA_PRIVACY,
        children: e ? this.renderDataPrivacy() : null
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_TERMS_POLICY,
        children: this.renderPrivacyAndTermsNote()
      }), (0, i.jsx)(B.Subsetting, {
        setting: ei.WebSetting.PRIVACY_STAFF_ONLY,
        children: this.renderStaffOnlySettings()
      })]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t,
      guildPrivacySettingsEnabled: s,
      searchFilter: a,
      isSecureFramesEnabled: n
    } = this.props, {
      selectedTab: l
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let r = e => t => t === e,
      d = !1;
    null != a && null == a.find(r(ei.WebSetting.PRIVACY_USER_SETTINGS)) && null != a.find(r(ei.WebSetting.PRIVACY_ACCOUNT_STANDING)) && (this.setState({
      selectedTab: er.SafetyHubView.ACCOUNT_STANDING
    }), d = !0);
    let u = l === er.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(_.TabBar, {
        className: ed.settingsTabBar,
        "aria-label": eo.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: l,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [d ? null : (0, i.jsx)(_.TabBar.Item, {
          className: ed.settingsTabBarItem,
          id: er.SafetyHubView.SETTINGS,
          "aria-label": eo.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: eo.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), s && !d ? (0, i.jsx)(_.TabBar.Item, {
          className: ed.settingsTabBarItem,
          id: er.SafetyHubView.GUILD_SETTINGS,
          "aria-label": eo.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: eo.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, i.jsx)(_.TabBar.Item, {
          className: ed.settingsTabBarItem,
          id: er.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": eo.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: eo.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        }), n ? (0, i.jsx)(_.TabBar.Item, {
          className: ed.settingsTabBarItem,
          id: er.SafetyHubView.ENCRYPTION,
          "aria-label": eo.default.Messages.E2EE_ENCRYPTION,
          children: eo.default.Messages.E2EE_ENCRYPTION
        }) : null]
      }), (0, i.jsx)(_.TabBar.Panel, {
        id: l,
        "aria-labelledby": (0, w.uid)(),
        className: o()(ed.contentPanel, {
          [ed.contentPanelNagbar]: u
        }),
        children: (0, i.jsx)("div", {
          children: this.SETTINGS_TABS[l]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), ec(this, "SETTINGS_TABS", {
      [er.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [er.SafetyHubView.ACCOUNT_STANDING]: () => (0, i.jsx)(v.default, {}),
      [er.SafetyHubView.GUILD_SETTINGS]: () => (0, i.jsx)(eS, {}),
      [er.SafetyHubView.ENCRYPTION]: () => (0, i.jsx)(ee.default, {})
    }), ec(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), ec(this, "handleChangeDropsOptedOut", () => {
      Z.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), ec(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eg({
        header: eo.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: eo.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: eo.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: eo.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, g.setConsents)([], [el.Consents.USAGE_STATISTICS]).catch(ef)
      }) : (0, g.setConsents)([el.Consents.USAGE_STATISTICS], []).catch(ef)
    }), ec(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eg({
        header: eo.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: eo.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: eo.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, g.setConsents)([], [el.Consents.PERSONALIZATION]).catch(ef)
        },
        body: eo.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, g.setConsents)([el.Consents.PERSONALIZATION], []).catch(ef)
    }), ec(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: K.default.getArticleURL(el.HelpdeskArticles.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: _.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, f.requestHarvest)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), N.default.show({
                body: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : N.default.show({
                title: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => N.default.show({
              title: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: eo.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, _.openModal)(t => (0, i.jsx)(eN, {
        modalProps: t,
        settings: e
      }))
    }), ec(this, "handleTabSelect", e => {
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
      selectedTab: er.SafetyHubView.SETTINGS
    }
  }
}

function eA() {
  let e = (0, E.useStateFromStores)([H.default], () => {
      let e = H.default.getCurrentUser();
      return u()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, E.useStateFromStoresObject)([y.default], () => ({
      fetchedConsents: y.default.fetchedConsents,
      usageStatistics: y.default.hasConsented(el.Consents.USAGE_STATISTICS),
      personalization: y.default.hasConsented(el.Consents.PERSONALIZATION)
    })),
    s = (0, E.useStateFromStores)([b.default], () => b.default.getFetchError()),
    a = (0, E.useStateFromStores)([Y.default], () => Y.default.getSubsection()),
    n = (0, C.useIsEligibleForExplicitMediaRedaction)(),
    l = (0, M.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    {
      hasSearchResults: r,
      searchResults: o
    } = (0, et.useSettingSearchResults)(),
    d = (0, D.useKeywordFilterSettings)(),
    c = (0, L.default)(),
    S = (0, q.useServerPrivacySettingsInUserSettingsEnabled)({
      location: "user_settings_privacy_safety"
    }),
    {
      enabled: T
    } = U.SecureFramesUIExperiment.useExperiment({
      location: "PrivacySafetySettings"
    });
  return (0, i.jsx)(em, {
    currentUser: e,
    defaultGuildsRestricted: Z.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: Z.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: Z.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: Z.ViewNsfwCommands.useSetting(),
    explicitContentFilter: Z.ExplicitContentFilter.useSetting(),
    keywordFilter: d,
    dmSpamFilter: Z.DmSpamFilterV2.useSetting(),
    showCurrentGame: Z.ShowCurrentGame.useSetting(),
    dropsOptedOut: Z.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: n,
    keywordFilteringEnabled: l,
    userIsConsideredAdult: null == c || c,
    subsection: a,
    guildPrivacySettingsEnabled: S,
    searchFilter: r ? o : void 0,
    isSecureFramesEnabled: T,
    ...t
  })
}