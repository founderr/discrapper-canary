"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var s = n(735250);
n(470079);
var l = n(658722),
  a = n.n(l),
  r = n(442837),
  i = n(481060),
  o = n(596454),
  c = n(339085),
  d = n(456269),
  u = n(689938),
  m = n(451379);
let h = e => {
  let {
    tag: t
  } = e, {
    id: n,
    name: l,
    emojiId: a,
    emojiName: d
  } = t, u = (0, r.e7)([c.Z], () => null != a ? c.Z.getUsableCustomEmojiById(a) : null), h = null != a || null != d;
  return (0, s.jsx)(i.ComboboxItem, {
    value: n,
    children: (0, s.jsx)(i.ComboboxItem.Label, {
      children: (0, s.jsxs)("div", {
        className: m.row,
        children: [h ? (0, s.jsx)(o.Z, {
          className: m.__invalid_emoji,
          emojiId: a,
          emojiName: d,
          animated: !!(null == u ? void 0 : u.animated)
        }) : (0, s.jsx)(i.TagIcon, {
          size: "md",
          color: "currentColor",
          className: m.__invalid_emoji
        }), (0, s.jsx)(i.Text, {
          variant: "text-md/semibold",
          color: "header-secondary",
          children: l
        })]
      })
    })
  }, n)
};

function g(e) {
  let {
    parentChannel: t,
    appliedTags: n,
    maxTagsApplied: l,
    onSelectTag: r,
    onClose: o
  } = e, c = (0, d.Vm)(t), m = (e, t) => t.filter(t => a()(e.toLowerCase(), t.name.toLowerCase()));
  return (0, s.jsx)(i.ComboboxPopout, {
    showScrollbar: !0,
    value: n,
    onChange: e => {
      if (!l || !!n.has(e)) r(e), o()
    },
    placeholder: u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    "aria-label": u.Z.Messages.FORUM_TAG_POST_SEARCH_PLACEHOLDER,
    children: e => m(e, c).map(e => (0, s.jsx)(h, {
      tag: e
    }, e.id))
  })
}