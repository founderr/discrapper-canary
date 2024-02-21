"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("611221"),
  i = a("446674"),
  d = a("449008"),
  r = a("713810"),
  u = a("185014"),
  o = a("530853"),
  c = a("435837"),
  f = a("592979"),
  m = a("232882"),
  h = a("309673"),
  E = n.memo(function(e) {
    let {
      guildId: t,
      itemId: a,
      scrollerHeight: E,
      scrollerRef: g,
      showFeedback: I,
      setOnDismissedFeedback: _
    } = e, [x, v, C] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.getItem(t, a), u.default.getIsItemHiding(t, a), u.default.getIsItemHidden(t, a)]), S = n.useRef(null);
    if (n.useEffect(() => {
        var e;
        let l = S.current;
        if (null == l || null == E) {
          (0, r.markGuildFeedItemAsUnseen)(t, a, Date.now());
          return
        }
        let n = l.clientHeight,
          s = null === (e = g.current) || void 0 === e ? void 0 : e.getScrollerNode();
        if (null == s) return;
        let i = Math.min(.5, .5 * E / n),
          d = new IntersectionObserver(e => (function(e, t, a) {
            for (let l of a) {
              let a = l.target.dataset.itemId;
              if (null == a) return;
              let n = Date.now();
              l.intersectionRatio >= t ? (0, r.markGuildFeedItemAsSeen)(e, a, n) : (0, r.markGuildFeedItemAsUnseen)(e, a, n)
            }
          })(t, i, e), {
            root: s,
            rootMargin: "0px 100000px 0px 100000px",
            threshold: i
          });
        return d.observe(l), () => {
          d.disconnect()
        }
      }, [a, t, g, E, v, C]), null == x || C) return null;
    if (v) return (0, l.jsx)(c.default, {
      guildId: t,
      feedItem: x
    });
    switch (x.type) {
      case s.GuildFeedItemTypes.FORUM_POST:
        return (0, l.jsx)(h.default, {
          ref: S,
          guildId: t,
          postItem: x,
          showFeedback: I,
          setOnDismissedFeedback: _
        });
      case s.GuildFeedItemTypes.MESSAGE:
        return (0, l.jsx)(m.default, {
          ref: S,
          guildId: t,
          messageItem: x,
          showFeedback: I,
          setOnDismissedFeedback: _
        });
      case s.GuildFeedItemTypes.MESSAGE_BUNDLE:
        return (0, l.jsx)(f.default, {
          ref: S,
          guildId: t,
          messageBundleItem: x,
          showFeedback: I,
          setOnDismissedFeedback: _
        });
      case s.GuildFeedItemTypes.CONVERSATION:
        return (0, l.jsx)(o.default, {
          ref: S,
          guildId: t,
          conversationItem: x,
          showFeedback: I,
          setOnDismissedFeedback: _
        });
      default:
        (0, d.assertNever)(x)
    }
  })