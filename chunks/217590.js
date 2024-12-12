r.d(n, {
    Iw: function () {
        return m;
    },
    On: function () {
        return p;
    },
    Yk: function () {
        return h;
    },
    cQ: function () {
        return d;
    },
    ev: function () {
        return c;
    },
    m1: function () {
        return _;
    },
    n8: function () {
        return f;
    }
});
var i = r(367907),
    a = r(626135),
    s = r(373228),
    o = r(981631),
    l = r(957825),
    u = r(474936);
let c = (e) => {
        let { containerWidth: n, favoriteStickers: r, frequentlyUsedStickers: a, guildStickers: u, stickersTotal: c } = e;
        i.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_OPENED, {
            width: n,
            tab: l.X1.STICKER,
            badged: !1,
            num_expressions_favorites: r.length,
            num_animated_expressions_favorites: r.filter((e) => (0, s.aQ)(e.format_type)).length,
            num_custom_expressions_favorites: r.filter((e) => (0, s.z)(e.type)).length,
            num_standard_expressions_favorites: r.filter((e) => !(0, s.z)(e.type)).length,
            num_expressions_frecent: a.length,
            num_custom_expressions_frecent: a.filter((e) => (0, s.z)(e.type)).length,
            num_animated_expressions_frecent: a.filter((e) => (0, s.aQ)(e.format_type)).length,
            num_standard_expressions_frecent: a.filter((e) => !(0, s.z)(e.type)).length,
            num_current_guild_expressions: u.length,
            num_custom_expressions_total: c
        });
    },
    d = (e) => {
        let n,
            { sticker: r, location: a } = e;
        r.type === s.n0.GUILD && (n = r.guild_id),
            i.ZP.trackWithMetadata(o.rMx.EXPRESSION_FAVORITED, {
                location: a,
                expression_type: l.X1.STICKER,
                expression_id: r.id,
                expression_name: r.name,
                expression_guild_id: n,
                is_animated: (0, s.aQ)(r.format_type),
                is_custom: (0, s.z)(r.type)
            });
    },
    f = () => {
        a.default.track(o.rMx.SEARCH_STARTED, { search_type: o.aib.STICKER });
    },
    _ = (e, n, r) => {
        i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_VIEWED, {
            search_type: o.aib.STICKER,
            total_results: n,
            query: e,
            is_suggestion: r
        });
    },
    h = (e, n, r) => {
        let a;
        let { sticker: l } = e;
        l.type === s.n0.GUILD && (a = l.guild_id),
            i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_SELECTED, {
                load_id: l.id,
                search_type: o.aib.STICKER,
                source_object: 'Sticker Picker',
                total_results: r,
                expression_guild_id: a,
                sticker_id: l.id,
                query: n
            });
    },
    p = (e) => {
        let n;
        let { sticker: r, category: a } = e;
        r.type === s.n0.GUILD && (n = r.guild_id),
            i.ZP.trackWithMetadata(o.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: u.cd.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: r.id,
                expression_name: r.name,
                expression_picker_section: a,
                expression_guild_id: n,
                is_animated: (0, s.aQ)(r.format_type),
                is_custom: (0, s.z)(r.type)
            });
    },
    m = (e) => {
        if (null != e && '' !== e)
            i.ZP.trackWithMetadata(o.rMx.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: o.aib.STICKER,
                source_object: 'Sticker Picker'
            });
    };
