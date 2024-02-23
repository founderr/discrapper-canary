"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("222007"), s("843762"), s("506083");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("627445"),
  o = s.n(r),
  d = s("866227"),
  u = s.n(d),
  c = s("446674"),
  S = s("151426"),
  E = s("77078"),
  T = s("404118"),
  f = s("629803"),
  m = s("152584"),
  _ = s("79112"),
  g = s("457971"),
  h = s("447435"),
  N = s("10130"),
  I = s("298878"),
  p = s("916650"),
  C = s("775032"),
  A = s("36978"),
  O = s("646356"),
  x = s("861348"),
  R = s("761771"),
  M = s("328564"),
  D = s("281098"),
  v = s("350522"),
  L = s("305961"),
  P = s("26092"),
  j = s("697218"),
  b = s("145131"),
  U = s("476765"),
  B = s("599110"),
  y = s("701909"),
  F = s("62418"),
  G = s("299039"),
  k = s("241088"),
  H = s("845579"),
  w = s("568456"),
  V = s("49111"),
  Y = s("170213"),
  W = s("782340"),
  K = s("718074"),
  z = s("890957");

function Q(e) {
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

function q(e) {
  let {
    message: t
  } = e;
  Q({
    header: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: W.default.Messages.OKAY,
    body: t
  })
}
class Z extends n.PureComponent {
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
    Q({
      header: W.default.Messages.USER_DM_SETTINGS_TITLE,
      body: W.default.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: W.default.Messages.NO_TEXT,
      cancelText: W.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        H.DefaultGuildsRestricted.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        H.DefaultGuildsRestricted.updateSetting(e), H.RestrictedGuildIds.updateSetting(e ? G.default.keys(L.default.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, t) {
    B.default.track(V.AnalyticEvents.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  showMessageRequestRestrictionModal(e) {
    Q({
      header: W.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: W.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: W.default.Messages.NO_TEXT,
      cancelText: W.default.Messages.YES_TEXT,
      confirmButtonColor: E.Button.Colors.BRAND,
      onConfirm: () => {
        H.MessageRequestRestrictedDefault.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        H.MessageRequestRestrictedDefault.updateSetting(e), H.MessageRequestRestrictedGuildIds.updateSetting(e ? G.default.keys(L.default.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, t) {
    B.default.track(V.AnalyticEvents.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: t
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: z.marginBottom20,
        title: W.default.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(E.FormText, {
          type: E.FormTextTypes.DESCRIPTION,
          className: z.marginBottom8,
          children: W.default.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: y.default.getArticleURL(V.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(E.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, F.generateExplicitImageOptions)(),
          onChange: t => {
            let {
              value: s
            } = t;
            this.props.dmSpamFilter === S.DmSpamFilterV2.DEFAULT_UNSET ? H.DmSpamFilterV2.updateSetting(e).then(() => {
              H.ExplicitContentFilter.updateSetting(s)
            }) : H.ExplicitContentFilter.updateSetting(s)
          }
        })]
      })
    })
  }
  renderSelfModExplicitContentSettings() {
    let {
      explicitContentSettingGuilds: e,
      explicitContentSettingFriendDm: t,
      explicitContentSettingNonFriendDm: s,
      userIsConsideredAdult: n
    } = this.props, l = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: W.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.ExplicitContentRedaction.BLOCK,
      label: W.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }], r = [{
      value: S.ExplicitContentRedaction.BLUR,
      label: W.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }], o = {
      value: S.ExplicitContentRedaction.SHOW,
      label: W.default.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
    return n && (l.unshift(o), r.unshift(o)), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        faded: !0,
        className: z.marginBottom8,
        children: (0, a.jsxs)("div", {
          className: i(K.betaTagContainer),
          children: [W.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, (0, a.jsx)(I.default, {
            className: K.betaTagIcon
          })]
        })
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: z.marginBottom8,
        children: W.default.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: y.default.getArticleURL(V.HelpdeskArticles.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: z.marginBottom20,
        title: W.default.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: l,
          value: t,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: z.marginBottom20,
        title: W.default.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: l,
          value: s,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentNonFriendDm: e
          })
        })
      }), n && (0, a.jsx)(E.FormItem, {
        tag: E.FormTitleTags.H3,
        className: z.marginBottom20,
        title: W.default.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(E.SingleSelect, {
          options: r,
          value: e,
          onChange: e => (0, h.updateExplicitContentSetting)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(E.FormDivider, {
        className: z.marginBottom20
      })]
    })
  }
  renderDmSafetyAlerts() {
    let {
      isEligibleForSafetyAlerts: e,
      dmSafetyAlerts: t,
      userIsConsideredAdult: s
    } = this.props;
    return s || !e ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: z.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: z.marginBottom20,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          faded: !0,
          className: z.marginBottom8,
          children: W.default.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(E.FormItem, {
          children: (0, a.jsx)(E.FormSwitch, {
            value: t,
            note: W.default.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
              learnMoreLink: y.default.getArticleURL(V.HelpdeskArticles.SAFETY_ALERTS)
            }),
            onChange: D.updateDmSafetyAlertsSetting,
            children: W.default.Messages.SAFETY_ALERTS_SETTING_TITLE
          })
        })]
      })]
    })
  }
  renderDMSafety() {
    var e;
    let t = this.props.dmSpamFilter !== S.DmSpamFilterV2.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = w.ExplicitContentFilterToDmSpamFilterV2.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.DmSpamFilterV2.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H3,
        className: z.marginBottom20,
        children: [this.renderSelfModExplicitContentSettings(), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: z.marginBottom4,
          title: W.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: z.marginBottom8,
            children: W.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(V.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, F.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return H.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), this.renderDmSafetyAlerts()]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.FormSection, {
        tag: E.FormTitleTags.H5,
        className: z.marginBottom40,
        title: W.default.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(t), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H3,
          className: z.marginBottom4,
          title: W.default.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: z.marginBottom8,
            children: W.default.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: y.default.getArticleURL(V.HelpdeskArticles.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(E.RadioGroup, {
            value: t,
            options: (0, F.generateDmSpamOptions)(),
            onChange: e => {
              let {
                value: t
              } = e;
              return H.DmSpamFilterV2.updateSetting(t)
            }
          })]
        })]
      }), this.renderDmSafetyAlerts()]
    })
  }
  renderServerPrivacy() {
    let {
      viewNsfwGuilds: e,
      currentUser: t,
      isStricterMessageRequests: s,
      viewNsfwCommands: n
    } = this.props, {
      defaultGuildsRestricted: l,
      defaultMessageRequestRestricted: i
    } = this.state, r = !0 === t.nsfwAllowed;
    return (0, a.jsxs)(E.FormSection, {
      className: z.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: z.marginBottom8,
        children: W.default.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(E.FormSwitch, {
        value: !l,
        note: W.default.Messages.USER_DM_SETTINGS_HELP,
        onChange: this.handleChangeDefaultGuildsRestricted,
        children: W.default.Messages.NEW_GUILDS_DM_ALLOWED
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!r && e,
        note: W.default.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
        disabled: !r,
        onChange: H.ViewNsfwGuilds.updateSetting,
        children: W.default.Messages.NSFW_GUILDS_TOGGLE_HEADER
      }), !s && (0, a.jsx)(E.FormSwitch, {
        value: !i,
        note: W.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
          helpdeskArticle: y.default.getArticleURL(V.HelpdeskArticles.MESSAGE_REQUESTS)
        }),
        disabled: l,
        onChange: this.handleChangeDefaultMessageRequestRestricted,
        children: W.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
      }), (0, a.jsx)(E.FormSwitch, {
        value: !!r && n,
        note: W.default.Messages.NSFW_DM_COMMANDS_CAPTION,
        disabled: !r,
        onChange: H.ViewNsfwCommands.updateSetting,
        children: W.default.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: z.marginBottom40,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: z.marginBottom8,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(E.FormSwitch, {
        value: e,
        note: W.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(V.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        onChange: this.handleUsageStatisticsChange,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: t,
        note: W.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
          helpdeskArticle: y.default.getArticleURL(V.HelpdeskArticles.DATA_PRIVACY_CONTROLS)
        }),
        hideBorder: !0,
        onChange: this.handlePersonalizationChange,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
      }), (0, a.jsx)(E.FormSwitch, {
        value: !s && t,
        note: (0, a.jsxs)("div", {
          className: K.dependentSetting,
          children: [W.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_NOTE, s ? (0, a.jsx)("div", {
            className: i(z.marginTop8, K.feedback),
            children: W.default.Messages.DROPS_REQUEST_FEEDBACK_OPT_OUT.format({
              feedbackURL: "https://survey.alchemer.com/s3/7043738/Discord-Drops-Opt-Out-Survey?user_id=".concat(this.props.currentUser.id)
            })
          }) : null]
        }),
        disabled: !t,
        onChange: this.handleChangeDropsOptedOut,
        children: (0, a.jsxs)("div", {
          className: i(K.betaTagContainer, K.dependentSetting),
          children: [W.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT, (0, a.jsx)(I.default, {
            className: K.betaTagIcon
          })]
        })
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        className: i(z.marginTop20, z.marginBottom8),
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: z.marginBottom20,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
          onClick: () => {
            _.default.setSection(V.UserSettingsSections.ACCOUNT)
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
      text: t.verified ? null : W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != l && (e = (0, a.jsx)(E.Card, {
      className: K.card,
      children: (0, a.jsx)(E.Text, {
        variant: "text-md/normal",
        children: W.default.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: u(l.created_at).add(V.REQUEST_DATA_LIMIT_DAYS, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(b.default, {
      children: r
    })), (0, a.jsxs)(n.Fragment, {
      children: [(0, a.jsx)(E.FormDivider, {
        className: z.marginBottom20
      }), (0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H3,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(E.FormText, {
        type: E.FormTextTypes.DESCRIPTION,
        className: z.marginBottom20,
        children: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: y.default.getArticleURL(V.HelpdeskArticles.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(E.FormSection, {
      className: z.marginBottom40,
      children: (0, a.jsx)(E.FormNotice, {
        type: E.FormNotice.Types.PRIMARY,
        body: W.default.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: V.MarketingURLs.TERMS,
          privacyLink: V.MarketingURLs.PRIVACY
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
        className: z.marginBottom20
      }), (0, a.jsxs)(E.FormSection, {
        className: z.marginBottom40,
        children: [(0, a.jsx)(E.FormTitle, {
          tag: E.FormTitleTags.H5,
          className: z.marginBottom8,
          children: W.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(E.FormItem, {
          tag: E.FormTitleTags.H5,
          className: z.marginBottom4,
          children: [(0, a.jsx)(E.FormText, {
            type: E.FormTextTypes.DESCRIPTION,
            className: z.marginBottom8,
            children: W.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(E.RadioGroup, {
            options: (0, k.generateNonSpamRetrainingOptInSettingOptions)(),
            value: null == t ? k.NonSpamRetrainingOptInOptions.UNDECIDED : t ? k.NonSpamRetrainingOptInOptions.OPTIN : k.NonSpamRetrainingOptInOptions.OPTOUT,
            onChange: e => {
              let {
                value: t
              } = e;
              return H.NonSpamRetrainingOptIn.updateSetting(k.NonSpamRetrainingOptInOptionsToValue[t])
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
      title: W.default.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), this.renderServerPrivacy(), e ? this.renderDataPrivacy() : null, this.renderPrivacyAndTermsNote(), this.renderStaffOnlySettings()]
    })
  }
  render() {
    let {
      safetyHubIsEnabled: e,
      safetyHubFetchError: t,
      subsection: s
    } = this.props, {
      selectedTab: n
    } = this.state;
    if (e) {
      null != s && this.setState({
        selectedTab: s
      });
      let e = n === Y.SafetyHubView.ACCOUNT_STANDING && null != t;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(E.TabBar, {
          className: K.settingsTabBar,
          "aria-label": W.default.Messages.SAFETY_HUB_PAGE_TITLE,
          selectedItem: n,
          type: "top",
          look: "brand",
          onItemSelect: this.handleTabSelect,
          children: [(0, a.jsx)(E.TabBar.Item, {
            className: K.settingsTabBarItem,
            id: Y.SafetyHubView.SETTINGS,
            "aria-label": W.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
            children: W.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
          }), (0, a.jsx)(E.TabBar.Item, {
            className: K.settingsTabBarItem,
            id: Y.SafetyHubView.ACCOUNT_STANDING,
            "aria-label": W.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            children: W.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
          })]
        }), (0, a.jsx)(E.TabBar.Panel, {
          id: n,
          "aria-labelledby": (0, U.uid)(),
          className: [e ? K.contentPanelNagbar : "", K.contentPanel].join(" "),
          children: (0, a.jsx)("div", {
            children: this.SETTINGS_TABS[n]()
          })
        })]
      })
    }
    return this.renderSettingsBody()
  }
  constructor(e) {
    super(e), this.SETTINGS_TABS = {
      [Y.SafetyHubView.SETTINGS]: () => this.renderSettingsBody(),
      [Y.SafetyHubView.ACCOUNT_STANDING]: () => (0, a.jsx)(x.default, {})
    }, this.handleChangeDefaultGuildsRestricted = e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }, this.handleChangeDropsOptedOut = () => {
      this.props.personalization && H.DropsOptedOut.updateSetting(!this.props.dropsOptedOut)
    }, this.handleChangeDefaultMessageRequestRestricted = e => {
      this.setState({
        defaultMessageRequestRestricted: !e
      }, () => this.showMessageRequestRestrictionModal(!e))
    }, this.handleUsageStatisticsChange = () => {
      let e = !this.props.usageStatistics;
      e ? (0, f.setConsents)([V.Consents.USAGE_STATISTICS], []).catch(q) : Q({
        header: W.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: W.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: W.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: W.default.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, f.setConsents)([], [V.Consents.USAGE_STATISTICS]).catch(q)
      })
    }, this.handlePersonalizationChange = () => {
      let e = !this.props.personalization;
      e ? (0, f.setConsents)([V.Consents.PERSONALIZATION], []).catch(q) : Q({
        header: W.default.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: W.default.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: W.default.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, f.setConsents)([], [V.Consents.PERSONALIZATION]).catch(q), H.DropsOptedOut.updateSetting(!0)
        },
        body: W.default.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      })
    }, this.handleDataDownloadRequest = () => {
      Q({
        header: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_NOTE,
        confirmText: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        onConfirm: () => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, m.requestHarvest)().then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), T.default.show({
                body: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : T.default.show({
                title: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => T.default.show({
              title: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: W.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      })
    }, this.handleTabSelect = e => {
      this.setState({
        selectedTab: e
      })
    };
    let {
      defaultGuildsRestricted: t,
      defaultMessageRequestRestricted: s
    } = e;
    this.state = {
      defaultGuildsRestricted: t,
      defaultMessageRequestRestricted: s,
      currentHarvestRequest: null,
      requestingHarvest: !0,
      selectedTab: Y.SafetyHubView.SETTINGS
    }
  }
}

function X() {
  let e = (0, c.useStateFromStores)([j.default], () => {
      let e = j.default.getCurrentUser();
      return o(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    t = (0, c.useStateFromStoresObject)([v.default], () => ({
      fetchedConsents: v.default.fetchedConsents,
      usageStatistics: v.default.hasConsented(V.Consents.USAGE_STATISTICS),
      personalization: v.default.hasConsented(V.Consents.PERSONALIZATION)
    })),
    s = (0, A.useIsSafetyHubEnabled)(),
    n = (0, c.useStateFromStores)([O.default], () => O.default.getFetchError()),
    l = (0, c.useStateFromStores)([P.default], () => P.default.getSubsection()),
    i = (0, g.useIsEligibleForExplicitMediaRedaction)(),
    r = (0, N.useExplicitContentSettingOrDefault)(),
    d = (0, C.default)(),
    u = (0, R.useIsEligibleForInappropriateConversationWarning)({
      location: "user_settings_web"
    }),
    S = (0, M.useSafetyAlertsSettingOrDefault)();
  return (0, a.jsx)(Z, {
    currentUser: e,
    defaultGuildsRestricted: H.DefaultGuildsRestricted.useSetting(),
    defaultMessageRequestRestricted: H.MessageRequestRestrictedDefault.useSetting(),
    nonSpamRetrainingOptIn: H.NonSpamRetrainingOptIn.useSetting(),
    isStricterMessageRequests: (0, p.default)(),
    viewNsfwGuilds: H.ViewNsfwGuilds.useSetting(),
    viewNsfwCommands: H.ViewNsfwCommands.useSetting(),
    explicitContentFilter: H.ExplicitContentFilter.useSetting(),
    dmSpamFilter: H.DmSpamFilterV2.useSetting(),
    showCurrentGame: H.ShowCurrentGame.useSetting(),
    dropsOptedOut: H.DropsOptedOut.useSetting(),
    safetyHubIsEnabled: s,
    safetyHubFetchError: n,
    mediaRedactionIsEnabled: i,
    explicitContentSettingGuilds: r.explicitContentGuilds,
    explicitContentSettingFriendDm: r.explicitContentFriendDm,
    explicitContentSettingNonFriendDm: r.explicitContentNonFriendDm,
    userIsConsideredAdult: null == d || d,
    isEligibleForSafetyAlerts: u,
    dmSafetyAlerts: S,
    subsection: l,
    ...t
  })
}