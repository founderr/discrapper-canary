"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
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
  I = n("943232"),
  _ = n("945330"),
  h = n("599110"),
  T = n("306160"),
  v = n("354023"),
  N = n("841363"),
  S = n("49111"),
  m = n("782340"),
  g = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: C,
  INVITE_OPTIONS_UNLIMITED: x
} = v.default;

function p(e) {
  var t, n, p;
  let {
    onClose: A,
    event: R
  } = e, L = null == R ? void 0 : R.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != L ? null === (e = c.default.getDefaultChannel(L)) || void 0 === e ? void 0 : e.id : null
  }, [L]), O = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(L), [L]), D = (null == O ? void 0 : O.vanityURLCode) != null && (null == O ? void 0 : O.vanityURLCode.length) > 0, {
    enabled: y
  } = r.default.useExperiment({
    guildId: null != L ? L : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: D
  }), {
    channel_id: j,
    id: V
  } = null != R ? R : {}, U = (0, a.useStateFromStores)([f.default], () => {
    let e = null != j ? j : M;
    return null == e ? null : f.default.getInvite(e)
  }, [j, M]);
  if (null == R) return A(), null;
  let G = y && null !== (t = null == O ? void 0 : O.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
    P = null != G ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: G,
      guildScheduledEventId: V
    }) : null,
    w = null == P || null == U,
    F = (0, u.default)(null != P ? P : ""),
    H = null !== (n = null == U ? void 0 : U.maxAge) && void 0 !== n ? n : C.value,
    b = null !== (p = null == U ? void 0 : U.maxUses) && void 0 !== p ? p : x.value;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: g.close,
      "aria-label": m.default.Messages.CLOSE,
      children: (0, l.jsx)(_.default, {})
    }), (0, l.jsx)(o.default, {
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
      children: m.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: m.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: g.invite,
      children: [(0, l.jsx)(d.RawInviteCopyInputConnected, {
        value: F,
        autoFocus: !1,
        onCopy: e => {
          if (w) return;
          (0, T.copy)(e);
          let t = (0, N.getChannelTypeFromEntity)(R.entity_type);
          h.default.track(S.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: R.guild_id,
            channel: j,
            channel_type: t,
            location: S.InstantInviteSources.GUILD_EVENTS,
            code: U.code,
            guild_scheduled_event_id: null == R ? void 0 : R.id
          })
        }
      }), (null == O ? void 0 : O.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, v.maxAgeString)(H, b)
      })]
    })]
  })
}