"use strict";
s.r(t), s.d(t, {
  default: function() {
    return en
  }
}), s("47120"), s("733860"), s("773603");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
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
  N = s("688465"),
  p = s("610697"),
  C = s("880257"),
  A = s("236289"),
  O = s("518560"),
  x = s("237292"),
  R = s("604849"),
  M = s("278828"),
  v = s("480294"),
  D = s("430824"),
  L = s("663389"),
  P = s("594174"),
  j = s("285952"),
  b = s("153124"),
  U = s("626135"),
  y = s("63063"),
  B = s("78451"),
  F = s("709054"),
  G = s("88658"),
  k = s("695346"),
  w = s("3957"),
  H = s("279743"),
  V = s("973005"),
  Y = s("526761"),
  K = s("981631"),
  W = s("800530"),
  z = s("689938"),
  Q = s("274430"),
  Z = s("794711");

function q(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function X() {
  var e;
  let t = null === (e = (0, C.default)()) || void 0 === e || e,
    s = (0, x.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    n = (0, R.useSafetyAlertsSettingOrDefault)(),
    l = (0, w.useScrollToSetting)(Y.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return t || !s ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    }), (0, a.jsx)(E.FormSection, {
      ref: l,
      children: (0, a.jsxs)(E.FormItem, {
        className: i()(Q.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: Z.marginBottom8,
          children: z.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormSwitch, {
          value: n,
          note: z.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: y.default.getArticleURL(K.HelpdeskArticles.SAFETY_ALERTS)
          }),
          onChange: M.updateDmSafetyAlertsSetting,
          hideBorder: !0,
          children: z.default.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)(H.default, {
          animationDelay: 1e3,
          scrollPosition: Y.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function J(e, t) {
  U.default.track(K.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: t
  })
}

function $() {
  let e = (0, p.default)(),
    t = k.DefaultGuildsRestricted.useSetting(),
    s = k.MessageRequestRestrictedDefault.useSetting(),
    n = (0, w.useScrollToSetting)(Y.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS);
  return e ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Q.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormItem, {
        ref: n,
        children: (0, a.jsx)(E.FormSwitch, {
          value: !s,
          note: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: y.default.getArticleURL(K.HelpdeskArticles.MESSAGE_REQUESTS)
          }),
          disabled: t,
          onChange: () => {
            var e;
            return e = !s, void et({
              header: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: z.default.Messages.NO_TEXT,
              cancelText: z.default.Messages.YES_TEXT,
              confirmButtonColor: E.Button.Colors.BRAND,
              onConfirm: () => {
                k.MessageRequestRestrictedDefault.updateSetting(e), J(e, !1)
              },
              onCancel: () => {
                k.MessageRequestRestrictedDefault.updateSetting(e), k.MessageRequestRestrictedGuildIds.updateSetting(e ? F.default.keys(D.default.getGuilds()) : []), J(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)(H.default, {
        animationDelay: 700,
        scrollPosition: Y.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function ee() {
  var e;
  let t = null === (e = (0, C.default)()) || void 0 === e || e,
    {
      explicitContentGuilds: s,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: l
    } = (0, I.useExplicitContentSettingOrDefault)(),
    r = (0, w.useScrollToSetting)(Y.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS),
    o = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: z.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: z.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    d = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: z.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    u = {
      value: S.ExplicitContentRedaction.SHOW,
      label: z.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return t && (o.unshift(u), d.unshift(u)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: Q.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: Z.marginBottom8,
        children: (0, a.jsxs)("div", {
          className: i()(Q.betaTagContainer),
          children: [z.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, (0, a.jsx)(N.default, {
            className: Q.betaTagIcon
          })]
        })
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom8,
        children: z.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: y.default.getArticleURL(K.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        ref: r,
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: z.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: o,
          value: n,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: z.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: o,
          value: l,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), t && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: z.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: d,
          value: s,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(H.default, {
        scrollPosition: Y.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(E.FormDivider, {
      className: Z.marginBottom20
    })]
  })
}

function et(e) {
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

function es(e) {
  let {
    message: t
  } = e;
  et({
    header: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: z.default.Messages.OKAY,
    body: t
  })
}
class ea extends n.PureComponent {
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
    et({
      header: z.default.Messages.USER_DM_SETTINGS_TITLE,
      body: z.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: z.default.Messages.NO_TEXT,
      cancelText: z.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        k.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        k.DefaultGuildsRestricted.updateSetting(e), k.RestrictedGuildIds.updateSetting(e ? F.default.keys(D.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    U.default.track(K.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    et({
      header: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: z.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: z.default.Messages.NO_TEXT,
      cancelText: z.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        k.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        k.MessageRequestRestrictedDefault.updateSetting(e), k.MessageRequestRestrictedGuildIds.updateSetting(e ? F.default.keys(D.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    U.default.track(K.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        title: z.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: Z.marginBottom8,
          children: z.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: y.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, B.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? k.DmSpamFilterV2.updateSetting(e).then(() => {
              k.ExplicitContentFilter.updateSetting(s)
            }) : k.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = V.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: Z.marginBottom20,
        children: [(0, a.jsx)(ee, {}), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom4,
          title: z.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: z.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, B.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return k.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(X, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: Z.marginBottom40,
        title: z.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: Z.marginBottom4,
          title: z.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: z.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(K.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, B.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return k.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), (0, a.jsx)(X, {})]
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
        children: z.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !n,
        note: z.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: z.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!l && e,
        note: z.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !l,
        onChange: k.ViewNsfwGuilds.updateSetting,
        children: z.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), (0, a.jsx)($, {}), (0, a.jsx)(E.FormSwitch, {
        value: !!l && s,
        note: z.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !l,
        onChange: k.ViewNsfwCommands.updateSetting,
        children: z.default.Messages.NSFW_DM_COMMANDS_HEADER
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
        children: z.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: z.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(K.HelpdeskArticles.DATA_USED_TO_IMPROVE_DISCORD)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: z.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: y.default.getArticleURL(K.HelpdeskArticles.DATA_USED_FOR_RECOMMENDED)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s,
        note: z.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
          helpdeskArticle: y.default.getArticleURL(K.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsx)("div", {
          children: z.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i()(Z.marginTop20, Z.marginBottom8),
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom20,
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
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
    } = this.state, i = (0, G.harvestDisabled)(l, t), r = (0, a.jsx)(E.Tooltip, {
      text: t.verified ? null : z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: Q.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: z.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u()(l.created_at).add(K.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(j.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: Z.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: Z.marginBottom20,
        children: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(K.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: Z.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: z.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
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
          children: z.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: Z.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: Z.marginBottom8,
            children: z.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, G.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? G.NonSpamRetrainingOptInOptions.UNDECIDED : t ? G.NonSpamRetrainingOptInOptions.OPTIN : G.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return k.NonSpamRetrainingOptIn.updateSetting(G.NonSpamRetrainingOptInOptionsToValue[t])
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
      title: z.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
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
    let n = s === W.SafetyHubView.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.TabBar, {
        className: Q.settingsTabBar,
        "aria-label": z.default.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: s,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [(0, a.jsx)(E.TabBar.Item, {
          className: Q.settingsTabBarItem,
          id: W.SafetyHubView.SETTINGS,
          "aria-label": z.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: z.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), (0, a.jsx)(E.TabBar.Item, {
          className: Q.settingsTabBarItem,
          id: W.SafetyHubView.ACCOUNT_STANDING,
          "aria-label": z.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: z.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        })]
      }), (0, a.jsx)(E.TabBar.Panel, {
        id: s,
        "aria-labelledby": (0, b.uid)(),
        className: i()(Q.contentPanel, {
          [Q.contentPanelNagbar]: n
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[s]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), q(this, "SETTINGS_TABS", {
      [W.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [W.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(O.default, {})
    }), q(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), q(this, "handleChangeDropsOptedOut", () => {
      k.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }), q(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? et({
        header: z.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: z.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: z.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: z.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, f.setConsents)([], [K.Consents.USAGE_STATISTICS]).catch(es)
      }) : (0, f.setConsents)([K.Consents.USAGE_STATISTICS], []).catch(es)
    }), q(this, "handlePersonalizationChange", () => {
      this.props.personalization ? et({
        header: z.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: z.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: z.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, f.setConsents)([], [K.Consents.PERSONALIZATION]).catch(es)
        },
        body: z.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, f.setConsents)([K.Consents.PERSONALIZATION], []).catch(es)
    }), q(this, "handleDataDownloadRequest", () => {
      et({
        header: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, m.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), T.default.show({
                body: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : T.default.show({
                title: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => T.default.show({
              title: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: z.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }), q(this, "handleTabSelect", e => {
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
      selectedTab: W.SafetyHubView.SETTINGS
    }
  }
}

function en() {
  let e = (0, c.useStateFromStores)([P.default], () => {
      let e = P.default.getCurrentUser();
      return o()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([v.default], () => ({
      fetchedConsents: v.default.fetchedConsents,
      usageStatistics: v.default.hasConsented(K.Consents.USAGE_STATISTICS),
      personalization: v.default.hasConsented(K.Consents.PERSONALIZATION)
    })),
    s = (0, c.useStateFromStores)([A.default], () => A.default.getFetchError()),
    n = (0, c.useStateFromStores)([L.default], () => L.default.getSubsection()),
    l = (0, g.useIsEligibleForExplicitMediaRedaction)(),
    i = (0, C.default)();
  return (0, a.jsx)(ea, {
    currentUser: e,
    defaultGuildsRestricted: k.DefaultGuildsRestricted.useSetting(),
    nonSpamRetrainingOptIn: k.NonSpamRetrainingOptIn.useSetting(),
    viewNsfwGuilds: k.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: k.ViewNsfwCommands.useSetting(),
    explicitContentFilter: k.ExplicitContentFilter.useSetting(),
    dmSpamFilter: k.DmSpamFilterV2.useSetting(),
    showCurrentGame: k.ShowCurrentGame.useSetting(),
    dropsOptedOut: k.DropsOptedOut.useSetting(),
    safetyHubFetchError: s,
    mediaRedactionIsEnabled: l,
    userIsConsideredAdult: null == i || i,
    subsection: n,
    ...t
  })
}