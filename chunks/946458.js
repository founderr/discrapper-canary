o.d(i, {
  Z: function() {
    return r
  }
});
var t = o(735250);
o(470079);
var s = o(442837),
  l = o(481060),
  a = o(596454),
  n = o(339085),
  d = o(158176);

function r(e) {
  let {
    reactionEmoji: i
  } = e, o = (0, s.e7)([n.Z], () => (null == i ? void 0 : i.emojiId) != null ? n.Z.getUsableCustomEmojiById(i.emojiId) : null);
  return (0, t.jsxs)("div", {
    className: d.container,
    children: [(0, t.jsxs)("div", {
      className: d.body,
      children: [(0, t.jsxs)("div", {
        className: d.placeholderLines,
        children: [(0, t.jsx)(c, {
          width: "100%",
          marginBottom: 8
        }), (0, t.jsx)(c, {
          width: "80%",
          marginBottom: 16
        }), (0, t.jsx)(c, {
          width: "50%",
          marginBottom: 8
        }), (0, t.jsx)(c, {
          width: "60%",
          marginBottom: 16
        })]
      }), (0, t.jsx)("div", {
        className: d.placeholderMedia
      })]
    }), (0, t.jsxs)("div", {
      className: d.footer,
      children: [(0, t.jsxs)("div", {
        className: d.reaction,
        children: [null != i ? (0, t.jsx)(a.Z, {
          className: d.reactionEmote,
          emojiId: i.emojiId,
          emojiName: i.emojiName,
          animated: !!(null == o ? void 0 : o.animated)
        }) : (0, t.jsx)(l.ReactionIcon, {
          size: "sm",
          color: "currentColor",
          className: d.reactionEmote
        }), (0, t.jsx)(l.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: 17
        })]
      }), (0, t.jsx)(c, {
        width: "24px",
        marginBottom: 0
      }), (0, t.jsx)("div", {
        className: d.dot
      }), (0, t.jsx)(c, {
        width: "24px",
        marginBottom: 0
      })]
    })]
  })
}

function c(e) {
  let {
    width: i,
    marginBottom: o
  } = e;
  return (0, t.jsx)("div", {
    className: d.placeholderLine,
    style: {
      width: i,
      marginBottom: o
    }
  })
}