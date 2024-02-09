"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("23411"),
  s = n("811986"),
  r = n("648439"),
  o = n("841811"),
  u = n("432335"),
  d = n("849976"),
  c = n("742223"),
  f = n("877220"),
  p = n("258752"),
  m = n("216422"),
  h = n("290581"),
  E = n("742219"),
  S = n("115279");
let g = e => {
    switch (e) {
      case S.EmojiCategories.RECENT:
        return o.default;
      case S.EmojiCategories.FAVORITES:
        return h.default;
      case S.EmojiCategories.TOP_GUILD_EMOJI:
        return E.default;
      case S.EmojiCategories.PEOPLE:
        return c.default;
      case S.EmojiCategories.NATURE:
        return u.default;
      case S.EmojiCategories.FOOD:
        return r.default;
      case S.EmojiCategories.ACTIVITY:
        return a.default;
      case S.EmojiCategories.TRAVEL:
        return p.default;
      case S.EmojiCategories.OBJECTS:
        return d.default;
      case S.EmojiCategories.SYMBOLS:
        return f.default;
      case S.EmojiCategories.FLAGS:
        return s.default;
      case S.EmojiCategories.PREMIUM_UPSELL:
        return m.default;
      default:
        return
    }
  },
  C = i.memo(function(e) {
    let {
      categoryId: t,
      ...n
    } = e, i = g(t);
    return null == i ? null : (0, l.jsx)(i, {
      ...n
    })
  });
var T = C