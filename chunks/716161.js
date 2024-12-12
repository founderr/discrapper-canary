r.d(n, {
    Ff: function () {
        return h;
    },
    GS: function () {
        return E;
    },
    KH: function () {
        return p;
    },
    Nm: function () {
        return v;
    },
    RI: function () {
        return g;
    },
    Up: function () {
        return m;
    },
    XV: function () {
        return _;
    }
});
var i = r(544891),
    a = r(570140),
    s = r(675478),
    o = r(131951),
    l = r(594174),
    u = r(932724),
    c = r(647177),
    d = r(901757),
    f = r(981631);
async function _() {
    let e = await i.tn.get({
        url: f.ANM.VIDEO_FILTER_ASSETS,
        rejectWithError: !1
    });
    return (
        a.Z.dispatch({
            type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
            assets: e.body
        }),
        e
    );
}
async function h(e, n, r) {
    try {
        let s = await i.tn.post({
            url: f.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: n,
                asset: e,
                last_used: null == r ? void 0 : r.toISOString()
            },
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
                videoFilterAsset: s.body
            }),
            s.body
        );
    } catch (e) {
        throw new d.Z(e);
    }
}
async function p(e) {
    await i.tn.del({
        url: f.ANM.VIDEO_FILTER_ASSET(e.id),
        rejectWithError: !1
    });
    let n = (0, u.P)(l.default.getCurrentUser());
    (0, c.rD)(n) && n.id === e.id && m(null),
        a.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
            videoFilterAsset: e
        });
}
async function m(e) {
    if (
        (await s.hW.updateAsync(
            'voiceAndVideo',
            (n) => {
                n.videoBackgroundFilterDesktop = (0, c.i7)(e);
            },
            s.fy.FREQUENT_USER_ACTION
        ),
        (0, c.rD)(e))
    ) {
        let n = await i.tn.post({
            url: f.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id),
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: n.body
        });
    } else
        a.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function g(e) {
    if (!!o.Z.isSupported())
        a.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function E() {
    if (!!o.Z.isSupported()) a.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function v() {
    a.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
