"use strict";
n.d(t, {
  BB: function() {
    return g
  },
  C$: function() {
    return S
  },
  H9: function() {
    return f
  },
  Kd: function() {
    return R
  },
  d2: function() {
    return p
  },
  dU: function() {
    return h
  }
}), n(47120), n(757143), n(411104), n(724458), n(653041);
var i = n(921738),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(714338),
  l = n(823379),
  u = n(358085),
  _ = n(981631);
let c = (0, u.isLinux)() ? _.HsE : (0, u.isMac)() ? _.REU : (0, u.isWindows)() ? _.iC$ : void 0,
  d = o().invert(_.HsE);
d["223"] = "`", Object.freeze(d);
let E = Object.freeze(o().invert(_.REU)),
  I = o().invert(_.iC$);
I["223"] = "`", Object.freeze(I);
let T = o().invert(null != c ? c : {});

function h() {
  if ((0, u.isLinux)()) return _.CgE.LINUX;
  if ((0, u.isMac)()) return _.CgE.MACOS;
  if ((0, u.isWindows)()) return _.CgE.WINDOWS;
  else return _.CgE.BROWSER
}

function f(e) {
  let [, t, n] = e;
  switch (n) {
    case _.CgE.LINUX:
      return d["" + t];
    case _.CgE.MACOS:
      return E["" + t];
    case _.CgE.WINDOWS:
      return I["" + t];
    case _.CgE.BROWSER:
      return r()(t);
    default:
      return T["" + t]
  }
}

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MoX.KEYBOARD_KEY;
  switch (n) {
    case _.MoX.KEYBOARD_KEY:
    case _.MoX.KEYBOARD_MODIFIER_KEY:
      switch (t) {
        case _.CgE.LINUX:
          return _.HsE[e];
        case _.CgE.MACOS:
          return _.REU[e];
        case _.CgE.WINDOWS:
          return _.iC$[e];
        case _.CgE.BROWSER:
          return r()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, "$2").replace("meta", "command"));
        default:
          return c[e]
      }
    case _.MoX.MOUSE_BUTTON:
      return parseInt(e.replace("MOUSE", ""), 10);
    case _.MoX.GAMEPAD_BUTTON:
      return parseInt(e.replace("GAMEPAD", ""), 10);
    default:
      throw Error("Unrecognized DeviceType ".concat(n, "."))
  }
}!(0, u.isMac)() && (T["223"] = "`"), Object.freeze(T);
let A = [
    ["META", "⌘"],
    ["RIGHT META", "RIGHT ⌘"],
    ["SHIFT", "⇧"],
    ["RIGHT SHIFT", "RIGHT ⇧"],
    ["ALT", "⌥"],
    ["RIGHT ALT", "RIGHT ⌥"],
    ["CTRL", "⌃"],
    ["RIGHT CTRL", "RIGHT ⌃"],
    ["ENTER", "↵"],
    ["BACKSPACE", "⌫"],
    ["DEL", "⌦"],
    ["ESC", "⎋"],
    ["PAGEUP", "⇞"],
    ["PAGEDOWN", "⇟"],
    ["UP", "↑"],
    ["DOWN", "↓"],
    ["LEFT", "←"],
    ["RIGHT", "→"],
    ["HOME", "↖"],
    ["END", "↘"],
    ["TAB", "⇥"],
    ["SPACE", "␣"]
  ],
  N = e => {
    for (let [t, n] of A)
      if (t === e.toUpperCase()) return n;
    return e
  },
  m = e => {
    for (let [t, n] of A)
      if (n === e.toUpperCase()) return t.toLowerCase();
    return e
  },
  O = /shift|meta|ctrl|alt$/;

function p(e) {
  let t = {
    keyCode: 0,
    metaKey: !1,
    shiftKey: !1,
    altKey: !1,
    ctrlKey: !1
  };
  return null == e ? [] : e.reduce((e, n) => {
    let i = f(n),
      r = {
        ...t
      };
    if (null == i) return e.push({
      ...r,
      combo: n
    }), e;
    if (O.test(i)) return t[i + "Key"] = !0, e.map(e => (e[i + "Key"] = !0, e));
    {
      let t = S(i, _.CgE.BROWSER);
      return null != t && (r.keyCode = t), e.push(r), e
    }
  }, [])
}

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h(),
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.MoX.KEYBOARD_KEY;
  return e.replace(/numpad plus/i, "").replace(/NUMPAD \+/i, "numpad plus").replace(/mod/i, a.Z.modKey).split("+").map(e => e.trim().replace("plus", "+")).reduce((e, i) => {
    let r = S(m(i), t, n);
    return null != r && e.push([n, r, t]), e
  }, [])
}

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = e.map(e => {
      let [t, n, i] = e;
      if (t === _.MoX.KEYBOARD_KEY || t === _.MoX.KEYBOARD_MODIFIER_KEY) {
        var r;
        return null !== (r = f(null != i ? [t, n, i] : [t, n])) && void 0 !== r ? r : "UNK".concat(n)
      }
      if (t === _.MoX.MOUSE_BUTTON) return "mouse".concat(n);
      if (t === _.MoX.GAMEPAD_BUTTON) return "gamepad".concat(n);
      else return "dev".concat(t, ",").concat(n)
    }).filter(l.lm);
  return t ? (-1 !== n.g.navigator.appVersion.indexOf("Mac OS X") ? i.map(N) : i).join(" + ").toUpperCase() : i.join("+")
}