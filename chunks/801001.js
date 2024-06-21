s.r(n), s.d(n, {
  default: function() {
    return P
  }
}), s(47120);
var t = s(735250),
  l = s(470079),
  o = s(392711),
  a = s.n(o),
  i = s(442837),
  r = s(481060),
  d = s(706371),
  u = s(563115),
  c = s(661824),
  N = s(984933),
  m = s(430824),
  O = s(153124),
  E = s(823379),
  _ = s(402148),
  h = s(570961),
  I = s(208665),
  x = s(460117),
  v = s(290511),
  R = s(689938),
  j = s(257733);

function P(e) {
  let {
    transitionState: n,
    onClose: s,
    onSave: o,
    onDelete: m,
    option: E,
    guild: _,
    prompt: P,
    index: T
  } = e, g = (0, O.Dt)(), A = (0, i.e7)([N.ZP], () => N.ZP.getDefaultChannel(_.id)), [C, L] = l.useState(() => {
    var e;
    return null !== (e = null == E ? void 0 : E.emoji) && void 0 !== e ? e : null
  }), [p, Z] = l.useState(() => {
    var e;
    return null !== (e = null == E ? void 0 : E.title) && void 0 !== e ? e : ""
  }), [D, B] = l.useState(() => {
    var e;
    return null !== (e = null == E ? void 0 : E.description) && void 0 !== e ? e : ""
  }), [S, f] = l.useState(() => {
    var e;
    return new Set(null !== (e = null == E ? void 0 : E.channelIds) && void 0 !== e ? e : [])
  }), [H, k] = l.useState(() => {
    var e;
    return new Set(null !== (e = null == E ? void 0 : E.roleIds) && void 0 !== e ? e : [])
  }), [b, G] = l.useState({}), U = l.useRef(null);
  return l.useLayoutEffect(() => {
    var e;
    return null === (e = U.current) || void 0 === e ? void 0 : e.focus()
  }, []), (0, t.jsxs)(r.ModalRoot, {
    transitionState: n,
    "aria-labelledby": g,
    children: [(0, t.jsxs)("div", {
      className: j.container,
      children: [(0, t.jsx)(r.ModalCloseButton, {
        className: j.closeButton,
        onClick: s
      }), (0, t.jsx)(r.Text, {
        className: j.questionNumber,
        variant: "text-xs/semibold",
        color: "text-muted",
        children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({
          index: T + 1
        })
      }), (0, t.jsx)(r.Heading, {
        id: g,
        className: j.header,
        variant: "heading-lg/semibold",
        children: null != P.title && P.title.length > 0 ? P.title : R.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
      }), (0, t.jsx)(r.Heading, {
        className: j.nameHeader,
        variant: "heading-md/semibold",
        children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
      }), (0, t.jsx)(r.TextInput, {
        inputRef: U,
        placeholder: R.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
        value: p,
        onChange: e => Z(e),
        maxLength: v.NE,
        autoFocus: !0
      }), (0, t.jsx)(r.InputError, {
        error: b.title
      }), (0, t.jsx)(r.TextInput, {
        className: j.descriptionInput,
        placeholder: R.Z.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
        value: D,
        onChange: e => B(e),
        maxLength: v.NO
      }), (0, t.jsx)(c.Z, {
        className: j.divider
      }), (0, t.jsx)(r.Heading, {
        className: j.rolesHeader,
        variant: "heading-md/semibold",
        children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
      }), (0, t.jsx)(d.Z, {
        guildId: _.id,
        selectedChannelIds: S,
        placeholder: R.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
        onChange: f,
        helperText: R.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
        className: j.searchInput
      }), (0, t.jsx)(u.Z, {
        guildId: _.id,
        selectedRoleIds: H,
        disableEveryoneRole: !0,
        placeholder: R.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
        onChange: k,
        helperText: R.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
        className: j.searchInput
      }), null == b.roles ? null : (0, t.jsx)(r.InputError, {
        error: b.roles
      }), (0, t.jsx)(M, {
        guild: _,
        roleIds: H
      }), (0, t.jsx)(c.Z, {
        className: j.divider
      }), (0, t.jsxs)("div", {
        className: j.emojiQuestionContainer,
        children: [(0, t.jsxs)("div", {
          className: j.emojiQuestionText,
          children: [(0, t.jsx)(r.Heading, {
            variant: "heading-md/semibold",
            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
          }), (0, t.jsx)(r.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: R.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
          })]
        }), (0, t.jsx)(x.Z, {
          emoji: C,
          setEmoji: L,
          channel: A
        })]
      })]
    }), (0, t.jsx)(r.ModalFooter, {
      children: (0, t.jsxs)("div", {
        className: j.footerButtons,
        children: [(0, t.jsx)("div", {
          className: j.removeButton,
          children: (0, t.jsx)(r.Button, {
            size: r.Button.Sizes.SMALL,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.RED,
            onClick: () => {
              m(), s()
            },
            children: R.Z.Messages.REMOVE
          })
        }), (0, t.jsxs)("div", {
          className: j.rightButtons,
          children: [(0, t.jsx)(r.Button, {
            onClick: s,
            size: r.Button.Sizes.SMALL,
            look: r.Button.Looks.LINK,
            color: r.Button.Colors.PRIMARY,
            children: R.Z.Messages.CANCEL
          }), (0, t.jsx)(r.Button, {
            onClick: () => {
              var e;
              let n = {
                  id: null !== (e = null == E ? void 0 : E.id) && void 0 !== e ? e : "".concat(Date.now()),
                  title: p,
                  description: D,
                  channelIds: Array.from(S).sort(),
                  roleIds: Array.from(H).sort(),
                  emoji: null == C ? void 0 : C
                },
                t = function(e, n, s, t) {
                  let l = {};
                  t.title.length <= 0 && (l.title = R.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
                  let o = (0, h.en)(e, n, s, t);
                  return null != o && (l.roles = o), l
                }(_, I.Z.editedOnboardingPrompts, P, n);
              G(t), a().isEmpty(t) && (o(n), s())
            },
            children: R.Z.Messages.SAVE
          })]
        })]
      })
    })]
  })
}

function M(e) {
  let {
    guild: n,
    roleIds: s
  } = e, l = (0, i.e7)([m.Z], () => m.Z.getRoles(n.id)), o = Array.from(s).map(e => l[e]).filter(E.lm).find(_.F);
  return null == o ? null : (0, t.jsx)("div", {
    className: j.notice,
    children: (0, t.jsxs)("div", {
      className: j.noticeMessage,
      children: [(0, t.jsx)(r.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: j.noticeIcon
      }), (0, t.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: R.Z.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({
          permissions: (0, _.i)(n, o).join(", ")
        })
      })]
    })
  })
}