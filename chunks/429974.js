var i = n(735250);
n(470079);
var s = n(481060), a = n(570140), r = n(317770), l = n(603113), o = n(812206), c = n(158776), d = n(699516), u = n(594174), _ = n(626135), E = n(621853), h = n(981631), I = n(616922);
let m = null;
async function g(e) {
    var t, a, r, g;
    let {
            userId: p,
            section: T,
            subsection: S,
            guildId: C = h.ME,
            channelId: f,
            friendToken: N,
            analyticsLocation: A,
            ...Z
        } = e, L = u.default.getUser(p);
    if (null == L)
        return;
    let v = E.Z.getUserProfile(p), O = c.Z.getPrimaryActivity(p), R = c.Z.getStatus(p), x = c.Z.isMobileOnline(p), {
            party: P,
            assets: b,
            application_id: M
        } = null != O ? O : {}, D = null != M ? o.Z.getApplication(M) : null, y = x ? h.j28.ONLINE_MOBILE : h.j28.ONLINE_DESKTOP, j = R === h.Skl.ONLINE ? y : R;
    m = await (0, s.openModalLazy)(async () => {
        let {default: e} = await n.e('824').then(n.bind(n, 304113));
        return t => (0, i.jsx)(e, {
            location: 'handleOpenUserProfileModal',
            user: L,
            guildId: C,
            friendToken: N,
            initialSection: T,
            initialSubsection: S,
            channelId: f,
            ...t,
            ...Z
        });
    }), _.default.track(h.rMx.OPEN_MODAL, {
        type: 'Profile Modal',
        guild_id: C !== h.ME ? C : null,
        channel_id: f,
        other_user_id: p,
        application_id: null !== (a = null == O ? void 0 : O.application_id) && void 0 !== a ? a : null,
        application_name: null == O ? void 0 : O.name,
        sku_id: null !== (r = null == D ? void 0 : D.primarySkuId) && void 0 !== r ? r : null,
        is_friend: d.Z.isFriend(p),
        has_images: !!(null !== (g = null == b ? void 0 : b.large_image) && void 0 !== g ? g : null == b ? void 0 : b.small_image),
        party_max: null == P ? void 0 : null === (t = P.size) || void 0 === t ? void 0 : t[1],
        party_id: null == P ? void 0 : P.id,
        party_platform: (0, I.Ps)(null == P ? void 0 : P.id) ? h.ABu.SPOTIFY : null,
        game_platform: (0, l.Z)(O),
        profile_user_status: j,
        profile_has_nitro_customization: (null == v ? void 0 : v.banner) != null,
        profile_has_profile_effect: (null == v ? void 0 : v.profileEffectId) != null,
        ...null == A ? null : (0, _.expandLocation)(A)
    });
}
function p() {
    null != m && (0, s.closeModal)(m), m = null;
}
class T extends r.Z {
    _initialize() {
        a.Z.subscribe('USER_PROFILE_MODAL_OPEN', g), a.Z.subscribe('USER_PROFILE_MODAL_CLOSE', p);
    }
    _terminate() {
        a.Z.unsubscribe('USER_PROFILE_MODAL_OPEN', g), a.Z.unsubscribe('USER_PROFILE_MODAL_CLOSE', p);
    }
}
t.Z = new T();
