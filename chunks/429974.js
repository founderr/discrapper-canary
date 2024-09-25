n.d(t, {
    z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(570140),
    o = n(317770),
    s = n(603113),
    l = n(812206),
    u = n(158776),
    c = n(699516),
    d = n(594174),
    _ = n(626135),
    E = n(621853),
    f = n(981631),
    h = n(616922);
let p = null;
function m(e, t) {
    return 'USER_PROFILE_MODAL_KEY:'.concat(e, ':').concat(null == t || t === f.ME ? '' : t);
}
async function I(e) {
    var t, a, o, I;
    let { userId: T, section: g, subsection: S, guildId: A = f.ME, channelId: v, friendToken: N, analyticsLocation: O, showGuildProfile: R = !0, ...C } = e,
        y = d.default.getUser(T);
    if (null == y) return;
    let b = E.Z.getUserProfile(T),
        L = u.Z.getPrimaryActivity(T),
        D = u.Z.getStatus(T),
        M = u.Z.isMobileOnline(T),
        { party: P, assets: U, application_id: w } = null != L ? L : {},
        x = null != w ? l.Z.getApplication(w) : null,
        G = M ? f.j28.ONLINE_MOBILE : f.j28.ONLINE_DESKTOP,
        k = D === f.Skl.ONLINE ? G : D;
    (p = await (0, i.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([n.e('82412'), n.e('86473')]).then(n.bind(n, 533835));
            return (t) =>
                (0, r.jsx)(e, {
                    user: y,
                    guildId: A,
                    friendToken: N,
                    initialSection: g,
                    initialSubsection: S,
                    channelId: v,
                    showGuildProfile: R,
                    ...t,
                    ...C
                });
        },
        { modalKey: m(T, R ? A : void 0) }
    )),
        _.default.track(f.rMx.OPEN_MODAL, {
            type: 'Profile Modal',
            guild_id: A !== f.ME ? A : null,
            channel_id: v,
            other_user_id: T,
            application_id: null !== (a = null == L ? void 0 : L.application_id) && void 0 !== a ? a : null,
            application_name: null == L ? void 0 : L.name,
            sku_id: null !== (o = null == x ? void 0 : x.primarySkuId) && void 0 !== o ? o : null,
            is_friend: c.Z.isFriend(T),
            has_images: !!(null !== (I = null == U ? void 0 : U.large_image) && void 0 !== I ? I : null == U ? void 0 : U.small_image),
            party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
            party_id: null == P ? void 0 : P.id,
            party_platform: (0, h.Ps)(null == P ? void 0 : P.id) ? f.ABu.SPOTIFY : null,
            game_platform: (0, s.Z)(L),
            profile_user_status: k,
            profile_has_nitro_customization: (null == b ? void 0 : b.banner) != null,
            profile_has_profile_effect: (null == b ? void 0 : b.profileEffectId) != null,
            ...(null == O ? null : (0, _.expandLocation)(O))
        });
}
function T() {
    null != p && (0, i.closeModal)(p), (p = null);
}
class g extends o.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', I), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', T);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', I), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', T);
    }
}
t.Z = new g();
