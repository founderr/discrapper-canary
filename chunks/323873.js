var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(752305),
    c = n(957730),
    d = n(695346),
    f = n(375954);
let _ = {},
    h = {};
class p extends (s = o.ZP.Store) {
    isEditing(e, t) {
        var n;
        return (null === (n = _[e]) || void 0 === n ? void 0 : n.messageId) === t;
    }
    isEditingAny(e) {
        return null != _[e];
    }
    getEditingTextValue(e) {
        var t;
        return null === (t = _[e]) || void 0 === t ? void 0 : t.textValue;
    }
    getEditingRichValue(e) {
        var t;
        return null === (t = _[e]) || void 0 === t ? void 0 : t.richValue;
    }
    getEditingMessageId(e) {
        var t;
        return null === (t = _[e]) || void 0 === t ? void 0 : t.messageId;
    }
    getEditingMessage(e) {
        let t = _[e];
        return null != t && null != t.messageId ? f.Z.getMessage(e, t.messageId) : null;
    }
    getEditActionSource(e) {
        return h[e];
    }
}
(a = 'EditMessageStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new p(l.Z, {
        MESSAGE_START_EDIT: function (e) {
            let { channelId: t, messageId: n, content: r, source: i } = e,
                a = d.dN.getSetting(),
                s = c.ZP.unparse(r, t);
            (_[t] = {
                channelId: t,
                messageId: n,
                textValue: s,
                richValue: (0, u.JM)(a ? s : r)
            }),
                (h[t] = i);
        },
        MESSAGE_UPDATE_EDIT: function (e) {
            let { channelId: t, textValue: n, richValue: r } = e,
                i = _[t];
            if (null == i) return !1;
            _[t] = {
                ...i,
                textValue: n,
                richValue: r
            };
        },
        MESSAGE_END_EDIT: function (e) {
            let { channelId: t } = e;
            if (null == t || null == _[t]) return !1;
            delete _[t], delete h[t];
        }
    }));
