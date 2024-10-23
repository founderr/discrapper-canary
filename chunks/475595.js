n.d(t, {
    Bd: function () {
        return r;
    },
    Dm: function () {
        return d;
    },
    N0: function () {
        return l;
    },
    Q2: function () {
        return c;
    },
    fh: function () {
        return u;
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
    switch (t) {
        case 'hero': {
            let t = null == e.config.assets.heroVideo || a.tq ? e.config.assets.hero : e.config.assets.heroVideo,
                n = c(e.id, t),
                r = d(t),
                i = null != r && l.includes(r);
            return {
                url: n,
                mimetype: r,
                isAnimated: i
            };
        }
        case 'quest_bar_hero': {
            let t = null == e.config.assets.questBarHeroVideo || a.tq ? e.config.assets.questBarHero : e.config.assets.questBarHeroVideo,
                n = c(e.id, t),
                r = d(t),
                i = null != r && l.includes(r);
            return {
                url: n,
                mimetype: r,
                isAnimated: i
            };
        }
        case 'reward': {
            var r, i;
            let t = null !== (i = null === (r = e.userStatus) || void 0 === r ? void 0 : r.claimedTier) && void 0 !== i ? i : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t],
                s = null == n.assetVideo || a.tq ? n.asset : n.assetVideo,
                o = c(e.id, s),
                u = d(s),
                _ = null != u && l.includes(u);
            return {
                url: o,
                mimetype: u,
                isAnimated: _
            };
        }
        case 'game_tile': {
            let t = e.config.assets.gameTile,
                r = c(e.id, t, n),
                i = d(t),
                a = null != i && l.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
        case 'logo_type': {
            let t = e.config.assets.logotype,
                r = c(e.id, t, n),
                i = d(t),
                a = null != i && l.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
    }
}
((i = r || (r = {})).HERO = 'hero'), (i.QUEST_BAR_HERO = 'quest_bar_hero'), (i.REWARD = 'reward'), (i.GAME_TILE = 'game_tile'), (i.LOGO_TYPE = 'logo_type');
function c(e, t, n) {
    if (t.startsWith('blob:')) {
        var r, i;
        return null !== (i = (r = t).split('?', 1).at(0)) && void 0 !== i ? i : r;
    }
    return ''
        .concat(s.tD)
        .concat(e)
        .concat(null != n ? '/'.concat(n) : '', '/')
        .concat(t);
}
function d(e) {
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
