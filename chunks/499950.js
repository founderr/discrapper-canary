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
  r = n("9294"),
  i = n("512027"),
  u = n("52393"),
  d = n("652453"),
  o = n("119184"),
  c = n("923959"),
  E = n("305961"),
  f = n("330154"),
  I = n("943232"),
  h = n("945330"),
  _ = n("599110"),
  T = n("306160"),
  N = n("354023"),
  v = n("841363"),
  m = n("49111"),
  g = n("782340"),
  S = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: C,
  INVITE_OPTIONS_UNLIMITED: x
} = N.default;

function p(e) {
  var t, n, p;
  let {
    onClose: A,
    event: L
  } = e, O = null == L ? void 0 : L.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != O ? null === (e = c.default.getDefaultChannel(O)) || void 0 === e ? void 0 : e.id : null
  }, [O]), R = (0, a.useStateFromStores)([E.default], () => E.default.getGuild(O), [O]), D = (null == R ? void 0 : R.vanityURLCode) != null && (null == R ? void 0 : R.vanityURLCode.length) > 0, {
    enabled: y
  } = i.default.useExperiment({
    guildId: null != O ? O : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: D
  }), {
    channel_id: j,
    id: V
  } = null != L ? L : {}, U = (0, a.useStateFromStores)([f.default], () => {
    let e = null != j ? j : M;
    return null == e ? null : f.default.getInvite(e)
  }, [j, M]);
  if (null == L) return A(), null;
  let P = y && null !== (t = null == R ? void 0 : R.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
    G = null != P ? (0, r.generateInviteKeyFromExtraData)({
      baseCode: P,
      guildScheduledEventId: V
    }) : null,
    H = null == G || null == U,
    w = (0, u.default)(null != G ? G : ""),
    B = null !== (n = null == U ? void 0 : U.maxAge) && void 0 !== n ? n : C.value,
    F = null !== (p = null == U ? void 0 : U.maxUses) && void 0 !== p ? p : x.value;
  return (0, l.jsxs)("div", {
    className: S.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: S.close,
      "aria-label": g.default.Messages.CLOSE,
      children: (0, l.jsx)(h.default, {})
    }), (0, l.jsx)(o.default, {
      children: (0, l.jsx)("div", {
        className: S.iconContainer,
        children: (0, l.jsx)(I.default, {
          height: 30,
          width: 30,
          className: S.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: S.header,
      children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: S.body,
      children: g.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: S.invite,
      children: [(0, l.jsx)(d.RawInviteCopyInputConnected, {
        value: w,
        autoFocus: !1,
        onCopy: e => {
          if (H) return;
          (0, T.copy)(e);
          let t = (0, v.getChannelTypeFromEntity)(L.entity_type);
          _.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: L.guild_id,
            channel: j,
            channel_type: t,
            location: m.InstantInviteSources.GUILD_EVENTS,
            code: U.code,
            guild_scheduled_event_id: null == L ? void 0 : L.id
          })
        }
      }), (null == R ? void 0 : R.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: S.inviteDetail,
        children: (0, N.maxAgeString)(B, F)
      })]
    })]
  })
}