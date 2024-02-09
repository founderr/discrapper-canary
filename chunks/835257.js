"use strict";
n.r(t), n.d(t, {
  registerFetchedSupplementals: function() {
    return v
  },
  JoinSourceType: function() {
    return i
  },
  getJoinSourceTypeLabel: function() {
    return S
  },
  getIntegrationLabel: function() {
    return A
  },
  useGetIntegrationIconString: function() {
    return g
  },
  fetchMemberSupplemental: function() {
    return N
  }
}), n("424973");
var s, i, a, r, u, l, o = n("872717"),
  d = n("819855"),
  c = n("841098"),
  h = n("376556"),
  f = n("572943"),
  I = n("49111"),
  E = n("782340");
let m = {};

function _(e, t) {
  return e + t
}

function p(e, t) {
  return t.map(t => e + t)
}

function M(e) {
  return e.split("-")[1]
}(r = s || (s = {}))[r.FAILED = 0] = "FAILED", r[r.UNFETCHED = 1] = "UNFETCHED", r[r.PENDING = 2] = "PENDING", r[r.SUCCEEDED = 3] = "SUCCEEDED", r[r.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function T(e, t) {
  e.forEach(e => {
    m[e] = t
  })
}

function v(e, t) {
  t.forEach(t => (function(e, t, n) {
    m[e + t] = 3
  })(e, t, 3))
}(u = i || (i = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
let S = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
  switch (e) {
    case 1:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
    case 2:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
    case 3:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
    case 4:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
    case 5:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
    case 6:
      if (null != t) return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
        vanityUrl: t
      });
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
    default:
      return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
  }
};
(l = a || (a = {})).DISCORD = "discord", l.TWITCH = "twitch", l.YOUTUBE = "youtube", l.GUILD_SUBSCRIPTION = "guild_subscription";
let A = e => {
    switch (e) {
      case "twitch":
        return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return E.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  g = e => {
    let t = h.default.get((0, f.useLegacyPlatformType)(e)),
      n = (0, c.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, d.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function F(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function N(e, t) {
  let n = p(e, t),
    s = n.filter(e => m[e] <= 1).map(M);
  if (0 === s.length) return [];
  T(n, 2);
  try {
    let t = await o.default.post({
      url: I.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: s
      }
    });
    if (!Array.isArray(t.body)) return T(n, 0), [];
    let i = t.body.map(F),
      a = [];
    i.forEach(e => {
      let {
        userId: t
      } = e;
      return a.push(t)
    });
    let r = p(e, a),
      u = s.filter(e => !a.includes(e)),
      l = p(e, u);
    return T(r, 3), T(l, 0), i
  } catch (e) {
    T(n, 0)
  }
  return []
}