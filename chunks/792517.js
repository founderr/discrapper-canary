"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(872810),
  u = n(199902),
  _ = n(314897),
  c = n(685203),
  d = n(112560),
  E = n(689938),
  I = n(520025);
let T = n(978538);

function h(e) {
  let {
    participant: t,
    width: n,
    noArt: r = !1,
    selected: h = !1
  } = e, S = n < 195, f = (0, o.e7)([u.Z, _.default], () => u.Z.getAllActiveStreams().some(e => {
    let {
      ownerId: t
    } = e;
    return t !== _.default.getId()
  }));
  return (0, i.jsx)("div", {
    className: s()(I.content, I.streamHidden, {
      [I.__invalid_small]: S
    }),
    children: (0, i.jsx)(d.Z, {
      className: I.streamHiddenEmptyState,
      artURL: T,
      noArt: r,
      selected: h,
      size: (0, d.L)(n),
      header: S ? null : E.Z.Messages.STREAM_HIDDEN,
      description: h ? null : (0, i.jsxs)("div", {
        className: s()(I.streamHiddenCTA, {
          [I.largePaddingTop]: !S
        }),
        children: [(0, i.jsx)(c.a, {
          isSmall: S,
          children: (0, i.jsx)(a.Text, {
            variant: S ? "text-sm/semibold" : "text-md/semibold",
            color: "none",
            children: n < 175 ? E.Z.Messages.WATCH : E.Z.Messages.WATCH_STREAM
          })
        }), f ? (0, i.jsx)(c.a, {
          className: I.addCTA,
          tooltip: E.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
          onClick: e => {
            e.stopPropagation(), (0, l.rn)(t.stream, {
              forceMultiple: !0
            })
          },
          isSmall: S,
          children: (0, i.jsx)(a.EyePlusIcon, {
            size: "xs",
            color: "currentColor",
            className: I.addStreamIcon
          })
        }) : null]
      })
    })
  })
}