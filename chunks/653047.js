"use strict";
n.r(t), n.d(t, {
  createExecutable: function() {
    return _
  },
  default: function() {
    return r
  }
}), n("702976");
var r, i = n("266088"),
  o = n("666038"),
  l = n("315102"),
  u = n("331082"),
  a = n("766274"),
  s = n("954016");
let E = {
  [s.POKER_NIGHT_APPLICATION_ID]: 7,
  [s.END_GAME_APPLICATION_ID]: 12
};

function _(e) {
  let t = {
    os: e.os,
    name: e.name
  };
  return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
}
r = class e extends o.default {
  static createFromServer(t) {
    var n, r;
    return new e({
      ...t,
      thirdPartySkus: t.third_party_skus,
      overlayWarn: t.overlay_warn,
      overlayCompatibilityHook: t.overlay_compatibility_hook,
      overlayMethods: null !== (n = t.overlay_methods) && void 0 !== n ? n : i.ApplicationOverlayMethodFlags.DEFAULT,
      hook: t.hook,
      primarySkuId: t.primary_sku_id,
      storeListingSkuId: t.store_listing_sku_id,
      guildId: t.guild_id,
      guild: t.guild,
      publishers: null != t.publishers ? t.publishers.map(u.default.createFromServer) : [],
      developers: null != t.developers ? t.developers.map(u.default.createFromServer) : [],
      eulaId: t.eula_id,
      slug: t.slug,
      coverImage: t.cover_image,
      bot: null != t.bot ? new a.default(t.bot) : null,
      flags: null !== (r = t.flags) && void 0 !== r ? r : 0,
      maxParticipants: t.max_participants,
      tags: t.tags,
      embeddedActivityConfig: t.embedded_activity_config,
      roleConnectionsVerificationUrl: t.role_connections_verification_url
    })
  }
  getIconURL(e) {
    return null != this.icon ? l.default.getGameAssetURL({
      id: this.id,
      hash: this.icon,
      size: e
    }) : null
  }
  getIconSource(e) {
    return null != this.icon ? l.default.getGameAssetSource({
      id: this.id,
      hash: this.icon,
      size: e
    }) : null
  }
  getSplashURL(e) {
    return null != this.splash ? l.default.getGameAssetURL({
      id: this.id,
      hash: this.splash,
      size: e,
      keepAspectRatio: !0
    }) : null
  }
  getCoverImageURL(e) {
    return null != this.coverImage ? l.default.getApplicationIconURL({
      id: this.id,
      icon: this.coverImage,
      size: e
    }) : null
  }
  getMaxParticipants() {
    var e, t;
    return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : E[this.id]) && void 0 !== t ? t : 0
  }
  get destinationSkuId() {
    return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId
  }
  get supportsOutOfProcessOverlay() {
    return e.supportsOutOfProcessOverlay(this.overlayMethods)
  }
  static supportsOutOfProcessOverlay(e) {
    let t = i.ApplicationOverlayMethodFlags.OUT_OF_PROCESS;
    return null != e && (e & t) === t
  }
  constructor(e) {
    var t, n, r, o;
    super(), this.id = e.id, this.name = e.name, this.icon = e.icon || null, this.splash = e.splash || null, this.overlay = e.overlay || !1, this.overlayWarn = e.overlayWarn || !1, this.overlayCompatibilityHook = e.overlayCompatibilityHook || !1, this.overlayMethods = null !== (t = e.overlayMethods) && void 0 !== t ? t : i.ApplicationOverlayMethodFlags.DEFAULT, this.hook = null === (n = e.hook) || void 0 === n || n, this.aliases = e.aliases || [], this.publishers = e.publishers || [], this.developers = e.developers || [], this.primarySkuId = e.primarySkuId, this.storeListingSkuId = e.storeListingSkuId, this.guildId = e.guildId || null, this.guild = e.guild || null, this.thirdPartySkus = e.thirdPartySkus || [], this.executables = (e.executables || []).map(_), this.hashes = e.hashes || [], this.description = e.description || null, this.eulaId = e.eulaId || null, this.slug = e.slug || null, this.bot = e.bot || null, this.coverImage = e.coverImage || null, this.flags = null !== (r = e.flags) && void 0 !== r ? r : 0, this.tags = null !== (o = e.tags) && void 0 !== o ? o : [], this.maxParticipants = e.maxParticipants, this.embeddedActivityConfig = e.embedded_activity_config, this.type = e.type, this.team = e.team, this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl
  }
}