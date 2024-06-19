n.d(t, {
  DM: function() {
    return g
  },
  ZP: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  l = n(692547),
  o = n(481060),
  r = n(109434),
  u = n(456269),
  c = n(479099),
  d = n(176505),
  h = n(689938),
  m = n(804702),
  p = n(879238);

function g(e) {
  let {
    channel: t,
    isNew: n
  } = e, i = (0, u.eV)(t), s = i.slice(void 0, 3), a = i.slice(3), l = i.length > 3 ? i.length - 3 : 0, o = t.hasFlag(d.zZ.PINNED), r = s.length > 0 || o || n;
  return {
    shownTags: s,
    remainingTags: a,
    moreTagsCount: l,
    isPinned: o,
    shouldRenderTagsRow: r,
    forumPostContainsTags: i.length > 0
  }
}

function T(e) {
  let {
    channel: t,
    isNew: n,
    tagsClassName: s,
    className: u
  } = e, {
    shownTags: d,
    remainingTags: T,
    moreTagsCount: f,
    isPinned: v,
    shouldRenderTagsRow: E
  } = g({
    channel: t,
    isNew: n
  }), {
    tagFilter: I
  } = (0, r.H)(t.id);
  return E ? (0, i.jsxs)("div", {
    className: a()(p.tags, u),
    children: [n ? (0, i.jsx)(o.TextBadge, {
      className: a()(m.newBadge, m.inTagsRow),
      color: l.Z.unsafe_rawColors.BRAND_260.css,
      text: h.Z.Messages.NEW
    }) : null, v && (0, i.jsx)("div", {
      className: p.pinIcon,
      children: (0, i.jsx)(o.Tooltip, {
        text: h.Z.Messages.PINNED_POST,
        children: e => (0, i.jsx)(o.PinIcon, {
          size: "custom",
          ...e,
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), d.map(e => (0, i.jsx)(c.Z, {
      tag: e,
      size: c.Z.Sizes.SMALL,
      className: a()(s, {
        [p.tagFiltered]: I.has(e.id)
      })
    }, e.id)), f > 0 ? (0, i.jsx)(c.f, {
      tags: T,
      count: f,
      size: c.Z.Sizes.SMALL
    }) : null]
  }) : null
}