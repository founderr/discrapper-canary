"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("653041"), n("47120");
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("117984"),
  i = n("593214"),
  s = n("362658"),
  r = n("689938");

function d(e) {
  let t = (0, i.useFavoritesGuildSelected)(),
    n = (0, i.useFavorite)(e.id),
    d = (0, i.useFavoritesCategories)(),
    {
      isFavoritesPerk: o
    } = (0, s.useFavoritesServerExperiment)("useChannelMoveToCategory");
  if (__OVERLAY__ || !t || null == n || !o) return null;
  let [c, f] = function(e) {
    let t = [],
      n = null;
    for (let a of e) null == a.id ? n = a : t.push(a);
    return [n, t]
  }(d.filter(e => e.id !== (null == n ? void 0 : n.parentId)));

  function S(e) {
    null != n && (0, l.updateFavoriteChannelParent)(n.id, e)
  }
  return null == c && 0 === f.length ? null : (0, a.jsxs)(u.MenuItem, {
    id: "move-to-category",
    label: r.default.Messages.MOVE_TO,
    children: [null != c && (0, a.jsx)(u.MenuGroup, {
      children: (0, a.jsx)(u.MenuItem, {
        id: "favorite-uncategorized",
        label: c.name,
        action: () => S(c.id)
      })
    }), f.length > 0 && (0, a.jsx)(u.MenuGroup, {
      children: f.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return (0, a.jsx)(u.MenuItem, {
          id: "favorite-".concat(t),
          label: n,
          action: () => S(t)
        }, t)
      })
    })]
  })
}