"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Q
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
  f = s("952306"),
  _ = s("299206"),
  m = s("295474"),
  g = s("144114"),
  I = s("918505"),
  h = s("332473"),
  N = s("318661"),
  p = s("735336"),
  C = s("184325"),
  A = s("204197"),
  O = s("25990"),
  x = s("594174"),
  R = s("808268"),
  M = s("759231"),
  v = s("572004"),
  L = s("51144"),
  D = s("998502"),
  P = s("695346"),
  j = s("461877"),
  b = s("981631"),
  U = s("815660"),
  y = s("801461"),
  G = s("228168"),
  B = s("689938"),
  F = s("276380");
let k = D.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function w(e) {
  var t, l;
  let {
    className: r,
    user: o
  } = e, d = n.useRef(null), S = (0, I.usePomeloEligibility)(), E = (0, h.useIsEligibleForPomelo)(), T = (0, m.useGuildAutomodProfileQuarantineErrors)(), f = null !== (l = null == T ? void 0 : null === (t = T.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null, [_, g] = n.useState(!1);
  n.useEffect(() => {
    g(null != d.current && d.current.scrollWidth > d.current.clientWidth)
  }, [o.username]);
  let N = !o.isClaimed(),
    p = S && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || N,
    C = p ? B.default.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, a.jsxs)("div", {
    className: i()(F.field, r),
    children: [(0, a.jsx)("div", {
      className: F.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: F.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: F.fieldTitle,
          children: B.default.Messages.USER_SETTINGS_LABEL_USERNAME
        }), (0, a.jsxs)("div", {
          className: F.usernameInnerRow,
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
      className: F.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: B.default.Messages.ACTION_NEEDED,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), null != f && (0, a.jsx)("div", {
      className: F.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: f,
        "aria-label": !1,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Tooltip, {
      text: C,
      children: e => (0, a.jsx)(c.Button, {
        ...e,
        disabled: p,
        size: c.Button.Sizes.SMALL,
        className: F.fieldButton,
        color: c.Button.Colors.PRIMARY,
        "aria-label": B.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
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
        children: _ ? B.default.Messages.DISAPPROVAL : B.default.Messages.EDIT
      })
    })]
  })
}

function H(e) {
  var t, s;
  let {
    user: l,
    className: r
  } = e, o = (0, m.useGuildAutomodProfileQuarantineErrors)(), d = null !== (s = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null, S = L.default.getGlobalName(l), E = n.useRef(null), [T, f] = n.useState(!1);
  return n.useEffect(() => {
    f(null != E.current && E.current.scrollWidth > E.current.clientWidth)
  }, [S]), (0, a.jsxs)("div", {
    className: i()(F.field, r),
    children: [(0, a.jsx)("div", {
      className: F.constrainedRow,
      children: (0, a.jsxs)("div", {
        className: F.usernameRow,
        children: [(0, a.jsx)(c.FormTitle, {
          className: F.fieldTitle,
          children: B.default.Messages.DISPLAY_NAME
        }), (0, a.jsx)("div", {
          className: F.usernameInnerRow,
          ref: E,
          children: (0, a.jsx)(c.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == S ? B.default.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : S
          })
        })]
      })
    }), null != d && (0, a.jsx)("div", {
      className: F.pomeloWarning,
      children: (0, a.jsx)(c.Tooltip, {
        text: d,
        "aria-label": !1,
        children: e => (0, a.jsx)(M.default, {
          ...e,
          color: u.default.colors.STATUS_WARNING.css
        })
      })
    }), (0, a.jsx)(c.Button, {
      className: F.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": B.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
      onClick: z,
      children: T ? B.default.Messages.DISAPPROVAL : B.default.Messages.EDIT
    })]
  })
}

function V(e) {
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
      children: r ? B.default.Messages.HIDE : B.default.Messages.REVEAL
    })]
  })
}

function Y(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (l.isClaimed()) {
    if (null == l.email) t = {
      buttonText: B.default.Messages.ADD,
      buttonAriaLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
      buttonColor: c.Button.Colors.PRIMARY,
      valueMessage: B.default.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
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
        buttonText: B.default.Messages.EDIT,
        buttonAriaLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
        buttonColor: c.Button.Colors.PRIMARY,
        valueMessage: (0, a.jsx)(V, {
          text: e,
          censor: j.censorEmail,
          revealLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
          hideLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
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
    buttonText: B.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonAriaLabel: B.default.Messages.CLAIM_ACCOUNT_SHORT,
    buttonColor: c.Button.Colors.BRAND,
    valueMessage: B.default.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
    handleClick: () => f.default.openClaimAccountModal()
  };
  return (0, a.jsxs)("div", {
    className: i()(F.field, n),
    children: [(0, a.jsx)("div", {
      className: F.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: F.fieldTitle,
          children: B.default.Messages.USER_SETTINGS_LABEL_EMAIL
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
      className: F.fieldButton,
      size: c.Button.Sizes.SMALL,
      color: c.Button.Colors.PRIMARY,
      "aria-label": t.buttonAriaLabel,
      onClick: t.handleClick,
      children: t.buttonText
    })]
  })
}

function W(e) {
  let t, {
    className: n,
    user: l
  } = e;
  if (!l.isClaimed()) return null;
  let {
    phone: r,
    email: o
  } = l, d = null != r;
  return t = d ? (0, a.jsx)(V, {
    text: r,
    censor: j.censorPhone,
    revealLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
    hideLabel: B.default.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : B.default.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, a.jsxs)("div", {
    className: i()(F.field, n),
    children: [(0, a.jsx)("div", {
      className: F.constrainedRow,
      children: (0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.FormTitle, {
          className: F.fieldTitle,
          children: B.default.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
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
      className: F.fieldButtonList,
      children: [d && null != o ? (0, a.jsx)(c.Button, {
        className: i()(F.fieldButton, F.removeButton),
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.LINK,
        color: c.Button.Colors.PRIMARY,
        "aria-label": B.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModal)(e => (0, a.jsx)(T.default, {
            ...e,
            title: B.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: l.hasFlag(b.UserFlags.MFA_SMS) ? B.default.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: B.default.Messages.REMOVE,
            handleSubmit: e => g.default.removePhone(e, g.ChangePhoneReason.USER_SETTINGS_UPDATE)
          }))
        },
        children: B.default.Messages.REMOVE
      }) : null, (0, a.jsx)(c.Button, {
        className: F.fieldButton,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.PRIMARY,
        "aria-label": d ? B.default.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : B.default.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(s.bind(s, "607018"));
            return t => (0, a.jsx)(e, {
              reason: g.ChangePhoneReason.USER_SETTINGS_UPDATE,
              ...t
            })
          }, {
            modalKey: U.PHONE_VERIFICATION_MODAL_KEY
          })
        },
        children: d ? B.default.Messages.EDIT : B.default.Messages.ADD
      })]
    })]
  })
}

function K(e) {
  let {
    user: t
  } = e, s = (0, _.default)({
    id: t.id,
    label: B.default.Messages.COPY_ID_USER
  });
  return P.DeveloperMode.useSetting() && v.SUPPORTS_COPY ? (0, a.jsx)(c.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, a.jsx)(c.Menu, {
        onClose: t,
        onSelect: void 0,
        navId: "copy-id",
        "aria-label": B.default.Messages.USER_MORE_ACTIONS_MENU_LABEL,
        children: s
      })
    },
    children: e => (0, a.jsx)(c.Clickable, {
      ...e,
      className: F.overflowMenuButton,
      "aria-label": B.default.Messages.ACTIONS,
      children: (0, a.jsx)(R.default, {
        className: F.overflowMenuIcon,
        height: 24,
        width: 24
      })
    })
  }) : null
}

function z() {
  S.default.setSection(b.UserSettingsSections.PROFILE_CUSTOMIZATION)
}

function Q() {
  var e;
  let t = (0, d.useStateFromStores)([x.default], () => {
      let e = x.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    s = (0, N.default)(t.id),
    n = P.StatusSetting.useSetting(),
    l = (0, d.useStateFromStores)([O.default], () => O.default.getErrors()),
    i = null == l ? void 0 : null === (e = l.avatar) || void 0 === e ? void 0 : e[0],
    {
      avatarSrc: r,
      avatarDecorationSrc: u
    } = (0, A.default)({
      user: t,
      size: c.AvatarSizes.SIZE_80
    });
  return (0, a.jsxs)("div", {
    className: F.accountProfileCard,
    children: [(0, a.jsx)(p.default, {
      displayProfile: s,
      user: t,
      allowEdit: !1,
      guildId: void 0,
      profileType: G.UserProfileTypes.SETTINGS
    }), (0, a.jsxs)("div", {
      className: F.userInfo,
      children: [(0, a.jsx)(k, {
        className: F.avatar,
        src: r,
        avatarDecoration: u,
        status: n,
        size: c.AvatarSizes.SIZE_80,
        "aria-label": t.username
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: F.profileCardUsernameRow,
          children: [(0, a.jsx)(E.default, {
            user: t,
            className: F.userTag,
            discriminatorClass: F.discriminator
          }), (0, a.jsx)(K, {
            user: t
          })]
        }), (0, a.jsx)(C.default, {
          className: F.badgeList,
          user: t,
          size: C.BadgeSizes.SIZE_22
        })]
      }), (0, a.jsx)(c.Button, {
        onClick: z,
        size: c.Button.Sizes.SMALL,
        children: B.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })]
    }), (0, a.jsxs)("div", {
      className: F.background,
      children: [null != i ? (0, a.jsx)(c.Text, {
        className: F.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: i
      }) : null, (0, a.jsxs)("div", {
        className: F.fieldList,
        children: [(0, a.jsx)(H, {
          className: F.fieldSpacerBottom,
          user: t
        }), (0, a.jsx)(w, {
          user: t
        }), (0, a.jsx)(Y, {
          className: F.fieldSpacer,
          user: t
        }), (0, a.jsx)(W, {
          className: F.fieldSpacer,
          user: t
        })]
      })]
    })]
  })
}