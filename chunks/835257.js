"use strict";
n.r(t), n.d(t, {
  registerFetchedSupplementals: function() {
    return I
  },
  JoinSourceType: function() {
    return r
  },
  getJoinSourceTypeLabel: function() {
    return N
  },
  getIntegrationLabel: function() {
    return g
  },
  useGetIntegrationIconString: function() {
    return y
  },
  fetchMemberSupplemental: function() {
    return F
  }
}), n("424973");
var a, r, s, l, u, o, E = n("872717"),
  i = n("819855"),
  c = n("841098"),
  T = n("376556"),
  _ = n("572943"),
  f = n("49111"),
  d = n("782340");
let R = {};

function S(e, t) {
  return e + t
}

function h(e, t) {
  return t.map(t => e + t)
}

function p(e) {
  return e.split("-")[1]
}(l = a || (a = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function A(e, t) {
  e.forEach(e => {
    R[e] = t
  })
}

function I(e, t) {
  t.forEach(t => (function(e, t, n) {
    R[e + t] = 3
  })(e, t, 3))
}(u = r || (r = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
let N = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  switch (e) {
    case 1:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t) return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(o = s || (s = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription";
let g = e => {
    switch (e) {
      case "twitch":
        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return d.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  y = e => {
    let t = T.default.get((0, _.useLegacyPlatformType)(e)),
      n = (0, c.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, i.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function M(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function F(e, t) {
  let n = h(e, t),
    a = n.filter(e => R[e] <= 1).map(p);
  if (0 === a.length) return [];
  A(n, 2);
  try {
    let t = await E.default.post({
      url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: a
      }
    });
    if (!Array.isArray(t.body)) return A(n, 0), [];
    let r = t.body.map(M),
      s = [];
    r.forEach(e => {
      let {
        userId: t
      } = e;
      return s.push(t)
    });
    let l = h(e, s),
      u = a.filter(e => !s.includes(e)),
      o = h(e, u);
    return A(l, 3), A(o, 0), r
  } catch (e) {
    A(n, 0)
  }
  return []
}