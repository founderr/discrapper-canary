let r;
n.d(t, {
    F: function () {
        return _;
    },
    Z: function () {
        return h;
    }
}),
    n(757143),
    n(653041);
var i = n(392711),
    a = n.n(i),
    s = n(579806),
    o = n(710845),
    l = n(358085),
    u = n(998502);
let c = [];
function d(e) {
    return (e = e.toLowerCase()), (0, l.isWindows)() && (e = (e = e.replace(/^[a-z]:/, '')).replace(/\\/g, '/')), e;
}
function f(e) {
    null != e && '' !== e && (!(e = d(e)).endsWith('/') && (e += '/'), c.push(e));
}
function _(e) {
    e = d(e);
    let t = !1;
    return (c.forEach((n) => {
        !t && e.startsWith(n) && ((e = e.substr(n.length)), (t = !0));
    }),
    t)
        ? (e = e.includes('dosbox.exe') ? e.split('/').slice(-3).join('/') : e.split('/').slice(-2).join('/'))
        : null;
}
async function h() {
    if (null != r) return r;
    try {
        await u.ZP.ensureModule('discord_game_utils'), (r = await u.ZP.requireModule('discord_game_utils'));
    } catch (e) {
        new o.Z('GamesActionCreators').error('could not load discord_game_utils', e);
    }
    if ((0, l.isWindows)()) {
        let e = s.Z.process.env;
        f(e.LOCALAPPDATA), f(e['PROGRAMFILES(X86)']), f(e.PROGRAMFILES), f(e.PROGRAMW6432), f(e.PROGRAMDATA), f('/games/'), f('/steamlibrary/steamapps/common/');
    }
    let e = s.Z.remoteApp.getPath;
    return f(await e('home')), f(await e('appData')), f(await e('desktop')), f(await e('documents')), f(await e('downloads')), (c = a().uniq(c)).sort((e, t) => t.length - e.length), r;
}
