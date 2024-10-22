t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(780384),
    _ = t(481060),
    u = t(816814),
    E = t(809206),
    T = t(497321),
    S = t(279837),
    I = t(952306),
    N = t(600164),
    m = t(690221),
    C = t(346585),
    A = t(347649),
    g = t(332473),
    h = t(303172),
    O = t(518560),
    p = t(921801),
    R = t(484459),
    x = t(430824),
    M = t(325067),
    f = t(246946),
    D = t(663389),
    L = t(594174),
    P = t(626135),
    b = t(709054),
    Z = t(706454),
    v = t(187819),
    j = t(210887),
    B = t(418632),
    U = t(10298),
    G = t(526156),
    F = t(730820),
    y = t(888256),
    V = t(2719),
    Y = t(194530),
    k = t(726985),
    w = t(981631),
    H = t(801461),
    W = t(689938),
    K = t(898005),
    z = t(113207);
class Q extends a.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, R.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        u.Z.clearBackupCodes(), (0, E.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, n.jsxs)('section', {
                children: [
                    (0, n.jsx)('div', {
                        className: K.accountWarningBodyText,
                        children: W.Z.Messages.UNCLAIMED_ACCOUNT_BODY_2
                    }),
                    (0, n.jsx)(_.Button, {
                        look: _.ButtonLooks.OUTLINED,
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.WHITE,
                        onClick: () => I.Z.openClaimAccountModal(),
                        children: W.Z.Messages.CLAIM_ACCOUNT_LONG
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.DANGER,
                className: z.marginBottom20,
                imageData: {
                    src: t(418558),
                    width: 60,
                    height: 60
                },
                title: W.Z.Messages.UNCLAIMED_ACCOUNT_TITLE,
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, n.jsxs)('section', {
                children: [
                    (0, n.jsx)('div', {
                        className: K.accountWarningBodyText,
                        children: W.Z.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
                    }),
                    (0, n.jsx)(B.Z, {
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.PRIMARY,
                className: z.marginBottom20,
                imageData: {
                    src: t(449125),
                    width: 60,
                    height: 60
                },
                title: W.Z.Messages.UNVERIFIED_EMAIL_TITLE,
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, n.jsxs)(_.HelpMessage, {
                  className: K.accountWarningBodyText,
                  messageType: _.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? W.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, C.IE)(this.props.locale) }) : W.Z.Messages.POMELO_ACTION_NEEDED.format(),
                      ' ',
                      '',
                      (0, n.jsx)(m.Z, {
                          className: K.noticeTextButton,
                          onClick: () => (0, h.Z)(H.Kq.USER_SETTINGS),
                          children: W.Z.Messages.GET_STARTED
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            s = (0, n.jsxs)(n.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, n.jsx)(V.Z, {})]
            });
        return e
            ? (0, n.jsx)(_.FormSection, {
                  tag: _.FormTitleTags.H1,
                  title: W.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                  children: s
              })
            : s;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: s, theme: a } = this.props,
            i = (0, d.wj)(a) ? t(555702) : t(610802);
        return (0, n.jsxs)(_.FormSection, {
            className: r()(K.userSettingsSecurity, z.marginTop40),
            title: W.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            tag: 'h1',
            children: [
                s.mfaEnabled
                    ? (0, n.jsx)(_.FormSection, {
                          children: (0, n.jsxs)(_.FormTitle, {
                              className: r()(K.isEnabled, z.marginBottom20),
                              children: [
                                  (0, n.jsx)('img', {
                                      alt: '',
                                      className: r()(K.lockIcon),
                                      src: t(511391)
                                  }),
                                  W.Z.Messages.TWO_FA_ENABLED
                              ]
                          })
                      })
                    : null,
                (0, n.jsx)(p.F, {
                    setting: k.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, n.jsx)('div', {
                        children: (0, n.jsx)(_.Button, {
                            size: _.Button.Sizes.SMALL,
                            className: K.changePasswordButton,
                            onClick: () =>
                                (0, _.openModal)((e) =>
                                    (0, n.jsx)(Y.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: W.Z.Messages.CHANGE_PASSWORD
                        })
                    })
                }),
                (0, n.jsx)(p.F, {
                    setting: k.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, n.jsxs)(N.Z, {
                        align: N.Z.Align.STRETCH,
                        children: [
                            (0, n.jsx)(N.Z.Child, {
                                wrap: !0,
                                children: (0, n.jsx)(F.Z, { backupCodes: e })
                            }),
                            s.mfaEnabled
                                ? null
                                : (0, n.jsx)(N.Z, {
                                      align: N.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: i,
                                          className: K.userSettingsSecurityImage,
                                          alt: ''
                                      })
                                  })
                        ]
                    })
                })
            ]
        });
    }
    renderConfirmModals() {
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: s, shouldRenderDisableAccountErrorModal: t, disableAccountErrorMessage: a } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
                confirmText: W.Z.Messages.OKAY,
                confirmButtonColor: _.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: W.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
                })
            });
        }
        if (s) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.Z.Messages.DELETE_ACCOUNT,
                confirmText: W.Z.Messages.DELETE_ACCOUNT,
                cancelText: W.Z.Messages.CANCEL,
                onCancel: e,
                onConfirm: () => (0, E.ss)('', !0).then(e),
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: W.Z.Messages.DELETE_ACCOUNT_BODY
                })
            });
        }
        if (t) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.Z.Messages.DELETE_ACCOUNT_ERROR,
                confirmText: W.Z.Messages.OKAY,
                confirmButtonColor: _.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: a
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, n.jsx)(y.Z, {
            className: z.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, n.jsx)(p.F, {
                    setting: k.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, n.jsx)(p.F, {
                    setting: k.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, n.jsx)(p.F, {
                    setting: k.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderSafetySettingsRedesignV2() {
        let { subsection: e } = this.props;
        return (0, n.jsx)(U.N, {
            header: W.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
            children: (0, n.jsx)(G.Z, {
                parentSetting: k.s6.ACCOUNT,
                settingsSection: w.oAB.ACCOUNT,
                panelClassName: K.tabPanel,
                onTabChange: (e) => {
                    P.default.track(w.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === k.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: W.Z.Messages.SECURITY,
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: k.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: W.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: O.Z,
                        setting: k.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide
            ? (0, n.jsx)(T.Z, {})
            : this.props.isEligibleForSafetySettingsRedesign
              ? this.renderSafetySettingsRedesignV2()
              : (0, n.jsxs)('div', {
                    children: [
                        this.renderConfirmModals(),
                        (0, n.jsx)(p.F, {
                            setting: k.s6.ACCOUNT_PROFILE,
                            children: this.renderAccountSettings()
                        }),
                        (0, n.jsx)(p.F, {
                            setting: k.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                            children: this.renderSecuritySettings()
                        }),
                        (0, n.jsx)(p.F, {
                            setting: k.s6.ACCOUNT_REMOVAL,
                            children: this.renderAccountRemovalSettings()
                        })
                    ]
                });
    }
    handleDisableAccountError(e) {
        if (e.body.code === w.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, s) {
        return (0, E.ss)(e, s).then(w.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: s } = this.props,
            t = x.Z.getGuilds();
        if (b.default.keys(t).filter((e) => t[e].ownerId === s.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        s.isClaimed()
            ? (0, _.openModal)((s) =>
                  (0, n.jsx)(S.default, {
                      ...s,
                      handleSubmit: (s) => this.handleSubmitDisableAccount(s, e),
                      title: e ? W.Z.Messages.DELETE_ACCOUNT : W.Z.Messages.DISABLE_ACCOUNT,
                      actionText: e ? W.Z.Messages.DELETE_ACCOUNT : W.Z.Messages.DISABLE_ACCOUNT,
                      children: e ? W.Z.Messages.DELETE_ACCOUNT_BODY : W.Z.Messages.DISABLE_ACCOUNT_BODY
                  })
              )
            : this.setState({ shouldRenderDeleteAccountConfirmModal: !0 });
    }
    constructor(e) {
        super(e),
            (this.state = {
                disableAccountErrorMessage: null,
                shouldRenderOwnedGuildsModal: !1,
                shouldRenderDeleteAccountConfirmModal: !1,
                shouldRenderDisableAccountErrorModal: !1
            });
    }
}
s.Z = () => {
    let e = (0, c.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        s = (0, c.e7)([M.Z], () => M.Z.getBackupCodes()),
        t = (0, c.e7)([f.Z], () => f.Z.hidePersonalInformation),
        a = (0, c.e7)([j.Z], () => j.Z.theme),
        i = (0, g.b)(),
        r = (0, A.CC)(),
        o = (0, c.e7)([Z.default], () => Z.default.locale),
        d = (0, v._p)({ location: 'UserSettingsAccount' }),
        _ = (0, c.e7)([D.Z], () => D.Z.getSubsection());
    return (0, n.jsx)(Q, {
        theme: a,
        currentUser: e,
        backupCodes: s,
        hide: t,
        shouldRenderPomeloWarning: i,
        forceMigrationExperiment: r,
        locale: o,
        isEligibleForSafetySettingsRedesign: d,
        subsection: _
    });
};
