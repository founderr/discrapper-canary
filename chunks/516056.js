"use strict";
n.r(t), n.d(t, {
  generateDirectoryRows: function() {
    return i
  }
}), n("222007"), n("424973");
var l = n("513688"),
  a = n("730647"),
  s = n("782340");

function i(e, t) {
  if (t !== a.DirectoryEntryCategories.ALL) return [{
    entries: (0, l.rankGuildEntries)(e),
    appendEndCard: !0
  }];
  let n = [],
    i = (0, l.rankByDateAdded)(e),
    r = new Set(i.map(e => e.guildId));
  i.length > 0 && n.push({
    header: s.default.Messages.SEARCH_NEWEST,
    entries: i,
    appendEndCard: !1
  });
  let o = e.filter(e => !r.has(e.guildId));
  return (o = (0, l.orderByTotalMemberCount)(o)).length > 0 && n.push({
    header: s.default.Messages.ALL_SERVERS,
    entries: o,
    appendEndCard: !0
  }), n
}