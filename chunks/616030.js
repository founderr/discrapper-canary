n.d(t, {
    Bk: function () {
        return s;
    },
    tK: function () {
        return o;
    },
    zC: function () {
        return a;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(122890),
    r = n(110818);
function a(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [s, u] = (0, l.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: r.NQ.Scenes.NORMAL,
            purchaseScene: r.NQ.Scenes.SPEED_START,
            errorScene: r.NQ.Scenes.NORMAL,
            successScene: r.NQ.Scenes.FINISH
        });
    return (0, i.jsx)(r.NQ, {
        className: a,
        nextScene: s,
        onScenePlay: (e) => u(r.NQ.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
function o(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [s, u] = (0, l.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: r.HC.Scenes.NORMAL,
            purchaseScene: r.HC.Scenes.SPEED_START,
            errorScene: r.HC.Scenes.NORMAL,
            successScene: r.HC.Scenes.FINISH
        });
    return (0, i.jsx)(r.HC, {
        className: a,
        nextScene: s,
        onScenePlay: (e) => u(r.HC.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
function s(e) {
    let { currentStep: t, purchaseState: n, className: a, pause: o } = e,
        [s, u] = (0, l.z)({
            purchaseState: n,
            currentStep: t,
            initialScene: r.Db.Scenes.IDLE_ENTRY,
            purchaseScene: r.Db.Scenes.BOOST_START,
            errorScene: r.Db.Scenes.ERROR,
            successScene: r.Db.Scenes.BOOST_END
        });
    return (0, i.jsx)(r.Db, {
        className: a,
        nextScene: s,
        onScenePlay: (e) => u(r.Db.getNextScene(e)),
        pauseWhileUnfocused: !1,
        pause: o
    });
}
