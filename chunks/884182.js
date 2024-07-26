t(47120);
var i = t(735250),
  o = t(470079),
  a = t(120356),
  l = t.n(a),
  s = t(512722),
  r = t.n(s),
  u = t(392711),
  c = t.n(u),
  d = t(941797),
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
  let a = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === a && (0, i.jsx)(f, {
    itemsForLayout: n.slice(0, a)
  }),
  2 === a && (0, i.jsx)(N, {
    itemsForLayout: n.slice(0, a)
  }),
  0 === a ? (0, i.jsx)(v, {
    itemsForLayout: n
  }) : (0, i.jsx)(v, {
    itemsForLayout: n.slice(a)
  })
]
  });
}

function f(e) {
  let {
itemsForLayout: n,
isSingleImage: t,
footer: o
  } = e, a = n[0];
  return (0, i.jsx)('div', {
className: l()(I.oneByOneGrid, {
  [I.oneByOneGridSingle]: t,
  [I.oneByOneGridMosaic]: !t,
  [I.hasFooter]: null != o
}),
children: (0, i.jsx)(O, {
  props: a,
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
className: l()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
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

function v(e) {
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
className: l()(e, I.itemContentContainer),
imgContainerClassName: I.lazyImgContainer,
imgClassName: I.lazyImg
  }),
  _ = e => ({
className: l()(e, I.lazyImg)
  });

function O(e) {
  let {
props: n,
maxWidth: t = h.mT,
maxHeight: o = h.Jj,
useFullWidth: a = !0,
isSingleItem: l = !1,
footer: s
  } = e, r = n.item.type, u = {
...n,
...'IMAGE' === r && A(n.className),
...'VIDEO' === r && _(n.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: t,
maxHeight: o,
useFullWidth: a,
isSingleMosaicItem: l
  };
  return (0, i.jsx)(d.h.Provider, {
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
groupableVisualMediaItems: a,
nonGroupableVisualMediaItems: l,
nonVisualMediaItems: s
  } = function(e) {
return o.useMemo(() => {
  let [n, t] = c().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = c().partition(n, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: t
  };
}, [e]);
  }(n);
  return (0, i.jsxs)(i.Fragment, {
children: [
  a.length > 0 && (null != t ? (0, i.jsxs)('div', {
    className: I.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: I.visualMediaItemContainer,
        children: (0, i.jsx)(g, {
          visualMediaItems: a
        })
      }),
      t
    ]
  }) : (0, i.jsx)('div', {
    className: I.visualMediaItemContainer,
    children: (0, i.jsx)(g, {
      visualMediaItems: a
    })
  })),
  l.length > 0 && l.map(e => {
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