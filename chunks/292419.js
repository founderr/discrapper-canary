r.d(n, {
    SD: function () {
        return p;
    },
    uZ: function () {
        return v;
    }
});
var i = r(47120);
var a = r(911969),
    s = r(622449),
    o = r(768494),
    l = r(768581),
    u = r(823379),
    c = r(280501),
    d = r(790642),
    f = r(388032);
let _ = (e, n) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src:
            n && null != e.id
                ? l.ZP.getEmojiURL({
                      id: e.id,
                      animated: e.animated || !1,
                      size: 48
                  })
                : void 0
    }),
    h = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? f.intl.string(f.t.fitPBQ) : f.intl.string(f.t.VCsUJi)),
    p = (e, n, r) => {
        let i = (null == e ? void 0 : e.data.interactionType) === a.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === s.F.FAILED ? e.data.componentId : null;
        if (null != (null != i ? E(r, i) : null)) {
            var o;
            return null !== (o = null == n ? void 0 : n.interactionError) && void 0 !== o ? o : h(e);
        }
    },
    m = (e) => {
        switch (e) {
            case a.re.ACTION_ROW:
            case a.re.BUTTON:
            case a.re.STRING_SELECT:
            case a.re.TEXT_INPUT:
            case a.re.USER_SELECT:
            case a.re.ROLE_SELECT:
            case a.re.MENTIONABLE_SELECT:
            case a.re.CHANNEL_SELECT:
            case a.re.SECTION:
            case a.re.TEXT_DISPLAY:
            case a.re.THUMBNAIL:
            case a.re.MEDIA_GALLERY:
            case a.re.FILE:
            case a.re.SEPARATOR:
                return !0;
            case a.re.CONTENT_INVENTORY_ENTRY:
                return (0, d.Io)('canShowComponent');
        }
    };
function g(e, n) {
    switch (((e[n.id] = n), n.type)) {
        case ComponentType.ACTION_ROW:
            n.components.forEach((n) => g(e, n));
            break;
        case ComponentType.SECTION:
            n.components.forEach((n) => g(e, n)), g(e, n.accessory);
    }
}
function E(e, n) {
    var r, i;
    switch (e.type) {
        case a.re.ACTION_ROW:
            return null !== (r = e.components.find((e) => e.id === n)) && void 0 !== r ? r : null;
        case a.re.SECTION:
            if (e.accessory.id === n) return e.accessory;
            return null !== (i = e.components.find((e) => e.id === n)) && void 0 !== i ? i : null;
    }
}
function v(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, r) => I(e, n, [r])).filter((e) => null != e);
}
function I(e, n, r) {
    var i, s, l, d, h, p, g, E;
    if (!m(e.type)) return null;
    function v(e, i) {
        let a = I(e, n, [...r, i]);
        return null == a ? null : a;
    }
    let { includeEmojiSrc: b } = n;
    switch (e.type) {
        case a.re.ACTION_ROW: {
            let n = e.components.map((e, n) => v(e, n)).filter(u.lm);
            return {
                type: a.re.ACTION_ROW,
                id: T(r),
                components: n
            };
        }
        case a.re.BUTTON: {
            let n = null != e.emoji ? _(e.emoji, b) : void 0;
            return {
                type: a.re.BUTTON,
                id: T(r),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id
            };
        }
        case a.re.STRING_SELECT:
            return {
                type: a.re.STRING_SELECT,
                id: T(r),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: c.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? _(e.emoji, b) : void 0
                })),
                placeholder: null !== (i = e.placeholder) && void 0 !== i ? i : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case a.re.TEXT_INPUT:
            return {
                type: e.type,
                id: T(r),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null !== (s = e.required) && void 0 !== s && s,
                minLength: e.min_length,
                maxLength: e.max_length
            };
        case a.re.USER_SELECT:
            return {
                type: a.re.USER_SELECT,
                id: T(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (l = e.placeholder) && void 0 !== l ? l : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case a.re.ROLE_SELECT:
            return {
                type: a.re.ROLE_SELECT,
                id: T(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (d = e.placeholder) && void 0 !== d ? d : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case a.re.MENTIONABLE_SELECT:
            return {
                type: a.re.MENTIONABLE_SELECT,
                id: T(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (h = e.placeholder) && void 0 !== h ? h : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case a.re.CHANNEL_SELECT:
            return {
                type: a.re.CHANNEL_SELECT,
                id: T(r),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (p = e.placeholder) && void 0 !== p ? p : f.intl.string(f.t.Otr6W1),
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case a.re.SECTION: {
            let n = e.components.map((e, n) => v(e, n)).filter(u.lm),
                i = v(e.accessory, n.length);
            if (0 === n.length || null == i) return null;
            return {
                type: a.re.SECTION,
                id: T(r),
                components: n,
                accessory: i
            };
        }
        case a.re.TEXT_DISPLAY:
            return {
                type: a.re.TEXT_DISPLAY,
                id: T(r),
                content: e.content
            };
        case a.re.THUMBNAIL:
            return {
                type: a.re.THUMBNAIL,
                id: T(r),
                image: (0, o.ym)(e.image),
                description: e.description,
                spoiler: e.spoiler
            };
        case a.re.MEDIA_GALLERY:
            return {
                type: a.re.MEDIA_GALLERY,
                id: T(r),
                items: e.items.map((e) => ({
                    media: (0, o.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case a.re.FILE:
            return {
                type: a.re.FILE,
                id: T(r),
                file: (0, o.ym)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler
            };
        case a.re.SEPARATOR:
            return {
                type: a.re.SEPARATOR,
                id: T(r),
                divider: null === (g = e.divider) || void 0 === g || g,
                spacing: null !== (E = e.spacing) && void 0 !== E ? E : a.US.SMALL
            };
        case a.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: a.re.CONTENT_INVENTORY_ENTRY,
                id: T(r),
                contentInventoryEntry: e.content_inventory_entry
            };
        default:
            return null;
    }
}
function T(e) {
    return (0, c.FF)(e.join(','));
}
