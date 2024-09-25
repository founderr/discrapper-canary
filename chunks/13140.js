n.d(t, {
    BB: function () {
        return L;
    },
    C$: function () {
        return v;
    },
    H9: function () {
        return A;
    },
    Kd: function () {
        return b;
    },
    d2: function () {
        return y;
    },
    dU: function () {
        return S;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(411104);
var o = n(724458);
var s = n(653041);
var l = n(921738),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    _ = n(714338),
    E = n(823379),
    f = n(358085),
    h = n(981631);
let p = (() => ((0, f.isLinux)() ? h.HsE : (0, f.isMac)() ? h.REU : (0, f.isWindows)() ? h.iC$ : void 0))(),
    m = d().invert(h.HsE);
(m['223'] = '`'), Object.freeze(m);
let I = Object.freeze(d().invert(h.REU)),
    T = d().invert(h.iC$);
(T['223'] = '`'), Object.freeze(T);
let g = d().invert(null != p ? p : {});
function S() {
    if ((0, f.isLinux)()) return h.CgE.LINUX;
    if ((0, f.isMac)()) return h.CgE.MACOS;
    if ((0, f.isWindows)()) return h.CgE.WINDOWS;
    else return h.CgE.BROWSER;
}
function A(e) {
    let [, t, n] = e;
    switch (n) {
        case h.CgE.LINUX:
            return m['' + t];
        case h.CgE.MACOS:
            return I['' + t];
        case h.CgE.WINDOWS:
            return T['' + t];
        case h.CgE.BROWSER:
            return u()(t);
        default:
            return g['' + t];
    }
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.MoX.KEYBOARD_KEY;
    switch (n) {
        case h.MoX.KEYBOARD_KEY:
        case h.MoX.KEYBOARD_MODIFIER_KEY:
            switch (t) {
                case h.CgE.LINUX:
                    return h.HsE[e];
                case h.CgE.MACOS:
                    return h.REU[e];
                case h.CgE.WINDOWS:
                    return h.iC$[e];
                case h.CgE.BROWSER:
                    return u()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, '$2').replace('meta', 'command'));
                default:
                    return p[e];
            }
        case h.MoX.MOUSE_BUTTON:
            return parseInt(e.replace('MOUSE', ''), 10);
        case h.MoX.GAMEPAD_BUTTON:
            return parseInt(e.replace('GAMEPAD', ''), 10);
        default:
            throw Error('Unrecognized DeviceType '.concat(n, '.'));
    }
}
!(0, f.isMac)() && (g['223'] = '`'), Object.freeze(g);
let N = [
        ['META', '\u2318'],
        ['RIGHT META', 'RIGHT \u2318'],
        ['SHIFT', '\u21E7'],
        ['RIGHT SHIFT', 'RIGHT \u21E7'],
        ['ALT', '\u2325'],
        ['RIGHT ALT', 'RIGHT \u2325'],
        ['CTRL', '\u2303'],
        ['RIGHT CTRL', 'RIGHT \u2303'],
        ['ENTER', '\u21B5'],
        ['BACKSPACE', '\u232B'],
        ['DEL', '\u2326'],
        ['ESC', '\u238B'],
        ['PAGEUP', '\u21DE'],
        ['PAGEDOWN', '\u21DF'],
        ['UP', '\u2191'],
        ['DOWN', '\u2193'],
        ['LEFT', '\u2190'],
        ['RIGHT', '\u2192'],
        ['HOME', '\u2196'],
        ['END', '\u2198'],
        ['TAB', '\u21E5'],
        ['SPACE', '\u2423']
    ],
    O = (e) => {
        for (let [t, n] of N) if (t === e.toUpperCase()) return n;
        return e;
    },
    R = (e) => {
        for (let [t, n] of N) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    C = /shift|meta|ctrl|alt$/;
function y(e) {
    let t = {
        keyCode: 0,
        metaKey: !1,
        shiftKey: !1,
        altKey: !1,
        ctrlKey: !1
    };
    return null == e
        ? []
        : e.reduce((e, n) => {
              let r = A(n),
                  i = { ...t };
              if (null == r)
                  return (
                      e.push({
                          ...i,
                          combo: n
                      }),
                      e
                  );
              if (C.test(r)) return (t[r + 'Key'] = !0), e.map((e) => ((e[r + 'Key'] = !0), e));
              {
                  let t = v(r, h.CgE.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.MoX.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, '')
        .replace(/NUMPAD \+/i, 'numpad plus')
        .replace(/mod/i, _.Z.modKey)
        .split('+')
        .map((e) => e.trim().replace('plus', '+'))
        .reduce((e, r) => {
            let i = v(R(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e;
                if (t === h.MoX.KEYBOARD_KEY || t === h.MoX.KEYBOARD_MODIFIER_KEY) {
                    var i;
                    return null !== (i = A(null != r ? [t, n, r] : [t, n])) && void 0 !== i ? i : 'UNK'.concat(n);
                }
                if (t === h.MoX.MOUSE_BUTTON) return 'mouse'.concat(n);
                if (t === h.MoX.GAMEPAD_BUTTON) return 'gamepad'.concat(n);
                else return 'dev'.concat(t, ',').concat(n);
            })
            .filter(E.lm);
    return t ? (-1 !== n.g.navigator.appVersion.indexOf('Mac OS X') ? r.map(O) : r).join(' + ').toUpperCase() : r.join('+');
}
