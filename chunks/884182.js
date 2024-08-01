t(47120);
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(512722),
  r = t.n(s),
  u = t(392711),
  d = t.n(u),
  c = t(941797),
  m = t(546432),
  h = t(217702),
  E = t(4925);
let I = Math.round((h.mT - 8) / 3),
  p = Math.round((h.mT - 4) / 2),
  C = Math.round((h.Jj - 4) / 2),
  M = Math.round(2 * (h.mT - 4) / 3),
  _ = M / 2;

function N(e) {
  let {
visualMediaItems: n,
footer: t
  } = e;
  null != t && r()(1 === n.length, 'footer only gets applied to single items');
  let l = n.length;
  if (1 === l)
return (0, i.jsx)(T, {
  itemsForLayout: n,
  isSingleImage: !0,
  footer: t
});
  if (2 === l)
return (0, i.jsx)(f, {
  itemsForLayout: n
});
  if (3 === l)
return (0, i.jsx)(g, {
  itemsForLayout: n
});
  if (4 === l)
return (0, i.jsx)(x, {
  itemsForLayout: n
});
  let o = l % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === o && (0, i.jsx)(T, {
    itemsForLayout: n.slice(0, o)
  }),
  2 === o && (0, i.jsx)(f, {
    itemsForLayout: n.slice(0, o)
  }),
  0 === o ? (0, i.jsx)(A, {
    itemsForLayout: n
  }) : (0, i.jsx)(A, {
    itemsForLayout: n.slice(o)
  })
]
  });
}

function T(e) {
  let {
itemsForLayout: n,
isSingleImage: t,
footer: l
  } = e, o = n[0];
  return (0, i.jsx)('div', {
className: a()(E.oneByOneGrid, {
  [E.oneByOneGridSingle]: t,
  [E.oneByOneGridMosaic]: !t,
  [E.hasFooter]: null != l
}),
children: (0, i.jsx)(j, {
  props: o,
  useFullWidth: !t,
  isSingleItem: !0,
  footer: l
})
  });
}

function f(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: E.oneByTwoGrid,
children: n.map(e => (0, i.jsx)('div', {
  className: E.oneByTwoGridItem,
  children: (0, i.jsx)(j, {
    props: e,
    maxWidth: p,
    maxHeight: p
  })
}, e.item.uniqueId))
  });
}

function g(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsxs)('div', {
className: a()(E.oneByTwoGrid, E.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: E.oneByTwoSoloItem,
    children: (0, i.jsx)(j, {
      props: n[0],
      maxWidth: M
    })
  }),
  (0, i.jsx)('div', {
    className: E.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: E.twoByOneGrid,
      children: n.splice(1).map(e => (0, i.jsx)('div', {
        className: E.twoByOneGridItem,
        children: (0, i.jsx)(j, {
          props: e,
          maxWidth: _,
          maxHeight: C
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function x(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: E.twoByTwoGrid,
children: n.map(e => (0, i.jsx)(j, {
  props: e,
  maxWidth: p,
  maxHeight: C
}, e.item.uniqueId))
  });
}

function A(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: E.threeByThreeGrid,
children: n.map(e => (0, i.jsx)(j, {
  props: e,
  maxWidth: I,
  maxHeight: I
}, e.item.uniqueId))
  });
}
let O = e => ({
className: a()(e, E.itemContentContainer),
imgContainerClassName: E.lazyImgContainer,
imgClassName: E.lazyImg
  }),
  v = e => ({
className: a()(e, E.lazyImg)
  });

function j(e) {
  let {
props: n,
maxWidth: t = h.mT,
maxHeight: l = h.Jj,
useFullWidth: o = !0,
isSingleItem: a = !1,
footer: s
  } = e, r = n.item.type, u = {
...n,
...'IMAGE' === r && O(n.className),
...'VIDEO' === r && v(n.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: t,
maxHeight: l,
useFullWidth: o,
isSingleMosaicItem: a
  };
  return (0, i.jsx)(c.h.Provider, {
value: n.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...u,
  footer: s
})
  });
}
n.Z = function(e) {
  let {
items: n,
inlineForwardButton: t
  } = e, {
groupableVisualMediaItems: o,
nonGroupableVisualMediaItems: a,
nonVisualMediaItems: s
  } = function(e) {
return l.useMemo(() => {
  let [n, t] = d().partition(e, e => (0, m.R_)(e.item.type)), [i, l] = d().partition(n, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: l,
    nonVisualMediaItems: t
  };
}, [e]);
  }(n);
  return (0, i.jsxs)(i.Fragment, {
children: [
  o.length > 0 && (null != t ? (0, i.jsxs)('div', {
    className: E.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: E.visualMediaItemContainer,
        children: (0, i.jsx)(N, {
          visualMediaItems: o
        })
      }),
      t
    ]
  }) : (0, i.jsx)('div', {
    className: E.visualMediaItemContainer,
    children: (0, i.jsx)(N, {
      visualMediaItems: o
    })
  })),
  a.length > 0 && a.map(e => {
    let n = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: E.visualMediaItemContainer,
      children: (0, i.jsx)(N, {
        visualMediaItems: [e],
        footer: n
      })
    }, e.item.uniqueId);
  }),
  s.length > 0 && (0, i.jsx)('div', {
    className: E.nonVisualMediaItemContainer,
    children: s.map(e => (0, i.jsx)('div', {
      className: E.nonVisualMediaItem,
      children: (0, i.jsx)(j, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};