"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("9294"),
  r = n("512027"),
  u = n("52393"),
  d = n("652453"),
  o = n("119184"),
  c = n("923959"),
  E = n("305961"),
  f = n("330154"),
  h = n("943232"),
  v = n("945330"),
  _ = n("599110"),
  I = n("306160"),
  m = n("354023"),
  T = n("841363"),
  N = n("49111"),
  g = n("782340"),
  C = n("154585");
let {
  INVITE_OPTIONS_7_DAYS: x,
  INVITE_OPTIONS_UNLIMITED: p
} = m.default;

function S(e) {
  var t, n, S;
  let {
    onClose: A,
    event: L
  } = e, R = null == L ? void 0 : L.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != R ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e ? void 0 : e.id : null
  }, [R]), y = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(R), [R]), D = (null == y ? void 0 : y.vanityURLCode) != null && (null == y ? void 0 : y.vanityURLCode.length) > 0, {
    enabled: j
  } = r.default.useExperiment({
    guildId: null != R ? R : N.EMPTY_STRING_GUILD_ID,
    location: "bd50e8_1"
  }, {
    autoTrackExposure: D
  }), {
    channel_id: G,
    id: V
  } = null != L ? L : {}, O = (0, a.useStateFromStores)([f.default], () => {
    let e = null != G ? G : M;
    return null == e ? null : f.default.getInvite(e)
  }, [G, M]);
  if (null == L) return A(), null;
  let U = j && null !== (t = null == y ? void 0 : y.vanityURLCode) && void 0 !== t ? t : null == O ? void 0 : O.code,
    b = null != U ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: U,
      guildScheduledEventId: V
    }) : null,
    P = null == b || null == O,
    B = (0, u.default)(null != b ? b : ""),
    F = null !== (n = null == O ? void 0 : O.maxAge) && void 0 !== n ? n : x.value,
    w = null !== (S = null == O ? void 0 : O.maxUses) && void 0 !== S ? S : p.value;
  return (0, l.jsxs)("div", {
    className: C.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: C.close,
      "aria-label": g.default.Messages.CLOSE,
      children: (0, l.jsx)(v.default, {})
    }), (0, l.jsx)(o.default, {
      children: (0, l.jsx)("div", {
        className: C.iconContainer,
        children: (0, l.jsx)(h.default, {
          height: 30,
          width: 30,
          className: C.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: C.header,
      children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: C.body,
      children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: C.invite,
      children: [(0, l.jsx)(d.RawInviteCopyInputConnected, {
        value: B,
        autoFocus: !1,
        onCopy: e => {
          if (P) return;
          (0, I.copy)(e);
          let t = (0, T.getChannelTypeFromEntity)(L.entity_type);
          _.default.track(N.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: L.guild_id,
            channel: G,
            channel_type: t,
            location: N.InstantInviteSources.GUILD_EVENTS,
            code: O.code,
            guild_scheduled_event_id: null == L ? void 0 : L.id
          })
        }
      }), (null == y ? void 0 : y.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: C.inviteDetail,
        children: (0, m.maxAgeString)(F, w)
      })]
    })]
  })
}