n.d(t, {
    Ff: function () {
        return _;
    },
    GS: function () {
        return g;
    },
    KH: function () {
        return p;
    },
    Nm: function () {
        return E;
    },
    RI: function () {
        return m;
    },
    Up: function () {
        return h;
    },
    XV: function () {
        return f;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(675478),
    s = n(131951),
    o = n(594174),
    l = n(932724),
    u = n(647177),
    c = n(901757),
    d = n(981631);
async function f() {
    let e = await r.tn.get(d.ANM.VIDEO_FILTER_ASSETS);
    return (
        i.Z.dispatch({
            type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
            assets: e.body
        }),
        e
    );
}
async function _(e, t, n) {
    try {
        let a = await r.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: t,
                asset: e,
                last_used: null == n ? void 0 : n.toISOString()
            }
        });
        return (
            i.Z.dispatch({
                type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
                videoFilterAsset: a.body
            }),
            a.body
        );
    } catch (e) {
        throw new c.Z(e);
    }
}
async function p(e) {
    await r.tn.del(d.ANM.VIDEO_FILTER_ASSET(e.id));
    let t = (0, l.P)(o.default.getCurrentUser());
    (0, u.rD)(t) && t.id === e.id && h(null),
        i.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
            videoFilterAsset: e
        });
}
async function h(e) {
    if (
        (await a.hW.updateAsync(
            'voiceAndVideo',
            (t) => {
                t.videoBackgroundFilterDesktop = (0, u.i7)(e);
            },
            a.fy.FREQUENT_USER_ACTION
        ),
        (0, u.rD)(e))
    ) {
        let t = await r.tn.post(d.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id));
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: t.body
        });
    } else
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function m(e) {
    if (!!s.Z.isSupported())
        i.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function g() {
    if (!!s.Z.isSupported()) i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function E() {
    i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
