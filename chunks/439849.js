let r;
n.d(t, {
    F: function () {
        return p;
    },
    Z: function () {
        return m;
    }
});
var i = n(757143);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(579806),
    u = n(710845),
    c = n(358085),
    d = n(998502);
let _ = [],
    E = 'dosbox.exe';
function f(e) {
    return (e = e.toLowerCase()), (0, c.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}
function h(e) {
    null != e && '' !== e && (!(e = f(e)).endsWith('/') && (e += '/'), _.push(e));
}
function p(e) {
    e = f(e);
    let t = !1;
    return (_.forEach((n) => {
        !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
    }),
    t)
        ? (e = e.includes(E) ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/'))
        : null;
}
async function m() {
    if (null != r) return r;
    try {
        await d.ZP.ensureModule('discord_game_utils'), (r = await d.ZP.requireModule('discord_game_utils'));
    } catch (e) {
        new u.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, c.isWindows)()) {
        let e = l.Z.process.env;
        h(e.LOCALAPPDATA), h(e['PROGRAMFILES(X86)']), h(e.PROGRAMFILES), h(e.PROGRAMW6432), h(e.PROGRAMDATA), h('/games/'), h('/steamlibrary/steamapps/common/');
    }
    let e = l.Z.remoteApp.getPath;
    return h(await e('home')), h(await e('appData')), h(await e('desktop')), h(await e('documents')), h(await e('downloads')), (_ = s().uniq(_)).sort((e, t) => t.length - e.length), r;
}
