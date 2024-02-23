"use strict";
n.r(t), n.d(t, {
  RawInviteCopyInputConnected: function() {
    return S
  },
  InviteCopyInput: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("498574"),
  u = n("446674"),
  d = n("862337"),
  o = n("77078"),
  c = n("162771"),
  E = n("102985"),
  f = n("599110"),
  h = n("306160"),
  v = n("568734"),
  _ = n("354023"),
  I = n("865699"),
  m = n("91366"),
  T = n("49111"),
  N = n("782340"),
  g = n("696862"),
  C = n("182893"),
  x = n("125047"),
  p = n("890957");
let S = u.default.connectStores([E.default], () => ({
    hideValue: E.default.hideInstantInvites
  }))(e => {
    let {
      value: t,
      autoFocus: n,
      hideValue: s,
      onCopy: r,
      disabled: u
    } = e, [c, E] = a.useState(!1), [f, v] = a.useState(!1), _ = a.useMemo(() => new d.DelayedCall(1e3, () => v(!1)), [v]);
    return a.useEffect(() => () => {
      _.cancel()
    }, [_]), (0, l.jsxs)("div", {
      className: i(C.input, x.flexJustifyBetween, x.flexCenter, {
        [C.success]: f,
        [C.focused]: c
      }),
      children: [(0, l.jsx)(o.TextInput, {
        className: g.copyInput,
        name: "invite",
        value: s ? N.default.Messages.INSTANT_INVITE_HIDDEN : t,
        editable: !1,
        inputClassName: g.input,
        autoFocus: n,
        onFocus: () => n ? E(!0) : null,
        onBlur: () => n ? E(!1) : null,
        spellCheck: "false",
        onClick: e => e.currentTarget.select(),
        "aria-label": N.default.Messages.FORM_LABEL_INVITE_LINK,
        disabled: u
      }), h.SUPPORTS_COPY ? (0, l.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        color: f ? o.Button.Colors.GREEN : o.Button.Colors.BRAND,
        className: g.copyButton,
        onClick: () => {
          v(!0), _.delay(), r(t)
        },
        disabled: u,
        children: f ? N.default.Messages.INVITE_COPIED : N.default.Messages.COPY
      }) : null]
    })
  }),
  A = e => {
    let {
      guild: t,
      noInvitesAvailable: n,
      showFriends: s,
      onClose: u,
      modalState: d,
      isGuestInviteCreationToggleEnabled: E,
      inviteFlags: C,
      setInviteFlags: x,
      showGuestInviteToggleForCurrentVoiceChannel: A,
      copyValue: L,
      changePage: R,
      inviteChannel: M,
      source: y,
      code: D,
      guildScheduledEvent: j,
      disabled: G
    } = e, {
      maxAge: V,
      maxUses: O,
      networkError: U,
      showVanityURL: b
    } = d, P = a.useCallback(() => {
      (0, h.copy)(L), f.default.track(T.AnalyticEvents.COPY_INSTANT_INVITE, {
        server: c.default.getGuildId(),
        channel: null == M ? void 0 : M.id,
        channel_type: null == M ? void 0 : M.type,
        location: y,
        code: D,
        guild_scheduled_event_id: null == j ? void 0 : j.id
      })
    }, [L, M, y, D, j]);
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(S, {
        value: L,
        autoFocus: s,
        onCopy: P,
        disabled: G
      }), E ? (0, l.jsx)("div", {
        className: g.temporaryMembershipContainerBackground,
        children: (0, l.jsx)(o.FormSwitch, {
          className: g.temporaryMembershipContainer,
          value: (0, v.hasFlag)(C, r.GuildInviteFlags.IS_GUEST_INVITE),
          onChange: e => x((0, v.setFlag)(C, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
          note: N.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
          disabled: G,
          hideBorder: !0,
          children: A ? N.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : N.default.Messages.GRANT_GUEST_MEMBERSHIP
        })
      }) : null, n || b ? null : (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: i(p.marginTop8, g.footerText),
        children: [(0, _.maxAgeString)(V, O), " ", s ? (0, l.jsx)(o.Anchor, {
          onClick: () => R(m.InstantInviteModalPages.SETTINGS),
          children: N.default.Messages.INVITE_EDIT_LINK
        }) : null]
      }), !n && s && b ? (0, l.jsxs)(o.Text, {
        variant: "text-xs/normal",
        className: i(p.marginTop8, g.footerText),
        children: [N.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(o.Anchor, {
          onClick: () => R(m.InstantInviteModalPages.SETTINGS),
          children: N.default.Messages.INVITE_EDIT_LINK
        })]
      }) : null, null != U ? (0, l.jsx)(I.InviteErrorMessage, {
        guild: t,
        error: U,
        onClose: u
      }) : null]
    })
  }