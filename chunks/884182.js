n(47120);
var i = n(735250),
  o = n(470079),
  l = n(120356),
  a = n.n(l),
  s = n(512722),
  r = n.n(s),
  u = n(392711),
  c = n.n(u),
  d = n(941797),
  m = n(546432),
  h = n(217702),
  I = n(4925);
let p = Math.round((h.mT - 8) / 3),
  E = Math.round((h.mT - 4) / 2),
  C = Math.round((h.Jj - 4) / 2),
  M = Math.round(2 * (h.mT - 4) / 3),
  x = M / 2;

function f(e) {
  let {
visualMediaItems: t,
footer: n
  } = e;
  null != n && r()(1 === t.length, 'footer only gets applied to single items');
  let o = t.length;
  if (1 === o)
return (0, i.jsx)(g, {
  itemsForLayout: t,
  isSingleImage: !0,
  footer: n
});
  if (2 === o)
return (0, i.jsx)(T, {
  itemsForLayout: t
});
  if (3 === o)
return (0, i.jsx)(N, {
  itemsForLayout: t
});
  if (4 === o)
return (0, i.jsx)(A, {
  itemsForLayout: t
});
  let l = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === l && (0, i.jsx)(g, {
    itemsForLayout: t.slice(0, l)
  }),
  2 === l && (0, i.jsx)(T, {
    itemsForLayout: t.slice(0, l)
  }),
  0 === l ? (0, i.jsx)(O, {
    itemsForLayout: t
  }) : (0, i.jsx)(O, {
    itemsForLayout: t.slice(l)
  })
]
  });
}

function g(e) {
  let {
itemsForLayout: t,
isSingleImage: n,
footer: o
  } = e, l = t[0];
  return (0, i.jsx)('div', {
className: a()(I.oneByOneGrid, {
  [I.oneByOneGridSingle]: n,
  [I.oneByOneGridMosaic]: !n,
  [I.hasFooter]: null != o
}),
children: (0, i.jsx)(v, {
  props: l,
  useFullWidth: !n,
  isSingleItem: !0,
  footer: o
})
  });
}

function T(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: I.oneByTwoGrid,
children: t.map(e => (0, i.jsx)('div', {
  className: I.oneByTwoGridItem,
  children: (0, i.jsx)(v, {
    props: e,
    maxWidth: E,
    maxHeight: E
  })
}, e.item.uniqueId))
  });
}

function N(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsxs)('div', {
className: a()(I.oneByTwoGrid, I.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: I.oneByTwoSoloItem,
    children: (0, i.jsx)(v, {
      props: t[0],
      maxWidth: M
    })
  }),
  (0, i.jsx)('div', {
    className: I.oneByTwoDuoItem,
    children: (0, i.jsx)('div', {
      className: I.twoByOneGrid,
      children: t.splice(1).map(e => (0, i.jsx)('div', {
        className: I.twoByOneGridItem,
        children: (0, i.jsx)(v, {
          props: e,
          maxWidth: x,
          maxHeight: C
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function A(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: I.twoByTwoGrid,
children: t.map(e => (0, i.jsx)(v, {
  props: e,
  maxWidth: E,
  maxHeight: C
}, e.item.uniqueId))
  });
}

function O(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: I.threeByThreeGrid,
children: t.map(e => (0, i.jsx)(v, {
  props: e,
  maxWidth: p,
  maxHeight: p
}, e.item.uniqueId))
  });
}
let j = e => ({
className: a()(e, I.itemContentContainer),
imgContainerClassName: I.lazyImgContainer,
imgClassName: I.lazyImg
  }),
  _ = e => ({
className: a()(e, I.lazyImg)
  });

function v(e) {
  let {
props: t,
maxWidth: n = h.mT,
maxHeight: o = h.Jj,
useFullWidth: l = !0,
isSingleItem: a = !1,
footer: s
  } = e, r = t.item.type, u = {
...t,
...'IMAGE' === r && j(t.className),
...'VIDEO' === r && _(t.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: n,
maxHeight: o,
useFullWidth: l,
isSingleMosaicItem: a
  };
  return (0, i.jsx)(d.h.Provider, {
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
groupableVisualMediaItems: l,
nonGroupableVisualMediaItems: a,
nonVisualMediaItems: s
  } = function(e) {
return o.useMemo(() => {
  let [t, n] = c().partition(e, e => (0, m.R_)(e.item.type)), [i, o] = c().partition(t, e => (0, m.Ld)(e.item.type));
  return {
    groupableVisualMediaItems: i,
    nonGroupableVisualMediaItems: o,
    nonVisualMediaItems: n
  };
}, [e]);
  }(t);
  return (0, i.jsxs)(i.Fragment, {
children: [
  l.length > 0 && (null != n ? (0, i.jsxs)('div', {
    className: I.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: I.visualMediaItemContainer,
        children: (0, i.jsx)(f, {
          visualMediaItems: l
        })
      }),
      n
    ]
  }) : (0, i.jsx)('div', {
    className: I.visualMediaItemContainer,
    children: (0, i.jsx)(f, {
      visualMediaItems: l
    })
  })),
  a.length > 0 && a.map(e => {
    let t = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: I.visualMediaItemContainer,
      children: (0, i.jsx)(f, {
        visualMediaItems: [e],
        footer: t
      })
    }, e.item.uniqueId);
  }),
  s.length > 0 && (0, i.jsx)('div', {
    className: I.nonVisualMediaItemContainer,
    children: s.map(e => (0, i.jsx)('div', {
      className: I.nonVisualMediaItem,
      children: (0, i.jsx)(v, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};