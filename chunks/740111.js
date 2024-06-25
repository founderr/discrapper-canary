n.d(t, {
  Wc: function() {
    return s
  },
  xY: function() {
    return _
  }
}), n(47120), n(411104), n(653041);
var s, i, l = n(230367),
  a = n(320215),
  r = n(240773),
  o = n(495852);
(i = s || (s = {}))[i.UNSPECIFIED = 0] = "UNSPECIFIED", i[i.OPEN_MARKETING_PAGE = 1] = "OPEN_MARKETING_PAGE", i[i.OPEN_TIER_2_PAYMENT_MODAL = 2] = "OPEN_TIER_2_PAYMENT_MODAL";
class c extends o.C {
  create(e) {
    let t = {
      header: "",
      pill: "",
      body: "",
      imageLink: "",
      imageLinkLightTheme: ""
    };
    return globalThis.Object.defineProperty(t, r.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, s) {
    let i = null != s ? s : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, s] = e.tag();
      switch (t) {
        case 1:
          i.header = e.string();
          break;
        case 2:
          i.pill = e.string();
          break;
        case 3:
          i.body = e.string();
          break;
        case 4:
          i.imageLink = e.string();
          break;
        case 5:
          i.imageLinkLightTheme = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(s, ") for ").concat(this.typeName));
          let r = e.skip(s);
          !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, i, t, s, r)
      }
    }
    return i
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.header && t.tag(1, l.TD.LengthDelimited).string(e.header), "" !== e.pill && t.tag(2, l.TD.LengthDelimited).string(e.pill), "" !== e.body && t.tag(3, l.TD.LengthDelimited).string(e.body), "" !== e.imageLink && t.tag(4, l.TD.LengthDelimited).string(e.imageLink), "" !== e.imageLinkLightTheme && t.tag(5, l.TD.LengthDelimited).string(e.imageLinkLightTheme);
    let s = n.writeUnknownFields;
    return !1 !== s && (!0 == s ? l.z.onWrite : s)(this.typeName, e, t), t
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
let u = new c;
class d extends o.C {
  create(e) {
    let t = {
      copy: "",
      buttonAction: 0
    };
    return globalThis.Object.defineProperty(t, r.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, s) {
    let i = null != s ? s : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, s] = e.tag();
      switch (t) {
        case 1:
          i.copy = e.string();
          break;
        case 2:
          i.buttonAction = e.int32();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(s, ") for ").concat(this.typeName));
          let r = e.skip(s);
          !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, i, t, s, r)
      }
    }
    return i
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.copy && t.tag(1, l.TD.LengthDelimited).string(e.copy), 0 !== e.buttonAction && t.tag(2, l.TD.Varint).int32(e.buttonAction);
    let s = n.writeUnknownFields;
    return !1 !== s && (!0 == s ? l.z.onWrite : s)(this.typeName, e, t), t
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
      T: () => ["discord_protos.premium_marketing.v1.ButtonAction", s, "BUTTON_ACTION_"]
    }])
  }
}
let E = new d;
class h extends o.C {
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
    return globalThis.Object.defineProperty(t, r.C, {
      enumerable: !1,
      value: this
    }), void 0 !== e && (0, a.l)(this, t, e), t
  }
  internalBinaryRead(e, t, n, s) {
    let i = null != s ? s : this.create(),
      a = e.pos + t;
    for (; e.pos < a;) {
      let [t, s] = e.tag();
      switch (t) {
        case 1:
          i.header = e.string();
          break;
        case 2:
          i.subheader = e.string();
          break;
        case 3:
          i.videoLink = e.string();
          break;
        case 4:
          i.helpArticleId = e.string();
          break;
        case 5:
          i.featureCards.push(u.internalBinaryRead(e, e.uint32(), n));
          break;
        case 6:
          i.button = E.internalBinaryRead(e, e.uint32(), n, i.button);
          break;
        case 7:
          i.dismissKey = e.string();
          break;
        case 8:
          i.heroArtVideoLinkLightTheme = e.string();
          break;
        case 9:
          i.heroArtImageLinkDarkTheme = e.string();
          break;
        case 10:
          i.heroArtImageLinkLightTheme = e.string();
          break;
        case 11:
          i.modalTopPill = e.string();
          break;
        default:
          let a = n.readUnknownField;
          if ("throw" === a) throw new globalThis.Error("Unknown field ".concat(t, " (wire type ").concat(s, ") for ").concat(this.typeName));
          let r = e.skip(s);
          !1 !== a && (!0 === a ? l.z.onRead : a)(this.typeName, i, t, s, r)
      }
    }
    return i
  }
  internalBinaryWrite(e, t, n) {
    "" !== e.header && t.tag(1, l.TD.LengthDelimited).string(e.header), "" !== e.subheader && t.tag(2, l.TD.LengthDelimited).string(e.subheader), "" !== e.videoLink && t.tag(3, l.TD.LengthDelimited).string(e.videoLink), "" !== e.helpArticleId && t.tag(4, l.TD.LengthDelimited).string(e.helpArticleId);
    for (let s = 0; s < e.featureCards.length; s++) u.internalBinaryWrite(e.featureCards[s], t.tag(5, l.TD.LengthDelimited).fork(), n).join();
    e.button && E.internalBinaryWrite(e.button, t.tag(6, l.TD.LengthDelimited).fork(), n).join(), "" !== e.dismissKey && t.tag(7, l.TD.LengthDelimited).string(e.dismissKey), "" !== e.heroArtVideoLinkLightTheme && t.tag(8, l.TD.LengthDelimited).string(e.heroArtVideoLinkLightTheme), "" !== e.heroArtImageLinkDarkTheme && t.tag(9, l.TD.LengthDelimited).string(e.heroArtImageLinkDarkTheme), "" !== e.heroArtImageLinkLightTheme && t.tag(10, l.TD.LengthDelimited).string(e.heroArtImageLinkLightTheme), "" !== e.modalTopPill && t.tag(11, l.TD.LengthDelimited).string(e.modalTopPill);
    let s = n.writeUnknownFields;
    return !1 !== s && (!0 == s ? l.z.onWrite : s)(this.typeName, e, t), t
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
      T: () => u
    }, {
      no: 6,
      name: "button",
      kind: "message",
      T: () => E
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
let _ = new h