var r = n(113638);
let i = new r.Z(o);
function a(e) {
    i.setParams(e);
}
function o(e) {
    {
        let t = n(160170).B[e];
        return void 0 !== t ? t().then((e) => e.default) : Promise.resolve({});
    }
}
function s(e) {
    let t = i.get();
    return void 0 !== t ? t[e] : [];
}
t.Z = {
    setEmojiLocale: a,
    getTermsForEmoji: s
};
