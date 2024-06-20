n.d(t, {
  Z: function() {
    return d
  }
}), n(47120);
var l = n(442837),
  i = n(963374),
  s = n(735020),
  a = n(905405),
  r = n(786761),
  o = n(937889),
  c = n(699516),
  u = n(768119);

function d(e) {
  let t = (0, a.p)(),
    n = (0, l.e7)([u.Z, s.Z], () => {
      var n;
      let l = u.Z.getQuery(e),
        a = u.Z.getRawResults(e);
      if (null == l || null == a) return [];
      let c = (0, i.nC)(null !== (n = l.content) && void 0 !== n ? n : "");
      return a.map(e => e.map(e => {
        let n = s.Z.getMessage(e.id, e.channel_id),
          l = (0, r.e5)(e);
        return null != n && (l = l.merge({
          attachments: n.attachments,
          embeds: n.embeds
        })), l.isSearchHit ? l.set("customRenderedContent", (0, o.ZP)(l, {
          postProcessor: c,
          allowHeading: !0,
          allowList: !0,
          shouldFilterKeywords: t
        })) : l
      }))
    }, [e, t], l.pF),
    [d, h] = (0, l.e7)([c.Z], () => {
      let e = 0;
      return [n.map(t => t.filter(t => {
        let n = c.Z.isBlockedForMessage(t);
        return n && t.isSearchHit && e++, !n || t.isSearchHit
      })), e]
    }, [n], l.pF);
  return {
    searchResults: d,
    blockCount: h
  }
}