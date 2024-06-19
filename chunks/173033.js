n.d(t, {
  Z: function() {
    return i
  }
});
var l = n(374470);

function i(e, t) {
  let n = e.offsetTop,
    i = e.offsetParent;
  for (; null != i;) {
    var s;
    if (i === t || !(0, l.k)(i, HTMLElement)) break;
    n += null !== (s = i.offsetTop) && void 0 !== s ? s : 0, i = i.offsetParent
  }
  return n
}