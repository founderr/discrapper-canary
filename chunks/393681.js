t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  E = t(780384),
  d = t(481060),
  _ = t(816814),
  T = t(809206),
  S = t(497321),
  u = t(279837),
  I = t(952306),
  N = t(346585),
  A = t(347649),
  C = t(332473),
  O = t(303172),
  m = t(921801),
  h = t(484459),
  g = t(430824),
  R = t(325067),
  M = t(246946),
  x = t(594174),
  p = t(285952),
  D = t(474333),
  L = t(499150),
  P = t(709054),
  Z = t(706454),
  f = t(210887),
  j = t(418632),
  v = t(730820),
  U = t(888256),
  B = t(2719),
  b = t(194530),
  G = t(726985),
  F = t(981631),
  V = t(801461),
  y = t(689938),
  Y = t(402669),
  H = t(331651);
class k extends i.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, h.Z)(e.id, e.getAvatarURL(void 0, 80))
  }
  componentWillUnmount() {
    _.Z.clearBackupCodes(), (0, T.Zy)()
  }
  renderAccountWarning() {
    let {
      currentUser: e
    } = this.props;
    if (!e.isClaimed()) {
      let e = (0, n.jsxs)("section", {
        children: [(0, n.jsx)("div", {
          className: Y.accountWarningBodyText,
          children: y.Z.Messages.UNCLAIMED_ACCOUNT_BODY_2
        }), (0, n.jsx)(d.Button, {
          look: d.ButtonLooks.OUTLINED,
          size: d.ButtonSizes.SMALL,
          color: d.Button.Colors.WHITE,
          onClick: () => I.Z.openClaimAccountModal(),
          children: y.Z.Messages.CLAIM_ACCOUNT_LONG
        })]
      });
      return (0, n.jsx)(d.FormNotice, {
        type: d.FormNotice.Types.DANGER,
        className: H.marginBottom20,
        imageData: {
          src: t(418558),
          width: 60,
          height: 60
        },
        title: y.Z.Messages.UNCLAIMED_ACCOUNT_TITLE,
        body: e
      })
    }
    if (null == e.email) return null;
    if (!e.verified) {
      let e = (0, n.jsxs)("section", {
        children: [(0, n.jsx)("div", {
          className: Y.accountWarningBodyText,
          children: y.Z.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
        }), (0, n.jsx)(j.Z, {
          size: d.ButtonSizes.SMALL,
          color: d.Button.Colors.PRIMARY
        })]
      });
      return (0, n.jsx)(d.FormNotice, {
        type: d.FormNotice.Types.PRIMARY,
        className: H.marginBottom20,
        imageData: {
          src: t(449125),
          width: 60,
          height: 60
        },
        title: y.Z.Messages.UNVERIFIED_EMAIL_TITLE,
        body: e
      })
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, n.jsxs)(D.Z, {
      className: Y.accountWarningBodyText,
      messageType: D.Q.WARNING,
      children: [this.props.forceMigrationExperiment ? y.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({
        date: (0, N.IE)(this.props.locale)
      }) : y.Z.Messages.POMELO_ACTION_NEEDED.format(), " ", "", (0, n.jsx)(L.Z, {
        className: Y.noticeTextButton,
        onClick: () => (0, O.Z)(V.Kq.USER_SETTINGS),
        children: y.Z.Messages.GET_STARTED
      })]
    }) : null
  }
  renderAccountSettings() {
    return (0, n.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: y.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
      className: Y.__invalid_userSettingsAccount,
      children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, n.jsx)(B.Z, {})]
    })
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: s,
      theme: i
    } = this.props, a = (0, E.wj)(i) ? t(555702) : t(610802);
    return (0, n.jsxs)(d.FormSection, {
      className: l()(Y.userSettingsSecurity, H.marginTop40),
      title: y.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      tag: "h1",
      children: [s.mfaEnabled ? (0, n.jsx)(d.FormSection, {
        children: (0, n.jsxs)(d.FormTitle, {
          className: l()(Y.isEnabled, H.marginBottom20),
          children: [(0, n.jsx)("img", {
            alt: "",
            className: l()(Y.lockIcon),
            src: t(511391)
          }), y.Z.Messages.TWO_FA_ENABLED]
        })
      }) : null, (0, n.jsx)(m.F, {
        setting: G.s6.ACCOUNT_CHANGE_PASSWORD,
        children: (0, n.jsx)("div", {
          children: (0, n.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            className: Y.changePasswordButton,
            onClick: () => (0, d.openModal)(e => (0, n.jsx)(b.default, {
              ...e,
              onSuccess: e.onClose
            })),
            children: y.Z.Messages.CHANGE_PASSWORD
          })
        })
      }), (0, n.jsx)(m.F, {
        setting: G.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, n.jsxs)(p.Z, {
          align: p.Z.Align.STRETCH,
          children: [(0, n.jsx)(p.Z.Child, {
            wrap: !0,
            children: (0, n.jsx)(v.Z, {
              backupCodes: e
            })
          }), s.mfaEnabled ? null : (0, n.jsx)(p.Z, {
            align: p.Z.Align.CENTER,
            basis: "323px",
            grow: 0,
            children: (0, n.jsx)("img", {
              src: a,
              className: Y.userSettingsSecurityImage,
              alt: ""
            })
          })]
        })
      })]
    })
  }
  renderConfirmModals() {
    let {
      shouldRenderOwnedGuildsModal: e,
      shouldRenderDeleteAccountConfirmModal: s,
      shouldRenderDisableAccountErrorModal: t,
      disableAccountErrorMessage: i
    } = this.state;
    if (e) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: !1
      });
      return (0, n.jsx)(d.DeclarativeConfirmModal, {
        dismissable: !0,
        header: y.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
        confirmText: y.Z.Messages.OKAY,
        confirmButtonColor: d.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          children: y.Z.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
        })
      })
    }
    if (s) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: !1
      });
      return (0, n.jsx)(d.DeclarativeConfirmModal, {
        dismissable: !0,
        header: y.Z.Messages.DELETE_ACCOUNT,
        confirmText: y.Z.Messages.DELETE_ACCOUNT,
        cancelText: y.Z.Messages.CANCEL,
        onCancel: e,
        onConfirm: () => (0, T.ss)("", !0).then(e),
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          children: y.Z.Messages.DELETE_ACCOUNT_BODY
        })
      })
    }
    if (t) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: !1,
        disableAccountErrorMessage: null
      });
      return (0, n.jsx)(d.DeclarativeConfirmModal, {
        dismissable: !0,
        header: y.Z.Messages.DELETE_ACCOUNT_ERROR,
        confirmText: y.Z.Messages.OKAY,
        confirmButtonColor: d.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, n.jsx)(d.Text, {
          variant: "text-md/normal",
          children: i
        })
      })
    }
    return null
  }
  renderAccountRemovalSettings() {
    let {
      currentUser: e
    } = this.props;
    return (0, n.jsx)(U.Z, {
      className: H.marginTop40,
      currentUser: e,
      handleDisableAccount: () => this.handleDisableAccount(!1),
      handleDeleteAccount: () => this.handleDisableAccount(!0)
    })
  }
  render() {
    return this.props.hide ? (0, n.jsx)(S.Z, {}) : (0, n.jsxs)("div", {
      children: [this.renderConfirmModals(), (0, n.jsx)(m.F, {
        setting: G.s6.ACCOUNT_PROFILE,
        children: this.renderAccountSettings()
      }), (0, n.jsx)(m.F, {
        setting: G.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, n.jsx)(m.F, {
        setting: G.s6.ACCOUNT_REMOVAL,
        children: this.renderAccountRemovalSettings()
      })]
    })
  }
  handleDisableAccountError(e) {
    if (e.body.code === F.evJ.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: !0,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, s) {
    return (0, T.ss)(e, s).then(F.dG4, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        currentUser: s
      } = this.props,
      t = g.Z.getGuilds();
    if (P.default.keys(t).filter(e => t[e].ownerId === s.id).length > 0) {
      this.setState({
        shouldRenderOwnedGuildsModal: !0
      });
      return
    }
    s.isClaimed() ? (0, d.openModal)(s => (0, n.jsx)(u.default, {
      ...s,
      handleSubmit: s => this.handleSubmitDisableAccount(s, e),
      title: e ? y.Z.Messages.DELETE_ACCOUNT : y.Z.Messages.DISABLE_ACCOUNT,
      actionText: e ? y.Z.Messages.DELETE_ACCOUNT : y.Z.Messages.DISABLE_ACCOUNT,
      children: e ? y.Z.Messages.DELETE_ACCOUNT_BODY : y.Z.Messages.DISABLE_ACCOUNT_BODY
    })) : this.setState({
      shouldRenderDeleteAccountConfirmModal: !0
    })
  }
  constructor(e) {
    super(e), this.state = {
      disableAccountErrorMessage: null,
      shouldRenderOwnedGuildsModal: !1,
      shouldRenderDeleteAccountConfirmModal: !1,
      shouldRenderDisableAccountErrorModal: !1
    }
  }
}
s.Z = () => {
  let e = (0, c.e7)([x.default], () => {
      let e = x.default.getCurrentUser();
      return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
    }),
    s = (0, c.e7)([R.Z], () => R.Z.getBackupCodes()),
    t = (0, c.e7)([M.Z], () => M.Z.hidePersonalInformation),
    i = (0, c.e7)([f.Z], () => f.Z.theme),
    a = (0, C.b)(),
    l = (0, A.CC)(),
    r = (0, c.e7)([Z.default], () => Z.default.locale);
  return (0, n.jsx)(k, {
    theme: i,
    currentUser: e,
    backupCodes: s,
    hide: t,
    shouldRenderPomeloWarning: a,
    forceMigrationExperiment: l,
    locale: r
  })
}