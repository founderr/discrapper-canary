n.d(t, {
  G: function() {
    return i
  },
  Z: function() {
    return a
  }
});
var l, i, s = n(536895);
(l = i || (i = {})).UPDATE_ITEM_COUNT = "UPDATE_ITEM_COUNT", l.SET_FOCUSED_INDEX = "SET_FOCUSED_INDEX";

function a(e, t) {
  var n, l, i, a, r, o, c;
  switch (t.type) {
    case s.Us.NAVIGATE_UP:
      ;
      return l = 0, {
        ...n = e,
        focusedIndex: Math.max(0, n.focusedIndex - 1)
      };
    case s.Us.NAVIGATE_DOWN:
      ;
      return a = 0, {
        ...i = e,
        focusedIndex: Math.min(i.focusedIndex + 1, i.itemCount - 1)
      };
    case s.Us.NAVIGATE_START:
      ;
      return r = 0, {
        ...e,
        focusedIndex: 0
      };
    case s.Us.NAVIGATE_END:
      ;
      return c = 0, {
        ...o = e,
        focusedIndex: o.itemCount - 1
      };
    case "UPDATE_ITEM_COUNT":
      return function(e, t) {
        let {
          itemCount: n
        } = t;
        return {
          ...e,
          itemCount: n,
          focusedIndex: Math.min(n - 1, e.focusedIndex)
        }
      }(e, t);
    case "SET_FOCUSED_INDEX":
      return function(e, t) {
        let {
          index: n
        } = t;
        return {
          ...e,
          focusedIndex: Math.max(0, Math.min(n, e.itemCount - 1))
        }
      }(e, t);
    case s.Us.SELECT_FOCUSED_ITEM:
      break;
    default:
      console.warn("Listbox navigator was given an unhandled action ".concat(t.type))
  }
  return e
}