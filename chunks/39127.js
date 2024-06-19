n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n(500923),
  r = n.n(a),
  o = n(963838),
  c = n(353368),
  u = n(454190);
let d = async e => {
  var t;
  let {
    animationType: n,
    animationId: l,
    url: i,
    shouldResize: a
  } = e, r = null !== (t = o.Jw[n]) && void 0 !== t ? t : o.Jw[c.q.BASIC], u = JSON.parse(JSON.stringify(null != l && l < r.length ? r[l] : (0, s.sample)(r)));
  return u.assets[0].p = a ? await (0, o.lv)(i) : i, u
};

function h(e) {
  let {
    containerDimensions: t,
    effect: n,
    onComplete: s
  } = e, a = i.useRef(null);
  return i.useEffect(() => {
    let e;
    return !async function() {
      if (null != a.current) {
        let t = await d(n);
        e = r().loadAnimation({
          container: a.current,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          animationData: t,
          rendererSettings: {
            preserveAspectRatio: "xMidYMax slice"
          }
        }), n.animationType === c.q.PREMIUM && e.setSpeed(.8), e.addEventListener("complete", () => null == s ? void 0 : s(n.id))
      }
    }(), () => {
      null == e || e.destroy()
    }
  }, [s, n]), (0, l.jsx)("div", {
    className: u.effect,
    style: {
      height: t.height,
      width: t.width
    },
    ref: a
  })
}