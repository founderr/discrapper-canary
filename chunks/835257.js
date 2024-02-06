"use strict";
r.r(t), r.d(t, {
  registerFetchedSupplementals: function() {
    return U
  },
  JoinSourceType: function() {
    return n
  },
  getJoinSourceTypeLabel: function() {
    return S
  },
  getIntegrationLabel: function() {
    return N
  },
  useGetIntegrationIconString: function() {
    return C
  },
  fetchMemberSupplemental: function() {
    return v
  }
}), r("424973");
var s, n, o, u, l, a, i = r("872717"),
  c = r("819855"),
  d = r("841098"),
  E = r("376556"),
  _ = r("572943"),
  f = r("49111"),
  I = r("782340");
let R = {};

function p(e, t) {
  return e + t
}

function h(e, t) {
  return t.map(t => e + t)
}

function M(e) {
  return e.split("-")[1]
}(u = s || (s = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function T(e, t) {
  e.forEach(e => {
    R[e] = t
  })
}

function U(e, t) {
  t.forEach(t => (function(e, t, r) {
    R[e + t] = 3
  })(e, t, 3))
}(l = n || (n = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.BOT = 1] = "BOT", l[l.INTEGRATION = 2] = "INTEGRATION", l[l.DISCOVERY = 3] = "DISCOVERY", l[l.HUB = 4] = "HUB", l[l.INVITE = 5] = "INVITE", l[l.VANITY_URL = 6] = "VANITY_URL";
let S = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  switch (e) {
    case 1:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t) return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(a = o || (o = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
let N = e => {
    switch (e) {
      case "twitch":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  C = e => {
    let t = E.default.get((0, _.useLegacyPlatformType)(e)),
      r = (0, d.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(r) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function P(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function v(e, t) {
  let r = h(e, t),
    s = r.filter(e => R[e] <= 1).map(M);
  if (0 === s.length) return [];
  T(r, 2);
  try {
    let t = await i.default.post({
      url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: s
      }
    });
    if (!Array.isArray(t.body)) return T(r, 0), [];
    let n = t.body.map(P),
      o = [];
    n.forEach(e => {
      let {
        userId: t
      } = e;
      return o.push(t)
    });
    let u = h(e, o),
      l = s.filter(e => !o.includes(e)),
      a = h(e, l);
    return T(u, 3), T(a, 0), n
  } catch (e) {
    T(r, 0)
  }
  return []
}