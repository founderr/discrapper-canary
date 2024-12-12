r.d(n, {
    x: function () {
        return l;
    }
});
var i = r(594174),
    a = r(130402),
    s = r(174065),
    o = r(353842);
async function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'unknown';
    if (null == i.default.getCurrentUser()) return;
    let { isEmojiTextMatchSuggestionsEnabled: n } = o.Z.getCurrentConfig({ location: e });
    if (!n) {
        s.Z.hasPersistedState() && s.Z.clear();
        return;
    }
    if (s.Z.getIsFetching()) return;
    let r = s.Z.getEmojiCaptionsTTL();
    if (!(null != r && Date.now() < r)) await (0, a.n)();
}
