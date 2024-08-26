t.d(s, {
    Z: function () {
        return eA;
    }
}),
    t(47120),
    t(733860),
    t(773603);
var n,
    a,
    i = t(735250),
    r = t(470079),
    o = t(120356),
    l = t.n(o),
    c = t(512722),
    d = t.n(c),
    _ = t(913527),
    E = t.n(_),
    u = t(442837),
    I = t(524437),
    T = t(481060),
    S = t(570140),
    N = t(668781),
    C = t(409700),
    m = t(809206),
    A = t(230711),
    O = t(241420),
    g = t(600164),
    h = t(651530),
    p = t(163268),
    R = t(294602),
    x = t(778825),
    M = t(856768),
    f = t(592204),
    D = t(712950),
    P = t(880257),
    L = t(16703),
    b = t(977059),
    Z = t(236289),
    v = t(518560),
    j = t(237292),
    B = t(604849),
    U = t(278828),
    G = t(921801),
    F = t(480294),
    y = t(430824),
    V = t(663389),
    Y = t(594174),
    H = t(626135),
    w = t(63063),
    k = t(78451),
    W = t(358085),
    K = t(709054),
    z = t(88658),
    Q = t(695346),
    X = t(3957),
    q = t(279743),
    J = t(526156),
    $ = t(76793),
    ee = t(839469),
    es = t(973005),
    et = t(703115),
    en = t(526761),
    ea = t(726985),
    ei = t(981631),
    er = t(800530),
    eo = t(689938),
    el = t(630785),
    ec = t(224499);
function ed(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
function e_() {
    let e = (0, u.e7)([x.Z], () => x.Z.getGuild()),
        s = (0, L.Z)(),
        t = null != e ? e : s;
    r.useEffect(() => {
        H.default.track(ei.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, { action: et.Y.VIEW_SETTINGS_PAGE });
    }, []);
    let n = r.useCallback((e) => {
        null != e &&
            S.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
                guild: e
            }),
            H.default.track(ei.rMx.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
                action: et.Y.SELECT_GUILD,
                guild_id: null == e ? void 0 : e.id
            });
    }, []);
    return null == t
        ? null
        : (0, i.jsxs)(T.FormSection, {
              tag: T.FormTitleTags.H1,
              title: eo.Z.Messages.PRIVACY_AND_SAFETY,
              children: [
                  (0, i.jsx)(M.Z, {
                      className: el.guildSelector,
                      guildId: t.id,
                      onChange: n
                  }),
                  (0, i.jsx)(O.ConnectedPrivacySettings, {
                      guild: t,
                      ingress: O.PrivacySettingSurfaces.USER_SETTINGS_PRIVACY_SAFETY
                  })
              ]
          });
}
function eE() {
    var e;
    let s = null === (e = (0, P.Z)()) || void 0 === e || e,
        t = (0, j.y0)({ location: 'user_settings_web' }),
        n = (0, B.c)(),
        a = (0, X.a)(en.to.DM_SAFETY_ALERTS);
    return s || !t
        ? null
        : (0, i.jsxs)(G.F, {
              setting: ea.s6.PRIVACY_SAFETY_ALERTS,
              children: [
                  (0, i.jsx)(T.FormSection, {
                      ref: a,
                      children: (0, i.jsxs)(T.FormItem, {
                          className: l()(el.settingsBackgroundFlashElement),
                          children: [
                              (0, i.jsx)(T.FormTitle, {
                                  tag: T.FormTitleTags.H5,
                                  faded: !0,
                                  className: ec.marginBottom8,
                                  children: eo.Z.Messages.SAFETY_ALERTS_SETTINGS_HEADER
                              }),
                              (0, i.jsx)(T.FormSwitch, {
                                  value: n,
                                  note: eo.Z.Messages.SAFETY_ALERTS_SETTING_DESCRIPTION.format({ learnMoreLink: w.Z.getArticleURL(ei.BhN.SAFETY_ALERTS) }),
                                  onChange: U.Q,
                                  hideBorder: !0,
                                  children: eo.Z.Messages.SAFETY_ALERTS_SETTING_TITLE
                              }),
                              (0, i.jsx)(q.Z, {
                                  animationDelay: 1000,
                                  scrollPosition: en.to.DM_SAFETY_ALERTS
                              })
                          ]
                      })
                  }),
                  (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 })
              ]
          });
}
function eu(e, s) {
    H.default.track(ei.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
        default_guilds_restricted: e,
        applied_to_existing_guilds: s
    });
}
function eI() {
    let e = Q.iG.useSetting(),
        s = Q.mX.useSetting(),
        t = (0, X.a)(en.to.DM_SAFETY_ALERTS);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: el.settingsBackgroundFlashElement,
                children: [
                    (0, i.jsx)(T.FormItem, {
                        ref: t,
                        children: (0, i.jsx)(T.FormSwitch, {
                            value: !s,
                            note: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_CAPTION.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.MESSAGE_REQUESTS) }),
                            disabled: e,
                            onChange: () => {
                                var e;
                                return (
                                    (e = !s),
                                    void eN({
                                        header: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
                                        body: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
                                        confirmText: eo.Z.Messages.NO_TEXT,
                                        cancelText: eo.Z.Messages.YES_TEXT,
                                        confirmButtonColor: T.Button.Colors.BRAND,
                                        onConfirm: () => {
                                            Q.mX.updateSetting(e), eu(e, !1);
                                        },
                                        onCancel: () => {
                                            Q.mX.updateSetting(e), Q.zA.updateSetting(e ? K.default.keys(y.Z.getGuilds()) : []), eu(e, !0);
                                        }
                                    })
                                );
                            },
                            hideBorder: !0,
                            children: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER
                        })
                    }),
                    (0, i.jsx)(q.Z, {
                        animationDelay: 700,
                        scrollPosition: en.to.MESSAGE_REQUESTS
                    })
                ]
            }),
            (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 })
        ]
    });
}
function eT() {
    var e;
    let s = null === (e = (0, P.Z)()) || void 0 === e || e,
        { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: a } = (0, R.B)(),
        r = (0, X.a)(en.to.DM_SAFETY_ALERTS),
        o = [
            {
                value: I.Q4.BLUR,
                label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            },
            {
                value: I.Q4.BLOCK,
                label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLOCK
            }
        ],
        l = [
            {
                value: I.Q4.BLUR,
                label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_BLUR
            }
        ],
        c = {
            value: I.Q4.SHOW,
            label: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_OPTION_SHOW
        };
    return (
        s && (o.unshift(c), l.unshift(c)),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: el.settingsBackgroundFlashElement,
                    children: [
                        (0, i.jsx)(T.FormTitle, {
                            tag: T.FormTitleTags.H5,
                            faded: !0,
                            className: ec.marginBottom8,
                            children: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER
                        }),
                        (0, i.jsx)(T.FormText, {
                            type: T.FormTextTypes.DESCRIPTION,
                            className: ec.marginBottom8,
                            children: eo.Z.Messages.OBSCURED_CONTENT_SETTINGS_DESC.format({ learnMoreLink: w.Z.getArticleURL(ei.BhN.EXPLICIT_MEDIA_REDACTION) })
                        }),
                        (0, i.jsx)(T.FormItem, {
                            ref: r,
                            tag: T.FormTitleTags.H3,
                            className: ec.marginBottom20,
                            title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_FRIENDS,
                            children: (0, i.jsx)(T.SingleSelect, {
                                options: o,
                                value: n,
                                onChange: (e) => (0, p.zj)({ explicitContentFriendDm: e })
                            })
                        }),
                        (0, i.jsx)(T.FormItem, {
                            tag: T.FormTitleTags.H3,
                            className: ec.marginBottom20,
                            title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_NON_FRIENDS,
                            children: (0, i.jsx)(T.SingleSelect, {
                                options: o,
                                value: a,
                                onChange: (e) => (0, p.zj)({ explicitContentNonFriendDm: e })
                            })
                        }),
                        s &&
                            (0, i.jsx)(T.FormItem, {
                                tag: T.FormTitleTags.H3,
                                className: ec.marginBottom20,
                                title: eo.Z.Messages.OBSCURED_CONTENT_SETTING_GUILDS,
                                children: (0, i.jsx)(T.SingleSelect, {
                                    options: l,
                                    value: t,
                                    onChange: (e) => (0, p.zj)({ explicitContentGuilds: e })
                                })
                            }),
                        (0, i.jsx)(q.Z, { scrollPosition: en.to.EXPLICIT_MEDIA_REDACTION })
                    ]
                }),
                (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 })
            ]
        })
    );
}
function eS(e) {
    let {
            modalProps: s,
            settings: { onConfirm: t, ...n }
        } = e,
        [a, o] = r.useState({
            Account: {
                value: 'Account',
                label: eo.Z.Messages.HARVEST_BACKEND_USERS,
                checked: !1
            },
            Analytics: {
                value: 'Analytics',
                label: eo.Z.Messages.HARVEST_BACKEND_ANALYTICS,
                checked: !1
            },
            Activities: {
                value: 'Activities',
                label: eo.Z.Messages.HARVEST_BACKEND_ACTIVITIES,
                checked: !1
            },
            Messages: {
                value: 'Messages',
                label: eo.Z.Messages.HARVEST_BACKEND_MESSAGES,
                checked: !1
            },
            Programs: {
                value: 'Programs',
                label: eo.Z.Messages.HARVEST_BACKEND_HUBSPOT,
                checked: !1
            },
            Servers: {
                value: 'Servers',
                label: eo.Z.Messages.HARVEST_BACKEND_GUILDS,
                checked: !1
            }
        }),
        l = (e) => (s, t) => {
            o((s) => ({
                ...s,
                [e]: {
                    ...s[e],
                    checked: t
                }
            }));
        };
    return (0, i.jsxs)(T.ConfirmModal, {
        ...s,
        ...n,
        onConfirm: () => {
            let e = Object.keys(a)
                .filter((e) => a[e].checked)
                .map((e) => a[e].value);
            null == t || t(e);
        },
        children: [
            (0, i.jsx)(T.Text, {
                variant: 'text-md/normal',
                style: { marginBottom: '5px' },
                children: n.body
            }),
            Object.keys(a).map((e) => {
                let { label: s, checked: t } = a[e];
                return (0, i.jsx)(
                    T.Checkbox,
                    {
                        type: T.Checkbox.Types.INVERTED,
                        value: t,
                        style: { marginBottom: '2px' },
                        onChange: l(e),
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/normal',
                            children: s
                        })
                    },
                    e
                );
            })
        ]
    });
}
((a = n || (n = {})).USERS = 'Account'), (a.MESSAGES = 'Messages'), (a.GUILDS = 'Servers'), (a.ANALYTICS = 'Analytics'), (a.ACTIVITIES = 'Activities'), (a.HUBSPOT = 'Programs');
function eN(e) {
    let { body: s, ...t } = e;
    (0, T.openModal)((e) =>
        (0, i.jsx)(T.ConfirmModal, {
            ...e,
            ...t,
            children: (0, i.jsx)(T.Text, {
                variant: 'text-md/normal',
                children: s
            })
        })
    );
}
function eC(e) {
    let { message: s } = e;
    eN({
        header: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
        confirmText: eo.Z.Messages.OKAY,
        body: s
    });
}
class em extends r.PureComponent {
    componentDidMount() {
        (0, C.I)(),
            (0, m.ol)().then(
                (e) => {
                    let s = {
                        requestingHarvest: !1,
                        currentHarvestRequest: e.body
                    };
                    this.setState(s);
                },
                () => {
                    this.setState({ requestingHarvest: !1 });
                }
            );
    }
    componentDidUpdate(e) {
        e.defaultGuildsRestricted !== this.props.defaultGuildsRestricted && this.setState({ defaultGuildsRestricted: this.props.defaultGuildsRestricted }), null != this.props.subsection && e.subsection !== this.props.subsection && this.setState({ selectedTab: this.props.subsection });
    }
    showGuildRestrictionModal(e) {
        eN({
            header: eo.Z.Messages.USER_DM_SETTINGS_TITLE,
            body: eo.Z.Messages.USER_DM_SETTINGS_DESCRIPTION,
            confirmText: eo.Z.Messages.NO_TEXT,
            cancelText: eo.Z.Messages.YES_TEXT,
            confirmButtonColor: T.Button.Colors.BRAND,
            onConfirm: () => {
                Q.iG.updateSetting(e), this.trackDefaultDmsUpdated(e, !1);
            },
            onCancel: () => {
                Q.iG.updateSetting(e), Q.h2.updateSetting(e ? K.default.keys(y.Z.getGuilds()) : []), this.trackDefaultDmsUpdated(e, !0);
            }
        });
    }
    trackDefaultDmsUpdated(e, s) {
        H.default.track(ei.rMx.GUILD_DEFAULT_DMS_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    showMessageRequestRestrictionModal(e) {
        eN({
            header: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_HEADER,
            body: eo.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_MODAL_DESCRIPTION,
            confirmText: eo.Z.Messages.NO_TEXT,
            cancelText: eo.Z.Messages.YES_TEXT,
            confirmButtonColor: T.Button.Colors.BRAND,
            onConfirm: () => {
                Q.mX.updateSetting(e), this.trackDefaultMessageRequestUpdated(e, !1);
            },
            onCancel: () => {
                Q.mX.updateSetting(e), Q.zA.updateSetting(e ? K.default.keys(y.Z.getGuilds()) : []), this.trackDefaultMessageRequestUpdated(e, !0);
            }
        });
    }
    trackDefaultMessageRequestUpdated(e, s) {
        H.default.track(ei.rMx.GUILD_DEFAULT_MESSAGE_REQUEST_UPDATED, {
            default_guilds_restricted: e,
            applied_to_existing_guilds: s
        });
    }
    renderLegacyExplicitContentFilter(e) {
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(T.FormItem, {
                tag: T.FormTitleTags.H3,
                className: ec.marginBottom20,
                title: eo.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_V2,
                children: [
                    (0, i.jsx)(T.FormText, {
                        type: T.FormTextTypes.DESCRIPTION,
                        className: ec.marginBottom8,
                        children: eo.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_HELP_V3.format({ appealLink: w.Z.getArticleURL(ei.BhN.SAFE_DIRECT_MESSAGING) })
                    }),
                    (0, i.jsx)(T.RadioGroup, {
                        value: this.props.explicitContentFilter,
                        options: (0, k.X7)(),
                        onChange: (s) => {
                            let { value: t } = s;
                            this.props.dmSpamFilter === I.Xr.DEFAULT_UNSET
                                ? Q.Xr.updateSetting(e).then(() => {
                                      Q.UP.updateSetting(t);
                                  })
                                : Q.UP.updateSetting(t);
                        }
                    })
                ]
            })
        });
    }
    renderDMSafety() {
        var e;
        let s = this.props.dmSpamFilter !== I.Xr.DEFAULT_UNSET ? this.props.dmSpamFilter : null !== (e = es.O7.get(this.props.explicitContentFilter)) && void 0 !== e ? e : I.Xr.NON_FRIENDS;
        return this.props.mediaRedactionIsEnabled
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(T.FormSection, {
                          tag: T.FormTitleTags.H3,
                          className: ec.marginBottom20,
                          children: [
                              (0, i.jsx)(G.F, {
                                  setting: ea.s6.PRIVACY_SENSITIVE_MEDIA,
                                  children: (0, i.jsx)(eT, {})
                              }),
                              (0, i.jsxs)(G.F, {
                                  setting: ea.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER,
                                  children: [
                                      (0, i.jsxs)(T.FormItem, {
                                          tag: T.FormTitleTags.H5,
                                          className: ec.marginBottom4,
                                          title: eo.Z.Messages.USER_DM_SPAM_FILTER,
                                          children: [
                                              (0, i.jsx)(T.FormText, {
                                                  type: T.FormTextTypes.DESCRIPTION,
                                                  className: ec.marginBottom8,
                                                  children: eo.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({ appealLink: w.Z.getArticleURL(ei.BhN.SAFE_DIRECT_MESSAGING) })
                                              }),
                                              (0, i.jsx)(T.RadioGroup, {
                                                  value: s,
                                                  options: (0, k.c7)(),
                                                  onChange: (e) => {
                                                      let { value: s } = e;
                                                      return Q.Xr.updateSetting(s);
                                                  }
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)(T.FormDivider, { className: l()(ec.marginTop20, ec.marginBottom8) })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(eE, {})
                  ]
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(T.FormSection, {
                          tag: T.FormTitleTags.H5,
                          className: ec.marginBottom40,
                          title: eo.Z.Messages.USER_DIRECT_MESSAGE_FILTERS,
                          children: [
                              this.renderLegacyExplicitContentFilter(s),
                              (0, i.jsxs)(T.FormItem, {
                                  tag: T.FormTitleTags.H3,
                                  className: ec.marginBottom4,
                                  title: eo.Z.Messages.USER_DM_SPAM_FILTER,
                                  children: [
                                      (0, i.jsx)(T.FormText, {
                                          type: T.FormTextTypes.DESCRIPTION,
                                          className: ec.marginBottom8,
                                          children: eo.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({ appealLink: w.Z.getArticleURL(ei.BhN.SAFE_DIRECT_MESSAGING) })
                                      }),
                                      (0, i.jsx)(T.RadioGroup, {
                                          value: s,
                                          options: (0, k.c7)(),
                                          onChange: (e) => {
                                              let { value: s } = e;
                                              return Q.Xr.updateSetting(s);
                                          }
                                      })
                                  ]
                              })
                          ]
                      }),
                      (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 }),
                      (0, i.jsx)(eE, {})
                  ]
              });
    }
    renderKeywordFiltering() {
        return (0, i.jsxs)(T.FormSection, {
            tag: T.FormTitleTags.H3,
            className: ec.marginBottom20,
            children: [
                (0, i.jsx)(T.FormTitle, {
                    tag: T.FormTitleTags.H5,
                    className: ec.marginBottom8,
                    children: eo.Z.Messages.USER_KEYWORD_FILTERS_TITLE
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_KEYWORD_FILTER,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: this.props.keywordFilter,
                        note: eo.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_V2.format({ learnMoreLink: w.Z.getArticleURL(ei.BhN.KEYWORD_FILTERS) }),
                        onChange: (e) =>
                            Q.gw.updateSetting({
                                profanity: e,
                                slurs: e,
                                sexualContent: e
                            }),
                        children: eo.Z.Messages.USER_KEYWORD_FILTERS_TOGGLE_TITLE
                    })
                })
            ]
        });
    }
    renderServerPrivacy() {
        let { viewNsfwGuilds: e, currentUser: s, viewNsfwCommands: t } = this.props,
            { defaultGuildsRestricted: n } = this.state,
            a = !0 === s.nsfwAllowed;
        return (0, i.jsxs)(T.FormSection, {
            className: ec.marginBottom40,
            children: [
                (0, i.jsx)(T.FormTitle, {
                    tag: T.FormTitleTags.H5,
                    className: ec.marginBottom8,
                    children: eo.Z.Messages.USER_DM_SETTINGS
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: !n,
                        note: eo.Z.Messages.USER_DM_SETTINGS_HELP,
                        onChange: this.handleChangeDefaultGuildsRestricted,
                        children: eo.Z.Messages.NEW_GUILDS_DM_ALLOWED
                    })
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: !!a && e,
                        note: eo.Z.Messages.NSFW_GUILDS_TOGGLE_CAPTION,
                        disabled: !a,
                        onChange: Q.DC.updateSetting,
                        children: eo.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER
                    })
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS,
                    children: (0, i.jsx)(eI, {})
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: !!a && t,
                        note: eo.Z.Messages.NSFW_DM_COMMANDS_CAPTION,
                        disabled: !a,
                        onChange: Q.xM.updateSetting,
                        children: eo.Z.Messages.NSFW_DM_COMMANDS_HEADER
                    })
                })
            ]
        });
    }
    renderDataPrivacy() {
        let { usageStatistics: e, personalization: s, dropsOptedOut: t } = this.props;
        return (0, i.jsxs)(T.FormSection, {
            className: ec.marginBottom40,
            children: [
                (0, i.jsx)(T.FormTitle, {
                    tag: T.FormTitleTags.H5,
                    className: ec.marginBottom8,
                    children: eo.Z.Messages.DATA_PRIVACY_CONTROLS
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_IMPROVE_DISCORD,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: e,
                        note: eo.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_NOTE.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.DATA_USED_TO_IMPROVE_DISCORD) }),
                        onChange: this.handleUsageStatisticsChange,
                        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE
                    })
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_PERSONALIZE,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: s,
                        note: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_NOTE_LEARN_MORE.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.DATA_USED_FOR_RECOMMENDED) }),
                        onChange: this.handlePersonalizationChange,
                        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE
                    })
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_QUESTS,
                    children: (0, i.jsx)(T.FormSwitch, {
                        value: !t,
                        note: eo.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT_FORMATTED.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.DATA_PRIVACY_CONTROLS) }),
                        onChange: this.handleChangeDropsOptedOut,
                        children: (0, i.jsx)('div', { children: eo.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT })
                    })
                }),
                (0, i.jsxs)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_BASIC_SERVICE,
                    children: [
                        (0, i.jsx)(T.FormTitle, {
                            tag: T.FormTitleTags.H3,
                            className: l()(ec.marginTop20, ec.marginBottom8),
                            children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_TITLE
                        }),
                        (0, i.jsx)(T.FormText, {
                            type: T.FormTextTypes.DESCRIPTION,
                            className: ec.marginBottom20,
                            children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_BASIC_SERVICE_NOTE.format({
                                onClick: () => {
                                    A.Z.setSection(ei.oAB.ACCOUNT);
                                }
                            })
                        }),
                        (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 })
                    ]
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_REQUEST,
                    children: this.renderHarvestRequest()
                })
            ]
        });
    }
    renderHarvestRequest() {
        let e;
        let { currentUser: s } = this.props,
            { requestingHarvest: t, currentHarvestRequest: n } = this.state,
            a = (0, z.$6)(n, s),
            o = (0, i.jsx)(T.Tooltip, {
                text: s.verified ? null : eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_TOOLTIP,
                children: (e) => {
                    let { onMouseEnter: s, onMouseLeave: n } = e;
                    return (0, i.jsx)(T.Button, {
                        disabled: a,
                        onClick: this.handleDataDownloadRequest,
                        onMouseEnter: s,
                        onMouseLeave: n,
                        look: T.Button.Looks.FILLED,
                        color: T.Button.Colors.BRAND,
                        submitting: t,
                        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD
                    });
                }
            });
        return (
            a &&
                null != n &&
                ((e = (0, i.jsx)(T.Card, {
                    className: el.card,
                    children: (0, i.jsx)(T.Text, {
                        variant: 'text-md/normal',
                        children: eo.Z.Messages.DATA_DOWNLOAD_REQUESTED_STATUS_NOTE.format({ date: E()(n.created_at).add(ei.eBq, 'days').format('MMMM Do YYYY') })
                    })
                })),
                (o = null)),
            null != o && (o = (0, i.jsx)(g.Z, { children: o })),
            (0, i.jsxs)(r.Fragment, {
                children: [
                    (0, i.jsx)(T.FormTitle, {
                        tag: T.FormTitleTags.H3,
                        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONAL_DATA_TITLE
                    }),
                    (0, i.jsx)(T.FormText, {
                        type: T.FormTextTypes.DESCRIPTION,
                        className: ec.marginBottom20,
                        children: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_NOTE.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.GDPR_REQUEST_DATA) })
                    }),
                    e,
                    o
                ]
            })
        );
    }
    renderPrivacyAndTermsNote() {
        return (0, i.jsx)(T.FormSection, {
            className: ec.marginBottom40,
            children: (0, i.jsx)(T.FormNotice, {
                type: T.FormNotice.Types.PRIMARY,
                body: eo.Z.Messages.USER_SETTINGS_PRIVACY_TERMS.format({
                    termsLink: ei.EYA.TERMS,
                    privacyLink: ei.EYA.PRIVACY
                })
            })
        });
    }
    renderStaffOnlySettings() {
        let { nonSpamRetrainingOptIn: e } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.FormDivider, { className: ec.marginBottom20 }),
                (0, i.jsxs)(T.FormSection, {
                    className: ec.marginBottom40,
                    children: [
                        (0, i.jsx)(T.FormTitle, {
                            tag: T.FormTitleTags.H5,
                            className: ec.marginBottom8,
                            children: eo.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER
                        }),
                        (0, i.jsxs)(T.FormItem, {
                            tag: T.FormTitleTags.H5,
                            className: ec.marginBottom4,
                            children: [
                                (0, i.jsx)(T.FormText, {
                                    type: T.FormTextTypes.DESCRIPTION,
                                    className: ec.marginBottom8,
                                    children: eo.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_DESC
                                }),
                                (0, i.jsx)(T.RadioGroup, {
                                    options: (0, z.xH)(),
                                    value: null == e ? z.g0.UNDECIDED : e ? z.g0.OPTIN : z.g0.OPTOUT,
                                    onChange: (e) => {
                                        let { value: s } = e;
                                        return Q.kJ.updateSetting(z.ac[s]);
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
    renderSettingsBody() {
        let { fetchedConsents: e } = this.props;
        return (0, i.jsxs)(T.FormSection, {
            tag: T.FormTitleTags.H1,
            title: eo.Z.Messages.PRIVACY_AND_SAFETY,
            children: [
                this.renderDMSafety(),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_KEYWORD_FILTER,
                    children: this.renderKeywordFiltering()
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                    children: this.renderServerPrivacy()
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_DATA_PRIVACY,
                    children: e ? this.renderDataPrivacy() : null
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_TERMS_POLICY,
                    children: this.renderPrivacyAndTermsNote()
                }),
                (0, i.jsx)(G.F, {
                    setting: ea.s6.PRIVACY_STAFF_ONLY,
                    children: this.renderStaffOnlySettings()
                })
            ]
        });
    }
    render() {
        let { isSecureFramesEnabled: e } = this.props;
        return (0, i.jsx)(J.Z, {
            parentSetting: ea.s6.PRIVACY_AND_SAFETY,
            settingsSection: ei.oAB.PRIVACY_AND_SAFETY,
            tabs: [
                {
                    title: eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SETTINGS,
                    component: this.renderSettingsBody(),
                    setting: ea.s6.PRIVACY_USER_SETTINGS
                },
                {
                    title: eo.Z.Messages.PRIVACY_AND_SAFETY_GUILD_TAB_TITLE,
                    component: (0, i.jsx)(e_, {}),
                    setting: ea.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
                },
                {
                    title: eo.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
                    component: (0, i.jsx)(v.Z, {}),
                    setting: ea.s6.PRIVACY_ACCOUNT_STANDING
                },
                {
                    title: eo.Z.Messages.E2EE_ENCRYPTION,
                    component: (0, i.jsx)($.Z, {}),
                    setting: ea.s6.PRIVACY_ENCRYPTION,
                    predicate: () => e && (0, W.isDesktop)()
                }
            ]
        });
    }
    constructor(e) {
        super(e),
            ed(this, 'handleChangeDefaultGuildsRestricted', (e) => {
                this.setState({ defaultGuildsRestricted: !e }, () => this.showGuildRestrictionModal(!e));
            }),
            ed(this, 'handleChangeDropsOptedOut', () => {
                Q.bh.updateSetting(!this.props.dropsOptedOut);
            }),
            ed(this, 'handleUsageStatisticsChange', () => {
                this.props.usageStatistics
                    ? eN({
                          header: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_TITLE,
                          body: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_BODY,
                          confirmText: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CONFIRM,
                          cancelText: eo.Z.Messages.USAGE_STATISTICS_DISABLE_MODAL_CANCEL,
                          onConfirm: () => (0, C.g)([], [ei.pjP.USAGE_STATISTICS]).catch(eC)
                      })
                    : (0, C.g)([ei.pjP.USAGE_STATISTICS], []).catch(eC);
            }),
            ed(this, 'handlePersonalizationChange', () => {
                this.props.personalization
                    ? eN({
                          header: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_TITLE,
                          confirmText: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CONFIRM,
                          cancelText: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_CANCEL,
                          onConfirm: () => {
                              (0, C.g)([], [ei.pjP.PERSONALIZATION]).catch(eC);
                          },
                          body: eo.Z.Messages.PERSONALIZATION_DISABLE_MODAL_BODY
                      })
                    : (0, C.g)([ei.pjP.PERSONALIZATION], []).catch(eC);
            }),
            ed(this, 'handleDataDownloadRequest', () => {
                var e;
                (e = {
                    header: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_TITLE,
                    body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_WEB_NOTE.format({ helpdeskArticle: w.Z.getArticleURL(ei.BhN.GDPR_PACKAGE_CONTENTS) }),
                    confirmText: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CONFIRM,
                    cancelText: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_CANCEL,
                    confirmButtonColor: T.Button.Colors.BRAND,
                    onConfirm: (e) => {
                        this.setState({ requestingHarvest: !0 }, () => {
                            (0, m.V3)(e)
                                .then(
                                    (e) => {
                                        null != e && null != e.body
                                            ? (this.setState({ currentHarvestRequest: e.body }), N.Z.show({ body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_MODAL_SUCCESS }))
                                            : N.Z.show({
                                                  title: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                                  body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                              });
                                    },
                                    () =>
                                        N.Z.show({
                                            title: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_TITLE,
                                            body: eo.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_FAILURE_BODY
                                        })
                                )
                                .finally(() => this.setState({ requestingHarvest: !1 }));
                        });
                    }
                }),
                    (0, T.openModal)((s) =>
                        (0, i.jsx)(eS, {
                            modalProps: s,
                            settings: e
                        })
                    );
            });
        let { defaultGuildsRestricted: s, subsection: t } = e;
        this.state = {
            defaultGuildsRestricted: s,
            currentHarvestRequest: null,
            requestingHarvest: !0,
            selectedTab: null != t ? t : er.SU.SETTINGS
        };
    }
}
function eA() {
    let e = (0, u.e7)([Y.default], () => {
            let e = Y.default.getCurrentUser();
            return d()(null != e, 'ConnectedUserSettingsPrivacySafety: currentUser cannot be undefined'), e;
        }),
        s = (0, u.cj)([F.Z], () => ({
            fetchedConsents: F.Z.fetchedConsents,
            usageStatistics: F.Z.hasConsented(ei.pjP.USAGE_STATISTICS),
            personalization: F.Z.hasConsented(ei.pjP.PERSONALIZATION)
        })),
        t = (0, u.e7)([Z.Z], () => Z.Z.getFetchError()),
        n = (0, u.e7)([V.Z], () => V.Z.getSubsection()),
        a = (0, h.yh)(),
        r = (0, f.Xo)({ location: 'web_user_privacy_and_safety_settings' }),
        { hasSearchResults: o, searchResults: l } = (0, ee.E)(),
        c = (0, D.p)(),
        _ = (0, P.Z)(),
        { enabled: E } = (0, b.S)({ location: 'PrivacySafetySettings' });
    return (0, i.jsx)(em, {
        currentUser: e,
        defaultGuildsRestricted: Q.iG.useSetting(),
        nonSpamRetrainingOptIn: Q.kJ.useSetting(),
        viewNsfwGuilds: Q.DC.useSetting(),
        viewNsfwCommands: Q.xM.useSetting(),
        explicitContentFilter: Q.UP.useSetting(),
        keywordFilter: c,
        dmSpamFilter: Q.Xr.useSetting(),
        showCurrentGame: Q.G6.useSetting(),
        dropsOptedOut: Q.bh.useSetting(),
        safetyHubFetchError: t,
        mediaRedactionIsEnabled: a,
        keywordFilteringExperimentEnabled: r,
        userIsConsideredAdult: null == _ || _,
        subsection: n,
        searchFilter: o ? l : void 0,
        isSecureFramesEnabled: E,
        ...s
    });
}
