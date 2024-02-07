"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("419830"),
  u = n("267567"),
  d = n("42203"),
  o = n("305961"),
  c = n("697218"),
  E = n("718550"),
  f = n("189443"),
  I = n("841363"),
  _ = n("93550"),
  h = n("617347"),
  T = n("745049"),
  v = n("782340"),
  N = n("151990");

function S(e) {
  var t, n, S;
  let {
    guildId: m,
    guildEvent: g,
    guildEventId: C,
    error: x
  } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(g, m), [g, m]), {
    channel_id: A,
    name: R,
    image: L,
    description: M
  } = p, O = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(m), [m]), y = (0, I.getLocationFromEvent)(p), j = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(m), [m]), U = (0, r.getChannelIconComponent)(O, D);
  return (0, l.jsxs)("div", {
    className: N.content,
    children: [(0, l.jsx)(h.default, {
      className: N.previewCard,
      guild: D,
      channel: O,
      location: null != y ? y : void 0,
      creator: j,
      name: R,
      description: M,
      imageSource: (n = (0, f.convertToFakeGuildEvent)(g, m, C), null == (S = L) && null == n.image ? null : null != S && /^data:/.test(S) ? S : (0, _.default)(n)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: T.FAKE_EVENT_ID,
      eventPreview: p
    }), (0, l.jsxs)("div", {
      className: N.textContainer,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: v.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: N.subheader,
        children: null != location ? v.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : v.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: N.channelName,
              children: [null != U ? (0, l.jsx)(U, {
                width: 20,
                height: 20,
                className: N.icon
              }) : (0, l.jsx)(E.default, {
                height: 18,
                width: 18,
                className: N.locationIcon
              }), null !== (e = null == O ? void 0 : O.name) && void 0 !== e ? e : y]
            })
          }
        })
      }), null != x && (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: N.subheader,
        children: x.getAnyErrorMessage()
      })]
    })]
  })
}