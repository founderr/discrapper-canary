"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  r = n("77078"),
  i = n("419830"),
  u = n("267567"),
  d = n("42203"),
  o = n("305961"),
  c = n("697218"),
  E = n("718550"),
  f = n("189443"),
  I = n("841363"),
  h = n("93550"),
  _ = n("617347"),
  T = n("745049"),
  N = n("782340"),
  v = n("151990");

function m(e) {
  var t, n, m;
  let {
    guildId: g,
    guildEvent: S,
    guildEventId: C,
    error: x
  } = e, p = a.useMemo(() => (0, f.convertToFakeGuildEvent)(S, g), [S, g]), {
    channel_id: A,
    name: L,
    image: O,
    description: M
  } = p, R = (0, s.useStateFromStores)([d.default], () => d.default.getChannel(A), [A]), D = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(g), [g]), y = (0, I.getLocationFromEvent)(p), j = (0, s.useStateFromStores)([c.default], () => null != S.creatorId ? c.default.getUser(S.creatorId) : c.default.getCurrentUser(), [S.creatorId]), V = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(g), [g]), U = (0, i.getChannelIconComponent)(R, D);
  return (0, l.jsxs)("div", {
    className: v.content,
    children: [(0, l.jsx)(_.default, {
      className: v.previewCard,
      guild: D,
      channel: R,
      location: null != y ? y : void 0,
      creator: j,
      name: L,
      description: M,
      imageSource: (n = (0, f.convertToFakeGuildEvent)(S, g, C), null == (m = O) && null == n.image ? null : null != m && /^data:/.test(m) ? m : (0, h.default)(n)),
      isActive: !1,
      isUserLurking: V,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: T.FAKE_EVENT_ID,
      eventPreview: p
    }), (0, l.jsxs)("div", {
      className: v.textContainer,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: N.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: v.subheader,
        children: null != location ? N.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : N.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: v.channelName,
              children: [null != U ? (0, l.jsx)(U, {
                width: 20,
                height: 20,
                className: v.icon
              }) : (0, l.jsx)(E.default, {
                height: 18,
                width: 18,
                className: v.locationIcon
              }), null !== (e = null == R ? void 0 : R.name) && void 0 !== e ? e : y]
            })
          }
        })
      }), null != x && (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: v.subheader,
        children: x.getAnyErrorMessage()
      })]
    })]
  })
}