n.d(t, {
  Wq: function() {
return u;
  },
  Xn: function() {
return c;
  },
  ZN: function() {
return l;
  },
  c: function() {
return i;
  },
  kJ: function() {
return o;
  }
});
var r = n(652874);
let i = -1,
  a = Object.freeze({
inspectedExpressionPosition: {
  rowIndex: 0,
  columnIndex: 0
},
activeCategoryIndex: 0,
searchPlaceholder: null
  });

function s() {
  let e = (0, r.Z)(e => a);
  return {
useStore: e,
getState: () => e.getState(),
setInspectedExpressionPosition: (t, n, r) => {
  e.setState({
    inspectedExpressionPosition: {
      rowIndex: n,
      columnIndex: t,
      source: r
    }
  });
},
setActiveCategoryIndex: t => {
  e.setState({
    activeCategoryIndex: t
  });
},
setSearchPlaceholder: t => {
  e.setState({
    searchPlaceholder: t
  });
},
resetStoreState: () => {
  e.setState(a);
}
  };
}
let o = s(),
  l = s(),
  u = s(),
  c = s();