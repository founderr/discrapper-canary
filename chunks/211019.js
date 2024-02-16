"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("446674"),
  l = n("77078"),
  u = n("990766"),
  o = n("373469"),
  d = n("271938"),
  c = n("30672"),
  f = n("100844"),
  S = n("607391"),
  E = n("782340"),
  h = n("100469");
let _ = n("588281");

function C(e) {
  let {
    participant: t,
    width: n,
    noArt: r = !1,
    selected: C = !1
  } = e, p = n < 195, m = (0, i.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== d.default.getId()
  }));
  return (0, a.jsx)("div", {
    className: s(h.content, h.streamHidden, {
      [h.small]: p
    }),
    children: (0, a.jsx)(S.default, {
      className: h.streamHiddenEmptyState,
      artURL: _,
      noArt: r,
      selected: C,
      size: (0, S.getSizeForWidth)(n),
      header: p ? null : E.default.Messages.STREAM_HIDDEN,
      description: C ? null : (0, a.jsxs)("div", {
        className: s(h.streamHiddenCTA, {
          [h.largePaddingTop]: !p
        }),
        children: [(0, a.jsx)(f.CallTileCTA, {
          isSmall: p,
          children: (0, a.jsx)(l.Text, {
            variant: p ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < 175 ? E.default.Messages.WATCH : E.default.Messages.WATCH_STREAM
          })
        }), m ? (0, a.jsx)(f.CallTileCTA, {
          className: h.addCTA,
          tooltip: E.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
          onClick: e => {
            e.stopPropagation(), (0, u.watchStream)(t.stream, {
              forceMultiple: !0
            })
          },
          isSmall: p,
          children: (0, a.jsx)(c.default, {
            className: h.addStreamIcon
          })
        }) : null]
      })
    })
  })
}