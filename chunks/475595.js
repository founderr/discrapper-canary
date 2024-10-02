n.d(t, {
    Bd: function () {
        return r;
    },
    fh: function () {
        return h;
    }
});
var r,
    i = n(571269);
var a = n(298267);
var o = n(315314);
var s = n(610138);
var l = n(216116);
var u = n(78328);
var c = n(815648);
var d = n(47120);
var _ = n(46140);
let E = /\.([a-zA-Z0-9]+)$/,
    f = ['video/mp4', 'video/webm'];
function h(e, t, n) {
    var r, i, a, o, s;
    switch (t) {
        case 'hero': {
            let t = null !== (r = e.config.assets.heroVideo) && void 0 !== r ? r : e.config.assets.hero,
                n = m(e.id, t),
                i = I(t),
                a = null != i && f.includes(i);
            return {
                url: n,
                mimetype: i,
                isAnimated: a
            };
        }
        case 'quest_bar_hero': {
            let t = null !== (i = e.config.assets.questBarHeroVideo) && void 0 !== i ? i : e.config.assets.questBarHero,
                n = m(e.id, t),
                r = I(t),
                a = null != r && f.includes(r);
            return {
                url: n,
                mimetype: r,
                isAnimated: a
            };
        }
        case 'reward': {
            let t = null !== (o = null === (a = e.userStatus) || void 0 === a ? void 0 : a.claimedTier) && void 0 !== o ? o : 0,
                n = 'rewardsConfig' in e.config ? e.config.rewardsConfig.rewards[t] : e.config.rewards[t],
                r = null !== (s = n.assetVideo) && void 0 !== s ? s : n.asset,
                i = m(e.id, r),
                l = I(r),
                u = null != l && f.includes(l);
            return {
                url: i,
                mimetype: l,
                isAnimated: u
            };
        }
        case 'game_tile': {
            let t = e.config.assets.gameTile,
                r = m(e.id, t, n),
                i = I(t),
                a = null != i && f.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
        case 'logo_type': {
            let t = e.config.assets.logotype,
                r = m(e.id, t, n),
                i = I(t),
                a = null != i && f.includes(i);
            return {
                url: r,
                mimetype: i,
                isAnimated: a
            };
        }
    }
}
function p(e) {
    var t;
    return null !== (t = e.split('?', 1).at(0)) && void 0 !== t ? t : e;
}
function m(e, t, n) {
    return t.startsWith('blob:')
        ? p(t)
        : ''
              .concat(_.tD)
              .concat(e)
              .concat(null != n ? '/'.concat(n) : '', '/')
              .concat(t);
}
function I(e) {
    var t, n, r;
    if (e.startsWith('blob:')) {
        let t = null !== (r = new URL(e).searchParams.get('mimetype')) && void 0 !== r ? r : void 0;
        return null != t ? decodeURIComponent(t) : null;
    }
    switch (null === (n = E.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) {
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
        default:
            return null;
    }
}
!(function (e) {
    (e.HERO = 'hero'), (e.QUEST_BAR_HERO = 'quest_bar_hero'), (e.REWARD = 'reward'), (e.GAME_TILE = 'game_tile'), (e.LOGO_TYPE = 'logo_type');
})(r || (r = {}));
