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
var l = r("652874");
let n = Object.freeze({
    inspectedStickerPosition: {
      rowIndex: -1,
      columnIndex: -1
    }
  }),
  s = (0, l.default)(e => n),
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