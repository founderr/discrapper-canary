var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    l = n(809206),
    s = n(317770),
    o = n(18438),
    c = n(81245),
    d = n(378879),
    u = n(350327),
    h = n(594174),
    m = n(74538),
    p = n(486324);
function g(e, t) {
    let n = e === p.pC.AVATAR ? 'handleUploadAvatar' : 'handleUploadBanner';
    return !!(0, c.iM)(n) && (0, d.openProfileUpsellModal)(e, t);
}
let f = (e) => {
        let { imageSrc: t, file: a, guildId: s, isTryItOutFlow: c } = e;
        if (c) {
            (0, u.c_)(t);
            return;
        }
        let d = h.default.getCurrentUser(),
            f = null != s ? o.I5 : l.I5;
        if (m.ZP.canUseAnimatedAvatar(d) || 'image/gif' !== a.type) {
            f(t);
            return;
        }
        if (!(null == d || g(p.pC.AVATAR, t)))
            return (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('12736').then(n.bind(n, 844594));
                return (n) =>
                    (0, i.jsx)(e, {
                        user: d,
                        imageSrc: t,
                        uploadType: p.pC.AVATAR,
                        onSubscribe: () => f(t),
                        ...n
                    });
            });
    },
    _ = (e) => {
        let { imageSrc: t, guildId: a, isTryItOutFlow: l } = e;
        if (l) {
            (0, u.f4)(t);
            return;
        }
        let s = h.default.getCurrentUser(),
            c = null != a ? o.g_ : u.g_;
        if (m.ZP.canUsePremiumProfileCustomization(s)) {
            c(t);
            return;
        }
        if (!(null == s || g(p.pC.BANNER, t)))
            return (0, r.openModalLazy)(async () => {
                let { default: e } = await n.e('12736').then(n.bind(n, 844594));
                return (n) =>
                    (0, i.jsx)(e, {
                        user: s,
                        imageSrc: t,
                        uploadType: p.pC.BANNER,
                        onSubscribe: () => c(t),
                        ...n
                    });
            });
    };
class E extends s.Z {
    _initialize() {
        a.Z.subscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        a.Z.unsubscribe('PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL', this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === p.pC.AVATAR ? f(e) : e.uploadType === p.pC.BANNER ? _(e) : void 0;
    }
}
t.Z = new E();
