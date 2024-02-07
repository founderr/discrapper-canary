"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("419830"),
  u = n("267567"),
  o = n("42203"),
  d = n("305961"),
  c = n("697218"),
  E = n("718550"),
  f = n("189443"),
  I = n("841363"),
  _ = n("93550"),
  h = n("617347"),
  v = n("745049"),
  T = n("782340"),
  N = n("151990");

function m(e) {
  var t, n, m;
  let {
    guildId: S,
    guildEvent: g,
    guildEventId: C,
    error: p
  } = e, x = a.useMemo(() => (0, f.convertToFakeGuildEvent)(g, S), [g, S]), {
    channel_id: L,
    name: A,
    image: R,
    description: O
  } = x, M = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(L), [L]), D = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(S), [S]), y = (0, I.getLocationFromEvent)(x), U = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), j = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(S), [S]), V = (0, r.getChannelIconComponent)(M, D);
  return (0, l.jsxs)("div", {
    className: N.content,
    children: [(0, l.jsx)(h.default, {
      className: N.previewCard,
      guild: D,
      channel: M,
      location: null != y ? y : void 0,
      creator: U,
      name: A,
      description: O,
      imageSource: (n = (0, f.convertToFakeGuildEvent)(g, S, C), null == (m = R) && null == n.image ? null : null != m && /^data:/.test(m) ? m : (0, _.default)(n)),
      isActive: !1,
      isUserLurking: j,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: v.FAKE_EVENT_ID,
      eventPreview: x
    }), (0, l.jsxs)("div", {
      className: N.textContainer,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: T.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: N.subheader,
        children: null != location ? T.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : T.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == M ? void 0 : M.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: N.channelName,
              children: [null != V ? (0, l.jsx)(V, {
                width: 20,
                height: 20,
                className: N.icon
              }) : (0, l.jsx)(E.default, {
                height: 18,
                width: 18,
                className: N.locationIcon
              }), null !== (e = null == M ? void 0 : M.name) && void 0 !== e ? e : y]
            })
          }
        })
      }), null != p && (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: N.subheader,
        children: p.getAnyErrorMessage()
      })]
    })]
  })
}