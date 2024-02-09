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
  g = n("49111"),
  T = n("782340"),
  p = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: N,
  INVITE_OPTIONS_UNLIMITED: x
} = C.default;

function S(e) {
  var t, n, S;
  let {
    onClose: A,
    event: L
  } = e, y = null == L ? void 0 : L.guild_id, R = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != y ? null === (e = c.default.getDefaultChannel(y)) || void 0 === e ? void 0 : e.id : null
  }, [y]), M = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(y), [y]), j = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
    enabled: D
  } = r.default.useExperiment({
    guildId: null != y ? y : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: j
  }), {
    channel_id: G,
    id: O
  } = null != L ? L : {}, V = (0, a.useStateFromStores)([E.default], () => {
    let e = null != G ? G : R;
    return null == e ? null : E.default.getInvite(e)
  }, [G, R]);
  if (null == L) return A(), null;
  let U = D && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == V ? void 0 : V.code,
    b = null != U ? (0, i.generateInviteKeyFromExtraData)({
      baseCode: U,
      guildScheduledEventId: O
    }) : null,
    P = null == b || null == V,
    w = (0, u.default)(null != b ? b : ""),
    F = null !== (n = null == V ? void 0 : V.maxAge) && void 0 !== n ? n : N.value,
    k = null !== (S = null == V ? void 0 : V.maxUses) && void 0 !== S ? S : x.value;
  return (0, l.jsxs)("div", {
    className: p.container,
    children: [(0, l.jsx)(s.Clickable, {
      onClick: A,
      className: p.close,
      "aria-label": T.default.Messages.CLOSE,
      children: (0, l.jsx)(v.default, {})
    }), (0, l.jsx)(d.default, {
      children: (0, l.jsx)("div", {
        className: p.iconContainer,
        children: (0, l.jsx)(h.default, {
          height: 30,
          width: 30,
          className: p.icon
        })
      })
    }), (0, l.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: p.header,
      children: T.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.body,
      children: T.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: p.invite,
      children: [(0, l.jsx)(o.RawInviteCopyInputConnected, {
        value: w,
        autoFocus: !1,
        onCopy: e => {
          if (P) return;
          (0, _.copy)(e);
          let t = (0, m.getChannelTypeFromEntity)(L.entity_type);
          I.default.track(g.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: L.guild_id,
            channel: G,
            channel_type: t,
            location: g.InstantInviteSources.GUILD_EVENTS,
            code: V.code,
            guild_scheduled_event_id: null == L ? void 0 : L.id
          })
        }
      }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: p.inviteDetail,
        children: (0, C.maxAgeString)(F, k)
      })]
    })]
  })
}