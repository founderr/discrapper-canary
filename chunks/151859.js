"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  r = n("77078"),
  i = n("419830"),
  u = n("267567"),
  o = n("42203"),
  d = n("305961"),
  c = n("697218"),
  f = n("718550"),
  E = n("189443"),
  h = n("841363"),
  v = n("93550"),
  I = n("617347"),
  _ = n("745049"),
  C = n("782340"),
  m = n("151990");

function p(e) {
  var t, n, p;
  let {
    guildId: T,
    guildEvent: g,
    guildEventId: N,
    error: x
  } = e, S = a.useMemo(() => (0, E.convertToFakeGuildEvent)(g, T), [g, T]), {
    channel_id: A,
    name: L,
    image: y,
    description: M
  } = S, R = (0, s.useStateFromStores)([o.default], () => o.default.getChannel(A), [A]), j = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(T), [T]), D = (0, h.getLocationFromEvent)(S), O = (0, s.useStateFromStores)([c.default], () => null != g.creatorId ? c.default.getUser(g.creatorId) : c.default.getCurrentUser(), [g.creatorId]), G = (0, s.useStateFromStores)([u.default], () => u.default.isLurking(T), [T]), U = (0, i.getChannelIconComponent)(R, j);
  return (0, l.jsxs)("div", {
    className: m.content,
    children: [(0, l.jsx)(I.default, {
      className: m.previewCard,
      guild: j,
      channel: R,
      location: null != D ? D : void 0,
      creator: O,
      name: L,
      description: M,
      imageSource: (n = (0, E.convertToFakeGuildEvent)(g, T, N), null == (p = y) && null == n.image ? null : null != p && /^data:/.test(p) ? p : (0, v.default)(n)),
      isActive: !1,
      isUserLurking: G,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEventId: _.FAKE_EVENT_ID,
      eventPreview: S
    }), (0, l.jsxs)("div", {
      className: m.textContainer,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: C.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: m.subheader,
        children: null != location ? C.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : C.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, l.jsxs)("div", {
              className: m.channelName,
              children: [null != U ? (0, l.jsx)(U, {
                width: 20,
                height: 20,
                className: m.icon
              }) : (0, l.jsx)(f.default, {
                height: 18,
                width: 18,
                className: m.locationIcon
              }), null !== (e = null == R ? void 0 : R.name) && void 0 !== e ? e : D]
            })
          }
        })
      }), null != x && (0, l.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: m.subheader,
        children: x.getAnyErrorMessage()
      })]
    })]
  })
}