"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("470079"),
  r = n("200120"),
  s = n("626135"),
  a = n("937889"),
  o = n("761910"),
  l = n("981631"),
  u = n("689938"),
  d = n("354088");

function _(e, t) {
  let {
    hideSimpleEmbedContent: n,
    formatInline: _ = !1,
    noStyleAndInteraction: c = !1,
    isInteracting: E = !1,
    allowHeading: I = !1,
    allowList: T = !1,
    allowLinks: f = !1,
    allowDevLinks: S = !1,
    allowSubtext: h = !1,
    previewLinkTarget: A = !1
  } = t, m = (0, r.useActiveKeywordFiltersCacheKey)();
  return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isUnsupported ? {
    content: u.default.Messages.MESSAGE_UNSUPPORTED,
    hasSpoilerEmbeds: !1
  } : e.isCommandType() && 0 === e.content.length || e.hasFlag(l.MessageFlags.LOADING) ? (0, o.default)(e) : e.type === l.MessageTypes.CHANGELOG ? (0, a.renderChangelogMessageMarkup)(e, d, {
    track: (e, t) => {
      s.default.track(e, t)
    }
  }) : (0, a.default)(e, {
    hideSimpleEmbedContent: n,
    formatInline: _,
    noStyleAndInteraction: c,
    isInteracting: E,
    allowHeading: I,
    allowList: T,
    allowLinks: f,
    allowSubtext: h,
    allowDevLinks: S,
    previewLinkTarget: A,
    shouldFilterKeywords: null != m
  }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, _, c, E, I, T, f, A, h, m])
}