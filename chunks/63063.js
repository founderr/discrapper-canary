n.d(t, {
    w: function () {
        return s;
    }
});
var r = n(299379),
    i = n(706454),
    a = n(358085),
    o = n(981631);
let s = 'https://'.concat(o.xr4),
    l = 'https://'.concat(o.rxP),
    u = 'https://creator-support.discord.com';
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return t + e;
}
function d() {
    return i.default.locale.toLowerCase();
}
t.Z = {
    getArticleURL: (e) => c('/hc/'.concat(d(), '/articles/').concat(e)),
    getDevArticleURL: (e) => c('/hc/'.concat(d(), '/articles/').concat(e), l),
    getCreatorSupportArticleURL: (e) => c('/hc/'.concat(d(), '/articles/').concat(e), u),
    getTwitterURL: () => (0, r.Z)(o.RK.TWITTER),
    getCommunityURL: () => c('/hc/'.concat(d())),
    getSubmitRequestURL(e) {
        let t = c('/hc/'.concat(d(), '/requests/new?platform=').concat(encodeURIComponent((0, a.getPlatformName)())));
        return null != e && (t += '&device_info='.concat(encodeURIComponent(e))), t;
    },
    getSearchURL(e) {
        let t = encodeURIComponent(e);
        return c('/hc/'.concat(d(), '/search?utf8=%E2%9C%93&query=').concat(t, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => c('/api/v2/help_center/en-us/articles.json?label_names=featured')
};
