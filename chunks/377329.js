"use strict";
l.r(t), l.d(t, {
  default: function() {
    return m
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("442837"),
  r = l("481060"),
  i = l("471445"),
  d = l("41776"),
  u = l("592125"),
  o = l("430824"),
  c = l("594174"),
  E = l("393112"),
  _ = l("236373"),
  f = l("230900"),
  T = l("405613"),
  h = l("460838"),
  I = l("689938"),
  N = l("512972");

function m(e) {
  var t, l, m;
  let {
    guildId: x,
    guildEvent: v,
    guildEventId: g,
    error: S
  } = e, C = n.useMemo(() => (0, _.convertToFakeGuildEvent)(v, x), [v, x]), {
    channel_id: A,
    name: L,
    image: p,
    description: M
  } = C, D = (0, s.useStateFromStores)([u.default], () => u.default.getChannel(A), [A]), R = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(x), [x]), j = (0, f.getLocationFromEvent)(C), y = (0, s.useStateFromStores)([c.default], () => null != v.creatorId ? c.default.getUser(v.creatorId) : c.default.getCurrentUser(), [v.creatorId]), G = (0, s.useStateFromStores)([d.default], () => d.default.isLurking(x), [x]), V = (0, i.getChannelIconComponent)(D, R);
  return (0, a.jsxs)("div", {
    className: N.content,
    children: [(0, a.jsx)(h.default, {
      className: N.previewCard,
      guild: R,
      channel: D,
      location: null != j ? j : void 0,
      creator: y,
      name: L,
      description: M,
      imageSource: (l = (0, _.convertToFakeGuildEvent)(v, x, g), null == (m = p) && null == l.image ? null : null != m && /^data:/.test(m) ? m : (0, T.default)(l)),
      isActive: !1,
      isUserLurking: G,
      speakers: [],
      speakerCount: 0,
      rsvped: !0,
      guildEvent: C,
      eventPreview: C
    }), (0, a.jsxs)("div", {
      className: N.textContainer,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/semibold",
        children: I.default.Messages.GUILD_EVENT_PREVIEW_TITLE
      }), (0, a.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: N.subheader,
        children: null != location ? I.default.Messages.GUILD_EVENT_PREVIEW_EXTERNAL_EVENT_BODY : I.default.Messages.GUILD_EVENT_PREVIEW_BODY.format({
          channelName: null !== (t = null == D ? void 0 : D.name) && void 0 !== t ? t : "",
          channelHook: () => {
            var e;
            return (0, a.jsxs)("div", {
              className: N.channelName,
              children: [null != V ? (0, a.jsx)(V, {
                width: 20,
                height: 20,
                className: N.icon
              }) : (0, a.jsx)(E.default, {
                height: 18,
                width: 18,
                className: N.locationIcon
              }), null !== (e = null == D ? void 0 : D.name) && void 0 !== e ? e : j]
            })
          }
        })
      }), null != S && (0, a.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: N.subheader,
        children: S.getAnyErrorMessage()
      })]
    })]
  })
}