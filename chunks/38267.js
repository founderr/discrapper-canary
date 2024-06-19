n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var s = n(470079),
  i = n(585483),
  l = n(981631);

function a(e) {
  return Object.keys(e).some(t => e[t])
}

function r(e, t) {
  let [n, r] = s.useState(t), [o, c] = s.useState(a(n)), u = s.useRef(o), d = s.useRef(null), E = s.useCallback(e => {
    r(t => {
      let n = {
          ...t,
          ...e
        },
        s = a(n);
      return s !== u.current && (u.current = s, null != d.current && (cancelAnimationFrame(d.current), d.current = null), s ? c(!0) : d.current = requestAnimationFrame(() => c(!1))), n
    })
  }, []);
  return s.useEffect(() => {
    let t = e => {
      let {
        emojiPicker: t,
        emojiBurstPicker: n
      } = e;
      return E({
        emojiPicker: t,
        emojiBurstPicker: n
      })
    };
    return i.S.subscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t), () => void i.S.unsubscribeKeyed(l.LPv.TOGGLE_REACTION_POPOUT, e, t)
  }, [e, E]), {
    popouts: n,
    setPopout: E,
    selected: o
  }
}