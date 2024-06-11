"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  },
  useTagsRowHooks: function() {
    return g
  }
});
var n = i("735250");
i("470079");
var a = i("120356"),
  s = i.n(a),
  l = i("692547"),
  o = i("481060"),
  r = i("394831"),
  u = i("109434"),
  d = i("456269"),
  c = i("479099"),
  h = i("176505"),
  m = i("689938"),
  f = i("861186"),
  p = i("176442");

function g(e) {
  let {
    channel: t,
    isNew: i
  } = e, n = (0, d.useAppliedTags)(t), a = n.slice(void 0, 3), s = n.slice(3), l = n.length > 3 ? n.length - 3 : 0, o = t.hasFlag(h.ChannelFlags.PINNED), r = a.length > 0 || o || i;
  return {
    shownTags: a,
    remainingTags: s,
    moreTagsCount: l,
    isPinned: o,
    shouldRenderTagsRow: r,
    forumPostContainsTags: n.length > 0
  }
}

function T(e) {
  let {
    channel: t,
    isNew: i,
    tagsClassName: a,
    className: d
  } = e, {
    shownTags: h,
    remainingTags: T,
    moreTagsCount: S,
    isPinned: v,
    shouldRenderTagsRow: E
  } = g({
    channel: t,
    isNew: i
  }), {
    tagFilter: R
  } = (0, u.useForumChannelStore)(t.id);
  return E ? (0, n.jsxs)("div", {
    className: s()(p.tags, d),
    children: [i ? (0, n.jsx)(o.TextBadge, {
      className: s()(f.newBadge, f.inTagsRow),
      color: l.default.unsafe_rawColors.BRAND_260.css,
      text: m.default.Messages.NEW
    }) : null, v && (0, n.jsx)("div", {
      className: p.pinIcon,
      children: (0, n.jsx)(o.Tooltip, {
        text: m.default.Messages.PINNED_POST,
        children: e => (0, n.jsx)(r.default, {
          ...e,
          width: 16,
          height: 16,
          color: "white"
        })
      })
    }), h.map(e => (0, n.jsx)(c.default, {
      tag: e,
      size: c.default.Sizes.SMALL,
      className: s()(a, {
        [p.tagFiltered]: R.has(e.id)
      })
    }, e.id)), S > 0 ? (0, n.jsx)(c.ForumTagOverflow, {
      tags: T,
      count: S,
      size: c.default.Sizes.SMALL
    }) : null]
  }) : null
}