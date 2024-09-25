var r = n(47120);
var i = n(757143);
var a = n(653041);
var o = n(879443),
    s = n.n(o),
    l = n(414861),
    u = n.n(l),
    c = n(360038),
    d = n(710845),
    _ = n(626135),
    E = n(358085),
    f = n(981631);
let h = {},
    p = [],
    m = !1,
    I = u()(new (s())(window)),
    T = (0, E.isMac)() ? 'cmd' : 'ctrl',
    g = (0, E.isMac)() ? 'opt' : 'alt',
    S = (0, E.isMac)() ? 'return' : 'enter',
    A = [...c.u.binds, 'mod+shift+[', 'mod+shift+]', 'mod+[', 'mod+]', 'alt+[', 'alt+]', 'ctrl+shift+tab', 'ctrl+tab', 'mod+n', 'mod+t', 'mod+shift+t', 'mod+plus', 'mod+minus', 'mod+0'].map((e) => e.replace('mod', T)),
    v = () => [],
    N = [];
function O(e, t) {
    let n = (e) => t(e, e.key);
    document.addEventListener(e, n), N.push(() => document.removeEventListener(e, n));
}
function R(e) {
    let t = [];
    for (let n of Object.values(e)) null != n && t.push(...n.binds);
    return t.map((e) => e.replace('mod', T));
}
function C(e, t) {
    return (n, r) => (_.default.track(f.rMx.KEYBOARD_SHORTCUT_USED, { shortcut_name: e }), t(n, r));
}
function y(e) {
    for (let [t, n] of Object.entries(e)) {
        if (null == n) continue;
        let e = v();
        !E.isPlatformEmbedded && (e = e.concat(A));
        let r = n.binds.filter((t) => ((t = t.replace('mod', T)), 0 > e.indexOf(t)));
        if (0 === r.length) continue;
        let i = n.comboKeysBindGlobal ? I.bindGlobal : I.bind;
        if ((null != n.action && i.call(I, r, C(t, n.action)), null != n.keyup && i.call(I, r, C(t, n.keyup), 'keyup'), null != n.keydown)) {
            let e = r.indexOf('any-character');
            -1 !== e && (O('keydown', n.keydown), r.splice(e, 1)), r.length > 0 && i.call(I, r, C(t, n.keydown), 'keydown');
        }
        null != n.keypress && i.call(I, r, C(t, n.keypress), 'keypress');
    }
}
(0, E.isDesktop)() && new (s())(document.documentElement).bind('backspace', (e) => e.preventDefault()),
    (t.Z = {
        combokeys: I,
        modKey: T,
        altKey: g,
        returnKey: S,
        setGetKeybindList(e) {
            v = e;
        },
        checkDupes(e) {
            let t = new Set(),
                n = [];
            for (let r of R(e)) t.has(r) && n.push(r), t.add(r);
            n.length > 0 && new d.Z('Keybinds').warn('Duplicate keyboard shortcuts defined:', n);
        },
        setLayout(e) {
            h = e;
        },
        enable() {
            if (!m) (m = !0), this.checkDupes(h), y(h);
        },
        enableTemp(e) {
            p.push(h), (h = e), y(e), (m = !0);
        },
        disableTemp() {
            let e = p.pop();
            null != e && (h = e), this.disable(), this.enable();
        },
        disable() {
            if (!!m) (m = !1), N.forEach((e) => e()), (N = []), I.reset();
        },
        validateKeybind(e) {
            if (!!m && !!this.hasBind(e)) I.unbind(e);
        },
        hasBind(e) {
            let t = R(h);
            return (e = (e = e.replace('meta', 'cmd')).replace(/right |left /i, '').trim()), t.includes(e);
        }
    });
