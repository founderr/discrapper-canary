n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(100621),
    a = n(442837),
    l = n(481060),
    o = n(619915),
    c = n(554747),
    d = n(373274),
    u = n(315174),
    h = n(840780),
    p = n(905423),
    f = n(680089),
    g = n(58468),
    m = n(796974),
    v = n(324067),
    E = n(984933),
    _ = n(888369),
    x = n(430824),
    Z = n(496675),
    S = n(878884),
    I = n(19780),
    C = n(944486),
    y = n(9156),
    N = n(938475),
    T = n(518084),
    b = n(669083),
    O = n(711553),
    A = n(981631),
    L = n(647086),
    j = n(388032),
    P = n(867144);
function R(e, t, n) {
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
let w = 54;
class M extends r.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t } = e;
        return null == t || null == t.banner
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        let { guildId: e } = this.props,
            { scrollTop: t } = m.Z.getGuildDimensions(e);
        this.setAnimatedValue(null != t ? t : 0);
    }
    componentDidUpdate(e) {
        let { guild: t, guildId: n } = this.props;
        if (e.guild !== t) {
            let { scrollTop: e } = m.Z.getGuildDimensions(n);
            this.setAnimatedValue(null != e ? e : 0);
        }
    }
    renderSettings(e) {
        let { closePopout: t } = e;
        return (0, i.jsx)(b.Z, { onClose: t });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null == t ? void 0 : t.hasCommunityInfoSubheader();
        if (null != t && (null != t.banner || !!n)) null != t.banner ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForCommunityInfo(e);
    }
    setAnimatedValueForBanner(e) {
        let { renderBanner: t, communityInfoVisible: n, bannerVisible: i, controller: r } = this.state;
        ((e >= w && i) || (e < w && !i)) && (i = !i),
            ((e >= 78 && !t) || (e < 78 && t)) && (t = !t),
            (n = i),
            (t !== this.state.renderBanner || i !== this.state.bannerVisible || n !== this.state.communityInfoVisible) &&
                this.setState({
                    renderBanner: t,
                    bannerVisible: i,
                    communityInfoVisible: n
                }),
            r
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 78)),
                    immediate: !0
                })
                .start();
    }
    setAnimatedValueForCommunityInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && this.setState({ communityInfoVisible: !t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    render() {
        let { onDragStart: e, ...t } = this.props,
            { guild: n } = t,
            { controller: r, renderBanner: s, bannerVisible: a, communityInfoVisible: o } = this.state,
            c = n.id === L._ ? d.j : d.E;
        return (0, i.jsxs)(O.Z, {
            header: (0, i.jsx)(u.ZP, {
                guild: n,
                controller: r,
                renderBanner: s,
                bannerVisible: a,
                className: P.guildHeader,
                headerClassName: P.guildHeaderInner,
                onMouseDown: e,
                disableBannerAnimation: !1,
                communityInfoVisible: o,
                children: (0, i.jsx)(l.Popout, {
                    position: 'right',
                    renderPopout: this.renderSettings,
                    children: (e) =>
                        (0, i.jsx)(T.ZP.Icon, {
                            icon: l.SettingsIcon,
                            label: j.intl.string(j.t['3D5yo6']),
                            ...e
                        })
                })
            }),
            children: [
                (0, i.jsx)('div', {
                    className: P.channelList,
                    children: (0, i.jsx)(c, {
                        ...t,
                        guild: n,
                        disableManageChannels: !0,
                        onScroll: null != n && null != n.banner ? this.handleScroll : null
                    })
                }),
                (0, i.jsx)('section', {
                    className: P.panels,
                    'aria-label': j.intl.string(j.t.StREWF),
                    children: (0, i.jsx)(h.Z, { guildId: n.id })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            R(this, 'state', {
                controller: new s.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1
            }),
            R(this, 'handleScroll', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function D(e) {
    var t;
    let { guildId: n } = e,
        r = (0, a.e7)([x.Z], () => x.Z.getGuild(n)),
        s = (0, a.e7)([E.ZP], () => E.ZP.getChannels(n)),
        l = (0, a.e7)([v.Z], () => v.Z.getCategories(n)),
        { mutedChannels: d, collapseMuted: u } = (0, a.cj)([y.ZP], () => ({
            mutedChannels: y.ZP.getMutedChannels(n),
            collapseMuted: y.ZP.isGuildCollapsed(n)
        })),
        h = (0, a.e7)([N.ZP], () => N.ZP.getVoiceStates(n)),
        T = (0, a.e7)([g.Z], () => g.Z.getCollapsed()),
        { scrollTo: b } = (0, a.e7)([m.Z], () => m.Z.getGuildDimensions(n)),
        O = (0, p.Z)((e) => {
            let { channelId: t } = e;
            return t;
        }),
        L = (0, a.e7)([C.Z], () => C.Z.getVoiceChannelId()),
        j = (0, a.e7)([Z.Z], () => Z.Z.getGuildVersion(n)),
        P = (0, a.e7)([f.Z], () => f.Z.version),
        R = (0, a.e7)([_.default], () => _.default.getGuildChangeSentinel(n)),
        w = (0, o.QN)(null == r ? void 0 : r.id),
        D = (0, c.gM)(null == r ? void 0 : r.id),
        k = null !== (t = null == r ? void 0 : r.hasFeature(A.oNc.COMMUNITY)) && void 0 !== t && t,
        z = (0, a.e7)([I.Z], () => I.Z.getChannelId()),
        V = (0, a.e7)([S.Z], () => S.Z.desyncedVoiceStatesCount);
    return (0, i.jsx)(M, {
        guildId: n,
        guild: r,
        channels: s,
        categories: l,
        mutedChannels: d,
        scrollToChannel: b,
        selectedChannelId: O,
        selectedVoiceChannelId: L,
        voiceStates: h,
        rtcConnectedChannelId: z,
        rtcDesyncedVoiceStatesCount: V,
        collapsedChannels: T,
        collapseMuted: u,
        guildReadStateSentinel: R,
        permissionVersion: j,
        categoryCollapseVersion: P,
        embeddedAppsByChannel: w,
        activeEventsByChannel: D,
        showNewUnreadsBar: k,
        optInEnabled: !1
    });
}
