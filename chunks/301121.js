"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ef
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
  p = s("163268"),
  A = s("294602"),
  O = s("778825"),
  x = s("856768"),
  R = s("592204"),
  M = s("712950"),
  v = s("610697"),
  D = s("880257"),
  L = s("16703"),
  P = s("236289"),
  b = s("518560"),
  j = s("237292"),
  U = s("604849"),
  y = s("278828"),
  G = s("480294"),
  B = s("430824"),
  F = s("663389"),
  k = s("594174"),
  w = s("285952"),
  H = s("153124"),
  V = s("626135"),
  Y = s("63063"),
  W = s("78451"),
  K = s("709054"),
  z = s("88658"),
  Q = s("263399"),
  q = s("695346"),
  Z = s("3957"),
  X = s("279743"),
  J = s("973005"),
  $ = s("703115"),
  ee = s("526761"),
  et = s("981631"),
  es = s("800530"),
  ea = s("689938"),
  en = s("79849"),
  el = s("611273");

function ei(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function er() {
  let e = (0, E.useStateFromStores)([O.default], () => O.default.getGuild()),
    t = (0, L.default)(),
    s = null != e ? e : t;
  i.useEffect(() => {
    V.default.track(et.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: $.UserGuildPrivacySettingsAction.VIEW_SETTINGS_PAGE
    })
  }, []);
  let a = i.useCallback(e => {
    null != e && f.default.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), V.default.track(et.AnalyticEvents.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: $.UserGuildPrivacySettingsAction.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == s ? null : (0, l.jsxs)(_.FormSection, {
    tag: _.FormTitleTags.H1,
    title: ea.default.Messages.PRIVACY_AND_SAFETY,
    children: [(0, l.jsx)(x.default, {
      className: en.guildSelector,
      guildId: s.id,
      onChange: a
    }), (0, l.jsx)(h.ConnectedPrivacySettings, {
      guild: s,
      ingress: h.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function eo() {
  var e;
  let t = null === (e = (0, D.default)()) || void 0 === e || e,
    s = (0, j.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    a = (0, U.useSafetyAlertsSettingOrDefault)(),
    n = (0, Z.useScrollToSetting)(ee.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(_.FormDivider, {
      className: el.marginBottom20
    }), (0, l.jsx)(_.FormSection, {
      ref: n,
      children: (0, l.jsxs)(_.FormItem, {
        className: o()(en.settingsBackgroundFlashElement),
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          faded: !0,
          className: el.marginBottom8,
          children: ea.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, l.jsx)(_.FormSwitch, {
          value: a,
          note: ea.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: Y.default.getArticleURL(et.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: y.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: ea.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, l.jsx)(X.default, {
          animationDelay: 1e3,
          scrollPosition: ee.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, l.jsx)(_.FormDivider, {
      className: el.marginBottom20
    })]
  })
}

function ed(e, t) {
  V.default.track(et.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function eu() {
  let e = (0, v.default)(),
    t = q.DefaultGuildsRestricted.useSetting(),
    s = q.MessageRequestRestrictedDefault.useSetting(),
    a = (0, Z.useScrollToSetting)(ee.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: en.settingsBackgroundFlashElement,
      children: [(0, l.jsx)(_.FormItem, {
        ref: a,
        children: (0, l.jsx)(_.FormSwitch, {
          value: !s,
          note: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void eE({
              header: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: ea.default.Messages.NO_TEXT,
              cancelText: ea.default.Messages.YES_TEXT,
              confirmButtonColor: _.Button.Colors.BRAND,
              onConfirm: () => {
                q.MessageRequestRestrictedDefault.updateSetting(e), ed(e, !1)
              },
              onCancel: () => {
                q.MessageRequestRestrictedDefault.updateSetting(e), q.MessageRequestRestrictedGuildIds.updateSetting(e ? K.default.keys(B.default.getGuilds()) : []), ed(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, l.jsx)(X.default, {
        animationDelay: 700,
        scrollPosition: ee.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, l.jsx)(_.FormDivider, {
      className: el.marginBottom20
    })]
  })
}

function ec() {
  var e;
  let t = null === (e = (0, D.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: a,
      explicitContentNonFriendDm: n
    } = (0, A.useExplicitContentSettingOrDefault)(),
    i = (0, Z.useScrollToSetting)(ee.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    r = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: T.ExplicitContentRedaction.BLOCK,
      label: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: T.ExplicitContentRedaction.BLUR,
      label: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    d = {
      value: T.ExplicitContentRedaction.SHOW,
      label: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (r.unshift(d), o.unshift(d)), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: en.settingsBackgroundFlashElement,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        faded: !0,
        className: el.marginBottom8,
        children: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: el.marginBottom8,
        children: ea.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: Y.default.getArticleURL(et.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, l.jsx)(_.FormItem, {
        ref: i,
        tag: _.FormTitleTags.H3,
        className: el.marginBottom20,
        title: ea.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: r,
          value: a,
          onChange: e => (0, p.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, l.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: el.marginBottom20,
        title: ea.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, p.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, l.jsx)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: el.marginBottom20,
        title: ea.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, l.jsx)(_.SingleSelect, {
          options: o,
          value: s,
          onChange: e => (0, p.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, l.jsx)(X.default, {
        scrollPosition: ee.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, l.jsx)(_.FormDivider, {
      className: el.marginBottom20
    })]
  })
}

function eS(e) {
  let {
    modalProps: t,
    settings: {
      onConfirm: s,
      ...a
    }
  } = e, [n, r] = i.useState({
    Account: {
      value: "Account",
      label: ea.default.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: ea.default.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: ea.default.Messages.HARVEST_BACKEND_GUILDS,
      checked: !1
    },
    Analytics: {
      value: "Analytics",
      label: ea.default.Messages.HARVEST_BACKEND_ANALYTICS,
      checked: !1
    },
    Activities: {
      value: "Activities",
      label: ea.default.Messages.HARVEST_BACKEND_ACTIVITIES,
      checked: !1
    },
    Programs: {
      value: "Programs",
      label: ea.default.Messages.HARVEST_BACKEND_HUBSPOT,
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

function eE(e) {
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

function eT(e) {
  let {
    message: t
  } = e;
  eE({
    header: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: ea.default.Messages.OKAY,
    body: t
  })
}
class e_ extends i.PureComponent {
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
    eE({
      header: ea.default.Messages.USER_DM_SETTINGS_TITLE,
      body: ea.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: ea.default.Messages.NO_TEXT,
      cancelText: ea.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        q.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        q.DefaultGuildsRestricted.updateSetting(e), q.RestrictedGuildIds.updateSetting(e ? K.default.keys(B.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    V.default.track(et.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    eE({
      header: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: ea.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: ea.default.Messages.NO_TEXT,
      cancelText: ea.default.Messages.YES_TEXT,
      confirmButtonColor: _.Button.Colors.BRAND,
      onConfirm: () => {
        q.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        q.MessageRequestRestrictedDefault.updateSetting(e), q.MessageRequestRestrictedGuildIds.updateSetting(e ? K.default.keys(B.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    V.default.track(et.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, l.jsx)(l.Fragment, {
      children: (0, l.jsxs)(_.FormItem, {
        tag: _.FormTitleTags.H3,
        className: el.marginBottom20,
        title: ea.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, l.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: el.marginBottom8,
          children: ea.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: Y.default.getArticleURL(et.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, l.jsx)(_.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, W.generateExplicitImageOptions)(),
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
    let t = this.props.dmSpamFilter !== T.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = J.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : T.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H3,
        className: el.marginBottom20,
        children: [(0, l.jsx)(ec, {}), (0, l.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H5,
          className: el.marginBottom4,
          title: ea.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, l.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: el.marginBottom8,
            children: ea.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: Y.default.getArticleURL(et.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, l.jsx)(_.RadioGroup, {
            value: t,
            options: (0, W.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return q.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, l.jsx)(eo, {})]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H5,
        className: el.marginBottom40,
        title: ea.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, l.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H3,
          className: el.marginBottom4,
          title: ea.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, l.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: el.marginBottom8,
            children: ea.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: Y.default.getArticleURL(et.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, l.jsx)(_.RadioGroup, {
            value: t,
            options: (0, W.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return q.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, l.jsx)(eo, {})]
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
        className: el.marginBottom20,
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: el.marginBottom8,
          children: ea.default.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, l.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: el.marginBottom8,
          children: ea.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, l.jsx)(_.FormSwitch, {
          value: e,
          note: ea.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
          onChange: e => q.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: ea.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
        }), (0, l.jsx)(_.FormSwitch, {
          value: t,
          note: ea.default.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
          onChange: t => q.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: ea.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
        }), (0, l.jsx)(_.FormSwitch, {
          value: s,
          note: ea.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
          onChange: s => q.KeywordFilterSettings.updateSetting({
            profanity: e,
            slurs: t,
            sexualContent: s
          }),
          children: ea.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
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
      className: el.marginBottom40,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: el.marginBottom8,
        children: ea.default.Messages.USER_DM_SETTINGS
      }), (0, l.jsx)(_.FormSwitch, {
        value: !a,
        note: ea.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: ea.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, l.jsx)(_.FormSwitch, {
        value: !!n && e,
        note: ea.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !n,
        onChange: q.ViewNsfwGuilds.updateSetting,
        children: ea.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, l.jsx)(eu, {}), (0, l.jsx)(_.FormSwitch, {
        value: !!n && s,
        note: ea.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !n,
        onChange: q.ViewNsfwCommands.updateSetting,
        children: ea.default.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: el.marginBottom40,
      children: [(0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H5,
        className: el.marginBottom8,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, l.jsx)(_.FormSwitch, {
        value: e,
        note: ea.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, l.jsx)(_.FormSwitch, {
        value: t,
        note: ea.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, l.jsx)(_.FormSwitch, {
        value: !s,
        note: ea.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, l.jsx)("div", {
          children: ea.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        className: o()(el.marginTop20, el.marginBottom8),
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: el.marginBottom20,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            N.default.setSection(et.UserSettingsSections.ACCOUNT)
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
    } = this.state, n = (0, z.harvestDisabled)(a, t), r = (0, l.jsx)(_.Tooltip, {
      text: t.verified ? null : ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return n && null != a && (e = (0, l.jsx)(_.Card, {
      className: en.card,
      children: (0, l.jsx)(_.Text, {
        variant: "text-md/normal",
        children: ea.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: S()(a.created_at).add(et.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, l.jsx)(w.default, {
      children: r
    })), (0, l.jsxs)(i.Fragment, {
      children: [(0, l.jsx)(_.FormDivider, {
        className: el.marginBottom20
      }), (0, l.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H3,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, l.jsx)(_.FormText, {
        type: _.FormTextTypes.DESCRIPTION,
        className: el.marginBottom20,
        children: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, l.jsx)(_.FormSection, {
      className: el.marginBottom40,
      children: (0, l.jsx)(_.FormNotice, {
        type: _.FormNotice.Types.PRIMARY,
        body: ea.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: et.MarketingURLs.TERMS,
          privacyLink: et.MarketingURLs.PRIVACY
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
        className: el.marginBottom20
      }), (0, l.jsxs)(_.FormSection, {
        className: el.marginBottom40,
        children: [(0, l.jsx)(_.FormTitle, {
          tag: _.FormTitleTags.H5,
          className: el.marginBottom8,
          children: ea.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, l.jsxs)(_.FormItem, {
          tag: _.FormTitleTags.H5,
          className: el.marginBottom4,
          children: [(0, l.jsx)(_.FormText, {
            type: _.FormTextTypes.DESCRIPTION,
            className: el.marginBottom8,
            children: ea.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, l.jsx)(_.RadioGroup, {
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
    return (0, l.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: ea.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderKeywordFiltering(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: t,
      guildPrivacySettingsEnabled: s
    } = this.props, {
      selectedTab: a
    } = this.state;
    null != t && this.setState({
      selectedTab: t
    });
    let n = a === es.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(_.TabBar, {
        className: en.settingsTabBar,
        "aria-label": ea.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: a,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, l.jsx)(_.TabBar.Item, {
          className: en.settingsTabBarItem,
          id: es.SafetyHubView.SETTINGS,
          "aria-label": ea.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: ea.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), s ? (0, l.jsx)(_.TabBar.Item, {
          className: en.settingsTabBarItem,
          id: es.SafetyHubView.GUILD_SETTINGS,
          "aria-label": ea.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: ea.default.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, l.jsx)(_.TabBar.Item, {
          className: en.settingsTabBarItem,
          id: es.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": ea.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: ea.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, l.jsx)(_.TabBar.Panel, {
        id: a,
        "aria-labelledby": (0, H.uid)(),
        className: o()(en.contentPanel, {
          [en.contentPanelNagbar]: n
        }),
        children: (0, l.jsx)("div", {
          children: this.SETTINGS_TABS[a]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), ei(this, "SETTINGS_TABS", {
      [es.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [es.SafetyHubView.ACCOUNT_STANDING]: () => (0, l.jsx)(b.default, {}),
      [es.SafetyHubView.GUILD_SETTINGS]: () => (0, l.jsx)(er, {})
    }), ei(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), ei(this, "handleChangeDropsOptedOut", () => {
      q.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), ei(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eE({
        header: ea.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: ea.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: ea.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: ea.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, g.setConsents)([], [et.Consents.USAGE_STATISTICS]).catch(eT)
      }) : (0, g.setConsents)([et.Consents.USAGE_STATISTICS], []).catch(eT)
    }), ei(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eE({
        header: ea.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: ea.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: ea.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, g.setConsents)([], [et.Consents.PERSONALIZATION]).catch(eT)
        },
        body: ea.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, g.setConsents)([et.Consents.PERSONALIZATION], []).catch(eT)
    }), ei(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: Y.default.getArticleURL(et.HelpdeskArticles.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: _.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, I.requestHarvest)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), m.default.show({
                body: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : m.default.show({
                title: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => m.default.show({
              title: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: ea.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, _.openModal)(t => (0, l.jsx)(eS, {
        modalProps: t,
        settings: e
      }))
    }), ei(this, "handleTabSelect", e => {
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
      selectedTab: es.SafetyHubView.SETTINGS
    }
  }
}

function ef() {
  let e = (0, E.useStateFromStores)([k.default], () => {
      let e = k.default.getCurrentUser();
      return u()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, E.useStateFromStoresObject)([G.default], () => ({
      fetchedConsents: G.default.fetchedConsents,
      usageStatistics: G.default.hasConsented(et.Consents.USAGE_STATISTICS),
      personalization: G.default.hasConsented(et.Consents.PERSONALIZATION)
    })),
    s = (0, E.useStateFromStores)([P.default], () => P.default.getFetchError()),
    a = (0, E.useStateFromStores)([F.default], () => F.default.getSubsection()),
    n = (0, C.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, R.useIsEligibleForKeywordFiltering)({
      location: "web_user_privacy_and_safety_settings"
    }),
    r = (0, M.useKeywordFilterSettings)(),
    o = (0, D.default)(),
    d = (0, Q.useServerPrivacySettingsInUserSettingsEnabled)({
      location: "user_settings_privacy_safety"
    });
  return (0, l.jsx)(e_, {
    currentUser: e,
    defaultGuildsRestricted: q.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: q.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: q.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: q.ViewNsfwCommands.useSetting(),
    explicitContentFilter: q.ExplicitContentFilter.useSetting(),
    keywordFilter: r,
    dmSpamFilter: q.DmSpamFilterV2.useSetting(),
    showCurrentGame: q.ShowCurrentGame.useSetting(),
    dropsOptedOut: q.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: n,
    keywordFilteringEnabled: i,
    userIsConsideredAdult: null == o || o,
    subsection: a,
    guildPrivacySettingsEnabled: d,
    ...t
  })
}