"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  h = n("841363"),
  v = n("93550"),
  _ = n("617347"),
  I = n("745049"),
  m = n("782340"),
  T = n("973976");

function N(e) {
  var t, n, N;
  let {
    guildId: g,
    guildEvent: C,
    guildEventId: x,
    error: p
  } = e, S = a.useMemo(() => (0, f.convertToFakeGuildEvent)(C, g), [C, g]), {
    channel_id: A,
    name: L,
    image: R,
    description: M
  } = S, y = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(g), [g]), j = (0, h.getLocationFromEvent)(S), G = (0, s.useStateFromStores)([c.default], () => null != C.creatorId ? c.default.getUser(C.creatorId) : c.default.getCurrentUser(), [C.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(g), [g]), O = (0, r.getChannelIconComponent)(y, D);
  return (0, l.jsxs)("div", {
    className: T.content,
    children: [(0, l.jsx)(_.default, {
      className: T.previewCard,
      guild: D,
      channel: y,
      location: null != j ? j : void 0,
      creator: G,
      name: L,
      description: M,
      imageSource: (n = (0, f.convertToFakeGuildEvent)(C, g, x), null == (N = R) && null == n.image ? null : null != N && /^data:/.test(N) ? N : (0, v.default)(n)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: I.FAKE_EVENT_ID,
      eventPreview: S
    }), (0, l.jsxs)("div", {
      className: T.textContainer,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xl/semibold",
        children: m.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: T.subheader,
        children: null != location ? m.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : m.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == y ? void 0 : y.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: T.channelName,
              children: [null != O ? (0, l.jsx)(O, {
                width: 20,
                height: 20,
                className: T.icon
              }) : (0, l.jsx)(E.default, {
                height: 18,
                width: 18,
                className: T.locationIcon
              }), null !== (e = null == y ? void 0 : y.name) && void 0 !== e ? e : j]
            })
          }
        })
      }), null != p && (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: T.subheader,
        children: p.getAnyErrorMessage()
      })]
    })]
  })
}