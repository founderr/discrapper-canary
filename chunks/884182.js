n(47120);
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  s = n(512722),
  r = n.n(s),
  u = n(392711),
  d = n.n(u),
  c = n(941797),
  m = n(546432),
  h = n(217702),
  p = n(4925);
let E = Math.round((h.mT - 8) / 3),
  I = Math.round((h.mT - 4) / 2),
  _ = Math.round((h.Jj - 4) / 2),
  C = Math.round(2 * (h.mT - 4) / 3),
  g = C / 2;

function x(e) {
  let {
visualMediaItems: t,
footer: n
  } = e;
  null != n && r()(1 === t.length, 'footer only gets applied to single items');
  let o = t.length;
  if (1 === o)
return (0, i.jsx)(M, {
  itemsForLayout: t,
  isSingleImage: !0,
  footer: n
});
  if (2 === o)
return (0, i.jsx)(f, {
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
  1 === a && (0, i.jsx)(M, {
    itemsForLayout: t.slice(0, a)
  }),
  2 === a && (0, i.jsx)(f, {
    itemsForLayout: t.slice(0, a)
  }),
  0 === a ? (0, i.jsx)(O, {
    itemsForLayout: t
  }) : (0, i.jsx)(O, {
    itemsForLayout: t.slice(a)
  })
]
  });
}

function M(e) {
  let {
itemsForLayout: t,
isSingleImage: n,
footer: o
  } = e, a = t[0];
  return (0, i.jsx)('div', {
className: l()(p.oneByOneGrid, {
  [p.oneByOneGridSingle]: n,
  [p.oneByOneGridMosaic]: !n,
  [p.hasFooter]: null != o
}),
children: (0, i.jsx)(j, {
  props: a,
  useFullWidth: !n,
  isSingleItem: !0,
  footer: o
})
  });
}

function f(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: p.oneByTwoGrid,
children: t.map(e => (0, i.jsx)('div', {
  className: p.oneByTwoGridItem,
  children: (0, i.jsx)(j, {
    props: e,
    maxWidth: I,
    maxHeight: I
  })
}, e.item.uniqueId))
  });
}

function N(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsxs)('div', {
className: l()(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: p.oneByTwoSoloItem,
    children: (0, i.jsx)(j, {
      props: t[0],
      maxWidth: C
    })
  }),
  (0, i.jsx)('div', {
    className: p.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: p.twoByOneGrid,
      children: t.splice(1).map(e => (0, i.jsx)('div', {
        className: p.twoByOneGridItem,
        children: (0, i.jsx)(j, {
          props: e,
          maxWidth: g,
          maxHeight: _
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
className: p.twoByTwoGrid,
children: t.map(e => (0, i.jsx)(j, {
  props: e,
  maxWidth: I,
  maxHeight: _
}, e.item.uniqueId))
  });
}

function O(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: p.threeByThreeGrid,
children: t.map(e => (0, i.jsx)(j, {
  props: e,
  maxWidth: E,
  maxHeight: E
}, e.item.uniqueId))
  });
}
let A = e => ({
className: l()(e, p.itemContentContainer),
imgContainerClassName: p.lazyImgContainer,
imgClassName: p.lazyImg
  }),
  v = e => ({
className: l()(e, p.lazyImg)
  });

function j(e) {
  let {
props: t,
maxWidth: n = h.mT,
maxHeight: o = h.Jj,
useFullWidth: a = !0,
isSingleItem: l = !1,
footer: s
  } = e, r = t.item.type, u = {
...t,
...'IMAGE' === r && A(t.className),
...'VIDEO' === r && v(t.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: n,
maxHeight: o,
useFullWidth: a,
isSingleMosaicItem: l
  };
  return (0, i.jsx)(c.h.Provider, {
value: t.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...u,
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
  let [t, n] = d().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = d().partition(t, e => (0, m.Ld)(e.item.type));
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
    className: p.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: p.visualMediaItemContainer,
        children: (0, i.jsx)(x, {
          visualMediaItems: a
        })
      }),
      n
    ]
  }) : (0, i.jsx)('div', {
    className: p.visualMediaItemContainer,
    children: (0, i.jsx)(x, {
      visualMediaItems: a
    })
  })),
  l.length > 0 && l.map(e => {
    let t = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: p.visualMediaItemContainer,
      children: (0, i.jsx)(x, {
        visualMediaItems: [e],
        footer: t
      })
    }, e.item.uniqueId);
  }),
  s.length > 0 && (0, i.jsx)('div', {
    className: p.nonVisualMediaItemContainer,
    children: s.map(e => (0, i.jsx)('div', {
      className: p.nonVisualMediaItem,
      children: (0, i.jsx)(j, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};