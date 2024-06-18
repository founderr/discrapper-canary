"use strict";
n(411104), n(570140);
var i = n(147913);
n(674588);
var r = n(751189),
  s = n(409059);
n(652898);
var o = n(728675);
n(701190);
var a = n(960904),
  l = n(830121);

function u(e) {
  let t = (0, l.ZP)(e.content);
  null != t && 0 !== t.length && t.forEach(e => {
    let {
      type: t,
      code: n
    } = e;
    if (t === a.g.INVITE);
    else if (t === a.g.TEMPLATE) null == s.Z.getGuildTemplate(n) && r.Z.resolveGuildTemplate(n);
    else if (t === a.g.BUILD_OVERRIDE || t === a.g.MANUAL_BUILD_OVERRIDE);
    else if (t === a.g.EVENT);
    else if (t === a.g.CHANNEL_LINK);
    else if (t === a.g.APP_DIRECTORY_PROFILE);
    else if (t === a.g.ACTIVITY_BOOKMARK);
    else if (t === a.g.EMBEDDED_ACTIVITY_INVITE);
    else if (t === a.g.GUILD_PRODUCT);
    else if (t === a.g.SERVER_SHOP);
    else if (t === a.g.QUESTS_EMBED);
    else if (t === a.g.APP_DIRECTORY_STOREFRONT);
    else if (t === a.g.APP_DIRECTORY_STOREFRONT_SKU);
    else throw Error("Unknown coded link type: ".concat(t))
  })
}
class _ extends i.Z {
  constructor() {
    super(), (0, o.Z)(this, u)
  }
}
t.Z = new _