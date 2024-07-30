t(47120);
var i = t(735250),
  o = t(470079),
  l = t(120356),
  a = t.n(l),
  s = t(512722),
  r = t.n(s),
  u = t(392711),
  d = t.n(u),
  c = t(941797),
  m = t(546432),
  h = t(217702),
  I = t(4925);
let E = Math.round((h.mT - 8) / 3),
  p = Math.round((h.mT - 4) / 2),
  x = Math.round((h.Jj - 4) / 2),
  C = Math.round(2 * (h.mT - 4) / 3),
  M = C / 2;

function g(e) {
  let {
visualMediaItems: n,
footer: t
  } = e;
  null != t && r()(1 === n.length, 'footer only gets applied to single items');
  let o = n.length;
  if (1 === o)
return (0, i.jsx)(f, {
  itemsForLayout: n,
  isSingleImage: !0,
  footer: t
});
  if (2 === o)
return (0, i.jsx)(N, {
  itemsForLayout: n
});
  if (3 === o)
return (0, i.jsx)(T, {
  itemsForLayout: n
});
  if (4 === o)
return (0, i.jsx)(j, {
  itemsForLayout: n
});
  let l = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === l && (0, i.jsx)(f, {
    itemsForLayout: n.slice(0, l)
  }),
  2 === l && (0, i.jsx)(N, {
    itemsForLayout: n.slice(0, l)
  }),
  0 === l ? (0, i.jsx)(_, {
    itemsForLayout: n
  }) : (0, i.jsx)(_, {
    itemsForLayout: n.slice(l)
  })
]
  });
}

function f(e) {
  let {
itemsForLayout: n,
isSingleImage: t,
footer: o
  } = e, l = n[0];
  return (0, i.jsx)('div', {
className: a()(I.oneByOneGrid, {
  [I.oneByOneGridSingle]: t,
  [I.oneByOneGridMosaic]: !t,
  [I.hasFooter]: null != o
}),
children: (0, i.jsx)(O, {
  props: l,
  useFullWidth: !t,
  isSingleItem: !0,
  footer: o
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
      maxWidth: C
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
          maxHeight: x
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function j(e) {
  let {
itemsForLayout: n
  } = e;
  return (0, i.jsx)('div', {
className: I.twoByTwoGrid,
children: n.map(e => (0, i.jsx)(O, {
  props: e,
  maxWidth: p,
  maxHeight: x
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
let v = e => ({
className: a()(e, I.itemContentContainer),
imgContainerClassName: I.lazyImgContainer,
imgClassName: I.lazyImg
  }),
  A = e => ({
className: a()(e, I.lazyImg)
  });

function O(e) {
  let {
props: n,
maxWidth: t = h.mT,
maxHeight: o = h.Jj,
useFullWidth: l = !0,
isSingleItem: a = !1,
footer: s
  } = e, r = n.item.type, u = {
...n,
...'IMAGE' === r && v(n.className),
...'VIDEO' === r && A(n.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: t,
maxHeight: o,
useFullWidth: l,
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
groupableVisualMediaItems: l,
nonGroupableVisualMediaItems: a,
nonVisualMediaItems: s
  } = function(e) {
return o.useMemo(() => {
  let [n, t] = d().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = d().partition(n, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: t
  };
}, [e]);
  }(n);
  return (0, i.jsxs)(i.Fragment, {
children: [
  l.length > 0 && (null != t ? (0, i.jsxs)('div', {
    className: I.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: I.visualMediaItemContainer,
        children: (0, i.jsx)(g, {
          visualMediaItems: l
        })
      }),
      t
    ]
  }) : (0, i.jsx)('div', {
    className: I.visualMediaItemContainer,
    children: (0, i.jsx)(g, {
      visualMediaItems: l
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