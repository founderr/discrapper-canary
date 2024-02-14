"use strict";
a.r(t), a.d(t, {
  default: function() {
    return F
  }
}), a("222007");
var n = a("37983");
a("884691");
var r = a("446674"),
  i = a("77078"),
  s = a("272030"),
  u = a("430568"),
  l = a("385976"),
  o = a("404607"),
  d = a("680986"),
  f = a("300322"),
  c = a("42203"),
  v = a("953371"),
  h = a("782340"),
  C = a("826374");

function T(e) {
  let {
    tag: t
  } = e, {
    name: a,
    emojiId: i,
    emojiName: s
  } = t, o = (0, r.useStateFromStores)([l.default], () => null != i ? l.default.getUsableCustomEmojiById(i) : null);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.default, {
      className: C.emoji,
      emojiId: i,
      emojiName: s,
      animated: !!(null == o ? void 0 : o.animated)
    }), a]
  })
}

function F(e) {
  let t = (0, r.useStateFromStores)([c.default], () => c.default.getChannel(e), [e]),
    a = (0, f.useCanManageThread)(t),
    u = (0, r.useStateFromStores)([c.default], () => c.default.getChannel(null == t ? void 0 : t.parent_id), [t]),
    l = (0, d.useVisibleForumTags)(u),
    C = (0, d.useAppliedTags)(t),
    F = C.length >= v.MAX_FORUM_POST_TAGS,
    E = (0, f.useIsActiveChannelOrUnarchivableThread)(t);
  if (null == t) return (0, s.closeContextMenu)(), null;
  if (!a || __OVERLAY__ || !t.isForumPost() || (null == l ? void 0 : l.length) === 0 || !E) return null;
  let g = e => {
      let a = new Set(C);
      if (a.has(e)) a.delete(e);
      else {
        if (F) return;
        a.add(e)
      }
      let n = Array.from(a).map(e => e.id);
      o.default.updateForumPostTags(t.id, n)
    },
    S = null == l ? void 0 : l.map(e => {
      let t = C.includes(e);
      return (0, n.jsx)(i.MenuCheckboxItem, {
        id: e.id,
        label: (0, n.jsx)(T, {
          tag: e
        }),
        disabled: F && !t,
        action: () => g(e),
        checked: t
      }, e.id)
    });
  return (0, n.jsx)(i.MenuItem, {
    id: "edit-tags",
    label: h.default.Messages.FORUM_TAG_POST_EDIT,
    children: S
  })
}