t.d(s, {
  Z: function() {
    return Q
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  E = t(692547),
  d = t(481060),
  _ = t(230711),
  T = t(129861),
  S = t(279837),
  u = t(952306),
  I = t(299206),
  N = t(295474),
  A = t(144114),
  C = t(918505),
  O = t(332473),
  m = t(921801),
  h = t(290421),
  g = t(318661),
  R = t(80132),
  M = t(735336),
  x = t(204197),
  p = t(25990),
  D = t(594174),
  L = t(572004),
  P = t(51144),
  Z = t(998502),
  f = t(695346),
  v = t(461877),
  j = t(726985),
  U = t(981631),
  B = t(815660),
  b = t(801461),
  G = t(228168),
  F = t(689938),
  V = t(194411);
let y = Z.ZP.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

function Y(e) {
  var s, a;
  let {
    className: r,
    user: o
  } = e, c = i.useRef(null), _ = (0, C.o9)(), T = (0, O.b)(), S = (0, N.gS)(), u = null !== (a = null == S ? void 0 : null === (s = S.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== a ? a : null, [I, A] = i.useState(!1);
  i.useEffect(() => {
    A(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [o.username]);
  let m = !o.isClaimed(),
    h = _ && !o.isPomelo() && !o.hasVerifiedEmailOrPhone() || m,
    g = h ? F.Z.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
  return (0, n.jsxs)("div", {
    className: l()(V.field, r),
    children: [(0, n.jsx)("div", {
      className: V.constrainedRow,
      children: (0, n.jsxs)("div", {
        className: V.usernameRow,
        children: [(0, n.jsx)(d.FormTitle, {
          className: V.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_USERNAME
        }), (0, n.jsxs)("div", {
          className: V.usernameInnerRow,
          ref: c,
          children: [(0, n.jsx)(d.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: o.username
          }), !o.isPomelo() && (0, n.jsxs)(d.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", o.discriminator]
          })]
        })]
      })
    }), T && (0, n.jsx)("div", {
      className: V.pomeloWarning,
      children: (0, n.jsx)(d.Tooltip, {
        text: F.Z.Messages.ACTION_NEEDED,
        children: e => (0, n.jsx)(d.CircleExclamationPointIcon, {
          size: "custom",
          width: 20,
          height: 20,
          ...e,
          color: E.Z.colors.STATUS_WARNING.css
        })
      })
    }), null != u && (0, n.jsx)("div", {
      className: V.pomeloWarning,
      children: (0, n.jsx)(d.Tooltip, {
        text: u,
        "aria-label": !1,
        children: e => (0, n.jsx)(d.CircleExclamationPointIcon, {
          size: "custom",
          width: 20,
          height: 20,
          ...e,
          color: E.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, n.jsx)(d.Tooltip, {
      text: g,
      children: e => (0, n.jsx)(d.Button, {
        ...e,
        disabled: h,
        size: d.Button.Sizes.SMALL,
        className: V.fieldButton,
        color: d.Button.Colors.PRIMARY,
        "aria-label": F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
        onClick: () => (0, d.openModalLazy)(async () => {
          if (T) {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("85342")]).then(t.bind(t, 193049));
            return s => (0, n.jsx)(e, {
              source: b.Kq.USER_SETTINGS_EDIT,
              ...s
            })
          } {
            let {
              default: e
            } = await Promise.all([t.e("99387"), t.e("75492"), t.e("84956"), t.e("42758")]).then(t.bind(t, 2702));
            return s => (0, n.jsx)(e, {
              ...s
            })
          }
        }),
        children: I ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
      })
    })]
  })
}

function H(e) {
  var s, t;
  let {
    user: a,
    className: r
  } = e, o = (0, N.gS)(), c = null !== (t = null == o ? void 0 : null === (s = o.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== t ? t : null, _ = P.ZP.getGlobalName(a), T = i.useRef(null), [S, u] = i.useState(!1);
  return i.useEffect(() => {
    u(null != T.current && T.current.scrollWidth > T.current.clientWidth)
  }, [_]), (0, n.jsxs)("div", {
    className: l()(V.field, r),
    children: [(0, n.jsx)("div", {
      className: V.constrainedRow,
      children: (0, n.jsxs)("div", {
        className: V.usernameRow,
        children: [(0, n.jsx)(d.FormTitle, {
          className: V.fieldTitle,
          children: F.Z.Messages.DISPLAY_NAME
        }), (0, n.jsx)("div", {
          className: V.usernameInnerRow,
          ref: T,
          children: (0, n.jsx)(d.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == _ ? F.Z.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : _
          })
        })]
      })
    }), null != c && (0, n.jsx)("div", {
      className: V.pomeloWarning,
      children: (0, n.jsx)(d.Tooltip, {
        text: c,
        "aria-label": !1,
        children: e => (0, n.jsx)(d.CircleExclamationPointIcon, {
          size: "custom",
          width: 20,
          height: 20,
          ...e,
          color: E.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, n.jsx)(d.Button, {
      className: V.fieldButton,
      size: d.Button.Sizes.SMALL,
      color: d.Button.Colors.PRIMARY,
      "aria-label": F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
      onClick: z,
      children: S ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
    })]
  })
}

function k(e) {
  let {
    text: s,
    censor: t,
    revealLabel: a,
    hideLabel: l
  } = e, [r, o] = i.useState(!1), c = r ? s : t(s);
  return (0, n.jsxs)(n.Fragment, {
    children: [c, (0, n.jsx)(d.Button, {
      look: d.Button.Looks.LINK,
      size: d.Button.Sizes.MIN,
      color: d.Button.Colors.LINK,
      "aria-label": r ? l : a,
      onClick: () => o(!r),
      children: r ? F.Z.Messages.HIDE : F.Z.Messages.REVEAL
    })]
  })
}

function w(e) {
  let s, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed()) {
    if (null == a.email) s = {
      buttonText: F.Z.Messages.ADD,
      buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
      buttonColor: d.Button.Colors.PRIMARY,
      valueMessage: F.Z.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
      handleClick: () => (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("9343")]).then(t.bind(t, 642298));
        return s => (0, n.jsx)(e, {
          ...s
        })
      })
    };
    else {
      let {
        email: e
      } = a;
      s = {
        buttonText: F.Z.Messages.EDIT,
        buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
        buttonColor: d.Button.Colors.PRIMARY,
        valueMessage: (0, n.jsx)(k, {
          text: e,
          censor: v.E,
          revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
          hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
        }),
        handleClick: () => (0, d.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("99387"), t.e("9343")]).then(t.bind(t, 642298));
          return s => (0, n.jsx)(e, {
            ...s
          })
        })
      }
    }
  } else s = {
    buttonText: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
    buttonAriaLabel: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
    buttonColor: d.Button.Colors.BRAND,
    valueMessage: F.Z.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
    handleClick: () => u.Z.openClaimAccountModal()
  };
  return (0, n.jsxs)("div", {
    className: l()(V.field, i),
    children: [(0, n.jsx)("div", {
      className: V.constrainedRow,
      children: (0, n.jsxs)("div", {
        children: [(0, n.jsx)(d.FormTitle, {
          className: V.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_EMAIL
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(d.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: s.valueMessage
          })
        })]
      })
    }), (0, n.jsx)(d.Button, {
      className: V.fieldButton,
      size: d.Button.Sizes.SMALL,
      color: d.Button.Colors.PRIMARY,
      "aria-label": s.buttonAriaLabel,
      onClick: s.handleClick,
      children: s.buttonText
    })]
  })
}

function W(e) {
  let s, {
    className: i,
    user: a
  } = e;
  if (!a.isClaimed()) return null;
  let {
    phone: r,
    email: o
  } = a, c = null != r;
  return s = c ? (0, n.jsx)(k, {
    text: r,
    censor: v.n,
    revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
    hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
  }) : F.Z.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER, (0, n.jsxs)("div", {
    className: l()(V.field, i),
    children: [(0, n.jsx)("div", {
      className: V.constrainedRow,
      children: (0, n.jsxs)("div", {
        children: [(0, n.jsx)(d.FormTitle, {
          className: V.fieldTitle,
          children: F.Z.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
        }), (0, n.jsx)("div", {
          children: (0, n.jsx)(d.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: s
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: V.fieldButtonList,
      children: [c && null != o ? (0, n.jsx)(d.Button, {
        className: l()(V.fieldButton, V.removeButton),
        size: d.Button.Sizes.SMALL,
        look: d.Button.Looks.LINK,
        color: d.Button.Colors.PRIMARY,
        "aria-label": F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, d.openModal)(e => (0, n.jsx)(S.default, {
            ...e,
            title: F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
            children: a.hasFlag(U.xW$.MFA_SMS) ? F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
            actionText: F.Z.Messages.REMOVE,
            handleSubmit: e => A.Z.removePhone(e, A.L.USER_SETTINGS_UPDATE)
          }))
        },
        children: F.Z.Messages.REMOVE
      }) : null, (0, n.jsx)(d.Button, {
        className: V.fieldButton,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.PRIMARY,
        "aria-label": c ? F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
        onClick: function() {
          (0, d.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(t.bind(t, 607018));
            return s => (0, n.jsx)(e, {
              reason: A.L.USER_SETTINGS_UPDATE,
              ...s
            })
          }, {
            modalKey: B.M
          })
        },
        children: c ? F.Z.Messages.EDIT : F.Z.Messages.ADD
      })]
    })]
  })
}

function K(e) {
  let {
    user: s
  } = e, t = (0, I.Z)({
    id: s.id,
    label: F.Z.Messages.COPY_ID_USER
  });
  return f.Sb.useSetting() && L.wS ? (0, n.jsx)(d.Popout, {
    renderPopout: e => {
      let {
        closePopout: s
      } = e;
      return (0, n.jsx)(d.Menu, {
        onClose: s,
        onSelect: void 0,
        navId: "copy-id",
        "aria-label": F.Z.Messages.USER_MORE_ACTIONS_MENU_LABEL,
        children: t
      })
    },
    children: e => (0, n.jsx)(d.Clickable, {
      ...e,
      className: V.overflowMenuButton,
      "aria-label": F.Z.Messages.ACTIONS,
      children: (0, n.jsx)(d.MoreHorizontalIcon, {
        size: "md",
        color: "currentColor",
        className: V.overflowMenuIcon
      })
    })
  }) : null
}

function z() {
  _.Z.setSection(U.oAB.PROFILE_CUSTOMIZATION)
}

function Q() {
  var e;
  let s = (0, c.e7)([D.default], () => {
      let e = D.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    t = (0, g.ZP)(s.id),
    i = (0, h.Z)(t),
    a = f.co.useSetting(),
    l = (0, c.e7)([p.Z], () => p.Z.getErrors()),
    r = null == l ? void 0 : null === (e = l.avatar) || void 0 === e ? void 0 : e[0],
    {
      avatarSrc: E,
      avatarDecorationSrc: _
    } = (0, x.Z)({
      user: s,
      size: d.AvatarSizes.SIZE_80
    });
  return (0, n.jsxs)("div", {
    className: V.accountProfileCard,
    children: [(0, n.jsx)(M.Z, {
      displayProfile: t,
      user: s,
      allowEdit: !1,
      guildId: void 0,
      profileType: G.y0.SETTINGS
    }), (0, n.jsxs)("div", {
      className: V.userInfo,
      children: [(0, n.jsx)(y, {
        className: V.avatar,
        src: E,
        avatarDecoration: _,
        status: a,
        size: d.AvatarSizes.SIZE_80,
        "aria-label": s.username
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsxs)("div", {
          className: V.profileCardUsernameRow,
          children: [(0, n.jsx)(T.Z, {
            user: s,
            className: V.userTag,
            discriminatorClass: V.discriminator
          }), (0, n.jsx)(K, {
            user: s
          })]
        }), (0, n.jsx)(R.Z, {
          badges: i,
          className: V.badgeList,
          badgeClassName: V.badge
        })]
      }), (0, n.jsx)(d.Button, {
        onClick: z,
        size: d.Button.Sizes.SMALL,
        children: F.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
      })]
    }), (0, n.jsxs)("div", {
      className: V.background,
      children: [null != r ? (0, n.jsx)(d.Text, {
        className: V.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: r
      }) : null, (0, n.jsxs)("div", {
        className: V.fieldList,
        children: [(0, n.jsx)(m.F, {
          setting: j.s6.ACCOUNT_DISPLAY_NAME,
          children: (0, n.jsx)(H, {
            className: V.fieldSpacerBottom,
            user: s
          })
        }), (0, n.jsx)(m.F, {
          setting: j.s6.ACCOUNT_USERNAME,
          children: (0, n.jsx)(Y, {
            user: s
          })
        }), (0, n.jsx)(m.F, {
          setting: j.s6.ACCOUNT_EMAIL,
          children: (0, n.jsx)(w, {
            className: V.fieldSpacer,
            user: s
          })
        }), (0, n.jsx)(m.F, {
          setting: j.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, n.jsx)(W, {
            className: V.fieldSpacer,
            user: s
          })
        })]
      })]
    })]
  })
}