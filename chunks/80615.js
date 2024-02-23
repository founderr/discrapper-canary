"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("37983");
n("884691");
var a = n("272030"),
  s = n("239380"),
  i = n("446509"),
  r = e => {
    let {
      connection: t,
      user: r,
      theme: o
    } = e, {
      guild: u,
      nick: d
    } = t;
    return (0, l.jsx)(i.GuildRow, {
      guild: u,
      nick: d,
      theme: o,
      user: r,
      onContextMenu: function(e, t) {
        (0, a.openContextMenuLazy)(e, async () => {
          let {
            default: e
          } = await n.el("374705").then(n.bind(n, "374705"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t
          })
        })
      },
      onSelect: s.transitionToGuild
    })
  }