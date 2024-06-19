t.d(s, {
  Z: function() {
    return em
  }
}), t(47120), t(733860), t(773603);
var n, i, a = t(735250),
  l = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(512722),
  E = t.n(c),
  d = t(913527),
  _ = t.n(d),
  T = t(442837),
  S = t(524437),
  u = t(481060),
  I = t(570140),
  N = t(668781),
  A = t(409700),
  C = t(809206),
  O = t(230711),
  m = t(241420),
  h = t(651530),
  g = t(163268),
  R = t(294602),
  M = t(778825),
  x = t(856768),
  D = t(592204),
  p = t(712950),
  L = t(610697),
  P = t(880257),
  Z = t(16703),
  f = t(977059),
  v = t(236289),
  j = t(518560),
  U = t(237292),
  B = t(604849),
  b = t(278828),
  G = t(921801),
  F = t(480294),
  V = t(430824),
  y = t(663389),
  Y = t(594174),
  H = t(285952),
  k = t(153124),
  w = t(626135),
  W = t(63063),
  K = t(78451),
  z = t(709054),
  Q = t(88658),
  X = t(263399),
  q = t(695346),
  J = t(3957),
  $ = t(279743),
  ee = t(76793),
  es = t(839469),
  et = t(973005),
  en = t(703115),
  ei = t(526761),
  ea = t(726985),
  el = t(981631),
  er = t(800530),
  eo = t(689938),
  ec = t(117345),
  eE = t(331651);

function ed(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function e_() {
  let e = (0, T.e7)([M.Z], () => M.Z.getGuild()),
    s = (0, Z.Z)(),
    t = null != e ? e : s;
  l.useEffect(() => {
    w.default.track(el.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: en.Y.VIEW_SETTINGS_PAGE
    })
  }, []);
  let n = l.useCallback(e => {
    null != e && I.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), w.default.track(el.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: en.Y.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == t ? null : (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: eo.Z.Messages.PRIVACY_AND_SAFETY,
    children: [(0, a.jsx)(x.Z, {
      className: ec.guildSelector,
      guildId: t.id,
      onChange: n
    }), (0, a.jsx)(m.ConnectedPrivacySettings, {
      guild: t,
      ingress: m.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
    })]
  })
}

function eT() {
  var e;
  let s = null === (e = (0, P.Z)()) || void 0 === e || e,
    t = (0, U.y0)({
      location: "user_settings_web"
    }),
    n = (0, B.c)(),
    i = (0, J.a)(ei.to.DM_SAFETY_ALERTS);
  return s || !t ? null : (0, a.jsxs)(G.F, {
    setting: ea.s6.PRIVACY_SAFETY_ALERTS,
    children: [(0, a.jsx)(u.FormDivider, {
      className: eE.marginBottom20
    }), (0, a.jsx)(u.FormSection, {
      ref: i,
      children: (0, a.jsxs)(u.FormItem, {
        className: o()(ec.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          faded: !0,
          className: eE.marginBottom8,
          children: eo.Z.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          value: n,
          note: eo.Z.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: W.Z.getArticleURL(el.BhN.SAFETY_ALERTS)
          }),
          onChange: b.Q,
          hideBorder: !0,
          children: eo.Z.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)($.Z, {
          animationDelay: 1e3,
          scrollPosition: ei.to.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(u.FormDivider, {
      className: eE.marginBottom20
    })]
  })
}

function eS(e, s) {
  w.default.track(el.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: s
  })
}

function eu() {
  let e = (0, L.Z)(),
    s = q.iG.useSetting(),
    t = q.mX.useSetting(),
    n = (0, J.a)(ei.to.DM_SAFETY_ALERTS);
  return e ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: ec.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(u.FormItem, {
        ref: n,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !t,
          note: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: W.Z.getArticleURL(el.BhN.MESSAGE_REQUESTS)
          }),
          disabled: s,
          onChange: () => {
            var e;
            return e = !t, void eA({
              header: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: eo.Z.Messages.NO_TEXT,
              cancelText: eo.Z.Messages.YES_TEXT,
              confirmButtonColor: u.Button.Colors.BRAND,
              onConfirm: () => {
                q.mX.updateSetting(e), eS(e, !1)
              },
              onCancel: () => {
                q.mX.updateSetting(e), q.zA.updateSetting(e ? z.default.keys(V.Z.getGuilds()) : []), eS(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)($.Z, {
        animationDelay: 700,
        scrollPosition: ei.to.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: eE.marginBottom20
    })]
  })
}

function eI() {
  var e;
  let s = null === (e = (0, P.Z)()) || void 0 === e || e,
    {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: i
    } = (0, R.B)(),
    l = (0, J.a)(ei.to.DM_SAFETY_ALERTS),
    r = [{
      value: S.Q4.BLUR,
      label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.Q4.BLOCK,
      label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: S.Q4.BLUR,
      label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    c = {
      value: S.Q4.SHOW,
      label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return s && (r.unshift(c), o.unshift(c)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: ec.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        faded: !0,
        className: eE.marginBottom8,
        children: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: eE.marginBottom8,
        children: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: W.Z.getArticleURL(el.BhN.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(u.FormItem, {
        ref: l,
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, g.zj)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: r,
          value: i,
          onChange: e => (0, g.zj)({
            explicitContentNonFriendDm: e
          })
        })
      }), s && (0, a.jsx)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: o,
          value: t,
          onChange: e => (0, g.zj)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)($.Z, {
        scrollPosition: ei.to.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: eE.marginBottom20
    })]
  })
}

function eN(e) {
  let {
    modalProps: s,
    settings: {
      onConfirm: t,
      ...n
    }
  } = e, [i, r] = l.useState({
    Account: {
      value: "Account",
      label: eo.Z.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Analytics: {
      value: "Analytics",
      label: eo.Z.Messages.HARVEST_BACKEND_ANALYTICS,
      checked: !1
    },
    Activities: {
      value: "Activities",
      label: eo.Z.Messages.HARVEST_BACKEND_ACTIVITIES,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: eo.Z.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Programs: {
      value: "Programs",
      label: eo.Z.Messages.HARVEST_BACKEND_HUBSPOT,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: eo.Z.Messages.HARVEST_BACKEND_GUILDS,
      checked: !1
    }
  }), o = e => (s, t) => {
    r(s => ({
      ...s,
      [e]: {
        ...s[e],
        checked: t
      }
    }))
  };
  return (0, a.jsxs)(u.ConfirmModal, {
    ...s,
    ...n,
    onConfirm: () => {
      let e = Object.keys(i).filter(e => i[e].checked).map(e => i[e].value);
      null == t || t(e)
    },
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      style: {
        marginBottom: "5px"
      },
      children: n.body
    }), Object.keys(i).map(e => {
      let {
        label: s,
        checked: t
      } = i[e];
      return (0, a.jsx)(u.Checkbox, {
        type: u.Checkbox.Types.INVERTED,
        value: t,
        style: {
          marginBottom: "2px"
        },
        onChange: o(e),
        children: (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          children: s
        })
      }, e)
    })]
  })
}(i = n || (n = {})).USERS = "Account", i.MESSAGES = "Messages", i.GUILDS = "Servers", i.ANALYTICS = "Analytics", i.ACTIVITIES = "Activities", i.HUBSPOT = "Programs";

function eA(e) {
  let {
    body: s,
    ...t
  } = e;
  (0, u.openModal)(e => (0, a.jsx)(u.ConfirmModal, {
    ...e,
    ...t,
    children: (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      children: s
    })
  }))
}

function eC(e) {
  let {
    message: s
  } = e;
  eA({
    header: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: eo.Z.Messages.OKAY,
    body: s
  })
}
class eO extends l.PureComponent {
  componentDidMount() {
    (0, A.I)(), (0, C.ol)().then(e => {
      let s = {
        requestingHarvest: !1,
        currentHarvestRequest: e.body
      };
      this.setState(s)
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
    eA({
      header: eo.Z.Messages.USER_DM_SETTINGS_TITLE,
      body: eo.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: eo.Z.Messages.NO_TEXT,
      cancelText: eo.Z.Messages.YES_TEXT,
      confirmButtonColor: u.Button.Colors.BRAND,
      onConfirm: () => {
        q.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        q.iG.updateSetting(e), q.h2.updateSetting(e ? z.default.keys(V.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, s) {
    w.default.track(el.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: s
    })
  }
  showMessageRequestRestrictionModal(e) {
    eA({
      header: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: eo.Z.Messages.NO_TEXT,
      cancelText: eo.Z.Messages.YES_TEXT,
      confirmButtonColor: u.Button.Colors.BRAND,
      onConfirm: () => {
        q.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        q.mX.updateSetting(e), q.zA.updateSetting(e ? z.default.keys(V.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, s) {
    w.default.track(el.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: s
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        title: eo.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: eE.marginBottom8,
          children: eo.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: W.Z.getArticleURL(el.BhN.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(u.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, K.X7)(),
          onChange: s => {
            let {
              value: t
            } = s;
            this.props.dmSpamFilter === S.Xr.DEFAULT_UNSET ? q.Xr.updateSetting(e).then(() => {
              q.UP.updateSetting(t)
            }) : q.UP.updateSetting(t)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let s = this.props.dmSpamFilter !== S.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = et.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.Xr.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        children: [(0, a.jsx)(G.F, {
          setting: ea.s6.PRIVACY_SENSITIVE_MEDIA,
          children: (0, a.jsx)(eI, {})
        }), (0, a.jsx)(G.F, {
          setting: ea.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: (0, a.jsxs)(u.FormItem, {
            tag: u.FormTitleTags.H5,
            className: eE.marginBottom4,
            title: eo.Z.Messages.USER_DM_SPAM_FILTER,
            children: [(0, a.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              className: eE.marginBottom8,
              children: eo.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: W.Z.getArticleURL(el.BhN.SAFE_DIRECT_MESSAGING)
              })
            }), (0, a.jsx)(u.RadioGroup, {
              value: s,
              options: (0, K.c7)(),
              onChange: e => {
                let {
                  value: s
                } = e;
                return q.Xr.updateSetting(s)
              }
            })]
          })
        })]
      }), (0, a.jsx)(eT, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        className: eE.marginBottom40,
        title: eo.Z.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(s), (0, a.jsxs)(u.FormItem, {
          tag: u.FormTitleTags.H3,
          className: eE.marginBottom4,
          title: eo.Z.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: eE.marginBottom8,
            children: eo.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: W.Z.getArticleURL(el.BhN.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(u.RadioGroup, {
            value: s,
            options: (0, K.c7)(),
            onChange: e => {
              let {
                value: s
              } = e;
              return q.Xr.updateSetting(s)
            }
          })]
        })]
      }), (0, a.jsx)(eT, {})]
    })
  }
  renderKeywordFiltering() {
    if (!this.props.keywordFilteringEnabled) return null;
    let {
      profanity: e,
      slurs: s,
      sexualContent: t
    } = this.props.keywordFilter;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H3,
        className: eE.marginBottom20,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          className: eE.marginBottom8,
          children: eo.Z.Messages.USER_KEYWORD_FILTERS_TITLE
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: eE.marginBottom8,
          children: eo.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION
        }), (0, a.jsx)(G.F, {
          setting: ea.s6.PRIVACY_KEYWORD_FILTER_PROFANITY,
          children: (0, a.jsx)(u.FormSwitch, {
            value: e,
            note: eo.Z.Messages.USER_KEYWORD_FILTERS_PROFANITY_DESCRIPTION,
            onChange: e => q.gw.updateSetting({
              profanity: e,
              slurs: s,
              sexualContent: t
            }),
            children: eo.Z.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE
          })
        }), (0, a.jsx)(G.F, {
          setting: ea.s6.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS,
          children: (0, a.jsx)(u.FormSwitch, {
            value: s,
            note: eo.Z.Messages.USER_KEYWORD_FILTERS_SLURS_DESCRIPTION,
            onChange: s => q.gw.updateSetting({
              profanity: e,
              slurs: s,
              sexualContent: t
            }),
            children: eo.Z.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE
          })
        }), (0, a.jsx)(G.F, {
          setting: ea.s6.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT,
          children: (0, a.jsx)(u.FormSwitch, {
            value: t,
            note: eo.Z.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_DESCRIPTION,
            onChange: t => q.gw.updateSetting({
              profanity: e,
              slurs: s,
              sexualContent: t
            }),
            children: eo.Z.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE
          })
        })]
      })
    })
  }
  renderServerPrivacy() {
    let {
      viewNsfwGuilds: e,
      currentUser: s,
      viewNsfwCommands: t
    } = this.props, {
      defaultGuildsRestricted: n
    } = this.state, i = !0 === s.nsfwAllowed;
    return (0, a.jsxs)(u.FormSection, {
      className: eE.marginBottom40,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: eE.marginBottom8,
        children: eo.Z.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !n,
          note: eo.Z.Messages.USER_DM_SETTINGS_HELP,
          onChange: this.handleChangeDefaultGuildsRestricted,
          children: eo.Z.Messages.NEW_GUILDS_DM_ALLOWED
        })
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !!i && e,
          note: eo.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
          disabled: !i,
          onChange: q.DC.updateSetting,
          children: eo.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER
        })
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
        children: (0, a.jsx)(eu, {})
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !!i && t,
          note: eo.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
          disabled: !i,
          onChange: q.xM.updateSetting,
          children: eo.Z.Messages.NSFW_DM_COMMANDS_HEADER
        })
      })]
    })
  }
  renderDataPrivacy() {
    let {
      usageStatistics: e,
      personalization: s,
      dropsOptedOut: t
    } = this.props;
    return (0, a.jsxs)(u.FormSection, {
      className: eE.marginBottom40,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: eE.marginBottom8,
        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_DATA_IMPROVE_DISCORD,
        children: (0, a.jsx)(u.FormSwitch, {
          value: e,
          note: eo.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
            helpdeskArticle: W.Z.getArticleURL(el.BhN.DATA_USED_TO_IMPROVE_DISCORD)
          }),
          onChange: this.handleUsageStatisticsChange,
          children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
        })
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_DATA_PERSONALIZE,
        children: (0, a.jsx)(u.FormSwitch, {
          value: s,
          note: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
            helpdeskArticle: W.Z.getArticleURL(el.BhN.DATA_USED_FOR_RECOMMENDED)
          }),
          onChange: this.handlePersonalizationChange,
          children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
        })
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_DATA_QUESTS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !t,
          note: eo.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
            helpdeskArticle: W.Z.getArticleURL(el.BhN.DATA_PRIVACY_CONTROLS)
          }),
          onChange: this.handleChangeDropsOptedOut,
          children: (0, a.jsx)("div", {
            children: eo.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
          })
        })
      }), (0, a.jsxs)(G.F, {
        setting: ea.s6.PRIVACY_DATA_BASIC_SERVICE,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H3,
          className: o()(eE.marginTop20, eE.marginBottom8),
          children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: eE.marginBottom20,
          children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
            onClick: () => {
              O.Z.setSection(el.oAB.ACCOUNT)
            }
          })
        }), (0, a.jsx)(u.FormDivider, {
          className: eE.marginBottom20
        })]
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_DATA_REQUEST,
        children: this.renderHarvestRequest()
      })]
    })
  }
  renderHarvestRequest() {
    let e;
    let {
      currentUser: s
    } = this.props, {
      requestingHarvest: t,
      currentHarvestRequest: n
    } = this.state, i = (0, Q.$6)(n, s), r = (0, a.jsx)(u.Tooltip, {
      text: s.verified ? null : eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
      children: e => {
        let {
          onMouseEnter: s,
          onMouseLeave: n
        } = e;
        return (0, a.jsx)(u.Button, {
          disabled: i,
          onClick: this.handleDataDownloadRequest,
          onMouseEnter: s,
          onMouseLeave: n,
          look: u.Button.Looks.FILLED,
          color: u.Button.Colors.BRAND,
          submitting: t,
          children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != n && (e = (0, a.jsx)(u.Card, {
      className: ec.card,
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: eo.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: _()(n.created_at).add(el.eBq, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(H.Z, {
      children: r
    })), (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H3,
        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: eE.marginBottom20,
        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: W.Z.getArticleURL(el.BhN.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(u.FormSection, {
      className: eE.marginBottom40,
      children: (0, a.jsx)(u.FormNotice, {
        type: u.FormNotice.Types.PRIMARY,
        body: eo.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: el.EYA.TERMS,
          privacyLink: el.EYA.PRIVACY
        })
      })
    })
  }
  renderStaffOnlySettings() {
    let {
      nonSpamRetrainingOptIn: e
    } = this.props;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.FormDivider, {
        className: eE.marginBottom20
      }), (0, a.jsxs)(u.FormSection, {
        className: eE.marginBottom40,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          className: eE.marginBottom8,
          children: eo.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(u.FormItem, {
          tag: u.FormTitleTags.H5,
          className: eE.marginBottom4,
          children: [(0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: eE.marginBottom8,
            children: eo.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(u.RadioGroup, {
            options: (0, Q.xH)(),
            value: null == e ? Q.g0.UNDECIDED : e ? Q.g0.OPTIN : Q.g0.OPTOUT,
            onChange: e => {
              let {
                value: s
              } = e;
              return q.kJ.updateSetting(Q.ac[s])
            }
          })]
        })]
      })]
    })
  }
  renderSettingsBody() {
    let {
      fetchedConsents: e
    } = this.props;
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: eo.Z.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_KEYWORD_FILTER,
        children: this.renderKeywordFiltering()
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        children: this.renderServerPrivacy()
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_DATA_PRIVACY,
        children: e ? this.renderDataPrivacy() : null
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_TERMS_POLICY,
        children: this.renderPrivacyAndTermsNote()
      }), (0, a.jsx)(G.F, {
        setting: ea.s6.PRIVACY_STAFF_ONLY,
        children: this.renderStaffOnlySettings()
      })]
    })
  }
  render() {
    let {
      safetyHubFetchError: e,
      subsection: s,
      guildPrivacySettingsEnabled: t,
      searchFilter: n,
      isSecureFramesEnabled: i
    } = this.props, {
      selectedTab: l
    } = this.state;
    null != s && this.setState({
      selectedTab: s
    });
    let r = e => s => s === e,
      c = !1;
    null != n && null == n.find(r(ea.s6.PRIVACY_USER_SETTINGS)) && null != n.find(r(ea.s6.PRIVACY_ACCOUNT_STANDING)) && (this.setState({
      selectedTab: er.SU.ACCOUNT_STANDING
    }), c = !0);
    let E = l === er.SU.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.TabBar, {
        className: ec.settingsTabBar,
        "aria-label": eo.Z.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: l,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [c ? null : (0, a.jsx)(u.TabBar.Item, {
          className: ec.settingsTabBarItem,
          id: er.SU.SETTINGS,
          "aria-label": eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), t && !c ? (0, a.jsx)(u.TabBar.Item, {
          className: ec.settingsTabBarItem,
          id: er.SU.GUILD_SETTINGS,
          "aria-label": eo.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: eo.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, a.jsx)(u.TabBar.Item, {
          className: ec.settingsTabBarItem,
          id: er.SU.ACCOUNT_STANDING,
          "aria-label": eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        }), i ? (0, a.jsx)(u.TabBar.Item, {
          className: ec.settingsTabBarItem,
          id: er.SU.ENCRYPTION,
          "aria-label": eo.Z.Messages.E2EE_ENCRYPTION,
          children: eo.Z.Messages.E2EE_ENCRYPTION
        }) : null]
      }), (0, a.jsx)(u.TabBar.Panel, {
        id: l,
        "aria-labelledby": (0, k.hQ)(),
        className: o()(ec.contentPanel, {
          [ec.contentPanelNagbar]: E
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[l]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), ed(this, "SETTINGS_TABS", {
      [er.SU.SETTINGS]: () => this.renderSettingsBody(),
      [er.SU.ACCOUNT_STANDING]: () => (0, a.jsx)(j.Z, {}),
      [er.SU.GUILD_SETTINGS]: () => (0, a.jsx)(e_, {}),
      [er.SU.ENCRYPTION]: () => (0, a.jsx)(ee.Z, {})
    }), ed(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), ed(this, "handleChangeDropsOptedOut", () => {
      q.bh.updateSetting(!this.props.dropsOptedOut)
    }), ed(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eA({
        header: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, A.g)([], [el.pjP.USAGE_STATISTICS]).catch(eC)
      }) : (0, A.g)([el.pjP.USAGE_STATISTICS], []).catch(eC)
    }), ed(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eA({
        header: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, A.g)([], [el.pjP.PERSONALIZATION]).catch(eC)
        },
        body: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, A.g)([el.pjP.PERSONALIZATION], []).catch(eC)
    }), ed(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: W.Z.getArticleURL(el.BhN.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: u.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, C.V3)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), N.Z.show({
                body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : N.Z.show({
                title: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => N.Z.show({
              title: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, u.openModal)(s => (0, a.jsx)(eN, {
        modalProps: s,
        settings: e
      }))
    }), ed(this, "handleTabSelect", e => {
      this.setState({
        selectedTab: e
      })
    });
    let {
      defaultGuildsRestricted: s
    } = e;
    this.state = {
      defaultGuildsRestricted: s,
      currentHarvestRequest: null,
      requestingHarvest: !0,
      selectedTab: er.SU.SETTINGS
    }
  }
}

function em() {
  let e = (0, T.e7)([Y.default], () => {
      let e = Y.default.getCurrentUser();
      return E()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    s = (0, T.cj)([F.Z], () => ({
      fetchedConsents: F.Z.fetchedConsents,
      usageStatistics: F.Z.hasConsented(el.pjP.USAGE_STATISTICS),
      personalization: F.Z.hasConsented(el.pjP.PERSONALIZATION)
    })),
    t = (0, T.e7)([v.Z], () => v.Z.getFetchError()),
    n = (0, T.e7)([y.Z], () => y.Z.getSubsection()),
    i = (0, h.yh)(),
    l = (0, D.Xo)({
      location: "web_user_privacy_and_safety_settings"
    }),
    {
      hasSearchResults: r,
      searchResults: o
    } = (0, es.E)(),
    c = (0, p.g)(),
    d = (0, P.Z)(),
    _ = (0, X.H)({
      location: "user_settings_privacy_safety"
    }),
    {
      enabled: S
    } = f.c.useExperiment({
      location: "PrivacySafetySettings"
    });
  return (0, a.jsx)(eO, {
    currentUser: e,
    defaultGuildsRestricted: q.iG.useSetting(),
    nonSpamRetrainingOptIn: q.kJ.useSetting(),
    viewNsfwGuilds: q.DC.useSetting(),
    viewNsfwCommands: q.xM.useSetting(),
    explicitContentFilter: q.UP.useSetting(),
    keywordFilter: c,
    dmSpamFilter: q.Xr.useSetting(),
    showCurrentGame: q.G6.useSetting(),
    dropsOptedOut: q.bh.useSetting(),
    safetyHubFetchError: t,
    mediaRedactionIsEnabled: i,
    keywordFilteringEnabled: l,
    userIsConsideredAdult: null == d || d,
    subsection: n,
    guildPrivacySettingsEnabled: _,
    searchFilter: r ? o : void 0,
    isSecureFramesEnabled: S,
    ...s
  })
}