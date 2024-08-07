n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  s = n(512722),
  r = n.n(s),
  d = n(392711),
  u = n.n(d),
  c = n(947849),
  m = n(546432),
  p = n(217702),
  h = n(4925);
let x = Math.round((p.mT - 8) / 3),
  g = Math.round((p.mT - 4) / 2),
  I = Math.round((p.Jj - 4) / 2),
  E = Math.round(2 * (p.mT - 4) / 3),
  _ = E / 2;

function C(e) {
  let {
visualMediaItems: t,
footer: n
  } = e;
  null != n && r()(1 === t.length, 'footer only gets applied to single items');
  let o = t.length;
  if (1 === o)
return (0, i.jsx)(f, {
  itemsForLayout: t,
  isSingleImage: !0,
  footer: n
});
  if (2 === o)
return (0, i.jsx)(M, {
  itemsForLayout: t
});
  if (3 === o)
return (0, i.jsx)(N, {
  itemsForLayout: t
});
  if (4 === o)
return (0, i.jsx)(T, {
  itemsForLayout: t
});
  let a = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === a && (0, i.jsx)(f, {
    itemsForLayout: t.slice(0, a)
  }),
  2 === a && (0, i.jsx)(M, {
    itemsForLayout: t.slice(0, a)
  }),
  0 === a ? (0, i.jsx)(y, {
    itemsForLayout: t
  }) : (0, i.jsx)(y, {
    itemsForLayout: t.slice(a)
  })
]
  });
}

function f(e) {
  let {
itemsForLayout: t,
isSingleImage: n,
footer: o
  } = e, a = t[0];
  return (0, i.jsx)('div', {
className: l()(h.oneByOneGrid, {
  [h.oneByOneGridSingle]: n,
  [h.oneByOneGridMosaic]: !n,
  [h.hasFooter]: null != o
}),
children: (0, i.jsx)(O, {
  props: a,
  useFullWidth: !n,
  isSingleItem: !0,
  footer: o
})
  });
}

function M(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.oneByTwoGrid,
children: t.map(e => (0, i.jsx)('div', {
  className: h.oneByTwoGridItem,
  children: (0, i.jsx)(O, {
    props: e,
    maxWidth: g,
    maxHeight: g
  })
}, e.item.uniqueId))
  });
}

function N(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsxs)('div', {
className: l()(h.oneByTwoGrid, h.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: h.oneByTwoSoloItem,
    children: (0, i.jsx)(O, {
      props: t[0],
      maxWidth: E
    })
  }),
  (0, i.jsx)('div', {
    className: h.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: h.twoByOneGrid,
      children: t.splice(1).map(e => (0, i.jsx)('div', {
        className: h.twoByOneGridItem,
        children: (0, i.jsx)(O, {
          props: e,
          maxWidth: _,
          maxHeight: I
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function T(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.twoByTwoGrid,
children: t.map(e => (0, i.jsx)(O, {
  props: e,
  maxWidth: g,
  maxHeight: I
}, e.item.uniqueId))
  });
}

function y(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: h.threeByThreeGrid,
children: t.map(e => (0, i.jsx)(O, {
  props: e,
  maxWidth: x,
  maxHeight: x
}, e.item.uniqueId))
  });
}
let v = e => ({
className: l()(e, h.itemContentContainer),
imgContainerClassName: h.lazyImgContainer,
imgClassName: h.lazyImg
  }),
  A = e => ({
className: l()(e, h.lazyImg)
  });

function O(e) {
  let {
props: t,
maxWidth: n = p.mT,
maxHeight: o = p.Jj,
useFullWidth: a = !0,
isSingleItem: l = !1,
footer: s
  } = e, r = t.item.type, d = {
...t,
...'IMAGE' === r && v(t.className),
...'VIDEO' === r && A(t.className),
mediaLayoutType: p.hV.MOSAIC,
maxWidth: n,
maxHeight: o,
useFullWidth: a,
isSingleMosaicItem: l
  };
  return (0, i.jsx)(c.h.Provider, {
value: t.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...d,
  footer: s
})
  });
}
t.Z = function(e) {
  let {
items: t,
inlineForwardButton: n
  } = e, {
groupableVisualMediaItems: a,
nonGroupableVisualMediaItems: l,
nonVisualMediaItems: s
  } = function(e) {
return o.useMemo(() => {
  let [t, n] = u().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = u().partition(t, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: n
  };
}, [e]);
  }(t);
  return (0, i.jsxs)(i.Fragment, {
children: [
  a.length > 0 && (null != n ? (0, i.jsxs)('div', {
    className: h.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: h.visualMediaItemContainer,
        children: (0, i.jsx)(C, {
          visualMediaItems: a
        })
      }),
      n
    ]
  }) : (0, i.jsx)('div', {
    className: h.visualMediaItemContainer,
    children: (0, i.jsx)(C, {
      visualMediaItems: a
    })
  })),
  l.length > 0 && l.map(e => {
    let t = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: h.visualMediaItemContainer,
      children: (0, i.jsx)(C, {
        visualMediaItems: [e],
        footer: t
      })
    }, e.item.uniqueId);
  }),
  s.length > 0 && (0, i.jsx)('div', {
    className: h.nonVisualMediaItemContainer,
    children: s.map(e => (0, i.jsx)('div', {
      className: h.nonVisualMediaItem,
      children: (0, i.jsx)(O, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};