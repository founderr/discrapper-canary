t.d(s, {
  Z: function() {
    return eO
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
  p = t(592204),
  D = t(712950),
  L = t(880257),
  P = t(16703),
  Z = t(977059),
  f = t(236289),
  j = t(518560),
  v = t(237292),
  U = t(604849),
  B = t(278828),
  b = t(921801),
  G = t(480294),
  F = t(430824),
  V = t(663389),
  y = t(594174),
  Y = t(285952),
  H = t(153124),
  k = t(626135),
  w = t(63063),
  W = t(78451),
  K = t(709054),
  z = t(88658),
  Q = t(263399),
  X = t(695346),
  q = t(3957),
  J = t(279743),
  $ = t(76793),
  ee = t(839469),
  es = t(973005),
  et = t(703115),
  en = t(526761),
  ei = t(726985),
  ea = t(981631),
  el = t(800530),
  er = t(689938),
  eo = t(117345),
  ec = t(331651);

function eE(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function ed() {
  let e = (0, T.e7)([M.Z], () => M.Z.getGuild()),
    s = (0, P.Z)(),
    t = null != e ? e : s;
  l.useEffect(() => {
    k.default.track(ea.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: et.Y.VIEW_SETTINGS_PAGE
    })
  }, []);
  let n = l.useCallback(e => {
    null != e && I.Z.dispatch({
      type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
      guild: e
    }), k.default.track(ea.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: et.Y.SELECT_GUILD,
      guild_id: null == e ? void 0 : e.id
    })
  }, []);
  return null == t ? null : (0, a.jsx)(b.F, {
    setting: ei.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
    children: (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: er.Z.Messages.PRIVACY_AND_SAFETY,
      children: [(0, a.jsx)(x.Z, {
        className: eo.guildSelector,
        guildId: t.id,
        onChange: n
      }), (0, a.jsx)(m.ConnectedPrivacySettings, {
        guild: t,
        ingress: m.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
      })]
    })
  })
}

function e_() {
  var e;
  let s = null === (e = (0, L.Z)()) || void 0 === e || e,
    t = (0, v.y0)({
      location: "user_settings_web"
    }),
    n = (0, U.c)(),
    i = (0, q.a)(en.to.DM_SAFETY_ALERTS);
  return s || !t ? null : (0, a.jsxs)(b.F, {
    setting: ei.s6.PRIVACY_SAFETY_ALERTS,
    children: [(0, a.jsx)(u.FormSection, {
      ref: i,
      children: (0, a.jsxs)(u.FormItem, {
        className: o()(eo.settingsBackgroundFlashElement),
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          faded: !0,
          className: ec.marginBottom8,
          children: er.Z.Messages.SAFETY_ALERTS_SETTINGS_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          value: n,
          note: er.Z.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({
            learnMoreLink: w.Z.getArticleURL(ea.BhN.SAFETY_ALERTS)
          }),
          onChange: B.Q,
          hideBorder: !0,
          children: er.Z.Messages.SAFETY_ALERTS_SETTING_TITLE
        }), (0, a.jsx)(J.Z, {
          animationDelay: 1e3,
          scrollPosition: en.to.DM_SAFETY_ALERTS
        })]
      })
    }), (0, a.jsx)(u.FormDivider, {
      className: ec.marginBottom20
    })]
  })
}

function eT(e, s) {
  k.default.track(ea.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
    default_guilds_restricted: e,
    applied_to_existing_guilds: s
  })
}

function eS() {
  let e = X.iG.useSetting(),
    s = X.mX.useSetting(),
    t = (0, q.a)(en.to.DM_SAFETY_ALERTS);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: eo.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(u.FormItem, {
        ref: t,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !s,
          note: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({
            helpdeskArticle: w.Z.getArticleURL(ea.BhN.MESSAGE_REQUESTS)
          }),
          disabled: e,
          onChange: () => {
            var e;
            return e = !s, void eN({
              header: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
              body: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
              confirmText: er.Z.Messages.NO_TEXT,
              cancelText: er.Z.Messages.YES_TEXT,
              confirmButtonColor: u.Button.Colors.BRAND,
              onConfirm: () => {
                X.mX.updateSetting(e), eT(e, !1)
              },
              onCancel: () => {
                X.mX.updateSetting(e), X.zA.updateSetting(e ? K.default.keys(F.Z.getGuilds()) : []), eT(e, !0)
              }
            })
          },
          hideBorder: !0,
          children: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
        })
      }), (0, a.jsx)(J.Z, {
        animationDelay: 700,
        scrollPosition: en.to.MESSAGE_REQUESTS
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: ec.marginBottom20
    })]
  })
}

function eu() {
  var e;
  let s = null === (e = (0, L.Z)()) || void 0 === e || e,
    {
      explicitContentGuilds: t,
      explicitContentFriendDm: n,
      explicitContentNonFriendDm: i
    } = (0, R.B)(),
    l = (0, q.a)(en.to.DM_SAFETY_ALERTS),
    r = [{
      value: S.Q4.BLUR,
      label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }, {
      value: S.Q4.BLOCK,
      label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
    }],
    o = [{
      value: S.Q4.BLUR,
      label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
    }],
    c = {
      value: S.Q4.SHOW,
      label: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
    };
  return s && (r.unshift(c), o.unshift(c)), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: eo.settingsBackgroundFlashElement,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        faded: !0,
        className: ec.marginBottom8,
        children: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
      }), (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: ec.marginBottom8,
        children: er.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({
          learnMoreLink: w.Z.getArticleURL(ea.BhN.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, a.jsx)(u.FormItem, {
        ref: l,
        tag: u.FormTitleTags.H3,
        className: ec.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: r,
          value: n,
          onChange: e => (0, g.zj)({
            explicitContentFriendDm: e
          })
        })
      }), (0, a.jsx)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: ec.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: r,
          value: i,
          onChange: e => (0, g.zj)({
            explicitContentNonFriendDm: e
          })
        })
      }), s && (0, a.jsx)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: ec.marginBottom20,
        title: er.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
        children: (0, a.jsx)(u.SingleSelect, {
          options: o,
          value: t,
          onChange: e => (0, g.zj)({
            explicitContentGuilds: e
          })
        })
      }), (0, a.jsx)(J.Z, {
        scrollPosition: en.to.EXPLICIT_MEDIA_REDACTION
      })]
    }), (0, a.jsx)(u.FormDivider, {
      className: ec.marginBottom20
    })]
  })
}

function eI(e) {
  let {
    modalProps: s,
    settings: {
      onConfirm: t,
      ...n
    }
  } = e, [i, r] = l.useState({
    Account: {
      value: "Account",
      label: er.Z.Messages.HARVEST_BACKEND_USERS,
      checked: !1
    },
    Analytics: {
      value: "Analytics",
      label: er.Z.Messages.HARVEST_BACKEND_ANALYTICS,
      checked: !1
    },
    Activities: {
      value: "Activities",
      label: er.Z.Messages.HARVEST_BACKEND_ACTIVITIES,
      checked: !1
    },
    Messages: {
      value: "Messages",
      label: er.Z.Messages.HARVEST_BACKEND_MESSAGES,
      checked: !1
    },
    Programs: {
      value: "Programs",
      label: er.Z.Messages.HARVEST_BACKEND_HUBSPOT,
      checked: !1
    },
    Servers: {
      value: "Servers",
      label: er.Z.Messages.HARVEST_BACKEND_GUILDS,
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

function eN(e) {
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

function eA(e) {
  let {
    message: s
  } = e;
  eN({
    header: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
    confirmText: er.Z.Messages.OKAY,
    body: s
  })
}
class eC extends l.PureComponent {
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
    eN({
      header: er.Z.Messages.USER_DM_SETTINGS_TITLE,
      body: er.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
      confirmText: er.Z.Messages.NO_TEXT,
      cancelText: er.Z.Messages.YES_TEXT,
      confirmButtonColor: u.Button.Colors.BRAND,
      onConfirm: () => {
        X.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1)
      },
      onCancel: () => {
        X.iG.updateSetting(e), X.h2.updateSetting(e ? K.default.keys(F.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0)
      }
    })
  }
  trackDefaultDmsUpdated(e, s) {
    k.default.track(ea.rMx.GUILD_DEFAULT_DMS_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: s
    })
  }
  showMessageRequestRestrictionModal(e) {
    eN({
      header: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
      body: er.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
      confirmText: er.Z.Messages.NO_TEXT,
      cancelText: er.Z.Messages.YES_TEXT,
      confirmButtonColor: u.Button.Colors.BRAND,
      onConfirm: () => {
        X.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1)
      },
      onCancel: () => {
        X.mX.updateSetting(e), X.zA.updateSetting(e ? K.default.keys(F.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0)
      }
    })
  }
  trackDefaultMessageRequestUpdated(e, s) {
    k.default.track(ea.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
      default_guilds_restricted: e,
      applied_to_existing_guilds: s
    })
  }
  renderLegacyExplicitContentFilter(e) {
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(u.FormItem, {
        tag: u.FormTitleTags.H3,
        className: ec.marginBottom20,
        title: er.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: ec.marginBottom8,
          children: er.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({
            appealLink: w.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
          })
        }), (0, a.jsx)(u.RadioGroup, {
          value: this.props.explicitContentFilter,
          options: (0, W.X7)(),
          onChange: s => {
            let {
              value: t
            } = s;
            this.props.dmSpamFilter === S.Xr.DEFAULT_UNSET ? X.Xr.updateSetting(e).then(() => {
              X.UP.updateSetting(t)
            }) : X.UP.updateSetting(t)
          }
        })]
      })
    })
  }
  renderDMSafety() {
    var e;
    let s = this.props.dmSpamFilter !== S.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = es.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : S.Xr.NON_FRIENDS;
    return this.props.mediaRedactionIsEnabled ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H3,
        className: ec.marginBottom20,
        children: [(0, a.jsx)(b.F, {
          setting: ei.s6.PRIVACY_SENSITIVE_MEDIA,
          children: (0, a.jsx)(eu, {})
        }), (0, a.jsx)(b.F, {
          setting: ei.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
          children: (0, a.jsxs)(u.FormItem, {
            tag: u.FormTitleTags.H5,
            className: ec.marginBottom4,
            title: er.Z.Messages.USER_DM_SPAM_FILTER,
            children: [(0, a.jsx)(u.FormText, {
              type: u.FormTextTypes.DESCRIPTION,
              className: ec.marginBottom8,
              children: er.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
                appealLink: w.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
              })
            }), (0, a.jsx)(u.RadioGroup, {
              value: s,
              options: (0, W.c7)(),
              onChange: e => {
                let {
                  value: s
                } = e;
                return X.Xr.updateSetting(s)
              }
            })]
          })
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: ec.marginBottom20
      }), (0, a.jsx)(e_, {})]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.FormSection, {
        tag: u.FormTitleTags.H5,
        className: ec.marginBottom40,
        title: er.Z.Messages.USER_DIRECT_MESSAGE_FILTERS,
        children: [this.renderLegacyExplicitContentFilter(s), (0, a.jsxs)(u.FormItem, {
          tag: u.FormTitleTags.H3,
          className: ec.marginBottom4,
          title: er.Z.Messages.USER_DM_SPAM_FILTER,
          children: [(0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: ec.marginBottom8,
            children: er.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({
              appealLink: w.Z.getArticleURL(ea.BhN.SAFE_DIRECT_MESSAGING)
            })
          }), (0, a.jsx)(u.RadioGroup, {
            value: s,
            options: (0, W.c7)(),
            onChange: e => {
              let {
                value: s
              } = e;
              return X.Xr.updateSetting(s)
            }
          })]
        })]
      }), (0, a.jsx)(u.FormDivider, {
        className: ec.marginBottom20
      }), (0, a.jsx)(e_, {})]
    })
  }
  renderKeywordFiltering() {
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H3,
      className: ec.marginBottom20,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: ec.marginBottom8,
        children: er.Z.Messages.USER_KEYWORD_FILTERS_TITLE
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_KEYWORD_FILTER,
        children: (0, a.jsx)(u.FormSwitch, {
          value: this.props.keywordFilter,
          note: er.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_V2.format({
            learnMoreLink: w.Z.getArticleURL(ea.BhN.KEYWORD_FILTERS)
          }),
          onChange: e => X.gw.updateSetting({
            profanity: e,
            slurs: e,
            sexualContent: e
          }),
          children: er.Z.Messages.USER_KEYWORD_FILTERS_TOGGLE_TITLE
        })
      })]
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
      className: ec.marginBottom40,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: ec.marginBottom8,
        children: er.Z.Messages.USER_DM_SETTINGS
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !n,
          note: er.Z.Messages.USER_DM_SETTINGS_HELP,
          onChange: this.handleChangeDefaultGuildsRestricted,
          children: er.Z.Messages.NEW_GUILDS_DM_ALLOWED
        })
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !!i && e,
          note: er.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
          disabled: !i,
          onChange: X.DC.updateSetting,
          children: er.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER
        })
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
        children: (0, a.jsx)(eS, {})
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !!i && t,
          note: er.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
          disabled: !i,
          onChange: X.xM.updateSetting,
          children: er.Z.Messages.NSFW_DM_COMMANDS_HEADER
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
      className: ec.marginBottom40,
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: ec.marginBottom8,
        children: er.Z.Messages.DATA_PRIVACY_CONTROLS
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_DATA_IMPROVE_DISCORD,
        children: (0, a.jsx)(u.FormSwitch, {
          value: e,
          note: er.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({
            helpdeskArticle: w.Z.getArticleURL(ea.BhN.DATA_USED_TO_IMPROVE_DISCORD)
          }),
          onChange: this.handleUsageStatisticsChange,
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
        })
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_DATA_PERSONALIZE,
        children: (0, a.jsx)(u.FormSwitch, {
          value: s,
          note: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({
            helpdeskArticle: w.Z.getArticleURL(ea.BhN.DATA_USED_FOR_RECOMMENDED)
          }),
          onChange: this.handlePersonalizationChange,
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
        })
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_DATA_QUESTS,
        children: (0, a.jsx)(u.FormSwitch, {
          value: !t,
          note: er.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({
            helpdeskArticle: w.Z.getArticleURL(ea.BhN.DATA_PRIVACY_CONTROLS)
          }),
          onChange: this.handleChangeDropsOptedOut,
          children: (0, a.jsx)("div", {
            children: er.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT
          })
        })
      }), (0, a.jsxs)(b.F, {
        setting: ei.s6.PRIVACY_DATA_BASIC_SERVICE,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H3,
          className: o()(ec.marginTop20, ec.marginBottom8),
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: ec.marginBottom20,
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
            onClick: () => {
              O.Z.setSection(ea.oAB.ACCOUNT)
            }
          })
        }), (0, a.jsx)(u.FormDivider, {
          className: ec.marginBottom20
        })]
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_DATA_REQUEST,
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
    } = this.state, i = (0, z.$6)(n, s), r = (0, a.jsx)(u.Tooltip, {
      text: s.verified ? null : er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
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
          children: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
        })
      }
    });
    return i && null != n && (e = (0, a.jsx)(u.Card, {
      className: eo.card,
      children: (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        children: er.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({
          date: _()(n.created_at).add(ea.eBq, "days").format("MMMM Do YYYY")
        })
      })
    }), r = null), null != r && (r = (0, a.jsx)(Y.Z, {
      children: r
    })), (0, a.jsxs)(l.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H3,
        children: er.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
      }), (0, a.jsx)(u.FormText, {
        type: u.FormTextTypes.DESCRIPTION,
        className: ec.marginBottom20,
        children: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({
          helpdeskArticle: w.Z.getArticleURL(ea.BhN.GDPR_REQUEST_DATA)
        })
      }), e, r]
    })
  }
  renderPrivacyAndTermsNote() {
    return (0, a.jsx)(u.FormSection, {
      className: ec.marginBottom40,
      children: (0, a.jsx)(u.FormNotice, {
        type: u.FormNotice.Types.PRIMARY,
        body: er.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
          termsLink: ea.EYA.TERMS,
          privacyLink: ea.EYA.PRIVACY
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
        className: ec.marginBottom20
      }), (0, a.jsxs)(u.FormSection, {
        className: ec.marginBottom40,
        children: [(0, a.jsx)(u.FormTitle, {
          tag: u.FormTitleTags.H5,
          className: ec.marginBottom8,
          children: er.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
        }), (0, a.jsxs)(u.FormItem, {
          tag: u.FormTitleTags.H5,
          className: ec.marginBottom4,
          children: [(0, a.jsx)(u.FormText, {
            type: u.FormTextTypes.DESCRIPTION,
            className: ec.marginBottom8,
            children: er.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
          }), (0, a.jsx)(u.RadioGroup, {
            options: (0, z.xH)(),
            value: null == e ? z.g0.UNDECIDED : e ? z.g0.OPTIN : z.g0.OPTOUT,
            onChange: e => {
              let {
                value: s
              } = e;
              return X.kJ.updateSetting(z.ac[s])
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
      title: er.Z.Messages.PRIVACY_AND_SAFETY,
      children: [this.renderDMSafety(), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_KEYWORD_FILTER,
        children: this.renderKeywordFiltering()
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        children: this.renderServerPrivacy()
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_DATA_PRIVACY,
        children: e ? this.renderDataPrivacy() : null
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_TERMS_POLICY,
        children: this.renderPrivacyAndTermsNote()
      }), (0, a.jsx)(b.F, {
        setting: ei.s6.PRIVACY_STAFF_ONLY,
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
    null != n && null == n.find(r(ei.s6.PRIVACY_USER_SETTINGS)) && null != n.find(r(ei.s6.PRIVACY_ACCOUNT_STANDING)) && (this.setState({
      selectedTab: el.SU.ACCOUNT_STANDING
    }), c = !0);
    let E = l === el.SU.ACCOUNT_STANDING && null != e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.TabBar, {
        className: eo.settingsTabBar,
        "aria-label": er.Z.Messages.SAFETY_HUB_PAGE_TITLE,
        selectedItem: l,
        type: "top",
        look: "brand",
        onItemSelect: this.handleTabSelect,
        children: [c ? null : (0, a.jsx)(u.TabBar.Item, {
          className: eo.settingsTabBarItem,
          id: el.SU.SETTINGS,
          "aria-label": er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
          children: er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS
        }), t && !c ? (0, a.jsx)(u.TabBar.Item, {
          className: eo.settingsTabBarItem,
          id: el.SU.GUILD_SETTINGS,
          "aria-label": er.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
          children: er.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE
        }) : null, (0, a.jsx)(u.TabBar.Item, {
          className: eo.settingsTabBarItem,
          id: el.SU.ACCOUNT_STANDING,
          "aria-label": er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
          children: er.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2
        }), i ? (0, a.jsx)(u.TabBar.Item, {
          className: eo.settingsTabBarItem,
          id: el.SU.ENCRYPTION,
          "aria-label": er.Z.Messages.E2EE_ENCRYPTION,
          children: er.Z.Messages.E2EE_ENCRYPTION
        }) : null]
      }), (0, a.jsx)(u.TabBar.Panel, {
        id: l,
        "aria-labelledby": (0, H.hQ)(),
        className: o()(eo.contentPanel, {
          [eo.contentPanelNagbar]: E
        }),
        children: (0, a.jsx)("div", {
          children: this.SETTINGS_TABS[l]()
        })
      })]
    })
  }
  constructor(e) {
    super(e), eE(this, "SETTINGS_TABS", {
      [el.SU.SETTINGS]: () => this.renderSettingsBody(),
      [el.SU.ACCOUNT_STANDING]: () => (0, a.jsx)(j.Z, {}),
      [el.SU.GUILD_SETTINGS]: () => (0, a.jsx)(ed, {}),
      [el.SU.ENCRYPTION]: () => (0, a.jsx)($.Z, {})
    }), eE(this, "handleChangeDefaultGuildsRestricted", e => {
      this.setState({
        defaultGuildsRestricted: !e
      }, () => this.showGuildRestrictionModal(!e))
    }), eE(this, "handleChangeDropsOptedOut", () => {
      X.bh.updateSetting(!this.props.dropsOptedOut)
    }), eE(this, "handleUsageStatisticsChange", () => {
      this.props.usageStatistics ? eN({
        header: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
        body: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
        confirmText: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
        cancelText: er.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
        onConfirm: () => (0, A.g)([], [ea.pjP.USAGE_STATISTICS]).catch(eA)
      }) : (0, A.g)([ea.pjP.USAGE_STATISTICS], []).catch(eA)
    }), eE(this, "handlePersonalizationChange", () => {
      this.props.personalization ? eN({
        header: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
        confirmText: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
        cancelText: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
        onConfirm: () => {
          (0, A.g)([], [ea.pjP.PERSONALIZATION]).catch(eA)
        },
        body: er.Z.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
      }) : (0, A.g)([ea.pjP.PERSONALIZATION], []).catch(eA)
    }), eE(this, "handleDataDownloadRequest", () => {
      var e;
      e = {
        header: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
        body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({
          helpdeskArticle: w.Z.getArticleURL(ea.BhN.GDPR_PACKAGE_CONTENTS)
        }),
        confirmText: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
        cancelText: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
        confirmButtonColor: u.Button.Colors.BRAND,
        onConfirm: e => {
          this.setState({
            requestingHarvest: !0
          }, () => {
            (0, C.V3)(e).then(e => {
              null != e && null != e.body ? (this.setState({
                currentHarvestRequest: e.body
              }), N.Z.show({
                body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS
              })) : N.Z.show({
                title: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
              })
            }, () => N.Z.show({
              title: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
              body: er.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
            })).finally(() => this.setState({
              requestingHarvest: !1
            }))
          })
        }
      }, (0, u.openModal)(s => (0, a.jsx)(eI, {
        modalProps: s,
        settings: e
      }))
    }), eE(this, "handleTabSelect", e => {
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
      selectedTab: el.SU.SETTINGS
    }
  }
}

function eO() {
  let e = (0, T.e7)([y.default], () => {
      let e = y.default.getCurrentUser();
      return E()(null != e, "ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined"), e
    }),
    s = (0, T.cj)([G.Z], () => ({
      fetchedConsents: G.Z.fetchedConsents,
      usageStatistics: G.Z.hasConsented(ea.pjP.USAGE_STATISTICS),
      personalization: G.Z.hasConsented(ea.pjP.PERSONALIZATION)
    })),
    t = (0, T.e7)([f.Z], () => f.Z.getFetchError()),
    n = (0, T.e7)([V.Z], () => V.Z.getSubsection()),
    i = (0, h.yh)(),
    l = (0, p.Xo)({
      location: "web_user_privacy_and_safety_settings"
    }),
    {
      hasSearchResults: r,
      searchResults: o
    } = (0, ee.E)(),
    c = (0, D.p)(),
    d = (0, L.Z)(),
    _ = (0, Q.H)({
      location: "user_settings_privacy_safety"
    }),
    {
      enabled: S
    } = Z.c.useExperiment({
      location: "PrivacySafetySettings"
    });
  return (0, a.jsx)(eC, {
    currentUser: e,
    defaultGuildsRestricted: X.iG.useSetting(),
    nonSpamRetrainingOptIn: X.kJ.useSetting(),
    viewNsfwGuilds: X.DC.useSetting(),
    viewNsfwCommands: X.xM.useSetting(),
    explicitContentFilter: X.UP.useSetting(),
    keywordFilter: c,
    dmSpamFilter: X.Xr.useSetting(),
    showCurrentGame: X.G6.useSetting(),
    dropsOptedOut: X.bh.useSetting(),
    safetyHubFetchError: t,
    mediaRedactionIsEnabled: i,
    keywordFilteringExperimentEnabled: l,
    userIsConsideredAdult: null == d || d,
    subsection: n,
    guildPrivacySettingsEnabled: _,
    searchFilter: r ? o : void 0,
    isSecureFramesEnabled: S,
    ...s
  })
}