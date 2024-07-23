n(47120);
var i = n(735250),
  o = n(470079),
  s = n(120356),
  l = n.n(s),
  a = n(512722),
  r = n.n(a),
  u = n(392711),
  d = n.n(u),
  c = n(941797),
  m = n(546432),
  h = n(217702),
  p = n(159696);
let I = Math.round((h.mT - 8) / 3),
  x = Math.round((h.mT - 4) / 2),
  g = Math.round((h.Jj - 4) / 2),
  C = Math.round(2 * (h.mT - 4) / 3),
  f = C / 2;

function j(e) {
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
return (0, i.jsx)(T, {
  itemsForLayout: t
});
  if (3 === o)
return (0, i.jsx)(E, {
  itemsForLayout: t
});
  if (4 === o)
return (0, i.jsx)(v, {
  itemsForLayout: t
});
  let s = o % 3;
  return (0, i.jsxs)(i.Fragment, {
children: [
  1 === s && (0, i.jsx)(M, {
    itemsForLayout: t.slice(0, s)
  }),
  2 === s && (0, i.jsx)(T, {
    itemsForLayout: t.slice(0, s)
  }),
  0 === s ? (0, i.jsx)(y, {
    itemsForLayout: t
  }) : (0, i.jsx)(y, {
    itemsForLayout: t.slice(s)
  })
]
  });
}

function M(e) {
  let {
itemsForLayout: t,
isSingleImage: n,
footer: o
  } = e, s = t[0];
  return (0, i.jsx)('div', {
className: l()(p.oneByOneGrid, {
  [p.oneByOneGridSingle]: n,
  [p.oneByOneGridMosaic]: !n,
  [p.hasFooter]: null != o
}),
children: (0, i.jsx)(A, {
  props: s,
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
className: p.oneByTwoGrid,
children: t.map(e => (0, i.jsx)('div', {
  className: p.oneByTwoGridItem,
  children: (0, i.jsx)(A, {
    props: e,
    maxWidth: x,
    maxHeight: x
  })
}, e.item.uniqueId))
  });
}

function E(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsxs)('div', {
className: l()(p.oneByTwoGrid, p.oneByTwoLayoutThreeGrid),
children: [
  (0, i.jsx)('div', {
    className: p.oneByTwoSoloItem,
    children: (0, i.jsx)(A, {
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
        children: (0, i.jsx)(A, {
          props: e,
          maxWidth: f,
          maxHeight: g
        })
      }, e.item.uniqueId))
    })
  })
]
  });
}

function v(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: p.twoByTwoGrid,
children: t.map(e => (0, i.jsx)(A, {
  props: e,
  maxWidth: x,
  maxHeight: g
}, e.item.uniqueId))
  });
}

function y(e) {
  let {
itemsForLayout: t
  } = e;
  return (0, i.jsx)('div', {
className: p.threeByThreeGrid,
children: t.map(e => (0, i.jsx)(A, {
  props: e,
  maxWidth: I,
  maxHeight: I
}, e.item.uniqueId))
  });
}
let N = e => ({
className: l()(e, p.itemContentContainer),
imgContainerClassName: p.lazyImgContainer,
imgClassName: p.lazyImg
  }),
  O = e => ({
className: l()(e, p.lazyImg)
  });

function A(e) {
  let {
props: t,
maxWidth: n = h.mT,
maxHeight: o = h.Jj,
useFullWidth: s = !0,
isSingleItem: l = !1,
footer: a
  } = e, r = t.item.type, u = {
...t,
...'IMAGE' === r && N(t.className),
...'VIDEO' === r && O(t.className),
mediaLayoutType: h.hV.MOSAIC,
maxWidth: n,
maxHeight: o,
useFullWidth: s,
isSingleMosaicItem: l
  };
  return (0, i.jsx)(c.h.Provider, {
value: t.gifFavoriteButton,
children: (0, i.jsx)(m.ZP, {
  ...u,
  footer: a
})
  });
}
t.Z = function(e) {
  let {
items: t,
inlineForwardButton: n
  } = e, {
groupableVisualMediaItems: s,
nonGroupableVisualMediaItems: l,
nonVisualMediaItems: a
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
  s.length > 0 && (null != n ? (0, i.jsxs)('div', {
    className: p.mosaicContainer,
    children: [
      (0, i.jsx)('div', {
        className: p.visualMediaItemContainer,
        children: (0, i.jsx)(j, {
          visualMediaItems: s
        })
      }),
      n
    ]
  }) : (0, i.jsx)('div', {
    className: p.visualMediaItemContainer,
    children: (0, i.jsx)(j, {
      visualMediaItems: s
    })
  })),
  l.length > 0 && l.map(e => {
    let t = e.renderMosaicItemFooter({
      item: e.item,
      message: e.message
    });
    return (0, i.jsx)('div', {
      className: p.visualMediaItemContainer,
      children: (0, i.jsx)(j, {
        visualMediaItems: [e],
        footer: t
      })
    }, e.item.uniqueId);
  }),
  a.length > 0 && (0, i.jsx)('div', {
    className: p.nonVisualMediaItemContainer,
    children: a.map(e => (0, i.jsx)('div', {
      className: p.nonVisualMediaItem,
      children: (0, i.jsx)(A, {
        props: e
      })
    }, e.item.uniqueId))
  })
]
  });
};