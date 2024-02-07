"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return v
  },
  InviteCopyInput: function() {
    return N
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  o = n.n(s),
  i = n("498574"),
  r = n("446674"),
  u = n("862337"),
  d = n("77078"),
  c = n("162771"),
  p = n("102985"),
  f = n("599110"),
  h = n("306160"),
  I = n("568734"),
  E = n("354023"),
  m = n("865699"),
  _ = n("91366"),
  C = n("49111"),
  g = n("782340"),
  S = n("435808"),
  T = n("905518"),
  y = n("173791"),
  A = n("926622");
let v = r.default.connectStores([p.default], () => ({
    hideValue: p.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: s,
      onCopy: i,
      disabled: r
    } = e, [c, p] = a.useState(!1), [f, I] = a.useState(!1), E = a.useMemo(() => new u.DelayedCall(1e3, () => I(!1)), [I]);
    return a.useEffect(() => () => {
      E.cancel()
    }, [E]), (0, l.jsxs)("div", {
      className: o(T.input, y.flexJustifyBetween, y.flexCenter, {
        [T.success]: f,
        [T.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: S.copyInput,
        name: "invite",
        value: s ? g.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: S.input,
        autoFocus: n,
        onFocus: () => n ? p(!0) : null,
        onBlur: () => n ? p(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": g.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: r
      }), h.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: f ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: S.copyButton,
        onClick: () => {
          I(!0), E.delay(), i(t)
        },
        disabled: r,
        children: f ? g.default.Messages.INVITE_COPIED : g.default.Messages.COPY
      }) : null]
    })
  }),
  N = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: s,
      onClose: r,
      modalState: u,
      isGuestInviteCreationToggleEnabled: p,
      inviteFlags: T,
      setInviteFlags: y,
      showGuestInviteToggleForCurrentVoiceChannel: N,
      copyValue: x,
      changePage: b,
      inviteChannel: P,
      source: M,
      code: O,
      guildScheduledEvent: L,
      disabled: F
    } = e, {
      maxAge: R,
      maxUses: j,
      networkError: U,
      showVanityURL: k
    } = u, w = a.useCallback(() => {
      (0, h.copy)(x), f.default.track(C.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == P ? void 0 : P.id,
        channel_type: null == P ? void 0 : P.type,
        location: M,
        code: O,
        guild_scheduled_event_id: null == L ? void 0 : L.id
      })
    }, [x, P, M, O, L]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(v, {
        value: x,
        autoFocus: s,
        onCopy: w,
        disabled: F
      }), p ? (0, l.jsx)("div", {
        className: S.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: S.temporaryMembershipContainer,
          value: (0, I.hasFlag)(T, i.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => y((0, I.setFlag)(T, i.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: g.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: F,
          hideBorder: !0,
          children: N ? g.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : g.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || k ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: o(A.marginTop8, S.footerText),
        children: [(0, E.maxAgeString)(R, j), " ", s ? (0, l.jsx)(d.Anchor, {
          onClick: () => b(_.InstantInviteModalPages.SETTINGS),
          children: g.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && k ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: o(A.marginTop8, S.footerText),
        children: [g.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => b(_.InstantInviteModalPages.SETTINGS),
          children: g.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != U ? (0, l.jsx)(m.InviteErrorMessage, {
        guild: t,
        error: U,
        onClose: r
      }) : null]
    })
  }