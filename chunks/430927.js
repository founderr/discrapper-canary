i.d(e, {
    T: function () {
        return h;
    },
    o: function () {
        return d;
    }
});
var l = i(512722),
    t = i.n(l),
    a = i(287734),
    r = i(471253),
    s = i(922482),
    c = i(592125),
    o = i(19780),
    u = i(765305);
async function d(n, e) {
    let { entity_type: i } = n;
    switch (i) {
        case u.WX.STAGE_INSTANCE: {
            let e = o.Z.getChannelId(),
                i = c.Z.getChannel(n.channel_id);
            t()(null != i, 'could not find channel'), e !== i.id && (await s.TM(i, !0), await s.R5(i, null, !1)), await (0, r.RK)(i, !1, !0);
            break;
        }
        case u.WX.VOICE: {
            let e = o.Z.getChannelId(),
                i = c.Z.getChannel(n.channel_id);
            t()(null != i, 'could not find channel'), e !== i.id && a.default.selectVoiceChannel(i.id);
        }
    }
}
function h(n, e) {
    let { entity_type: i } = n;
    switch (i) {
        case u.WX.STAGE_INSTANCE:
        case u.WX.VOICE:
        case u.WX.EXTERNAL:
            null == e || e();
    }
    return Promise.resolve();
}
