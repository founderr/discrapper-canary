n.d(t, {
  Z: function() {
    return l
  }
});
var s = n(470079),
  i = n(10718);

function l(e, t) {
  let n = s.useRef(null),
    l = s.useCallback((e, t) => {
      var s, i, l;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (l = null === (i = n.current) || void 0 === i ? void 0 : null === (s = i.textContent) || void 0 === s ? void 0 : s.trim()) && void 0 !== l ? l : "")
    }, []);
  return i.YZ(e, t), {
    onCopy: l,
    copyRef: n
  }
}