"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return N
  },
  InviteCopyInput: function() {
    return y
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  o = n("498574"),
  r = n("446674"),
  u = n("862337"),
  d = n("77078"),
  c = n("162771"),
  p = n("102985"),
  f = n("599110"),
  I = n("306160"),
  h = n("568734"),
  E = n("354023"),
  m = n("865699"),
  _ = n("91366"),
  g = n("49111"),
  C = n("782340"),
  S = n("435808"),
  A = n("905518"),
  T = n("173791"),
  v = n("926622");
let N = r.default.connectStores([p.default], () => ({
    hideValue: p.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: s,
      onCopy: o,
      disabled: r
    } = e, [c, p] = a.useState(!1), [f, h] = a.useState(!1), E = a.useMemo(() => new u.DelayedCall(1e3, () => h(!1)), [h]);
    return a.useEffect(() => () => {
      E.cancel()
    }, [E]), (0, l.jsxs)("div", {
      className: i(A.input, T.flexJustifyBetween, T.flexCenter, {
        [A.success]: f,
        [A.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: S.copyInput,
        name: "invite",
        value: s ? C.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: S.input,
        autoFocus: n,
        onFocus: () => n ? p(!0) : null,
        onBlur: () => n ? p(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": C.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: r
      }), I.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: S.copyButton,
        onClick: () => {
          h(!0), E.delay(), o(t)
        },
        disabled: r,
        children: f ? C.default.Messages.INVITE_COPIED : C.default.Messages.COPY
      }) : null]
    })
  }),
  y = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: s,
      onClose: r,
      modalState: u,
      isGuestInviteCreationToggleEnabled: p,
      inviteFlags: A,
      setInviteFlags: T,
      showGuestInviteToggleForCurrentVoiceChannel: y,
      copyValue: x,
      changePage: b,
      inviteChannel: P,
      source: M,
      code: O,
      guildScheduledEvent: L,
      disabled: F
    } = e, {
      maxAge: U,
      maxUses: R,
      networkError: j,
      showVanityURL: k
    } = u, w = a.useCallback(() => {
      (0, I.copy)(x), f.default.track(g.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == P ? void 0 : P.id,
        channel_type: null == P ? void 0 : P.type,
        location: M,
        code: O,
        guild_scheduled_event_id: null == L ? void 0 : L.id
      })
    }, [x, P, M, O, L]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(N, {
        value: x,
        autoFocus: s,
        onCopy: w,
        disabled: F
      }), p ? (0, l.jsx)("div", {
        className: S.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: S.temporaryMembershipContainer,
          value: (0, h.hasFlag)(A, o.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => T((0, h.setFlag)(A, o.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: C.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: F,
          hideBorder: !0,
          children: y ? C.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : C.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || k ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(v.marginTop8, S.footerText),
        children: [(0, E.maxAgeString)(U, R), " ", s ? (0, l.jsx)(d.Anchor, {
          onClick: () => b(_.InstantInviteModalPages.SETTINGS),
          children: C.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && k ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: i(v.marginTop8, S.footerText),
        children: [C.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => b(_.InstantInviteModalPages.SETTINGS),
          children: C.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != j ? (0, l.jsx)(m.InviteErrorMessage, {
        guild: t,
        error: j,
        onClose: r
      }) : null]
    })
  }