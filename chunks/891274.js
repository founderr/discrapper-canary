var r = n(411104);
n(570140);
var i = n(147913);
n(674588);
var a = n(751189),
    o = n(409059);
n(652898);
var s = n(728675);
n(701190);
var l = n(960904),
    u = n(830121);
function c(e) {
    let t = (0, u.ZP)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            if (t === l.g.INVITE);
            else if (t === l.g.TEMPLATE) null == o.Z.getGuildTemplate(n) && a.Z.resolveGuildTemplate(n);
            else if (t === l.g.BUILD_OVERRIDE || t === l.g.MANUAL_BUILD_OVERRIDE);
            else if (t === l.g.EVENT);
            else if (t === l.g.CHANNEL_LINK);
            else if (t === l.g.APP_DIRECTORY_PROFILE);
            else if (t === l.g.ACTIVITY_BOOKMARK);
            else if (t === l.g.EMBEDDED_ACTIVITY_INVITE);
            else if (t === l.g.GUILD_PRODUCT);
            else if (t === l.g.SERVER_SHOP);
            else if (t === l.g.QUESTS_EMBED);
            else if (t === l.g.APP_DIRECTORY_STOREFRONT);
            else if (t === l.g.APP_DIRECTORY_STOREFRONT_SKU);
            else throw Error('Unknown coded link type: '.concat(t));
        });
}
class d extends i.Z {
    constructor() {
        super(), (0, s.Z)(this, c);
    }
}
t.Z = new d();
