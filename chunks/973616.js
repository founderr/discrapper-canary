n.d(t, {
    B: function () {
        return d;
    },
    Z: function () {
        return _;
    }
}),
    n(789020),
    n(47120);
var r = n(480189),
    i = n(81825),
    a = n(768581),
    s = n(584597),
    o = n(598077),
    l = n(701488);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let c = {
    [l.Zc]: 7,
    [l.qm]: 12
};
function d(e) {
    let t = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t;
}
class _ extends i.Z {
    static createFromServer(e) {
        var t, n;
        return new _({
            ...e,
            thirdPartySkus: e.third_party_skus,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : r.e.DEFAULT,
            hook: e.hook,
            primarySkuId: e.primary_sku_id,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(s.Z.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(s.Z.createFromServer) : [],
            eulaId: e.eula_id,
            slug: e.slug,
            coverImage: e.cover_image,
            bot: null != e.bot ? new o.Z(e.bot) : null,
            flags: null !== (n = e.flags) && void 0 !== n ? n : 0,
            maxParticipants: e.max_participants,
            tags: e.tags,
            embeddedActivityConfig: e.embedded_activity_config,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            integrationTypesConfig:
                null != e.integration_types_config
                    ? Object.fromEntries(
                          Object.entries(e.integration_types_config).map((e) => {
                              let [t, n] = e;
                              return [t, { oauth2InstallParams: (null != n ? n : {}).oauth2_install_params }];
                          })
                      )
                    : void 0,
            termsOfServiceUrl: e.terms_of_service_url,
            privacyPolicyUrl: e.privacy_policy_url
        });
    }
    mergeFromApplicationUpdate(e) {
        var t, n, r, i, a, s, o, l, u, c, d, E, f, h, p, I, m, T, S, g, A, N, R, O, v, C, L, D, y, b, M, P, U, w, x, G, k, B, F;
        return new _({
            id: null !== (t = e.id) && void 0 !== t ? t : this.id,
            name: null !== (n = e.name) && void 0 !== n ? n : this.name,
            icon: null !== (r = e.icon) && void 0 !== r ? r : this.icon,
            splash: null !== (i = e.splash) && void 0 !== i ? i : this.splash,
            overlay: null !== (a = e.overlay) && void 0 !== a ? a : this.overlay,
            overlayWarn: null !== (s = e.overlayWarn) && void 0 !== s ? s : this.overlayWarn,
            overlayCompatibilityHook: null !== (o = e.overlayCompatibilityHook) && void 0 !== o ? o : this.overlayCompatibilityHook,
            overlayMethods: null !== (l = e.overlayMethods) && void 0 !== l ? l : this.overlayMethods,
            hook: null !== (u = e.hook) && void 0 !== u ? u : this.hook,
            aliases: null !== (c = e.aliases) && void 0 !== c ? c : this.aliases,
            publishers: null !== (d = e.publishers) && void 0 !== d ? d : this.publishers,
            developers: null !== (E = e.developers) && void 0 !== E ? E : this.developers,
            primarySkuId: null !== (f = e.primarySkuId) && void 0 !== f ? f : this.primarySkuId,
            storeListingSkuId: null !== (h = e.storeListingSkuId) && void 0 !== h ? h : this.storeListingSkuId,
            thirdPartySkus: null !== (p = e.thirdPartySkus) && void 0 !== p ? p : this.thirdPartySkus,
            guildId: null !== (I = e.guildId) && void 0 !== I ? I : this.guildId,
            guild: null !== (m = e.guild) && void 0 !== m ? m : this.guild,
            executables: null !== (T = e.executables) && void 0 !== T ? T : this.executables,
            hashes: null !== (S = e.hashes) && void 0 !== S ? S : this.hashes,
            description: null !== (g = e.description) && void 0 !== g ? g : this.description,
            eulaId: null !== (A = e.eulaId) && void 0 !== A ? A : this.eulaId,
            slug: null !== (N = e.slug) && void 0 !== N ? N : this.slug,
            coverImage: null !== (R = e.coverImage) && void 0 !== R ? R : this.coverImage,
            bot: null !== (O = e.bot) && void 0 !== O ? O : this.bot,
            flags: null !== (v = e.flags) && void 0 !== v ? v : this.flags,
            maxParticipants: null !== (C = e.maxParticipants) && void 0 !== C ? C : this.maxParticipants,
            tags: null !== (L = e.tags) && void 0 !== L ? L : this.tags,
            embeddedActivityConfig: null !== (D = e.embeddedActivityConfig) && void 0 !== D ? D : { ...this.embeddedActivityConfig },
            type: null !== (y = e.type) && void 0 !== y ? y : this.type,
            team: null !== (b = e.team) && void 0 !== b ? b : this.team,
            roleConnectionsVerificationUrl: null !== (M = e.roleConnectionsVerificationUrl) && void 0 !== M ? M : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null !== (P = e.integrationTypesConfig) && void 0 !== P ? P : this.integrationTypesConfig,
            isMonetized: null !== (U = e.isMonetized) && void 0 !== U ? U : this.isMonetized,
            storefront_available: null !== (w = e.storefront_available) && void 0 !== w ? w : this.storefront_available,
            termsOfServiceUrl: null !== (x = e.termsOfServiceUrl) && void 0 !== x ? x : this.termsOfServiceUrl,
            privacyPolicyUrl: null !== (G = e.privacyPolicyUrl) && void 0 !== G ? G : this.privacyPolicyUrl,
            isVerified: null !== (k = e.isVerified) && void 0 !== k ? k : this.isVerified,
            customInstallUrl: null !== (B = e.customInstallUrl) && void 0 !== B ? B : this.customInstallUrl,
            installParams: null !== (F = e.installParams) && void 0 !== F ? F : this.installParams
        });
    }
    getIconURL(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.splash,
                  size: e,
                  keepAspectRatio: !0,
                  format: t
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? a.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    getMaxParticipants() {
        var e, t;
        return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : c[this.id]) && void 0 !== t ? t : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = this.integrationTypesConfig;
        return null != r && t.every((e) => e in r);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return _.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, i, a, s, o, l, c, _, E, f, h, p, I, m, T, S;
        super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'icon', void 0), u(this, 'splash', void 0), u(this, 'overlay', void 0), u(this, 'overlayWarn', void 0), u(this, 'overlayCompatibilityHook', void 0), u(this, 'overlayMethods', void 0), u(this, 'hook', void 0), u(this, 'aliases', void 0), u(this, 'publishers', void 0), u(this, 'developers', void 0), u(this, 'primarySkuId', void 0), u(this, 'storeListingSkuId', void 0), u(this, 'thirdPartySkus', void 0), u(this, 'guildId', void 0), u(this, 'guild', void 0), u(this, 'executables', void 0), u(this, 'hashes', void 0), u(this, 'description', void 0), u(this, 'eulaId', void 0), u(this, 'slug', void 0), u(this, 'coverImage', void 0), u(this, 'bot', void 0), u(this, 'flags', void 0), u(this, 'maxParticipants', void 0), u(this, 'tags', void 0), u(this, 'embeddedActivityConfig', void 0), u(this, 'type', void 0), u(this, 'team', void 0), u(this, 'roleConnectionsVerificationUrl', void 0), u(this, 'integrationTypesConfig', void 0), u(this, 'isMonetized', void 0), u(this, 'storefront_available', void 0), u(this, 'termsOfServiceUrl', void 0), u(this, 'privacyPolicyUrl', void 0), u(this, 'isVerified', void 0), u(this, 'customInstallUrl', void 0), u(this, 'installParams', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.overlay = null !== (t = e.overlay) && void 0 !== t && t), (this.overlayWarn = null !== (n = e.overlayWarn) && void 0 !== n && n), (this.overlayCompatibilityHook = null !== (i = e.overlayCompatibilityHook) && void 0 !== i && i), (this.overlayMethods = null !== (a = e.overlayMethods) && void 0 !== a ? a : r.e.DEFAULT), (this.hook = null === (s = e.hook) || void 0 === s || s), (this.aliases = null !== (o = e.aliases) && void 0 !== o ? o : []), (this.publishers = null !== (l = e.publishers) && void 0 !== l ? l : []), (this.developers = null !== (c = e.developers) && void 0 !== c ? c : []), (this.primarySkuId = e.primarySkuId), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.thirdPartySkus = null !== (_ = e.thirdPartySkus) && void 0 !== _ ? _ : []), (this.executables = (null !== (E = e.executables) && void 0 !== E ? E : []).map(d)), (this.hashes = null !== (f = e.hashes) && void 0 !== f ? f : []), (this.description = e.description), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.flags = null !== (h = e.flags) && void 0 !== h ? h : 0), (this.tags = null !== (p = e.tags) && void 0 !== p ? p : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null !== (I = e.embedded_activity_config) && void 0 !== I ? I : e.embeddedActivityConfig), (this.type = e.type), (this.team = e.team), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl), (this.integrationTypesConfig = e.integrationTypesConfig), (this.isMonetized = e.is_monetized), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isVerified = null !== (m = e.is_verified) && void 0 !== m ? m : e.isVerified), (this.customInstallUrl = null !== (T = e.custom_install_url) && void 0 !== T ? T : e.customInstallUrl), (this.installParams = null !== (S = e.install_params) && void 0 !== S ? S : e.installParams);
    }
}
