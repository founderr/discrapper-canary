n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(780384),
    u = n(481060),
    m = n(816814),
    h = n(809206),
    g = n(497321),
    p = n(279837),
    x = n(952306),
    S = n(600164),
    T = n(690221),
    C = n(346585),
    E = n(347649),
    _ = n(332473),
    I = n(303172),
    f = n(518560),
    N = n(921801),
    A = n(484459),
    b = n(430824),
    v = n(325067),
    j = n(246946),
    O = n(663389),
    R = n(594174),
    P = n(626135),
    D = n(709054),
    y = n(706454),
    B = n(187819),
    L = n(210887),
    Z = n(418632),
    F = n(10298),
    M = n(526156),
    k = n(730820),
    w = n(888256),
    U = n(2719),
    V = n(194530),
    G = n(273927),
    Y = n(726985),
    H = n(981631),
    z = n(801461),
    W = n(388032),
    K = n(100016),
    q = n(971436);
class Q extends s.PureComponent {
    componentDidMount() {
        let { currentUser: e } = this.props;
        (0, A.Z)(e.id, e.getAvatarURL(void 0, 80));
    }
    componentWillUnmount() {
        m.Z.clearBackupCodes(), (0, h.Zy)();
    }
    renderAccountWarning() {
        let { currentUser: e } = this.props;
        if (!e.isClaimed()) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: K.accountWarningBodyText,
                        children: W.intl.string(W.t.qKs3vr)
                    }),
                    (0, i.jsx)(u.Button, {
                        look: u.ButtonLooks.OUTLINED,
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.WHITE,
                        onClick: () => x.Z.openClaimAccountModal(),
                        children: W.intl.string(W.t['7psymp'])
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.DANGER,
                className: q.marginBottom20,
                imageData: {
                    src: n(418558),
                    width: 60,
                    height: 60
                },
                title: W.intl.string(W.t['/3qnLy']),
                body: e
            });
        }
        if (null == e.email) return null;
        if (!e.verified) {
            let e = (0, i.jsxs)('section', {
                children: [
                    (0, i.jsx)('div', {
                        className: K.accountWarningBodyText,
                        children: W.intl.string(W.t.NAzplJ)
                    }),
                    (0, i.jsx)(Z.Z, {
                        size: u.ButtonSizes.SMALL,
                        color: u.Button.Colors.PRIMARY
                    })
                ]
            });
            return (0, i.jsx)(u.FormNotice, {
                type: u.FormNotice.Types.PRIMARY,
                className: q.marginBottom20,
                imageData: {
                    src: n(449125),
                    width: 60,
                    height: 60
                },
                title: W.intl.string(W.t.tuGzBQ),
                body: e
            });
        }
    }
    renderPomeloWarning() {
        return this.props.shouldRenderPomeloWarning
            ? (0, i.jsxs)(u.HelpMessage, {
                  className: K.accountWarningBodyText,
                  messageType: u.HelpMessageTypes.WARNING,
                  children: [
                      this.props.forceMigrationExperiment ? W.intl.format(W.t.zT1hgo, { date: (0, C.IE)(this.props.locale) }) : W.intl.format(W.t.pdYZys, {}),
                      ' ',
                      '',
                      (0, i.jsx)(T.Z, {
                          className: K.noticeTextButton,
                          onClick: () => (0, I.Z)(z.Kq.USER_SETTINGS),
                          children: W.intl.string(W.t.LhlgY2)
                      })
                  ]
              })
            : null;
    }
    renderAccountSettings() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
            t = (0, i.jsxs)(i.Fragment, {
                children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, i.jsx)(U.Z, {})]
            });
        return e
            ? (0, i.jsx)(u.FormSection, {
                  tag: u.FormTitleTags.H1,
                  title: W.intl.string(W.t['JAIM/v']),
                  children: t
              })
            : t;
    }
    renderSecuritySettings() {
        let { backupCodes: e, currentUser: t, theme: s } = this.props,
            r = (0, d.wj)(s) ? n(555702) : n(610802);
        return (0, i.jsxs)(u.FormSection, {
            className: l()(K.userSettingsSecurity, q.marginTop40),
            title: W.intl.string(W.t.pKSjEh),
            tag: 'h1',
            children: [
                t.mfaEnabled
                    ? (0, i.jsx)(u.FormSection, {
                          children: (0, i.jsxs)(u.FormTitle, {
                              className: l()(K.isEnabled, q.marginBottom20),
                              children: [
                                  (0, i.jsx)('img', {
                                      alt: '',
                                      className: l()(K.lockIcon),
                                      src: n(511391)
                                  }),
                                  W.intl.string(W.t.FsmBy8)
                              ]
                          })
                      })
                    : null,
                (0, i.jsx)(N.F, {
                    setting: Y.s6.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, i.jsx)('div', {
                        children: (0, i.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            className: K.changePasswordButton,
                            onClick: () =>
                                (0, u.openModal)((e) =>
                                    (0, i.jsx)(V.default, {
                                        ...e,
                                        onSuccess: e.onClose
                                    })
                                ),
                            children: W.intl.string(W.t['FRep5+'])
                        })
                    })
                }),
                (0, i.jsx)(N.F, {
                    setting: Y.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, i.jsxs)(S.Z, {
                        align: S.Z.Align.STRETCH,
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                wrap: !0,
                                children: (0, i.jsx)(k.Z, { backupCodes: e })
                            }),
                            t.mfaEnabled
                                ? null
                                : (0, i.jsx)(S.Z, {
                                      align: S.Z.Align.CENTER,
                                      basis: '323px',
                                      grow: 0,
                                      children: (0, i.jsx)('img', {
                                          src: r,
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
        let { shouldRenderOwnedGuildsModal: e, shouldRenderDeleteAccountConfirmModal: t, shouldRenderDisableAccountErrorModal: n, disableAccountErrorMessage: s } = this.state;
        if (e) {
            let e = () => this.setState({ shouldRenderOwnedGuildsModal: !1 });
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.intl.string(W.t.I5UrbW),
                confirmText: W.intl.string(W.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: W.intl.string(W.t.UyVVam)
                })
            });
        }
        if (t) {
            let e = () => this.setState({ shouldRenderDeleteAccountConfirmModal: !1 });
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.intl.string(W.t['8lQ2ra']),
                confirmText: W.intl.string(W.t['8lQ2ra']),
                cancelText: W.intl.string(W.t['ETE/oK']),
                onCancel: e,
                onConfirm: () => (0, h.ss)('', !0).then(e),
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: W.intl.string(W.t.FB4H1N)
                })
            });
        }
        if (n) {
            let e = () =>
                this.setState({
                    shouldRenderDisableAccountErrorModal: !1,
                    disableAccountErrorMessage: null
                });
            return (0, i.jsx)(u.DeclarativeConfirmModal, {
                dismissable: !0,
                header: W.intl.string(W.t.LX0nT0),
                confirmText: W.intl.string(W.t.BddRzc),
                confirmButtonColor: u.ButtonColors.BRAND,
                onCancel: e,
                onConfirm: e,
                children: (0, i.jsx)(u.Text, {
                    variant: 'text-md/normal',
                    children: s
                })
            });
        }
        return null;
    }
    renderAccountRemovalSettings() {
        let { currentUser: e } = this.props;
        return (0, i.jsx)(w.Z, {
            className: q.marginTop40,
            currentUser: e,
            handleDisableAccount: () => this.handleDisableAccount(!1),
            handleDeleteAccount: () => this.handleDisableAccount(!0)
        });
    }
    renderSecuritySettingsRedesign() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                this.renderConfirmModals(),
                (0, i.jsx)(N.F, {
                    setting: Y.s6.ACCOUNT_PROFILE,
                    children: this.renderAccountSettings(!1)
                }),
                (0, i.jsx)(N.F, {
                    setting: Y.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                    children: this.renderSecuritySettings()
                }),
                (0, i.jsx)(N.F, {
                    setting: Y.s6.ACCOUNT_REMOVAL,
                    children: this.renderAccountRemovalSettings()
                })
            ]
        });
    }
    renderSafetySettingsRedesignV2() {
        let { subsection: e } = this.props;
        return (0, i.jsx)(F.N, {
            header: W.intl.string(W.t['JAIM/v']),
            children: (0, i.jsx)(M.Z, {
                parentSetting: Y.s6.ACCOUNT,
                settingsSection: H.oAB.ACCOUNT,
                panelClassName: K.tabPanel,
                onTabChange: (e) => {
                    P.default.track(H.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: e === Y.s6.ACCOUNT_SECURITY_TAB ? 'SECURITY' : 'STANDING' });
                },
                defaultTabIndex: 'ACCOUNT_STANDING' === e ? 1 : void 0,
                tabs: [
                    {
                        title: W.intl.string(W.t.Am9YHh),
                        component: () => this.renderSecuritySettingsRedesign(),
                        setting: Y.s6.ACCOUNT_SECURITY_TAB
                    },
                    {
                        title: W.intl.string(W.t['Vov/9v']),
                        component: f.Z,
                        setting: Y.s6.PRIVACY_AND_SAFETY_STANDING
                    }
                ]
            })
        });
    }
    render() {
        return this.props.hide
            ? (0, i.jsx)(g.Z, {})
            : this.props.isEligibleForSafetySettingsRedesign
              ? this.renderSafetySettingsRedesignV2()
              : (0, i.jsxs)('div', {
                    children: [
                        this.renderConfirmModals(),
                        (0, i.jsx)(N.F, {
                            setting: Y.s6.ACCOUNT_PROFILE,
                            children: this.renderAccountSettings()
                        }),
                        (0, i.jsx)(N.F, {
                            setting: Y.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                            children: this.renderSecuritySettings()
                        }),
                        (0, i.jsx)('div', {
                            className: q.marginTop40,
                            children: (0, i.jsx)(G.ZP, {})
                        }),
                        (0, i.jsx)(N.F, {
                            setting: Y.s6.ACCOUNT_REMOVAL,
                            children: this.renderAccountRemovalSettings()
                        })
                    ]
                });
    }
    handleDisableAccountError(e) {
        if (e.body.code === H.evJ.INVALID_PASSWORD) throw e;
        this.setState({
            shouldRenderDisableAccountErrorModal: !0,
            disableAccountErrorMessage: e.body.message
        });
    }
    handleSubmitDisableAccount(e, t) {
        return (0, h.ss)(e, t).then(H.dG4, this.handleDisableAccountError);
    }
    handleDisableAccount() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            { currentUser: t } = this.props,
            n = b.Z.getGuilds();
        if (D.default.keys(n).filter((e) => n[e].ownerId === t.id).length > 0) {
            this.setState({ shouldRenderOwnedGuildsModal: !0 });
            return;
        }
        t.isClaimed()
            ? (0, u.openModal)((t) =>
                  (0, i.jsx)(p.default, {
                      ...t,
                      handleSubmit: (t) => this.handleSubmitDisableAccount(t, e),
                      title: e ? W.intl.string(W.t['8lQ2ra']) : W.intl.string(W.t.jf5GGR),
                      actionText: e ? W.intl.string(W.t['8lQ2ra']) : W.intl.string(W.t.jf5GGR),
                      children: e ? W.intl.string(W.t.FB4H1N) : W.intl.string(W.t.gk7h39)
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
t.Z = () => {
    let e = (0, c.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return o()(null != e, 'ConnectedUserAccountSettings: currentUser cannot be undefined'), e;
        }),
        t = (0, c.e7)([v.Z], () => v.Z.getBackupCodes()),
        n = (0, c.e7)([j.Z], () => j.Z.hidePersonalInformation),
        s = (0, c.e7)([L.Z], () => L.Z.theme),
        r = (0, _.b)(),
        l = (0, E.CC)(),
        a = (0, c.e7)([y.default], () => y.default.locale),
        d = (0, B._p)({ location: 'UserSettingsAccount' }),
        u = (0, c.e7)([O.Z], () => O.Z.getSubsection());
    return (0, i.jsx)(Q, {
        theme: s,
        currentUser: e,
        backupCodes: t,
        hide: n,
        shouldRenderPomeloWarning: r,
        forceMigrationExperiment: l,
        locale: a,
        isEligibleForSafetySettingsRedesign: d,
        subsection: u
    });
};
