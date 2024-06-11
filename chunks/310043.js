"use strict";
i.r(t), i("47120");
var n = i("735250"),
  s = i("470079"),
  a = i("120356"),
  l = i.n(a),
  o = i("512722"),
  r = i.n(o),
  u = i("392711"),
  d = i.n(u),
  m = i("941797"),
  c = i("69750"),
  h = i("768760"),
  I = i("266632");
let M = Math.round((h.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  p = Math.round((h.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  x = Math.round((h.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  f = Math.round(2 * (h.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  C = f / 2;

function g(e) {
  let {
    visualMediaItems: t,
    footer: i
  } = e;
  null != i && r()(1 === t.length, "footer only gets applied to single items");
  let s = t.length;
  if (1 === s) return (0, n.jsx)(y, {
    itemsForLayout: t,
    isSingleImage: !0,
    footer: i
  });
  if (2 === s) return (0, n.jsx)(T, {
    itemsForLayout: t
  });
  if (3 === s) return (0, n.jsx)(A, {
    itemsForLayout: t
  });
  if (4 === s) return (0, n.jsx)(E, {
    itemsForLayout: t
  });
  let a = s % 3;
  return (0, n.jsxs)(n.Fragment, {
    children: [1 === a && (0, n.jsx)(y, {
      itemsForLayout: t.slice(0, a)
    }), 2 === a && (0, n.jsx)(T, {
      itemsForLayout: t.slice(0, a)
    }), 0 === a ? (0, n.jsx)(j, {
      itemsForLayout: t
    }) : (0, n.jsx)(j, {
      itemsForLayout: t.slice(a)
    })]
  })
}

function y(e) {
  let {
    itemsForLayout: t,
    isSingleImage: i,
    footer: s
  } = e, a = t[0];
  return (0, n.jsx)("div", {
    className: l()(I.oneByOneGrid, {
      [I.oneByOneGridSingle]: i,
      [I.oneByOneGridMosaic]: !i,
      [I.hasFooter]: null != s
    }),
    children: (0, n.jsx)(O, {
      props: a,
      useFullWidth: !i,
      isSingleItem: !0,
      footer: s
    })
  })
}

function T(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, n.jsx)("div", {
    className: I.oneByTwoGrid,
    children: t.map(e => (0, n.jsx)("div", {
      className: I.oneByTwoGridItem,
      children: (0, n.jsx)(O, {
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
  return (0, n.jsxs)("div", {
    className: l()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
    children: [(0, n.jsx)("div", {
      className: I.oneByTwoSoloItem,
      children: (0, n.jsx)(O, {
        props: t[0],
        maxWidth: f
      })
    }), (0, n.jsx)("div", {
      className: I.oneByTwoDuoItem,
      children: (0, n.jsx)("div", {
        className: I.twoByOneGrid,
        children: t.splice(1).map(e => (0, n.jsx)("div", {
          className: I.twoByOneGridItem,
          children: (0, n.jsx)(O, {
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
  return (0, n.jsx)("div", {
    className: I.twoByTwoGrid,
    children: t.map(e => (0, n.jsx)(O, {
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
  return (0, n.jsx)("div", {
    className: I.threeByThreeGrid,
    children: t.map(e => (0, n.jsx)(O, {
      props: e,
      maxWidth: M,
      maxHeight: M
    }, e.item.uniqueId))
  })
}
let v = e => ({
    className: l()(e, I.itemContentContainer),
    imgContainerClassName: I.lazyImgContainer,
    imgClassName: I.lazyImg
  }),
  N = e => ({
    className: l()(e, I.lazyImg)
  });

function O(e) {
  let {
    props: t,
    maxWidth: i = h.MEDIA_MOSAIC_MAX_WIDTH,
    maxHeight: s = h.MEDIA_MOSAIC_MAX_HEIGHT,
    useFullWidth: a = !0,
    isSingleItem: l = !1,
    footer: o
  } = e, r = t.item.type, u = {
    ...t,
    ..."IMAGE" === r && v(t.className),
    ..."VIDEO" === r && N(t.className),
    mediaLayoutType: h.MediaLayoutType.MOSAIC,
    maxWidth: i,
    maxHeight: s,
    useFullWidth: a,
    isSingleMosaicItem: l
  };
  return (0, n.jsx)(m.GIFAccessoryContext.Provider, {
    value: t.gifFavoriteButton,
    children: (0, n.jsx)(c.default, {
      ...u,
      footer: o
    })
  })
}
t.default = function(e) {
  let {
    items: t,
    inlineForwardButton: i,
    inlineForwardButtonOnHover: a
  } = e, {
    groupableVisualMediaItems: l,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: r
  } = function(e) {
    return s.useMemo(() => {
      let [t, i] = d().partition(e, e => (0, c.isVisualMedia)(e.item.type)), [n, s] = d().partition(t, e => (0, c.isGroupableMedia)(e.item.type));
      return {
        groupableVisualMediaItems: n,
        nonGroupableVisualMediaItems: s,
        nonVisualMediaItems: i
      }
    }, [e])
  }(t);
  return (0, n.jsxs)(n.Fragment, {
    children: [l.length > 0 && (null != i ? (0, n.jsxs)("div", {
      className: I.mosaicContainer,
      children: [(0, n.jsx)("div", {
        className: I.visualMediaItemContainer,
        children: (0, n.jsx)(g, {
          visualMediaItems: l
        })
      }), a ? (0, n.jsx)("div", {
        className: I.inlineForwardOnHover,
        children: i
      }) : i]
    }) : (0, n.jsx)("div", {
      className: I.visualMediaItemContainer,
      children: (0, n.jsx)(g, {
        visualMediaItems: l
      })
    })), o.length > 0 && o.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return (0, n.jsx)("div", {
        className: I.visualMediaItemContainer,
        children: (0, n.jsx)(g, {
          visualMediaItems: [e],
          footer: t
        })
      }, e.item.uniqueId)
    }), r.length > 0 && (0, n.jsx)("div", {
      className: I.nonVisualMediaItemContainer,
      children: r.map(e => (0, n.jsx)("div", {
        className: I.nonVisualMediaItem,
        children: (0, n.jsx)(O, {
          props: e
        })
      }, e.item.uniqueId))
    })]
  })
}