"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("442837"),
  l = n("963374"),
  s = n("735020"),
  i = n("200120"),
  r = n("786761"),
  o = n("937889"),
  u = n("699516"),
  d = n("768119");

function c(e) {
  let t = (0, i.useShouldFilterKeywords)(),
    n = (0, a.useStateFromStores)([d.default, s.default], () => {
      var n;
      let a = d.default.getQuery(e),
        i = d.default.getRawResults(e);
      if (null == a || null == i) return [];
      let u = (0, l.createASTHighlighter)(null !== (n = a.content) && void 0 !== n ? n : "");
      return i.map(e => e.map(e => {
        let n = s.default.getMessage(e.id, e.channel_id),
          a = (0, r.createMessageRecord)(e);
        return null != n && (a = a.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), a.isSearchHit ? a.set("customRenderedContent", (0, o.default)(a, {
          postProcessor: u,
          allowHeading: !0,
          allowList: !0,
          shouldFilterKeywords: t
        })) : a
      }))
    }, [e, t], a.statesWillNeverBeEqual),
    [c, f] = (0, a.useStateFromStores)([u.default], () => {
      let e = 0;
      return [n.map(t => t.filter(t => {
        let n = u.default.isBlocked(t.author.id);
        return n && t.isSearchHit && e++, !n || t.isSearchHit
      })), e]
    }, [n], a.statesWillNeverBeEqual);
  return {
    searchResults: c,
    blockCount: f
  }
}