r.d(n, {
    w: function () {
        return l;
    }
});
var i = r(299379),
    a = r(706454),
    s = r(358085),
    o = r(981631);
let l = 'https://'.concat(o.xr4),
    u = 'https://'.concat(o.rxP),
    c = 'https://creator-support.discord.com',
    d = 'https://support-apps.discord.com';
function f(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
    return n + e;
}
function _() {
    return a.default.locale.toLowerCase();
}
n.Z = {
    getArticleURL: (e) => f('/hc/'.concat(_(), '/articles/').concat(e)),
    getDevArticleURL: (e) => f('/hc/'.concat(_(), '/articles/').concat(e), u),
    getCreatorSupportArticleURL: (e) => f('/hc/'.concat(_(), '/articles/').concat(e), c),
    getTwitterURL: () => (0, i.Z)(o.RK.TWITTER),
    getCommunityURL: () => f('/hc/'.concat(_())),
    getSubmitRequestURL(e) {
        let n = f('/hc/'.concat(_(), '/requests/new?platform=').concat(encodeURIComponent((0, s.getPlatformName)())));
        return null != e && (n += '&device_info='.concat(encodeURIComponent(e))), n;
    },
    getSearchURL(e) {
        let n = encodeURIComponent(e);
        return f('/hc/'.concat(_(), '/search?utf8=%E2%9C%93&query=').concat(n, '&commit=Search'));
    },
    getFeaturedArticlesJsonURL: () => f('/api/v2/help_center/en-us/articles.json?label_names=featured'),
    getAppsSupportURL: (e) => f('/hc/'.concat(_(), '/articles/').concat(e), d)
};
