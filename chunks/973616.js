n.d(t, {
    B: function () {
        return E;
    },
    Z: function () {
        return f;
    }
});
var r = n(789020);
var i = n(47120);
var a = n(480189),
    o = n(81825),
    s = n(768581),
    l = n(584597),
    u = n(598077),
    c = n(701488);
function d(e, t, n) {
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
let _ = {
    [c.Zc]: 7,
    [c.qm]: 12
};
function E(e) {
    let t = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t;
}
class f extends o.Z {
    static createFromServer(e) {
        var t, n;
        return new f({
            ...e,
            thirdPartySkus: e.third_party_skus,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : a.e.DEFAULT,
            hook: e.hook,
            primarySkuId: e.primary_sku_id,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(l.Z.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(l.Z.createFromServer) : [],
            eulaId: e.eula_id,
            slug: e.slug,
            coverImage: e.cover_image,
            bot: null != e.bot ? new u.Z(e.bot) : null,
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
                    : null,
            termsOfServiceUrl: e.terms_of_service_url,
            privacyPolicyUrl: e.privacy_policy_url
        });
    }
    getIconURL(e, t) {
        return null != this.icon
            ? s.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? s.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? s.ZP.getGameAssetURL({
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
            ? s.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    getMaxParticipants() {
        var e, t;
        return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : _[this.id]) && void 0 !== t ? t : 0;
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
        return f.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = a.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, r, i;
        super(), d(this, 'id', void 0), d(this, 'name', void 0), d(this, 'icon', void 0), d(this, 'splash', void 0), d(this, 'overlay', void 0), d(this, 'overlayWarn', void 0), d(this, 'overlayCompatibilityHook', void 0), d(this, 'overlayMethods', void 0), d(this, 'hook', void 0), d(this, 'aliases', void 0), d(this, 'publishers', void 0), d(this, 'developers', void 0), d(this, 'primarySkuId', void 0), d(this, 'storeListingSkuId', void 0), d(this, 'thirdPartySkus', void 0), d(this, 'guildId', void 0), d(this, 'guild', void 0), d(this, 'executables', void 0), d(this, 'hashes', void 0), d(this, 'description', void 0), d(this, 'eulaId', void 0), d(this, 'slug', void 0), d(this, 'coverImage', void 0), d(this, 'bot', void 0), d(this, 'flags', void 0), d(this, 'maxParticipants', void 0), d(this, 'tags', void 0), d(this, 'embeddedActivityConfig', void 0), d(this, 'type', void 0), d(this, 'team', void 0), d(this, 'roleConnectionsVerificationUrl', void 0), d(this, 'integrationTypesConfig', void 0), d(this, 'isMonetized', void 0), d(this, 'storefront_available', void 0), d(this, 'termsOfServiceUrl', void 0), d(this, 'privacyPolicyUrl', void 0), d(this, 'isVerified', void 0), d(this, 'customInstallUrl', void 0), d(this, 'installParams', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon || null), (this.splash = e.splash || null), (this.overlay = e.overlay || !1), (this.overlayWarn = e.overlayWarn || !1), (this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1), (this.overlayMethods = null !== (t = e.overlayMethods) && void 0 !== t ? t : a.e.DEFAULT), (this.hook = null === (n = e.hook) || void 0 === n || n), (this.aliases = e.aliases || []), (this.publishers = e.publishers || []), (this.developers = e.developers || []), (this.primarySkuId = e.primarySkuId), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId || null), (this.guild = e.guild || null), (this.thirdPartySkus = e.thirdPartySkus || []), (this.executables = (e.executables || []).map(E)), (this.hashes = e.hashes || []), (this.description = e.description || null), (this.eulaId = e.eulaId || null), (this.slug = e.slug || null), (this.bot = e.bot || null), (this.coverImage = e.coverImage || null), (this.flags = null !== (r = e.flags) && void 0 !== r ? r : 0), (this.tags = null !== (i = e.tags) && void 0 !== i ? i : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = e.embedded_activity_config), (this.type = e.type), (this.team = e.team), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl), (this.integrationTypesConfig = e.integrationTypesConfig), (this.isMonetized = e.is_monetized), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isVerified = e.is_verified), (this.customInstallUrl = e.custom_install_url), (this.installParams = e.install_params);
    }
}
