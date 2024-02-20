"use strict";
n.r(t), n.d(t, {
  registerFetchedSupplementals: function() {
    return F
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
    return N
  },
  fetchMemberSupplemental: function() {
    return D
  }
}), n("424973");
var s, i, a, l, r, u, d = n("872717"),
  o = n("819855"),
  c = n("841098"),
  h = n("376556"),
  E = n("572943"),
  f = n("49111"),
  I = n("782340");
let _ = {};

function m(e, t) {
  return e + t
}

function T(e, t) {
  return t.map(t => e + t)
}

function M(e) {
  return e.split("-")[1]
}(l = s || (s = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

function p(e, t) {
  e.forEach(e => {
    _[e] = t
  })
}

function F(e, t) {
  t.forEach(t => (function(e, t, n) {
    _[e + t] = 3
  })(e, t, 3))
}(r = i || (i = {}))[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.BOT = 1] = "BOT", r[r.INTEGRATION = 2] = "INTEGRATION", r[r.DISCOVERY = 3] = "DISCOVERY", r[r.HUB = 4] = "HUB", r[r.INVITE = 5] = "INVITE", r[r.VANITY_URL = 6] = "VANITY_URL";
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
(u = a || (a = {})).DISCORD = "discord", u.TWITCH = "twitch", u.YOUTUBE = "youtube", u.GUILD_SUBSCRIPTION = "guild_subscription";
let A = e => {
    switch (e) {
      case "twitch":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
      case "youtube":
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
      default:
        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
    }
  },
  N = e => {
    let t = h.default.get((0, E.useLegacyPlatformType)(e)),
      n = (0, c.default)();
    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, o.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
  };

function g(e) {
  return {
    userId: e.user_id,
    sourceInviteCode: e.source_invite_code,
    joinSourceType: e.join_source_type,
    inviterId: e.inviter_id,
    integrationType: e.integration_type
  }
}
async function D(e, t) {
  let n = T(e, t),
    s = n.filter(e => _[e] <= 1).map(M);
  if (0 === s.length) return [];
  p(n, 2);
  try {
    let t = await d.default.post({
      url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
      body: {
        user_ids: s
      }
    });
    if (!Array.isArray(t.body)) return p(n, 0), [];
    let i = t.body.map(g),
      a = [];
    i.forEach(e => {
      let {
        userId: t
      } = e;
      return a.push(t)
    });
    let l = T(e, a),
      r = s.filter(e => !a.includes(e)),
      u = T(e, r);
    return p(l, 3), p(u, 0), i
  } catch (e) {
    p(n, 0)
  }
  return []
}