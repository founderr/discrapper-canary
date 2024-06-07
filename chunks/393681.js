"use strict";
s.r(t), s("47120");
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
  I = s("952306"),
  N = s("346585"),
  g = s("347649"),
  f = s("332473"),
  m = s("303172"),
  C = s("921801"),
  A = s("484459"),
  h = s("430824"),
  O = s("325067"),
  p = s("246946"),
  R = s("594174"),
  M = s("285952"),
  x = s("474333"),
  D = s("499150"),
  L = s("709054"),
  P = s("706454"),
  b = s("210887"),
  v = s("418632"),
  U = s("730820"),
  j = s("888256"),
  G = s("2719"),
  F = s("194530"),
  B = s("839469"),
  y = s("726985"),
  V = s("981631"),
  H = s("801461"),
  Y = s("689938"),
  k = s("493087"),
  w = s("611273");
class W extends n.PureComponent {
  componentDidMount() {
    let {
      currentUser: e
    } = this.props;
    (0, A.default)(e.id, e.getAvatarURL(void 0, 80))
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
          className: k.accountWarningBodyText,
          children: Y.default.Messages.UNCLAIMED_ACCOUNT_BODY_2
        }), (0, a.jsx)(c.Button, {
          look: c.ButtonLooks.OUTLINED,
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.WHITE,
          onClick: () => I.default.openClaimAccountModal(),
          children: Y.default.Messages.CLAIM_ACCOUNT_LONG
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.DANGER,
        className: w.marginBottom20,
        imageData: {
          src: s("418558"),
          width: 60,
          height: 60
        },
        title: Y.default.Messages.UNCLAIMED_ACCOUNT_TITLE,
        body: e
      })
    }
    if (null == e.email) return null;
    if (!e.verified) {
      let e = (0, a.jsxs)("section", {
        children: [(0, a.jsx)("div", {
          className: k.accountWarningBodyText,
          children: Y.default.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
        }), (0, a.jsx)(v.default, {
          size: c.ButtonSizes.SMALL,
          color: c.Button.Colors.PRIMARY
        })]
      });
      return (0, a.jsx)(c.FormNotice, {
        type: c.FormNotice.Types.PRIMARY,
        className: w.marginBottom20,
        imageData: {
          src: s("449125"),
          width: 60,
          height: 60
        },
        title: Y.default.Messages.UNVERIFIED_EMAIL_TITLE,
        body: e
      })
    }
  }
  renderPomeloWarning() {
    return this.props.shouldRenderPomeloWarning ? (0, a.jsxs)(x.default, {
      className: k.accountWarningBodyText,
      messageType: x.HelpMessageTypes.WARNING,
      children: [this.props.forceMigrationExperiment ? Y.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
        date: (0, N.getLocalizedForcedUUDate)(this.props.locale)
      }) : Y.default.Messages.POMELO_ACTION_NEEDED.format(), " ", "", (0, a.jsx)(D.default, {
        className: k.noticeTextButton,
        onClick: () => (0, m.default)(H.PomeloEntrypoints.USER_SETTINGS),
        children: Y.default.Messages.GET_STARTED
      })]
    }) : null
  }
  renderAccountSettings() {
    return (0, a.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: Y.default.Messages.USER_SETTINGS_MY_ACCOUNT,
      className: k.__invalid_userSettingsAccount,
      children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, a.jsx)(G.default, {})]
    })
  }
  renderSecuritySettings() {
    let {
      backupCodes: e,
      currentUser: t,
      theme: n
    } = this.props, l = (0, u.isThemeDark)(n) ? s("555702") : s("610802");
    return (0, a.jsxs)(c.FormSection, {
      className: i()(k.userSettingsSecurity, w.marginTop40),
      title: Y.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
      tag: "h1",
      children: [t.mfaEnabled ? (0, a.jsx)(c.FormSection, {
        children: (0, a.jsxs)(c.FormTitle, {
          className: i()(k.isEnabled, w.marginBottom20),
          children: [(0, a.jsx)("img", {
            alt: "",
            className: i()(k.lockIcon),
            src: s("511391")
          }), Y.default.Messages.TWO_FA_ENABLED]
        })
      }) : null, (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.ACCOUNT_CHANGE_PASSWORD,
        children: (0, a.jsx)("div", {
          children: (0, a.jsx)(c.Button, {
            size: c.Button.Sizes.SMALL,
            className: k.changePasswordButton,
            onClick: () => (0, c.openModal)(e => (0, a.jsx)(F.default, {
              ...e,
              onSuccess: e.onClose
            })),
            children: Y.default.Messages.CHANGE_PASSWORD
          })
        })
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        children: (0, a.jsxs)(M.default, {
          align: M.default.Align.STRETCH,
          children: [(0, a.jsx)(M.default.Child, {
            wrap: !0,
            children: (0, a.jsx)(U.default, {
              backupCodes: e
            })
          }), t.mfaEnabled ? null : (0, a.jsx)(M.default, {
            align: M.default.Align.CENTER,
            basis: "323px",
            grow: 0,
            children: (0, a.jsx)("img", {
              src: l,
              className: k.userSettingsSecurityImage,
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
        header: Y.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
        confirmText: Y.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: Y.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
        })
      })
    }
    if (t) {
      let e = () => this.setState({
        shouldRenderDeleteAccountConfirmModal: !1
      });
      return (0, a.jsx)(c.DeclarativeConfirmModal, {
        dismissable: !0,
        header: Y.default.Messages.DELETE_ACCOUNT,
        confirmText: Y.default.Messages.DELETE_ACCOUNT,
        cancelText: Y.default.Messages.CANCEL,
        onCancel: e,
        onConfirm: () => (0, E.disableAccount)("", !0).then(e),
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: Y.default.Messages.DELETE_ACCOUNT_BODY
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
        header: Y.default.Messages.DELETE_ACCOUNT_ERROR,
        confirmText: Y.default.Messages.OKAY,
        confirmButtonColor: c.ButtonColors.BRAND,
        onCancel: e,
        onConfirm: e,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: n
        })
      })
    }
    return null
  }
  renderAccountRemovalSettings() {
    let {
      currentUser: e
    } = this.props;
    return (0, a.jsx)(j.default, {
      className: w.marginTop40,
      currentUser: e,
      handleDisableAccount: () => this.handleDisableAccount(!1),
      handleDeleteAccount: () => this.handleDisableAccount(!0)
    })
  }
  render() {
    return this.props.hide ? (0, a.jsx)(T.default, {}) : (0, a.jsxs)("div", {
      children: [this.renderConfirmModals(), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.ACCOUNT_PROFILE,
        children: this.renderAccountSettings()
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        children: this.renderSecuritySettings()
      }), (0, a.jsx)(C.Subsetting, {
        setting: y.WebSetting.ACCOUNT_REMOVAL,
        children: this.renderAccountRemovalSettings()
      })]
    })
  }
  handleDisableAccountError(e) {
    if (e.body.code === V.AbortCodes.INVALID_PASSWORD) throw e;
    this.setState({
      shouldRenderDisableAccountErrorModal: !0,
      disableAccountErrorMessage: e.body.message
    })
  }
  handleSubmitDisableAccount(e, t) {
    return (0, E.disableAccount)(e, t).then(V.NOOP, this.handleDisableAccountError)
  }
  handleDisableAccount() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        currentUser: t
      } = this.props,
      s = h.default.getGuilds();
    if (L.default.keys(s).filter(e => s[e].ownerId === t.id).length > 0) {
      this.setState({
        shouldRenderOwnedGuildsModal: !0
      });
      return
    }
    t.isClaimed() ? (0, c.openModal)(t => (0, a.jsx)(_.default, {
      ...t,
      handleSubmit: t => this.handleSubmitDisableAccount(t, e),
      title: e ? Y.default.Messages.DELETE_ACCOUNT : Y.default.Messages.DISABLE_ACCOUNT,
      actionText: e ? Y.default.Messages.DELETE_ACCOUNT : Y.default.Messages.DISABLE_ACCOUNT,
      children: e ? Y.default.Messages.DELETE_ACCOUNT_BODY : Y.default.Messages.DISABLE_ACCOUNT_BODY
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
  let e = (0, d.useStateFromStores)([R.default], () => {
      let e = R.default.getCurrentUser();
      return o()(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
    }),
    t = (0, d.useStateFromStores)([O.default], () => O.default.getBackupCodes()),
    s = (0, d.useStateFromStores)([p.default], () => p.default.hidePersonalInformation),
    {
      hasSearchResults: n,
      searchResults: l
    } = (0, B.useSettingSearchResults)(),
    i = (0, d.useStateFromStores)([b.default], () => b.default.theme),
    r = (0, f.useIsEligibleForPomelo)(),
    u = (0, g.useForceMigration)(),
    c = (0, d.useStateFromStores)([P.default], () => P.default.locale);
  return (0, a.jsx)(W, {
    theme: i,
    currentUser: e,
    backupCodes: t,
    hide: s,
    shouldRenderPomeloWarning: r,
    forceMigrationExperiment: u,
    locale: c,
    searchFilter: n && !l.includes(y.WebSetting.ACCOUNT) ? l : void 0
  })
}