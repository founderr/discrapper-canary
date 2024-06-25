n.d(t, {
  ZB: function() {
    return f
  },
  ZP: function() {
    return C
  },
  cF: function() {
    return m
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n(933546),
  r = n(314897),
  o = n(70956),
  c = n(823379),
  u = n(27457),
  d = n(354459),
  h = n(16734);
let m = 112,
  E = 16 / 9 * m + 8,
  p = 10 * o.Z.Millis.SECOND;

function g(e) {
  var t;
  let n = r.default.getId();
  return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo)
}

function f(e, t) {
  let [n, l] = i.useState(Date.now());
  i.useEffect(() => {
    let e = setTimeout(() => {
      l(Date.now())
    }, p);
    return () => {
      clearTimeout(e)
    }
  }, [t]);
  let r = i.useRef({}),
    {
      visibleParticipants: o,
      participantTileWidth: u
    } = i.useMemo(() => {
      let n = Date.now(),
        l = (0, s.sortBy)(t, e => (function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
          switch (e.type) {
            case d.fO.ACTIVITY:
              return "\0".concat(e.sortKey);
            case d.fO.HIDDEN_STREAM:
            case d.fO.STREAM:
              return "\x01".concat((0, a.Z)(e.userNick, e.user));
            case d.fO.USER:
              var n;
              let l = "\x05";
              return e.speaking ? l = "\x02" : t - e.lastSpoke < p ? l = "\x03" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (l = "\x04"), "".concat(l).concat(function(e) {
                let t = String(864e13).length;
                return String(864e13 - e).padStart(t, "0")
              }(e.lastSpoke)).concat((0, a.Z)(e.userNick, e.user))
          }
        })(e, n)),
        [i, o] = (0, s.partition)(l, d.Io),
        u = i.findIndex(g),
        h = null; - 1 !== u && (h = i[u], i.splice(u, 1));
      let m = null != h ? e - E - 8 : e,
        f = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
        C = Math.min((m - 8) / f - 8, E),
        _ = Math.max(0, f - o.length),
        I = o.slice(0, f),
        x = i.slice(0, _),
        T = Array(_);
      if (_ > 0) {
        let e = [];
        for (let t of x) {
          let n = r.current[t.id];
          null != n && n < _ ? T[n] = t : e.push(t)
        }
        for (let t = 0; t < T.length; t++) {
          if (null != T[t]) continue;
          let n = e.shift();
          if (null == n) break;
          T[t] = n
        }
      }
      let N = T.filter(c.lm),
        Z = (0, s.keyBy)((0, s.range)(N.length), e => N[e].id);
      r.current = Z;
      let S = [...I, ...N];
      return null != h && S.push(h), {
        visibleParticipants: S,
        participantTileWidth: C
      }
    }, [e, t, n]);
  return {
    visibleParticipants: o,
    participantTileWidth: u
  }
}

function C(e) {
  let {
    participants: t,
    participantTileWidth: n,
    selectedParticipantId: i,
    onDoubleClick: s,
    onContextMenu: a,
    onClick: r,
    channel: o,
    inCall: c,
    popoutWindow: d,
    paused: m = !1
  } = e, p = null != d;
  return (0, l.jsx)("div", {
    className: h.root,
    children: t.map(e => {
      if (null == e) return null;
      let t = g(e);
      return (0, l.jsx)("div", {
        className: h.tileSizer,
        style: t ? {
          flexShrink: 0
        } : void 0,
        children: (0, l.jsx)(u.ZP, {
          participant: e,
          selected: i === e.id,
          channel: o,
          className: h.tile,
          fit: u.BP.COVER,
          onClick: r,
          onDoubleClick: s,
          onContextMenu: a,
          width: t ? E : n,
          inCall: c,
          paused: m,
          inPopout: p
        })
      }, e.id)
    })
  })
}