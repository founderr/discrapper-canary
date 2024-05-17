"use strict";
n.r(t), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("120356"),
  o = n.n(a),
  l = n("512722"),
  r = n.n(l),
  u = n("392711"),
  d = n.n(u),
  m = n("941797"),
  c = n("69750"),
  h = n("768760"),
  I = n("266632");
let M = Math.round((h.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  p = Math.round((h.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  x = Math.round((h.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  f = Math.round(2 * (h.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  C = f / 2;

function g(e) {
  let {
    visualMediaItems: t,
    footer: n
  } = e;
  null != n && r()(1 === t.length, "footer only gets applied to single items");
  let s = t.length;
  if (1 === s) return (0, i.jsx)(y, {
    itemsForLayout: t,
    isSingleImage: !0,
    footer: n
  });
  if (2 === s) return (0, i.jsx)(T, {
    itemsForLayout: t
  });
  if (3 === s) return (0, i.jsx)(A, {
    itemsForLayout: t
  });
  if (4 === s) return (0, i.jsx)(E, {
    itemsForLayout: t
  });
  let a = s % 3;
  return (0, i.jsxs)(i.Fragment, {
    children: [1 === a && (0, i.jsx)(y, {
      itemsForLayout: t.slice(0, a)
    }), 2 === a && (0, i.jsx)(T, {
      itemsForLayout: t.slice(0, a)
    }), 0 === a ? (0, i.jsx)(j, {
      itemsForLayout: t
    }) : (0, i.jsx)(j, {
      itemsForLayout: t.slice(a)
    })]
  })
}

function y(e) {
  let {
    itemsForLayout: t,
    isSingleImage: n,
    footer: s
  } = e, a = t[0];
  return (0, i.jsx)("div", {
    className: o()(I.oneByOneGrid, {
      [I.oneByOneGridSingle]: n,
      [I.oneByOneGridMosaic]: !n,
      [I.hasFooter]: null != s
    }),
    children: (0, i.jsx)(v, {
      props: a,
      useFullWidth: !n,
      isSingleItem: !0,
      footer: s
    })
  })
}

function T(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: I.oneByTwoGrid,
    children: t.map(e => (0, i.jsx)("div", {
      className: I.oneByTwoGridItem,
      children: (0, i.jsx)(v, {
        props: e,
        maxWidth: p,
        maxHeight: p
      })
    }, e.item.uniqueId))
  })
}

function A(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsxs)("div", {
    className: o()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
    children: [(0, i.jsx)("div", {
      className: I.oneByTwoSoloItem,
      children: (0, i.jsx)(v, {
        props: t[0],
        maxWidth: f
      })
    }), (0, i.jsx)("div", {
      className: I.oneByTwoDuoItem,
      children: (0, i.jsx)("div", {
        className: I.twoByOneGrid,
        children: t.splice(1).map(e => (0, i.jsx)("div", {
          className: I.twoByOneGridItem,
          children: (0, i.jsx)(v, {
            props: e,
            maxWidth: C,
            maxHeight: x
          })
        }, e.item.uniqueId))
      })
    })]
  })
}

function E(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: I.twoByTwoGrid,
    children: t.map(e => (0, i.jsx)(v, {
      props: e,
      maxWidth: p,
      maxHeight: x
    }, e.item.uniqueId))
  })
}

function j(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: I.threeByThreeGrid,
    children: t.map(e => (0, i.jsx)(v, {
      props: e,
      maxWidth: M,
      maxHeight: M
    }, e.item.uniqueId))
  })
}
let O = e => ({
    className: o()(e, I.itemContentContainer),
    imgContainerClassName: I.lazyImgContainer,
    imgClassName: I.lazyImg
  }),
  N = e => ({
    className: o()(e, I.lazyImg)
  });

function v(e) {
  let {
    props: t,
    maxWidth: n = h.MEDIA_MOSAIC_MAX_WIDTH,
    maxHeight: s = h.MEDIA_MOSAIC_MAX_HEIGHT,
    useFullWidth: a = !0,
    isSingleItem: o = !1,
    footer: l
  } = e, r = t.item.type, u = {
    ...t,
    ..."IMAGE" === r && O(t.className),
    ..."VIDEO" === r && N(t.className),
    mediaLayoutType: h.MediaLayoutType.MOSAIC,
    maxWidth: n,
    maxHeight: s,
    useFullWidth: a,
    isSingleMosaicItem: o
  };
  return (0, i.jsx)(m.GIFAccessoryContext.Provider, {
    value: t.gifFavoriteButton,
    children: (0, i.jsx)(c.default, {
      ...u,
      footer: l
    })
  })
}
t.default = function(e) {
  let {
    items: t
  } = e, {
    groupableVisualMediaItems: n,
    nonGroupableVisualMediaItems: a,
    nonVisualMediaItems: o
  } = function(e) {
    return s.useMemo(() => {
      let [t, n] = d().partition(e, e => (0, c.isVisualMedia)(e.item.type)), [i, s] = d().partition(t, e => (0, c.isGroupableMedia)(e.item.type));
      return {
        groupableVisualMediaItems: i,
        nonGroupableVisualMediaItems: s,
        nonVisualMediaItems: n
      }
    }, [e])
  }(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [n.length > 0 && (0, i.jsx)("div", {
      className: I.visualMediaItemContainer,
      children: (0, i.jsx)(g, {
        visualMediaItems: n
      })
    }), a.length > 0 && a.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return (0, i.jsx)("div", {
        className: I.visualMediaItemContainer,
        children: (0, i.jsx)(g, {
          visualMediaItems: [e],
          footer: t
        })
      }, e.item.uniqueId)
    }), o.length > 0 && (0, i.jsx)("div", {
      className: I.nonVisualMediaItemContainer,
      children: o.map(e => (0, i.jsx)("div", {
        className: I.nonVisualMediaItem,
        children: (0, i.jsx)(v, {
          props: e
        })
      }, e.item.uniqueId))
    })]
  })
}