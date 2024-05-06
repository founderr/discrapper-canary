"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("658252"),
  i = n("481060"),
  r = n("428695"),
  o = n("725568"),
  u = n("603839"),
  d = n("308083"),
  c = n("981631"),
  f = n("921944"),
  E = n("689938"),
  h = n("422906");

function _(e) {
  let {
    guild: t,
    markAsDismissed: n,
    defaultGameId: _
  } = e, C = s.useCallback(() => {
    (0, o.openFullScreenLayer)(e => {
      let {
        closeLayer: n
      } = e;
      return (0, a.jsx)(u.default, {
        onClose: n,
        guildId: t.id,
        gameId: _
      })
    }, {
      layerKey: d.CLAN_SETUP_MODAL_LAYER_KEY
    })
  }, [_, t.id]), m = s.useCallback(() => (0, a.jsx)(i.Text, {
    variant: "text-xs/normal",
    color: "text-muted",
    className: h.message,
    children: _ === d.GENSHIN_ID ? E.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_MESSAGE : _ === d.VALORANT_ID ? E.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_MESSAGE : null
  }), [_]), S = s.useCallback(() => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: h.inviteContainer,
      children: [(0, a.jsx)(l.EnvelopeIcon, {
        color: "currentColor",
        height: 12,
        width: 12,
        className: h.envelope
      }), (0, a.jsx)(i.Text, {
        variant: "text-xs/bold",
        className: h.invite,
        children: E.default.Messages.CLAN_UPSELL_INVITE
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      className: h.title,
      children: E.default.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_TITLE
    })]
  }), []), p = s.useCallback(() => (0, a.jsx)(i.Button, {
    fullWidth: !0,
    look: i.ButtonLooks.FILLED,
    size: i.ButtonSizes.SMALL,
    color: i.ButtonColors.BRAND_NEW,
    className: h.button,
    onClick: C,
    children: (0, a.jsx)(i.Text, {
      variant: "text-sm/semibold",
      color: "always-white",
      children: E.default.Messages.CHECK_IT_OUT
    })
  }), [C]);
  return (0, a.jsx)(r.default, {
    className: h.notice,
    guild: t,
    onDismissed: () => n(f.ContentDismissActionType.UNKNOWN),
    title: S,
    message: m,
    cta: p,
    trackingSource: c.ChannelNoticeCtaSources.CLAN_ADMIN_UPSELL,
    type: c.ChannelNoticeTypes.CLAN_ADMIN_UPSELL
  })
}