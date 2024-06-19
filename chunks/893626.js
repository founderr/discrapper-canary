s.r(l), s.d(l, {
  default: function() {
    return S
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  t = s(658722),
  r = s.n(t),
  o = s(399606),
  i = s(481060),
  u = s(734893),
  d = s(271383),
  c = s(430824),
  E = s(594174),
  _ = s(153124),
  m = s(700785),
  I = s(580357),
  g = s(981631),
  h = s(689938),
  M = s(525480);

function S(e) {
  var l, s, t;
  let {
    transitionState: S,
    onClose: x,
    guildId: N,
    welcomeMessage: T,
    onSave: A
  } = e, v = (0, _.Dt)(), [O, L] = a.useState({
    ...T
  }), R = (0, o.e7)([c.Z], () => c.Z.getGuild(N)), G = a.useCallback(e => {
    let l = {};
    return Promise.resolve(d.ZP.getMembers(N).filter(s => {
      var n, a, t;
      let o = E.default.getUser(s.userId);
      if (null != o && (l[s.userId] = o), null == R || null == o || (a = R, t = o, !(a.isOwner(t) || m.BT({
          permission: g.Plq.ADMINISTRATOR,
          context: a,
          user: t
        }) || m.BT({
          permission: g.Plq.MANAGE_GUILD,
          context: a,
          user: t
        }) && m.BT({
          permission: g.Plq.MANAGE_ROLES,
          context: a,
          user: t
        })))) return !1;
      let i = "".concat(null !== (n = s.nick) && void 0 !== n ? n : "", " ").concat(null == o ? void 0 : o.username);
      return r()(e.toLowerCase(), i.toLowerCase())
    }).map(e => {
      var s, n, a;
      return {
        value: e.userId,
        label: null !== (a = null !== (n = e.nick) && void 0 !== n ? n : null === (s = l[e.userId]) || void 0 === s ? void 0 : s.username) && void 0 !== a ? a : ""
      }
    }))
  }, [N, R]), C = a.useCallback(e => {
    if (null == N || null == e) return null;
    let l = d.ZP.getMember(N, e.value);
    if (null == l) return null;
    let s = E.default.getUser(l.userId);
    if (null == s) return null;
    let a = s.getAvatarURL(N, 20);
    return (0, n.jsx)(i.AnimatedAvatar, {
      size: i.AvatarSizes.SIZE_20,
      src: a,
      "aria-hidden": !0
    })
  }, [N]), f = a.useCallback(e => {
    let {
      value: l
    } = e;
    L(e => ({
      ...e,
      authorIds: null != l ? [l] : []
    }))
  }, [L]), j = a.useCallback(e => {
    L(l => ({
      ...l,
      message: null != e ? e : ""
    }))
  }, [L]), Z = a.useCallback(() => {
    A(null), x()
  }, [A, x]), B = null !== (l = O.authorIds[0]) && void 0 !== l ? l : "", D = (0, o.e7)([d.ZP], () => null != N ? d.ZP.getMember(N, B) : null), k = (0, o.e7)([E.default], () => null != D ? E.default.getUser(D.userId) : null), p = null !== (t = null !== (s = null == D ? void 0 : D.nick) && void 0 !== s ? s : null == k ? void 0 : k.username) && void 0 !== t ? t : "", b = function(e) {
    if (null == e.message || 0 === e.message.length) return null;
    if (null == e.authorIds || 0 === e.authorIds.length) return e.message.length < u.ZR ? h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR_AND_MESSAGE.format({
      minLength: u.ZR
    }) : h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR;
    return e.message.length < u.ZR ? h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_MESSAGE.format({
      minLength: u.ZR
    }) : null
  }(O);
  return (0, n.jsxs)(i.ModalRoot, {
    transitionState: S,
    "aria-labelledby": v,
    children: [(0, n.jsxs)("div", {
      className: M.container,
      children: [(0, n.jsx)(i.ModalCloseButton, {
        className: M.closeButton,
        onClick: x
      }), (0, n.jsxs)("div", {
        className: M.formGroup,
        children: [(0, n.jsxs)(i.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: [h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_TITLE, (0, n.jsx)(I.Z, {})]
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_EXPLAINER
        }), (0, n.jsx)(i.SearchableSelect, {
          value: {
            value: B,
            label: p
          },
          renderOptionPrefix: C,
          options: G,
          onChange: f,
          filter: !1
        })]
      }), (0, n.jsx)("div", {
        className: M.separator
      }), (0, n.jsxs)("div", {
        className: M.formGroup,
        children: [(0, n.jsx)(i.Heading, {
          variant: "heading-md/semibold",
          color: "header-primary",
          children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_MESSAGE_INPUT_HEADER
        }), (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION_TIP.format()
        }), (0, n.jsx)(i.TextArea, {
          className: M.welcomeMessageTextInput,
          placeholder: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_PLACEHOLDER,
          value: O.message,
          onChange: j,
          maxLength: u.W4
        }), null != b ? (0, n.jsx)(i.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: b
        }) : null]
      })]
    }), (0, n.jsx)(i.ModalFooter, {
      children: (0, n.jsxs)("div", {
        className: M.footerButtons,
        children: [(0, n.jsx)("div", {
          className: M.__invalid_leftButtons,
          children: (0, n.jsx)(i.Button, {
            size: i.Button.Sizes.SMALL,
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.RED,
            onClick: Z,
            children: h.Z.Messages.REMOVE
          })
        }), (0, n.jsxs)("div", {
          className: M.rightButtons,
          children: [(0, n.jsx)(i.Button, {
            onClick: x,
            size: i.Button.Sizes.SMALL,
            look: i.Button.Looks.LINK,
            color: i.Button.Colors.PRIMARY,
            children: h.Z.Messages.CANCEL
          }), (0, n.jsx)(i.Button, {
            disabled: 0 === O.message.length || null != b,
            onClick: () => {
              A(O), x()
            },
            children: h.Z.Messages.SAVE
          })]
        })]
      })
    })]
  })
}