"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("470079"),
  r = n("937889"),
  a = n("761910"),
  s = n("981631"),
  o = n("689938"),
  l = n("126798");

function u(e, t) {
  let {
    hideSimpleEmbedContent: n,
    formatInline: u = !1,
    noStyleAndInteraction: d = !1,
    isInteracting: _ = !1,
    allowHeading: c = !1,
    allowList: E = !1,
    allowLinks: I = !1,
    allowDevLinks: T = !1,
    allowSubtext: f = !1,
    previewLinkTarget: S = !1
  } = t;
  return i.useMemo(() => null != e.customRenderedContent ? e.customRenderedContent : e.isUnsupported ? {
    content: o.default.Messages.MESSAGE_UNSUPPORTED,
    hasSpoilerEmbeds: !1
  } : e.isCommandType() && 0 === e.content.length || e.hasFlag(s.MessageFlags.LOADING) ? (0, a.default)(e) : e.type === s.MessageTypes.CHANGELOG ? (0, r.renderChangelogMessageMarkup)(e, l, {
    track: (e, t) => {}
  }) : (0, r.default)(e, {
    hideSimpleEmbedContent: n,
    formatInline: u,
    noStyleAndInteraction: d,
    isInteracting: _,
    allowHeading: c,
    allowList: E,
    allowLinks: I,
    allowSubtext: f,
    allowDevLinks: T,
    previewLinkTarget: S
  }), [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, n, u, d, _, c, E, I, S, f])
}