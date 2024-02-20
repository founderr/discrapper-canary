"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("446674"),
  l = n("77078"),
  o = n("990766"),
  u = n("373469"),
  d = n("271938"),
  c = n("30672"),
  f = n("100844"),
  h = n("607391"),
  p = n("782340"),
  m = n("100469");
let C = n("588281");

function E(e) {
  let {
    participant: t,
    width: n,
    noArt: r = !1,
    selected: E = !1
  } = e, g = n < 195, S = (0, i.useStateFromStores)([u.default, d.default], () => u.default.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== d.default.getId()
  }));
  return (0, a.jsx)("div", {
    className: s(m.content, m.streamHidden, {
      [m.small]: g
    }),
    children: (0, a.jsx)(h.default, {
      className: m.streamHiddenEmptyState,
      artURL: C,
      noArt: r,
      selected: E,
      size: (0, h.getSizeForWidth)(n),
      header: g ? null : p.default.Messages.STREAM_HIDDEN,
      description: E ? null : (0, a.jsxs)("div", {
        className: s(m.streamHiddenCTA, {
          [m.largePaddingTop]: !g
        }),
        children: [(0, a.jsx)(f.CallTileCTA, {
          isSmall: g,
          children: (0, a.jsx)(l.Text, {
            variant: g ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < 175 ? p.default.Messages.WATCH : p.default.Messages.WATCH_STREAM
          })
        }), S ? (0, a.jsx)(f.CallTileCTA, {
          className: m.addCTA,
          tooltip: p.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
          onClick: e => {
            e.stopPropagation(), (0, o.watchStream)(t.stream, {
              forceMultiple: !0
            })
          },
          isSmall: g,
          children: (0, a.jsx)(c.default, {
            className: m.addStreamIcon
          })
        }) : null]
      })
    })
  })
}