n.d(t, {
    SD: function () {
        return _;
    },
    uZ: function () {
        return h;
    }
}),
    n(47120);
var r = n(911969),
    i = n(622449),
    a = n(768494),
    s = n(768581),
    o = n(823379),
    l = n(280501),
    u = n(790642),
    c = n(388032);
let d = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            t && null != e.id
                ? s.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48
                  })
                : void 0
    }),
    f = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? c.intl.string(c.t.fitPBQ) : c.intl.string(c.t.VCsUJi)),
    _ = (e, t, n) => {
        let a = (null == e ? void 0 : e.data.interactionType) === r.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === i.F.FAILED ? e.data.componentId : null;
        if (
            null !=
            (null != a
                ? (function (e, t) {
                      if (e.type === r.re.ACTION_ROW) {
                          var n;
                          return null !== (n = e.components.find((e) => e.id === t)) && void 0 !== n ? n : null;
                      }
                  })(n, a)
                : null)
        ) {
            var s;
            return null !== (s = null == t ? void 0 : t.interactionError) && void 0 !== s ? s : f(e);
        }
    },
    p = (e) => {
        switch (e) {
            case r.re.ACTION_ROW:
            case r.re.BUTTON:
            case r.re.STRING_SELECT:
            case r.re.TEXT_INPUT:
            case r.re.USER_SELECT:
            case r.re.ROLE_SELECT:
            case r.re.MENTIONABLE_SELECT:
            case r.re.CHANNEL_SELECT:
            case r.re.TEXT_DISPLAY:
            case r.re.MEDIA_GALLERY:
            case r.re.SEPARATOR:
                return !0;
            case r.re.CONTENT_INVENTORY_ENTRY:
                return (0, u.Io)('canShowComponent');
        }
    };
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e
        .map((e, n) =>
            (function e(t, n, i) {
                var s, u, f, _, h, g, E, v;
                if (!p(t.type)) return null;
                let { includeEmojiSrc: I } = n;
                switch (t.type) {
                    case r.re.ACTION_ROW: {
                        let a = t.components
                            .map((t, r) =>
                                (function (t, r) {
                                    let a = e(t, n, [...i, r]);
                                    return null == a ? null : a;
                                })(t, r)
                            )
                            .filter(o.lm);
                        return {
                            type: r.re.ACTION_ROW,
                            id: m(i),
                            components: a
                        };
                    }
                    case r.re.BUTTON: {
                        let e = null != t.emoji ? d(t.emoji, I) : void 0;
                        return {
                            type: r.re.BUTTON,
                            id: m(i),
                            customId: t.custom_id,
                            style: t.style,
                            disabled: t.disabled,
                            url: t.url,
                            label: t.label,
                            emoji: e,
                            skuId: t.sku_id
                        };
                    }
                    case r.re.STRING_SELECT:
                        return {
                            type: r.re.STRING_SELECT,
                            id: m(i),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            options: t.options.map((e) => ({
                                type: l.tM.STRING,
                                label: e.label,
                                value: e.value,
                                default: e.default,
                                description: e.description,
                                emoji: null != e.emoji ? d(e.emoji, I) : void 0
                            })),
                            placeholder: null !== (s = t.placeholder) && void 0 !== s ? s : c.intl.string(c.t.Otr6W1),
                            minValues: t.min_values,
                            maxValues: t.max_values
                        };
                    case r.re.TEXT_INPUT:
                        return {
                            type: t.type,
                            id: m(i),
                            style: t.style,
                            customId: t.custom_id,
                            label: t.label,
                            value: t.value,
                            placeholder: t.placeholder,
                            disabled: t.disabled,
                            required: null !== (u = t.required) && void 0 !== u && u,
                            minLength: t.min_length,
                            maxLength: t.max_length
                        };
                    case r.re.USER_SELECT:
                        return {
                            type: r.re.USER_SELECT,
                            id: m(i),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            placeholder: null !== (f = t.placeholder) && void 0 !== f ? f : c.intl.string(c.t.Otr6W1),
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values
                        };
                    case r.re.ROLE_SELECT:
                        return {
                            type: r.re.ROLE_SELECT,
                            id: m(i),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            placeholder: null !== (_ = t.placeholder) && void 0 !== _ ? _ : c.intl.string(c.t.Otr6W1),
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values
                        };
                    case r.re.MENTIONABLE_SELECT:
                        return {
                            type: r.re.MENTIONABLE_SELECT,
                            id: m(i),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            placeholder: null !== (h = t.placeholder) && void 0 !== h ? h : c.intl.string(c.t.Otr6W1),
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values
                        };
                    case r.re.CHANNEL_SELECT:
                        return {
                            type: r.re.CHANNEL_SELECT,
                            id: m(i),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            placeholder: null !== (g = t.placeholder) && void 0 !== g ? g : c.intl.string(c.t.Otr6W1),
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            channelTypes: t.channel_types,
                            defaultValues: t.default_values
                        };
                    case r.re.TEXT_DISPLAY:
                        return {
                            type: r.re.TEXT_DISPLAY,
                            id: m(i),
                            content: t.content
                        };
                    case r.re.MEDIA_GALLERY:
                        return {
                            type: r.re.MEDIA_GALLERY,
                            id: m(i),
                            items: t.items.map((e) => ({
                                media: (0, a.ym)(e.media),
                                description: e.description,
                                spoiler: e.spoiler
                            }))
                        };
                    case r.re.SEPARATOR:
                        return {
                            type: r.re.SEPARATOR,
                            id: m(i),
                            divider: null === (E = t.divider) || void 0 === E || E,
                            spacing: null !== (v = t.spacing) && void 0 !== v ? v : r.US.SMALL
                        };
                    case r.re.CONTENT_INVENTORY_ENTRY:
                        if (null == t.content_inventory_entry) return null;
                        return {
                            type: r.re.CONTENT_INVENTORY_ENTRY,
                            id: m(i),
                            contentInventoryEntry: t.content_inventory_entry
                        };
                    default:
                        return null;
                }
            })(e, t, [n])
        )
        .filter((e) => null != e);
}
function m(e) {
    return (0, l.FF)(e.join(','));
}
