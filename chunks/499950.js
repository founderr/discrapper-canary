"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("9294"),
  r = n("512027"),
  u = n("52393"),
  o = n("652453"),
  d = n("119184"),
  c = n("923959"),
  E = n("305961"),
  f = n("330154"),
  I = n("943232"),
  _ = n("945330"),
  h = n("599110"),
  v = n("306160"),
  T = n("354023"),
  N = n("841363"),
  m = n("49111"),
  S = n("782340"),
  g = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: C,
  INVITE_OPTIONS_UNLIMITED: p
} = T.default;

function x(e) {
  var t, n, x;
  let {
    onClose: L,
    event: A
  } = e, R = null == A ? void 0 : A.guild_id, O = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != R ? null === (e = c.default.getDefaultChannel(R)) || void 0 === e ? void 0 : e.id : null
  }, [R]), M = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(R), [R]), D = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
    enabled: y
  } = r.default.useExperiment({
    guildId: null != R ? R : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: D
  }), {
    channel_id: U,
    id: j
  } = null != A ? A : {}, V = (0, a.useStateFromStores)([f.default], () => {
    let e = null != U ? U : O;
    return null == e ? null : f.default.getInvite(e)
  }, [U, O]);
  if (null == A) return L(), null;
  let P = y && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == V ? void 0 : V.code,
    G = null != P ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: P,
      guildScheduledEventId: j
    }) : null,
    H = null == G || null == V,
    F = (0, u.default)(null != G ? G : ""),
    b = null !== (n = null == V ? void 0 : V.maxAge) && void 0 !== n ? n : C.value,
    B = null !== (x = null == V ? void 0 : V.maxUses) && void 0 !== x ? x : p.value;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: L,
      className: g.close,
      "aria-label": S.default.Messages.CLOSE,
      children: (0, l.jsx)(_.default, {})
    }), (0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: g.iconContainer,
        children: (0, l.jsx)(I.default, {
          height: 30,
          width: 30,
          className: g.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: g.header,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: g.invite,
      children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
        value: F,
        autoFocus: !1,
        onCopy: e => {
          if (H) return;
          (0, v.copy)(e);
          let t = (0, N.getChannelTypeFromEntity)(A.entity_type);
          h.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: A.guild_id,
            channel: U,
            channel_type: t,
            location: m.InstantInviteSources.GUILD_EVENTS,
            code: V.code,
            guild_scheduled_event_id: null == A ? void 0 : A.id
          })
        }
      }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, T.maxAgeString)(b, B)
      })]
    })]
  })
}