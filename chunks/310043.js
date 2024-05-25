"use strict";
n.r(t), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("120356"),
  l = n.n(a),
  o = n("512722"),
  r = n.n(o),
  u = n("392711"),
  d = n.n(u),
  c = n("426275"),
  m = n("941797"),
  h = n("69750"),
  I = n("768760"),
  M = n("266632");
let f = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 8) / 3),
  p = Math.round((I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 2),
  x = Math.round((I.MEDIA_MOSAIC_MAX_HEIGHT - 4) / 2),
  C = Math.round(2 * (I.MEDIA_MOSAIC_MAX_WIDTH - 4) / 3),
  g = C / 2;

function A(e) {
  let {
    visualMediaItems: t,
    footer: n
  } = e;
  null != n && r()(1 === t.length, "footer only gets applied to single items");
  let s = t.length;
  if (1 === s) return (0, i.jsx)(T, {
    itemsForLayout: t,
    isSingleImage: !0,
    footer: n
  });
  if (2 === s) return (0, i.jsx)(y, {
    itemsForLayout: t
  });
  if (3 === s) return (0, i.jsx)(E, {
    itemsForLayout: t
  });
  if (4 === s) return (0, i.jsx)(j, {
    itemsForLayout: t
  });
  let a = s % 3;
  return (0, i.jsxs)(i.Fragment, {
    children: [1 === a && (0, i.jsx)(T, {
      itemsForLayout: t.slice(0, a)
    }), 2 === a && (0, i.jsx)(y, {
      itemsForLayout: t.slice(0, a)
    }), 0 === a ? (0, i.jsx)(v, {
      itemsForLayout: t
    }) : (0, i.jsx)(v, {
      itemsForLayout: t.slice(a)
    })]
  })
}

function T(e) {
  let {
    itemsForLayout: t,
    isSingleImage: n,
    footer: s
  } = e, a = t[0];
  return (0, i.jsx)("div", {
    className: l()(M.oneByOneGrid, {
      [M.oneByOneGridSingle]: n,
      [M.oneByOneGridMosaic]: !n,
      [M.hasFooter]: null != s
    }),
    children: (0, i.jsx)(_, {
      props: a,
      useFullWidth: !n,
      isSingleItem: !0,
      footer: s
    })
  })
}

function y(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: M.oneByTwoGrid,
    children: t.map(e => (0, i.jsx)("div", {
      className: M.oneByTwoGridItem,
      children: (0, i.jsx)(_, {
        props: e,
        maxWidth: p,
        maxHeight: p
      })
    }, e.item.uniqueId))
  })
}

function E(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsxs)("div", {
    className: l()(M.oneByTwoGrid, M.oneByTwoLayoutThreeGrid),
    children: [(0, i.jsx)("div", {
      className: M.oneByTwoSoloItem,
      children: (0, i.jsx)(_, {
        props: t[0],
        maxWidth: C
      })
    }), (0, i.jsx)("div", {
      className: M.oneByTwoDuoItem,
      children: (0, i.jsx)("div", {
        className: M.twoByOneGrid,
        children: t.splice(1).map(e => (0, i.jsx)("div", {
          className: M.twoByOneGridItem,
          children: (0, i.jsx)(_, {
            props: e,
            maxWidth: g,
            maxHeight: x
          })
        }, e.item.uniqueId))
      })
    })]
  })
}

function j(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: M.twoByTwoGrid,
    children: t.map(e => (0, i.jsx)(_, {
      props: e,
      maxWidth: p,
      maxHeight: x
    }, e.item.uniqueId))
  })
}

function v(e) {
  let {
    itemsForLayout: t
  } = e;
  return (0, i.jsx)("div", {
    className: M.threeByThreeGrid,
    children: t.map(e => (0, i.jsx)(_, {
      props: e,
      maxWidth: f,
      maxHeight: f
    }, e.item.uniqueId))
  })
}
let N = e => ({
    className: l()(e, M.itemContentContainer),
    imgContainerClassName: M.lazyImgContainer,
    imgClassName: M.lazyImg
  }),
  O = e => ({
    className: l()(e, M.lazyImg)
  });

function _(e) {
  let {
    props: t,
    maxWidth: n = I.MEDIA_MOSAIC_MAX_WIDTH,
    maxHeight: s = I.MEDIA_MOSAIC_MAX_HEIGHT,
    useFullWidth: a = !0,
    isSingleItem: l = !1,
    footer: o
  } = e, r = t.item.type, u = {
    ...t,
    ..."IMAGE" === r && N(t.className),
    ..."VIDEO" === r && O(t.className),
    mediaLayoutType: I.MediaLayoutType.MOSAIC,
    maxWidth: n,
    maxHeight: s,
    useFullWidth: a,
    isSingleMosaicItem: l
  };
  return (0, i.jsx)(m.GIFAccessoryContext.Provider, {
    value: t.gifFavoriteButton,
    children: (0, i.jsx)(h.default, {
      ...u,
      footer: o
    })
  })
}
t.default = function(e) {
  let {
    items: t,
    hasInlineForwardButton: n = !1
  } = e, {
    groupableVisualMediaItems: a,
    nonGroupableVisualMediaItems: l,
    nonVisualMediaItems: o
  } = function(e) {
    return s.useMemo(() => {
      let [t, n] = d().partition(e, e => (0, h.isVisualMedia)(e.item.type)), [i, s] = d().partition(t, e => (0, h.isGroupableMedia)(e.item.type));
      return {
        groupableVisualMediaItems: i,
        nonGroupableVisualMediaItems: s,
        nonVisualMediaItems: n
      }
    }, [e])
  }(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [a.length > 0 && (n ? (0, i.jsxs)("div", {
      className: M.mosaicContainer,
      children: [(0, i.jsx)("div", {
        className: M.visualMediaItemContainer,
        children: (0, i.jsx)(A, {
          visualMediaItems: a
        })
      }), n ? (0, i.jsx)(c.default, {
        onClick: () => {}
      }) : null]
    }) : (0, i.jsx)("div", {
      className: M.visualMediaItemContainer,
      children: (0, i.jsx)(A, {
        visualMediaItems: a
      })
    })), l.length > 0 && l.map(e => {
      let t = e.renderMosaicItemFooter({
        item: e.item,
        message: e.message
      });
      return (0, i.jsx)("div", {
        className: M.visualMediaItemContainer,
        children: (0, i.jsx)(A, {
          visualMediaItems: [e],
          footer: t
        })
      }, e.item.uniqueId)
    }), o.length > 0 && (0, i.jsx)("div", {
      className: M.nonVisualMediaItemContainer,
      children: o.map(e => (0, i.jsx)("div", {
        className: M.nonVisualMediaItem,
        children: (0, i.jsx)(_, {
          props: e
        })
      }, e.item.uniqueId))
    })]
  })
}