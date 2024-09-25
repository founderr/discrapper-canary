n.d(t, {
    SD: function () {
        return f;
    },
    uZ: function () {
        return I;
    }
});
var r = n(47120);
var i = n(911969),
    a = n(622449),
    o = n(768494),
    s = n(768581),
    l = n(823379),
    u = n(280501),
    c = n(790642),
    d = n(689938);
let _ = (e, t) => ({
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
    E = (e) => ((null == e ? void 0 : e.errorCode) === 429 ? d.Z.Messages.INTERACTION_RATE_LIMITED : d.Z.Messages.APPLICATION_COMMAND_FAILED),
    f = (e, t, n) => {
        let r = (null == e ? void 0 : e.data.interactionType) === i.B8.MESSAGE_COMPONENT && (null == e ? void 0 : e.state) === a.F.FAILED ? e.data.componentId : null;
        if (null != (null != r ? m(n, r) : null)) {
            var o;
            return null !== (o = null == t ? void 0 : t.interactionError) && void 0 !== o ? o : E(e);
        }
    },
    h = (e) => {
        switch (e) {
            case i.re.ACTION_ROW:
            case i.re.BUTTON:
            case i.re.STRING_SELECT:
            case i.re.INPUT_TEXT:
            case i.re.USER_SELECT:
            case i.re.ROLE_SELECT:
            case i.re.MENTIONABLE_SELECT:
            case i.re.CHANNEL_SELECT:
            case i.re.TEXT:
            case i.re.MEDIA_GALLERY:
            case i.re.SEPARATOR:
                return !0;
            case i.re.CONTENT_INVENTORY_ENTRY:
                return (0, c.Io)('canShowComponent');
        }
    };
function p(e, t) {
    if (((e[t.id] = t), t.type === ComponentType.ACTION_ROW)) t.components.forEach((t) => p(e, t));
}
function m(e, t) {
    if (e.type === i.re.ACTION_ROW) {
        var n;
        return null !== (n = e.components.find((e) => e.id === t)) && void 0 !== n ? n : null;
    }
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return e.map((e, n) => T(e, t, [n])).filter((e) => null != e);
}
function T(e, t, n) {
    var r, a, s, c, E, f, p, m;
    if (!h(e.type)) return null;
    function I(e, r) {
        let i = T(e, t, [...n, r]);
        return null == i ? null : i;
    }
    let { includeEmojiSrc: S } = t;
    switch (e.type) {
        case i.re.ACTION_ROW: {
            let t = e.components.map((e, t) => I(e, t)).filter(l.lm);
            return {
                type: i.re.ACTION_ROW,
                id: g(n),
                components: t
            };
        }
        case i.re.BUTTON: {
            let t = null != e.emoji ? _(e.emoji, S) : void 0;
            return {
                type: i.re.BUTTON,
                id: g(n),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: t,
                skuId: e.sku_id
            };
        }
        case i.re.STRING_SELECT:
            return {
                type: i.re.STRING_SELECT,
                id: g(n),
                customId: e.custom_id,
                disabled: e.disabled,
                options: e.options.map((e) => ({
                    type: u.tM.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? _(e.emoji, S) : void 0
                })),
                placeholder: null !== (r = e.placeholder) && void 0 !== r ? r : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: e.min_values,
                maxValues: e.max_values
            };
        case i.re.INPUT_TEXT:
            return {
                type: e.type,
                id: g(n),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: null !== (a = e.required) && void 0 !== a && a,
                minLength: e.min_length,
                maxLength: e.max_length
            };
        case i.re.USER_SELECT:
            return {
                type: i.re.USER_SELECT,
                id: g(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (s = e.placeholder) && void 0 !== s ? s : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.ROLE_SELECT:
            return {
                type: i.re.ROLE_SELECT,
                id: g(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (c = e.placeholder) && void 0 !== c ? c : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.MENTIONABLE_SELECT:
            return {
                type: i.re.MENTIONABLE_SELECT,
                id: g(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (E = e.placeholder) && void 0 !== E ? E : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values
            };
        case i.re.CHANNEL_SELECT:
            return {
                type: i.re.CHANNEL_SELECT,
                id: g(n),
                customId: e.custom_id,
                disabled: e.disabled,
                placeholder: null !== (f = e.placeholder) && void 0 !== f ? f : d.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values
            };
        case i.re.TEXT:
            return {
                type: i.re.TEXT,
                id: g(n),
                content: e.content
            };
        case i.re.MEDIA_GALLERY:
            return {
                type: i.re.MEDIA_GALLERY,
                id: g(n),
                items: e.items.map((e) => ({
                    media: (0, o.ym)(e.media),
                    description: e.description,
                    spoiler: e.spoiler
                }))
            };
        case i.re.SEPARATOR:
            return {
                type: i.re.SEPARATOR,
                id: g(n),
                divider: null === (p = e.divider) || void 0 === p || p,
                spacing: null !== (m = e.spacing) && void 0 !== m ? m : i.US.SMALL
            };
        case i.re.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return {
                type: i.re.CONTENT_INVENTORY_ENTRY,
                id: g(n),
                contentInventoryEntry: e.content_inventory_entry
            };
        default:
            return null;
    }
}
function g(e) {
    return (0, u.FF)(e.join(','));
}
