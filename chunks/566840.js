n.d(t, {
  Eg: function() {
    return a
  },
  XL: function() {
    return u
  }
});
var l = n(470079),
  i = n(652874),
  s = n(143927);
let r = (0, i.Z)(e => ({
  upsellsByGuildId: {}
}));

function a(e) {
  return r(t => {
    var n;
    let l = {};
    return null == e ? l : null !== (n = t.upsellsByGuildId[e]) && void 0 !== n ? n : l
  }, s.Z)
}

function o(e) {
  if (null == e) return !1;
  try {
    return window.getComputedStyle(e).overflow.includes("scroll")
  } catch (e) {
    return !1
  }
}

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = l.useRef(null);
  return l.useLayoutEffect(() => {
    let l = i.current,
      s = () => {
        requestAnimationFrame(() => {
          var l, s, a;
          let o = null !== (s = null === (l = i.current) || void 0 === l ? void 0 : l.getBoundingClientRect()) && void 0 !== s ? s : null;
          a = {
            name: t,
            guildId: e,
            disabled: n,
            boundingRect: null != o ? o : null
          }, r.setState(e => {
            var t, n;
            return {
              upsellsByGuildId: {
                ...null !== (t = e.upsellsByGuildId) && void 0 !== t ? t : {},
                [a.guildId]: {
                  ...null !== (n = e.upsellsByGuildId[a.guildId]) && void 0 !== n ? n : {},
                  [a.name]: a
                }
              }
            }
          })
        })
      };
    if (null == l) return s(), () => {};
    let a = function(e) {
      let t = e.parentNode;
      for (; null != t && t !== document.body && !o(t);) t = t.parentNode;
      return o(t) ? t : null
    }(l);
    return s(), null == a || a.addEventListener("scroll", s, {
      passive: !0
    }), () => {
      null == a || a.removeEventListener("scroll", s)
    }
  }, [e, t, n]), i
}