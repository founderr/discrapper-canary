t(47120);
var n = t(735250),
    a = t(470079),
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
    A = t(346585),
    C = t(347649),
    g = t(332473),
    h = t(303172),
    O = t(518560),
    p = t(921801),
    R = t(484459),
    x = t(430824),
    M = t(325067),
    f = t(246946),
    D = t(594174),
    L = t(709054),
    P = t(706454),
    b = t(187819),
    Z = t(210887),
    v = t(418632),
    j = t(10298),
    B = t(526156),
    U = t(730820),
    G = t(888256),
    F = t(2719),
    y = t(194530),
    V = t(726985),
    Y = t(981631),
    k = t(801461),
    w = t(689938),
    H = t(898005),
    W = t(113207);
class K extends a.PureComponent {
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
                        className: H.accountWarningBodyText,
                        children: w.Z.Messages.UNCLAIMED_ACCOUNT_BODY_2
                    }),
                    (0, n.jsx)(_.Button, {
                        look: _.ButtonLooks.OUTLINED,
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.WHITE,
                        onClick: () => I.Z.openClaimAccountModal(),
                        children: w.Z.Messages.CLAIM_ACCOUNT_LONG
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.DANGER,
                className: W.marginBottom20,
                imageData: {
                    src: t(418558),
                    width: 60,
                    height: 60
                },
                title: w.Z.Messages.UNCLAIMED_ACCOUNT_TITLE,
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, n.jsxs)('section', {
                children: [
                    (0, n.jsx)('div', {
                        className: H.accountWarningBodyText,
                        children: w.Z.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
                    }),
                    (0, n.jsx)(v.Z, {
                        size: _.ButtonSizes.SMALL,
                        color: _.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, n.jsx)(_.FormNotice, {
                type: _.FormNotice.Types.PRIMARY,
                className: W.marginBottom20,
                imageData: {
                    src: t(449125),
                    width: 60,
                    height: 60
                },
                title: w.Z.Messages.UNVERIFIED_EMAIL_TITLE,
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, n.jsxs)(_.HelpMessage, {
                  className: H.accountWarningBodyText,
                  messageType: _.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? w.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({ date: (0, A.IE)(this.props.locale) }) : w.Z.Messages.POMELO_ACTION_NEEDED.format(),
                      ' ',
                      '',
                      (0, n.jsx)(m.Z, {
                          className: H.noticeTextButton,
                          onClick: () => (0, h.Z)(k.Kq.USER_SETTINGS),
                          children: w.Z.Messages.GET_STARTED
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            s = (0, n.jsxs)(n.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, n.jsx)(F.Z, {})]
            });
        return e
            ? (0, n.jsx)(_.FormSection, {
                  tag: _.FormTitleTags.H1,
                  title: w.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                  children: s
              })
            : s;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: s, theme: a } = this.props,
            i = (0, d.wj)(a) ? t(555702) : t(610802);
        return (0, n.jsxs)(_.FormSection, {
            className: r()(H.userSettingsSecurity, W.marginTop40),
            title: w.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            tag: 'h1',
            children: [
                s.mfaEnabled
                    ? (0, n.jsx)(_.FormSection, {
                          children: (0, n.jsxs)(_.FormTitle, {
                              className: r()(H.isEnabled, W.marginBottom20),
                              children: [
                                  (0, n.jsx)('img', {
                                      alt: '',
                                      className: r()(H.lockIcon),
                                      src: t(511391)
                                  }),
                                  w.Z.Messages.TWO_FA_ENABLED
                              ]
                          })
                      })
                    : null,
                (0, n.jsx)(p.F, {
                    setting: V.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, n.jsx)('div', {
                        children: (0, n.jsx)(_.Button, {
                            size: _.Button.Sizes.SMALL,
                            className: H.changePasswordButton,
                            onClick: () =>
                                (0, _.openModal)((e) =>
                                    (0, n.jsx)(y.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: w.Z.Messages.CHANGE_PASSWORD
                        })
                    })
                }),
                (0, n.jsx)(p.F, {
                    setting: V.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, n.jsxs)(N.Z, {
                        align: N.Z.Align.STRETCH,
                        children: [
                            (0, n.jsx)(N.Z.Child, {
                                wrap: !0,
                                children: (0, n.jsx)(U.Z, { backupCodes: e })
                            }),
                            s.mfaEnabled
                                ? null
                                : (0, n.jsx)(N.Z, {
                                      align: N.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, n.jsx)('img', {
                                          src: i,
                                          className: H.userSettingsSecurityImage,
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
                header: w.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
                confirmText: w.Z.Messages.OKAY,
                confirmButtonColor: _.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: w.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
                })
            });
        }
        if (s) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, n.jsx)(_.DeclarativeConfirmModal, {
                dismissable: !0,
                header: w.Z.Messages.DELETE_ACCOUNT,
                confirmText: w.Z.Messages.DELETE_ACCOUNT,
                cancelText: w.Z.Messages.CANCEL,
                onCancel: e,
                onConfirm: () => (0, E.ss)('', !0).then(e),
                children: (0, n.jsx)(_.Text, {
                    variant: 'text-md/normal',
                    children: w.Z.Messages.DELETE_ACCOUNT_BODY
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
                header: w.Z.Messages.DELETE_ACCOUNT_ERROR,
                confirmText: w.Z.Messages.OKAY,
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
        return (0, n.jsx)(G.Z, {
            className: W.marginTop40,
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
                    setting: V.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, n.jsx)(p.F, {
                    setting: V.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, n.jsx)(p.F, {
                    setting: V.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderSafetySettingsRedesignV2() {
        return (0, n.jsx)(j.N, {
            header: w.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
            children: (0, n.jsx)(B.Z, {
                parentSetting: V.s6.ACCOUNT,
                settingsSection: Y.oAB.ACCOUNT,
                panelClassName: H.tabPanel,
                tabs: [
                    {
                        title: w.Z.Messages.SECURITY,
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: V.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: w.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: O.Z,
                        setting: V.s6.PRIVACY_AND_SAFETY_STANDING
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
                            setting: V.s6.ACCOUNT_PROFILE,
                            children: this.renderAccountSettings()
                        }),
                        (0, n.jsx)(p.F, {
                            setting: V.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                            children: this.renderSecuritySettings()
                        }),
                        (0, n.jsx)(p.F, {
                            setting: V.s6.ACCOUNT_REMOVAL,
                            children: this.renderAccountRemovalSettings()
                        })
                    ]
                });
    }
    handleDisableAccountError(e) {
        if (e.body.code === Y.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, s) {
        return (0, E.ss)(e, s).then(Y.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: s } = this.props,
            t = x.Z.getGuilds();
        if (L.default.keys(t).filter((e) => t[e].ownerId === s.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        s.isClaimed()
            ? (0, _.openModal)((s) =>
                  (0, n.jsx)(S.default, {
                      ...s,
                      handleSubmit: (s) => this.handleSubmitDisableAccount(s, e),
                      title: e ? w.Z.Messages.DELETE_ACCOUNT : w.Z.Messages.DISABLE_ACCOUNT,
                      actionText: e ? w.Z.Messages.DELETE_ACCOUNT : w.Z.Messages.DISABLE_ACCOUNT,
                      children: e ? w.Z.Messages.DELETE_ACCOUNT_BODY : w.Z.Messages.DISABLE_ACCOUNT_BODY
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
    let e = (0, c.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return l()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        s = (0, c.e7)([M.Z], () => M.Z.getBackupCodes()),
        t = (0, c.e7)([f.Z], () => f.Z.hidePersonalInformation),
        a = (0, c.e7)([Z.Z], () => Z.Z.theme),
        i = (0, g.b)(),
        r = (0, C.CC)(),
        o = (0, c.e7)([P.default], () => P.default.locale),
        d = (0, b._p)({ location: 'UserSettingsAccount' });
    return (0, n.jsx)(K, {
        theme: a,
        currentUser: e,
        backupCodes: s,
        hide: t,
        shouldRenderPomeloWarning: i,
        forceMigrationExperiment: r,
        locale: o,
        isEligibleForSafetySettingsRedesign: d
    });
};
