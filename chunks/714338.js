n(47120), n(757143), n(653041);
var r = n(879443),
    i = n.n(r),
    a = n(414861),
    s = n.n(a),
    o = n(360038),
    l = n(710845),
    u = n(626135),
    c = n(358085),
    d = n(981631);
let f = {},
    _ = [],
    p = !1,
    h = s()(new (i())(window)),
    m = (0, c.isMac)() || (0, c.isMacWeb)() ? 'cmd' : 'ctrl',
    g = (0, c.isMac)() || (0, c.isMacWeb)() ? 'opt' : 'alt',
    E = (0, c.isMac)() || (0, c.isMacWeb)() ? 'return' : 'enter',
    v = [...o.u.binds, 'mod+shift+[', 'mod+shift+]', 'mod+[', 'mod+]', 'alt+[', 'alt+]', 'ctrl+shift+tab', 'ctrl+tab', 'mod+n', 'mod+t', 'mod+shift+t', 'mod+plus', 'mod+minus', 'mod+0'].map((e) => e.replace('mod', m)),
    b = () => [],
    I = [];
function T(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace('mod', m));
}
function S(e, t) {
    return (n, r) => (u.default.track(d.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), t(n, r));
}
function y(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = b();
        !c.isPlatformEmbedded && (e = e.concat(v));
        let r = n.binds.filter((t) => ((t = t.replace('mod', m)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
        if ((null != n.action && i.call(h, r, S(t, n.action)), null != n.keyup && i.call(h, r, S(t, n.keyup), 'keyup'), null != n.keydown)) {
            let e = r.indexOf('any-character');
            -1 !== e &&
                (!(function (e, t) {
                    let n = (e) => t(e, e.key);
                    document.addEventListener(e, n), I.push(() => document.removeEventListener(e, n));
                })('keydown', n.keydown),
                r.splice(e, 1)),
                r.length > 0 && i.call(h, r, S(t, n.keydown), 'keydown');
        }
        null != n.keypress && i.call(h, r, S(t, n.keypress), 'keypress');
    }
}
(0, c.isDesktop)() && new (i())(document.documentElement).bind('backspace', (e) => e.preventDefault()),
    (t.Z = {
        combokeys: h,
        modKey: m,
        altKey: g,
        returnKey: E,
        setGetKeybindList(e) {
            b = e;
        },
        checkDupes(e) {
            let t = new Set(),
                n = [];
            for (let r of T(e)) t.has(r) && n.push(r), t.add(r);
            n.length > 0 && new l.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', n);
        },
        setLayout(e) {
            f = e;
        },
        enable() {
            if (!p) (p = !0), this.checkDupes(f), y(f);
        },
        enableTemp(e) {
            _.push(f), (f = e), y(e), (p = !0);
        },
        disableTemp() {
            let e = _.pop();
            null != e && (f = e), this.disable(), this.enable();
        },
        disable() {
            if (!!p) (p = !1), I.forEach((e) => e()), (I = []), h.reset();
        },
        validateKeybind(e) {
            if (!!p && !!this.hasBind(e)) h.unbind(e);
        },
        hasBind(e) {
            let t = T(f);
            return (e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim()), t.includes(e);
        }
    });
