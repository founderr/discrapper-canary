"use strict";
r.r(t), r.d(t, {
  resetInspectedStickerPosition: function() {
    return o
  },
  setInspectedStickerPosition: function() {
    return a
  },
  useStickerViewAllStore: function() {
    return i
  }
});
var n = r("652874");
let l = Object.freeze({
    inspectedStickerPosition: {
      rowIndex: -1,
      columnIndex: -1
    }
  }),
  s = (0, n.default)(e => l),
  i = s,
  a = (e, t, r) => {
    s.setState({
      inspectedStickerPosition: {
        rowIndex: t,
        columnIndex: e,
        source: r
      }
    })
  },
  o = () => {
    a(-1, -1)
  }