n.d(t, {
  Pk: function() {
    return d
  },
  dv: function() {
    return c
  }
}), n(411104), n(47120);
var s, i, l = n(735250),
  a = n(470079),
  r = n(823379);
(i = s || (s = {})).POLL_ANSWERS = "POLL_ANSWERS", i.ACTION_BUTTON = "ACTION_BUTTON";
let o = a.createContext(void 0);

function c() {
  let e = a.useContext(o);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function u(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: i
  } = e, r = a.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: i
  }), [n, s, i]);
  return (0, l.jsx)(o.Provider, {
    value: r,
    children: t
  })
}

function d(e) {
  let {
    children: t
  } = e, [n, s] = a.useState(), i = a.useRef(null), o = a.useRef(null);
  return a.useEffect(() => {
    var e, t, s;
    "POLL_ANSWERS" === n && null != o.current && (null === (t = o.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != i.current && (null === (s = i.current) || void 0 === s || s.focus())
  }, [n]), (0, l.jsx)(u, {
    pollAnswerRef: o,
    actionButtonRef: i,
    manageFocusOnAction: e => {
      switch (e) {
        case "submit":
        case "cancel":
          s("ACTION_BUTTON");
          break;
        case "remove":
        case "showVotes":
          s("POLL_ANSWERS");
          break;
        case "showVoterDetails":
          break;
        default:
          (0, r.vE)(e)
      }
    },
    children: t
  })
}