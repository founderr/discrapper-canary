n(724458);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(46973),
    u = n(570140),
    c = n(581883),
    d = n(131951),
    f = n(944486),
    _ = n(594174),
    p = n(647177);
let h = !1,
    m = null,
    g = !1,
    E = {};
function v(e) {
    var t;
    let n = _.default.getCurrentUser();
    if (null == n) return !1;
    let r = null != e ? e : (0, p.Gx)(null === (t = c.Z.settings.voiceAndVideo) || void 0 === t ? void 0 : t.videoBackgroundFilterDesktop, n.id);
    return null != f.Z.getVoiceChannelId() && d.Z.isVideoEnabled() && null != r;
}
function b() {
    m !== f.Z.getVoiceChannelId() && (g = !1), v() && (g = !0), (m = f.Z.getVoiceChannelId());
}
class I extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, f.Z, d.Z), this.syncWith([f.Z, d.Z], b);
    }
    get videoFilterAssets() {
        return E;
    }
    get hasBeenApplied() {
        return h;
    }
    get hasUsedBackgroundInCall() {
        return g;
    }
}
(s = 'VideoBackgroundStore'),
    (a = 'displayName') in (i = I)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new I(u.Z, {
        VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function (e) {
            let { assets: t } = e;
            E = t.reduce(
                (e, t) => ({
                    ...e,
                    [t.id]: t
                }),
                {}
            );
        },
        VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function (e) {
            let { videoFilterAsset: t } = e;
            E = {
                ...E,
                [t.id]: t
            };
        },
        VIDEO_FILTER_ASSET_DELETE_SUCCESS: function (e) {
            let { videoFilterAsset: t } = e;
            (E = { ...E }), delete E[t.id];
        },
        VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function (e) {
            let { backgroundOption: t } = e;
            v(t) && (g = !0);
        },
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
            let { settings: t } = e;
            l.TO.CAMERA_BACKGROUND_LIVE in t && (h = !0);
        }
    }));
