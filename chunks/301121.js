"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eg
  }
}), s("47120"), s("733860"), s("773603");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("120356"),
  o = s.n(r),
  d = s("512722"),
  u = s.n(d),
  c = s("913527"),
  S = s.n(c),
  E = s("442837"),
  T = s("524437"),
  _ = s("481060"),
  f = s("570140"),
  m = s("668781"),
  g = s("409700"),
  I = s("809206"),
  N = s("230711"),
  h = s("241420"),
  C = s("651530"),
  A = s("163268"),
  p = s("294602"),
  O = s("778825"),
  R = s("856768"),
  x = s("592204"),
  M = s("712950"),
  v = s("610697"),
  L = s("880257"),
  D = s("16703"),
  P = s("236289"),
  b = s("518560"),
  j = s("237292"),
  U = s("604849"),
  y = s("278828"),
  G = s("921801"),
  F = s("480294"),
  B = s("430824"),
  k = s("663389"),
  w = s("594174"),
  H = s("285952"),
  Y = s("153124"),
  V = s("626135"),
  W = s("63063"),
  K = s("78451"),
  z = s("709054"),
  Q = s("88658"),
  q = s("263399"),
  Z = s("695346"),
  X = s("3957"),
  J = s("279743"),
  $ = s("973005"),
  ee = s("703115"),
  et = s("526761"),
  es = s("726985"),
  ea = s("981631"),
  en = s("800530"),
  el = s("689938"),
  ei = s("79849"),
  er = s("611273");

function eo(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function ed() {
  let e = (0, E.useStateFromStores)([O.default], () => O.default.getGuild()),
    t = (0, D.default)(),
    s = null != e ? e : t;
  i.useEffect(() => {
    V.default.track(ea.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: ee.UserGuildPrivacySettingsAction.VIEW_SETTINGS_PAGE
    })
  }, []);
  let a = i.useCallback(e => {
    null != e && f.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), V.default.track(ea.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: ee.UserGuildPrivacySettingsAction.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == s ? null : (0, l.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: el.default.Messages.PRIVACY_AND_SAFETY,
    children: [(0, l.jsx)(R.default, {
      className: ei.guildSelector,
      guildId: s.id,
      onChange: a
    }), (0, l.jsx)(h.ConnectedPrivacySettings, {
      guild: s,
      ingress: h.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function eu() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    s = (0, j.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    a = (0, U.useSafetyAlertsSettingOrDefault)(),
    n = (0, X.useScrollToSetting)(et.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(_.FormDivider, {
      className: er.marginBottom20
    }), (0, l.jsx)(_.FormSection, {
      ref: n,
      children: (0, l.jsxs)(_.FormItem, {
        className: o()(ei.settingsBackgroundFlashElement),
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          faded: !0,
          className: er.marginBottom8,
          children: el.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, l.jsx)(_.FormSwitch, {
          value: a,
          note: el.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: W.default.getArticleURL(ea.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: y.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: el.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, l.jsx)(J.default, {
          animationDelay: 1e3,
          scrollPosition: et.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, l.jsx)(_.FormDivider, {
      className: er.marginBottom20
    })]
  })
}

function ec(e, t) {
  V.default.track(ea.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function eS() {
  let e = (0, v.default)(),
    t = Z.DefaultGuildsRestricted.useSetting(),
    s = Z.MessageRequestRestrictedDefault.useSetting(),
    a = (0, X.useScrollToSetting)(et.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: ei.settingsBackgroundFlashElement,
      children: [(0, l.jsx)(_.FormItem, {
        ref: a,
        children: (0, l.jsx)(_.FormSwitch, {
          value: !s,
          note: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void e_({
              header: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: el.default.Messages.NO_TEXT,
              cancelText: el.default.Messages.YES_TEXT,
              confirmButtonColor: _.Button.Colors.BRAND,
              onConfirm: () => {
                Z.MessageRequestRestrictedDefault.updateSetting(e), ec(e, !1)
              },
              onCancel: () => {
                Z.MessageRequestRestrictedDefault.updateSetting(e), Z.MessageRequestRestrictedGuildIds.updateSetting(e ? z.default.keys(B.default.getGuilds()) : []), ec(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, l.jsx)(J.default, {
        animationDelay: 700,
        scrollPosition: et.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, l.jsx)(_.FormDivider, {
      className: er.marginBottom20
    })]
  })
}

function eE() {
  var e;
  let t = null === (e = (0, L.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: a,
      explicitContentNonFriendDm: n
    } = (0, p.useExplicitContentSettingOrDefault)(),
    i = (0, X.useScrollToSetting)(et.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
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
  return t && (r.unshift(d), o.unshift(d)), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: ei.settingsBackgroundFlashElement,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        faded: !0,
        className: er.marginBottom8,
        children: el.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: er.marginBottom8,
        children: el.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: W.default.getArticleURL(ea.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, l.jsx)(_.FormItem, {
        ref: i,
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: r,
          value: a,
          onChange: e => (0, A.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, l.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, A.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, l.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        title: el.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, A.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, l.jsx)(J.default, {
        scrollPosition: et.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, l.jsx)(_.FormDivider, {
      className: er.marginBottom20
    })]
  })
}

function eT(e) {
  let {
    modalProps: t,
    settings: {
      onConfirm: s,
      ...a
    }
  } = e, [n, r] = i.useState({
    Account: {
      value: "Account",
      label: el.default.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: el.default.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: el.default.Messages.HARVEST_BACKEND_GUILDS,
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
    Programs: {
      value: "Programs",
      label: el.default.Messages.HARVEST_BACKEND_HUBSPOT,
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
  return (0, l.jsxs)(_.ConfirmModal, {
    ...t,
    ...a,
    onConfirm: () => {
      let e = Object.keys(n).filter(e => n[e].checked).map(e => n[e].value);
      null == s || s(e)
    },
    children: [(0, l.jsx)(_.Text, {
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
      return (0, l.jsx)(_.Checkbox, {
        type: _.Checkbox.Types.INVERTED,
        value: s,
        style: {
          marginBottom: "2px"
        },
        onChange: o(e),
        children: (0, l.jsx)(_.Text, {
          variant: "text-md/normal",
          children: t
        })
      }, e)
    })]
  })
}(n = a || (a = {})).USERS = "Account", n.MESSAGES = "Messages", n.GUILDS = "Servers", n.ANALYTICS = "Analytics", n.ACTIVITIES = "Activities", n.HUBSPOT = "Programs";

function e_(e) {
  let {
    body: t,
    ...s
  } = e;
  (0, _.openModal)(e => (0, l.jsx)(_.ConfirmModal, {
    ...e,
    ...s,
    children: (0, l.jsx)(_.Text, {
      variant: "text-md/normal",
      children: t
    })
  }))
}

function ef(e) {
  let {
    message: t
  } = e;
  e_({
    header: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: el.default.Messages.OKAY,
    body: t
  })
}
class em extends i.PureComponent {
  componentDidMount() {
    (0, g.fetchConsents)(), (0, I.getHarvestStatus)().then(e => {
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
    e_({
      header: el.default.Messages.USER_DM_SETTINGS_TITLE,
      body: el.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: el.default.Messages.NO_TEXT,
      cancelText: el.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        Z.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        Z.DefaultGuildsRestricted.updateSetting(e), Z.RestrictedGuildIds.updateSetting(e ? z.default.keys(B.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    V.default.track(ea.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    e_({
      header: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: el.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: el.default.Messages.NO_TEXT,
      cancelText: el.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        Z.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        Z.MessageRequestRestrictedDefault.updateSetting(e), Z.MessageRequestRestrictedGuildIds.updateSetting(e ? z.default.keys(B.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    V.default.track(ea.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, l.jsx)(l.Fragment, {
      children: (0, l.jsxs)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        title: el.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, l.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: er.marginBottom8,
          children: el.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: W.default.getArticleURL(ea.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, l.jsx)(_.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, K.generateExplicitImageOptions)(),
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
    let t = this.props.dmSpamFilter !== T.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = $.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : T.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        children: [(0, l.jsx)(G.Subsetting, {
          setting: es.WebSetting.PRIVACY_SENSITIVE_MEDIA,
          children: (0, l.jsx)(eE, {})
        }), (0, l.jsx)(G.Subsetting, {
          setting: es.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: (0, l.jsxs)(_.FormItem, {
            tag: _.FormTitleTags.H5,
            className: er.marginBottom4,
            title: el.default.Messages.USER_DM_SPAM_FILTER,
            children: [(0, l.jsx)(_.FormText, {
              type: _.FormTextTypes.DESCRIPTION,
              className: er.marginBottom8,
              children: el.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: W.default.getArticleURL(ea.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
              })
            }), (0, l.jsx)(_.RadioGroup, {
              value: t,
              options: (0, K.generateDmSpamOptions)(),
              onChange: e => {
                let {
                  value: t
                } = e;
                return Z.DmSpamFilterV2.updateSetting(t)
              }
            })]
          })
        })]
      }), (0, l.jsx)(eu, {})]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H5,
        className: er.marginBottom40,
        title: el.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, l.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H3,
          className: er.marginBottom4,
          title: el.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, l.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: el.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: W.default.getArticleURL(ea.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, l.jsx)(_.RadioGroup, {
            value: t,
            options: (0, K.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return Z.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, l.jsx)(eu, {})]
    })
  }
  renderKeywordFiltering() {
    if (!this.props.keywordFilteringEnabled) return null;
    let {
      profanity: e,
      slurs: t,
      sexualContent: s
    } = this.props.keywordFilter;
    return (0, l.jsx)(l.Fragment, {
      children: (0, l.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: er.marginBottom20,
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: er.marginBottom8,
          children: el.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, l.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: er.marginBottom8,
          children: el.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, l.jsx)(G.Subsetting, {
          setting: es.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY,
          children: (0, l.jsx)(_.FormSwitch, {
            value: e,
            note: el.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
            onChange: e => Z.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: el.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
          })
        }), (0, l.jsx)(G.Subsetting, {
          setting: es.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS,
          children: (0, l.jsx)(_.FormSwitch, {
            value: t,
            note: el.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
            onChange: t => Z.KeywordFilterSettings.updateSetting({
              profanity: e,
              slurs: t,
              sexualContent: s
            }),
            children: el.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
          })
        }), (0, l.jsx)(G.Subsetting, {
          setting: es.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT,
          children: (0, l.jsx)(_.FormSwitch, {
            value: s,
            note: el.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
            onChange: s => Z.KeywordFilterSettings.updateSetting({
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
    return (0, l.jsxs)(_.FormSection, {
      className: er.marginBottom40,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: er.marginBottom8,
        children: el.default.Messages.USER_DM_SETTINGS
      }), (0, l.jsx)(_.FormSwitch, {
        value: !a,
        note: el.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: el.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, l.jsx)(_.FormSwitch, {
        value: !!n && e,
        note: el.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !n,
        onChange: Z.ViewNsfwGuilds.updateSetting,
        children: el.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, l.jsx)(eS, {}), (0, l.jsx)(_.FormSwitch, {
        value: !!n && s,
        note: el.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !n,
        onChange: Z.ViewNsfwCommands.updateSetting,
        children: el.default.Messages.NSFW_DM_COMMANDS_HEADER
      })]
    })
  }
  renderDataPrivacy() {
    let {
      usageStatistics: e,
      personalization: t,
      dropsOptedOut: s
    } = this.props;
    return (0, l.jsxs)(_.FormSection, {
      className: er.marginBottom40,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: er.marginBottom8,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, l.jsx)(_.FormSwitch, {
        value: e,
        note: el.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, l.jsx)(_.FormSwitch, {
        value: t,
        note: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, l.jsx)(_.FormSwitch, {
        value: !s,
        note: el.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, l.jsx)("div", {
          children: el.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        className: o()(er.marginTop20, er.marginBottom8),
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: er.marginBottom20,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            N.default.setSection(ea.UserSettingsSections.ACCOUNT)
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
      currentHarvestRequest: a
    } = this.state, n = (0, Q.harvestDisabled)(a, t), r = (0, l.jsx)(_.Tooltip, {
      text: t.verified ? null : el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: t,
          onMouseLeave: a
        } = e;
        return (0, l.jsx)(_.Button, {
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
    return n && null != a && (e = (0, l.jsx)(_.Card, {
      className: ei.card,
      children: (0, l.jsx)(_.Text, {
        variant: "text-md/normal",
        children: el.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: S()(a.created_at).add(ea.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, l.jsx)(H.default, {
      children: r
    })), (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsx)(_.FormDivider, {
        className: er.marginBottom20
      }), (0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: er.marginBottom20,
        children: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, l.jsx)(_.FormSection, {
      className: er.marginBottom40,
      children: (0, l.jsx)(_.FormNotice, {
        type: _.FormNotice.Types.PRIMARY,
        body: el.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: ea.MarketingURLs.TERMS,
          privacyLink: ea.MarketingURLs.PRIVACY
        })
      })
    })
  }
  renderStaffOnlySettings() {
    let {
      currentUser: e,
      nonSpamRetrainingOptIn: t
    } = this.props;
    return e.isStaff() ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(_.FormDivider, {
        className: er.marginBottom20
      }), (0, l.jsxs)(_.FormSection, {
        className: er.marginBottom40,
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: er.marginBottom8,
          children: el.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, l.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H5,
          className: er.marginBottom4,
          children: [(0, l.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: er.marginBottom8,
            children: el.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, l.jsx)(_.RadioGroup, {
            options: (0, Q.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? Q.NonSpamRetrainingOptInOptions.UNDECIDED : t ? Q.NonSpamRetrainingOptInOptions.OPTIN : Q.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return Z.NonSpamRetrainingOptIn.updateSetting(Q.NonSpamRetrainingOptInOptionsToValue[t])
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
    return (0, l.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: el.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), (0, l.jsx)(G.Subsetting, {
        setting: es.WebSetting.PRIVACY_KEYWORD_FILTER,
        children: this.renderKeywordFiltering()
      }), (0, l.jsx)(G.Subsetting, {
        setting: es.WebSetting.PRIVACY_SERVER_PRIVACY,
        children: this.renderServerPrivacy()
      }), (0, l.jsx)(G.Subsetting, {
        setting: es.WebSetting.PRIVACY_DATA_PRIVACY,
        children: e ? this.renderDataPrivacy() : null
      }), this.renderPrivacyAndTermsNote(), (0, l.jsx)(G.Subsetting, {
        setting: es.WebSetting.PRIVACY_STAFF_ONLY,
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
    let i = !0;
    null != a && 1 === a.length && a[0] === es.WebSetting.PRIVACY_ACCOUNT_STANDING && (this.setState({
      selectedTab: en.SafetyHubView.ACCOUNT_STANDING
    }), i = !1);
    let r = n === en.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.TabBar, {
        className: ei.settingsTabBar,
        "aria-label": el.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: n,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [i ? (0, l.jsx)(_.TabBar.Item, {
          className: ei.settingsTabBarItem,
          id: en.SafetyHubView.SETTINGS,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }) : null, s ? (0, l.jsx)(_.TabBar.Item, {
          className: ei.settingsTabBarItem,
          id: en.SafetyHubView.GUILD_SETTINGS,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: el.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, l.jsx)(_.TabBar.Item, {
          className: ei.settingsTabBarItem,
          id: en.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: el.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, l.jsx)(_.TabBar.Panel, {
        id: n,
        "aria-labelledby": (0, Y.uid)(),
        className: o()(ei.contentPanel, {
          [ei.contentPanelNagbar]: r
        }),
        children: (0, l.jsx)("div", {
          children: this.SETTINGS_TABS[n]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), eo(this, "SETTINGS_TABS", {
      [en.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [en.SafetyHubView.ACCOUNT_STANDING]: () => (0, l.jsx)(b.default, {}),
      [en.SafetyHubView.GUILD_SETTINGS]: () => (0, l.jsx)(ed, {})
    }), eo(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), eo(this, "handleChangeDropsOptedOut", () => {
      Z.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), eo(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? e_({
        header: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: el.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, g.setConsents)([], [ea.Consents.USAGE_STATISTICS]).catch(ef)
      }) : (0, g.setConsents)([ea.Consents.USAGE_STATISTICS], []).catch(ef)
    }), eo(this, "handlePersonalizationChange", () => {
      this.props.personalization ? e_({
        header: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, g.setConsents)([], [ea.Consents.PERSONALIZATION]).catch(ef)
        },
        body: el.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, g.setConsents)([ea.Consents.PERSONALIZATION], []).catch(ef)
    }), eo(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: W.default.getArticleURL(ea.HelpdeskArticles.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: _.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, I.requestHarvest)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), m.default.show({
                body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : m.default.show({
                title: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => m.default.show({
              title: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: el.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, _.openModal)(t => (0, l.jsx)(eT, {
        modalProps: t,
        settings: e
      }))
    }), eo(this, "handleTabSelect", e => {
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
      selectedTab: en.SafetyHubView.SETTINGS
    }
  }
}

function eg() {
  let e = (0, E.useStateFromStores)([w.default], () => {
      let e = w.default.getCurrentUser();
      return u()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, E.useStateFromStoresObject)([F.default], () => ({
      fetchedConsents: F.default.fetchedConsents,
      usageStatistics: F.default.hasConsented(ea.Consents.USAGE_STATISTICS),
      personalization: F.default.hasConsented(ea.Consents.PERSONALIZATION)
    })),
    s = (0, E.useStateFromStores)([P.default], () => P.default.getFetchError()),
    a = (0, E.useStateFromStores)([k.default], () => k.default.getSubsection()),
    n = (0, C.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, x.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    r = (0, M.useKeywordFilterSettings)(),
    o = (0, L.default)(),
    d = (0, q.useServerPrivacySettingsInUserSettingsEnabled)({
      location: "user_settings_privacy_safety"
    });
  return (0, l.jsx)(em, {
    currentUser: e,
    defaultGuildsRestricted: Z.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: Z.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: Z.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: Z.ViewNsfwCommands.useSetting(),
    explicitContentFilter: Z.ExplicitContentFilter.useSetting(),
    keywordFilter: r,
    dmSpamFilter: Z.DmSpamFilterV2.useSetting(),
    showCurrentGame: Z.ShowCurrentGame.useSetting(),
    dropsOptedOut: Z.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: n,
    keywordFilteringEnabled: i,
    userIsConsideredAdult: null == o || o,
    subsection: a,
    guildPrivacySettingsEnabled: d,
    ...t
  })
}