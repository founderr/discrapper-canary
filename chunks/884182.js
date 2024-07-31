t(47120);
var i = t(735250),
  l = t(470079),
  o = t(120356),
  a = t.n(o),
  s = t(512722),
  r = t.n(s),
  d = t(392711),
  u = t.n(d),
  c = t(941797),
  m = t(546432),
  h = t(217702),
  I = t(4925);
let E = Math.round((h.mT - 8) / 3),
  p = Math.round((h.mT - 4) / 2),
  C = Math.round((h.Jj - 4) / 2),
  x = Math.round(2 * (h.mT - 4) / 3),
  M = x / 2;

function g(e) {
  let {
visualMediaItems: n,
footer: t
  } = e;
  null != t && r()(1 === n.length, 'footer only gets applied to single items');
  let l = n.length;
  if (1 === l)
return (0, i.jsx)(f, {
  itemsForLayout: n,
  isSingleImage: !0,
  footer: t
});
  if (2 === l)
return (0, i.jsx)(N, {
  itemsForLayout: n
});
  if (3 === l)
return (0, i.jsx)(T, {
  itemsForLayout: n
});
  if (4 === l)
return (0, i.jsx)(v, {
  itemsForLayout: n
});
  let o = l % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === o && (0, i.jsx)(f, {
    itemsForLayout: n.slice(0, o)
  }),
  2 === o && (0, i.jsx)(N, {
    itemsForLayout: n.slice(0, o)
  }),
  0 === o ? (0, i.jsx)(_, {
    itemsForLayout: n
  }) : (0, i.jsx)(_, {
    itemsForLayout: n.slice(o)
  })
]
  });
}

function f(e) {
  let {
itemsForLayout: n,
isSingleImage: t,
footer: l
  } = e, o = n[0];
  return (0, i.jsx)('div', {
className: a()(I.oneByOneGrid, {
  [I.oneByOneGridSingle]: t,
  [I.oneByOneGridMosaic]: !t,
  [I.hasFooter]: null != l
}),
children: (0, i.jsx)(O, {
  props: o,
  useFullWidth: !t,
  isSingleItem: !0,
  footer: l
})
  });
}

function N(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: I.oneByTwoGrid,
children: n.map(e => (0, i.jsx)('div', {
  className: I.oneByTwoGridItem,
  children: (0, i.jsx)(O, {
    props: e,
    maxWidth: p,
    maxHeight: p
  })
}, e.item.uniqueId))
  });
}

function T(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsxs)('div', {
className: a()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: I.oneByTwoSoloItem,
    children: (0, i.jsx)(O, {
      props: n[0],
      maxWidth: x
    })
  }),
  (0, i.jsx)('div', {
    className: I.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: I.twoByOneGrid,
      children: n.splice(1).map(e => (0, i.jsx)('div', {
        className: I.twoByOneGridItem,
        children: (0, i.jsx)(O, {
          props: e,
          maxWidth: M,
          maxHeight: C
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function v(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: I.twoByTwoGrid,
children: n.map(e => (0, i.jsx)(O, {
  props: e,
  maxWidth: p,
  maxHeight: C
}, e.item.uniqueId))
  });
}

function _(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: I.threeByThreeGrid,
children: n.map(e => (0, i.jsx)(O, {
  props: e,
  maxWidth: E,
  maxHeight: E
}, e.item.uniqueId))
  });
}
let A = e => ({
className: a()(e, I.itemContentContainer),
imgContainerClassName: I.lazyImgContainer,
imgClassName: I.lazyImg
  }),
  j = e => ({
className: a()(e, I.lazyImg)
  });

function O(e) {
  let {
props: n,
maxWidth: t = h.mT,
maxHeight: l = h.Jj,
useFullWidth: o = !0,
isSingleItem: a = !1,
footer: s
  } = e, r = n.item.type, d = {
...n,
...'IMAGE' === r && A(n.className),
...'VIDEO' === r && j(n.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: t,
maxHeight: l,
useFullWidth: o,
isSingleMosaicItem: a
  };
  return (0, i.jsx)(c.h.Provider, {
value: n.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...d,
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
  let [n, t] = u().partition(e, e => (0, m.R_)(e.item.type)), [i, l] = u().partition(n, e => (0, m.Ld)(e.item.type));
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
    className: I.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: I.visualMediaItemContainer,
        children: (0, i.jsx)(g, {
          visualMediaItems: o
        })
      }),
      t
    ]
  }) : (0, i.jsx)('div', {
    className: I.visualMediaItemContainer,
    children: (0, i.jsx)(g, {
      visualMediaItems: o
    })
  })),
  a.length > 0 && a.map(e => {
    let n = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: I.visualMediaItemContainer,
      children: (0, i.jsx)(g, {
        visualMediaItems: [e],
        footer: n
      })
    }, e.item.uniqueId);
  }),
  s.length > 0 && (0, i.jsx)('div', {
    className: I.nonVisualMediaItemContainer,
    children: s.map(e => (0, i.jsx)('div', {
      className: I.nonVisualMediaItem,
      children: (0, i.jsx)(O, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};