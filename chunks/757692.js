n.d(t, {
    o: function () {
        return a;
    }
});
var i = n(451467),
    l = n(557457),
    r = n(354459),
    s = n(37113);
function a(e, t) {
    var n, a;
    if (null == e || e.type !== r.fO.STREAM || null == e.maxResolution || null == e.maxFrameRate || !((null == e ? void 0 : null === (n = e.maxResolution) || void 0 === n ? void 0 : n.height) in s.LY) || !(e.maxFrameRate in s.ws)) return !1;
    let o = (0, i.Z)(s.tI.PRESET_VIDEO, (0, s.aW)(null == e ? void 0 : null === (a = e.maxResolution) || void 0 === a ? void 0 : a.height), (0, s.L9)(e.maxFrameRate), t);
    return (
        !(
            null == e ||
            (0, l.tR)({
                maxResolution: e.maxResolution,
                maxFrameRate: e.maxFrameRate
            })
        ) || o
    );
}
