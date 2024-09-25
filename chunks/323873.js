var r,
    i = n(442837),
    a = n(570140),
    o = n(752305),
    s = n(957730),
    l = n(695346),
    u = n(375954);
function c(e, t, n) {
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
let d = {},
    _ = {};
function E(e) {
    let { channelId: t, messageId: n, content: r, source: i } = e,
        a = l.dN.getSetting(),
        u = s.ZP.unparse(r, t);
    (d[t] = {
        channelId: t,
        messageId: n,
        textValue: u,
        richValue: (0, o.JM)(a ? u : r)
    }),
        (_[t] = i);
}
function f(e) {
    let { channelId: t, textValue: n, richValue: r } = e,
        i = d[t];
    if (null == i) return !1;
    d[t] = {
        ...i,
        textValue: n,
        richValue: r
    };
}
function h(e) {
    let { channelId: t } = e;
    if (null == t || null == d[t]) return !1;
    delete d[t], delete _[t];
}
class p extends (r = i.ZP.Store) {
    isEditing(e, t) {
        var n;
        return (null === (n = d[e]) || void 0 === n ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != d[e];
    }
    getEditingTextValue(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null === (t = d[e]) || void 0 === t ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = d[e];
        return null != t && null != t.messageId ? u.Z.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return _[e];
    }
}
c(p, 'displayName', 'EditMessageStore'),
    (t.Z = new p(a.Z, {
        MESSAGE_START_EDIT: E,
        MESSAGE_UPDATE_EDIT: f,
        MESSAGE_END_EDIT: h
    }));
