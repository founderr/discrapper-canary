n.d(t, {
    Dm: function () {
        return _;
    },
    N0: function () {
        return l;
    },
    Q2: function () {
        return f;
    },
    Rt: function () {
        return u;
    },
    eC: function () {
        return r;
    },
    fh: function () {
        return d;
    }
}),
    n(571269),
    n(298267),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    i,
    a = n(873546),
    s = n(46140);
let o = /\.([a-zA-Z0-9]+)$/,
    l = ['video/mp4', 'video/webm'];
function u(e, t, n) {
    let r = f(e, t, n),
        i = _(t),
        a = null != i && l.includes(i);
    return {
        url: r,
        mimetype: i,
        isAnimated: a
    };
}
function c(e, t) {
    return null == e || a.tq ? t : e;
}
function d(e, t, n) {
    let r;
    switch (t) {
        case 'hero':
            r = c(e.config.assets.heroVideo, e.config.assets.hero);
            break;
        case 'quest_bar_hero':
            r = c(e.config.assets.questBarHeroVideo, e.config.assets.questBarHero);
            break;
        case 'reward': {
            var i, a;
            let t = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedTier) && void 0 !== a ? a : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t];
            r = c(n.assetVideo, n.asset);
            break;
        }
        case 'game_tile':
            r = e.config.assets.gameTile;
            break;
        case 'logo_type':
            r = e.config.assets.logotype;
    }
    let o = e.config.features.includes(s.S7.QUESTS_CDN);
    return u(e.id, r, {
        theme: n,
        newCdn: o
    });
}
((i = r || (r = {})).HERO = 'hero'), (i.QUEST_BAR_HERO = 'quest_bar_hero'), (i.REWARD = 'reward'), (i.GAME_TILE = 'game_tile'), (i.LOGO_TYPE = 'logo_type');
function f(e, t, n) {
    if (t.startsWith('blob:')) {
        var r, i;
        return null !== (i = (r = t).split('?', 1).at(0)) && void 0 !== i ? i : r;
    }
    let a = (null == n ? void 0 : n.newCdn) ? s.tD : s.Uo;
    return ''
        .concat(a)
        .concat(e)
        .concat((null == n ? void 0 : n.theme) != null ? '/'.concat(n.theme) : '', '/')
        .concat(t);
}
function _(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null !== (r = new URL(e).searchParams.get('mimetype')) && void 0 !== r ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = o.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        case 'webp':
            return 'image/webp';
        case 'jpg':
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'gif':
            return 'image/gif';
        case 'svg':
            return 'image/svg+xml';
        case 'txt':
            return 'text/plain';
        case 'vtt':
            return 'text/vtt';
        default:
            return null;
    }
}
