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
  r = n("9294"),
  i = n("512027"),
  u = n("52393"),
  o = n("652453"),
  d = n("119184"),
  c = n("923959"),
  f = n("305961"),
  E = n("330154"),
  h = n("943232"),
  v = n("945330"),
  I = n("599110"),
  _ = n("306160"),
  C = n("354023"),
  m = n("841363"),
  p = n("49111"),
  T = n("782340"),
  g = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: N,
  INVITE_OPTIONS_UNLIMITED: x
} = C.default;

function S(e) {
  var t, n, S;
  let {
    onClose: A,
    event: L
  } = e, y = null == L ? void 0 : L.guild_id, M = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != y ? null === (e = c.default.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id : null
  }, [y]), R = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(y), [y]), j = (null == R ? void 0 : R.vanityURLCode) != null && (null == R ? void 0 : R.vanityURLCode.length) > 0, {
    enabled: D
  } = i.default.useExperiment({
    guildId: null != y ? y : p.EMPTY_STRING_GUILD_ID,
    location: "bd50e8_1"
  }, {
    autoTrackExposure: j
  }), {
    channel_id: O,
    id: G
  } = null != L ? L : {}, U = (0, a.useStateFromStores)([E.default], () => {
    let e = null != O ? O : M;
    return null == e ? null : E.default.getInvite(e)
  }, [O, M]);
  if (null == L) return A(), null;
  let V = D && null !== (t = null == R ? void 0 : R.vanityURLCode) && void 0 !== t ? t : null == U ? void 0 : U.code,
    b = null != V ? (0, r.generateInviteKeyFromExtraData)({
      baseCode: V,
      guildScheduledEventId: G
    }) : null,
    P = null == b || null == U,
    w = (0, u.default)(null != b ? b : ""),
    B = null !== (n = null == U ? void 0 : U.maxAge) && void 0 !== n ? n : N.value,
    k = null !== (S = null == U ? void 0 : U.maxUses) && void 0 !== S ? S : x.value;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: g.close,
      "aria-label": T.default.Messages.CLOSE,
      children: (0, l.jsx)(v.default, {})
    }), (0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: g.iconContainer,
        children: (0, l.jsx)(h.default, {
          height: 30,
          width: 30,
          className: g.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: g.header,
      children: T.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: T.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: g.invite,
      children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
        value: w,
        autoFocus: !1,
        onCopy: e => {
          if (P) return;
          (0, _.copy)(e);
          let t = (0, m.getChannelTypeFromEntity)(L.entity_type);
          I.default.track(p.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: L.guild_id,
            channel: O,
            channel_type: t,
            location: p.InstantInviteSources.GUILD_EVENTS,
            code: U.code,
            guild_scheduled_event_id: null == L ? void 0 : L.id
          })
        }
      }), (null == R ? void 0 : R.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, C.maxAgeString)(B, k)
      })]
    })]
  })
}