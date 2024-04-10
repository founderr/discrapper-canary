"use strict";
s.r(t), s.d(t, {
  useCurrentUserVerificationStatus: function() {
    return o
  },
  useIsPhoneVerificationLevel: function() {
    return d
  }
});
var l = s("442837"),
  n = s("430824"),
  i = s("594174"),
  r = s("944163"),
  a = s("981631");

function d(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([r.default], () => r.default.get(t)), i = null == s ? void 0 : s.guild;
  return (0, l.useStateFromStores)([n.default], () => {
    var e;
    let s = null === (e = n.default.getGuild(t)) || void 0 === e ? void 0 : e.verificationLevel,
      l = null == i ? void 0 : i.verification_level;
    return (null != s ? s : l) === a.VerificationLevels.VERY_HIGH
  }, [t, i])
}

function o(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()), n = d({
    guildId: t
  }), r = (null == s ? void 0 : s.isPhoneVerified()) || (null == s ? void 0 : s.isStaff()), a = (null == s ? void 0 : s.verified) || r;
  return {
    isPhoneVerificationLevel: n,
    isCurrentUserVerified: !!(n ? r : a)
  }
}