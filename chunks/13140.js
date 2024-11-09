n.d(t, {
    BB: function () {
        return A;
    },
    C$: function () {
        return E;
    },
    H9: function () {
        return g;
    },
    Kd: function () {
        return y;
    },
    d2: function () {
        return b;
    },
    dU: function () {
        return m;
    }
}),
    n(47120),
    n(757143),
    n(411104),
    n(724458),
    n(653041);
var r = n(921738),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(714338),
    l = n(823379),
    u = n(358085),
    c = n(981631);
let d = (0, u.isLinux)() ? c.HsE : (0, u.isMac)() ? c.REU : (0, u.isWindows)() ? c.iC$ : void 0,
    f = s().invert(c.HsE);
(f['223'] = '`'), Object.freeze(f);
let _ = Object.freeze(s().invert(c.REU)),
    h = s().invert(c.iC$);
(h['223'] = '`'), Object.freeze(h);
let p = s().invert(null != d ? d : {});
function m() {
    if ((0, u.isLinux)()) return c.CgE.LINUX;
    if ((0, u.isMac)()) return c.CgE.MACOS;
    if ((0, u.isWindows)()) return c.CgE.WINDOWS;
    else return c.CgE.BROWSER;
}
function g(e) {
    let [, t, n] = e;
    switch (n) {
        case c.CgE.LINUX:
            return f['' + t];
        case c.CgE.MACOS:
            return _['' + t];
        case c.CgE.WINDOWS:
            return h['' + t];
        case c.CgE.BROWSER:
            return i()(t);
        default:
            return p['' + t];
    }
}
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MoX.KEYBOARD_KEY;
    switch (n) {
        case c.MoX.KEYBOARD_KEY:
        case c.MoX.KEYBOARD_MODIFIER_KEY:
            switch (t) {
                case c.CgE.LINUX:
                    return c.HsE[e];
                case c.CgE.MACOS:
                    return c.REU[e];
                case c.CgE.WINDOWS:
                    return c.iC$[e];
                case c.CgE.BROWSER:
                    return i()(e.replace(/^(right|left) (shift|meta|ctrl|alt)$/, '$2').replace('meta', 'command'));
                default:
                    return d[e];
            }
        case c.MoX.MOUSE_BUTTON:
            return parseInt(e.replace('MOUSE', ''), 10);
        case c.MoX.GAMEPAD_BUTTON:
            return parseInt(e.replace('GAMEPAD', ''), 10);
        default:
            throw Error('Unrecognized DeviceType '.concat(n, '.'));
    }
}
!(0, u.isMac)() && (p['223'] = '`'), Object.freeze(p);
let v = [
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
    I = (e) => {
        for (let [t, n] of v) if (t === e.toUpperCase()) return n;
        return e;
    },
    S = (e) => {
        for (let [t, n] of v) if (n === e.toUpperCase()) return t.toLowerCase();
        return e;
    },
    T = /shift|meta|ctrl|alt$/;
function b(e) {
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
              let r = g(n),
                  i = { ...t };
              if (null == r)
                  return (
                      e.push({
                          ...i,
                          combo: n
                      }),
                      e
                  );
              if (T.test(r)) return (t[r + 'Key'] = !0), e.map((e) => ((e[r + 'Key'] = !0), e));
              {
                  let t = E(r, c.CgE.BROWSER);
                  return null != t && (i.keyCode = t), e.push(i), e;
              }
          }, []);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(),
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.MoX.KEYBOARD_KEY;
    return e
        .replace(/numpad plus/i, '')
        .replace(/NUMPAD \+/i, 'numpad plus')
        .replace(/mod/i, o.Z.modKey)
        .split('+')
        .map((e) => e.trim().replace('plus', '+'))
        .reduce((e, r) => {
            let i = E(S(r), t, n);
            return null != i && e.push([n, i, t]), e;
        }, []);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e
            .map((e) => {
                let [t, n, r] = e;
                if (t === c.MoX.KEYBOARD_KEY || t === c.MoX.KEYBOARD_MODIFIER_KEY) {
                    var i;
                    return null !== (i = g(null != r ? [t, n, r] : [t, n])) && void 0 !== i ? i : 'UNK'.concat(n);
                }
                if (t === c.MoX.MOUSE_BUTTON) return 'mouse'.concat(n);
                if (t === c.MoX.GAMEPAD_BUTTON) return 'gamepad'.concat(n);
                else return 'dev'.concat(t, ',').concat(n);
            })
            .filter(l.lm);
    return t ? (-1 !== n.g.navigator.appVersion.indexOf('Mac OS X') ? r.map(I) : r).join(' + ').toUpperCase() : r.join('+');
}
