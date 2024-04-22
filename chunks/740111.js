"use strict";
a.r(t), a.d(t, {
  AnnouncementModalVariant1Properties: function() {
    return c
  },
  ButtonAction: function() {
    return n
  }
}), a("47120"), a("411104"), a("653041");
var n, s, l = a("578012");
(s = n || (n = {}))[s.UNSPECIFIED = 0] = "UNSPECIFIED", s[s.OPEN_MARKETING_PAGE = 1] = "OPEN_MARKETING_PAGE", s[s.OPEN_TIER_2_PAYMENT_MODAL = 2] = "OPEN_TIER_2_PAYMENT_MODAL";
class i extends l.MessageType {
  create(e) {
    let t = {
      header: "",
      pill: "",
      body: "",
      imageLink: "",
      imageLinkLightTheme: ""
    };
    return globalThis.Object.defineProperty(t, l.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, l.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, a, n) {
    let s = null != n ? n : this.create(),
      i = e.pos + t;
    for (; e.pos < i;) {
      let [t, n] = e.tag();
      switch (t) {
        case 1:
          s.header = e.string();
          break;
        case 2:
          s.pill = e.string();
          break;
        case 3:
          s.body = e.string();
          break;
        case 4:
          s.imageLink = e.string();
          break;
        case 5:
          s.imageLinkLightTheme = e.string();
          break;
        default:
          let i = a.readUnknownField;
          if ("throw" === i) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(n, ") for ").concat(this.typeName));
          let r = e.skip(n);
          !1 !== i && (!0 === i ? l.UnknownFieldHandler.onRead : i)(this.typeName, s, t, n, r)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, a) {
    "" !== e.header && t.tag(1, l.WireType.LengthDelimited).string(e.header), "" !== e.pill && t.tag(2, l.WireType.LengthDelimited).string(e.pill), "" !== e.body && t.tag(3, l.WireType.LengthDelimited).string(e.body), "" !== e.imageLink && t.tag(4, l.WireType.LengthDelimited).string(e.imageLink), "" !== e.imageLinkLightTheme && t.tag(5, l.WireType.LengthDelimited).string(e.imageLinkLightTheme);
    let n = a.writeUnknownFields;
    return !1 !== n && (!0 == n ? l.UnknownFieldHandler.onWrite : n)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.FeatureCard", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "pill",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "body",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "image_link",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "image_link_light_theme",
      kind: "scalar",
      T: 9
    }])
  }
}
let r = new i;
class o extends l.MessageType {
  create(e) {
    let t = {
      copy: "",
      buttonAction: 0
    };
    return globalThis.Object.defineProperty(t, l.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, l.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, a, n) {
    let s = null != n ? n : this.create(),
      i = e.pos + t;
    for (; e.pos < i;) {
      let [t, n] = e.tag();
      switch (t) {
        case 1:
          s.copy = e.string();
          break;
        case 2:
          s.buttonAction = e.int32();
          break;
        default:
          let i = a.readUnknownField;
          if ("throw" === i) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(n, ") for ").concat(this.typeName));
          let r = e.skip(n);
          !1 !== i && (!0 === i ? l.UnknownFieldHandler.onRead : i)(this.typeName, s, t, n, r)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, a) {
    "" !== e.copy && t.tag(1, l.WireType.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, l.WireType.Varint).int32(e.buttonAction);
    let n = a.writeUnknownFields;
    return !1 !== n && (!0 == n ? l.UnknownFieldHandler.onWrite : n)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.SubscriptionButton", [{
      no: 1,
      name: "copy",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "button_action",
      kind: "enum",
      T: () => ["discord_protos.premium_marketing.v1.ButtonAction", n, "BUTTON_ACTION_"]
    }])
  }
}
let u = new o;
class d extends l.MessageType {
  create(e) {
    let t = {
      header: "",
      subheader: "",
      videoLink: "",
      helpArticleId: "",
      featureCards: [],
      dismissKey: "",
      heroArtVideoLinkLightTheme: "",
      heroArtImageLinkDarkTheme: "",
      heroArtImageLinkLightTheme: "",
      modalTopPill: ""
    };
    return globalThis.Object.defineProperty(t, l.MESSAGE_TYPE, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, l.reflectionMergePartial)(this, t, e), t
  }
  internalBinaryRead(e, t, a, n) {
    let s = null != n ? n : this.create(),
      i = e.pos + t;
    for (; e.pos < i;) {
      let [t, n] = e.tag();
      switch (t) {
        case 1:
          s.header = e.string();
          break;
        case 2:
          s.subheader = e.string();
          break;
        case 3:
          s.videoLink = e.string();
          break;
        case 4:
          s.helpArticleId = e.string();
          break;
        case 5:
          s.featureCards.push(r.internalBinaryRead(e, e.uint32(), a));
          break;
        case 6:
          s.button = u.internalBinaryRead(e, e.uint32(), a, s.button);
          break;
        case 7:
          s.dismissKey = e.string();
          break;
        case 8:
          s.heroArtVideoLinkLightTheme = e.string();
          break;
        case 9:
          s.heroArtImageLinkDarkTheme = e.string();
          break;
        case 10:
          s.heroArtImageLinkLightTheme = e.string();
          break;
        case 11:
          s.modalTopPill = e.string();
          break;
        default:
          let i = a.readUnknownField;
          if ("throw" === i) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(n, ") for ").concat(this.typeName));
          let o = e.skip(n);
          !1 !== i && (!0 === i ? l.UnknownFieldHandler.onRead : i)(this.typeName, s, t, n, o)
      }
    }
    return s
  }
  internalBinaryWrite(e, t, a) {
    "" !== e.header && t.tag(1, l.WireType.LengthDelimited).string(e.header), "" !== e.subheader && t.tag(2, l.WireType.LengthDelimited).string(e.subheader), "" !== e.videoLink && t.tag(3, l.WireType.LengthDelimited).string(e.videoLink), "" !== e.helpArticleId && t.tag(4, l.WireType.LengthDelimited).string(e.helpArticleId);
    for (let n = 0; n < e.featureCards.length; n++) r.internalBinaryWrite(e.featureCards[n], t.tag(5, l.WireType.LengthDelimited).fork(), a).join();
    e.button && u.internalBinaryWrite(e.button, t.tag(6, l.WireType.LengthDelimited).fork(), a).join(), "" !== e.dismissKey && t.tag(7, l.WireType.LengthDelimited).string(e.dismissKey), "" !== e.heroArtVideoLinkLightTheme && t.tag(8, l.WireType.LengthDelimited).string(e.heroArtVideoLinkLightTheme), "" !== e.heroArtImageLinkDarkTheme && t.tag(9, l.WireType.LengthDelimited).string(e.heroArtImageLinkDarkTheme), "" !== e.heroArtImageLinkLightTheme && t.tag(10, l.WireType.LengthDelimited).string(e.heroArtImageLinkLightTheme), "" !== e.modalTopPill && t.tag(11, l.WireType.LengthDelimited).string(e.modalTopPill);
    let n = a.writeUnknownFields;
    return !1 !== n && (!0 == n ? l.UnknownFieldHandler.onWrite : n)(this.typeName, e, t), t
  }
  constructor() {
    super("discord_protos.premium_marketing.v1.AnnouncementModalVariant1Properties", [{
      no: 1,
      name: "header",
      kind: "scalar",
      T: 9
    }, {
      no: 2,
      name: "subheader",
      kind: "scalar",
      T: 9
    }, {
      no: 3,
      name: "video_link",
      kind: "scalar",
      T: 9
    }, {
      no: 4,
      name: "help_article_id",
      kind: "scalar",
      T: 9
    }, {
      no: 5,
      name: "feature_cards",
      kind: "message",
      repeat: 1,
      T: () => r
    }, {
      no: 6,
      name: "button",
      kind: "message",
      T: () => u
    }, {
      no: 7,
      name: "dismiss_key",
      kind: "scalar",
      T: 9
    }, {
      no: 8,
      name: "hero_art_video_link_light_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 9,
      name: "hero_art_image_link_dark_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 10,
      name: "hero_art_image_link_light_theme",
      kind: "scalar",
      T: 9
    }, {
      no: 11,
      name: "modal_top_pill",
      kind: "scalar",
      T: 9
    }])
  }
}
let c = new d