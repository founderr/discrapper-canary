"use strict";
s.r(t), s("653041"), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("780384"),
  c = s("481060"),
  S = s("816814"),
  E = s("809206"),
  T = s("497321"),
  _ = s("279837"),
  f = s("952306"),
  m = s("346585"),
  g = s("347649"),
  I = s("332473"),
  N = s("303172"),
  h = s("484459"),
  C = s("430824"),
  p = s("325067"),
  A = s("246946"),
  O = s("594174"),
  x = s("285952"),
  R = s("474333"),
  M = s("499150"),
  v = s("709054"),
  L = s("706454"),
  D = s("210887"),
  P = s("418632"),
  b = s("730820"),
  j = s("888256"),
  U = s("2719"),
  y = s("194530"),
  G = s("839469"),
  B = s("726985"),
  F = s("981631"),
  k = s("801461"),
  w = s("689938"),
  H = s("493087"),
  V = s("611273");
class Y extends n.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, h.default)(e.id, e.getAvatarURL(void 0, 80))
  }
  componentWillUnmount() {
    S.default.clearBackupCodes(), (0, E.accountDetailsClose)()
  }
  renderAccountWarning() {
    let {
      currentUser: e
    } = this.props;
    if (!e.isClaimed()) {
      let e = (0, a.jsxs)("section", {
        children: [(0, a.jsx)("div", {
          className: H.accountWarningBodyText,
          children: w.default.Messages.UNCLAIMED_ACCOUNT_BODY_2
        }), (0, a.jsx)(c.Button, {
          look: c.ButtonLooks.INVERTED,
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.RED,
          onClick: () => f.default.openClaimAccountModal(),
          children: w.default.Messages.CLAIM_ACCOUNT_LONG
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.DANGER,
        className: V.marginBottom20,
        imageData: {
          src: s("418558"),
          width: 60,
          height: 60
        },
        title: w.default.Messages.UNCLAIMED_ACCOUNT_TITLE,
        body: e
      })
    }
    if (null == e.email) return null;
    if (!e.verified) {
      let e = (0, a.jsxs)("section", {
        children: [(0, a.jsx)("div", {
          className: H.accountWarningBodyText,
          children: w.default.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
        }), (0, a.jsx)(P.default, {
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.PRIMARY
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.PRIMARY,
        className: V.marginBottom20,
        imageData: {
          src: s("449125"),
          width: 60,
          height: 60
        },
        title: w.default.Messages.UNVERIFIED_EMAIL_TITLE,
        body: e
      })
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, a.jsxs)(R.default, {
      className: H.accountWarningBodyText,
      messageType: R.HelpMessageTypes.WARNING,
      children: [this.props.forceMigrationExperiment ? w.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
        date: (0, m.getLocalizedForcedUUDate)(this.props.locale)
      }) : w.default.Messages.POMELO_ACTION_NEEDED.format(), " ", "", (0, a.jsx)(M.default, {
        className: H.noticeTextButton,
        onClick: () => (0, N.default)(k.PomeloEntrypoints.USER_SETTINGS),
        children: w.default.Messages.GET_STARTED
      })]
    }) : null
  }
  renderAccountSettings() {
    return (0, a.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: w.default.Messages.USER_SETTINGS_MY_ACCOUNT,
      className: H.__invalid_userSettingsAccount,
      children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, a.jsx)(U.default, {})]
    })
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t,
      theme: n
    } = this.props, l = (0, u.isThemeDark)(n) ? s("555702") : s("610802");
    return (0, a.jsxs)(c.FormSection, {
      className: i()(H.userSettingsSecurity, V.marginTop40),
      title: w.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      tag: "h1",
      children: [t.mfaEnabled ? (0, a.jsx)(c.FormSection, {
        children: (0, a.jsxs)(c.FormTitle, {
          className: i()(H.isEnabled, V.marginBottom20),
          children: [(0, a.jsx)("img", {
            alt: "",
            className: i()(H.lockIcon),
            src: s("511391")
          }), w.default.Messages.TWO_FA_ENABLED]
        })
      }) : null, (0, a.jsx)("div", {
        children: (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          className: H.changePasswordButton,
          onClick: () => (0, c.openModal)(e => (0, a.jsx)(y.default, {
            ...e,
            onSuccess: e.onClose
          })),
          children: w.default.Messages.CHANGE_PASSWORD
        })
      }), (0, a.jsxs)(x.default, {
        align: x.default.Align.STRETCH,
        children: [(0, a.jsx)(x.default.Child, {
          wrap: !0,
          children: (0, a.jsx)(b.default, {
            backupCodes: e
          })
        }), t.mfaEnabled ? null : (0, a.jsx)(x.default, {
          align: x.default.Align.CENTER,
          basis: "323px",
          grow: 0,
          children: (0, a.jsx)("img", {
            src: l,
            className: H.userSettingsSecurityImage,
            alt: ""
          })
        })]
      })]
    })
  }
  renderConfirmModals() {
    let {
      shouldRenderOwnedGuildsModal: e,
      shouldRenderDeleteAccountConfirmModal: t,
      shouldRenderDisableAccountErrorModal: s,
      disableAccountErrorMessage: n
    } = this.state;
    if (e) {
      let e = () => this.setState({
        shouldRenderOwnedGuildsModal: !1
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: w.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
        confirmText: w.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: w.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
        })
      })
    }
    if (t) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: !1
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: w.default.Messages.DELETE_ACCOUNT,
        confirmText: w.default.Messages.DELETE_ACCOUNT,
        cancelText: w.default.Messages.CANCEL,
        onCancel: e,
        onConfirm: () => (0, E.disableAccount)("", !0).then(e),
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: w.default.Messages.DELETE_ACCOUNT_BODY
        })
      })
    }
    if (s) {
      let e = () => this.setState({
        shouldRenderDisableAccountErrorModal: !1,
        disableAccountErrorMessage: null
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: w.default.Messages.DELETE_ACCOUNT_ERROR,
        confirmText: w.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: n
        })
      })
    }
  }
  render() {
    if (this.props.hide) return (0, a.jsx)(T.default, {});
    let {
      currentUser: e,
      searchFilter: t
    } = this.props, s = [];
    return s.push(this.renderConfirmModals()), null != t && t.length > 0 ? (t.some(e => [B.WebSetting.ACCOUNT_PROFILE, B.WebSetting.ACCOUNT_EMAIL, B.WebSetting.DISPLAY_NAME, B.WebSetting.USERNAME, B.WebSetting.PHONE_NUMBER].includes(e)) && s.push(this.renderAccountSettings()), t.some(e => [B.WebSetting.PASSWORD_AND_AUTHENTICATION, B.WebSetting.MULTI_FACTOR_AUTHENTICATION, B.WebSetting.ACCOUNT_CHANGE_PASSWORD, B.WebSetting.ACCOUNT_CONFIRM_PASSWORD, B.WebSetting.ACCOUNT_ENABLE_2FA, B.WebSetting.ACCOUNT_REMOVE_2FA, B.WebSetting.ACCOUNT_VIEW_BACKUP_CODES, B.WebSetting.ACCOUNT_SMS_BACKUP].includes(e)) && s.push(this.renderSecuritySettings()), t.some(e => [B.WebSetting.ACCOUNT_REMOVAL, B.WebSetting.DELETE_ACCOUNT, B.WebSetting.DISABLE_ACCOUNT].includes(e)) && s.push((0, a.jsx)(j.default, {
      className: V.marginTop40,
      currentUser: e,
      handleDisableAccount: () => this.handleDisableAccount(!1),
      handleDeleteAccount: () => this.handleDisableAccount(!0)
    }))) : (s.push(this.renderAccountSettings()), e.isClaimed() && s.push((0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormDivider, {
        className: V.marginTop40
      }), this.renderSecuritySettings(), (0, a.jsx)(c.FormDivider, {
        className: V.marginTop40
      })]
    })), s.push((0, a.jsx)(j.default, {
      className: V.marginTop40,
      currentUser: e,
      handleDisableAccount: () => this.handleDisableAccount(!1),
      handleDeleteAccount: () => this.handleDisableAccount(!0)
    }))), (0, a.jsx)("div", {
      children: s
    })
  }
  handleDisableAccountError(e) {
    if (e.body.code === F.AbortCodes.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: !0,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, E.disableAccount)(e, t).then(F.NOOP, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        currentUser: t
      } = this.props,
      s = C.default.getGuilds();
    if (v.default.keys(s).filter(e => s[e].ownerId === t.id).length > 0) {
      this.setState({
        shouldRenderOwnedGuildsModal: !0
      });
      return
    }
    t.isClaimed() ? (0, c.openModal)(t => (0, a.jsx)(_.default, {
      ...t,
      handleSubmit: t => this.handleSubmitDisableAccount(t, e),
      title: e ? w.default.Messages.DELETE_ACCOUNT : w.default.Messages.DISABLE_ACCOUNT,
      actionText: e ? w.default.Messages.DELETE_ACCOUNT : w.default.Messages.DISABLE_ACCOUNT,
      children: e ? w.default.Messages.DELETE_ACCOUNT_BODY : w.default.Messages.DISABLE_ACCOUNT_BODY
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
t.default = () => {
  let e = (0, d.useStateFromStores)([O.default], () => {
      let e = O.default.getCurrentUser();
      return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
    }),
    t = (0, d.useStateFromStores)([p.default], () => p.default.getBackupCodes()),
    s = (0, d.useStateFromStores)([A.default], () => A.default.hidePersonalInformation),
    {
      hasSearchResults: n,
      searchResults: l
    } = (0, G.useSettingSearchResults)(),
    i = (0, d.useStateFromStores)([D.default], () => D.default.theme),
    r = (0, I.useIsEligibleForPomelo)(),
    u = (0, g.useForceMigration)(),
    c = (0, d.useStateFromStores)([L.default], () => L.default.locale);
  return (0, a.jsx)(Y, {
    theme: i,
    currentUser: e,
    backupCodes: t,
    hide: s,
    shouldRenderPomeloWarning: r,
    forceMigrationExperiment: u,
    locale: c,
    searchFilter: n && !l.includes(B.WebSetting.ACCOUNT) ? l : void 0
  })
}