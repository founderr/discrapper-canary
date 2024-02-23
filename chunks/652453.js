"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return A
  },
  InviteCopyInput: function() {
    return x
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("498574"),
  u = n("446674"),
  o = n("862337"),
  d = n("77078"),
  c = n("162771"),
  f = n("102985"),
  h = n("599110"),
  I = n("306160"),
  g = n("568734"),
  E = n("354023"),
  _ = n("865699"),
  p = n("91366"),
  v = n("49111"),
  m = n("782340"),
  T = n("696862"),
  S = n("182893"),
  N = n("125047"),
  C = n("890957");
let A = u.default.connectStores([f.default], () => ({
    hideValue: f.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: a,
      onCopy: r,
      disabled: u
    } = e, [c, f] = i.useState(!1), [h, g] = i.useState(!1), E = i.useMemo(() => new o.DelayedCall(1e3, () => g(!1)), [g]);
    return i.useEffect(() => () => {
      E.cancel()
    }, [E]), (0, l.jsxs)("div", {
      className: s(S.input, N.flexJustifyBetween, N.flexCenter, {
        [S.success]: h,
        [S.focused]: c
      }),
      children: [(0, l.jsx)(d.TextInput, {
        className: T.copyInput,
        name: "invite",
        value: a ? m.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: T.input,
        autoFocus: n,
        onFocus: () => n ? f(!0) : null,
        onBlur: () => n ? f(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": m.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: u
      }), I.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
        size: d.Button.Sizes.SMALL,
        color: h ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
        className: T.copyButton,
        onClick: () => {
          g(!0), E.delay(), r(t)
        },
        disabled: u,
        children: h ? m.default.Messages.INVITE_COPIED : m.default.Messages.COPY
      }) : null]
    })
  }),
  x = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: a,
      onClose: u,
      modalState: o,
      isGuestInviteCreationToggleEnabled: f,
      inviteFlags: S,
      setInviteFlags: N,
      showGuestInviteToggleForCurrentVoiceChannel: x,
      copyValue: M,
      changePage: y,
      inviteChannel: w,
      source: R,
      code: L,
      guildScheduledEvent: O,
      disabled: D
    } = e, {
      maxAge: U,
      maxUses: b,
      networkError: P,
      showVanityURL: F
    } = o, V = i.useCallback(() => {
      (0, I.copy)(M), h.default.track(v.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == w ? void 0 : w.id,
        channel_type: null == w ? void 0 : w.type,
        location: R,
        code: L,
        guild_scheduled_event_id: null == O ? void 0 : O.id
      })
    }, [M, w, R, L, O]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(A, {
        value: M,
        autoFocus: a,
        onCopy: V,
        disabled: D
      }), f ? (0, l.jsx)("div", {
        className: T.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(d.FormSwitch, {
          className: T.temporaryMembershipContainer,
          value: (0, g.hasFlag)(S, r.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => N((0, g.setFlag)(S, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: m.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: D,
          hideBorder: !0,
          children: x ? m.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : m.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || F ? null : (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: s(C.marginTop8, T.footerText),
        children: [(0, E.maxAgeString)(U, b), " ", a ? (0, l.jsx)(d.Anchor, {
          onClick: () => y(p.InstantInviteModalPages.SETTINGS),
          children: m.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && a && F ? (0, l.jsxs)(d.Text, {
        variant: "text-xs/normal",
        className: s(C.marginTop8, T.footerText),
        children: [m.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
          onClick: () => y(p.InstantInviteModalPages.SETTINGS),
          children: m.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != P ? (0, l.jsx)(_.InviteErrorMessage, {
        guild: t,
        error: P,
        onClose: u
      }) : null]
    })
  }