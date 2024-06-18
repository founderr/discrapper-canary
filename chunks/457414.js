"use strict";
t.d(s, {
  S: function() {
    return c
  },
  w: function() {
    return N
  }
});
var n = t(481060),
  i = t(925221),
  l = t(236413),
  a = t(85960),
  r = t(273504),
  o = t(689938);
let c = e => {
    switch (e) {
      case r.fX.KEYWORD:
      case r.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  d = e => {
    switch (e) {
      case r.fX.KEYWORD:
      case r.fX.ML_SPAM:
      case r.fX.DEFAULT_KEYWORD_LIST:
      case r.fX.MENTION_SPAM:
      case r.fX.SERVER_POLICY:
      case r.fX.USER_PROFILE:
        return !0;
      default:
        return !1
    }
  },
  u = (e, s) => {
    var t;
    return null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : a.I6[e].getDefaultRuleName()
  },
  E = (e, s) => {
    if (!!(0, l.Vb)(s)) {
      if ((0, l.DO)(s)) return s.triggerMetadata.regexPatterns.length > 0 ? o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_AND_REGEX_COUNT.format({
        keywordCount: s.triggerMetadata.keywordFilter.length,
        regexPatternCount: s.triggerMetadata.regexPatterns.length
      }) : o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_COUNT.format({
        keywordCount: s.triggerMetadata.keywordFilter.length
      })
    }
  },
  _ = e => {
    switch (e) {
      case r.fX.KEYWORD:
        return o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_DESCRIPTION;
      case r.fX.ML_SPAM:
        return o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_DESCRIPTION;
      case r.fX.DEFAULT_KEYWORD_LIST:
        return o.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_DESCRIPTION_TEXT;
      case r.fX.MENTION_SPAM:
        return o.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_DESCRIPTION;
      case r.fX.USER_PROFILE:
        return o.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_DESCRIPTION;
      default:
        return null
    }
  },
  I = e => {
    if (e === r.fX.KEYWORD) return o.Z.Messages.GUILD_AUTOMOD_LINK_FILTER_MATCHING_STRATEGY_DESCRIPTION.format()
  },
  T = e => {
    switch (e) {
      case r.fX.MENTION_SPAM:
        return n.AtIcon;
      case r.fX.KEYWORD:
        return n.ChannelListPlusIcon;
      case r.fX.ML_SPAM:
      case r.fX.USER_PROFILE:
        return (0, n.makeIconCompat)(i.Z);
      case r.fX.DEFAULT_KEYWORD_LIST:
        return n.MenuIcon
    }
  };

function N(e, s) {
  var t, i, l, a, r;
  return null != e && d(e) ? {
    headerText: null !== (t = u(e, s)) && void 0 !== t ? t : "",
    headerSubtext: null !== (i = E(e, s)) && void 0 !== i ? i : "",
    descriptionText: null !== (l = _(e)) && void 0 !== l ? l : "",
    descriptionSubtext: null !== (a = I(e)) && void 0 !== a ? a : "",
    icon: null !== (r = T(e)) && void 0 !== r ? r : n.LinkIcon
  } : null
}