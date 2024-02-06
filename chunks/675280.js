"use strict";
i.r(t), i.d(t, {
  default: function() {
    return h
  }
});
var n = i("37983"),
  s = i("884691"),
  l = i("23411"),
  r = i("811986"),
  a = i("648439"),
  o = i("841811"),
  u = i("432335"),
  c = i("849976"),
  d = i("742223"),
  f = i("877220"),
  E = i("258752"),
  m = i("216422"),
  I = i("290581"),
  p = i("742219"),
  g = i("115279");
let _ = e => {
    switch (e) {
      case g.EmojiCategories.RECENT:
        return o.default;
      case g.EmojiCategories.FAVORITES:
        return I.default;
      case g.EmojiCategories.TOP_GUILD_EMOJI:
        return p.default;
      case g.EmojiCategories.PEOPLE:
        return d.default;
      case g.EmojiCategories.NATURE:
        return u.default;
      case g.EmojiCategories.FOOD:
        return a.default;
      case g.EmojiCategories.ACTIVITY:
        return l.default;
      case g.EmojiCategories.TRAVEL:
        return E.default;
      case g.EmojiCategories.OBJECTS:
        return c.default;
      case g.EmojiCategories.SYMBOLS:
        return f.default;
      case g.EmojiCategories.FLAGS:
        return r.default;
      case g.EmojiCategories.PREMIUM_UPSELL:
        return m.default;
      default:
        return
    }
  },
  S = s.memo(function(e) {
    let {
      categoryId: t,
      ...i
    } = e, s = _(t);
    return null == s ? null : (0, n.jsx)(s, {
      ...i
    })
  });
var h = S