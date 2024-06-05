"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Z
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
  I = s("299206"),
  f = s("295474"),
  m = s("144114"),
  N = s("918505"),
  g = s("332473"),
  h = s("921801"),
  C = s("290421"),
  O = s("318661"),
  A = s("80132"),
  p = s("735336"),
  R = s("204197"),
  x = s("25990"),
  M = s("594174"),
  D = s("808268"),
  L = s("759231"),
  P = s("572004"),
  v = s("51144"),
  b = s("998502"),
  U = s("695346"),
  j = s("461877"),
  F = s("726985"),
  G = s("981631"),
  B = s("815660"),
  y = s("801461"),
  V = s("228168"),
  H = s("689938"),
  k = s("276380");
let w = b.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function Y(e) {
  var t, l;
  let {
    className: r,
    user: o
  } = e, d = n.useRef(null), S = (0, N.usePomeloEligibility)(), E = (0, g.useIsEligibleForPomelo)(), T = (0, f.useGuildAutomodProfileQuarantineErrors)(), _ = null !== (l = null == T ? void 0 : null === (t = T.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null, [I, m] = n.useState(!1);
  n.useEffect(() => {
    m(null != d.current && d.current.scrollWidth > d.current.clientWidth)
  }, [o.username]);
  let h = !o.isClaimed(),
    C = S && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || h,
    O = C ? H.default.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, a.jsxs)("div", {
    className: i()(k.field, r),
    children: [(0, a.jsx)("div", {
      className: k.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: k.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: k.fieldTitle,
          children: H.default.Messages.USER_SETTINGS_LABEL_USERNAME
        }), (0, a.jsxs)("div", {
          className: k.usernameInnerRow,
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
      className: k.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: H.default.Messages.ACTION_NEEDED,
        children: e => (0, a.jsx)(L.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), null != _ && (0, a.jsx)("div", {
      className: k.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: _,
        "aria-label": !1,
        children: e => (0, a.jsx)(L.default, {
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
        className: k.fieldButton,
        color: c.Button.Colors.PRIMARY,
        "aria-label": H.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
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
        children: I ? H.default.Messages.DISAPPROVAL : H.default.Messages.EDIT
      })
    })]
  })
}

function W(e) {
  var t, s;
  let {
    user: l,
    className: r
  } = e, o = (0, f.useGuildAutomodProfileQuarantineErrors)(), d = null !== (s = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, S = v.default.getGlobalName(l), E = n.useRef(null), [T, _] = n.useState(!1);
  return n.useEffect(() => {
    _(null != E.current && E.current.scrollWidth > E.current.clientWidth)
  }, [S]), (0, a.jsxs)("div", {
    className: i()(k.field, r),
    children: [(0, a.jsx)("div", {
      className: k.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: k.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: k.fieldTitle,
          children: H.default.Messages.DISPLAY_NAME
        }), (0, a.jsx)("div", {
          className: k.usernameInnerRow,
          ref: E,
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == S ? H.default.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : S
          })
        })]
      })
    }), null != d && (0, a.jsx)("div", {
      className: k.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: d,
        "aria-label": !1,
        children: e => (0, a.jsx)(L.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Button, {
      className: k.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": H.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
      onClick: X,
      children: T ? H.default.Messages.DISAPPROVAL : H.default.Messages.EDIT
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
      children: r ? H.default.Messages.HIDE : H.default.Messages.REVEAL
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
      buttonText: H.default.Messages.ADD,
      buttonAriaLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
      buttonColor: c.Button.Colors.PRIMARY,
      valueMessage: H.default.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
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
        buttonText: H.default.Messages.EDIT,
        buttonAriaLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
        buttonColor: c.Button.Colors.PRIMARY,
        valueMessage: (0, a.jsx)(K, {
          text: e,
          censor: j.censorEmail,
          revealLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
          hideLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
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
    buttonText: H.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonAriaLabel: H.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonColor: c.Button.Colors.BRAND,
    valueMessage: H.default.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
    handleClick: () => _.default.openClaimAccountModal()
  };
  return (0, a.jsxs)("div", {
    className: i()(k.field, n),
    children: [(0, a.jsx)("div", {
      className: k.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: k.fieldTitle,
          children: H.default.Messages.USER_SETTINGS_LABEL_EMAIL
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
      className: k.fieldButton,
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
    censor: j.censorPhone,
    revealLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
    hideLabel: H.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : H.default.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, a.jsxs)("div", {
    className: i()(k.field, n),
    children: [(0, a.jsx)("div", {
      className: k.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: k.fieldTitle,
          children: H.default.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
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
      className: k.fieldButtonList,
      children: [d && null != o ? (0, a.jsx)(c.Button, {
        className: i()(k.fieldButton, k.removeButton),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        "aria-label": H.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModal)(e => (0, a.jsx)(T.default, {
            ...e,
            title: H.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: l.hasFlag(G.UserFlags.MFA_SMS) ? H.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: H.default.Messages.REMOVE,
            handleSubmit: e => m.default.removePhone(e, m.ChangePhoneReason.USER_SETTINGS_UPDATE)
          }))
        },
        children: H.default.Messages.REMOVE
      }) : null, (0, a.jsx)(c.Button, {
        className: k.fieldButton,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        "aria-label": d ? H.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : H.default.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(s.bind(s, "607018"));
            return t => (0, a.jsx)(e, {
              reason: m.ChangePhoneReason.USER_SETTINGS_UPDATE,
              ...t
            })
          }, {
            modalKey: B.PHONE_VERIFICATION_MODAL_KEY
          })
        },
        children: d ? H.default.Messages.EDIT : H.default.Messages.ADD
      })]
    })]
  })
}

function q(e) {
  let {
    user: t
  } = e, s = (0, I.default)({
    id: t.id,
    label: H.default.Messages.COPY_ID_USER
  });
  return U.DeveloperMode.useSetting() && P.SUPPORTS_COPY ? (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(c.Menu, {
        onClose: t,
        onSelect: void 0,
        navId: "copy-id",
        "aria-label": H.default.Messages.USER_MORE_ACTIONS_MENU_LABEL,
        children: s
      })
    },
    children: e => (0, a.jsx)(c.Clickable, {
      ...e,
      className: k.overflowMenuButton,
      "aria-label": H.default.Messages.ACTIONS,
      children: (0, a.jsx)(D.default, {
        className: k.overflowMenuIcon,
        height: 24,
        width: 24
      })
    })
  }) : null
}

function X() {
  S.default.setSection(G.UserSettingsSections.PROFILE_CUSTOMIZATION)
}

function Z() {
  var e;
  let t = (0, d.useStateFromStores)([M.default], () => {
      let e = M.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    s = (0, O.default)(t.id),
    n = (0, C.default)(s),
    l = U.StatusSetting.useSetting(),
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
    className: k.accountProfileCard,
    children: [(0, a.jsx)(p.default, {
      displayProfile: s,
      user: t,
      allowEdit: !1,
      guildId: void 0,
      profileType: V.UserProfileTypes.SETTINGS
    }), (0, a.jsxs)("div", {
      className: k.userInfo,
      children: [(0, a.jsx)(w, {
        className: k.avatar,
        src: u,
        avatarDecoration: S,
        status: l,
        size: c.AvatarSizes.SIZE_80,
        "aria-label": t.username
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: k.profileCardUsernameRow,
          children: [(0, a.jsx)(E.default, {
            user: t,
            className: k.userTag,
            discriminatorClass: k.discriminator
          }), (0, a.jsx)(q, {
            user: t
          })]
        }), (0, a.jsx)(A.default, {
          badges: n,
          className: k.badgeList,
          badgeClassName: k.badge
        })]
      }), (0, a.jsx)(c.Button, {
        onClick: X,
        size: c.Button.Sizes.SMALL,
        children: H.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })]
    }), (0, a.jsxs)("div", {
      className: k.background,
      children: [null != r ? (0, a.jsx)(c.Text, {
        className: k.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: r
      }) : null, (0, a.jsxs)("div", {
        className: k.fieldList,
        children: [(0, a.jsx)(h.Subsetting, {
          setting: F.WebSetting.ACCOUNT_DISPLAY_NAME,
          children: (0, a.jsx)(W, {
            className: k.fieldSpacerBottom,
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: F.WebSetting.ACCOUNT_USERNAME,
          children: (0, a.jsx)(Y, {
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: F.WebSetting.ACCOUNT_EMAIL,
          children: (0, a.jsx)(z, {
            className: k.fieldSpacer,
            user: t
          })
        }), (0, a.jsx)(h.Subsetting, {
          setting: F.WebSetting.ACCOUNT_PHONE_NUMBER,
          children: (0, a.jsx)(Q, {
            className: k.fieldSpacer,
            user: t
          })
        })]
      })]
    })]
  })
}