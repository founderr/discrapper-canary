"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("512722"),
  o = s.n(r),
  d = s("442837"),
  u = s("692547"),
  c = s("481060"),
  S = s("230711"),
  E = s("129861"),
  T = s("279837"),
  _ = s("952306"),
  f = s("299206"),
  m = s("295474"),
  I = s("144114"),
  g = s("918505"),
  N = s("332473"),
  h = s("921801"),
  C = s("290421"),
  O = s("318661"),
  A = s("80132"),
  p = s("735336"),
  R = s("204197"),
  x = s("25990"),
  M = s("594174"),
  L = s("808268"),
  D = s("759231"),
  P = s("572004"),
  v = s("51144"),
  b = s("998502"),
  j = s("695346"),
  U = s("461877"),
  G = s("726985"),
  F = s("981631"),
  B = s("815660"),
  y = s("801461"),
  k = s("228168"),
  V = s("689938"),
  H = s("276380");
let w = b.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function Y(e) {
  var t, l;
  let {
    className: r,
    user: o
  } = e, d = n.useRef(null), S = (0, g.usePomeloEligibility)(), E = (0, N.useIsEligibleForPomelo)(), T = (0, m.useGuildAutomodProfileQuarantineErrors)(), _ = null !== (l = null == T ? void 0 : null === (t = T.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null, [f, I] = n.useState(!1);
  n.useEffect(() => {
    I(null != d.current && d.current.scrollWidth > d.current.clientWidth)
  }, [o.username]);
  let h = !o.isClaimed(),
    C = S && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || h,
    O = C ? V.default.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, a.jsxs)("div", {
    className: i()(H.field, r),
    children: [(0, a.jsx)("div", {
      className: H.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: H.fieldTitle,
          children: V.default.Messages.USER_SETTINGS_LABEL_USERNAME
        }), (0, a.jsxs)("div", {
          className: H.usernameInnerRow,
          ref: d,
          children: [(0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: o.username
          }), !o.isPomelo() && (0, a.jsxs)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", o.discriminator]
          })]
        })]
      })
    }), E && (0, a.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: V.default.Messages.ACTION_NEEDED,
        children: e => (0, a.jsx)(D.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), null != _ && (0, a.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: _,
        "aria-label": !1,
        children: e => (0, a.jsx)(D.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Tooltip, {
      text: O,
      children: e => (0, a.jsx)(c.Button, {
        ...e,
        disabled: C,
        size: c.Button.Sizes.SMALL,
        className: H.fieldButton,
        color: c.Button.Colors.PRIMARY,
        "aria-label": V.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
        onClick: () => (0, c.openModalLazy)(async () => {
          if (E) {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("85342")]).then(s.bind(s, "193049"));
            return t => (0, a.jsx)(e, {
              source: y.PomeloEntrypoints.USER_SETTINGS_EDIT,
              ...t
            })
          } {
            let {
              default: e
            } = await Promise.all([s.e("99387"), s.e("75492"), s.e("42758")]).then(s.bind(s, "2702"));
            return t => (0, a.jsx)(e, {
              ...t
            })
          }
        }),
        children: f ? V.default.Messages.DISAPPROVAL : V.default.Messages.EDIT
      })
    })]
  })
}

function W(e) {
  var t, s;
  let {
    user: l,
    className: r
  } = e, o = (0, m.useGuildAutomodProfileQuarantineErrors)(), d = null !== (s = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, S = v.default.getGlobalName(l), E = n.useRef(null), [T, _] = n.useState(!1);
  return n.useEffect(() => {
    _(null != E.current && E.current.scrollWidth > E.current.clientWidth)
  }, [S]), (0, a.jsxs)("div", {
    className: i()(H.field, r),
    children: [(0, a.jsx)("div", {
      className: H.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: H.fieldTitle,
          children: V.default.Messages.DISPLAY_NAME
        }), (0, a.jsx)("div", {
          className: H.usernameInnerRow,
          ref: E,
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == S ? V.default.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : S
          })
        })]
      })
    }), null != d && (0, a.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: d,
        "aria-label": !1,
        children: e => (0, a.jsx)(D.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Button, {
      className: H.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": V.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
      onClick: Z,
      children: T ? V.default.Messages.DISAPPROVAL : V.default.Messages.EDIT
    })]
  })
}

function K(e) {
  let {
    text: t,
    censor: s,
    revealLabel: l,
    hideLabel: i
  } = e, [r, o] = n.useState(!1), d = r ? t : s(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [d, (0, a.jsx)(c.Button, {
      look: c.Button.Looks.LINK,
      size: c.Button.Sizes.MIN,
      color: c.Button.Colors.LINK,
      "aria-label": r ? i : l,
      onClick: () => o(!r),
      children: r ? V.default.Messages.HIDE : V.default.Messages.REVEAL
    })]
  })
}

function z(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (l.isClaimed()) {
    if (null == l.email) t = {
      buttonText: V.default.Messages.ADD,
      buttonAriaLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
      buttonColor: c.Button.Colors.PRIMARY,
      valueMessage: V.default.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
      handleClick: () => (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("9343")]).then(s.bind(s, "642298"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    };
    else {
      let {
        email: e
      } = l;
      t = {
        buttonText: V.default.Messages.EDIT,
        buttonAriaLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
        buttonColor: c.Button.Colors.PRIMARY,
        valueMessage: (0, a.jsx)(K, {
          text: e,
          censor: U.censorEmail,
          revealLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
          hideLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
        }),
        handleClick: () => (0, c.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([s.e("99387"), s.e("9343")]).then(s.bind(s, "642298"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      }
    }
  } else t = {
    buttonText: V.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonAriaLabel: V.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonColor: c.Button.Colors.BRAND,
    valueMessage: V.default.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
    handleClick: () => _.default.openClaimAccountModal()
  };
  return (0, a.jsxs)("div", {
    className: i()(H.field, n),
    children: [(0, a.jsx)("div", {
      className: H.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: H.fieldTitle,
          children: V.default.Messages.USER_SETTINGS_LABEL_EMAIL
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, a.jsx)(c.Button, {
      className: H.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": t.buttonAriaLabel,
      onClick: t.handleClick,
      children: t.buttonText
    })]
  })
}

function Q(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (!l.isClaimed()) return null;
  let {
    phone: r,
    email: o
  } = l, d = null != r;
  return t = d ? (0, a.jsx)(K, {
    text: r,
    censor: U.censorPhone,
    revealLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
    hideLabel: V.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : V.default.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, a.jsxs)("div", {
    className: i()(H.field, n),
    children: [(0, a.jsx)("div", {
      className: H.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: H.fieldTitle,
          children: V.default.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
        }), (0, a.jsx)("div", {
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: H.fieldButtonList,
      children: [d && null != o ? (0, a.jsx)(c.Button, {
        className: i()(H.fieldButton, H.removeButton),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        "aria-label": V.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModal)(e => (0, a.jsx)(T.default, {
            ...e,
            title: V.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: l.hasFlag(F.UserFlags.MFA_SMS) ? V.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: V.default.Messages.REMOVE,
            handleSubmit: e => I.default.removePhone(e, I.ChangePhoneReason.USER_SETTINGS_UPDATE)
          }))
        },
        children: V.default.Messages.REMOVE
      }) : null, (0, a.jsx)(c.Button, {
        className: H.fieldButton,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        "aria-label": d ? V.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : V.default.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(s.bind(s, "607018"));
            return t => (0, a.jsx)(e, {
              reason: I.ChangePhoneReason.USER_SETTINGS_UPDATE,
              ...t
            })
          }, {
            modalKey: B.PHONE_VERIFICATION_MODAL_KEY
          })
        },
        children: d ? V.default.Messages.EDIT : V.default.Messages.ADD
      })]
    })]
  })
}

function q(e) {
  let {
    user: t
  } = e, s = (0, f.default)({
    id: t.id,
    label: V.default.Messages.COPY_ID_USER
  });
  return j.DeveloperMode.useSetting() && P.SUPPORTS_COPY ? (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(c.Menu, {
        onClose: t,
        onSelect: void 0,
        navId: "copy-id",
        "aria-label": V.default.Messages.USER_MORE_ACTIONS_MENU_LABEL,
        children: s
      })
    },
    children: e => (0, a.jsx)(c.Clickable, {
      ...e,
      className: H.overflowMenuButton,
      "aria-label": V.default.Messages.ACTIONS,
      children: (0, a.jsx)(L.default, {
        className: H.overflowMenuIcon,
        height: 24,
        width: 24
      })
    })
  }) : null
}

function Z() {
  S.default.setSection(F.UserSettingsSections.PROFILE_CUSTOMIZATION)
}

function X() {
  var e;
  let t = (0, d.useStateFromStores)([M.default], () => {
      let e = M.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    s = (0, O.default)(t.id),
    n = (0, C.default)(s),
    l = j.StatusSetting.useSetting(),
    i = (0, d.useStateFromStores)([x.default], () => x.default.getErrors()),
    r = null == i ? void 0 : null === (e = i.avatar) || void 0 === e ? void 0 : e[0],
    {
      avatarSrc: u,
      avatarDecorationSrc: S
    } = (0, R.default)({
      user: t,
      size: c.AvatarSizes.SIZE_80
    });
  return (0, a.jsxs)("div", {
    className: H.accountProfileCard,
    children: [(0, a.jsx)(p.default, {
      displayProfile: s,
      user: t,
      allowEdit: !1,
      guildId: void 0,
      profileType: k.UserProfileTypes.SETTINGS
    }), (0, a.jsxs)("div", {
      className: H.userInfo,
      children: [(0, a.jsx)(w, {
        className: H.avatar,
        src: u,
        avatarDecoration: S,
        status: l,
        size: c.AvatarSizes.SIZE_80,
        "aria-label": t.username
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: H.profileCardUsernameRow,
          children: [(0, a.jsx)(E.default, {
            user: t,
            className: H.userTag,
            discriminatorClass: H.discriminator
          }), (0, a.jsx)(q, {
            user: t
          })]
        }), (0, a.jsx)(A.default, {
          badges: n,
          className: H.badgeList
        })]
      }), (0, a.jsx)(c.Button, {
        onClick: Z,
        size: c.Button.Sizes.SMALL,
        children: V.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })]
    }), (0, a.jsxs)("div", {
      className: H.background,
      children: [null != r ? (0, a.jsx)(c.Text, {
        className: H.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: r
      }) : null, (0, a.jsxs)("div", {
        className: H.fieldList,
        children: [(0, a.jsx)(h.Subsetting, {
          setting: G.WebSetting.ACCOUNT_DISPLAY_NAME,
          children: (0, a.jsx)(W, {
            className: H.fieldSpacerBottom,
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: G.WebSetting.ACCOUNT_USERNAME,
          children: (0, a.jsx)(Y, {
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: G.WebSetting.ACCOUNT_EMAIL,
          children: (0, a.jsx)(z, {
            className: H.fieldSpacer,
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: G.WebSetting.ACCOUNT_PHONE_NUMBER,
          children: (0, a.jsx)(Q, {
            className: H.fieldSpacer,
            user: t
          })
        })]
      })]
    })]
  })
}