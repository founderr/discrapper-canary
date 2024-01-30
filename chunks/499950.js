"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  s = n("9294"),
  r = n("512027"),
  u = n("52393"),
  d = n("652453"),
  o = n("119184"),
  c = n("923959"),
  f = n("305961"),
  E = n("330154"),
  I = n("943232"),
  _ = n("945330"),
  h = n("599110"),
  T = n("306160"),
  v = n("354023"),
  N = n("841363"),
  m = n("49111"),
  S = n("782340"),
  g = n("131439");
let {
  INVITE_OPTIONS_7_DAYS: C,
  INVITE_OPTIONS_UNLIMITED: p
} = v.default;

function x(e) {
  var t, n, x;
  let {
    onClose: L,
    event: O
  } = e, A = null == O ? void 0 : O.guild_id, R = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null != A ? null === (e = c.default.getDefaultChannel(A)) || void 0 === e ? void 0 : e.id : null
  }, [A]), M = (0, a.useStateFromStores)([f.default], () => f.default.getGuild(A), [A]), y = (null == M ? void 0 : M.vanityURLCode) != null && (null == M ? void 0 : M.vanityURLCode.length) > 0, {
    enabled: D
  } = r.default.useExperiment({
    guildId: null != A ? A : "",
    location: "bd50e8_1"
  }, {
    autoTrackExposure: y
  }), {
    channel_id: U,
    id: V
  } = null != O ? O : {}, P = (0, a.useStateFromStores)([E.default], () => {
    let e = null != U ? U : R;
    return null == e ? null : E.default.getInvite(e)
  }, [U, R]);
  if (null == O) return L(), null;
  let j = D && null !== (t = null == M ? void 0 : M.vanityURLCode) && void 0 !== t ? t : null == P ? void 0 : P.code,
    G = null != j ? (0, s.generateInviteKeyFromExtraData)({
      baseCode: j,
      guildScheduledEventId: V
    }) : null,
    F = null == G || null == P,
    b = (0, u.default)(null != G ? G : ""),
    H = null !== (n = null == P ? void 0 : P.maxAge) && void 0 !== n ? n : C.value,
    B = null !== (x = null == P ? void 0 : P.maxUses) && void 0 !== x ? x : p.value;
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)(i.Clickable, {
      onClick: L,
      className: g.close,
      "aria-label": S.default.Messages.CLOSE,
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
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: g.header,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_HEADER
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: g.body,
      children: S.default.Messages.GUILD_EVENT_CREATED_MODAL_BODY
    }), (0, l.jsxs)("div", {
      className: g.invite,
      children: [(0, l.jsx)(d.RawInviteCopyInputConnected, {
        value: b,
        autoFocus: !1,
        onCopy: e => {
          if (F) return;
          (0, T.copy)(e);
          let t = (0, N.getChannelTypeFromEntity)(O.entity_type);
          h.default.track(m.AnalyticEvents.COPY_INSTANT_INVITE, {
            server: O.guild_id,
            channel: U,
            channel_type: t,
            location: m.InstantInviteSources.GUILD_EVENTS,
            code: P.code,
            guild_scheduled_event_id: null == O ? void 0 : O.id
          })
        }
      }), (null == M ? void 0 : M.vanityURLCode) == null && (0, l.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        className: g.inviteDetail,
        children: (0, v.maxAgeString)(H, B)
      })]
    })]
  })
}